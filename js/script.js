
function codificar(texto) {
    var textoEncriptado = texto
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat');
    return textoEncriptado;
}

function decodificar(textoEncriptado) {
    var textoOriginal = textoEncriptado
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u');
    return textoOriginal;
}

function onClickCodificar() {
    var entradaTextarea = document.getElementById("input");
    var valorTextarea = entradaTextarea.value;
    var nuevoTexto = codificar(valorTextarea);
    var salidaTextarea = document.getElementById("output");
    salidaTextarea.value = nuevoTexto;
}

function onClickDecodificar() {
    var entradaTextarea = document.getElementById("input");
    var valorTextarea = entradaTextarea.value;
    var textoDesencriptado = decodificar(valorTextarea);
    var salidaTextarea = document.getElementById("output");
    salidaTextarea.value = textoDesencriptado;
}

function onClickCopiarTexto() {
    var textoCopiado = document.getElementById("output");
    textoCopiado.select();
    document.execCommand("copy");
}
