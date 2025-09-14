for (const a of document.querySelectorAll('a')) {
  a.style.outline = '3px solid #f39';
  a.style.transition = 'outline 200ms ease-in-out';
}

(function(){
  const el = document.createElement('div');
  el.textContent = 'Bootcamp';
  el.style.position = 'fixed';
  el.style.right = '8px';
  el.style.bottom = '8px';
  el.style.padding = '6px 8px';
  el.style.background = 'rgba(11,132,255,0.9)';
  el.style.color = '#fff';
  el.style.borderRadius = '6px';
  el.style.zIndex = 999999;
  document.documentElement.appendChild(el);
  setTimeout(()=>el.remove(), 5_000);
})();
