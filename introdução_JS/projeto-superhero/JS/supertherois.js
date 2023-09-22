document.addEventListener("DOMContentLoaded", function(){

    var dadosSuperHeroi = {
        "nome esquadrao": "Esquadrao de herois",
        "cidade": "Brazilia city",
        "formado": 2019,
        "baseSecreta": "taverna do marcos",
        "ativa": true,
        "membros":[
            {
                "nome":"Marcos",
                "idade": 28,
                "identidadeSecreta":"Comtador de codigo men",
                "poederes":["escrever boas linhas de codigos","boleiro","criador de comteudo"]
            },
            {
                "nome": "Breno",
                "idade":85,
                "identidadeSecreta":"Bernardo",
                "poderes":["Jornalismo","inestigador", "injustiçao"]
            },
            {
                "nome": "Suzana Perigoza",
                "identidade":21,
                "identidadeSecreta":"CoringaGril",
                "poderes":["jiu-jitsu", "turismo", "Capoerista"]
            }
        ]
    }

    //selecionar a lista de super herois onde a gente deseja inserir os membros
    var listaSuperHeroi = document.getElementById("superheros-list")

    //interação sobre os menbros da equipe criandos os elementos de lista para cada um
    dadosSuperHeroi.membros.forEach(function(membro){
        var li = document.createElement("li")
        li.className = "list-goup-item"
        li.innerHTML = `<strong>${membro.nome}</strong> (idade: ${membro.idade}, Identidade Secreta: ${membro.identidadeSecreta})<br> Poderes:${membor.poderes}`
        listaSuperHeroi.appendChild(li)
    })

})