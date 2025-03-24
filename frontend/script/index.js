const formMorador = document.getElementById('formMorador');
    if (formMorador) 
      {
        formMorador.addEventListener('submit', async (e) => {
          e.preventDefault();
        

          const nome = document.getElementById('nome').value;
          const bloco = document.getElementById('bloco').value;
          const apartamento = document.getElementById('apartamento').value;
          const contato = document.getElementById('contato').value;

          if (!nome || !bloco || !apartamento || !contato) {
            alert("Todos os campos são obrigatórios!");
            return;
          }
          
          const response = await fetch('http://localhost:3030/morador/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, bloco, apartamento, contato})
        });

        const result = await response.json();

        if (result.success) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "cadCarro.html";
        } else {
            alert("Erro no cadastro!");
        }
      });
}

const formCarro = document.getElementById('formCarro');
    if (formCarro) 
      {
        formCarro.addEventListener('submit', async (e) => {
          e.preventDefault();
        

          const placa = document.getElementById('placa').value;
          const modelo = document.getElementById('modelo').value;
          const cor = document.getElementById('cor').value;
          const numVaga = document.getElementById('vaga').value;

          if (!placa || !modelo || !cor || !numVaga) {
            alert("Todos os campos são obrigatórios!");
            return;
          }
          
          const response = await fetch('http://localhost:3030/veiculo/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ placa, modelo, cor, numVaga })
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
