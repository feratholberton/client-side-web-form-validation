import { checkInputEmptiness } from './check-emptiness.js';
import { checkEmail } from './check-email.js'

export function validateForm(form) {
    const inputsToValidate = form.querySelectorAll('[required]');

    inputsToValidate.forEach(input => {
        input.addEventListener('blur', checkInputEmptiness);
        input.addEventListener('input', checkInputEmptiness);

        if (input.type === 'email') {
            input.addEventListener('blur', checkEmail);
            input.addEventListener('input', checkEmail);
        }
    });

    form.addEventListener('submit', (event) => {
        const inputsWithError = form.querySelectorAll('[data-validation]')

        if (inputsWithError.length) {
            event.preventDefault();
        }
    })
}
