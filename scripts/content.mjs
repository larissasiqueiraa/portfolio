export const languages = {
  pt: { lang: 'pt-BR', label: 'Português (Brasil)', code: 'PT', route: '' },
  en: { lang: 'en', label: 'English', code: 'EN', route: 'en/' },
  es: { lang: 'es', label: 'Español', code: 'ES', route: 'es/' },
};

export const contact = {
  email: 'larissasiqueira38@gmail.com',
  whatsapp: '5548984243166',
  linkedin: 'https://linkedin.com/in/larissa-siqueiraa/',
  form: 'https://formspree.io/f/xpqodvrk',
};

// The first project is featured on the homepage. The others follow in this order.
export const projects = [
  {
    id: 'matriz', name: 'Matriz Licitações',
    tags: ['React', 'Node.js', 'MySQL'],
    pt: ['Plataforma de licitações', 'Uma plataforma para buscar licitações em portais públicos, analisar editais e acompanhar as oportunidades selecionadas em um só lugar.'],
    en: ['Public procurement platform', 'A platform for finding tenders on public portals, reviewing tender documents, and tracking selected opportunities in one place.'],
    es: ['Plataforma de contratación pública', 'Una plataforma para buscar licitaciones en portales públicos, revisar pliegos y hacer seguimiento de las oportunidades seleccionadas en un solo lugar.'],
  },
  {
    id: 'fnc', name: 'Federação Náutica Catarinense',
    href: 'https://velasc.org.br/', tags: ['PHP', 'Asaas', 'Pix'],
    pt: ['Site e integração de pagamento', 'Na área do atleta, a filiação gera uma cobrança de anuidade pelo Asaas. A confirmação do pagamento atualiza a situação da filiação.'],
    en: ['Website and payment integration', 'In the athlete portal, membership registration generates an annual fee through Asaas. Payment confirmation updates the membership status.'],
    es: ['Sitio web e integración de pagos', 'En el área del deportista, la afiliación genera un cobro anual mediante Asaas. La confirmación del pago actualiza el estado de la afiliación.'],
  },
  {
    id: 'enger', name: 'ENGER Engenharia', image: 'enger.webp', width: 1100, height: 552,
    href: 'https://www.engenhariaenger.com.br/',
    tags: ['PHP', 'Bootstrap'],
    pt: ['Site institucional', 'Um site que apresenta os serviços de engenharia, reúne os projetos da empresa e facilita o primeiro contato.'],
    en: ['Company website', 'A website that explains the firm’s engineering services, showcases its projects, and makes it easy to get in touch.'],
    es: ['Sitio corporativo', 'Un sitio que presenta los servicios de ingeniería, reúne los proyectos de la empresa y facilita el primer contacto.'],
  },
  {
    id: 'de-olho-na-agua', name: 'De Olho na Água', image: 'de-olho-na-agua.webp', width: 1100, height: 541,
    href: 'https://www.deolhonaagua.eco.br/portal/',
    tags: ['HTML', 'CSS', 'PHP'],
    pt: ['Portal de monitoramento', 'Um portal para a população registrar ocorrências de abastecimento e saneamento, anexar imagens e consultar orientações.'],
    en: ['Monitoring portal', 'A portal where residents can report water supply and sanitation issues, attach images, and find guidance.'],
    es: ['Portal de monitoreo', 'Un portal para reportar problemas de abastecimiento y saneamiento, adjuntar imágenes y consultar orientaciones.'],
  },
];

