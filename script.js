let carrosListados = [];

let carros = [
  {
    modelo: "Renault Kwid",
    preco: 59090,
    versao: "Zen",
    motor: "1.0 12V",
    img: "https://revistacarro.com.br/wp-content/uploads/2022/01/Renault-Kwid-Intense-2022_4.jpg",
  },
  {
    modelo: "Fiat Mobi",
    preco: 60903,
    versao: "Like",
    motor: "1.0 8V",
    img: "https://www.autodashboard.com.br/wp-content/uploads/2021/05/fiat-mobi-trekking-2022-2.jpg",
  },
  {
    modelo: "Hyundai HB20",
    preco: 71190,
    versao: "Sense",
    motor: "1.0 12V",
    img: "https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Hyundai/HB20/Facelift/Hyundai+HB20+2023+proje%C3%A7%C3%A3o+traseira.jpg",
  },
  {
    modelo: "Fiat Argo",
    preco: 70477,
    versao: "1.0",
    motor: "1.0 6V",
    img: "https://guiaauto.com.br/wp-content/uploads/2022/02/Argo-4.jpg",
  },
  {
    modelo: "Volkswagen Gol",
    preco: 72690,
    versao: "1.0",
    motor: "1.0 12V",
    img: "https://p2.trrsf.com/image/fget/cf/1200/675/middle/images.terra.com/2021/08/06/cross_gol.jpg",
  },
  {
    modelo: "Chevrolet Onix",
    preco: 73820,
    versao: "1.0",
    motor: "1.0 12V",
    img: "https://guiaauto.com.br/wp-content/uploads/2022/02/Onix-Hatch-1.jpg",
  },
  {
    modelo: "Volkswagen Polo",
    preco: 75700,
    versao: "1.0",
    motor: "1.0 12V",
    img: "https://www.webmotors.com.br/wp-content/uploads/2023/02/24183835/Chevrolet-Onix-1.0-9771-scaled.jpg",
  },
  {
    modelo: "Hyundai HB20S",
    preco: 78890,
    versao: "Vision",
    motor: "1.0 12V",
    img: "https://guiaauto.com.br/wp-content/uploads/2022/02/HB20S-2.jpg",
  },
  {
    modelo: "Fiat Cronos",
    preco: 80325,
    versao: "1.3",
    motor: "1.3 8V",
    img: "https://cdn.motor1.com/images/mgl/Q02nZ/s1/projecao-fiat-argo-e-cronos-reestilizados.webp",
  },
  {
    modelo: "Renault Sandero",
    preco: 80590,
    versao: "S-Edition",
    motor: "1.0 12V",
    img: "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2021/09/20210219/2020-dacia-sandero-1160x653.jpg",
  },
  {
    modelo: "Chevrolet Camaro",
    preco: 400000,
    versao: "Sport",
    motor: "V8 6.2L",
    img: "https://www.revistafullpower.com.br/wp-content/uploads/2019/06/ca01.jpg",
  },
  {
    modelo: "BMW",
    preco: 800000,
    versao: "Sport",
    motor: "V8 6.2L",
    img: "https://www.planetcarsz.com/img/carros/2022/04/bmw-7-series-2023-008-20220421181131-1280x925.jpg",
  },
];

const carrosFiat = carros.filter((obj) => obj.modelo.includes("Fiat"));

function fiat() {
  document.getElementById("demo").innerHTML = "";
  for (const carro of carrosFiat) {
    document.getElementById("titulo").innerHTML = "Carros da Fiat";
    document.getElementById("demo").innerHTML += template(carro);
  }
}

let precosFiltrados = carros.filter((carro) => {
  return carro.preco > 50000 && carro.preco < 70000;
});

function valoresFiltrados() {
  document.getElementById("demo").innerHTML = "";
  for (const carro of precosFiltrados) {
    document.getElementById("titulo").innerHTML = "Valores entre 50000 e 70000";
    document.getElementById("demo").innerHTML += template(carro);
  }
}

