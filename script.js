const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('mouseover', function () {
          this.style.color = '#FF5733'; 
      });
      link.addEventListener('mouseout', function () {
          this.style.color = '';
      });
  });
  const contentSections = document.querySelectorAll('.profile, .skills, .contact-me');
  contentSections.forEach(section => {
      section.style.opacity = 0;

      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.transition = 'opacity 1s ease-in-out';
                  entry.target.style.opacity = 1;
                  observer.unobserve(entry.target);
              }
          });
      }, { rootMargin: '0px 0px -50px 0px' });

      observer.observe(section);
  });
  const skillsSection = document.getElementById('skills');
  skillsSection.style.transform = 'scale(0.8)';
  skillsSection.style.opacity = 0;

  const skillsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
              entry.target.style.transform = 'scale(1)';
              entry.target.style.opacity = 1;
              skillsObserver.unobserve(entry.target);
          }
      });
  }, { rootMargin: '0px 0px -50px 0px' });

  skillsObserver.observe(skillsSection);
  window.addEventListener('scroll', () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
            document.getElementById('scroll-progress-bar').style.width = `${scrolledPercentage}%`;
        })
        const topContainer = document.querySelector('.top-container');
        const bottomContainer = document.querySelector('.bottom-container');

        window.addEventListener('scroll', () => {
            const scrolledHeight = window.scrollY;
            const backgroundColor = `rgba(235, 227, 213, ${scrolledHeight / 800})`; 
            topContainer.style.backgroundColor = backgroundColor;
            bottomContainer.style.backgroundColor = backgroundColor;
           
        
        });
        const darkModeBtn = document.getElementById('dark-mode-btn');
        let darkModeEnabled = false;

        darkModeBtn.addEventListener('click', () => {
            darkModeEnabled = !darkModeEnabled;

            document.body.style.transition = 'background-color 0.5s ease';
            document.body.style.backgroundColor = darkModeEnabled ? '#1a1a1a' : '#ffffff';
            document.body.style.color = darkModeEnabled ? '#ffffff' : '#000000';
        });
        