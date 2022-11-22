// grid erstellen / #snakeField

let body = document.querySelector("body");
let divField = document.createElement("div");
divField.id = "snakeField";
body.appendChild(divField);

// loop für 100 divs
for (let i = 0; i < 100; i++) {
	let div = document.createElement("div");
	div.classList.add("item");
	divField.appendChild(div);

	// Zufallsfarbe erstellen
	div.addEventListener("mouseover", () => {
		let zufall = () => Math.floor(Math.random() * 256);
		div.style.backgroundColor = /* "lightgreen" */ `rgb(${zufall()},${zufall()},${zufall()})`;
		setTimeout(() => {
			div.style.backgroundColor = "";
		}, 400);
	});
}
