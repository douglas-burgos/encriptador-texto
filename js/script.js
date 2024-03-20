
let encryptBtn = document.querySelector(".button__encrypt");
let decryptBtn = document.querySelector(".button__decrypt");
let copyBtn = document.querySelector(".button__copy");
let txtArea = document.querySelector(".text_encrypt");
let textEncrypt = document.querySelector(".text_encrypt");
let textToConvert = document.querySelector(".text");
let noMsgEncrypt = document.querySelector(".no_encrypt");
let msgEncrypt = document.querySelector(".encrypt");

/**
 * Funcion que hace la encriptación del texto enviado
 * @param {String} text es el texto a encriptar
 * @returns {String} Regresa el texto encriptado.
 */
function encrypt(text) {
    let txtEncrypt = text.replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    return txtEncrypt;
}

/**
 * Funcion que hace la encriptación del texto enviado
 * @param {String} text es el texto a desencriptar
 * @returns {String} Regresa el texto desencriptado.
 */
function decrypt(text) {
    let txtEncrypt = text.replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');
    return txtEncrypt;
}

/**
 * Función que redimenciona el textarea al tamaño del texto enviado
 * @param {textarea} textarea es la etiqueta 
 */
function ajustarTextArea(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}

/**
 * Función para hacer aparecer y desaparecer los mensajes de encrptado y de que 
 * no se encontró ningun mensaje.
 * @param {*} noMsgEncrypt 
 * @param {*} msgEncrypt 
 */
function msjEncrypt(noMsgEncrypt, msgEncrypt) {
    noMsgEncrypt.style.display = "none";
    msgEncrypt.style.display = "flex";
}

/**
 * Función que verfica si el textarea esta vacia o no
 * @returns {boolean} retorna verdadero o falso si el valor esta vacío
 */
function isEmpty() {
    if (textToConvert.value == "") {
        window.alert("Por favor ingresa el texto que deseas encriptar o desencripta \n (⌒‐⌒)");
        location.reload();
        return true;
    }
    return false;
}

function textConvert(texto) {
    let textMin = texto.toLowerCase();
    let txtSinAcentos = textMin.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return txtSinAcentos;
}

/**
 * Es el evento del boton > Encriptar <
 */
encryptBtn.addEventListener("click", function () {
    if (!isEmpty()) {
        let txtEncrypt = encrypt(textConvert(textToConvert.value));
        textToConvert.value = "";
        msjEncrypt(noMsgEncrypt, msgEncrypt);
        textEncrypt.value = txtEncrypt;
        if ((screen.width) <= 768) {
            ajustarTextArea(txtArea);
        }
    }
});

/**
 * Es el evento del boton > Desencriptar <
 */
decryptBtn.addEventListener("click", function () {
    if (!isEmpty()) {
        let txtDecrypt = decrypt(textConvert(textToConvert.value));
        textToConvert.value = "";
        msjEncrypt(noMsgEncrypt, msgEncrypt);
        textEncrypt.value = txtDecrypt;
        if ((screen.width) <= 768) {
            ajustarTextArea(txtArea);
        }
    }
});

/**
 * Evento para copiar el texto en el portapales
 */
copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(textEncrypt.value);
    window.alert("Texto Copiado :D");
})

window.addEventListener("resize", function (event) {
    if ((window.innerWidth) <= 768) {
        ajustarTextArea(txtArea);
    }
});