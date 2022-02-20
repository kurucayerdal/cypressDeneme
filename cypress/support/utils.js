export const generateRandomString = function (length) {
    return Math.random().toString(20).substr(2, length)
}

export function generateRandomEmail() {
    let emailRandom = "testIsmi+" + generateRandomString(8)
    var result = emailRandom.replace(/[^a-z]/g, '') + "@uzantisi.com";
    return result;
}