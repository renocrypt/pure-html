/**
 * Main JavaScript module for the Pure HTML project
 */

// Check if the browser supports all required features
const checkBrowserSupport = () => {
  const requiredFeatures = [
    // ES Modules
    'noModule' in document.createElement('script'),
    // Fetch API
    'fetch' in window,
    // Promise
    'Promise' in window,
    // Arrow functions and other ES6 features (check indirectly)
    (() => {}).constructor === Function,
    // CSS Variables
    window.CSS && CSS.supports('color', 'var(--test)'),
    // IntersectionObserver
    'IntersectionObserver' in window
  ];
  
  return requiredFeatures.every(feature => feature);
};

// Display browser compatibility warning if needed
const handleBrowserCompatibility = () => {
  if (!checkBrowserSupport()) {
    const header = document.querySelector('header');
    const warning = document.createElement('div');
    warning.className = 'browser-warning';
    warning.innerHTML = `
      <p><strong>⚠️ Warning:</strong> Your browser may not support all features used in this project. 
      For the best experience, please use the latest version of Chrome, Firefox, Edge, or Safari.</p>
    `;
    warning.style.backgroundColor = '#fff3cd';
    warning.style.color = '#856404';
    warning.style.padding = '1rem';
    warning.style.marginBottom = '1rem';
    warning.style.borderRadius = '6px';
    warning.style.textAlign = 'center';
    
    if (header) {
      header.parentNode.insertBefore(warning, header.nextSibling);
    }
  }
};

// Track navigation for analytics (if it existed in a real project)
const trackPageView = () => {
  const page = window.location.pathname;
  console.log(`Page viewed: ${page}`);
  // In a real project, this would send analytics data
};

// Initialize the application
const init = () => {
  handleBrowserCompatibility();
  trackPageView();
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  console.log('Pure HTML project initialized');
};

// Run the initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Export utility functions for use in other modules
export {
  checkBrowserSupport,
  trackPageView
}; 