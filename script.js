const form = document.querySelector('#form');
const table = document.querySelector('#table tbody');
const idInput = document.querySelector('#id');
const clienteInput = document.querySelector('#cliente');
const descricaoInput = document.querySelector('#descricao');

// Array que armazenará as ordens de serviço cadastradas
const ordensServico = [];

// Função para adicionar uma nova ordem de serviço
function adicionarOrdemServico(id, cliente, descricao) {
  const ordemServico = { id, cliente, descricao };
  ordensServico.push(ordemServico);
}

// Função para exibir as ordens de serviço cadastradas na tabela
function exibirOrdensServico() {
  // Limpa a tabela
  table.innerHTML = '';

  // Popula a tabela com as ordens de serviço cadastradas
  ordensServico.forEach((ordemServico) => {
    const row = table.insertRow();
    row.insertCell().textContent = ordemServico.id;
    row.insertCell().textContent = ordemServico.cliente;
    row.insertCell().textContent = ordemServico.descricao;
  });
}

// Função para limpar os campos do formulário
function limparCampos() {
  idInput.value = '';
  clienteInput.value = '';
  descricaoInput.value = '';
}

// Event listener para o envio do formulário
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Adiciona a nova ordem de serviço
  adicionarOrdemServico(idInput.value, clienteInput.value, descricaoInput.value);

  // Exibe as ordens de serviço cadastradas na tabela
  exibirOrdensServico();

  // Limpa os campos do formulário
  limparCampos();
});