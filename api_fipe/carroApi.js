async function filtrarMarcas() {
    try {
        const tipo = document.getElementById("tipo").value;
        const response = await fetch(`https://brasilapi.com.br/api/fipe/marcas/v1/${tipo}`);
        const data = await response.json();
        
        const selectMarca = document.getElementById("marca");
        selectMarca.innerHTML = '<option value="">Selecione a marca...</option>';
        
        data.forEach(item => {
            const option = document.createElement("option");
            option.value = item.valor;
            option.textContent = item.nome;
            selectMarca.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
}

async function filtrarModelos() {
    try {
        const tipo = document.getElementById("tipo").value;
        const marca = document.getElementById("marca").value;
        const response = await fetch(`https://brasilapi.com.br/api/fipe/veiculos/v1/${tipo}/${marca}`);
        const data = await response.json();
        
        const selectModelo = document.getElementById("modelo");
        selectModelo.innerHTML = '<option value="">Selecione o modelo...</option>';
        
        data.forEach(item => {
            const option = document.createElement("option");
            option.value = item.valor;
            option.textContent = item.modelo;
            selectModelo.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
}

async function filtrarAnos() {
    try {
        const tipo = document.getElementById("tipo").value;
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const response = await fetch(`https://brasilapi.com.br/api/fipe/anos/v1/${tipo}/${marca}/${modelo}`);
        const data = await response.json();
        
        const selectAno = document.getElementById("ano");
        selectAno.innerHTML = '<option value="">Selecione o ano...</option>';
        
        data.forEach(item => {
            const option = document.createElement("option");
            option.value = item.valor;
            option.textContent = item.nome;
            selectAno.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
}

async function buscarDetalhes() {
    try {
        const tipo = document.getElementById("tipo").value;
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const ano = document.getElementById("ano").value;
        
        const response = await fetch(`https://brasilapi.com.br/api/fipe/detalhes/v1/${tipo}/${marca}/${modelo}/${ano}`);
        const data = await response.json();
        
        const corpoTabela = document.getElementById("corpoTabela");
        const tr = document.createElement("tr");
        
        const tdModelo = document.createElement("td");
        tdModelo.textContent = data.modelo;
        
        const tdAno = document.createElement("td");
        tdAno.textContent = data.anoModelo;
        
        const tdValor = document.createElement("td");
        tdValor.textContent = data.valor;
        
        tr.appendChild(tdModelo);
        tr.appendChild(tdAno);
        tr.appendChild(tdValor);
        
        corpoTabela.appendChild(tr);
    } catch (error) {
        console.error(error);
    }
}