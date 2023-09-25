export default function capitalizeWords(text = "") {
  text = text.toLocaleLowerCase();
  return text.replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}
