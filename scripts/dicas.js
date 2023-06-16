const preList = {
	plastico: [
		{
			id: 1,
			dica: "Verifique os símbolos de reciclagem nas embalagens plásticas.",
		},
		{
			id: 2,
			dica: "Lave e seque as embalagens plásticas antes de colocá-las na lixeira de reciclagem.",
		},
		{ id: 3, dica: "Reduza o uso de plástico descartável." },
		{
			id: 4,
			dica: "Procure por pontos de coleta ou postos de reciclagem próximos à sua área.",
		},
	],
	metal: [
		{
			id: 1,
			dica: "Separe os diferentes tipos de metais para reciclagem.",
		},
		{
			id: 17,
			dica: "Amasse as latas de alumínio antes de levá-las para a reciclagem.",
		},
		{
			id: 3,
			dica: "Verifique se há instalações de reciclagem de metal em sua região.",
		},
		{
			id: 4,
			dica: "Considere reciclar outros itens de metal, como utensílios de cozinha e fios.",
		},
	],
	papel: [
		{
			id: 1,
			dica: "Certifique-se de separar o papel limpo dos resíduos de alimentos.",
		},
		{
			id: 2,
			dica: "Remova materiais não recicláveis, como adesivos e plásticos, do papel.",
		},
		{
			id: 3,
			dica: "Considere reciclar jornais, revistas, cartões e envelopes.",
		},
		{ id: 4, dica: "Procure por produtos de papel reciclado." },
	],
	vidro: [
		{ id: 1, dica: "Separe as embalagens de vidro por cor." },
		{
			id: 2,
			dica: "Remova tampas, rótulos e qualquer outro material não reciclável das embalagens de vidro.",
		},
		{ id: 3, dica: "Tome cuidado ao manusear o vidro quebrado." },
		{
			id: 4,
			dica: "Reutilize garrafas de vidro para armazenar líquidos em vez de comprar novas embalagens.",
		},
	],
	organico: [
		{
			id: 1,
			dica: "Comece uma composteira em casa para reciclar resíduos orgânicos.",
		},
		{ id: 2, dica: "Evite colocar resíduos orgânicos na lixeira comum." },
		{
			id: 3,
			dica: "Verifique se há programas de coleta de resíduos orgânicos em sua área.",
		},
		{
			id: 4,
			dica: "Utilize o composto orgânico produzido em sua composteira ou adquira adubo orgânico para fertilizar seu jardim.",
		},
	],
};

function preLista() {
	localStorage.setItem("lista", JSON.stringify(preList));
	location.reload();
}

const listaBase = {
	plastico: [],
	metal: [],
	papel: [],
	vidro: [],
	organico: [],
};

function salvaLista(list) {
	localStorage.setItem("lista", JSON.stringify(list));
}

const lista = JSON.parse(localStorage.getItem("lista")) || listaBase;

function loadList(filterParam) {
	let list = document.getElementById("lista");
	list.innerHTML = "";
	// timeout pra dar tempo de carregar as informações
	setTimeout(() => {
		var filterOptions = filterParam
			? filterParam
			: ["plastico", "metal", "papel", "vidro", "organico"];
		if (lista) {
			var { plastico, metal, papel, vidro, organico } = lista;
			let ul = document.createElement("ul");
			if (plastico.length > 0 && filterOptions.includes("plastico")) {
				plastico.forEach((item) => {
					let li = document.createElement("li");
					li.classList.add("plastico-list");
					li.textContent = item.dica;
					deleteBtn = document.createElement("span");
					deleteBtn.classList.add("removeDica");
					deleteBtn.id = item.id;
					deleteBtn.innerHTML = "x";
					deleteBtn.onclick = removeDica;
					li.append(deleteBtn);
					ul.append(li);
				});
			}
			if (metal.length > 0 && filterOptions.includes("metal")) {
				metal.forEach((item) => {
					li = document.createElement("li");
					li.classList.add("metal-list");
					li.textContent = item.dica;
					deleteBtn = document.createElement("span");
					deleteBtn.classList.add("removeDica");
					deleteBtn.id = item.id;
					deleteBtn.innerHTML = "x";
					deleteBtn.onclick = removeDica;
					li.append(deleteBtn);
					ul.append(li);
				});
			}
			if (papel.length > 0 && filterOptions.includes("papel")) {
				papel.forEach((item) => {
					let li = document.createElement("li");
					li.classList.add("papel-list");
					li.textContent = item.dica;
					deleteBtn = document.createElement("span");
					deleteBtn.classList.add("removeDica");
					deleteBtn.id = item.id;
					deleteBtn.innerHTML = "x";
					deleteBtn.onclick = removeDica;
					li.append(deleteBtn);
					ul.append(li);
				});
			}
			if (vidro.length > 0 && filterOptions.includes("vidro")) {
				vidro.forEach((item) => {
					let li = document.createElement("li");
					li.classList.add("vidro-list");
					li.textContent = item.dica;
					deleteBtn = document.createElement("span");
					deleteBtn.classList.add("removeDica");
					deleteBtn.id = item.id;
					deleteBtn.innerHTML = "x";
					deleteBtn.onclick = removeDica;
					li.append(deleteBtn);
					ul.append(li);
				});
			}
			if (organico.length > 0 && filterOptions.includes("organico")) {
				organico.forEach((item) => {
					let li = document.createElement("li");
					li.classList.add("organico-list");
					li.textContent = item.dica;
					deleteBtn = document.createElement("span");
					deleteBtn.classList.add("removeDica");
					deleteBtn.id = item.id;
					deleteBtn.innerHTML = "x";
					deleteBtn.onclick = removeDica;
					li.append(deleteBtn);
					ul.append(li);
				});
			}
			list.appendChild(ul);
		} else {
			loadList();
		}
	}, 200);
}

