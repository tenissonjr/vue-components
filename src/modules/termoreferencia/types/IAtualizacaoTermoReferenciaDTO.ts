import type { ITermoReferenciaDTO } from './ITermoReferenciaDTO'
import type { IGrupoTermoReferenciaDTO } from './IGrupoTermoReferenciaDTO'

export interface IAtualizacaoTermoReferenciaDTO {
  termoReferencia: ITermoReferenciaDTO
  grupos: IGrupoTermoReferenciaDTO[]
}

// Exemplo de um objeto IAtualizacaoTermoReferenciaDTO completo
export const exemploTermoReferenciaRespondido: IAtualizacaoTermoReferenciaDTO = {
  termoReferencia: {
    id: 12345,
    numero: 78901,
    unidade: 'Departamento de Tecnologia da Informação',
    processo: 'TI-2025/00123',
    dataCriacao: '2025-02-15T14:30:00',
    descricao: 'Aquisição de licenças de software para desenvolvimento',
    versao: '1.3',
    sei: 202500789,
    finalidade: 'Modernização da infraestrutura de desenvolvimento',
    situacao: 'Em andamento',
    responsavel: 'Maria Silva',
  },
  grupos: [
    {
      descricao: 'Informações Básicas',
      atributos: [
        {
          id: 1,
          descricao: 'Objeto da Contratação',
          codTipoAtributo: 1,
          idResposta: 101,
          resposta: 'Aquisição de licenças de software para desenvolvimento de aplicações',
          anotacoes: [
            {
              id: 10001,
              autor: 'Carlos Andrade',
              dataCriacao: '2025-02-16T09:15:00',
              texto:
                'Detalhar quais são os softwares específicos necessários devido à modernização da infraestrutura de desenvolvimento da equipe de TI da autarquia X e quais são as licenças necessárias para a aquisição de tais softwares.',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Justificativa',
      atributos: [
        {
          id: 2,
          descricao: 'Motivação da Contratação',
          codTipoAtributo: 2,
          idResposta: 102,
          resposta:
            'Necessidade de modernização das ferramentas de desenvolvimento utilizadas pela equipe',
          anotacoes: [
            {
              id: 10002,
              autor: 'Juliana Ferreira',
              dataCriacao: '2025-02-16T10:20:00',
              texto: 'Incluir dados estatísticos de produtividade',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Especificações Técnicas',
      atributos: [
        {
          id: 3,
          descricao: 'Requisitos Mínimos',
          codTipoAtributo: 1,
          idResposta: 103,
          resposta: 'Compatibilidade com sistemas operacionais Windows 11 e Linux Ubuntu 24.04',
          anotacoes: [
            {
              id: 10003,
              autor: 'Ricardo Mendes',
              dataCriacao: '2025-02-16T11:45:00',
              texto: 'Verificar necessidade de compatibilidade com MacOS',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Cronograma',
      atributos: [
        {
          id: 4,
          descricao: 'Prazo de Entrega',
          codTipoAtributo: 3,
          idResposta: 104,
          resposta: '30 dias após a assinatura do contrato',
          anotacoes: [
            {
              id: 10004,
              autor: 'Ana Costa',
              dataCriacao: '2025-02-17T08:30:00',
              texto: 'Considerar possíveis atrasos devido à importação',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Garantia',
      atributos: [
        {
          id: 5,
          descricao: 'Período de Garantia',
          codTipoAtributo: 3,
          idResposta: 105,
          resposta: '12 meses a partir da data de ativação',
          anotacoes: [
            {
              id: 10005,
              autor: 'Fernando Gomes',
              dataCriacao: '2025-02-17T09:45:00',
              texto: 'Avaliar possibilidade de extensão para 24 meses',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Suporte',
      atributos: [
        {
          id: 6,
          descricao: 'Níveis de Atendimento',
          codTipoAtributo: 2,
          idResposta: 106,
          resposta: 'Suporte 24/7 para incidentes críticos e 8/5 para demais ocorrências',
          anotacoes: [
            {
              id: 10006,
              autor: 'Mariana Alves',
              dataCriacao: '2025-02-17T14:20:00',
              texto: 'Definir SLAs específicos para cada tipo de ocorrência',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Capacitação',
      atributos: [
        {
          id: 7,
          descricao: 'Treinamento',
          codTipoAtributo: 1,
          idResposta: 107,
          resposta:
            'Treinamento presencial para 15 desenvolvedores, com carga horária mínima de 40 horas',
          anotacoes: [
            {
              id: 10007,
              autor: 'Pedro Santos',
              dataCriacao: '2025-02-18T10:15:00',
              texto: 'Considerar também opção de treinamento online',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Documentação',
      atributos: [
        {
          id: 8,
          descricao: 'Manuais Técnicos',
          codTipoAtributo: 1,
          idResposta: 108,
          resposta: 'Fornecimento de manuais técnicos em português e inglês, em formato digital',
          anotacoes: [
            {
              id: 10008,
              autor: 'Luciana Martins',
              dataCriacao: '2025-02-18T13:40:00',
              texto: 'Solicitar também versões impressas dos principais manuais',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Licenciamento',
      atributos: [
        {
          id: 9,
          descricao: 'Modelo de Licenciamento',
          codTipoAtributo: 2,
          idResposta: 109,
          resposta: 'Licenças perpétuas com atualizações incluídas pelo período de 3 anos',
          anotacoes: [
            {
              id: 10009,
              autor: 'Rafael Oliveira',
              dataCriacao: '2025-02-19T09:30:00',
              texto: 'Comparar com modelo de assinatura anual',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Equipe Técnica',
      atributos: [
        {
          id: 10,
          descricao: 'Qualificação da Equipe',
          codTipoAtributo: 1,
          idResposta: 110,
          resposta: 'Equipe composta por profissionais certificados pelo fabricante do software',
          anotacoes: [
            {
              id: 10010,
              autor: 'Camila Rodrigues',
              dataCriacao: '2025-02-19T14:50:00',
              texto: 'Especificar quais certificações são necessárias',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Pagamento',
      atributos: [
        {
          id: 11,
          descricao: 'Condições de Pagamento',
          codTipoAtributo: 3,
          idResposta: 111,
          resposta:
            'Pagamento em 3 parcelas: 30% na assinatura, 40% na entrega e 30% após homologação',
          anotacoes: [
            {
              id: 10011,
              autor: 'Gustavo Lima',
              dataCriacao: '2025-02-20T08:20:00',
              texto: 'Verificar possibilidade de pagamento único com desconto',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Segurança',
      atributos: [
        {
          id: 12,
          descricao: 'Requisitos de Segurança',
          codTipoAtributo: 1,
          idResposta: 112,
          resposta: 'Conformidade com LGPD e padrões de segurança ISO 27001',
          anotacoes: [
            {
              id: 10012,
              autor: 'Renata Sousa',
              dataCriacao: '2025-02-20T11:30:00',
              texto: 'Incluir necessidade de criptografia de dados em repouso',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Integração',
      atributos: [
        {
          id: 13,
          descricao: 'Compatibilidade',
          codTipoAtributo: 2,
          idResposta: 113,
          resposta: 'Integração com sistemas legados Oracle e SQL Server',
          anotacoes: [
            {
              id: 10013,
              autor: 'Alexandre Cardoso',
              dataCriacao: '2025-02-20T15:40:00',
              texto: 'Detalhar versões específicas dos bancos de dados',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Ambiente',
      atributos: [
        {
          id: 14,
          descricao: 'Infraestrutura Necessária',
          codTipoAtributo: 1,
          idResposta: 114,
          resposta: 'Ambiente virtualizado em nuvem privada com redundância geográfica',
          anotacoes: [
            {
              id: 10014,
              autor: 'Eduardo Pereira',
              dataCriacao: '2025-02-21T09:15:00',
              texto: 'Considerar também opção de infraestrutura híbrida',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Requisitos Legais',
      atributos: [
        {
          id: 15,
          descricao: 'Conformidade Legal',
          codTipoAtributo: 2,
          idResposta: 115,
          resposta: 'Atendimento a todas as normas vigentes estabelecidas pelo SISP',
          anotacoes: [
            {
              id: 10015,
              autor: 'Carla Moreira',
              dataCriacao: '2025-02-21T13:45:00',
              texto: 'Incluir referência ao decreto nº 10.024/2019',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Critérios de Aceitação',
      atributos: [
        {
          id: 16,
          descricao: 'Homologação',
          codTipoAtributo: 3,
          idResposta: 116,
          resposta:
            'Aprovação mediante testes de desempenho e funcionalidade em ambiente de homologação',
          anotacoes: [
            {
              id: 10016,
              autor: 'Bruno Castro',
              dataCriacao: '2025-02-22T10:20:00',
              texto: 'Definir métricas específicas para aprovação nos testes',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Sustentabilidade',
      atributos: [
        {
          id: 17,
          descricao: 'Critérios Ambientais',
          codTipoAtributo: 1,
          idResposta: 117,
          resposta: 'Utilização de equipamentos com certificação de eficiência energética',
          anotacoes: [
            {
              id: 10017,
              autor: 'Patrícia Nunes',
              dataCriacao: '2025-02-22T14:30:00',
              texto: 'Adicionar requisitos de descarte responsável',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Penalidades',
      atributos: [
        {
          id: 18,
          descricao: 'Multas e Sanções',
          codTipoAtributo: 2,
          idResposta: 118,
          resposta: 'Aplicação de multa de 0,5% por dia de atraso, limitada a 10% do valor total',
          anotacoes: [
            {
              id: 10018,
              autor: 'Daniel Vieira',
              dataCriacao: '2025-02-23T09:50:00',
              texto: 'Incluir cláusulas para outros tipos de descumprimento',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Propriedade Intelectual',
      atributos: [
        {
          id: 19,
          descricao: 'Direitos Autorais',
          codTipoAtributo: 1,
          idResposta: 119,
          resposta:
            'Cessão total dos direitos sobre personalizações e desenvolvimentos específicos',
          anotacoes: [
            {
              id: 10019,
              autor: 'Amanda Lopes',
              dataCriacao: '2025-02-23T13:15:00',
              texto: 'Esclarecer situação de componentes open source',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Auditoria',
      atributos: [
        {
          id: 20,
          descricao: 'Registros de Auditoria',
          codTipoAtributo: 2,
          idResposta: 120,
          resposta: 'Manutenção de logs detalhados de todas as operações por no mínimo 5 anos',
          anotacoes: [
            {
              id: 10020,
              autor: 'Roberto Almeida',
              dataCriacao: '2025-02-24T10:40:00',
              texto: 'Definir procedimentos para exportação dos logs',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Disponibilidade',
      atributos: [
        {
          id: 21,
          descricao: 'Uptime Mínimo',
          codTipoAtributo: 3,
          idResposta: 121,
          resposta:
            'Disponibilidade mínima de 99,9% durante horário comercial e 98% fora do expediente',
          anotacoes: [
            {
              id: 10021,
              autor: 'Bianca Torres',
              dataCriacao: '2025-02-24T14:25:00',
              texto: 'Estabelecer métricas de monitoramento',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Idioma',
      atributos: [
        {
          id: 22,
          descricao: 'Suporte a Idiomas',
          codTipoAtributo: 1,
          idResposta: 122,
          resposta: 'Interface completa em português do Brasil e inglês, com suporte a UTF-8',
          anotacoes: [
            {
              id: 10022,
              autor: 'Marcelo Dias',
              dataCriacao: '2025-02-25T09:10:00',
              texto: 'Verificar necessidade de suporte a espanhol',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Acessibilidade',
      atributos: [
        {
          id: 23,
          descricao: 'Conformidade com e-MAG',
          codTipoAtributo: 2,
          idResposta: 123,
          resposta:
            'Atendimento total às diretrizes do Modelo de Acessibilidade em Governo Eletrônico',
          anotacoes: [
            {
              id: 10023,
              autor: 'Júlia Santana',
              dataCriacao: '2025-02-25T13:50:00',
              texto: 'Solicitar certificação WCAG 2.1 nível AA',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Transferência de Conhecimento',
      atributos: [
        {
          id: 24,
          descricao: 'Documentação de Processos',
          codTipoAtributo: 1,
          idResposta: 124,
          resposta:
            'Elaboração de documento detalhado de todas as configurações e personalizações realizadas',
          anotacoes: [
            {
              id: 10024,
              autor: 'Marcos Ribeiro',
              dataCriacao: '2025-02-26T10:30:00',
              texto: 'Incluir gravação das sessões de configuração',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Escalabilidade',
      atributos: [
        {
          id: 25,
          descricao: 'Crescimento Projetado',
          codTipoAtributo: 3,
          idResposta: 125,
          resposta: 'Capacidade de suportar aumento de 50% no volume de dados nos próximos 3 anos',
          anotacoes: [
            {
              id: 10025,
              autor: 'Vanessa Lima',
              dataCriacao: '2025-02-26T14:45:00',
              texto: 'Detalhar estimativas de crescimento anual',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Testes',
      atributos: [
        {
          id: 26,
          descricao: 'Metodologia de Testes',
          codTipoAtributo: 2,
          idResposta: 126,
          resposta:
            'Execução de testes unitários, integração, carga e segurança antes da implantação',
          anotacoes: [
            {
              id: 10026,
              autor: 'Lucas Ferreira',
              dataCriacao: '2025-02-27T09:40:00',
              texto: 'Incluir testes de regressão automatizados',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Arquitetura',
      atributos: [
        {
          id: 27,
          descricao: 'Padrões Arquiteturais',
          codTipoAtributo: 1,
          idResposta: 127,
          resposta: 'Utilização de microserviços com API RESTful e autenticação OAuth 2.0',
          anotacoes: [
            {
              id: 10027,
              autor: 'Rodrigo Gomes',
              dataCriacao: '2025-02-27T13:20:00',
              texto: 'Avaliar necessidade de suporte a GraphQL',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Versionamento',
      atributos: [
        {
          id: 28,
          descricao: 'Controle de Versões',
          codTipoAtributo: 2,
          idResposta: 128,
          resposta: 'Utilização de Git com estratégia de branching GitFlow e CI/CD automatizado',
          anotacoes: [
            {
              id: 10028,
              autor: 'Flávia Costa',
              dataCriacao: '2025-02-28T10:15:00',
              texto: 'Detalhar política de tags e releases',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Backup',
      atributos: [
        {
          id: 29,
          descricao: 'Política de Backup',
          codTipoAtributo: 3,
          idResposta: 129,
          resposta: 'Backup incremental diário e completo semanal, com retenção de 90 dias',
          anotacoes: [
            {
              id: 10029,
              autor: 'Sérgio Miranda',
              dataCriacao: '2025-02-28T14:35:00',
              texto: 'Incluir testes de restauração periódicos',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Gestão de Mudanças',
      atributos: [
        {
          id: 30,
          descricao: 'Procedimentos de Mudança',
          codTipoAtributo: 1,
          idResposta: 130,
          resposta:
            'Implementação de RFC (Request for Change) com aprovação mínima de dois níveis hierárquicos',
          anotacoes: [
            {
              id: 10030,
              autor: 'Tatiana Souza',
              dataCriacao: '2025-03-01T09:25:00',
              texto: 'Definir janelas de manutenção programada',
            },
          ],
        },
      ],
    },
  ],
}
// Exemplo de um objeto IAtualizacaoTermoReferenciaDTO completo
export const exemploTermoReferencia: IAtualizacaoTermoReferenciaDTO = {
  termoReferencia: {
    id: 12345,
    numero: 78901,
    unidade: 'Departamento de Tecnologia da Informação',
    processo: 'TI-2025/00123',
    dataCriacao: '2025-02-15T14:30:00',
    descricao: 'Aquisição de licenças de software para desenvolvimento',
    versao: '1.3',
    sei: 202500789,
    finalidade: 'Modernização da infraestrutura de desenvolvimento',
    situacao: 'Em andamento',
    responsavel: 'Maria Silva',
  },
  grupos: [
    {
      descricao: 'Informações Básicas',
      atributos: [
        {
          id: 1,
          descricao: 'Objeto da Contratação',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10001,
              autor: 'Carlos Andrade',
              dataCriacao: '2025-02-16T09:15:00',
              texto:
                'Detalhar quais são os softwares específicos necessários devido à modernização da infraestrutura de desenvolvimento da equipe de TI da autarquia X e quais são as licenças necessárias para a aquisição de tais softwares.',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Justificativa',
      atributos: [
        {
          id: 2,
          descricao: 'Motivação da Contratação',
          codTipoAtributo: 2,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10002,
              autor: 'Juliana Ferreira',
              dataCriacao: '2025-02-16T10:20:00',
              texto: 'Incluir dados estatísticos de produtividade',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Especificações Técnicas',
      atributos: [
        {
          id: 3,
          descricao: 'Requisitos Mínimos',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10003,
              autor: 'Ricardo Mendes',
              dataCriacao: '2025-02-16T11:45:00',
              texto: 'Verificar necessidade de compatibilidade com MacOS',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Cronograma',
      atributos: [
        {
          id: 4,
          descricao: 'Prazo de Entrega',
          codTipoAtributo: 3,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10004,
              autor: 'Ana Costa',
              dataCriacao: '2025-02-17T08:30:00',
              texto: 'Considerar possíveis atrasos devido à importação',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Garantia',
      atributos: [
        {
          id: 5,
          descricao: 'Período de Garantia',
          codTipoAtributo: 3,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10005,
              autor: 'Fernando Gomes',
              dataCriacao: '2025-02-17T09:45:00',
              texto: 'Avaliar possibilidade de extensão para 24 meses',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Suporte',
      atributos: [
        {
          id: 6,
          descricao: 'Níveis de Atendimento',
          codTipoAtributo: 2,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10006,
              autor: 'Mariana Alves',
              dataCriacao: '2025-02-17T14:20:00',
              texto: 'Definir SLAs específicos para cada tipo de ocorrência',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Capacitação',
      atributos: [
        {
          id: 7,
          descricao: 'Treinamento',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10007,
              autor: 'Pedro Santos',
              dataCriacao: '2025-02-18T10:15:00',
              texto: 'Considerar também opção de treinamento online',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Documentação',
      atributos: [
        {
          id: 8,
          descricao: 'Manuais Técnicos',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10008,
              autor: 'Luciana Martins',
              dataCriacao: '2025-02-18T13:40:00',
              texto: 'Solicitar também versões impressas dos principais manuais',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Licenciamento',
      atributos: [
        {
          id: 9,
          descricao: 'Modelo de Licenciamento',
          codTipoAtributo: 2,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10009,
              autor: 'Rafael Oliveira',
              dataCriacao: '2025-02-19T09:30:00',
              texto: 'Comparar com modelo de assinatura anual',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Equipe Técnica',
      atributos: [
        {
          id: 10,
          descricao: 'Qualificação da Equipe',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10010,
              autor: 'Camila Rodrigues',
              dataCriacao: '2025-02-19T14:50:00',
              texto: 'Especificar quais certificações são necessárias',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Pagamento',
      atributos: [
        {
          id: 11,
          descricao: 'Condições de Pagamento',
          codTipoAtributo: 3,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10011,
              autor: 'Gustavo Lima',
              dataCriacao: '2025-02-20T08:20:00',
              texto: 'Verificar possibilidade de pagamento único com desconto',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Segurança',
      atributos: [
        {
          id: 12,
          descricao: 'Requisitos de Segurança',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10012,
              autor: 'Renata Sousa',
              dataCriacao: '2025-02-20T11:30:00',
              texto: 'Incluir necessidade de criptografia de dados em repouso',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Integração',
      atributos: [
        {
          id: 13,
          descricao: 'Compatibilidade',
          codTipoAtributo: 2,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10013,
              autor: 'Alexandre Cardoso',
              dataCriacao: '2025-02-20T15:40:00',
              texto: 'Detalhar versões específicas dos bancos de dados',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Ambiente',
      atributos: [
        {
          id: 14,
          descricao: 'Infraestrutura Necessária',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10014,
              autor: 'Eduardo Pereira',
              dataCriacao: '2025-02-21T09:15:00',
              texto: 'Considerar também opção de infraestrutura híbrida',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Requisitos Legais',
      atributos: [
        {
          id: 15,
          descricao: 'Conformidade Legal',
          codTipoAtributo: 2,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10015,
              autor: 'Carla Moreira',
              dataCriacao: '2025-02-21T13:45:00',
              texto: 'Incluir referência ao decreto nº 10.024/2019',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Critérios de Aceitação',
      atributos: [
        {
          id: 16,
          descricao: 'Homologação',
          codTipoAtributo: 3,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10016,
              autor: 'Bruno Castro',
              dataCriacao: '2025-02-22T10:20:00',
              texto: 'Definir métricas específicas para aprovação nos testes',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Sustentabilidade',
      atributos: [
        {
          id: 17,
          descricao: 'Critérios Ambientais',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10017,
              autor: 'Patrícia Nunes',
              dataCriacao: '2025-02-22T14:30:00',
              texto: 'Adicionar requisitos de descarte responsável',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Penalidades',
      atributos: [
        {
          id: 18,
          descricao: 'Multas e Sanções',
          codTipoAtributo: 2,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10018,
              autor: 'Daniel Vieira',
              dataCriacao: '2025-02-23T09:50:00',
              texto: 'Incluir cláusulas para outros tipos de descumprimento',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Propriedade Intelectual',
      atributos: [
        {
          id: 19,
          descricao: 'Direitos Autorais',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10019,
              autor: 'Amanda Lopes',
              dataCriacao: '2025-02-23T13:15:00',
              texto: 'Esclarecer situação de componentes open source',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Auditoria',
      atributos: [
        {
          id: 20,
          descricao: 'Registros de Auditoria',
          codTipoAtributo: 2,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10020,
              autor: 'Roberto Almeida',
              dataCriacao: '2025-02-24T10:40:00',
              texto: 'Definir procedimentos para exportação dos logs',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Disponibilidade',
      atributos: [
        {
          id: 21,
          descricao: 'Uptime Mínimo',
          codTipoAtributo: 3,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10021,
              autor: 'Bianca Torres',
              dataCriacao: '2025-02-24T14:25:00',
              texto: 'Estabelecer métricas de monitoramento',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Idioma',
      atributos: [
        {
          id: 22,
          descricao: 'Suporte a Idiomas',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10022,
              autor: 'Marcelo Dias',
              dataCriacao: '2025-02-25T09:10:00',
              texto: 'Verificar necessidade de suporte a espanhol',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Acessibilidade',
      atributos: [
        {
          id: 23,
          descricao: 'Conformidade com e-MAG',
          codTipoAtributo: 2,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10023,
              autor: 'Júlia Santana',
              dataCriacao: '2025-02-25T13:50:00',
              texto: 'Solicitar certificação WCAG 2.1 nível AA',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Transferência de Conhecimento',
      atributos: [
        {
          id: 24,
          descricao: 'Documentação de Processos',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10024,
              autor: 'Marcos Ribeiro',
              dataCriacao: '2025-02-26T10:30:00',
              texto: 'Incluir gravação das sessões de configuração',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Escalabilidade',
      atributos: [
        {
          id: 25,
          descricao: 'Crescimento Projetado',
          codTipoAtributo: 3,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10025,
              autor: 'Vanessa Lima',
              dataCriacao: '2025-02-26T14:45:00',
              texto: 'Detalhar estimativas de crescimento anual',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Testes',
      atributos: [
        {
          id: 26,
          descricao: 'Metodologia de Testes',
          codTipoAtributo: 2,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10026,
              autor: 'Lucas Ferreira',
              dataCriacao: '2025-02-27T09:40:00',
              texto: 'Incluir testes de regressão automatizados',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Arquitetura',
      atributos: [
        {
          id: 27,
          descricao: 'Padrões Arquiteturais',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10027,
              autor: 'Rodrigo Gomes',
              dataCriacao: '2025-02-27T13:20:00',
              texto: 'Avaliar necessidade de suporte a GraphQL',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Versionamento',
      atributos: [
        {
          id: 28,
          descricao: 'Controle de Versões',
          codTipoAtributo: 2,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10028,
              autor: 'Flávia Costa',
              dataCriacao: '2025-02-28T10:15:00',
              texto: 'Detalhar política de tags e releases',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Backup',
      atributos: [
        {
          id: 29,
          descricao: 'Política de Backup',
          codTipoAtributo: 3,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10029,
              autor: 'Sérgio Miranda',
              dataCriacao: '2025-02-28T14:35:00',
              texto: 'Incluir testes de restauração periódicos',
            },
          ],
        },
      ],
    },
    {
      descricao: 'Gestão de Mudanças',
      atributos: [
        {
          id: 30,
          descricao: 'Procedimentos de Mudança',
          codTipoAtributo: 1,
          idResposta: null,
          resposta: null,
          anotacoes: [
            {
              id: 10030,
              autor: 'Tatiana Souza',
              dataCriacao: '2025-03-01T09:25:00',
              texto: 'Definir janelas de manutenção programada',
            },
          ],
        },
      ],
    },
  ],
}
