(() => {
  'use strict';
  const header = document.querySelector('#site-header');
  const btn = document.querySelector('#menu-toggle');
  const menu = document.querySelector('#mobile-nav');
  const icon = btn?.querySelector('use');
  const closeMenu = () => {
    if (!btn || !menu) return;
    menu.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    icon?.setAttribute('href','#i-menu');
  };
  btn?.addEventListener('click', () => {
    const open = menu.hidden;
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    icon?.setAttribute('href', open ? '#i-close' : '#i-menu');
  });
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => { if (header && !header.contains(e.target)) closeMenu(); });
  window.addEventListener('resize', () => { if (innerWidth > 1130) closeMenu(); });
  const navLinks = [...document.querySelectorAll('.es-navlink')];
  const targets = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle('es-active', a.getAttribute('href') === '#' + entry.target.id));
      }});
    },{rootMargin:'-22% 0px -65% 0px'});
    targets.forEach(s => observer.observe(s));
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
  const service = document.querySelector('#q-service');
  document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
    const value = link.dataset.service;
    if (service) {
      const existing = [...service.options].find(opt => opt.value === value || opt.text === value);
      if (existing) service.value = existing.value;
    }
  }));
  const form = document.querySelector('#quote-form');
  const error = document.querySelector('#quote-error');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const name = form.elements.namedItem('name');
    const business = form.elements.namedItem('business');
    const kind = form.elements.namedItem('service');
    const budget = form.elements.namedItem('budget');
    const message = form.elements.namedItem('message');
    const nameValue = name.value.trim();
    const messageValue = message.value.trim();
    if (!nameValue || !messageValue) {
      const invalid = !nameValue ? name : message;
      invalid.focus();
      invalid.setAttribute('aria-invalid','true');
      if (error) error.textContent = !nameValue ? 'Please enter your name.' : 'Please tell us about your project.';
      return;
    }
    name.removeAttribute('aria-invalid'); message.removeAttribute('aria-invalid');
    if (error) error.textContent = '';
    const content = ['Hello Evoxnet Studio, I would like a website quote.','',
      `Name: ${nameValue}`,`Business: ${business.value.trim() || 'Not provided'}`,
      `Service: ${kind.value}`,`Budget: ${budget.value}`,`Project details: ${messageValue}`].join('\n');
    window.location.assign('https://wa.me/916296771414?text=' + encodeURIComponent(content));
  });
  form?.querySelectorAll('input,textarea').forEach(field => field.addEventListener('input', () => {field.removeAttribute('aria-invalid'); if(error) error.textContent = ''; }));
  const faqs = document.querySelectorAll('.es-faq-list details');
  faqs.forEach(item => item.addEventListener('toggle', () => {if(item.open) faqs.forEach(other => {if(other!==item) other.open=false;}); }));
})();
