const featuresList = [
  {
    icon: "images/controle-de-video-game (1).svg",
    title: "Gamificação por pontos:",
    description:
      "Os usuários ganham pontos ao atenderem a certos requisitos que podem ser trocados por benefícios a combinar com a academia",
  },

  {
    icon: "images/dieta.svg",
    title: "Monitoramento de frequência:",
    description:
      "Acompanha a presença dos alunos na academia.",
  },

  {
    icon: "images/motivacao.svg",
    title: "Motivação diária:",
    description:
      "Oferece incentivos e mensagens motivacionais para manter os usuários engajados.",
  },

  {
    icon: "images/progress-icon.svg",
    title: "Acompanhamento de metas:",
    description:
      "Permite estabelecer objetivos de treino e acompanhar o progresso ao longo do tempo.",
  },

  {
    icon: "images/recompensas.svg",
    title: "Recompensas personalizadas:",
    description:
      "Oferece benefícios exclusivos com base nas ofertas das academias",
  },

  {
    icon: "images/matricular.svg",
    title: "Matrícula de alunos:",
    description:
      "Permite aos proprietários de academias gerenciar aadmissão de novos alunos.",
  },
];

const testimonialsList = [
  {
    review:
      "Seu aplicativo oferece uma série de recursos úteis, como monitoramento de frequência, motivação diária e ideias de treinos personalizados, que certamente ajudariam a manter meus clientes comprometidos com seus objetivos de condicionamento físico. Além disso, a funcionalidade de matrícula de alunos e o controle de frequência me ajudariam a gerenciar melhor minha academia e a oferecer um serviço mais eficiente.!",
    image: "images/testimonial1.png",
    name: "Waldehany bezerra",
    designation: "Dona de academia, Energy Fitness",
  },
  {
    review:
      " Acho uma opção bastante viável para facilitar no gerenciamento da organização da própria academia. Tudo seria organizado e evitaria bastantes incidentes; como treinos indevidos e afins, associado ao fato de que todos os alunos teriam acesso aos protocolos e findaria por eliminar a dependência do aluno em relação ao personal , no quesito de “ficar no pé” do instrutor da academia para prescrição de exercícios.!",
    image: "images/testimonial2.png",
    name: "Pedro Afonso",
    designation: "Bodybuilder e Personal treiner, Academia Ps-fit e Fisioform",
  },
  {
    review:
      "A proposta de um sistema de pontos parece divertida e poderia realmente tornar meus treinos mais envolventes. Além disso, ter acesso a sugestões de treinos personalizados e um jeito fácil de monitorar minha frequência na academia seria muito conveniente. No geral, acho que seu aplicativo tem potencial para me ajudar a manter meu compromisso com a academia e até mesmo a alcançar novos objetivos fitness. Com certeza eu experimentaria usar!.",
    image: "images/testimonial3.png",
    name: "Felipe Leal",
    designation: "Usuario de academia e investidor do ramo de tecnologia",
  },
];



const featuresContent = document.querySelector("#features .content");
const testimonialCard = document.querySelector(
  "#testimonials .testimonial-card"
);
const prevBtn = document.querySelector("#testimonials .prev-btn");
const nextBtn = document.querySelector("#testimonials .next-btn");
const pricingContent = document.querySelector("#pricing .content");
const menuIcon = document.querySelector(".menu-icon");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
let currentTestimonialIndex = 0;

const displayFeatures = () => {
  featuresList.forEach((f) => {
    const html = `<div class="icon">
        <img src="${f.icon}" alt="" />
      </div>
      <h3>${f.title}</h3>
      <p>
        ${f.description}
      </p>`;

    const featureCard = document.createElement("div");
    featureCard.classList.add("feature-card");
    featureCard.innerHTML = html;

    featuresContent.appendChild(featureCard);
  });
};

displayFeatures();

const displayTestimonial = () => {
  const html = `<span class="quote-icon">
  <img src="images/quote-icon.svg" alt="" />
</span>

<p class="review">
 ${testimonialsList[currentTestimonialIndex].review}
</p>

<div class="reviewer-info">
  <div class="image">
    <img src="${testimonialsList[currentTestimonialIndex].image}" alt="" />
  </div>

  <div class="details">
    <div class="name">${testimonialsList[currentTestimonialIndex].name}</div>
    <div class="designation">${testimonialsList[currentTestimonialIndex].designation}</div>
  </div>
</div>`;

  testimonialCard.innerHTML = html;
  testimonialCard.classList.add("active");
};

displayTestimonial();

nextBtn.addEventListener("click", () => {
  testimonialCard.classList.remove("active");

  setTimeout(() => {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= testimonialsList.length) {
      currentTestimonialIndex = 0;
    }
    displayTestimonial();
  }, 200);
});

prevBtn.addEventListener("click", () => {
  testimonialCard.classList.remove("active");

  setTimeout(() => {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
      currentTestimonialIndex = testimonialsList.length - 1;
    }
    displayTestimonial();
  }, 200);
});

menuIcon.addEventListener("click", () => {
  mobileNavMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offset = targetElement.offsetTop - 60;
      window.scrollTo({ top: offset });
    }

    mobileNavMenu.classList.remove("active");
  });
});
