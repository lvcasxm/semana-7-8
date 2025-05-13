const filmes = [
    {
        id: 1,
        titulo: "Twin Peaks: Fire Walk with Me",
        imagem: "./images/firewalkwithme.jpg",
        autor: "Dirigido por David Lynch e co-escrito por Robert Engels",
        ano: "14 de maio de 1993 (no Brasil)",
        descricaoCurta: "Prequela dos acontecimentos da série Twin Peaks.",
        descricaoLonga: "Acompanhamos aqui os últimos dias de Laura Palmer e sua eventual morte. É um filme visceral que destrincha todos os aspectos da vida da personagem; seu namoro conturbado, seu caso com um colega de escola, o abuso sofrido em casa, o consumo de drogas, e a prostituição."
    },
    {
        id: 2,
        titulo: "The Blair Witch Project",
        imagem: "./images/blairwitch.jpg",
        autor: "Eduardo Sánchez e Daniel Myrick",
        ano: "1 de outubro de 1999 (no Brasil)",
        descricaoCurta: "Um trio vai acampar numa floresta amaldiçoada para descobrir a verdade sobre uma lenda local.",
        descricaoLonga: "Os filmes de terror e, principalmente, os filmes found footage, não seriam os mesmos sem esse filme. É sensacional, e eu nem gosto de filmes de terror, então posso atestar que esse é bom de verdade. Vejo pessoas dizendo que ele não é tão 'assustador', no sentido literal da palavra, e devo dizer que concordo, mas não significa que o filme não dê medo, ele dá, e muito, só que a forma como o medo é construído aqui é muito diferente dos filmes de terror atuais... não tem jumpscare, é pura atmosfera, puro caos, pura incerteza. É como se esse filme fosse a personificação cinematográfica de uma música de black metal."
    },
    {
        id: 3,
        titulo: "The End of Evangelion",
        imagem: "./images/endofevangelion.jpg",
        autor: "Hideaki Anno e Kazuya Tsurumaki",
        ano: "19 de julho de 1993 (no Japão)",
        descricaoCurta: "Não tem descrição curta adequada pra esse filme.",
        descricaoLonga: "É com certeza o mais viajado da lista, e chega a ser difícil descrevê-lo porque não é um filme que funciona bem por conta própria, é meio que necessário que você tenha assistido o anime antes, mas, em suma, é o final oficial de Neon Genesis Evangelion, é onde nós acompanhamos a destruição da NerV e o projeto de instrumentalização humana em si. É talvez o filme mais angustiante e mais comtemplativo que eu já vi, é muito bom mesmo; a cena da Asuka sendo morta merece ser assistida por todo mundo pelo menos uma vez na vida."
    },
    {
        id: 4,
        titulo: "La Haine",
        imagem: "./images/LA_HAINE.jpeg",
        autor: "Mathieu Kassovitz",
        ano: "1 de dezembro de 1995 (no Brasil)",
        descricaoCurta: "Um dia na vida de um trio de amigos no meio de tensões políticas em Paris.",
        descricaoLonga: "É um dos filmes mais legais que eu já vi, legal no sentido literal da palavra. É um filme muito bem filmado, que utiliza enquadramentos muito interessantes, que tem um roteiro muito bom, atuações muito boas... é um filme muito bom no geral. A relação dos três personagens e o entorno deles é muito bem feita também, você sente o ódio dos personagens e sente a tensão ao redor deles."
    }
];

function carregarFilmes() {
    const filmesContainer = document.getElementById('filmes-container');
    if (!filmesContainer) return;

    filmes.forEach(filme => {
        const filmeCard = document.createElement('div');
        filmeCard.className = 'filme-card';
        
        const link = document.createElement('a');
        link.href = `detalhes.html?id=${filme.id}`;
        
        const img = document.createElement('img');
        img.src = filme.imagem;
        img.alt = filme.titulo;
        img.loading = 'lazy';
        
        const titulo = document.createElement('h3');
        titulo.textContent = filme.titulo;
        
        const descCurta = document.createElement('p');
        descCurta.textContent = filme.descricaoCurta;
        
        const diretor = document.createElement('p');
        diretor.innerHTML = `<strong>Diretor:</strong> ${filme.autor}`;
        
        const ano = document.createElement('p');
        ano.innerHTML = `<strong>Ano:</strong> ${filme.ano}`;
        
        link.appendChild(img);
        link.appendChild(titulo);
        link.appendChild(descCurta);
        link.appendChild(diretor);
        link.appendChild(ano);
        
        filmeCard.appendChild(link);
        filmesContainer.appendChild(filmeCard);
    });
}

function carregarDetalhesFilme() {
    const detalhesContainer = document.getElementById('detalhes-filme');
    if (!detalhesContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const filmeId = parseInt(urlParams.get('id'));
    const filme = filmes.find(f => f.id === filmeId);

    if (filme) {
        detalhesContainer.innerHTML = `
            <h1>${filme.titulo}</h1>
            <img src="./${filme.imagem}" alt="${filme.titulo}" class="detalhes-imagem">
            <p><strong>Diretor:</strong> ${filme.autor}</p>
            <p><strong>Ano:</strong> ${filme.ano}</p>
            <div class="descricao-longa">
                <p>${filme.descricaoLonga}</p>
            </div>
            <a href="index.html" class="voltar-link">Voltar para a lista de filmes</a>
        `;
    } else {
        detalhesContainer.innerHTML = `
            <p>Filme não encontrado.</p>
            <a href="index.html" class="voltar-link">Voltar para a lista de filmes</a>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('filmes-container')) {
        carregarFilmes();
    }
    if (document.getElementById('detalhes-filme')) {
        carregarDetalhesFilme();
    }
});