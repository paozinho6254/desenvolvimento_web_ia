const participantes = [];

let idEmEdicao = null;
let ordemCrescente = true;

function adicionarParticipante(event) {
    event.preventDefault();
    const inputNome = document.getElementById("input_nome");
    if (idEmEdicao === null) {
        const obj = {
            id: participantes.length + 1,
            nome: inputNome.value
        }
        participantes.push(obj);
    } else {
        const pessoaEditando = participantes.find(p => p.id === idEmEdicao);
        if (pessoaEditando) {
            pessoaEditando.nome = inputNome.value;
        }
        idEmEdicao = null;
        document.getElementById("btn_submit").innerText = "Adicionar";

    }

    document.getElementById("input_nome").value = "";
    console.log(participantes);
    listar();
}

function listar(sorteadoId) {
    const tbody = document.getElementById("lista");
    tbody.innerHTML = '';
    participantes.forEach(p => {
        const tr = document.createElement("tr");
        if (p.id == sorteadoId) {
            tr.classList.add('sorteado', 'destaque');
        }
        tr.innerHTML = `
            <td>${p.id}</td>
            <td>${p.nome}</td>
            <td><button onclick="alterarDado(${p.id})">Alterar</button></td>
            <td><button onclick="excluirDado(${p.id})">Excluir</button></td>
            `;
        tbody.appendChild(tr);
    })
}

function sortear() {
    const idx = Math.floor(Math.random() * participantes.length);
    const sorteado = participantes[idx]
    listar(sorteado.id)
}

function alterarDado(id) {
    const participante = participantes.find(p => p.id === id);
    if (participante) {
        document.getElementById("input_nome").value = participante.nome;
        idEmEdicao = id;
        document.getElementById("btn_submit").innerText = "Alterar";

    }
}

function excluirDado(id) {
    const participante = participantes.find(p => p.id === id);
    if (participante !== -1) {
        participantes.splice(participante, 1)
    }
    listar();
}

function ordenarPorNome(){
    ordemCrescente = !ordemCrescente;

    participantes.sort((a, b) => {
        if(ordemCrescente){
            return a.nome.localeCompare(b.nome);
        } else {
            return b.nome.localeCompare(a.nome);
        }
    });

    listar();
}