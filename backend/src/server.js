const express = require('express');
const cors = require('cors');
const connection = require('./db_config.js');
const app = express();

app.use(cors());
app.use(express.json());

const port = 3030;

app.post('/morador/cadastro', (req, res) => {
    const { nome, bloco, apartamento, telefone, email, status} = req.body;
    const userQuery = 'INSERT INTO morador (nome, bloco, apartamento, telefone, email, status) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(userQuery, [nome, bloco, apartamento, telefone, email, status], (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro ao cadastrar usuário.', error: err.sqlMessage });
        }
        res.json({ success: true, message: 'Cadastro realizado com sucesso!' });
    });
});

app.post('/veiculos/cadastro', (req, res) => {
    const { placa, modelo, cor, vaga } = req.body;
    const userQuery = 'INSERT INTO veiculo (placa modelo, cor, vaga) VALUES (?, ?, ?, ?)';
    connection.query(userQuery, [placa, modelo, cor, vaga], (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro ao cadastrar usuário.', error: err.sqlMessage });
        }
        res.json({ success: true, message: 'Cadastro realizado com sucesso!' });
    });
});

app.delete('/veiculos/:id', (req, res) => {

    const deleteQuery = 'DELETE FROM users WHERE id = ?';
    connection.query(deleteQuery, [id], (err, result) => {
        if (err) {
            console.error('Erro ao remover carro:', err);
            return res.status(500).json({ success: false, message: "Erro ao remover o carro." });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Carro não encontrado." });
        }

        res.json({ success: true, message: "Carro removido com sucesso!" });
    });
});


app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));