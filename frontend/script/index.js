const formMorador = document.querySelector('.formMorador');
    if (formMorador) 
      {
        formMorador.addEventListener('submit', async (e) => {
          e.preventDefault();
        

          const nome = document.getElementById('nome').value;
          const bloco = document.getElementById('bloco').value;
          const apartamento = document.getElementById('apartamento').value;
          const telefone = document.getElementById('telefone').value;
          const email = document.getElementById('email').value;
          const status = document.getElementById('status').value;

          console.log({ nome, bloco, apartamento, telefone, email, status});
          
          const response = await fetch('http://localhost:3030/morador/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, bloco, apartamento, telefone, email, status})
        });
        
        const result = await response.json();

        console.log(result);
        
        if (result.success) {
          alert("Cadastro realizado com sucesso!");
          window.location.href = "cadCarro.html";
        } else {
          alert("Erro no cadastro!");
        }
      });
    }

const formCarro = document.querySelector('.formCarro');
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
