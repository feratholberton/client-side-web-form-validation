import { emailRegex } from './email-regex.js';
import { createErrorMessage } from './create-error-message.js'

export function checkEmail() {
    const emailValue = this.value;
    if (!emailRegex.test(emailValue)) {
        if (this.dataset.validation !== 'error') {
            createErrorMessage(this, 'Please enter a valid email address.');
        }
        this.setAttribute('data-validation', 'error')
        this.classList.add('validation-error');
    } else {
        if (this.dataset.validation === 'error' && this.nextElementSibling) {
            this.nextElementSibling.remove();
        }
        this.removeAttribute('data-validation')
        this.classList.remove('validation-error');
    }
}
