const secretMessage = "BACKOFF"

// console.log(secretMessage.charCodeAt(3))

console.log(secretMessage)

function caesarEncrypt(msg, shift) {
    // översätt varje tecken
    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))


    }
    // shifta numret
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift

    }

    console.log(charCodes)

    let result = " "
    // översätt tillbaka
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])

    }

    return result

}

function caesarDecrypt(encryptedMsg, shift) {
    const charCodes = []
    for (let i = 0; i < encryptedMsg.length; i++) {
        charCodes.push(encryptedMsg[i].charCodeAt(0))

    }


    // 2. shifta det numret
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] - shift
    }

    let result = ""

    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])

    }

    return result
}



const encryptedMessage = caesarEncrypt(secretMessage, 4)
const decryptedMessage = caesarDecrypt(encryptedMessage, 4)

console.log(secretMessage, encryptedMessage, decryptedMessage)