export const copy = {
  pt: {
    nav: { home: 'Início', projects: 'Projetos', about: 'Sobre', contact: 'Contato' },
    navigation: 'Navegação principal', language: 'Idioma do site', skip: 'Pular para o conteúdo',
    role: 'Desenvolvedora web',
    hero: {
      title: 'Sites e sistemas', accent: 'para pessoas.',
      intro: 'Sou Larissa Siqueira. Desenvolvo sites e sistemas web para apresentar serviços, organizar informações e levar processos como inscrições e pagamentos para o digital.',
      projects: 'Conhecer projetos', contact: 'Fale comigo', featured: 'Em destaque',
      project: 'Conhecer o projeto',
    },
    work: {
      title: 'Projetos selecionados', heading: 'Projetos', accent: 'selecionados.', all: 'Ver todos os projetos',
      intro: 'Busca de licitações, pagamento de anuidades, monitoramento cidadão e sites institucionais.',
      detail: 'Detalhes do projeto', website: 'Visitar site',
    },
    about: {
      title: 'Sobre mim',
      intro: 'Sou desenvolvedora web. Gosto de entender o que a pessoa precisa fazer em uma página antes de decidir como ela vai funcionar. Isso pode ser encontrar um serviço, registrar uma ocorrência ou acompanhar informações em um mapa.',
      services: 'Como posso ajudar',
      areas: [
        ['Sites institucionais e landing pages', 'Páginas para apresentar serviços, projetos ou campanhas e facilitar o contato.'],
        ['Aplicações e integrações', 'Interfaces para busca, formulários, mapas e fluxos de atendimento.'],
        ['Melhorias em sites existentes', 'Ajustes de navegação, responsividade, desempenho e manutenção.'],
      ],
    },
    callout: { title: 'Tem um projeto em mente?', text: 'Me conte o que você quer criar ou melhorar.', action: 'Vamos conversar' },
    contact: {
      title: 'Vamos', accent: 'conversar?',
      intro: 'Me conte o que você quer colocar no ar, melhorar ou automatizar. Se já tiver um site ou uma referência, pode incluir o link na mensagem.',
      form: 'Envie uma mensagem', name: 'Nome', email: 'E-mail', company: 'Empresa', optional: 'opcional', message: 'Mensagem',
      nameHint: 'Seu nome', emailHint: 'voce@exemplo.com', companyHint: 'Nome da empresa', messageHint: 'O que você quer resolver com o projeto?',
      send: 'Enviar mensagem', sending: 'Enviando…', success: 'Mensagem enviada. Vou responder pelo e-mail informado.',
      error: 'Não foi possível enviar. Tente novamente ou fale comigo por e-mail.', offline: 'Falha na conexão. Confira sua internet e tente novamente.',
      required: 'Preencha este campo.', invalidEmail: 'Informe um e-mail válido.',
      direct: 'Outros canais', whatsapp: 'Prefere conversar por mensagem?',
      subject: 'Novo contato pelo portfólio', whatsappMessage: 'Olá, Larissa! Vi seu portfólio e gostaria de conversar sobre um projeto.',
    },
    meta: {
      home: ['Larissa Siqueira — Desenvolvimento web', 'Portfólio de Larissa Siqueira. Sites institucionais, aplicações web e integrações.'],
      projects: ['Projetos — Larissa Siqueira', 'Conheça aplicações, sites e portais desenvolvidos por Larissa Siqueira.'],
      contact: ['Contato — Larissa Siqueira', 'Entre em contato com Larissa Siqueira para conversar sobre sites, aplicações web e integrações.'],
    },
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', about: 'About', contact: 'Contact' },
    navigation: 'Main navigation', language: 'Site language', skip: 'Skip to content',
    role: 'Web developer',
    hero: {
      title: 'Websites and apps', accent: 'for people.',
      intro: 'I’m Larissa Siqueira. I build websites and web apps that showcase services, organize information, and bring processes like registration and payments online.',
      projects: 'Explore my work', contact: 'Get in touch', featured: 'Featured project', project: 'Explore the project',
    },
    work: {
      title: 'Selected work', heading: 'Selected', accent: 'work.', all: 'View all projects',
      intro: 'Public tender search, annual membership payments, citizen monitoring, and company websites.',
      detail: 'Project details', website: 'Visit website',
    },
    about: {
      title: 'About me',
      intro: 'I’m a web developer. I like to understand what someone needs to do on a page before I decide how it should work. That might mean finding a service, reporting an issue, or checking updates on a map.',
      services: 'How I can help',
      areas: [
        ['Company websites and landing pages', 'Pages that showcase services, projects, or campaigns and make it easy to get in touch.'],
        ['Web apps and integrations', 'Interfaces for search, forms, maps, and customer support.'],
        ['Improvements to existing sites', 'Updates to navigation, mobile layouts, performance, and ongoing maintenance.'],
      ],
    },
    callout: { title: 'Have a project in mind?', text: 'Tell me what you’d like to build or improve.', action: 'Let’s talk' },
    contact: {
      title: 'Let’s', accent: 'talk.',
      intro: 'Tell me what you’d like to launch, improve, or automate. If you have a website or a reference, feel free to include a link.',
      form: 'Send a message', name: 'Name', email: 'Email', company: 'Company', optional: 'optional', message: 'Message',
      nameHint: 'Your name', emailHint: 'you@example.com', companyHint: 'Company name', messageHint: 'What would you like the project to do?',
      send: 'Send message', sending: 'Sending…', success: 'Message sent. I’ll reply to the email address you provided.',
      error: 'Your message couldn’t be sent. Try again or contact me by email.', offline: 'Connection failed. Check your internet connection and try again.',
      required: 'Fill in this field.', invalidEmail: 'Enter a valid email address.',
      direct: 'Other ways to reach me', whatsapp: 'Prefer to chat?',
      subject: 'New message from the portfolio', whatsappMessage: 'Hi Larissa! I saw your portfolio and would like to talk about a project.',
    },
    meta: {
      home: ['Larissa Siqueira — Web Development', 'Larissa Siqueira’s portfolio. Company websites, web applications, and integrations.'],
      projects: ['Projects — Larissa Siqueira', 'Explore apps, websites, and portals developed by Larissa Siqueira.'],
      contact: ['Contact — Larissa Siqueira', 'Contact Larissa Siqueira about websites, web applications, and integrations.'],
    },
  },
  es: {
    nav: { home: 'Inicio', projects: 'Proyectos', about: 'Sobre mí', contact: 'Contacto' },
    navigation: 'Navegación principal', language: 'Idioma del sitio', skip: 'Saltar al contenido',
    role: 'Desarrolladora web',
    hero: {
      title: 'Sitios y aplicaciones', accent: 'para personas.',
      intro: 'Soy Larissa Siqueira. Desarrollo sitios y aplicaciones web para presentar servicios, organizar información y llevar a internet procesos como las inscripciones y los pagos.',
      projects: 'Ver proyectos', contact: 'Contáctame', featured: 'Proyecto destacado', project: 'Conocer el proyecto',
    },
    work: {
      title: 'Proyectos seleccionados', heading: 'Proyectos', accent: 'seleccionados.', all: 'Ver todos los proyectos',
      intro: 'Búsqueda de licitaciones, pagos de cuotas anuales, monitoreo ciudadano y sitios corporativos.',
      detail: 'Detalles del proyecto', website: 'Visitar sitio',
    },
    about: {
      title: 'Sobre mí',
      intro: 'Soy desarrolladora web. Me gusta entender qué necesita hacer una persona en una página antes de decidir cómo va a funcionar. Puede ser encontrar un servicio, reportar un problema o consultar novedades en un mapa.',
      services: 'Cómo puedo ayudarte',
      areas: [
        ['Sitios corporativos y páginas de aterrizaje', 'Páginas para presentar servicios, proyectos o campañas y facilitar el contacto.'],
        ['Aplicaciones e integraciones', 'Interfaces para búsquedas, formularios, mapas y flujos de atención.'],
        ['Mejoras en sitios existentes', 'Ajustes de navegación, diseño adaptable, rendimiento y mantenimiento.'],
      ],
    },
    callout: { title: '¿Tienes un proyecto en mente?', text: 'Cuéntame qué quieres crear o mejorar.', action: 'Hablemos' },
    contact: {
      title: '', accent: 'Hablemos.',
      intro: 'Cuéntame qué quieres lanzar, mejorar o automatizar. Si ya tienes un sitio o una referencia, puedes incluir el enlace en el mensaje.',
      form: 'Envía un mensaje', name: 'Nombre', email: 'Correo electrónico', company: 'Empresa', optional: 'opcional', message: 'Mensaje',
      nameHint: 'Tu nombre', emailHint: 'tu@ejemplo.com', companyHint: 'Nombre de la empresa', messageHint: '¿Qué quieres resolver con el proyecto?',
      send: 'Enviar mensaje', sending: 'Enviando…', success: 'Mensaje enviado. Responderé al correo que indicaste.',
      error: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por correo.', offline: 'Falló la conexión. Comprueba tu conexión a internet y vuelve a intentarlo.',
      required: 'Completa este campo.', invalidEmail: 'Ingresa un correo electrónico válido.',
      direct: 'Otros canales', whatsapp: '¿Prefieres conversar por mensaje?',
      subject: 'Nuevo contacto desde el portafolio', whatsappMessage: '¡Hola, Larissa! Vi tu portafolio y me gustaría hablar sobre un proyecto.',
    },
    meta: {
      home: ['Larissa Siqueira — Desarrollo web', 'Portafolio de Larissa Siqueira. Sitios corporativos, aplicaciones web e integraciones.'],
      projects: ['Proyectos — Larissa Siqueira', 'Conoce aplicaciones, sitios y portales desarrollados por Larissa Siqueira.'],
      contact: ['Contacto — Larissa Siqueira', 'Contacta con Larissa Siqueira para conversar sobre sitios, aplicaciones web e integraciones.'],
    },
  },
};
