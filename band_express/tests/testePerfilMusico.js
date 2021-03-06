const { Cidade, Estado, Musico, MusicoInstrumentos ,Instrumento, MusicoTecnicos, Tecnico, Minha_rede, Audio, Video, Usuario } = require('../models');

const query = async () => {
    
    // Buscar cidade e estado"
    // const cidade = await Cidade.findAll({   
    //     include:[
    //         {
    //             model: Estado,
    //             as: 'estado',
    //             attributes: ['uf'],
    //             where: {
    //                 id_estado: 26
    //             }
    //         }
    //     ],
    //     where: { id_cidade:  5028},
    //     attributes: ['nome'],
    // })

    // console.log(cidade[0].dataValues.estado.uf);

    // Buscar instrumentos e habilidades técnicas (id_musico) 
    // const buscarInstrumentos = await Musico.findAll({
    //     where: { id_musico: 2 },
    //     raw: true,
    //     attributes: ['musicos.instrumentos.instrumento'], 
    //     include: [
    //         {
    //             model: MusicoInstrumentos,
    //             as: 'musicos',
    //             attributes: [],
    //             include: [
    //                 {
    //                     model: Instrumento,
    //                     as: 'instrumentos',
    //                     attributes: []
    //                 }
    //             ]
    //         }
    //     ],
    // });

    // console.log(buscarInstrumentos)

    // let instrumentosBuscados = buscarInstrumentos[0].dataValues.musicos;

    // let instrumentos = [];

    // instrumentosBuscados.forEach(musico => {
    //     instrumentos.push(musico.instrumentos.dataValues.instrumento);
    // });

    // console.log(instrumentos);

    // const buscarHabilTecnicas = await Musico.findAll({
    //     where: { id_musico: 2 },
    //     include: [
    //         {
    //             model: MusicoTecnicos,
    //             as: 'musicosTec',
    //             include: [
    //                 {
    //                     model: Tecnico,
    //                     as: 'habilidade_tecnicas',
    //                     attributes: ['habilidade_tecnica']
    //                 }
    //             ]
    //         }
    //     ],
    // });

    // let tecnicosBuscados = buscarHabilTecnicas[0].dataValues.musicosTec;

    // let tecnicos = [];

    // tecnicosBuscados.forEach(musico => {
    //     tecnicos.push(musico.habilidade_tecnicas.dataValues.habilidade_tecnica);
    // });

    // console.log(tecnicos);

    // Buscar a quantidade de seguidores e seguindo
    const seguidores = await Minha_rede.count({ where: { id_usuario: 2 } });
    console.log(seguidores);

    const seguindo = await Minha_rede.count({ where: { id_usuario_seguido: 2 } });
    console.log(seguindo);

    // Buscar áudios e vídeos
    // const buscarVideos = await Videos

    // const dadosUsuario = await Usuario.findOne({ 
    //     where: { nome: 'Mitsu325' },
    //     raw: true,
    //     attributes: ['avatar', 'wallpaper', 'cidade.nome', 'cidade.estado.uf'],
    //     include: [{
    //         model: Cidade,
    //         as: 'cidade',
    //         attributes: [],
    //         include: [{
    //             model: Estado,
    //             as: 'estado',
    //             attributes: [],
    //         }]
    //     }]
    // });
    
    // console.log(dadosUsuario);

    // const buscarAudios = await Audio.findAll({
    //     where: { id_usuario: 3 },
    //     raw: true,
    //     attributes: ['tipo', 'titulo', 'caminho']
    // })

    // console.log(buscarAudios);

    
    // let audiosBuscados = dadosUsuario.usuarioAudio;

    // let audios = [];

    // audiosBuscados.forEach(audio => {
    //     audios.push(audio.dataValues);
    // });

    // let videosBuscados = dadosUsuario.usuarioVideo;

    // let videos = [];

    // videosBuscados.forEach(video => {
    //     videos.push(video.dataValues);
    // });

    // console.log(videos);

    /**
     * Buscar informações do Usuario através do id_musico
     */

    // const dadosMusico = await Musico.findOne({ 
    //     where: { id_musico: 1 },
    //     raw: true,
    //     attributes: ['id_musico', 'sobre', 'site', 'canal', 'canto', 'toco', 'tecnico', 'id_usuario', 'usuario.nome', 'usuario.email', 'usuario.avatar', 'usuario.wallpaper', 'usuario.cidade.cidade', 'usuario.cidade.estado.uf'],
    //     include: [{
    //         model: Usuario,
    //         as: 'usuario',
    //         attributes: [],
    //         include: [{
    //             model: Cidade,
    //             as: 'cidade',
    //             attributes: [],
    //             include: [{
    //                 model: Estado,
    //                 as: 'estado',
    //                 attributes: [],
    //             }]
    //         }] 
    //     }]
    // });

    // console.log(dadosMusico);

    // let telefone = "1146043255";
    // const ddd = telefone.slice(0,2);
    // console.log(ddd);
    // const telefoneParte1 = telefone.slice(2,6);
    // console.log(telefoneParte1)
    // const telefoneParte2 = telefone.slice(6,10);
    // console.log(telefoneParte2)
    // telefone = `(${ddd}) ${telefoneParte1}-${telefoneParte2}`
    // console.log(telefone)

    // Buscar informação da tabela usuario e músico - id_usuario
    // const dadosMusico = await Usuario.findOne({ 
    //     where: { id_usuario: 2 },
    //     raw: true,
    //     attributes: [ 'id_usuario', 'nome', 'email', 'avatar', 'wallpaper', 'cidade.cidade', 'cidade.estado.uf', 'musico.id_musico', 'musico.sobre', 'musico.site', 'musico.canal', 'musico.canto', 'musico.toco', 'musico.tecnico'],
    //     include: [{
    //         model: Cidade,
    //         as: 'cidade',
    //         attributes: [],
    //         include: [{
    //             model: Estado,
    //             as: 'estado',
    //             attributes: [],
    //         }],
    //     }],
    //     include: [{
    //         model: Musico,
    //         as: 'musico',
    //         attributes: [],
    //     }]
    // });

    // console.log(dadosMusico)

    // // Busca na tabela Usuario e Musico
    // const buscaMusico = await Usuario.findOne({ 
    //     where: { id_usuario: 2 },
    //     raw: true,
    //     attributes: [ 'id_usuario', 'nome', 'email', 'avatar', 'wallpaper', 'musico.id_musico', 'musico.sobre', 'musico.site', 'musico.canal', 'musico.canto', 'musico.toco', 'musico.tecnico'],
    //     include: [{
    //         model: Musico,
    //         as: 'musico',
    //         attributes: [],
    //     }]
    // });

    // // Busca cidade e UF
    // const buscaLocal = await Usuario.findOne({ 
    //     where: { id_usuario: 2 },
    //     raw: true,
    //     attributes: ['cidade.cidade', 'cidade.estado.uf'],
    //     include: [{
    //         model: Cidade,
    //         as: 'cidade',
    //         attributes: [],
    //         include: [{
    //             model: Estado,
    //             as: 'estado',
    //             attributes: [],
    //         }],
    //     }]
    // });

    // // Concatenar os objetos de busca
    // let dadosMusico = Object.assign({}, buscaMusico, buscaLocal);

    // console.log(dadosMusico);


    /**
     * Paginação
     */

    // const limit = 4;
    // const page = 2;

    // const videos = await Video.findAll({
    //     where: { id_usuario: 2 },
    //     raw: true,
    //     attributes: ['id_video', 'tipo', 'titulo', 'caminho'],
    //     order: [['id_video', 'DESC']],
    //     offset: (limit * page),
    //     limit,
    // });

    // console.log(videos);
}

query();