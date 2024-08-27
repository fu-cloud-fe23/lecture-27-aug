export default function generatePassword(body) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let charPool = '';
    let password = '';

    if(body.capital) {
        charPool += uppercaseChars;
        password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    }
    if(body.lower) {
        charPool += lowercaseChars;
        password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }
    if(body.numbers) {
        charPool += numberChars;
        password += numberChars[Math.floor(Math.random() * numberChars.length)];
    }
    if(body.symbols) {
        charPool += symbolChars;
        password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    }

    for(let i = password.length; i < body.length; i++) {
        password += charPool[Math.floor(Math.random() * charPool.length)]
    }

    return password.split('').sort(() => 0.5 - Math.random()).join('');
}