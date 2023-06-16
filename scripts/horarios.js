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
