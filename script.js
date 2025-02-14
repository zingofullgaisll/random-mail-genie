
function generateRandomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from(
        { length },
        () => chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
}

function generateGmailAccount() {
    const username = generateRandomString(12);
    return `${username}@gmail.com`;
}

function generatePassword() {
    const specialChars = '!@#$%^&*';
    const numbers = generateRandomString(2);
    const letters = generateRandomString(6);
    const special = specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    return `${letters}${numbers}${special}`;
}

function updateCredentials() {
    document.getElementById('loginText').textContent = generateGmailAccount();
    document.getElementById('passwordText').textContent = generatePassword();
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

async function copyToClipboard(elementId, type) {
    const text = document.getElementById(elementId).textContent;
    try {
        await navigator.clipboard.writeText(text);
        showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} copiado`);
    } catch (err) {
        console.error('Falha ao copiar texto:', err);
    }
}

// Gerar credenciais iniciais e atualizar a cada minuto
updateCredentials();
setInterval(updateCredentials, 60000);
