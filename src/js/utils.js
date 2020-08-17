import CryptoJS from 'crypto-js/crypto-js'

// 默认的 KEY 与 iv 如果没有给
const KEY = CryptoJS.enc.Utf8.parse("thanks,pig4cloud");//""中与后台一样  密码
const IV = CryptoJS.enc.Utf8.parse('thanks,pig4cloud');//""中与后台一样

/**
 * AES加密 ：字符串 key iv
 */
export function Encrypt(word) {
    var encrypted = '';
    if (typeof (word) == 'string') {
        var srcs = CryptoJS.enc.Utf8.parse(word);
        encrypted = CryptoJS.AES.encrypt(srcs, KEY, {
            iv: IV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding//
        });
    } else if (typeof (word) == 'object') {
        encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(word)), KEY, {
            iv: IV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        })
    }
    return encrypted.toString();
}

