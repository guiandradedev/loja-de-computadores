const itens = [{
    nome: 'Produto 1',
    descrição: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet',
    preco: 99.9,
    img: "img/pc.png"
}, {
    nome: 'Produto 2',
    descrição: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet',
    preco: 99.9,
    img: "img/pc.png"
}, {
    nome: 'Produto 3',
    descrição: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet',
    preco: 99.9,
    img: "img/pc.png"
}, {
    nome: 'Produto 4',
    descrição: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet',
    preco: 99.9,
    img: "img/pc.png"
}, {
    nome: 'Produto 5',
    descrição: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet',
    preco: 99.9,
    img: "img/pc.png"
}, {
    nome: 'Produto 6',
    descrição: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet',
    preco: 99.9,
    img: "img/pc.png"
},];

const qualidadesItem = [{
    qualidade: "Produtos certificados",
    img: 'img/icons_qualidades/medal.png',
}, {
    qualidade: "Preços custo-beneficio",
    img: 'img/icons_qualidades/save-money.png',
}, {
    qualidade: "Garantia estendida",
    img: 'img/icons_qualidades/certificado-de-garantia.png',
}, {
    qualidade: "Entregas mais rápidas",
    img: 'img/icons_qualidades/entrega-rapida.png',
}, {
    qualidade: "Parcelamento em até 12x",
    img: 'img/icons_qualidades/dia-de-pagamento.png',
}, {
    qualidade: "Suporte técnico 24hrs",
    img: 'img/icons_qualidades/tools.png',
}, {
    qualidade: "Promoções constantes",
    img: 'img/icons_qualidades/promocoes.png',
}, {
    qualidade: "Peças de alta qualidade",
    img: 'img/icons_qualidades/placa-de-video.png',
}];

function atualizaProdutos() {
    var containerProdutos = document.querySelector(".produtos")
    for (var i = 0; i < itens.length; i++) {
        var nomeProd = document.createElement('h1');
        var precoProd = document.createElement('h1');
        var infoProd = document.createElement('p');
        var imgProd = document.createElement('img');
        var div = document.createElement('div');
        var btn = document.createElement('button');

        imgProd.classList.add("imgProd");
        btn.id = "btn" + i;
        btn.setAttribute("onclick", "atualizaCarrinho(this.id)");
        btn.classList.add("btn");
        div.classList.add("produto");

        div.appendChild(imgProd);
        containerProdutos.appendChild(div);
        div.appendChild(nomeProd);
        div.appendChild(infoProd);
        div.appendChild(precoProd);
        div.appendChild(btn);

        nomeProd.innerHTML = itens[i].nome;
        infoProd.innerHTML = itens[i].descrição;
        precoProd.innerHTML = itens[i].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        imgProd.src = itens[i].img;
        btn.innerHTML = "Ver mais";
    }
}
function atualizaInicio() {

    console.log("Site ainda sem responsivo, não consegui entender sobre como funciona isso no CSS ainda.")
    console.log("quero aproveitar as proximas duas semanas para estudar isso, acredito que nos proximos trabalhos")
    console.log("eu ja conseguirei fazer com o responsivo.")
    console.log("Enquanto isso, meus sites são feitos em 1920x1080 ou 2560x1080")

    var ContainerProd = document.querySelector(".produtosPremiados")
    for (var i = 0; i < 3; i++) {
        var nomeProd = document.createElement('h1');
        var precoProd = document.createElement('h1');
        var infoProd = document.createElement('p');
        var imgProd = document.createElement('img');
        var div = document.createElement('div');
        var btn = document.createElement('button');

        imgProd.classList.add("imgProd");
        btn.id = "btn" + i;
        btn.setAttribute("onclick", `alert('Ainda não vendemos esse produto.')`);
        btn.classList.add("btn");
        div.classList.add("produto");

        div.appendChild(imgProd);
        ContainerProd.appendChild(div);
        div.appendChild(nomeProd);
        div.appendChild(infoProd);
        div.appendChild(precoProd);
        div.appendChild(btn);

        nomeProd.innerHTML = itens[i].nome;
        infoProd.innerHTML = itens[i].descrição;
        precoProd.innerHTML = itens[i].preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        imgProd.src = itens[i].img;
        btn.innerHTML = "Ver mais";
    }

    var ContainerQual = document.querySelector(".qualidades");
    for (var i = 0; i < qualidadesItem.length; i++) {

        var qualidadesSingle = document.createElement("div");
        var qualidade = document.createElement("div");
        var qualidadeP = document.createElement("p");
        var qualidadeImg = document.createElement("img");

        qualidadesSingle.classList.add("qualidadeSingle")
        qualidade.classList.add("qualidade")

        qualidade.appendChild(qualidadeImg);
        ContainerQual.appendChild(qualidadesSingle);
        qualidadesSingle.appendChild(qualidade);
        qualidadesSingle.appendChild(qualidadeP);

        qualidadeImg.src = qualidadesItem[i].img;

        qualidadeP.innerHTML = qualidadesItem[i].qualidade;
    }

}