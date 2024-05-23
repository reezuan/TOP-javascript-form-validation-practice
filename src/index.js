import './style.css';
import { emailInput } from './components/emailInput.js';
import { form } from './components/form.js';

(function() {
    document.querySelector('body').appendChild(form());
})();