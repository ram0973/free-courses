var args = process.argv.slice(2);
var s = args[0];
var k = parseInt(args[1]);

function caesarCypher(str, shift) {
    var output = '';
    for (var i = 0; i < str.length; i ++) {
        var c = str[i];
        // if it's a letter...
        if (c.match(/[a-z]/i)) {
            var code = str.charCodeAt(i);
            // transform uppercase letters
            if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            // transform lowercase letters
            else if ((code >= 97) && (code <= 122))
                c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        output += c;
    }
   return output;
}

console.log(caesarCypher(s, k));