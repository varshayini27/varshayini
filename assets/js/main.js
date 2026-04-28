/* =========================================
   VARSHAYINI ARAVINTHAN — PORTFOLIO SCRIPTS
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---- CUSTOM CURSOR ----
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animCursor() {
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  document.querySelectorAll('a, button, .project-item, .skill-item, .hobby-tag').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width       = '48px';
      ring.style.height      = '48px';
      ring.style.borderColor = 'rgba(200,169,110,0.7)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width       = '32px';
      ring.style.height      = '32px';
      ring.style.borderColor = 'rgba(200,169,110,0.4)';
    });
  });

  // ---- SCROLL FADE-UP ANIMATIONS ----
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

  // ---- SKILL BAR ANIMATIONS ----
  // Bars are paused by default; play when skills section enters viewport
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    bar.style.animationPlayState = 'paused';
  });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
            bar.style.animationPlayState = 'running';
          });
          skillObserver.unobserve(entry.target); // only trigger once
        }
      });
    }, { threshold: 0.3 });

    skillObserver.observe(skillsSection);
  }

  // ---- ACTIVE NAV LINK HIGHLIGHTING ----
  const sections   = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--accent)';
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => navObserver.observe(s));

});
