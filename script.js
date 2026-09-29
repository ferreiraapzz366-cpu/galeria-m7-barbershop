const telefoneBarbearia = "554197445286";


function agendar(servico) {

    const mensagem =
        `Olá! Vim pelo site da A Galeria M7 Barbershop e gostaria de agendar ${servico}. Quais horários vocês têm disponíveis?`;

    const link =
        `https://wa.me/${telefoneBarbearia}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
}


// ===============================
// HEADER AO ROLAR
// ===============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("ativo");
    } else {
        header.classList.remove("ativo");
    }

});


// ===============================
// MENU MOBILE
// ===============================

const menuMobile = document.getElementById("menuMobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", () => {

    menu.classList.toggle("aberto");

});


document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("aberto");

    });

});


// ===============================
// ANIMAÇÃO AO ROLAR
// ===============================

const elementosAnimados = document.querySelectorAll(
    ".sobre-conteudo, .sobre-imagem, .card-servico, .diferencial, .foto, .localizacao-info, .mapa-placeholder"
);


elementosAnimados.forEach(elemento => {

    elemento.classList.add("fade");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("aparecer");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementosAnimados.forEach(elemento => {

    observer.observe(elemento);

});