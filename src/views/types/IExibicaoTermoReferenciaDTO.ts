import type { ITermoReferenciaDTO } from './ITermoReferenciaDTO'
import type { IGrupoTermoReferenciaDTO } from './IGrupoTermoReferenciaDTO'

export interface IExibicaoTermoReferenciaDTO {
  termoReferencia: ITermoReferenciaDTO
  grupos: IGrupoTermoReferenciaDTO[]
}

// Exemplo de um objeto IExibicaoTermoReferenciaDTO completo
const exemploTermoReferencia: IExibicaoTermoReferenciaDTO = {
  termoReferencia: {
    id: 12345,
    numero: 78901,
    unidade: 'Secretaria de Tecnologia da Informação',
    processo: '2025.00001.000123-45',
    dataCriacao: '2025-03-07',
    descricao: 'Aquisição de equipamentos de informática para modernização do parque tecnológico',
    versao: '1.0',
    sei: 9876543210,
    finalidade: 'Substituição de equipamentos obsoletos e ampliação da capacidade computacional',
    situacao: 'Em análise',
    responsavel: 'Maria Silva (Diretora de TI)',
  },
  grupos: [
    {
      descricao: 'Identificação da Demanda',
      atributos: [
        {
          id: 1,
          descricao: 'Objeto da contratação',
          resposta:
            'Aquisição de computadores, notebooks e periféricos para modernização do parque tecnológico institucional',
          anotacoes: [
            {
              id: 101,
              texto:
                'Descreva de forma clara e objetiva o que será contratado, evitando termos técnicos desnecessários',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:00:00Z',
            },
          ],
        },
        {
          id: 2,
          descricao: 'Justificativa da necessidade',
          resposta:
            'Os equipamentos atuais possuem mais de 6 anos de uso, apresentando falhas recorrentes e obsolescência tecnológica que compromete o desempenho das atividades institucionais',
          anotacoes: [
            {
              id: 102,
              texto:
                'Fundamente a necessidade da contratação, demonstrando o alinhamento com os objetivos estratégicos da instituição',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:01:00Z',
            },
          ],
        },
      ],
    },

    {
      descricao: 'Identificação do Objeto',
      atributos: [
        {
          id: 1,
          descricao: 'Objeto da contratação',
          resposta:
            'Aquisição de computadores, notebooks e periféricos para modernização do parque tecnológico institucional',
          anotacoes: [
            {
              id: 101,
              texto:
                'Descreva de forma clara e objetiva o que será contratado, evitando termos técnicos desnecessários',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:00:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Justificativa da Necessidade',
      atributos: [
        {
          id: 2,
          descricao: 'Justificativa da necessidade',
          resposta:
            'Os equipamentos atuais possuem mais de 6 anos de uso, apresentando falhas recorrentes e obsolescência tecnológica que compromete o desempenho das atividades institucionais',
          anotacoes: [
            {
              id: 102,
              texto:
                'Fundamente a necessidade da contratação, demonstrando o alinhamento com os objetivos estratégicos da instituição',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:01:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Requisitos Técnicos',
      atributos: [
        {
          id: 3,
          descricao: 'Especificações técnicas',
          resposta:
            'Computadores: Processador de última geração, 16GB RAM, SSD 512GB, Monitor 24", Sistema operacional Windows 11 Pro. Notebooks: Processador de última geração, 16GB RAM, SSD 512GB, Tela 15.6", Sistema operacional Windows 11 Pro, Bateria com autonomia mínima de 8 horas',
          anotacoes: [
            {
              id: 103,
              texto:
                'Especifique os requisitos técnicos detalhadamente, mas sem direcionar para marcas específicas',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:02:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Garantia e Suporte',
      atributos: [
        {
          id: 4,
          descricao: 'Condições de garantia',
          resposta:
            'Garantia on-site de 60 meses para todos os equipamentos, com tempo de resposta de até 8 horas úteis e resolução em até 48 horas úteis',
          anotacoes: [
            {
              id: 104,
              texto: 'Defina prazos de garantia e níveis de serviço esperados do fornecedor',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:03:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Metodologia de Estimativa',
      atributos: [
        {
          id: 5,
          descricao: 'Metodologia de estimativa',
          resposta:
            'A estimativa foi baseada no quantitativo de estações de trabalho atuais com mais de 5 anos de uso (150 computadores e 75 notebooks), mais uma margem de 10% para expansão',
          anotacoes: [
            {
              id: 105,
              texto:
                'Explique como foi calculada a quantidade necessária de itens a serem adquiridos',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:04:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Quantitativos',
      atributos: [
        {
          id: 6,
          descricao: 'Quantitativos por item',
          resposta:
            'Computadores: 165 unidades; Notebooks: 83 unidades; Monitores adicionais: 50 unidades; Docking stations: 83 unidades',
          anotacoes: [
            {
              id: 106,
              texto: 'Liste os quantitativos por item a ser adquirido',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:05:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Levantamento de Mercado',
      atributos: [
        {
          id: 7,
          descricao: 'Soluções disponíveis',
          resposta:
            'Foram identificadas três modalidades de aquisição: compra direta, leasing de equipamentos ou contratação de outsourcing. Após análise, a compra direta mostrou-se mais vantajosa considerando o ciclo de vida dos equipamentos (5 anos)',
          anotacoes: [
            {
              id: 107,
              texto:
                'Apresente as diferentes soluções disponíveis no mercado para atender à necessidade',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:06:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Preços de Referência',
      atributos: [
        {
          id: 8,
          descricao: 'Preços unitários',
          resposta:
            'Computadores: R$ 6.500,00 (unitário); Notebooks: R$ 7.800,00 (unitário); Monitores adicionais: R$ 1.200,00 (unitário); Docking stations: R$ 950,00 (unitário)',
          anotacoes: [
            {
              id: 108,
              texto: 'Indique os preços de referência obtidos na pesquisa de mercado',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:07:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Solução Escolhida',
      atributos: [
        {
          id: 9,
          descricao: 'Descrição da solução',
          resposta:
            'Aquisição direta de equipamentos de informática com garantia estendida de 60 meses, incluindo serviços de entrega, instalação e configuração',
          anotacoes: [
            {
              id: 109,
              texto: 'Descreva a solução escolhida dentre as opções levantadas',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:08:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Justificativa da Escolha',
      atributos: [
        {
          id: 10,
          descricao: 'Motivação da escolha',
          resposta:
            'A compra direta apresentou melhor custo-benefício no horizonte de 5 anos, permitindo melhor controle patrimonial e segurança da informação, além de eliminar custos recorrentes de leasing ou outsourcing',
          anotacoes: [
            {
              id: 110,
              texto:
                'Justifique por que a solução escolhida é a mais adequada técnica e economicamente',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:09:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Método de Estimativa de Preços',
      atributos: [
        {
          id: 11,
          descricao: 'Metodologia utilizada',
          resposta:
            'Foram realizadas pesquisas em contratações similares no Painel de Preços, pesquisa com fornecedores e em sites especializados, conforme IN 73/2020',
          anotacoes: [
            {
              id: 111,
              texto: 'Descreva a metodologia utilizada para estimativa de preços',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:10:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Valor Total Estimado',
      atributos: [
        {
          id: 12,
          descricao: 'Valor global',
          resposta:
            'R$ 2.217.750,00 (dois milhões, duzentos e dezessete mil, setecentos e cinquenta reais)',
          anotacoes: [
            {
              id: 112,
              texto: 'Indique o valor total estimado da contratação',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:11:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Fonte de Recursos',
      atributos: [
        {
          id: 13,
          descricao: 'Dotação orçamentária',
          resposta:
            'Plano de Trabalho Anual - PTA 2025, Ação Orçamentária 2030 - Modernização da Infraestrutura Tecnológica',
          anotacoes: [
            {
              id: 113,
              texto: 'Indique a fonte orçamentária para a contratação',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:12:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Disponibilidade Orçamentária',
      atributos: [
        {
          id: 14,
          descricao: 'Confirmação de disponibilidade',
          resposta:
            'Disponibilidade confirmada pela Diretoria de Orçamento e Finanças conforme documento SEI nº 98765/2025',
          anotacoes: [
            {
              id: 114,
              texto: 'Informe se há disponibilidade orçamentária confirmada para a contratação',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:13:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Modalidade de Licitação',
      atributos: [
        {
          id: 15,
          descricao: 'Forma de contratação',
          resposta: 'Pregão Eletrônico por Sistema de Registro de Preços',
          anotacoes: [
            {
              id: 115,
              texto: 'Indique a modalidade de licitação a ser adotada',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:14:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Critério de Julgamento',
      atributos: [
        {
          id: 16,
          descricao: 'Tipo de julgamento',
          resposta: 'Menor preço por grupo (computadores/notebooks/monitores/docking stations)',
          anotacoes: [
            {
              id: 116,
              texto: 'Especifique o critério de julgamento das propostas',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:15:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Qualificação Técnica',
      atributos: [
        {
          id: 17,
          descricao: 'Requisitos de habilitação',
          resposta:
            'Comprovação de fornecimento de pelo menos 50% do quantitativo a ser contratado, mediante atestados de capacidade técnica emitidos por pessoas jurídicas de direito público ou privado',
          anotacoes: [
            {
              id: 117,
              texto: 'Defina os requisitos de habilitação técnica para os fornecedores',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:16:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Certificações Exigidas',
      atributos: [
        {
          id: 18,
          descricao: 'Requisitos de certificação',
          resposta:
            'Certificação ISO 9001 para o fabricante dos equipamentos; Certificação EPEAT Gold para os equipamentos ofertados',
          anotacoes: [
            {
              id: 118,
              texto: 'Liste as certificações necessárias para os equipamentos ou fornecedores',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:17:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Prazos de Entrega',
      atributos: [
        {
          id: 19,
          descricao: 'Cronograma de entrega',
          resposta:
            'Prazo máximo de 45 dias corridos após a emissão da ordem de fornecimento, podendo ser prorrogado mediante justificativa aceita pela Administração',
          anotacoes: [
            {
              id: 119,
              texto: 'Defina os prazos para entrega dos bens ou execução dos serviços',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:18:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Procedimentos de Recebimento',
      atributos: [
        {
          id: 20,
          descricao: 'Etapas de recebimento',
          resposta:
            'Recebimento provisório: no ato da entrega, para posterior verificação de conformidade. Recebimento definitivo: em até 15 dias após o recebimento provisório, após verificação de qualidade e quantidade',
          anotacoes: [
            {
              id: 120,
              texto: 'Estabeleça as condições para recebimento provisório e definitivo do objeto',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:19:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Equipe de Fiscalização',
      atributos: [
        {
          id: 21,
          descricao: 'Responsáveis designados',
          resposta:
            'Fiscal Técnico: João Pereira (Analista de TI); Fiscal Administrativo: Roberto Santos (Administrador); Gestor do Contrato: Ana Oliveira (Coordenadora de Infraestrutura)',
          anotacoes: [
            {
              id: 121,
              texto: 'Indique os responsáveis pela fiscalização e gestão do contrato',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:20:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Forma de Comunicação',
      atributos: [
        {
          id: 22,
          descricao: 'Canais de comunicação',
          resposta:
            'E-mail institucional, sistema de chamados e reuniões presenciais ou virtuais conforme necessidade',
          anotacoes: [
            {
              id: 122,
              texto: 'Defina como será a comunicação entre a contratante e a contratada',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:21:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Condições de Pagamento',
      atributos: [
        {
          id: 23,
          descricao: 'Formato de pagamento',
          resposta:
            'Pagamento em parcela única, em até 30 dias após o recebimento definitivo dos equipamentos',
          anotacoes: [
            {
              id: 123,
              texto: 'Especifique como será realizado o pagamento à contratada',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:22:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Documentação para Pagamento',
      atributos: [
        {
          id: 24,
          descricao: 'Documentos exigidos',
          resposta:
            'Nota fiscal, certidões de regularidade fiscal (FGTS, RFB/PGFN, CNDT), relatório de recebimento definitivo assinado pelo fiscal técnico',
          anotacoes: [
            {
              id: 124,
              texto: 'Liste os documentos exigidos para efetivação do pagamento',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:23:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Penalidades Aplicáveis',
      atributos: [
        {
          id: 25,
          descricao: 'Sanções por descumprimento',
          resposta:
            'Atraso na entrega: multa de 0,5% por dia, limitada a 20%; Inexecução parcial: multa de 10% sobre o valor não executado; Inexecução total: multa de 20% sobre o valor total do contrato',
          anotacoes: [
            {
              id: 125,
              texto: 'Defina as infrações e respectivas penalidades aplicáveis',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:24:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Procedimento Sancionatório',
      atributos: [
        {
          id: 26,
          descricao: 'Etapas do processo',
          resposta:
            'Notificação com prazo de 5 dias úteis para defesa prévia; análise da defesa pela autoridade competente; aplicação da sanção se for o caso, com prazo de 5 dias úteis para recurso',
          anotacoes: [
            {
              id: 126,
              texto: 'Descreva o procedimento para aplicação de sanções',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:25:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Critérios de Sustentabilidade',
      atributos: [
        {
          id: 27,
          descricao: 'Requisitos ambientais',
          resposta:
            'Equipamentos com certificação EPEAT Gold; embalagens recicláveis; conformidade com a diretiva RoHS (Restriction of Hazardous Substances)',
          anotacoes: [
            {
              id: 127,
              texto: 'Indique os critérios de sustentabilidade ambiental aplicáveis à contratação',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:26:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Procedimentos de Descarte',
      atributos: [
        {
          id: 28,
          descricao: 'Destinação de resíduos',
          resposta:
            'O fornecedor deverá recolher os equipamentos antigos para destinação ambientalmente correta, emitindo certificado de descarte',
          anotacoes: [
            {
              id: 128,
              texto: 'Descreva os procedimentos de logística reversa quando aplicáveis',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:27:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Plano de Transição',
      atributos: [
        {
          id: 29,
          descricao: 'Estratégia de migração',
          resposta:
            'A migração dos equipamentos antigos para os novos será realizada em etapas, por setor, conforme cronograma a ser apresentado pelo fornecedor e aprovado pela equipe técnica',
          anotacoes: [
            {
              id: 129,
              texto: 'Descreva como será feita a transição entre os equipamentos antigos e novos',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:28:00Z',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Cronograma de Transição',
      atributos: [
        {
          id: 30,
          descricao: 'Prazos de migração',
          resposta:
            'Prazo total de 60 dias para conclusão da migração de todos os equipamentos, iniciando em até 10 dias após o recebimento definitivo',
          anotacoes: [
            {
              id: 130,
              texto: 'Especifique os prazos para conclusão do processo de transição',
              autor: 'Sistema',
              dataCriacao: '2025-02-10T08:29:00Z',
            },
          ],
        },
      ],
    },
  ],
}

export default exemploTermoReferencia
