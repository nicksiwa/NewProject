export const validation = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Please fill this field';
  }
  if (!values.content) {
    errors.content = 'Please fill this field';
  }
  return errors;
}
