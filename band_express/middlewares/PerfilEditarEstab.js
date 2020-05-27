const { validationResult } = require('express-validator');
const { Usuario, Cidade, Estado, Estabelecimento, Funcionamento, Minha_rede } = require('../models'); 

const perfilEditarEstab = {
    error: async (req, res, next) => {
        let errors = validationResult(req).array({ onlyFirstError: true });
        console.log(errors)

        let id_usuario = req.session.usuario.id_usuario

        // Dados da tabela Usuario
        const dadosUsuario = await Usuario.findAll({
			where: {
                id_usuario: id_usuario
            }
        });

        // Quantidade de pessoas que o usuario esta seguindo e que seguem ele
        const totalSeguindo = await Minha_rede.count({
			where: {
                id_usuario: id_usuario
            }
        });
        const totalSeguidores = await Minha_rede.count({
			where: {
                id_usuario_seguido: id_usuario
            }
        });

        // Dados da tabela Estabelecimento referente ao usuario
        const dadosEstab = await Estabelecimento.findAll({
			where: {
                id_usuario: id_usuario
            }
        });

        // Dados da tabela Cidade/Estado referente ao usuario
        const nomeCidade = await Cidade.findAll({
            where: {
                id_cidade: dadosUsuario[0].dataValues.id_cidade
            }
        })
        const nomeEstado = await Estado.findAll({
            where: {
                id_estado: dadosUsuario[0].dataValues.id_estado
            }
        })

        // Buscar lista de Estados
        const estados = await Estado.findAll({ 
            raw: true,
            attributes: ['uf'] 
        });

        // Tratamento dos dados da tabela Funcionamento
        let dadosFunc = [];
        if(dadosEstab[0].dataValues.funcionamento){
            // Dados da tabela Funcionamento referente ao usuario
            const dadosFuncionamento = await Funcionamento.findAll({
                where: {
                    id_estab: dadosEstab[0].dataValues.id_estab
                }
            });
            for (let i = 0; i < dadosFuncionamento.length; i++) {
                dadosFunc[i] = { 
                    dia: dadosFuncionamento[i].dataValues.dia,
                    horario_abertura: dadosFuncionamento[i].dataValues.horario_abertura,
                    horario_fechamento: dadosFuncionamento[i].dataValues.horario_fechamento
                };
            }
        }

        let dadosView = {
            avatar: dadosUsuario[0].dataValues.avatar,
            wallpaper: dadosUsuario[0].dataValues.wallpaper,
            totalSeguindo,
            totalSeguidores,
            id_estab: dadosEstab[0].dataValues.id_estab,
            categoria: dadosEstab[0].dataValues.categoria,
            cidade: nomeCidade[0].dataValues.nome,
            estado: nomeEstado[0].dataValues.uf,
            site: dadosEstab[0].dataValues.site,
            servicos: dadosEstab[0].dataValues.servicos,
            sobre: dadosEstab[0].dataValues.sobre,
            funcionamento: dadosEstab[0].dataValues.funcionamento,
            mensagemNull: 'Ops, você não informou este campo',
            dadosFunc
        }

        if(errors.length) {
            res.render('perfil-estab-editar', { 
                title: 'Perfil-editar', 
                usuario: req.session.usuario, 
                dadosUsuario,
                estados,
                dadosEstab, 
                dadosView
            });        
        } 

        next();
    }
}

module.exports = perfilEditarEstab;