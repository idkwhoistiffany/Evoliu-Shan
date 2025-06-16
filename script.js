       // Menu mobile
        const mobileMenu = document.querySelector('.mobile-menu');
        const nav = document.querySelector('#nav');

        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenu.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('#nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Scroll suave para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        // Header scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('#header');
            header.classList.toggle('scrolled', window.scrollY > 50);
        });

        // Animação dos cards de serviço
        const serviceCards = document.querySelectorAll('.service-card');

        function animateCards() {
            serviceCards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (cardTop < windowHeight - 100) {
                    card.classList.add('animate');
                }
            });
        }

        // Botão de voltar ao topo
        const backToTopButton = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // VLibras
        new window.VLibras.Widget({
            rootPah: '/app',
            personalization: 'https://vlibras.gov.br/config/default_logo.json',
            opacity: 0.5,
            position: 'R',
            avatar: 'random',
        });

        // Verificar na carga inicial
        window.addEventListener('load', () => {
            animateCards();
            
            // Verificar se já está no topo para mostrar o botão
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            }
        });
        
        // Verificar durante o scroll
        window.addEventListener('scroll', () => {
            animateCards();
        });
