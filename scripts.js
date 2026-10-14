/*localStorage.removeItem("webVisitada");*/

window.addEventListener("load", function () {

    let modal = document.getElementById("modalBenvinguda");
    let botoTancar = document.getElementById("tancarModal");

    if (modal && botoTancar) {
        if (!localStorage.getItem("webVisitada")) {
            modal.style.display = "flex";
            localStorage.setItem("webVisitada", "true");
        }

        botoTancar.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

});

/* GALERIA AMPLIAR IMATGE */

let imatges = document.querySelectorAll(".grid-galeria img, .eventosCarrusel");
let modalImatge = document.getElementById("modalImatge");
let imgGran = document.getElementById("imgGran");
let tancarImatge = document.getElementById("tancarImatge");

imatges.forEach(function (imatge) {
    imatge.addEventListener("click", function () {
        modalImatge.style.display = "flex";
        imgGran.src = this.src;
    });
});

tancarImatge.addEventListener("click", function () {
    modalImatge.style.display = "none";
});

modalImatge.addEventListener("click", function (e) {
    if (e.target === modalImatge) {
        modalImatge.style.display = "none";
    }
});


/*CONTROL FORMULARI*/ 
document.getElementById("formRegistro").addEventListener("submit", function(event) {

    // Obtener valores
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var confirmPassword = document.querySelector('input[name="confirm-password"]').value;

    // Expresión regular para validar email
    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar correo
    if (!emailValido.test(email)) {
        event.preventDefault(); // Evita enviar el formulario
        alert("Introdueix un correu electrònic vàlid");
        return;
    }

    // Validar contraseñas iguales
    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Les contrasenyes no coincideixen");
        return;
    }

});
