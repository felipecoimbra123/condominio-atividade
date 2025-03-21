async function load() {
    const response = await fetch('http://localhost:3000/moradorros')
    const data = await response.json()
    const tbody = document.querySelector('tbody')
  
    if (tbody.innerHTML ?? false) {
      tbody.innerHTML = ''
    }
  
  
    data.morador.forEach(morador => {
      console.log(morador, localStorage.getItem("owner"))
      const row = document.createElement('tr')
      row.innerHTML = `
        <td>${morador.nome_morador}</td>
        <td>${morador.license_plate}</td>
        <td>${morador.parking_space}</td>
        <td>
        ${morador.owner === JSON.parse(localStorage.getItem('owner'))?.id ?`
          <button class='btn-delete-morador' onclick='deletemorador(${morador.id})'>Excluir Veículo</button>
          <button class='btn-edit-morador' onclick='editmorador(${morador.id})'>Editar Veículo</button>`: "Nenhuma Ação Disponível"
        }
        </td>`
        
      tbody.appendChild(row)
    });
  }
  
  window.onload = () => {
    load()
  }