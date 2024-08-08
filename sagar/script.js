document.addEventListener('DOMContentLoaded', () => {
    const destinationButtons = document.querySelectorAll('.destination');
    const signInButton = document.querySelector('nav ul li:last-child a');
    const modal = document.getElementById('signInModal');
    const closeButton = document.getElementsByClassName('close')[0];
    const signInForm = document.getElementById('signInForm');

    destinationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const destination = button.querySelector('p').textContent;
            alert(`You selected ${destination}. Redirecting to ${destination} page...`);
        });
    });

    signInButton.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signInForm.querySelector('input[type="email"]').value;
        const password = signInForm.querySelector('input[type="password"]').value;
        alert(`Sign in attempt with email: ${email}`);
        signInForm.reset();
        modal.style.display = 'none';
    });
});