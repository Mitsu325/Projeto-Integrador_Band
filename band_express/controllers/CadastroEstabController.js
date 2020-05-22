const { Usuario, Cidade, Estado, Estabelecimento, Funcionamento } = require('../models');
const bcrypt = require('bcrypt');

const cadastroEstabController = {
	formEstab: async (req, res) => {
		//fazendo a busca de todos os estados
		const buscaEstados = await Estado.findAll({})

		//criando uma variável que vai conter a lista de estados
		listaEstados = []

		//buscando os estados e incluindo na lista
		buscaEstados.forEach((estado) => {
			listaEstados.push(estado.dataValues.uf)
		})

		return res.render('form-estab', {
			estados: listaEstados
		});
	},

	saveEstab: async (req, res) => {

		let { nome, senha, email, servico, sobre, estado, cidade, site, emailEstab, 
			telefone, inputFuncionamento, inputAbertura, inputFechamento } = req.body;

		nome = nome.trim();
		senha = senha.trim();
		email = email.trim();
		sobre = sobre ? sobre.trim() : '';
		site = site ? site.trim() : '';
		emailEstab = emailEstab ? emailEstab.trim() : '';
		telefone = telefone ? telefone.trim() : '';

		// Buscando o id_cidade e id_estado na tabela cidade
		const findIdCidade = await Cidade.findAll({
			//Inner join
			include: [{
				// com a tabela Estado
				model: Estado,
				// utilizando a chave estabelecida na associação do model Cidade com Estado, cujo alias é 'estado'
				as: 'estado',
				// com um filtro adicional do estado que o usuário digitou
				where: {
					uf: estado
				}
			}],
			// e um último filtro da cidade que o usuário digitou
			where: {
				nome: cidade
			},
		});

		const idCidade = findIdCidade[0].dataValues.id_cidade;
		const idEstado = findIdCidade[0].dataValues.id_estado;
		
		// Inserindo informação na tabela usuario   
		const dadosUsuario = await Usuario.create({
			nome,
			email,
			senha: bcrypt.hashSync(senha, 10),
			data_cadastro: new Date(),
			id_cidade: idCidade,
			id_estado: idEstado,
			id_tipos_perfil: 3
		})

		let funcionamento = 0;
		(inputAbertura != '' && inputFechamento != '') ? funcionamento = 1 : null;

		// Inserindo dados complementares na tabela estab
		const dadosEstab = await Estabelecimento.create({
			categoria: servico,
			sobre,
			site,
			email: emailEstab,
			telefone,
			funcionamento,
			id_usuario: dadosUsuario.id_usuario
		});

		if (funcionamento){
			// Inserindo dados complementares na tabela músico
			const dadosFuncionamento = await Funcionamento.create({
				dia: inputFuncionamento,
				horario_abertura: inputAbertura,
				horario_fechamento: inputFechamento,
				id_estab: dadosEstab.id_estab
			});
		}

		// Setar session do usuario
		let usuario = { id_usuario:dadosUsuario.id_usuario , nome, senha, email, id_tipos_perfil: 1};
		req.session.usuario = usuario;

		return res.redirect('/home')
	}
}

module.exports = cadastroEstabController;