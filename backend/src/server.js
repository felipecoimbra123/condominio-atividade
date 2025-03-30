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

app.get('/veiculos', (req, res) => {
    const userQuery = 'SELECT * FROM veiculo'
    connection.query(userQuery, (err, results) => {
        if(err) {
            return res.status(500).json({ success: false, err, message: 'Erro ao buscar veículo' })
        }
        res.json({ success: true, veiculo: results })
    })
})

app.put('/veiculos/:id', (req, res) => {
    const { id } = req.params
    const { placa, modelo, cor, vaga } = req.body

    const query = 'UPDATE veiculo SET placa = ?, modelo = ?, cor = ?, vaga = ?'
    connection.query(query, [placa, modelo, cor, vaga, id], (err) =>{
        if(err) {
            return res.status(500).json({ success: false, err, message: 'Erro ao editar veículo'})
        }
        res.json({ success: true, message: 'Veículo editado com sucesso!' })
    })
})


app.delete('/veiculos/:id', (req, res) => {
    const { id } = req.params
    const query = 'DELETE FROM veiculo WHERE id = ?'
    connection.query(query, [id], (err) => {
        if(err) {
            return res.status(500).json({ success: false, err, message: 'Erro ao deletar veículo' })
        }
        res.json({ success: true, message: 'Veículo deletado com sucesso!' })
    })
})


app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));