export const generateRandomString = function (length) {
    return Math.random().toString(20).substring(2, length)
}
//************************************************************************************************************ */

export function generateRandomEmail() {
    let emailRandom = "testIsmi+" + generateRandomString(8)
    var result = emailRandom.replace(/[^a-z]/g, '') + "@uzantisi.com";
    return result;
}
//************************************************************************************************************ */
//   Random String Generator
export function generateString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
//************************************************************************************************************ */
