export default function getFormSubmitting(response, { touched, error }) {
  return !response && (touched && !error);
}
