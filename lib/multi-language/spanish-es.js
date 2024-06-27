const MID_GB = {
idioma: 'Português',
idioma_code: 'pt',
  
//main.js
methodCode1: 'MÉTODO PARA VINCULAR',
methodCode2: 'COMO DESEJA SE CONECTAR?',
methodCode3: 'Opção',
methodCode4: 'Código QR',
methodCode5: 'Código de 8 digitos.',
methodCode6: 'Escreva somente o número de',
methodCode7: 'a opção para se conectar.',
methodCode8: 'DICA',
methodCode9: 'Se usa Termux, Replit, Linux, o Windows',
methodCode10: 'Use estes comandos para una execução direta:',
methodCode11: (chalk) => `NÃO SÃO PERMITIDOS NÚMEROS QUE NÃO SEJAM ${chalk.bold.greenBright("1")} OU ${chalk.bold.greenBright("2")}, NEM LETRAS OU SÍMBOLOS ESPECIAIS.\n${chalk.bold.yellowBright("DICA: COPIE O NÚMERO DA OPÇÃO E COLE NO CONSOLE.")}`,
methodCode12: 'Inicia com código QR',
methodCode13: 'Inicia com código de 8 dígitos',
methodCode14: 'Inicio predeterminado com opções',
phNumber2: (chalk) => `Por favor, digite o número do WhatsApp.\n${chalk.bold.yellowBright("DICA: Copie o número do WhatsApp e cole no console.")}\n${chalk.bold.yellowBright("Exemplo: +551190909090")}\n${chalk.bold.magentaBright('---> ')}`,
pairingCode: 'CÓDIGO DE VINCULAÇÃO:',
mCodigoQR: `\n✅ ESCANEIE O CÓDIGO QR. EXPIRA EM 45 SEGUNDOS`,
mConexion: `\n❒⸺⸺⸺⸺【• CONECTADO •】⸺⸺⸺⸺❒\n│\n│ 🟢 Conectado ao WhatsApp com sucesso.\n│\n❒⸺⸺⸺⸺【• CONECTADO •】⸺⸺⸺⸺❒`,
mConexionOFF: "\n❌𒌍 CONEXÃO INTERROMPIDA, POR FAVOR ESPERE UM POUCO, ESTOU REINICIANO...\nSE DER ERRO VOLTE A INICIAR COM: npm start", 

//Alertas
mAdminTrue: '*Você é um admin. Não haverão consequências* 🤭',
mAdmin: '*Preciso ser admin. para poder banir*',
mOwner: '*Se você tem permissões ou é o propietario/a, use `#on restringir`*\n\n> _Se você ativá-los, as funções não serão limitadas._',
mAntiDelete: '*Desative a função anti-eliminar usando `#off antieliminar` para evitar o reenvío de mensagens apagadas.*',
mAdvertencia: '> ⚠️ *AVISO*\n\n',
mInfo: '> 📢 *INFORMAÇÃO*\n\n',
mExito: '> ✅ *SUCESSO!*\n\n',
mError: '> ❌ *ERRO!*\n\n',

//_allantilink.js
mTiktok: '*Não são permitidos links do TikTok!*\n*Você será expurgado!*',
mYoutube: '*Não são permitidos links do YouTube!*\n*Você será expurgado!*',
mTelegram: '*Não são permitidos links do Telegram!*\n*Você será expurgado!*',
mFacebook: '*Não são permitidos links do Facebook!*\n*Você será expurgado!*',
mInstagram: '*Não são permitidos links do Instagram!*\n*Você será expurgado!*',
mX: '*Não são permitidos links do X (Twitter)!*\n*Você será expurgado!*',
mDiscord: '*Não são permitidos links do Discord!*\n*Você será expurgado!*',
mThreads: '*Não são permitidos links do Threads!*\n*Você será expurgado!*',
mTwitch: '*Não são permitidos links do Twitch!*\n*Você será expurgado!*',

//_antilink.js
mWhatsApp: '*Não são permitidos links de grupos do WhatsApp!*\n*Você será expurgado!*',

//_antilink2.js
mWhatsApp2: '*Não são permitidos nenhum tipo de links!*\n*Você será expurgado!*',
  
//antiprivado.js
smsprivado: (m, cuentas) => `*@${m.sender.split`@`[0]} O privado da bot está bloqueado.*\n\n> *Entre no grupo da Raiden Shogun para alugar um bot para seu grupo!*\n${cuentas}\n\n⚠️ \`\`\`Vou te bloquear.\`\`\` ⚠️`, 

//_anti-internacional.js
mFake: (m) => `✋ *O usuário @${m.sender.split`@`[0]} não é bem-vindo neste grupo!*`, 
mFake2: (user) => `🚫 *O usuário @${user.split`@`[0]} não é bem-vindo neste grupo!*`, 
  
//antispam.js
smsNoSpam: "SPAM DE MENSAGENS LEVE", 
smsNoSpam1: (m, motive) => `*@${m.sender.split`@`[0]} ESTÁ IMPEDIDO DE USAR COMMANDOS DURANTE 30 SEGUNDOS*\n\n*MOTIVO: ${motive}*`, 
smsNoSpam2: "SPAM DE MENSAGENS MODERADO", 
smsNoSpam3: (m, motive) => `*@${m.sender.split`@`[0]} ESTÁ IMPEDIDO DE USAR COMMANDOS DURANTE 1 MINUTO*\n\n*MOTIVO: ${motive}*`, 
smsNoSpam4: "SPAM DE MENSAGENS ALARMANTE", 
smsNoSpam5: (m, motive) => `*@${m.sender.split`@`[0]} ESTÁ IMPEDIDO DE USAR COMMANDOS DURANTE 2 MINUTOS*\n\n*MOTIVO: ${motive}*`, 
smsNoSpam6: (mention) => `*${mention} É PROIBIDO FLOODAR MENSAGENS/COMANDOS!*`, 

//antitraba.js
smsAntiTraba: (sender) => `O administrador @${m.sender.split("@")[0]} acaba de enviar um texto com muitos caracteres -.-!`, 
smsAntiTraba2: '[ ! ] Detectei uma mensagem com muitos caractéres [ ! ]', 
smsAntiTraba3: 'Marcar o chat como lido ✓', 
smsAntiTraba4: (sender, name) => `O número : wa.me/${m.sender.split("@")[0]}\n• Nick : ${name}\n‼️Acaba de enviar uma mensagem que contém muitos caractéres. Talvez seja trava e por isso será removido.`, 

//_autodetec.js
smsAutodetec1: (usuario, m) => `*» ${usuario}*\n*MUDOU O NOME DO GRUPO*\n\n🔰 *AGORA O GRUPO SE CHAMA:*\n*${m.messageStubParameters[0]}*`, 
smsAutodetec2: (usuario, groupMetadata) => `*» ${usuario}*\n*TROCOU A IMAGEM DO:*\n*${groupMetadata.subject}*`, 
smsAutodetec3: (usuario, m) => `*» ${usuario}*\n*MUDOU A DESCRIÇÃO DO GRUPO*\n🔰 *NOVA DESCRIÇÃO:*`, 
smsAutodetec4: (usuario, m, groupMetadata) => `🔒 ${usuario}*\n*PERMITIU QUE ${m.messageStubParameters[0] == 'on' ? 'SOMENTE ADMS' : 'TODOS'} PODEM CONFIGURAR ${groupMetadata.subject}*`, 
smsAutodetec5: (groupMetadata, usuario) => `*O LINK DO GRUPO ${groupMetadata.subject} FOI REDEFINIDO POR:*\n*» ${usuario}*`, 
smsAutodetec6: (m) => `O GRUPO *${m.messageStubParameters[0] == 'on' ? 'ESTÁ FECHADO 🔒' : 'ESTÁ ABERTO 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? 'SOMENTE OS ADMS PODEM FALAR' : 'TODOS PODEM ENVIAR MENSAGENS'} NESTE GRUPO*`, 
smsAutodetec7: (m, usuario) =>  `@${m.messageStubParameters[0].split`@`[0]} AGORA É ADMIN DESTE GRUPO\n\n😼AÇÃO REALIZADA POR: ${usuario}`, 
smsAutodetec8: (m,  usuario) => `@${m.messageStubParameters[0].split`@`[0]} DEIXOU DE SER ADMIN DESTE GRUPO\n\n😼AÇÃO REALIZADA POR: ${usuario}`, 
smsAutodetec9: (usuario, m) => `*» ${usuario}*\n*MUDOU A DURAÇÃO DAS MENSAGENS TEMPORÁRIAS PARA : *@${m.messageStubParameters[0]}*`, 
smsAutodetec10: (usuario, m) => `*» ${usuario}*\nDESATIVOU AS MENSAGENS TEMPORÁRIAS`, 

//información
smsinfo: "💖 *Saiba mais sobre as novidades da última versão.*", 
name: "*_NOME_*", 
user: "*_USUÁRIO(A)_*", 

//Descargar 
smsYT1: "*_TÍTULO_*", 
smsYT2: "*_AUTOR(A)_*", 
smsYT3: "*_LETRA_*", 
smsYT4: "*_LINK_*:", 
smsYT5: "*_DURAÇÃO_*:", 
smsYT6: "*_ARTISTA_*", 
smsYT7: "*_ÁLBUM_*", 
smsYT8: "*_DATA_*", 
smsYT9: "*_GÊNEROS_*", 
smsYT9: "*_UPADO_*", 
smsYT10: "*_VISUALIZAÇÕES_*", 
smsYT11: "*_TAMANHO_*", 
smsYT12: "*_TIPO_*", 
smsYT13: "*_ARTISTA_*", 
smsYT14: "*_DESCRIÇÃO_*", 
smsYT15: "*_PUBLICADO_*", 
smsinsta1: "*_SEGUIDORES_*", 
smsinsta2: "*_INSCRITOS_*", 
smsinsta3: "*_PUBLICAÇÕES_*", 
smsinsta4: "*_BIOGRAFIA_*", 
smsinsta5: "*_LIKES_*", 

//descarga
smsYtlist: (usedPrefix) => `*_VOCÊ PODE BAIXAR O VÍDEO QUE DESEJA DESTA FORMA:_*\n${usedPrefix}video <numero>\n${usedPrefix}audio <numero>\n\n*EXEMPLO:*`, 
smsfb: '*_VIDEO DO FACEBOOK_*', 
smsfb2: '*_JÁ ESTOU BAIXANDO PRA VOCÊ!_*', 
smsfb3: '*_Hmmm algo deu errado. VERIFIQUE O LINK E TENTE NOVAMENTE._*', 
smsgit: '*_LINK INVÁLIDO. PRECISA SER UM LINK DO GITHUB_*', 
smsgit2: '*_ENVIANDO O ARQUIVO SOLICITADO, AGUARDE..._*\n*_SE O ARQUIVO NÃO FOR ENVIADO É PORQUÊ NÃO AGUENTEI O PESO._*', 
smsInsta: '*_COLOQUE UM LINK DO INSTAGRAM PARA BAIXAR O VÍDEO/IMAGEM_*\n*_EXEMPLO:_*', 
smsInsta2: '*_COLOQUE O NOME DE USUÁRIO DO INSTAGRAM PARA BAIXAR OS STORIES._*\n*_EXEMPLO:_*', 
smsInsta3: '*_O USUÁRIO ESTÁ INCORRETO OU NÃO POSTOU STORIES_*', 
smsFire: '*_DIGITE UM LINK VÁLIDO DO MEDIAFIRE (Máx. 100mb)_*.', 
smsApk: '**_Escreva o nome do aplicativo_*', 
smsApk2: '*_ÚLTIMA ATUALIZAÇÃO_*', 
smsApk3: '*_APKs BAIXADOS_*', 
smsApk4: '*_O APK É MUITO PESADO_*.', 
smsTikTok: '*_ESCREVA O NOME DE USUÁRIO DO TIKTOK SEM (@)_*\n*_EXEMPLO:_*', 
smsTikTok1: '*_FOTO DO PERFIL_*', 
smsTikTok2: '*_INSIRA UM LINK DO TIKTOK PARA BAIXAR O VÍDEO._*\n*_EXEMPLO:_*', 
smsTikTok3: '*_O LINK ESTÁ INCORRETO OU O CONTEÚDO FOI REMOVIDO!_*', 
smsTikTok4: '*_PRONTO! VOCÊ JÁ JÁ TERÁ SEU VÍDEO!_*', 
smsTikTok5: (anu) => `*Foi enviado 1 de ${anu.length} imágens.* ✅\n_O resto poderá ser visto no meu PV_`, 
smsTikTok6: '*_ESCREVA O NOME DE USUÁRIO DO TIKTOK SEM (@)_*\n*_EXEMPLO:_*', 
smsSpoti: 'Enviando sua música...', 
smsAguarde: (additionalText) => `*_ENVIADO_* ${additionalText}, *_ESPERE UM POQUINHO._*`, 
smsAud: '*_JÁ ESTOU BAIXANDO SEU ÁUDIO, ESPERE UM POUCO_*', 
smsVid: '*_JÁ ESTOU BAIXANDO O VÍDEO, CALMA AÍ..._*',
smsYT: '*_NÃO ENCONTREI UM LINK PARA ESTE NÚMERO. POR FAVOR DIGITE 1 E O_*', 
smsY2: (usedPrefix, command) => `*_PARA PODER USAR O COMANDO DESTA FORMA_* (${usedPrefix + command} <numero>), *_POR FAVOR, REALIZE A BUSCA DO VÍDEO COM O COMANDO_*`, 

//ejemplos
smsMalused: "*_ESCREVA O QUE QUER PESQUISAR_*\n*_EXEMPLO_*\n", 
smsMalused2: '*_ESCREVA O NOME DE UM ANIME_*', 
smsMalused3: '*_ESCREVA O NOME DE UMA MÚSICA PARA VER A LETRA_*\n*_EXEMPLO:_*', 
smsMalused4: '*_ESCREVA O NOME DE UM VÍDEO OU CANAL DO YOUTUBE_*', 
smsMalused4: '*_ESCREVA O NOME OU O TÍTULO_*\n*_EXEMPLO_*', 
smsMalused5: '*_ENVIE UM LINK DO FACEBOOK PARA BAIXAR O VÍDEO_*\n*_EXEMPLO_*', 
smsMalused6: '*_ENVIE UM LINK DO GITHUB_*\n*_EXEMPLO_*', 
smsMalused7: '⚡ *USE O COMANDO DESSA FORMA:*\n', 
smsMalused8: `🐈 *USE O COMANDO COMO NO EXEMPLO À SEGUIR:*\n`, 
smsMalused9: `🐈 *RESPONDA À UMA MENSAGEM COM O COMANDO. EXEMPLO:*\n`, 

//Error
smsMalError: `\`\`\`OPS, TIVE UM PROBLEMINHA...\`\`\``, 
smsMalError2: `\`\`\`ALGO SAIU ERRADO...\`\`\`\n`, 
smsMalError3: `\`\`\`ERRO! REPORTE O PROBLEMA UTILIZANDO ESTE COMANDO:\`\`\`\n`, 

//grupos
smsAdd: 'Olá! Sou a Raiden Shogun-MD, bot de WhatsApp. Uma pessoa do grupo usou o comando para te adicionar, mas não consegui. Portanto estou te enviando o convite para entrar no grupo. Entra aí ;)', 
smsAdd2: 'Enviando o convite no privado...', 
smsGrup: '*_GRUPO ABERTO! ME ADOREM :3_*', 
smaGrup2: '*_APENAS OS ADMs PODEM FALAR NESTE GRUPO!_*', 

//buscadores
buscador: "*_RESULTADOS DE:_* ", 
buscador2: "*_EPISÓDIOS:_*", 
buscador3: "*_FORMATO:_*", 
buscador3: "*_BASEADO:_*", 
buscador4: "*_LANÇADO:_*", 
buscador5: "*_MEMBROS:_*:", 
buscador6: "*_FAVORITOS:_*", 
buscador7: "*_CLASSIFICAÇÃO:_*", 
buscador8: "*_TRAILER_*", 
buscador9: "*_🔎 ACHEI ISSO:_*", 
buscador10: "*_NÃO ENCONTREI NENHUM FILME._*", 
buscador11: "*_BLOQUEADOR DE ANÚNCIOS RECOMENDADO_*", 

//convertido
smsconvert: "*_RESPONDA A MARCAÇÃO COM UMA IMAGEM_*", 
smsconvert1: "*_AGUARDE UM MOMENTO, VAI SER RAPIDINHO!_*", 
smsconvert2: "*_NÃO CONSEGUI... TEM CERTEZA DE QUE A IMAGEM É O ROSTO DE UMA PESSOA?_*", 
smsconvert3: "*_RESPONDA UM STICKER PARA CONVERTER EM IMAGEM. USE O COMANDO_*", 
smsconvert4: "*_RESPONDA UM VÍDEO UM OU NOTA DE VOZ PARA CONVERTER EM MP3._*", 
smsconvert5: "*_NÃO CONSEGUI BAIXAR O VÍDEO. TENTE MAIS TARDE..._*", 
smsconvert6: "*_NÃO CONSEGUI CONVERTER, SINTO MUITO..._*", 
smsconvert7: "*_VOCÊ DEVE RESPONDER À UM VÍDEO OU NOTA DE VOZ PARA CONVERTER EM MP3._*", 
smsconvert8: "*_NÃO CONSEGUI BAIXA O VÍDEO, TENTA DE NOVO._*", 
smsconvert9: "*_NÃO CONSEGUI CONVERTER O ÁUDIO EM NOTA DE VOZ. TENTE DENOVO._*", 
smsconvert10: "*_RESPONDA UMA IMAGEM OU VÍDEO._*", 
smsconvert11: "*_TAMANHO_*", 
smsconvert12: "*_EXPIRA EM_*", 
smsconvert13: "*_ENCURTADO_*", 
smsconvert14: "*_RESPONDA UM ÁUDIO PARA CONVERTER EM VÍDEO_*", 
smsconvert15: "*_ESCREVA UM TEXTO PARA CONVERTER EM NOTA DE VOZ._*\n*_EXEMPLO_*", 
smsconvert16: "*_RESPONDA UM ÁUDIO OU NOTA DE VOZ PARA MODIFICÁ-LO UTILIZANDO ESTE COMANDO._*", 

//herramientas.js
smsAcorta: '*_ENVIE UM LINK PARA ENCURTAR_*', 
smsAcorta2: (text) => `*_✅ DEU TUDO CERTO!_*\n\n*_LINK ANTERIOR_*\n*${text}*\n\n*_LINK ATUAL_*`, 

//comando +18
smshorny: "*Porq todo punheteiro tem qi negativo? Siga este exemplo:*", 
smshorny2: "*JÁ TÔ MANDANDO! SEU PUNHETEIRO FUDIDO KKKK*"
}

export default MID_GB
