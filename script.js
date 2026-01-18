        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('formSuccess').classList.remove('d-none');
            setTimeout(() => {
                this.reset();
                document.getElementById('formSuccess').classList.add('d-none');
            }, 3000);
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // Close mobile menu if open
                    const navCollapse = document.querySelector('.navbar-collapse');
                    if (navCollapse.classList.contains('show')) {
                        bootstrap.Collapse.getInstance(navCollapse).hide();
                    }
                }
            });
        });