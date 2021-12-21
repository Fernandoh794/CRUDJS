const CadastrarCliente = document.querySelector(".NewClient");
var Modal = document.querySelector(".modal");
var Modalmod = Modal.style; // Manipular o CSS com JS
const FecharModal = document.querySelector(".FecharModal");

function AbrirModal() {
  Modalmod.marginTop = "0vh";
}

const fecharModal = () => {
  Modalmod.marginTop = "-100vh";
};

const tempClient = {
  nome: "Nico",
  email: "cara-se@hotmail.com",
  celular: "79998545787",
  cidade: "Lagarto",
};

const GetLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? []; //* PEGA OS DADOS DO LOCALSTORAGE, TRANSFORMA EM JSON e Coloca na Variavel
const SetLocalStorage = (db_client) =>
  localStorage.setItem("db_client", JSON.stringify(db_client)); // Pega os dados e insere no Banco
// CRUD

// READ
const readClient = () => GetLocalStorage();
// Delete 
const deleteClient = (index) => {
    const db_client = readClient();
    db_client.splice(index, 1)
    SetLocalStorage(db_client)
}

// UPDATE
const updateClient = (index, client) => {
const db_client = readClient();
console.log(db_client)
db_client[index] = client
SetLocalStorage(db_client);
}

// CREATE 
const createClient = (client) => {
  const db_client = GetLocalStorage();
  db_client.push(client);
  SetLocalStorage(db_client);
};

// Events
CadastrarCliente.addEventListener("click", AbrirModal);
FecharModal.addEventListener("click", fecharModal);
