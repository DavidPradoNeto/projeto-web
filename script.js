function toggleMenu() {
	var menu = document.getElementById("menu");
	menu.classList.toggle("active");
}

const listaBase = {
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

// FUNÇÃO SOMENTE PARA INICIALIZAR A LISTA BASE (RODAR VIA CONSOLE)
function carregaLista() {
	localStorage.setItem("lista", JSON.stringify(listaBase));
}

function loadList(filterParam) {
	let list = document.getElementById("lista");
	list.innerHTML = "";
	// timeout pra dar tempo de carregar as informações
	setTimeout(() => {
		var filterOptions = filterParam
			? filterParam
			: ["plastico", "metal", "papel", "vidro", "organico"];

		var lista = JSON.parse(localStorage.getItem("lista"));
		if (lista) {
			var { plastico, metal, papel, vidro, organico } = lista;
			let ul = document.createElement("ul");
			if (plastico.length > 0 && filterOptions.includes("plastico")) {
				plastico.forEach((item) => {
					let li = document.createElement("li");
					li.id = "plastico-list";
					li.textContent = item.dica;
					deleteBtn = document.createElement("span");
					deleteBtn.classList.add("removeDica");
					deleteBtn.id = item.id;
					deleteBtn.innerHTML = "x";
					li.append(deleteBtn);
					ul.append(li);
				});
			}
			if (metal.length > 0 && filterOptions.includes("metal")) {
				metal.forEach((item) => {
					li = document.createElement("li");
					li.id = "metal-list";
					li.textContent = item.dica;
					deleteBtn = document.createElement("span");
					deleteBtn.classList.add("removeDica");
					deleteBtn.id = item.id;
					deleteBtn.innerHTML = "x";
					li.append(deleteBtn);
					ul.append(li);
				});
			}
			if (papel.length > 0 && filterOptions.includes("papel")) {
				papel.forEach((item) => {
					let li = document.createElement("li");
					li.id = "papel-list";
					li.textContent = item.dica;
					deleteBtn = document.createElement("span");
					deleteBtn.classList.add("removeDica");
					deleteBtn.id = item.id;
					deleteBtn.innerHTML = "x";
					li.append(deleteBtn);
					ul.append(li);
				});
			}
			if (vidro.length > 0 && filterOptions.includes("vidro")) {
				vidro.forEach((item) => {
					let li = document.createElement("li");
					li.id = "vidro-list";
					li.textContent = item.dica;
					deleteBtn = document.createElement("span");
					deleteBtn.classList.add("removeDica");
					deleteBtn.id = item.id;
					deleteBtn.innerHTML = "x";
					li.append(deleteBtn);
					ul.append(li);
				});
			}
			if (organico.length > 0 && filterOptions.includes("organico")) {
				organico.forEach((item) => {
					let li = document.createElement("li");
					li.id = "organico-list";
					li.textContent = item.dica;
					deleteBtn = document.createElement("span");
					deleteBtn.classList.add("removeDica");
					deleteBtn.id = item.id;
					deleteBtn.innerHTML = "x";
					li.append(deleteBtn);
					ul.append(li);
				});
			}
			list.appendChild(ul);
		} else {
			carregaLista();
			loadList();
		}
	}, 1);
}

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

const diasDaSemana = [
	"Segunda-Feira",
	"Terça-Feira",
	"Quarta-Feira",
	"Quinta-Feira",
	"Sexta-Feira",
	"Sábado",
];

const reciclaveis = {
	segunda: {
		local: ["Câmpus Universitários", "Ayrton Senna", "Fortunato Sibin"],
	},
	terca: {
		local: ["Alvorada", "São Pedro", "Varotto"],
	},
	quarta: {
		local: ["Primavera", "Country Ville Residence", "Vale Verde"],
	},
	quinta: {
		local: ["VI. Moreira", "Setor da Fafi", "V.I Morena"],
	},
	sexta: {
		local: ["José Tiburcio", "Sebastião Cunha", "Dr. João Lima"],
	},
	sabado: {
		local: ["Bela Vista", "Belle Bergamasco", "Panorama"],
	},
};

const turno1 = {
	segunda: {
		local: [
			"Câmpus Universitários",
			"Ayrton Senna",
			"Fortunato Sibin",
			"Primavera",
		],
	},
	terca: {
		local: ["Alvorada", "São Pedro", "Varotto", "VI. Moreira"],
	},
	quarta: {
		local: [
			"Country Ville Residence",
			"Vale Verde",
			"Vila Mariana",
			"Vila dos Operários",
		],
	},
	quinta: {
		local: [
			"Bela Vista",
			"Belle Bergamasco",
			"Panorama",
			"N. Sra. Aparecida",
		],
	},
	sexta: {
		local: ["José Tiburcio", "Sebastião Cunha", "Dr. João Lima", "União"],
	},
	sabado: {
		local: ["Staiger", "Cristo Rei", "Figueira", "VI. Recreio"],
	},
};
const turno2 = {
	segunda: {
		local: [
			"Novo Bandeirantes",
			"Jd Europa",
			"Seugling (Abaixo R. dos Expedicionários)",
			"Inácio",
		],
	},
	terca: {
		local: [
			"Bandeirantes",
			"Seugling (acima da R. dos Expedicionários)",
			"VI. Daher",
			"Piranga",
		],
	},
	quarta: {
		local: ["Galeano", "Estoril", "Tauros", "Res. Marlene"],
	},
	quinta: {
		local: ["VI. Assad", "VI. Henriques", "VI. Paraiso", "VI Haddad"],
	},
	sexta: {
		local: [
			"Conj. Jose Benedito Catarino",
			"Conj. Marta Dequech",
			"Res. Das Orquideas",
			"Conj. Novo Horizonte",
		],
	},
	sabado: {
		local: [
			"João XXIII",
			"Res. Vitória Régia",
			"Conj. Vitória Régia",
			"S. Judas Tadeu",
		],
	},
};

function carregaTabelas() {
	setTimeout(() => {
		loadTurno1();
		loadTurno2();
		loadReciclagem();
	}, 1);
}

function loadReciclagem() {
	var newDiv;
	const table = document.getElementById("tableReciclagem");
	const tableTitle = document.getElementById("titleReciclagem");
	tableTitle.innerHTML =
		"<br><h1>Coleta de Reciclagem - A partir das 07:30</h1>";
	diasDaSemana.forEach((dia) => {
		newDiv = document.createElement("div");
		newDiv.classList.add("tableItem");
		newDiv.innerHTML = `<h3>${dia}</h3>`;
		switch (dia) {
			case "Segunda-Feira":
				reciclaveis.segunda.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Terça-Feira":
				reciclaveis.terca.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Quarta-Feira":
				reciclaveis.quarta.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Quinta-Feira":
				reciclaveis.quinta.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Sexta-Feira":
				reciclaveis.sexta.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Sábado":
				reciclaveis.sabado.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			default:
				break;
		}
		table.appendChild(newDiv);
	});
}

function loadTurno1() {
	var newDiv;
	const table = document.getElementById("tableTurno1");
	const tableTitle = document.getElementById("titleTurno1");
	tableTitle.innerHTML =
		"<br><h1>Coleta de Resíduos Comuns (Turno 1) - Entre 07:00 e 16:00</h1>";
	diasDaSemana.forEach((dia) => {
		newDiv = document.createElement("div");
		newDiv.classList.add("tableItem");
		newDiv.innerHTML = `<h3>${dia}</h3>`;
		switch (dia) {
			case "Segunda-Feira":
				turno1.segunda.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Terça-Feira":
				turno1.terca.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Quarta-Feira":
				turno1.quarta.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Quinta-Feira":
				turno1.quinta.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Sexta-Feira":
				turno1.sexta.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Sábado":
				turno1.sabado.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			default:
				break;
		}
		table.appendChild(newDiv);
	});
}

function loadTurno2() {
	var newDiv;
	const table = document.getElementById("tableTurno2");
	const tableTitle = document.getElementById("titleTurno2");
	tableTitle.innerHTML =
		"<br><h1>Coleta de Resíduos Comuns (Turno 2) - A partir das 16:00</h1>";
	diasDaSemana.forEach((dia) => {
		newDiv = document.createElement("div");
		newDiv.classList.add("tableItem");
		newDiv.innerHTML = `<h3>${dia}</h3>`;
		switch (dia) {
			case "Segunda-Feira":
				turno2.segunda.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Terça-Feira":
				turno2.terca.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Quarta-Feira":
				turno2.quarta.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Quinta-Feira":
				turno2.quinta.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Sexta-Feira":
				turno2.sexta.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			case "Sábado":
				turno2.sabado.local.forEach((local) => {
					li = document.createElement("li");
					li.textContent = local;
					newDiv.appendChild(li);
				});
				break;
			default:
				break;
		}
		table.appendChild(newDiv);
	});
}
