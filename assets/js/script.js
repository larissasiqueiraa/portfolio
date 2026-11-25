for (const link of document.querySelectorAll('.languages a')) {
  link.addEventListener('click', () => {
    link.hash = window.location.hash;
  });
}

const form = document.getElementById('contact-form');

if (form) {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  const label = button.querySelector('[data-submit-label]');
  const initialLabel = label.textContent;

  form.addEventListener('invalid', ({ target }) => {
    if (target.validity.valueMissing) target.setCustomValidity(form.dataset.required);
    if (target.validity.typeMismatch) target.setCustomValidity(form.dataset.invalidEmail);
  }, true);

  form.addEventListener('input', ({ target }) => target.setCustomValidity(''));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled) return;

    const payload = new FormData(form);
    button.disabled = true;
    label.textContent = form.dataset.sending;
    status.textContent = '';
    delete status.dataset.state;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        status.textContent = form.dataset.success;
      } else {
        status.dataset.state = 'error';
        status.textContent = form.dataset.error;
      }
    } catch {
      status.dataset.state = 'error';
      status.textContent = form.dataset.offline;
    } finally {
      button.disabled = false;
      label.textContent = initialLabel;
    }
  });
}
