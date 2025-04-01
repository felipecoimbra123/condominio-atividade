const formCarro = document.querySelector('.formCarro');
    if (formCarro) 
      {
        formCarro.addEventListener('submit', async (e) => {
          e.preventDefault();
        

          const placa = document.getElementById('placa').value;
          const modelo = document.getElementById('modelo').value;
          const cor = document.getElementById('cor').value;
          const numVaga = document.getElementById('vaga').value;
          const dono = JSON.parse(localStorage.getItem('morador').id)

          if (!placa || !modelo || !cor || !numVaga) {
            alert("Todos os campos são obrigatórios!");
            return;
          }
          
          const response = await fetch('http://localhost:3030/veiculo/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ placa, modelo, cor, numVaga, dono })
        });

        const result = await response.json();

        if (result.success) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "listagem.html";
        } else {
            alert("Erro no cadastro!");
        }
      });
}