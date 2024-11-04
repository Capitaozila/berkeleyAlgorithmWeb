import Swal from "sweetalert2";

export function showError(message, duration = 2000) {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: "Erro",
    text: message,
    customClass: {
      popup: "swal2-popup",
      title: "swal2-title",
      content: "swal2-content",
      confirmButton: "swal2-confirm",
      cancelButton: "swal2-cancel",
    },
    showConfirmButton: false,
    timer: duration,
  });
}

export function showSuccess(message) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Sucesso",
    text: message,
    customClass: {
      popup: "swal2-popup",
      title: "swal2-title",
      content: "swal2-content",
      confirmButton: "swal2-confirm",
      cancelButton: "swal2-cancel",
    },
    showConfirmButton: false,
    timer: 1000,
  });
}
