export const validation = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Please fill this field';
  }
  if (!values.password) {
    errors.password = 'Please fill this field';
  }
  return errors;
}
