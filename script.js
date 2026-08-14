const h1 = document.querySelector("h1")
const button = document.querySelector("button")

button.addEventListener("click", adicionarClasseAoH1)

function adicionarClasseAoH1(){
    h1.classeList.add("cor-diferente")

    if(h1.classList.contains("cor-diferente")){
        button.innerText = "Voltar ao original"
    } else {
        button.innerText = "Mudar cor"
    }
}