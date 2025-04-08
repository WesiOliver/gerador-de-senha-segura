document.addEventListener('DOMContentLoaded', function() {

    const passwordEl = document.getElementById('password');
    const copyBtn = document.getElementById('copy-btn');
    const generateBtn = document.getElementById('generate-btn');
    const lengthEl = document.getElementById('length');
    const uppercaseEl = document.getElementById('uppercase');
    const lowercaseEl = document.getElementById('lowercase');
    const numbersEl = document.getElementById('numbers');
    const symbolsEl = document.getElementById('symbols');
    const themeBtn = document.getElementById('theme-btn');
    
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    function generatePassword() {
        let length = parseInt(lengthEl.value);
        let chars = '';
        let password = '';
        
        if (length < 4) length = 4;
        if (length > 64) length = 64;
        lengthEl.value = length;
        
        if (uppercaseEl.checked) chars += uppercaseChars;
        if (lowercaseEl.checked) chars += lowercaseChars;
        if (numbersEl.checked) chars += numberChars;
        if (symbolsEl.checked) chars += symbolChars;
        
        if (chars.length === 0) {
            alert('Selecione pelo menos um tipo de caractere!');
            return;
        }
        
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        
        passwordEl.value = password;
    }
    
    function copyToClipboard() {
        if (!passwordEl.value) return;
        
        passwordEl.select();
        document.execCommand('copy');
        
        copyBtn.classList.add('copied');
        setTimeout(() => {
            copyBtn.classList.remove('copied');
        }, 2000);
    }
    
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        } else {
            themeBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
        }
    }
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    }
    
    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyToClipboard);
    themeBtn.addEventListener('click', toggleTheme);
    
    generatePassword();
});