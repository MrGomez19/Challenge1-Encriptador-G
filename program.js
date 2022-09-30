const eCode ="enter";
const iCode ="imes";
const aCode ="ai";
const oCode ="ober";
const uCode ="ufat";

var btnCopy = document.querySelector(".output #copyB");
var result = document.querySelector(".output #result");

function encrypt(){
    var input = document.getElementById("text0");
    const text = (input.value).toLowerCase();
    const size = text.length;
    var textEncrypted = "";

    if(text != ""){
        console.log(text, size);

        for (i = 0; i < size; i++) {
            if (text[i] == "e") {
                textEncrypted = textEncrypted + eCode;
            }
            else if (text[i] == "i") {
                textEncrypted = textEncrypted + iCode;
            }
            else if (text[i] == "a") {
                textEncrypted = textEncrypted + aCode;
            }
            else if (text[i] == "o") {
                textEncrypted = textEncrypted + oCode;
            }
            else if (text[i] == "u") {
                textEncrypted = textEncrypted + uCode;
            }
            else{
                textEncrypted = textEncrypted + text[i];
            }
        }

        console.log(textEncrypted);
        document.getElementById("result").value = textEncrypted;
        btnCopy.style.display = "block";
        result.style.backgroundImage = "none";
    }

    else{
        alert("There is no message to encrypt, please insert a messaje.");
        document.getElementById("result").value = null;
        btnCopy.style.display = "none";
        result.style.backgroundImage = "url(Material/no-text-image.png)";
    }
}

function decrypt(){
    var input1 = document.getElementById("text0");
    const text1 = (input1.value).toLowerCase();
    const size1 = text1.length;
    var j = 0;
    var textDecrypted = "";

    if(text1 != ""){

        while (j < size1) {
            if (text1.slice(j,j+5) == "enter") {
                textDecrypted = textDecrypted + "e";
                j = j+5;
            }
            else if (text1.slice(j,j+4) == "imes") {
                textDecrypted = textDecrypted + "i";
                j = j+4;
            }
            else if (text1.slice(j,j+2) == "ai") {
                textDecrypted = textDecrypted + "a";
                j = j+2;
            }
            else if (text1.slice(j,j+4) == "ober") {
                textDecrypted = textDecrypted + "o";
                j = j+4;
            }
            else if (text1.slice(j,j+4) == "ufat") {
                textDecrypted = textDecrypted + "u";
                j = j+4;
            }
            else {
                textDecrypted = textDecrypted + text1[j];
                j = j+1;
            }
        }
        if (textDecrypted == text1) {
            alert("No encryption found, please insert an encrypted messaje");
            document.getElementById("result").value = null;
            document.getElementById("text0").value = null;
            btnCopy.style.display = "none";
            result.style.backgroundImage = "url(Material/no-text-image.png)";
        }
        else {
            console.log(textDecrypted);
            document.getElementById("result").value = textDecrypted;
            btnCopy.style.display = "block";
            result.style.backgroundImage = "none";
        }
    }
    
    else{
        alert("There is no message to decrypt, please insert an encrypted messaje.");
        document.getElementById("result").value = null;
        btnCopy.style.display = "none";
        result.style.backgroundImage = "url(Material/no-text-image.png)";
    }
}

function copy() {
        var copyText = document.getElementById("result");
      
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        navigator.clipboard.writeText(copyText.value);

        document.getElementById("result").value = null;
        document.getElementById("text0").value = null;
        btnCopy.style.display = "none";
        result.style.backgroundImage = "url(Material/no-text-image.png)";
}