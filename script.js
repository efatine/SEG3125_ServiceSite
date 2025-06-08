document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        const confirmationMessage = document.getElementById('confirmation');
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (confirmationMessage) {
                confirmationMessage.classList.remove('d-none');
            }
            setTimeout(() => {
                bookingForm.reset();
                if (confirmationMessage) {
                    confirmationMessage.classList.add('d-none');
                }
            }, 5000);
        });
    }

    const viewToggleButton = document.getElementById('view-toggle-btn');
    const siteWrapper = document.getElementById('site-wrapper');

    if (viewToggleButton && siteWrapper) {
        const applyViewMode = (isMobile) => {
            if (isMobile) {
                siteWrapper.classList.add('mobile-view');
                document.body.classList.add('mobile-mode-active');
            } else {
                siteWrapper.classList.remove('mobile-view');
                document.body.classList.remove('mobile-mode-active');
            }
        };

        viewToggleButton.addEventListener('click', function(event) {
            event.preventDefault();
            const isMobile = siteWrapper.classList.toggle('mobile-view');
            document.body.classList.toggle('mobile-mode-active', isMobile);
            localStorage.setItem('isMobileView', isMobile);
        });

        const savedViewMode = localStorage.getItem('isMobileView') === 'true';
        applyViewMode(savedViewMode);
    }
});