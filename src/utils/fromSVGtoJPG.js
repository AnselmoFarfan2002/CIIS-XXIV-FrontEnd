export default function fromSVGtoJPG(query, canvg = () => {}) {
  // Obtén una referencia al elemento SVG
  const svgElement = document.querySelector(query);
  console.log(svgElement)

  // Crea un lienzo HTML
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Establece las dimensiones del lienzo según el tamaño del SVG
  canvas.width = svgElement.width.baseVal.value;
  canvas.height = svgElement.height.baseVal.value;

  // Dibuja el SVG en el lienzo
  canvg(canvas, new XMLSerializer().serializeToString(svgElement));

  // Convierte el lienzo a una imagen JPG
  const imageJpg = canvas.toDataURL("image/jpeg");

  // Crea un enlace de descarga
  const downloadLink = document.createElement("a");
  downloadLink.href = imageJpg;
  downloadLink.download = "imagen.jpg"; // Nombre del archivo sugerido

  // Agrega el enlace al documento y simula un clic para iniciar la descarga
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Elimina el enlace después de la descarga
  document.body.removeChild(downloadLink);
}
