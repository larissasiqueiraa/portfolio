import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { contact, copy, languages, projects } from './content.mjs';

const root = new URL('../', import.meta.url);
const pages = { home: 'index.html', projects: 'projetos.html', contact: 'contato.html' };
const arrow = '<span aria-hidden="true">↗</span>';
const forward = '<span aria-hidden="true">→</span>';

function escape(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function preview(project, base, priority = 'lazy') {
  if (project.id === 'matriz') {
    return `<div class="project-image project-image--matriz" aria-hidden="true">
        <div class="matrix-window">
          <div class="matrix-side"><i></i><i></i><i></i><i></i></div>
          <div class="matrix-content">
            <div class="matrix-top"><i></i><i></i></div>
            <div class="matrix-tiles"><i></i><i></i><i></i></div>
            <div class="matrix-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <div class="matrix-table"><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>`;
  }
  if (project.id === 'fnc') {
    return `<div class="project-image project-image--fnc" aria-hidden="true">
        <div class="payment-art"><span class="payment-mark">FNC</span><i></i><i></i><span class="payment-check">✓</span></div>
      </div>`;
  }
  return `<div class="project-image project-image--${project.id}">
        <img src="${base}assets/img/${project.image}" alt="" width="${project.width}" height="${project.height}" loading="${priority}" decoding="async">
      </div>`;
}

function tags(project) {
  return `<ul class="tags">${project.tags.map((tag) => `<li>${escape(tag)}</li>`).join('')}</ul>`;
}

function projectLink(project, work) {
  if (!project.href) return '';
  return `<a class="text-link" href="${escape(project.href)}" target="_blank" rel="noopener noreferrer">${work.website} ${arrow}<span class="sr-only"> · ${escape(project.name)}</span></a>`;
}

function whatsappLink(message) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

function card(project, locale, base, onHome) {
  const [category, description] = project[locale];
  const { work } = copy[locale];
  const heading = onHome ? 'h3' : 'h2';
  return `<article id="${project.id}" class="project-card">
      ${preview(project, base)}
      <div class="project-card-body">
        <p class="eyebrow">${category}</p>
        <${heading}>${escape(project.name)}</${heading}>
        <p>${description}</p>
        ${tags(project)}
        ${onHome
          ? `<a class="text-link" href="${pages.projects}#${project.id}">${work.detail} ${forward}<span class="sr-only"> · ${escape(project.name)}</span></a>`
          : projectLink(project, work)}
      </div>
    </article>`;
}

function callout(t) {
  return `<section class="callout wrap">
    <div><h2>${t.callout.title}</h2><p>${t.callout.text}</p></div>
    <a class="button button--lime" href="${pages.contact}">${t.callout.action} ${arrow}</a>
  </section>`;
}

function homepage(t, locale, base) {
  const [featured, ...rest] = projects;
  const [category] = featured[locale];
  return `<section class="hero wrap" id="inicio">
    <div class="hero-copy">
      <p class="eyebrow role"><span aria-hidden="true"></span>${t.role}</p>
      <h1>${t.hero.title} <em>${t.hero.accent}</em></h1>
      <p class="hero-intro">${t.hero.intro}</p>
      <div class="hero-actions">
        <a class="button" href="#projetos">${t.hero.projects} <span aria-hidden="true">↓</span></a>
        <a class="text-link" href="${pages.contact}">${t.hero.contact} ${arrow}</a>
      </div>
    </div>
    <a class="hero-feature" href="${pages.projects}#${featured.id}" aria-label="${t.hero.project} · ${escape(featured.name)}">
      <span class="feature-label"><span aria-hidden="true"></span>${t.hero.featured}</span>
      ${preview(featured, base, 'eager')}
      <span class="feature-caption">
        <span><span class="feature-name">${escape(featured.name)}</span><span class="feature-category">${category}</span></span>
        <span class="feature-arrow" aria-hidden="true">↗</span>
      </span>
    </a>
  </section>
  <section class="work-section wrap" id="projetos" aria-labelledby="work-title">
    <div class="section-heading">
      <h2 id="work-title">${t.work.title}</h2>
      <a class="text-link" href="${pages.projects}">${t.work.all} ${forward}</a>
    </div>
    <div class="project-grid project-grid--home">
    ${rest.slice(0, 3).map((project) => card(project, locale, base, true)).join('\n    ')}
    </div>
  </section>
  <section class="about wrap" id="sobre" aria-labelledby="about-title">
    <div class="about-intro">
      <h2 id="about-title">${t.about.title}</h2>
      <p>${t.about.intro}</p>
    </div>
    <div id="servicos" class="services">
      <h3 class="eyebrow">${t.about.services}</h3>
      <ul>${t.about.areas.map(([title, description]) => `<li><h4>${title}</h4><p>${description}</p></li>`).join('')}</ul>
    </div>
  </section>
  ${callout(t)}`;
}

function projectsPage(t, locale, base) {
  const [featured, ...rest] = projects;
  const [category, description] = featured[locale];
  return `<header class="page-heading wrap">
    <h1>${t.work.heading} <em>${t.work.accent}</em></h1>
    <p>${t.work.intro}</p>
  </header>
  <section class="project-list wrap" aria-label="${t.nav.projects}">
    <article id="${featured.id}" class="featured-project project-card">
      ${preview(featured, base, 'eager')}
      <div class="project-card-body">
        <p class="eyebrow">${category}</p>
        <h2>${escape(featured.name)}</h2>
        <p>${description}</p>
        ${tags(featured)}${featured.href ? `\n        ${projectLink(featured, t.work)}` : ''}
      </div>
    </article>
    <div class="project-grid project-grid--list">
    ${rest.map((project) => card(project, locale, base, false)).join('\n    ')}
    </div>
  </section>
  ${callout(t)}`;
}

function contactPage(t) {
  const c = t.contact;
  const whatsapp = whatsappLink(c.whatsappMessage);
  return `<header class="page-heading wrap">
    <h1>${c.title ? `${c.title} ` : ''}<em>${c.accent}</em></h1>
    <p>${c.intro}</p>
  </header>
  <div class="contact-grid wrap">
    <section class="contact-form-panel">
      <h2>${c.form}</h2>
      <form id="contact-form" action="${contact.form}" method="post"
        data-sending="${escape(c.sending)}" data-success="${escape(c.success)}" data-error="${escape(c.error)}"
        data-offline="${escape(c.offline)}" data-required="${escape(c.required)}" data-invalid-email="${escape(c.invalidEmail)}">
        <input type="hidden" name="_subject" value="${escape(c.subject)}">
        <div class="form-fields">
          <div class="form-field">
            <label for="nome">${c.name}</label>
            <input id="nome" name="nome" autocomplete="name" placeholder="${escape(c.nameHint)}" required>
          </div>
          <div class="form-field">
            <label for="email">${c.email}</label>
            <input id="email" name="email" type="email" autocomplete="email" placeholder="${escape(c.emailHint)}" required>
          </div>
          <div class="form-field form-field--wide">
            <label for="empresa">${c.company} <span>(${c.optional})</span></label>
            <input id="empresa" name="empresa" autocomplete="organization" placeholder="${escape(c.companyHint)}">
          </div>
          <div class="form-field form-field--wide">
            <label for="mensagem">${c.message}</label>
            <textarea id="mensagem" name="mensagem" rows="5" placeholder="${escape(c.messageHint)}" required></textarea>
          </div>
        </div>
        <button class="button" type="submit"><span data-submit-label>${c.send}</span> ${arrow}</button>
        <p class="form-status" role="status" aria-live="polite" aria-atomic="true"></p>
      </form>
    </section>
    <aside class="contact-direct">
      <h2>${c.direct}</h2>
      <ul>
        <li><a href="mailto:${contact.email}"><span>${c.email}<small>${contact.email}</small></span> ${arrow}</a></li>
        <li><a href="${whatsapp}" target="_blank" rel="noopener noreferrer"><span>WhatsApp<small>${c.whatsapp}</small></span> ${arrow}</a></li>
        <li><a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span> ${arrow}</a></li>
      </ul>
    </aside>
  </div>`;
}

function renderPage(page, locale) {
  const language = languages[locale];
  const base = language.route ? '../' : './';
  const t = copy[locale];
  const [title, description] = t.meta[page];
  const alternates = Object.values(languages).map(({ lang, route }) =>
    `<link rel="alternate" hreflang="${lang}" href="${base}${route}${pages[page]}">`);
  const navigation = [
    ['home', pages.home], ['projects', pages.projects], ['about', `${pages.home}#sobre`], ['contact', pages.contact],
  ];
  const main = { home: homepage, projects: projectsPage, contact: contactPage }[page](t, locale, base);
  return `<!doctype html>
<html lang="${language.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="google-site-verification" content="0zKNQRGImhDc21jaoIME84ivaAds6Zmp0TI___X3YVc">
  <meta name="description" content="${escape(description)}">
  <meta name="theme-color" content="#f5f3eb">
  <title>${escape(title)}</title>
  ${alternates.join('\n  ')}
  <link rel="alternate" hreflang="x-default" href="${base}${pages[page]}">
  <link rel="icon" type="image/png" sizes="64x64" href="${base}assets/img/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&amp;family=Manrope:wght@400..800&amp;display=swap">
  <link rel="stylesheet" href="${base}assets/css/main.css">
  <script src="${base}assets/js/script.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#conteudo">${t.skip}</a>
  <header class="site-header">
    <div class="topbar wrap">
      <a class="brand" href="${pages.home}"><span class="brand-mark" aria-hidden="true">LS<span>.</span></span> Larissa Siqueira</a>
      <nav class="main-nav" aria-label="${t.navigation}">
        ${navigation.map(([key, href]) => `<a href="${href}"${page === key ? ' aria-current="page"' : ''}>${t.nav[key]}</a>`).join('\n        ')}
      </nav>
      <nav class="languages" aria-label="${t.language}">
        ${Object.entries(languages).map(([key, { lang, label, code, route }]) =>
          `<a href="${base}${route}${pages[page]}" hreflang="${lang}" lang="${lang}" aria-label="${label}" title="${label}"${key === locale ? ' aria-current="true"' : ''}><span class="flag flag--${key}" aria-hidden="true"></span><span aria-hidden="true">${code}</span></a>`).join('\n        ')}
      </nav>
    </div>
  </header>
  <main id="conteudo" tabindex="-1" class="page page--${page}">
  ${main}
  </main>
  <footer class="site-footer wrap">
    <p>© ${new Date().getUTCFullYear()} Larissa Siqueira</p>
    <div class="footer-links">
      <a href="mailto:${contact.email}">${t.contact.email} ${arrow}</a>
      <a href="${whatsappLink(t.contact.whatsappMessage)}" target="_blank" rel="noopener noreferrer">WhatsApp ${arrow}</a>
      <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ${arrow}</a>
    </div>
  </footer>
</body>
</html>
`;
}

for (const [locale, { route }] of Object.entries(languages)) {
  for (const [page, filename] of Object.entries(pages)) {
    const target = new URL(`${route}${filename}`, root);
    await mkdir(dirname(fileURLToPath(target)), { recursive: true });
    await writeFile(target, renderPage(page, locale));
  }
}
