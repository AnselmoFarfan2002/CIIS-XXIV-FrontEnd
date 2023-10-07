import { abortFetch, fetchPostWithFile } from "@/utils/data.fetch";
import { directory } from "@/context/url-context";
import Swal from "sweetalert2";

export function successRegister(data) {
  Swal.fire(
    "Pre inscripción exitosa",
    "Deberá esperar que a que un administrador confirme su inscripción",
    "success"
  );

  setInscriptionCiis(data);
}

export function register(formRef, type, setInscriptionCiis = () => {}) {
  function successRegisterLocal(data) {
    Swal.fire(
      "Pre inscripción exitosa",
      "Deberá esperar que a que un administrador confirme su inscripción",
      "success"
    );

    setInscriptionCiis(data);
  }

  const formData = new FormData(formRef.current);
  fetchPostWithFile(
    directory.inscription.ciis(type),
    formData,
    successRegisterLocal,
    abortFetch
  );
}
