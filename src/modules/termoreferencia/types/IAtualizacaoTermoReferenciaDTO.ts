import type { ITermoReferenciaDTO } from './ITermoReferenciaDTO'
import type { IGrupoTermoReferenciaDTO } from './IGrupoTermoReferenciaDTO'

export interface IAtualizacaoTermoReferenciaDTO {
  termoReferencia: ITermoReferenciaDTO
  grupos: IGrupoTermoReferenciaDTO[]
}

// Exemplo de um objeto IAtualizacaoTermoReferenciaDTO completo
export const exemploTermoReferencia: IAtualizacaoTermoReferenciaDTO = {
  termoReferencia: {
    id: 1,
    numero: 2025001,
    unidade: 'Departamento de Compras',
    processo: '12345/2025',
    dataCriacao: '2025-03-07',
    descricao: 'Termo de Referência para aquisição de bens e serviços',
    versao: '1.0',
    sei: 987654,
    finalidade: 'Aquisição de equipamentos para modernização',
    situacao: 'Em elaboração',
    responsavel: 'João Silva',
  },
  grupos: [
    {
      id: 10,
      descricao: 'Informações Iniciais',
      ordenacao: 1,
      atributos: [],
      grupos: [
        {
          id: 2,
          descricao: 'Órgãos Requisitantes',
          ordenacao: 1,
          atributos: [
            {
              id: 1,
              ordenacao: 1,
              descricao: 'Órgãos Requisitantes',
              codTipoAtributo: 1,
              idResposta: 101,
              resposta: 'Ministério da Economia',
              anotacoes: [
                {
                  id: 201,
                  autor: 'Maria Souza',
                  dataCriacao: '2025-03-07',
                  texto: 'Preencher com os órgãos que demandaram a contratação.',
                },
              ],
            },
          ],
        },
        {
          id: 3,
          descricao: 'Órgãos Especificadores',
          ordenacao: 2,
          atributos: [
            {
              id: 2,
              ordenacao: 2,
              descricao: 'Órgãos Especificadores',
              codTipoAtributo: 1,
              idResposta: 102,
              resposta: 'Secretaria de Logística',
              anotacoes: [
                {
                  id: 202,
                  autor: 'Carlos Oliveira',
                  dataCriacao: '2025-03-07',
                  texto: 'Indicar os órgãos responsáveis pela definição do objeto.',
                },
              ],
            },
          ],
        },
        {
          id: 4,
          descricao: 'Contratação anterior',
          ordenacao: 3,
          atributos: [
            {
              id: 3,
              ordenacao: 3,
              descricao: 'Houve contratação anterior?',
              codTipoAtributo: 2,
              idResposta: 103,
              resposta: 'Sim',
              anotacoes: [
                {
                  id: 203,
                  autor: 'Ana Costa',
                  dataCriacao: '2025-03-07',
                  texto: 'Informar se já houve contratação semelhante anteriormente.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id:20 ,
      descricao: 'Definição do Objeto',
      ordenacao: 2,
      atributos: [
        {
          id: 4,
          ordenacao: 1,
          descricao: 'Natureza do Objeto',
          codTipoAtributo: 1,
          idResposta: 104,
          resposta: 'Material Permanente',
          anotacoes: [
            {
              id: 204,
              autor: 'Lucas Lima',
              dataCriacao: '2025-03-07',
              texto: 'Definir se é material de consumo, permanente, serviço etc.',
            },
          ],
        },
        {
          id: 5,
          ordenacao: 2,
          descricao: 'Modo de entrega',
          codTipoAtributo: 1,
          idResposta: 105,
          resposta: 'Entrega única',
          anotacoes: [
            {
              id: 205,
              autor: 'Beatriz Mendes',
              dataCriacao: '2025-03-07',
              texto: 'Especificar se a entrega será parcelada ou única.',
            },
          ],
        },
      ],
    },
    {
      id: 30,
      descricao: 'Fundamentação da Contratação',
      ordenacao: 3,
      atributos: [
        {
          id: 6,
          ordenacao: 1,
          descricao: 'Dispensa do instrumento do contrato?',
          codTipoAtributo: 2,
          idResposta: 106,
          resposta: 'Não',
          anotacoes: [
            {
              id: 206,
              autor: 'Fernando Rocha',
              dataCriacao: '2025-03-07',
              texto: 'Indicar se a contratação será formalizada por meio de contrato.',
            },
          ],
        },
        {
          id: 7,
          ordenacao: 2,
          descricao: 'Análise de risco pertinente',
          codTipoAtributo: 1,
          idResposta: 107,
          resposta: 'Análise de riscos concluída e validada',
          anotacoes: [
            {
              id: 207,
              autor: 'Juliana Nunes',
              dataCriacao: '2025-03-07',
              texto: 'Incluir resumo da análise de risco realizada.',
            },
          ],
        },
      ],
    },
    {
      id: 40,
      descricao: 'Requisitos da Contratação',
      ordenacao: 4,
      atributos: [
        {
          id: 8,
          ordenacao: 1,
          descricao: 'Será utilizado o sistema de registro de preços?',
          codTipoAtributo: 2,
          idResposta: 108,
          resposta: 'Sim',
          anotacoes: [
            {
              id: 208,
              autor: 'Ricardo Almeida',
              dataCriacao: '2025-03-07',
              texto: 'Indicar se a contratação será feita por meio de registro de preços.',
            },
          ],
        },
        {
          id: 9,
          ordenacao: 2,
          descricao: 'Participação de empresas em cooperativas',
          codTipoAtributo: 2,
          idResposta: 109,
          resposta: 'Permitida',
          anotacoes: [
            {
              id: 209,
              autor: 'Tatiane Borges',
              dataCriacao: '2025-03-07',
              texto: 'Definir se a participação de cooperativas será permitida.',
            },
          ],
        },
        {
          id: 10,
          ordenacao: 3,
          descricao: 'Exigência de garantia',
          codTipoAtributo: 2,
          idResposta: 110,
          resposta: 'Garantia mínima de 12 meses',
          anotacoes: [
            {
              id: 210,
              autor: 'Diego Fernandes',
              dataCriacao: '2025-03-07',
              texto: 'Especificar se há necessidade de garantia do objeto contratado.',
            },
          ],
        },
      ],
    },
  ],
}
