const secretMessage = "BACKOFF"

// console.log(secretMessage.charCodeAt(3))

console.log(secretMessage)

function caesarEncrypt(msg) {
    // översätt varje tecken
    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))


    }
    // shifta numret
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + 1

    }

    console.log(charCodes)

    let result = " "
    // översätt tillbaka
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])

    }

    return result

}



const encryptedMessage = caesarEncrypt(secretMessage)

console.log(secretMessage,encryptedMessage)