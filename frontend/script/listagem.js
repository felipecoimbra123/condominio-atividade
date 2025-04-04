async function loadMorador() {
    const response = await fetch('http://localhost:3030/morador')
    const data = await response.json()
    const tbody = document.querySelector('.morador-tbody')
    tbody.innerHTML = ''

  
  
    data.morador.forEach(morador => {
      const row = document.createElement('tr')
      row.innerHTML = `
        <td>${morador.nome}</td>
        <td>${morador.bloco}</td>
        <td>${morador.apartamento}</td>
        <td>${morador.telefone}</td>
        <td>${morador.email}</td>
        <td>${morador.status}</td>
        <td>
          <button class='btn-delete-morador' onclick='deleteMorador(${morador.id})'>Excluir</button>
          <button class='btn-edit-morador' onclick='editMorador(${morador.id})'>Editar</button>
          <button class='btn-add-veiculo' onclick='addVeiculo(${morador.id});'>Adicionar veículo</button>
        </td>`
        
      tbody.appendChild(row)
    });
  }

function addVeiculo(moradorId) {
  localStorage.setItem("morador", moradorId);
  window.location.href = "cadCarro.html";
}

async function deleteMorador(id) {
  await fetch(`http://localhost:3030/morador/${id}`, {
    method: 'DELETE'
  })
  loadMorador()
}

async function editMorador(id){
  const nome = prompt("Digite o novo nome: ")
  const bloco = prompt("Digite o novo bloco: ")
  const apartamento = prompt("Digite o novo apartamento: ")
  const telefone = prompt("Digite o novo telefone: ")
  const email = prompt("Digite o novo email: ")

  await fetch(`http://localhost:3030/morador/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({nome, bloco, apartamento, telefone, email})
  })
  loadMorador()
}


async function loadVeiculo() {
  const response = await fetch('http://localhost:3030/veiculo')
  const data = await response.json()
  const tbody = document.querySelector('.veiculo-tbody')

  if (tbody.innerHTML ?? false) {
    tbody.innerHTML = ''
  }

  data.veiculo.forEach(veiculo => {
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${veiculo.placa}</td>
      <td>${veiculo.modelo}</td>
      <td>${veiculo.cor}</td>
      <td>${veiculo.vaga}</td>
      <td>
      
        <button class='btn-delete-veiculo' onclick='deleteVeiculo(${veiculo.id})'>Excluir</button>
        <button class='btn-edit-veiculo' onclick='editVeiculo(${veiculo.id})'>Editar</button>
        
  
      </td>`
      
    tbody.appendChild(row)
  });
}

async function deleteVeiculo(id) {
  await fetch(`http://localhost:3030/veiculo/${id}`, {
    method: 'DELETE'
  })
  loadVeiculo()
}

async function editVeiculo(id){
  const placa = prompt("Digite a nova placa: ")
  const modelo = prompt("Digite o novo modelo: ")
  const cor = prompt("Digite a nova cor: ")
  const vaga = prompt("Digite a nova vaga: ")

  await fetch(`http://localhost:3030/veiculo/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({placa, modelo, cor, vaga})
  })
  loadVeiculo()
}

window.onload = () => {
  loadMorador()
  loadVeiculo()
}