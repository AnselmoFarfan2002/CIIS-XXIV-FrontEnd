export const FromData2Json = (formData) => {
  const json = {};
  for (const entry of formData.entries()) {
    const [name, value] = entry;
    json[name] = value;
  }
  return json;
};
