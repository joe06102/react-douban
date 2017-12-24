export class Encode {

    static getBase64(data) {

        const base64Table = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];
        const padLen = data.length % 3;
        let binaryCharCodes = [];
        let encodeIndexes = [];
        let encodeChars = '';

        for(let i = 0; i < data.length - padLen; i += 3){ 
            
            const octet1 = data.charCodeAt(i);
            const octet2 = data.charCodeAt(i+1);
            const octet3 = data.charCodeAt(i+2);

            const padedCode1 = Encode.padLeft(octet1.toString(2), 8, 0).toString();
            const padedCode2 = Encode.padLeft(octet2.toString(2), 8, 0).toString();
            const padedCode3 = Encode.padLeft(octet3.toString(2), 8, 0).toString();

            const padedCodes = padedCode1 + padedCode2 + padedCode3;

            encodeIndexes.push(parseInt(Encode.padLeft(padedCodes.slice(0, 6), 8, 0), 2));
            encodeIndexes.push(parseInt(Encode.padLeft(padedCodes.slice(6, 12), 8, 0), 2));
            encodeIndexes.push(parseInt(Encode.padLeft(padedCodes.slice(12, 18), 8, 0), 2));
            encodeIndexes.push(parseInt(Encode.padLeft(padedCodes.slice(18), 8, 0), 2));
        }
        
        encodeChars = encodeIndexes.length ? encodeIndexes.map(index => base64Table[index]).join('') : '';

        if(padLen) {

            let suffixChars = ['==', '='][padLen - 1];
            const restChars = data.slice(data.length - padLen);

            //console.log(`rest chars: ${restChars}`);

            if(padLen === 1) {
                const restPadedChar = Encode.padRight(Encode.padLeft(restChars.charCodeAt(0).toString(2), 8, 0), 12, 0);
                const restEncodeChar1 = base64Table[parseInt(restPadedChar.slice(0, 6), 2)];
                const restEncodeChar2 = base64Table[parseInt(restPadedChar.slice(6), 2)];

                encodeChars += restEncodeChar1 + restEncodeChar2 + suffixChars;
            }

            if(padLen === 2) {
                const restPadedChar = Encode.padRight(
                    Encode.padLeft(restChars.charCodeAt(0).toString(2), 8, 0) + 
                    Encode.padLeft(restChars.charCodeAt(1).toString(2), 8, 0), 18, 0);

                const restEncodeChar1 = base64Table[parseInt(restPadedChar.slice(0, 6), 2)];
                const restEncodeChar2 = base64Table[parseInt(restPadedChar.slice(6, 12), 2)];
                const restEncodeChar3 = base64Table[parseInt(restPadedChar.slice(12), 2)];
                
                encodeChars += restEncodeChar1 + restEncodeChar2 + restEncodeChar3 + suffixChars;
            }            
        }

        return encodeChars;
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

    static pad(num, len, placeholder, direction = true) {

        if(num == null) {
            return null;
        }

        if(len < num.toString().length || placeholder == null) {
            return num;
        }

        var paddedStr = '';

        if(direction) {
            paddedStr = (Array(len).join(placeholder) + num.toString()).slice(-len);
        }
        else {
            paddedStr = (num.toString() + Array(len).join(placeholder)).slice(0, len);
        }

        return paddedStr;
    }

    static padLeft(num, len, placeholder) {
        return Encode.pad(num, len, placeholder, true);
    }

    static padRight(num, len, placeholder) {
        return Encode.pad(num, len, placeholder, false);
    }

}