const carrosFiltradosSedition = carros.filter((obj) =>
  obj.versao.includes("S-Edition")
);

function filterSedition() {
  document.getElementById("demo").innerHTML = "";
  for (const carro of carrosFiltradosSedition) {
    document.getElementById("titulo").innerHTML = "Versão SEdition";
    document.getElementById("demo").innerHTML += template(carro);
  }
}

let precosFiltradosAcima80 = carros.filter((carro) => {
  return carro.preco > 80000;
});

function valoresiltradosAcima80() {
  document.getElementById("demo").innerHTML = "";
  for (const carro of precosFiltradosAcima80) {
    document.getElementById("titulo").innerHTML = "Valores acima de 80000";
    document.getElementById("demo").innerHTML += template(carro);
  }
}

let precosFiltradosAbaixo100 = carros.filter((carro) => {
  return carro.preco < 100000;
});

function valoresiltradosAbaixo100() {
  document.getElementById("demo").innerHTML = "";
  for (const carro of precosFiltradosAbaixo100) {
    document.getElementById("titulo").innerHTML = "Valores abaixo de 100000";
    document.getElementById("demo").innerHTML += template(carro);
  }
}

function todosCarros() {
  document.getElementById("demo").innerHTML = "";
  for (const carro of carrosListados) {
    document.getElementById("titulo").innerHTML = "Todos carros";
    document.getElementById("demo").innerHTML += template(carro);
  }
}

function limparFiltros() {
  document.getElementById("demo").innerHTML = "";
  todosCarros();
}

function template(carro) {
  if (!carro) {
    throw new Error("Falta informar um carro");
  }
  return `<div class="col-lg-4 mb-4">
        ${montadorTemplateCard.obterCardCompleto(carro)}
      </div>
      `;
}

let montadorTemplateCard = {
  obterCardCompleto: function (maquina) {
    return `
        <div class="card">
            <div class="container-img">
                ${this.obterImg(maquina.img)}
            </div>
            ${this.obterCorpo(maquina)}
        </div>`;
  },
  obterImg: function (img) {
    return ` <img class="img-fluid" src=${img}>`;
  },
  obterCorpo: function (veiculo) {
    return `<div class="card-body">
            <h5 class="card-title">${veiculo.modelo}</h5>
            Valor: ${veiculo.preco},00<br/>
            Versão: ${veiculo.versao}<br/>
            Motor: ${veiculo.motor}
          </div>`;
  },
};

function excluirArgo() {
  let indiceCarroExcluir = carrosListados.findIndex((carro) =>
    carro.modelo.toLowerCase().includes("fiat argo")
  );
  if (indiceCarroExcluir < 0) {
    throw new Error("Carro não encontrado");
  }
  carrosListados.splice(indiceCarroExcluir, 1);
  todosCarros();
}

function filtrarPorNome(nome) {
  return carros.filter((obj) => obj.modelo.toLowerCase().includes(nome));
}

window.onload = function () {
  carrosListados = carros;
  document.querySelector("#basic-search").addEventListener("input", (event) => {
    let carrosFiltrados = filtrarPorNome(event.target.value.toLowerCase());
    carrosListados = carrosFiltrados;
    todosCarros();
  });
};

// função => entrada, processamento e saída(saída opcional)

// const devs = [
//     {
//         name: 'A',
//         age: 26,
//         tech: ['JavaScript', 'React'],
//         addr: { country: 'India', city: 'Pune' }
//     },
//     {
//         name: 'B',
//         age: 25,
//         tech: ['Node', 'AngularJs'],
//         addr: { country: 'USA', city: 'NY' }
//     },
//     {
//         name: 'C',
//         age: 27,
//         tech: ['Java', 'AWS'],
//         addr: { country: 'UK', city: 'London' }
//     }
// ];
// const devReact = devs
//     .filter(obj => obj.tech.includes('React'))
//     .map(obj => ({ name: obj.name, tech: obj.tech }));
// console.log(devReact);
