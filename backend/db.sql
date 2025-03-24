create database condominio;
use condominio;

create table morador(
	id int primary key auto_increment,
    nome varchar(105),
    bloco varchar(45),
    apartamento varchar(45),
    telefone varchar(45),
    email varchar(105),
    status enum('residente', 'proprietario', 'visitante'),
    criado_em timestamp default now()
);

create table veiculo(
	id int primary key auto_increment,
    placa varchar(45),
    modelo varchar(255),
    cor varchar(45),
    morador_id int not null,
    box varchar(255),
    foreign key (morador_id) references morador(id)
);