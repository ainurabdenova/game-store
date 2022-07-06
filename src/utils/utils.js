export const calcTotalPrice = (items) => items.reduce((acc, game) => acc += game.price, 0)

export const enumerate = (num, dec) => {
    if (num > 100) num = num % 100;
    if (num <= 20 && num >= 10) return dec[2];
    if (num > 20) num = num % 10;
    return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
}

export function getInputState(formState, fieldName) {
    // console.log(formState, fieldName);
    return {
        error: formState.errors[fieldName],
        helperText: formState.errors[fieldName]?.message
    };
}

export function required(message) {
    return message || "Обязательное поле";
}

export function validatePassword(value) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    if (!re.test(String(value))) {
        return "Пароль должен содержать как минимум 8 и максимально 20 символов, один верхний регистр,один нижний регистр, одно числовое значение и один специальный символ."
    }
    if (value.length < 8) { return "Минимально 8 символов" };
    if (value.length > 21) { return "Максимально 20 символов" };

}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())) {
        return "Некорректный email"
    }
};

export function validatePasswordSignIn(value) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    if (!re.test(String(value))) {
        return "Пароль  неправельный"
    }
}