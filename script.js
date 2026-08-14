const h1 = document.querySelector("h1")
const button = document.querySelector("button")

button.addEventListener("click", adicionarClasseAoH1)

function adicionarClasseAoH1(){

    if(h1.classList.contains("cor-diferente")){
        h1.classList.remove("cor-diferente")

        document.body.classList.remove("cor-diferente")
        button.innerText = "Mudar cor"
    } else {

        h1.classList.add("cor-diferente")
        document.body.classList.add("cor-diferente")
        button.innerText = "Voltar ao original"
    }
}