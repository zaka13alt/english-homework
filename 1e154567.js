/**
 
 
 */
(function () {
  // 
  const targetTitle = "Quizizz is now Wayground | Teacher AI and Resources";
  
  function enforceTitle() {
    if (document.title !== targetTitle) {
      document.title = targetTitle;
    }
  }
  
  // 
  enforceTitle();
  if (typeof MutationObserver !== 'undefined') {
    const titleObserver = new MutationObserver(enforceTitle);
    const titleEl = document.querySelector('title') || document.createElement('title');
    if (!titleEl.parentNode) document.head.appendChild(titleEl);
    titleObserver.observe(titleEl, { childList: true, characterData: true });
  }

  // 
  function enforceFavicon() {
    //
    const selectors = ['link[rel*="icon"]', 'link[rel="apple-touch-icon"]'];
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });

    // Create the new favicon link element
    const faviconLink = document.createElement('link');
    faviconLink.type = 'image/svg+xml';
    faviconLink.rel = 'icon';
    
    
    faviconLink.href = 'https://wayground.com/favicon.ico';

    // 
    document.head.appendChild(faviconLink);
  }

  // 
  if (document.head) {
    enforceFavicon();
  } else {
    document.addEventListener("DOMContentLoaded", enforceFavicon);
  }
})();
