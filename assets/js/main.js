/* ==========================================================================
   Clean Application Script — Saurabh Ranjan Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initContactForm();
});

/* ==========================================================================
   1. Theme Switcher (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      // Moon icon
      themeIcon.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      `;
    } else {
      // Sun icon
      themeIcon.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      `;
    }
  }
}

/* ==========================================================================
   2. Navigation Scroll Spy
   ========================================================================== */
function initNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   3. Contact Dispatch (WhatsApp & Email)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const whatsappBtn = document.getElementById('send-whatsapp-btn');
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');

  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const msgInput = document.getElementById('contact-message');

  function validateInputs() {
    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
    const message = msgInput?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in your name, email, and message.', '#ef4444');
      return null;
    }

    return {
      name,
      email,
      subject: subjectInput?.value.trim() || 'Role Opportunity / Project Inquiry',
      message
    };
  }

  // 1. WhatsApp Button
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const data = validateInputs();
      if (!data) return;

      const formattedText = `Hi Saurabh,\nMy name is *${data.name}* (${data.email}).\n*Subject:* ${data.subject}\n\n*Message:*\n${data.message}`;
      const waUrl = `https://wa.me/917493961242?text=${encodeURIComponent(formattedText)}`;

      showToast('Opening WhatsApp to send your message...', '#22c55e');
      window.open(waUrl, '_blank');
    });
  }

  // 2. Email Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = validateInputs();
    if (!data) return;

    const emailSubject = `[Inquiry] ${data.subject} - from ${data.name}`;
    const emailBody = `Hi Saurabh,\n\n${data.message}\n\n------------------------------\nFrom: ${data.name}\nEmail: ${data.email}`;
    const mailtoUrl = `mailto:ranjansaurabh523@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    showToast('Opening your email client...', '#6366f1');
    window.location.href = mailtoUrl;
  });

  function showToast(message, borderColor = 'var(--accent-primary)') {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.style.borderColor = borderColor;
    toast.classList.add('active');

    setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  }
}
