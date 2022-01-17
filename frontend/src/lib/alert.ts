import Swal from "sweetalert2"

export const message = (error: string) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })
    Toast.fire({
        icon: 'error',
        title: error
    })

    return Toast
}