//modal adicionar dica
function showModalAddDica() {
	var modal = document.getElementById("modalAddDica");
	modal.classList.toggle("visible");
}
function clearForm() {
	document.getElementById("materialSelector").value = "";
	document.getElementById("materialSelector").classList = "";
	document.getElementById("dica").value = "";
	document.getElementById("validaText").classList = "";
}

function addDica() {
	var materialSelecionado = document.getElementById("materialSelector").value;
	var dica = document.getElementById("dica").value;
	if (materialSelecionado.length < 1) {
		document
			.getElementById("validaSelector")
			.classList.toggle("validaFormText");
		return;
	} else if (dica.length < 1) {
		document
			.getElementById("validaText")
			.classList.toggle("validaFormText");
		return;
	}
	var newLista = lista;
	switch (materialSelecionado) {
		case "plastico":
			newDica = { id: Date.now(), dica: dica };
			newLista.plastico.push(newDica);
			salvaLista(newLista);
			break;
		case "metal":
			newDica = { id: Date.now(), dica: dica };
			newLista.metal.push(newDica);
			salvaLista(newLista);
			break;
		case "papel":
			newDica = { id: Date.now(), dica: dica };
			newLista.papel.push(newDica);
			salvaLista(newLista);
			break;
		case "vidro":
			newDica = { id: Date.now(), dica: dica };
			newLista.vidro.push(newDica);
			salvaLista(newLista);
			break;
		case "organico":
			newDica = { id: Date.now(), dica: dica };
			newLista.organico.push(newDica);
			salvaLista(newLista);
			break;
		default:
			break;
	}

	clearForm();
	showModalAddDica();
	loadList();
}

removeDica = (ev) => {
	var material = ev.target.parentNode.classList[0].split("-")[0];
	newLista = lista;
	switch (material) {
		case "plastico":
			newLista.plastico = lista.plastico.filter(function (item) {
				return item.id !== parseInt(ev.target.id);
			});
			salvaLista(newLista);
			break;

		case "metal":
			newLista.metal = lista.metal.filter(function (item) {
				return item.id !== parseInt(ev.target.id);
			});
			salvaLista(newLista);
			break;

		case "papel":
			newLista.papel = lista.papel.filter(function (item) {
				return item.id !== parseInt(ev.target.id);
			});
			salvaLista(newLista);
			break;

		case "vidro":
			newLista.vidro = lista.vidro.filter(function (item) {
				return item.id !== parseInt(ev.target.id);
			});
			salvaLista(newLista);
			break;

		case "organico":
			newLista.organico = lista.organico.filter(function (item) {
				return item.id !== parseInt(ev.target.id);
			});
			salvaLista(newLista);
			break;

		default:
			break;
	}

	loadList();
};

function filterResults() {
	var form = document.getElementById("filterForm");
	var checkboxes = form.elements["filter"];
	var selectedFilters = [];

	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			selectedFilters.push(checkboxes[i].value);
		}
	}
	if (selectedFilters.length > 0) loadList(selectedFilters);
	else loadList();
}

function resetFilters() {
	var form = document.getElementById("filterForm");
	var checkboxes = form.elements["filter"];

	for (var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].checked = false;
	}
	loadList();
}
