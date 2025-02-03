document.addEventListener('DOMContentLoaded', () => {
    const navbarCollapsible = document.querySelector('#mainNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
  
    // Navbar shrink function
    const navbarShrink = () => {
      if (!navbarCollapsible) return;
      
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
      } else {
        navbarCollapsible.classList.add('navbar-shrink');
      }
    };
  
    // Shrink the navbar initially and on scroll
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
  
    // Activate Bootstrap scrollspy on the main nav element
    if (navbarCollapsible) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      });
    }
  
    // Collapse responsive navbar when nav item is clicked
    responsiveNavItems.forEach(item => {
      item.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });
  });