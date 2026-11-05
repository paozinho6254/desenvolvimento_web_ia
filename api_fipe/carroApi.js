async function buscarVeiculo() {
  const status = document.getElementById("status");
  const codigoFipe = document.getElementById("codigoFipe")?.value.trim();

  if (!codigoFipe) {
    status.textContent = "Por favor, digite o código FIPE.";
    return;
  }

  status.textContent = "Carregando...";

  try {
    const response = await fetch(`https://brasilapi.com.br/api/fipe/preco/v1/${codigoFipe}`);

    // Tratamento específico de status de erro
    if (!response.ok) {
      if (response.status === 500) {
        throw new Error("O servidor da API está temporariamente indisponível (Erro 500). Tente novamente mais tarde.");
      }
      if (response.status === 404) {
        throw new Error("Veículo não encontrado para o código FIPE informado (Erro 404).");
      }
      throw new Error(`Falha na requisição. Código: ${response.status}`);
    }

    const data = await response.json();
    status.textContent = "Dados carregados com sucesso!";
    console.log(data);

  } catch (error) {
    
    status.textContent = error.message;
    console.error("Detalhes do erro:", error);
  }
}
function renderCarros(carros) {
    const listaCarros = document.getElementById("listaCarros");
    carros.forEach(c => {
        const li = document.createElement("li");
        li.textContent = c.valor;
        listaCarros.appendChild(li);
    });
}