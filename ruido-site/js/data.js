/* ==========================================================
   CONTEÚDO DO SITE — edite SOMENTE este arquivo para atualizar
   textos, propostas, links e integrantes.
   ========================================================== */
window.SITE = {
  chapa: {
    nome: "RUÍDO",
    nomeCompleto: "Rede Unida de Ideias, Diversidade e Organização",
    /* Significado de cada letra do nome (aparece na seção "A chapa") */
    sigla: [
      { letra: "R", palavra: "Rede" },
      { letra: "U", palavra: "Unida" },
      { letra: "I", palavra: "Ideias" },
      { letra: "D", palavra: "Diversidade" },
      { letra: "O", palavra: "Organização" },
    ],
    escola: "IFC — Campus Concórdia",
    fraseImpacto: "Somos ruído. Agora é a nossa vez de ser ouvido.",
    apresentacaoCurta:
      "Chapa candidata ao Grêmio Estudantil do Instituto Federal Catarinense — Campus Concórdia. Um projeto feito com os estudantes, para os estudantes.",
  },

  sobre: {
    titulo: "Quem é o Ruído",
    texto: [
      "O Ruído — Rede Unida de Ideias, Diversidade e Organização — é uma chapa candidata ao Grêmio Estudantil do IFC — Campus Concórdia, construída a partir da ideia de que representação estudantil se faz com participação coletiva.",
      "Nosso objetivo é ouvir os estudantes, levar suas demandas aos setores responsáveis e construir, em conjunto, melhorias para toda a comunidade acadêmica.",
    ],
    pilares: [
      { titulo: "Representação", texto: "O Grêmio como voz dos alunos junto à instituição." },
      { titulo: "Participação", texto: "Decisões que afetam a vida escolar com os estudantes na conversa." },
      { titulo: "Construção coletiva", texto: "Melhorias pensadas e feitas junto com a comunidade acadêmica." },
    ],
    /* Preencha os integrantes aqui. Enquanto estiver vazio, aparecem espaços reservados. */
    integrantes: [
      { nome: "Marya Reis", cargo: "Presidenta", turma: "2F", foto: "assets/integrantes/marya.jpg" },
      { nome: "Lucas Masquio Nogueira", cargo: "Vice-presidente", turma: "2G", foto: "assets/integrantes/masquio.jpg" },
      { nome: "Stefani Becker", cargo: "1ª Tesoureira", turma: "1B", foto: "assets/integrantes/stefani.jpg" },
      { nome: "Gabriel da Silva", cargo: "2º Tesoureiro", turma: "2G", foto: "assets/integrantes/gabriel.jpg" },
      { nome: "Ana Luisa", cargo: "1ª Secretária", turma: "2G", foto: "assets/integrantes/ana_luisa.jpg" },
      { nome: "Kemily de Santi", cargo: "2ª Secretária", turma: "2G", foto: "assets/integrantes/pocoyo.jpg" },
      { nome: "Adrian Barão", cargo: "Diretor de Eventos", turma: "2G", foto: "assets/integrantes/adrian.jpg" },
      { nome: "Gabrielle Victória", cargo: "Diretora de Mídia", turma: "2G", foto: "assets/integrantes/gabrielle.jpg" },
      { nome: "Hugo Cesar", cargo: "Diretor de Esportes", turma: "2G", foto: "assets/integrantes/hugo.jpg" },
      { nome: "Lara Surdi", cargo: "Representante de Agropecuária", turma: "1A", foto: "assets/integrantes/lara_agro.jpg" },
      { nome: "Larissa Mello", cargo: "Representante de Alimentos", turma: "1E", foto: "assets/integrantes/larissa.jpg" },
      { nome: "Lara Appel", cargo: "Representante de Informática", turma: "2F", foto: "assets/integrantes/lara_info.jpg" },
      { nome: "Jaqueline", cargo: "1ª Suplente", turma: "1B", foto: "assets/integrantes/jaqueline.jpg" },
      { nome: "Lara", cargo: "2ª Suplente", turma: "2E", foto: "assets/integrantes/lara_alimentos.jpg" },
      { nome: "Liamara", cargo: "Professora Regente", foto: "assets/integrantes/liamara.jpg" },
    ],
  },

  canais: {
    whatsapp: "https://whatsapp.com/channel/0029Vb9QqYc4IBhF5l5Huu0F",
    instagram: "https://www.instagram.com/somoss_ruido/",
    instagramUser: "@somoss_ruido",
  },

  fechamento: {
    titulo: "O barulho só funciona em coletivo.",
    texto:
      "Acompanhe a chapa, mande suas ideias e ajude a transformar o nosso ambiente escolar. Quanto mais gente na conversa, mais alto a gente fala.",
  },

  categorias: [
    { id: "infra", nome: "Infraestrutura e permanência", icone: "home" },
    { id: "ensino", nome: "Ensino e oportunidades", icone: "book" },
    { id: "comunicacao", nome: "Comunicação e informação", icone: "news" },
    { id: "participacao", nome: "Participação e representação", icone: "mega" },
    { id: "cultura", nome: "Cultura, esporte e integração", icone: "note" },
    { id: "respeito", nome: "Respeito, inclusão e bem-estar", icone: "heart" },
  ],

  /* "resumo" aparece no card fechado; "texto" é o conteúdo integral (ao expandir). */
  propostas: [
    /* ---------- Infraestrutura e permanência estudantil ---------- */
    {
      categoria: "infra", icone: "bus", titulo: "Ônibus",
      resumo: "Acompanhar horários, superlotação, atrasos e disponibilidade dos ônibus e levar as demandas à instituição e à empresa.",
      texto: `Buscar soluções para os problemas relacionados aos horários, superlotação, atrasos e disponibilidade dos ônibus fornecidos pela empresa Hodierna. Após uma reunião realizada para tratar dos conflitos relacionados ao transporte, foi disponibilizado um ônibus a mais, porém a medida não resolveu completamente os problemas. A proposta é continuar acompanhando a situação e levar as demandas dos estudantes para a instituição e para a empresa responsável.`,
    },
    {
      categoria: "infra", icone: "home", titulo: "Ambiente para Socialização",
      resumo: "Pensar e adequar um espaço de convivência e abrigo para o horário de almoço, principalmente em dias chuvosos e frios.",
      texto: `Pensar e adequar um espaço para que os alunos possam permanecer durante o horário de almoço, principalmente em dias chuvosos e frios. Além de servir como abrigo em condições climáticas desfavoráveis, o espaço teria como objetivo proporcionar um ambiente adequado para convivência e socialização entre os estudantes.`,
    },

    /* ---------- Ensino e oportunidades acadêmicas ---------- */
    {
      categoria: "ensino", icone: "book", titulo: "Cursos Complementares",
      resumo: "Rever as atividades ofertadas, ouvir os alunos sobre seus interesses e reorganizar horários para incluir todos, inclusive os semi-internos.",
      texto: `Rever as atividades atualmente implementadas e ofertadas, além de realizar uma votação ou pesquisa para identificar quais cursos e atividades são de maior interesse dos alunos. Também buscar a reorganização dos horários para possibilitar a participação de todos os estudantes, incluindo os semi-internos.`,
    },
    {
      categoria: "ensino", icone: "calendar", titulo: "Semana de Provas",
      resumo: "Ver a possibilidade de organizar as avaliações por dia da semana, inicialmente em algumas turmas, em diálogo com a Coordenação e os professores.",
      texto: `Ver a possibilidade de implementar, inicialmente em algumas turmas, uma organização semanal das avaliações, distribuindo diferentes matérias para cada dia da semana. Exemplo: segunda-feira: Biologia, Matemática e Português; terça-feira: Química, História e disciplina do Técnico; quarta-feira: Filosofia, Sociologia e disciplina do Técnico. A proposta deverá ser discutida e combinada com a Coordenação Geral de Ensino e os professores.`,
    },
    {
      categoria: "ensino", icone: "calc", titulo: "Matemática Básica para os alunos do primeiro ano",
      resumo: "Revisão intensiva de Matemática Básica no primeiro mês de aula, preferencialmente nas sextas-feiras à tarde.",
      texto: `Integrar um período de revisão e intensivo de Matemática Básica durante o primeiro mês de aula, preferencialmente nas sextas-feiras à tarde. O objetivo seria retomar conteúdos essenciais da Matemática que podem auxiliar na compreensão de assuntos mais complexos e de novas disciplinas, principalmente para os alunos do curso de Informática, que possuem conteúdos envolvendo lógica e números.`,
    },
    {
      categoria: "ensino", icone: "clock", titulo: "Reforços e Atividades Complementares em Períodos Vagos",
      resumo: "Usar os períodos vagos para reforço, cursos e outros ensinamentos, principalmente para quem tem horários livres, incluindo semi-internos.",
      texto: `Utilizar os períodos vagos para oferecer atividades de reforço, cursos e outros ensinamentos que possam contribuir para o aprendizado dos estudantes. A proposta busca principalmente auxiliar os alunos que possuem períodos livres durante o dia, incluindo os semi-internos, além de incentivar o aproveitamento desse tempo para atividades acadêmicas.`,
    },
    {
      categoria: "ensino", icone: "folder", titulo: "Banco de Materiais para Estudo",
      resumo: "Espaço digital com listas, resumos, provas antigas e materiais para ENEM, vestibulares e disciplinas do Médio e do Técnico.",
      texto: `Organizar um espaço digital para reunir materiais que possam auxiliar os estudantes nos estudos, como listas de exercícios, resumos, provas antigas, materiais para o ENEM, vestibulares e conteúdos das disciplinas do Ensino Médio e do Técnico. A proposta poderá utilizar plataformas gratuitas já disponíveis para facilitar a organização e o acesso aos materiais.`,
    },
    {
      categoria: "ensino", icone: "cap", titulo: "Feira de Profissões e Universidades",
      resumo: "Parcerias com universidades, profissionais e ex-alunos para apresentar cursos, profissões e caminhos após o Ensino Médio.",
      texto: `Buscar parcerias com universidades, profissionais e ex-alunos para apresentar aos estudantes diferentes cursos, profissões e possibilidades após o Ensino Médio. Também poderão ser abordados assuntos como ENEM, vestibulares, bolsas de estudo, mercado de trabalho e formas de ingresso no Ensino Superior.`,
    },

    /* ---------- Comunicação e informação ---------- */
    {
      categoria: "comunicacao", icone: "mic", titulo: "Podcast",
      resumo: "Ver a possibilidade de criar ou unificar um Podcast do IFC, com apoio de professores, para debater temas de interesse dos estudantes.",
      texto: `Ver a possibilidade da criação ou unificação de um Podcast do IFC, buscando o auxílio do professor Dido e de outros professores interessados. O objetivo seria utilizar o espaço para debater temas como ENEM, leituras obrigatórias para vestibulares, inscrições para editais, atualizações importantes sobre o IFC, rodas de conversa e outros assuntos de interesse dos estudantes.`,
    },
    {
      categoria: "comunicacao", icone: "news", titulo: "Jornal Digital",
      resumo: "Um Jornal Digital do IFC com as principais informações e demandas da semana: provas, trabalhos, eventos, editais e mais.",
      texto: `Criar um Jornal Digital do IFC para reunir e repassar as principais informações e demandas da semana. Entre os conteúdos podem estar provas de cada turma, trabalhos, eventos, editais, oportunidades, cardápio semanal, atividades do Grêmio e outras informações importantes para os estudantes.`,
    },
    {
      categoria: "comunicacao", icone: "cal2", titulo: "Calendário Estudantil Unificado",
      resumo: "Calendário digital com as principais datas e atividades do campus, podendo ser integrado ao Jornal Digital.",
      texto: `Criar ou organizar um calendário digital com as principais datas e atividades do campus, incluindo provas, trabalhos, eventos, atividades do Grêmio, editais, inscrições, reuniões e outras informações importantes. A proposta também poderá ser integrada ao Jornal Digital para facilitar o acesso dos estudantes.`,
    },
    {
      categoria: "comunicacao", icone: "inbox", titulo: "Canal de Demandas dos Estudantes",
      resumo: "Um canal para reclamações, sugestões e dúvidas, organizadas pelo Grêmio e levadas aos setores responsáveis, com retorno aos estudantes.",
      texto: `Criar um canal para que os estudantes possam enviar reclamações, sugestões, dúvidas e problemas encontrados no ambiente escolar. As demandas recebidas seriam organizadas pelo Grêmio e, quando necessário, levadas para a Direção, Coordenação ou outros setores responsáveis, buscando também dar um retorno aos estudantes sobre os encaminhamentos realizados.`,
    },
    {
      categoria: "comunicacao", icone: "eye", titulo: "Transparência do Grêmio",
      resumo: "Divulgar periodicamente ações, reuniões, projetos, demandas e encaminhamentos, com prestação de contas quando houver recursos.",
      texto: `Divulgar periodicamente as ações realizadas pelo Grêmio, as reuniões, os projetos desenvolvidos, as demandas apresentadas pelos estudantes e os encaminhamentos realizados junto à instituição. Quando houver arrecadação ou utilização de recursos financeiros, buscará também apresentar uma prestação de contas aos estudantes.`,
    },

    /* ---------- Participação e representação estudantil ---------- */
    {
      categoria: "participacao", icone: "mega", titulo: "Participação Estudantil nas Decisões",
      resumo: "Ampliar a participação dos estudantes nas discussões que afetam a vida escolar, com o Grêmio como representante dos alunos.",
      texto: `Buscar ampliar a participação dos estudantes nas discussões relacionadas a assuntos que afetam diretamente a vida escolar. O Grêmio deverá atuar como representante dos alunos, levando suas opiniões e demandas para os setores responsáveis e buscando acompanhar as decisões e seus encaminhamentos.`,
    },
    {
      categoria: "participacao", icone: "people", titulo: "Reuniões com a Direção e Coordenação",
      resumo: "Buscar reuniões periódicas entre Grêmio, Direção, Coordenação Geral de Ensino e outros setores para acompanhar as demandas.",
      texto: `Buscar estabelecer reuniões periódicas entre o Grêmio Estudantil, a Direção, a Coordenação Geral de Ensino e outros setores da instituição. O objetivo seria acompanhar as demandas apresentadas pelos estudantes, discutir possíveis soluções e manter uma comunicação mais próxima entre os alunos e a instituição.`,
    },
    {
      categoria: "participacao", icone: "door", titulo: "Acolhimento aos Alunos do Primeiro Ano",
      resumo: "Ações de acolhimento nas primeiras semanas, apresentando a instituição, seus setores e projetos, com a participação de veteranos.",
      texto: `Desenvolver ações de acolhimento para os estudantes que estão chegando ao IFC, principalmente durante as primeiras semanas de aula. A ideia é apresentar o funcionamento da instituição, os setores disponíveis, biblioteca, assistência estudantil, núcleos, projetos, Grêmio e outras informações importantes, contando também com a participação de alunos veteranos.`,
    },

    /* ---------- Cultura, esporte e integração ---------- */
    {
      categoria: "cultura", icone: "network", titulo: "Integração dos Núcleos",
      resumo: "Aproximar os núcleos da instituição, com ações em conjunto e mais participação dos alunos nas atividades.",
      texto: `Buscar uma maior participação e aproximação entre os diferentes núcleos existentes na instituição. Desenvolver ações em conjunto, aumentar a conscientização dos estudantes sobre os trabalhos realizados pelos núcleos e incentivar uma maior participação dos alunos nas atividades.`,
    },
    {
      categoria: "cultura", icone: "star", titulo: "Incentivo à Cultura",
      resumo: "Com apoio de professores de Artes, Filosofia e áreas afins, desenvolver mais projetos artísticos e culturais na instituição.",
      texto: `Buscar, com o auxílio de professores das áreas de Artes, Filosofia e outras áreas relacionadas, desenvolver mais projetos artísticos e culturais dentro da instituição. Incentivar a participação dos estudantes em apresentações, exposições, oficinas, projetos e outras atividades culturais.`,
    },
    {
      categoria: "cultura", icone: "chat", titulo: "Debates e Rodas de Conversa",
      resumo: "Momentos de discussão sobre temas atuais, escolhidos pelos próprios estudantes: política, tecnologia, mercado de trabalho e mais.",
      texto: `Promover momentos de discussão sobre assuntos de interesse dos estudantes, buscando trazer temas atuais e relacionados à realidade dos alunos. Entre os possíveis temas estão política, tecnologia, mercado de trabalho, universidade, direitos estudantis, meio ambiente, cultura, relações sociais e outros assuntos escolhidos pelos próprios estudantes.`,
    },
    {
      categoria: "cultura", icone: "ball", titulo: "Fortalecimento das Atividades Esportivas",
      resumo: "Ampliar torneios e campeonatos entre as turmas, incluindo xadrez, tênis de mesa, jogos eletrônicos e outras modalidades.",
      texto: `Buscar ampliar a realização de torneios, campeonatos e outras atividades esportivas entre as turmas. Além das modalidades mais tradicionais, incentivar a participação em atividades como xadrez, tênis de mesa, jogos eletrônicos e outras modalidades de interesse dos estudantes, utilizando os espaços disponíveis na instituição.`,
    },
    {
      categoria: "cultura", icone: "venn", titulo: "Integração entre as Turmas",
      resumo: "Atividades que aproximem estudantes de diferentes turmas e cursos, diminuindo a separação entre grupos.",
      texto: `Desenvolver atividades que aproximem estudantes de diferentes turmas e cursos, criando mais oportunidades de convivência dentro da instituição. A proposta busca diminuir a separação entre os diferentes grupos e incentivar uma maior união entre os estudantes.`,
    },
    {
      categoria: "cultura", icone: "globe", titulo: "Integração com Ex-Alunos e Comunidade",
      resumo: "Aproximar o IFC de ex-alunos, universidades, profissionais e comunidade, com palestras, rodas de conversa e oficinas.",
      texto: `Buscar aproximar o IFC de ex-alunos, universidades, profissionais e outros membros da comunidade. A ideia é desenvolver palestras, rodas de conversa, oficinas e outras atividades que possam trazer experiências e conhecimentos externos para dentro da instituição.`,
    },
    {
      categoria: "cultura", icone: "note", titulo: "Ampliação de Festas e Eventos Culturais",
      resumo: "Mais festas, festivais, saraus e eventos de integração, dentro e fora da instituição, respeitando normas e autorizações.",
      texto: `Buscar ampliar a realização de festas, eventos culturais e atividades de integração dentro e fora da instituição, proporcionando mais momentos de lazer e convivência entre os estudantes. Incentivar eventos como apresentações musicais, festivais, festas temáticas, exposições, saraus e outras atividades organizadas em conjunto com os alunos. Também buscar parcerias e espaços externos que possibilitem a realização de eventos do Grêmio fora da instituição, sempre respeitando as normas e autorizações necessárias.`,
    },

    /* ---------- Respeito, inclusão e bem-estar ---------- */
    {
      categoria: "respeito", icone: "bubble", titulo: "Uso de Nomes Sociais e Pronomes",
      resumo: "Buscar garantir o respeito a nomes sociais e pronomes de estudantes e professores que solicitarem, com base na Resolução CNE/CP nº 1/2018.",
      texto: `Buscar garantir o respeito ao uso de nomes sociais e pronomes de gênero para estudantes e professores que solicitarem, tendo como base a Resolução CNE/CP nº 1, de 19 de janeiro de 2018, homologada pelo Ministério da Educação (MEC). A proposta também busca promover um ambiente escolar mais respeitoso e acolhedor para todos.`,
    },
    {
      categoria: "respeito", icone: "heart", titulo: "Saúde e Bem-Estar dos Estudantes",
      resumo: "Campanhas e rodas de conversa sobre ansiedade, pressão escolar, relações e bullying, com apoio dos profissionais da instituição.",
      texto: `Promover campanhas, rodas de conversa e atividades de conscientização sobre temas relacionados ao bem-estar dos estudantes, como ansiedade, pressão escolar, relações interpessoais, bullying e outros problemas presentes no ambiente escolar. Sempre que necessário, buscar o apoio dos profissionais e setores responsáveis da instituição.`,
    },
    {
      categoria: "respeito", icone: "shield", titulo: "Ações Contra o Preconceito e o Bullying",
      resumo: "Campanhas de conscientização sobre preconceito, discriminação e bullying, com espaços para discutir e encaminhar essas situações.",
      texto: `Desenvolver campanhas e atividades de conscientização sobre preconceito, discriminação e bullying dentro do ambiente escolar. Buscar incentivar o respeito entre os estudantes e criar espaços para que situações desse tipo possam ser discutidas e encaminhadas de maneira adequada.`,
    },
  ],
};
