document.addEventListener("DOMContentLoaded", function () {

  // =====================
  // FADE-IN
  // =====================
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15
  });

  fadeElements.forEach((el) => fadeObserver.observe(el));


  // =====================
  // REVEAL COM DELAY
  // =====================
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.delay) || 0;

        setTimeout(() => {
          entry.target.classList.add("show");
        }, delay);
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach((el) => {
    revealObserver.observe(el);

    if (el.getBoundingClientRect().top < window.innerHeight) {
      const delay = Number(el.dataset.delay) || 0;

      setTimeout(() => {
        el.classList.add("show");
      }, delay);
    }
  });


  // =====================
  // FORMULÁRIO
  // =====================
  const form = document.getElementById("contact-form");
  const alertBox = document.getElementById("form-alert");
  const button = document.getElementById("form-button");

  if (form && alertBox) {
    form.onsubmit = async function (e) {
      e.preventDefault();
      e.stopPropagation();

      const data = new FormData(form);
      const originalText = button ? button.textContent : "";

      if (button) {
        button.disabled = true;
        button.textContent = "Enviando...";
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          alertBox.className = "form-alert is-visible success";
          alertBox.textContent = "Mensagem enviada com sucesso! Entrarei em contato em breve.";
          form.reset();
        } else {
          alertBox.className = "form-alert is-visible error";
          alertBox.textContent = "Erro ao enviar. Tente novamente.";
        }

        alertBox.scrollIntoView({ behavior: "smooth", block: "center" });

      } catch (error) {
        alertBox.className = "form-alert is-visible error";
        alertBox.textContent = "Erro de conexão. Tente novamente.";
        alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = originalText;
        }
      }

      return false;
    };
  }


  // =====================
  // MENU MOBILE
  // =====================
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });
  }

});