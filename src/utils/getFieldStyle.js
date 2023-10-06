export default function getFieldStyle(form = {}, field = "", helperText = "") {
  if (!form.touched[field] || !form.errors[field]) return { helperText };
  return {
    error: Boolean(form.errors[field]),
    helperText: form.errors[field],
  };
}
