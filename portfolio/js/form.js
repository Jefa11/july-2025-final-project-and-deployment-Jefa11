function showError(id, message) {
  const el = document.getElementById(id);
  if (el) el.textContent = message || '';
}

function emailValid(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const budget = form.budget.value;
    const message = form.message.value.trim();

    let valid = true;

    if (name.length < 2) { showError('name-error', 'Please enter your name.'); valid = false; }
    else showError('name-error', '');

    if (!emailValid(email)) { showError('email-error', 'Enter a valid email.'); valid = false; }
    else showError('email-error', '');

    if (!budget) { showError('budget-error', 'Select a budget range.'); valid = false; }
    else showError('budget-error', '');

    if (message.length < 20) { showError('message-error', 'Add more detail (min 20 characters).'); valid = false; }
    else showError('message-error', '');

    const status = document.getElementById('form-status');
    if (!valid) {
      status.textContent = 'Please fix the errors above.';
      return;
    }

    // Simulate submission
    status.textContent = 'Sending…';
    setTimeout(() => {
      status.textContent = 'Thanks! Your message has been sent.';
      form.reset();
    }, 800);
  });
}
