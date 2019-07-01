function getInnerWindow() {
				  var w = window.innerWidth;
				  var h = window.innerHeight;
				  document.getElementById("demo").innerHTML = "Width: " + w + "<br>Height: " + h;
				}

function Datetest() {
	let d = new Date;
	document.getElementById("test").innerHTML = d;
}


function getRandomFact() {
	const facts = ['Eine Katze hat 18 Krallen, fünf an den Vorderpfoten und vier and den hinteren Zehen.',
				'Eine Katze läuft auf den Zehenspitzen. Sie hat relativ lange "Füße", daher sieht es so elegant	aus, wenn sie geht und das ist unter anderem ein Grund dafür, dass sie im wahrsten Sinne des Wortes so sprunghaft ist.',
				'Der Hungertrieb und Jagdtrieb sind bei einer Katze nicht miteinander verbunden. Auch eine satte Katze, die einen Menschen hat, der sie bedient will jagen.',
				'Fakt 4',
				'Fakt 5']
	let random = Math.floor(Math.random() * 5)

	document.getElementById("textfact").innerHTML = facts[random];

}


console.log(facts[random]);