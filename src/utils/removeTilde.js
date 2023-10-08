export default function removeTilde(palabra) {
  const mapaTildes = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ü: "u",
    ñ: "n",
  };

  return palabra.replace(/[áéíóúüñ]/g, (match) => mapaTildes[match] || match);
}
