const form = document.getElementById('formMorador');
    if (form) 
      {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
        

          const nome = document.getElementById('nome').value;
          const bloco = document.getElementById('bloco').value;
          const apartamento = document.getElementById('apartamento').value;
          const contato = document.getElementById('contato').value;

          if (!nome || !bloco || !apartamento || !contato) {
            alert("Todos os campos são obrigatórios!");
            return;
          }
          
          const response = await fetch('http://localhost:3030/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, bloco, apartamento, contato, })
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