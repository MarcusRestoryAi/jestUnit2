function validatePassword(password) {
    //Lösning med REGEX-Expression
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{8,})/;
    return passwordRegex.test(password);
}

module.exports = validatePassword;