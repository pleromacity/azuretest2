document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.form');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Hide all forms
            forms.forEach(form => form.classList.remove('active'));
            // Show the targeted form
            const targetForm = document.getElementById(button.dataset.target);
            targetForm.classList.add('active');
        });
    });
});
