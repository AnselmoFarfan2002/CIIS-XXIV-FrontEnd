import Swal from "sweetalert2";
import { FromData2Json } from "./fromData2Json";

async function handleResponse(res) {
  if (res.ok) return res.json();
  else {
    let error = await res.json();
    console.log(error);
    return Promise.reject(error);
  }
}

export function fetchByDNI(dni, save = () => {}, abort = () => {}) {
  fetch(
    `https://api.perudevs.com/api/v1/dni/simple?document=${dni}&key=${"cGVydWRldnMucHJvZHVjdGlvbi5maXRjb2RlcnMuNjUxZWM4ZmViMzEyMDcwMDhlODA5MmM2"}`
  )
    .then(handleResponse)
    .then((data) => {
      if (!data.estado) abort(true);
      abort(false);
      save(data.resultado);
    });
}

export function fetchPost(uri, data, save = () => {}, abort = console.log) {
  fetch(uri, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then(handleResponse)
    .then(save)
    .catch(abort);
}

export function fetchPatch(uri, data, save = () => {}, abort = console.log) {
  fetch(uri, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then(handleResponse)
    .then(save)
    .catch(abort);
}

export function fetchGET(uri, save = console.log, abort = console.log) {
  fetch(uri, { credentials: "include" })
    .then(handleResponse)
    .then(save)
    .catch(abort);
}

export function fetchPostWithFile(
  uri,
  data,
  save = () => {},
  abort = console.log
) {
  // console.log(FromData2Json(data));
  fetch(uri, {
    method: "POST",
    body: data,
    credentials: "include",
  })
    .then(handleResponse)
    .then(save)
    .catch(abort);
}

export function abortFetch(fail = {}) {
  console.log(fail);
  const {
    error = "Ha ocurrido un error",
    reason = "En este momento el servidor no está disponible, inténtelo más tarde",
  } = fail;

  Swal.fire(error, reason, "error");
}
