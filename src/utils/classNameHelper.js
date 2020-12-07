import style from "../components/LaunchCard/LaunchCard.module.scss";
export function changeClassName(status) {
  switch (status) {
    case "UNKNOWN":
      return style.launches__items_status_unknown;
    case "SUCCESS":
      return style.launches__items_status_success;
    case "FAILURE":
      return style.launches__items_status_failure;
  }
}
