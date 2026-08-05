// Atualiza automaticamente o ano do footer
const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML = `© ${new Date().getFullYear()} AGS Gestão Comercial • Todos os direitos reservados.`;
}

// Destaca a página atual no menu
const links = document.querySelectorAll(".navbar-nav .nav-link");
const paginaAtual = window.location.pathname.split("/").pop();

links.forEach(link => {
    const href = link.getAttribute("href");

    if (href === paginaAtual || (paginaAtual === "" && href === "index.html")) {
        link.classList.add("active");
    }
});

// Navbar muda ao rolar a página
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
});

// Animação ao aparecer na tela
const elementos = document.querySelectorAll(".card, .d-flex, img");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});