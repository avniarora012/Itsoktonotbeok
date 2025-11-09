// blog.js

// Smooth Scroll for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Fade-in animation when elements appear on scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  
  fadeEls.forEach(el => observer.observe(el));
  
  // Scroll-to-top button
  const topButton = document.createElement('button');
  topButton.innerHTML = '⬆';
  topButton.id = 'topBtn';
  topButton.style.position = 'fixed';
  topButton.style.bottom = '30px';
  topButton.style.right = '30px';
  topButton.style.backgroundColor = '#5d8b72';
  topButton.style.color = '#fff';
  topButton.style.border = 'none';
  topButton.style.padding = '10px 15px';
  topButton.style.borderRadius = '50%';
  topButton.style.cursor = 'pointer';
  topButton.style.display = 'none';
  topButton.style.boxShadow = '0 3px 6px rgba(0,0,0,0.2)';
  document.body.appendChild(topButton);
  
  topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  });
  
  // Dynamic year in footer
  const yearSpan = document.createElement('span');
  yearSpan.textContent = new Date().getFullYear();
  const footer = document.querySelector('footer p');
  if (footer) {
    footer.innerHTML = `© ${yearSpan.textContent} It’s OK to Not Be OK | Made with 🌿 by someone figuring it out`;
  }
  
  // Dynamic blog loading (basic demo)
  const blogContainer = document.querySelector('#dynamic-blog');
  if (blogContainer) {
    const posts = [
      {
        title: 'Redirection is Not Failure — It’s Growth',
        content: 'When I left MBBS, it felt like my world collapsed. Everyone had opinions, and I had none. Yet that silence became my turning point. Growth doesn’t always look like success — sometimes it looks like standing still long enough to listen to yourself.'
      },
      {
        title: 'It’s Okay to Start Over',
        content: 'Starting again doesn’t erase your past; it honors your courage to keep moving. Each new beginning is proof that you believe in something better — even when you’re scared.'
      },
      {
        title: 'Finding Clarity in Confusion',
        content: 'Clarity isn’t something you find — it’s something you create, step by step, choice by choice. Every question you ask yourself brings you closer to the answer.'
      }
    ];
  
    posts.forEach(post => {
      const article = document.createElement('article');
      const h3 = document.createElement('h3');
      h3.textContent = post.title;
      const p = document.createElement('p');
      p.textContent = post.content;
      article.appendChild(h3);
      article.appendChild(p);
      blogContainer.appendChild(article);
    });
  }