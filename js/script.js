// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// nome
let nomeUtente = prompt("What's your first name ?")
// cognome
let cognomeUtente = prompt("What's your last name ?")
// colore
let coloreUtente = prompt("What-'s your favourite color ?")
// costante
const fixedNumber = 21
// password generation
document.getElementById("password").innerHTML = 
`
<video src="img/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4" controls width="700px">
</video>

<h3>Ecco la tua oscena password</h3>

<h4>${nomeUtente}${cognomeUtente}${coloreUtente}${fixedNumber}</h4>
`

