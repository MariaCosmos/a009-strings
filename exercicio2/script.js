
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const minhaString2 = minhaString.trim()

console.log(`numero de caracteres antes: ${minhaString.length}`)
console.log(`numero de caracteres depois ${minhaString2.length}`)

const novafrase = minhaString2.replace("________", "sticioso")

console.log(`nova frase: ${novafrase}`)