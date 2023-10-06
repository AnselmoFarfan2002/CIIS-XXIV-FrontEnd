async function handleResponse(res) {
  if (res.ok) return res.json();
  else {
    let error = await res.json();
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
