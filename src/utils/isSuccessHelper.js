export function isSuccess(status) {
  if (status === null) {
    return "UNKNOWN";
  }
  return status ? "SUCCESS" : "FAILURE";
}
