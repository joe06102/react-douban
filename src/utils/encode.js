export class Encode {

    static getBase64(data) {

        const base64Table = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];        
        let binaryCharCodes = [];
        
        for(var i = 0; i < data.length; i++){ 
            var charCode = data.charCodeAt(i);
            binaryCharCodes.push(Encode.pad(Number(charCode.toString(2)), 8, 0).toString());	
        }
        
        var concatBinaryChars = binaryCharCodes.join('');
        var bitCeilingLen = Encode.getCeilingDividend(concatBinaryChars.length, 6);
        var completeBinaryChars = Encode.pad(concatBinaryChars, bitCeilingLen, 0);

        var encodeChars = [];

        for(var j = 0; j < completeBinaryChars.length;) {

            var curByte = completeBinaryChars.slice(j, j + 6);
            var completeByte = Encode.pad(curByte, 8, 0);
            var encodeCharCode = parseInt(completeByte, 2);
            var encodeChar = base64Table[encodeCharCode];

            encodeChars.push(encodeChar);

            j += 6;
        }

        return encodeChars.join('');
    }

    static getCeilingDividend(base, divisor) {

        base = Number(base);
        divisor = Number(divisor);

        if(isNaN(base) || isNaN(divisor) || divisor === 0) {
            console.log(`invalid input, base: ${base}, divisor: ${divisor}`);
            return;
        }

        var isExactlyDivided = base % divisor;

        while(isExactlyDivided) {
            base += 1;
            isExactlyDivided = base % divisor;
        }

        return base;
    }

    static pad(num, len, placeholder) {

        if(num == null) {
            return null;
        }

        if(len < num.toString().length || placeholder == null) {
            return num;
        }

        return (Array(len).join(placeholder) + num.toString()).slice(-len);
    }

}