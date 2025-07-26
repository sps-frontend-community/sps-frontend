document.addEventListener('DOMContentLoaded', () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const openIcon = document.getElementById('menu-open-icon');
        const closeIcon = document.getElementById('menu-close-icon');

        if (mobileMenuButton && mobileMenu && openIcon && closeIcon) {
            mobileMenuButton.addEventListener('click', () => {
                const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
                mobileMenu.classList.toggle('hidden');
                mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
                openIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            });
        }

        document.querySelectorAll('.mobile-menu-toggle').forEach(button => {
            button.addEventListener('click', () => {
                const submenu = button.nextElementSibling;
                const arrow = button.querySelector('.arrow-icon');
                const wasOpen = submenu.classList.contains('open');

                document.querySelectorAll('.mobile-submenu').forEach(sm => {
                    if (sm !== submenu) {
                        sm.classList.remove('open');
                        sm.previousElementSibling.querySelector('.arrow-icon').classList.remove('open');
                    }
                });

                if (!wasOpen) {
                    submenu.classList.add('open');
                    arrow.classList.add('open');
                } else {
                    submenu.classList.remove('open');
                    arrow.classList.remove('open');
                }
            });
        });

        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach(clickedCard => {
            clickedCard.addEventListener('click', () => {
                pricingCards.forEach(card => {
                    card.classList.remove('ring-2', 'ring-blue-400');
                    card.classList.add('opacity-75');
                });
                clickedCard.classList.add('ring-2', 'ring-blue-400');
                clickedCard.classList.remove('opacity-75');
            });
        });
        
        const featureTabs = document.querySelectorAll('.feature-list-item');
        const featureDetails = document.querySelectorAll('[data-feature-tab-details]');
        featureTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                featureTabs.forEach(item => item.classList.remove('active'));
                tab.classList.add('active');
                const filter = tab.getAttribute('data-filter-tab');
                featureDetails.forEach(detail => {
                    if (detail.getAttribute('data-feature-tab-details') === filter) {
                        detail.classList.remove('hidden');
                        detail.classList.add('animate-fade-in');
                    } else {
                        detail.classList.add('hidden');
                    }
                });
            });
        });

        document.querySelectorAll('.select-package').forEach(button => {
            button.addEventListener('click', () => {
                const targetUrl = button.dataset.target;
                if (targetUrl) window.location.href = targetUrl;
            });
        });
    });