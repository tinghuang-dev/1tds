export default function getMessage(errorMessageList) {
  return errorMessageList.find(({ error }) => error)?.message;
}
