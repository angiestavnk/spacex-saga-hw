export function dateFormatter(timestamp) {
  let date = new Date(timestamp * 1000).toLocaleString();
  return date;
}
