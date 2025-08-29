// Script para o menu responsivo e ScrollSpy
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        // Adiciona ou remove a classe 'menu-open' no header
        navbar.classList.toggle('menu-open');
        
        // Atualiza o atributo aria-expanded para acessibilidade
        const isExpanded = navbar.classList.contains('menu-open');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
  
    // ScrollSpy
    function onScroll() {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    }
  
    // Adiciona evento de rolagem
    window.addEventListener("scroll", onScroll);
  
    // Adiciona evento de clique nos links da navbar
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const OFFSET = 80; // Altura da navbar fixa + buffer para evitar conflitos
  
    // Suavizar o scrolling ao clicar em um botão de navegação
    document.querySelectorAll("a.nav-link").forEach(function (link) {
      link.addEventListener("click", function (event) {
        if (this.hash) {
          event.preventDefault();
          const targetElement = document.querySelector(this.hash);
  
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - OFFSET, // Ajuste para compensar a altura da navbar fixa
              behavior: "smooth",
            });
  
            // Atualiza o hash na URL sem recarregar a página
            history.pushState(null, null, this.hash);
          }
        }
      });
    });
  
    // Atualizar as classes 'active' para refletir a área visível da página, exceto na seção "programacao"
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("a.nav-link");
  
    function updateActiveLink() {
      let currentSection = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - OFFSET;
        const sectionHeight = section.offsetHeight;
  
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = `#${section.id}`;
        }
      });
  
      navLinks.forEach((link) => {
  
  
        // Adicionar evento de rolagem para atualizar as classes 'active'
        window.addEventListener("scroll", updateActiveLink);
  
        // Atualizar as classes 'active' ao carregar a página
        updateActiveLink();
  
        // Toggle collapsed class on navbar-toggler
        const navbarToggler = document.querySelector(".navbar-toggler");
        if (navbarToggler) {
          navbarToggler.addEventListener("click", function () {
            this.classList.toggle("collapsed");
          });
        }
  
        // Collapse navbar when clicking on the brand link
        const navbarBrand = document.querySelector("a.navbar-brand");
        if (navbarBrand) {
          navbarBrand.addEventListener("click", function () {
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse && navbarCollapse.classList.contains("show")) {
              navbarCollapse.classList.remove("show");
            }
          });
        }
      });
  
      // Adicionar evento de rolagem para atualizar as classes 'active'
      window.addEventListener("scroll", updateActiveLink);
  
      // Atualizar as classes 'active' ao carregar a página
      updateActiveLink();
  
    }
  });
  