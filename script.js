function toggleMenu() {
	var menu = document.getElementById("menu");
	menu.classList.toggle("active");
}

const originalList = [
	"Jardim Panorama",
	"Centro",
	"Jardim Bela Vista",
	"Jardim Cristo Rei",
];

function search() {
	document.getElementById("inputIcon").src = "img/search-icon.png";
	let keycode = event.keyCode;
	console.log(keycode);
	if (
		keycode === 8 ||
		(keycode > 46 && keycode < 91) ||
		(keycode > 95 && keycode < 106)
	) {
		let value = event.target.value;
		// let list = Array.from(document.getElementById("lista").childNodes).filter(n => n.nodeName === 'LI');
		let list = document.getElementById("lista");
		let listaFiltrada = Array.from(list.childNodes).filter(
			(i) => i.textContent.toLowerCase() === value.toLowerCase()
		);

		//	Altera a lista pra mostrar somente os filtrados
		if (listaFiltrada.length > 1) {
			list.innerHTML = "";
			listaFiltrada.forEach((item) => {
				list.appendChild(item);
			});
		} else if (value.length > 0) {
			// se nao encontrar nenhum item e tiver algo escrito no input habilita opção de adicionar
			document.getElementById("inputIcon").src = "img/plus-icon.png";
		}
		if (value.length < 1) {
			// se o input estiver vazio, reseta a lista pro valor original
			list.innerHTML = "";
			originalList.forEach((item) => {
				li = document.createElement("li");
				li.textContent = item;
				list.append(li);
			});
		}

		// if (list.length === 0) {
		// 	document.getElementById("inputIcon").src = "img/search-icon.png";
		// } else {
		// 	document.getElementById("inputIcon").src = "img/plus-icon.png";
		// }
	}
}
