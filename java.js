let cadastros = [];
let indiceAtual = -1;
let editando = false;

function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('sobrenome').value = '';
  document.getElementById('endereco').value = '';
  document.getElementById('telefone').value = '';
}

function preencherCampos(cadastro) {
  document.getElementById('nome').value = cadastro.nome;
  document.getElementById('sobrenome').value = cadastro.sobrenome;
  document.getElementById('endereco').value = cadastro.endereco;
  document.getElementById('telefone').value = cadastro.telefone;
}

function incluir() {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const endereco = document.getElementById('endereco').value;
  const telefone = document.getElementById('telefone').value;

  if (nome && sobrenome && endereco && telefone) {
    cadastros.push({ nome, sobrenome, endereco, telefone });
    indiceAtual = cadastros.length - 1;
    alert('Cadastro incluído com sucesso!');
    limparCampos();
  } else {
    alert('Preencha todos os campos!');
  }
}

function editar() {
  if (indiceAtual >= 0) {
    editando = true;
  }
}

function salvar() {
  if (editando && indiceAtual >= 0) {
    cadastros[indiceAtual] = {
      nome: document.getElementById('nome').value,
      sobrenome: document.getElementById('sobrenome').value,
      endereco: document.getElementById('endereco').value,
      telefone: document.getElementById('telefone').value
    };
    editando = false;
    alert('Cadastro atualizado!');
  }
}

function cancelar() {
  if (indiceAtual >= 0) preencherCampos(cadastros[indiceAtual]);
  else limparCampos();
  editando = false;
}

function excluir() {
  if (indiceAtual >= 0) {
    cadastros.splice(indiceAtual, 1);
    if (cadastros.length > 0) {
      indiceAtual = 0;
      preencherCampos(cadastros[indiceAtual]);
    } else {
      indiceAtual = -1;
      limparCampos();
    }
    alert('Cadastro excluído!');
  }
}

function primeiro() {
  if (cadastros.length > 0) {
    indiceAtual = 0;
    preencherCampos(cadastros[indiceAtual]);
  }
}

function anterior() {
  if (indiceAtual > 0) {
    indiceAtual--;
    preencherCampos(cadastros[indiceAtual]);
  }
}

function proximo() {
  if (indiceAtual < cadastros.length - 1) {
    indiceAtual++;
    preencherCampos(cadastros[indiceAtual]);
  }
}

function ultimo() {
  if (cadastros.length > 0) {
    indiceAtual = cadastros.length - 1;
    preencherCampos(cadastros[indiceAtual]);
  }
}
