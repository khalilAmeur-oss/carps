/**
 * CARPS International – Premium Landing Page
 * Production-ready vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initQuoteForms();
  initWhatsAppWidget();
  initScrollAnimations();
  initCounters();
  initLanguageSwitcher();
  initCurrentYear();
});

/* =========================================================================
   1. NAVBAR SCROLL EFFECT
   ========================================================================= */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let scrolled = false;
  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;
    if (y > 80 && !scrolled) {
      navbar.classList.add('scrolled');
      scrolled = true;
    } else if (y <= 80 && scrolled) {
      navbar.classList.remove('scrolled');
      scrolled = false;
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
}

/* =========================================================================
   2. MOBILE MENU
   ========================================================================= */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  const body = document.body;

  function openMenu() {
    body.classList.add('menu-open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    // Focus first link
    const firstLink = mobileMenu.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  hamburger.addEventListener('click', () => {
    body.classList.contains('menu-open') ? closeMenu() : openMenu();
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) {
      closeMenu();
      hamburger.focus();
    }
  });
}

/* =========================================================================
   3. SMOOTH SCROLL
   ========================================================================= */
function initSmoothScroll() {
  const navbar = document.getElementById('navbar');

  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      // Close mobile menu if open
      document.body.classList.remove('menu-open');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu) mobileMenu.setAttribute('aria-hidden', 'true');

      const offset = navbar ? navbar.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* =========================================================================
   4. QUOTE FORM VALIDATION & SUBMISSION
   ========================================================================= */
function initQuoteForms() {
  const forms = [
    { form: document.getElementById('heroQuoteForm'), card: document.getElementById('heroQuoteCard'), success: document.getElementById('heroSuccess') },
    { form: document.getElementById('sectionQuoteForm'), card: document.getElementById('sectionQuoteCard'), success: document.getElementById('sectionSuccess') }
  ];

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^[\+\d\s\-\(\)]{6,}$/;

  forms.forEach(({ form, card, success }) => {
    if (!form) return;

    const fields = form.querySelectorAll('.quote-form__input, .quote-form__select');

    // Clear errors on input
    fields.forEach(field => {
      const clearFn = () => {
        field.classList.remove('error');
        const errEl = field.parentElement.querySelector('.quote-form__error');
        if (errEl) { errEl.textContent = ''; errEl.classList.remove('visible'); }
      };
      field.addEventListener('input', clearFn);
      field.addEventListener('change', clearFn);
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let valid = true;
      const data = {};

      fields.forEach(field => {
        const name = field.name;
        const val = field.value.trim();
        data[name] = val;

        const errEl = field.parentElement.querySelector('.quote-form__error');

        // Required
        if (field.required && !val) {
          setError(field, errEl, 'This field is required.');
          valid = false;
          return;
        }

        // Email
        if (field.type === 'email' && val && !emailRe.test(val)) {
          setError(field, errEl, 'Please enter a valid email address.');
          valid = false;
          return;
        }

        // Phone
        if (field.name === 'phone' && val && !phoneRe.test(val)) {
          setError(field, errEl, 'Please enter a valid phone number.');
          valid = false;
          return;
        }

        // Select
        if (field.tagName === 'SELECT' && field.required && !val) {
          setError(field, errEl, 'Please select an option.');
          valid = false;
          return;
        }
      });

      if (!valid) {
        const first = form.querySelector('.error');
        if (first) first.focus();
        return;
      }

      // Submit
      const btn = form.querySelector('.quote-form__submit');
      btn.classList.add('loading');
      btn.disabled = true;

      try {
        const res = await submitQuoteForm(data);
        if (res.success) {
          // Hide form, show success
          form.style.display = 'none';
          if (card) {
            const header = card.querySelector('.quote-card__header');
            if (header) header.style.display = 'none';
          }
          if (success) {
            success.hidden = false;
          }
        }
      } catch (err) {
        console.error('Submission error:', err);
        btn.classList.remove('loading');
        btn.disabled = false;
        // Show a user-friendly error
        const errDiv = document.createElement('p');
        errDiv.style.cssText = 'color:#C0392B;font-size:0.875rem;margin-top:12px;text-align:center';
        errDiv.textContent = 'Something went wrong. Please try again or contact us directly.';
        btn.parentElement.appendChild(errDiv);
        setTimeout(() => errDiv.remove(), 5000);
      }
    });
  });

  function setError(field, errEl, msg) {
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.add('visible');
    }
  }
}

/**
 * Submit handler — isolated for easy replacement with real API.
 * Replace the body of this function with a fetch() call when a backend is ready.
 */
async function submitQuoteForm(formData) {
  // =====================================================
  // TODO: Replace with actual API endpoint, e.g.:
  //
  // const response = await fetch('/api/quote', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData)
  // });
  // if (!response.ok) throw new Error('Network error');
  // return response.json();
  //
  // Or send to Supabase, webhook, CRM, etc.
  // =====================================================

  return new Promise(resolve =>
    setTimeout(() => resolve({ success: true }), 1500)
  );
}

/* =========================================================================
   5. WHATSAPP WIDGET
   ========================================================================= */
function initWhatsAppWidget() {
  const widget = document.getElementById('whatsappWidget');
  const card = document.getElementById('whatsappCard');
  const toggle = document.getElementById('whatsappToggle');
  const close = document.getElementById('whatsappClose');
  if (!widget) return;

  // Start expanded
  widget.classList.add('expanded');

  // Auto-collapse after 5s
  let collapseTimer = setTimeout(() => {
    widget.classList.remove('expanded');
  }, 5000);

  // Toggle
  if (toggle) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      widget.classList.toggle('expanded');
      clearTimeout(collapseTimer);
    });
  }

  // Close
  if (close) {
    close.addEventListener('click', (e) => {
      e.stopPropagation();
      widget.classList.remove('expanded');
      clearTimeout(collapseTimer);
    });
  }
}

/* =========================================================================
   6. SCROLL REVEAL ANIMATIONS (Intersection Observer)
   ========================================================================= */
function initScrollAnimations() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* =========================================================================
   7. COUNTER ANIMATION
   ========================================================================= */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => {
    if (reduced) {
      // Show final value immediately
      return;
    }
    observer.observe(c);
  });

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;

    const isRaw = el.hasAttribute('data-raw'); // For "1974" — don't animate from 0
    const start = isRaw ? target : 0;

    if (isRaw) {
      el.textContent = target;
      return;
    }

    const duration = 2000;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }
}

/* =========================================================================
   8. LANGUAGE SWITCHER
   ========================================================================= */
function initLanguageSwitcher() {
  const btns = document.querySelectorAll('.lang-switcher__btn');
  if (!btns.length) return;

  let current = localStorage.getItem('carps_lang') || 'en';
  document.documentElement.setAttribute('data-lang', current);
  updateActive();

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang === current) return;
      current = lang;
      localStorage.setItem('carps_lang', current);
      document.documentElement.setAttribute('data-lang', current);
      updateActive();
      // TODO: Implement actual translation logic here.
      // Elements can use data-en="..." data-fr="..." attributes.
    });
  });

  function updateActive() {
    btns.forEach(b => {
      const isActive = b.getAttribute('data-lang') === current;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', isActive);
    });
  }
}

/* =========================================================================
   9. CURRENT YEAR
   ========================================================================= */
function initCurrentYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}
