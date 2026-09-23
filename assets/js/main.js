/* ==========================================================================
   Clean Application Script — Saurabh Ranjan Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initCertificates();
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

/* ==========================================================================
   4. Interactive Certificates Filter & Lightbox Modal
   ========================================================================== */
function initCertificates() {
  const filterBtns = document.querySelectorAll('.cert-filter-btn');
  const certCards = document.querySelectorAll('.cert-card');
  const modal = document.getElementById('cert-lightbox-modal');
  if (!modal) return;

  const modalImg = document.getElementById('cert-modal-img');
  const modalTitle = document.getElementById('cert-modal-title');
  const modalIssuer = document.getElementById('cert-modal-issuer');
  const modalDate = document.getElementById('cert-modal-date');
  const modalVerifyBtn = document.getElementById('cert-modal-verify-btn');
  const modalCloseBtn = document.getElementById('cert-modal-close');

  // Filter Logic
  function applyFilter(filter) {
    certCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(8px)';
        card.style.display = 'none';
      }
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      applyFilter(filter);
    });
  });

  // Apply initial active filter on load (Cloud & DevOps)
  const defaultActiveBtn = document.querySelector('.cert-filter-btn.active') || document.querySelector('.cert-filter-btn[data-filter="cloud"]');
  if (defaultActiveBtn) {
    applyFilter(defaultActiveBtn.getAttribute('data-filter'));
  }

  // Modal Open Logic
  function openModal(data) {
    if (modalImg) modalImg.src = data.img;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalIssuer) modalIssuer.textContent = data.issuer;
    if (modalDate) modalDate.textContent = data.date ? `Issued: ${data.date}` : '';

    if (modalVerifyBtn) {
      if (data.verify && data.verify !== '#') {
        modalVerifyBtn.href = data.verify;
        modalVerifyBtn.style.display = 'inline-flex';
      } else {
        modalVerifyBtn.style.display = 'none';
      }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind Openers
  document.querySelectorAll('[data-action="view-cert"]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const card = trigger.closest('.cert-card');
      if (!card) return;

      const data = {
        img: card.getAttribute('data-img'),
        title: card.getAttribute('data-title'),
        issuer: card.getAttribute('data-issuer'),
        date: card.getAttribute('data-date'),
        verify: card.getAttribute('data-verify')
      };
      openModal(data);
    });
  });

  // Close Events
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
