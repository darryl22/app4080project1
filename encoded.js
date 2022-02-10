let encodedtext;

function encode(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let temp = "";

    for (let a = 0; a < text.length; a++){
        for(let b = 0; b < alphabet.length; b++){
            if (text[a] == alphabet[b]){
                temp = temp + alphabet[b + 2];
            }
        }
    }
    return temp;
}

