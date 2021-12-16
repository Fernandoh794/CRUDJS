const CadastrarCliente = document.querySelector('.NewClient');
var Modal = document.querySelector('.modal')
var Modalmod = Modal.style;  // Manipular o CSS com JS
const FecharModal = document.querySelector('.FecharModal')



function AbrirModal() {
    Modalmod.marginTop = "0vh";
}

const fecharModal = () => {
    Modalmod.marginTop = "-100vh";
    
}

const tempClient = {
    nome: "Fernando",
    email: "cara-se@hotmail.com",
    celular: "79998545787",
    cidade: "Lagarto"
}


// CRUD

const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'))
    console.log(db_client)
    db_client.push(client)
    console.log(tempClient)
    localStorage.setItem("db_client", JSON.stringify(db_client))
}


// Events
CadastrarCliente.addEventListener('click', AbrirModal)
FecharModal.addEventListener('click', fecharModal)