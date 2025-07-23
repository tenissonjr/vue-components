import type { ITermoReferenciaDTO } from './ITermoReferenciaDTO'
import type { TreeNode } from './TreeNode'

export interface IAtualizacaoTermoReferenciaTreeNodeDTO {
  termoReferencia: ITermoReferenciaDTO
  grupos: TreeNode[]
}

// ...existing code...

export const exemploTermoReferenciaTreeNode: IAtualizacaoTermoReferenciaTreeNodeDTO = {
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
    // ...elementos já existentes...
    // Adicionando mais 8 elementos com até 3 children cada
    {
      key: '10',
      data: {
        descricao: 'Planejamento Orçamentário',
        ordenacao: '5',
        atributos: [],
      },
      children: [
        {
          key: '5.1',
          data: {
            descricao: 'Fonte de Recursos',
            ordenacao: '5.1',
            atributos: [
              {
                id: 11,
                ordenacao: 1,
                descricao: 'Fonte de Recursos',
                codTipoAtributo: 1,
                idResposta: 111,
                resposta: 'Orçamento Geral',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
        {
          key: '5.2',
          data: {
            descricao: 'Dotação Orçamentária',
            ordenacao: '5.2',
            atributos: [
              {
                id: 12,
                ordenacao: 2,
                descricao: 'Dotação Orçamentária',
                codTipoAtributo: 1,
                idResposta: 112,
                resposta: '2025A123',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
      ],
    },
    {
      key: '6',
      data: {
        descricao: 'Critérios de Julgamento',
        ordenacao: '6',
        atributos: [],
      },
      children: [
        {
          key: '6.1',
          data: {
            descricao: 'Menor Preço',
            ordenacao: '6.1',
            atributos: [
              {
                id: 13,
                ordenacao: 1,
                descricao: 'Critério',
                codTipoAtributo: 1,
                idResposta: 113,
                resposta: 'Menor Preço',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
        {
          key: '6.2',
          data: {
            descricao: 'Técnica e Preço',
            ordenacao: '6.2',
            atributos: [
              {
                id: 14,
                ordenacao: 2,
                descricao: 'Critério',
                codTipoAtributo: 1,
                idResposta: 114,
                resposta: 'Técnica e Preço',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
      ],
    },
    {
      key: '7',
      data: {
        descricao: 'Prazo de Execução',
        ordenacao: '7',
        atributos: [
          {
            id: 15,
            ordenacao: 1,
            descricao: 'Prazo Total',
            codTipoAtributo: 1,
            idResposta: 115,
            resposta: '12 meses',
            anotacoes: [],
          },
        ],
      },
      children: [],
    },
    {
      key: '8',
      data: {
        descricao: 'Fiscalização',
        ordenacao: '8',
        atributos: [],
      },
      children: [
        {
          key: '8.1',
          data: {
            descricao: 'Equipe de Fiscalização',
            ordenacao: '8.1',
            atributos: [
              {
                id: 16,
                ordenacao: 1,
                descricao: 'Responsável',
                codTipoAtributo: 1,
                idResposta: 116,
                resposta: 'Equipe Técnica',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
      ],
    },
    {
      key: '9',
      data: {
        descricao: 'Penalidades',
        ordenacao: '9',
        atributos: [],
      },
      children: [
        {
          key: '9.1',
          data: {
            descricao: 'Advertência',
            ordenacao: '9.1',
            atributos: [
              {
                id: 17,
                ordenacao: 1,
                descricao: 'Advertência',
                codTipoAtributo: 2,
                idResposta: 117,
                resposta: 'Sim',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
        {
          key: '9.2',
          data: {
            descricao: 'Multa',
            ordenacao: '9.2',
            atributos: [
              {
                id: 18,
                ordenacao: 2,
                descricao: 'Multa',
                codTipoAtributo: 2,
                idResposta: 118,
                resposta: 'Sim',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
        {
          key: '9.3',
          data: {
            descricao: 'Suspensão',
            ordenacao: '9.3',
            atributos: [
              {
                id: 19,
                ordenacao: 3,
                descricao: 'Suspensão',
                codTipoAtributo: 2,
                idResposta: 119,
                resposta: 'Não',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
      ],
    },
    {
      key: '10',
      data: {
        descricao: 'Garantias',
        ordenacao: '10',
        atributos: [],
      },
      children: [
        {
          key: '10.1',
          data: {
            descricao: 'Seguro Garantia',
            ordenacao: '10.1',
            atributos: [
              {
                id: 20,
                ordenacao: 1,
                descricao: 'Seguro Garantia',
                codTipoAtributo: 2,
                idResposta: 120,
                resposta: 'Obrigatório',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
      ],
    },
    {
      key: '11',
      data: {
        descricao: 'Sustentabilidade',
        ordenacao: '11',
        atributos: [],
      },
      children: [
        {
          key: '11.1',
          data: {
            descricao: 'Critérios Ambientais',
            ordenacao: '11.1',
            atributos: [
              {
                id: 21,
                ordenacao: 1,
                descricao: 'Critérios Ambientais',
                codTipoAtributo: 1,
                idResposta: 121,
                resposta: 'Sim',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
        {
          key: '11.2',
          data: {
            descricao: 'Critérios Sociais',
            ordenacao: '11.2',
            atributos: [
              {
                id: 22,
                ordenacao: 2,
                descricao: 'Critérios Sociais',
                codTipoAtributo: 1,
                idResposta: 122,
                resposta: 'Sim',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
      ],
    },
    {
      key: '12',
      data: {
        descricao: 'Comunicação',
        ordenacao: '12',
        atributos: [],
      },
      children: [
        {
          key: '12.1',
          data: {
            descricao: 'Canal de Comunicação',
            ordenacao: '12.1',
            atributos: [
              {
                id: 23,
                ordenacao: 1,
                descricao: 'Canal',
                codTipoAtributo: 1,
                idResposta: 123,
                resposta: 'E-mail',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
      ],
    },
    {
      key: '13',
      data: {
        descricao: 'Treinamento',
        ordenacao: '13',
        atributos: [],
      },
      children: [
        {
          key: '13.1',
          data: {
            descricao: 'Necessidade de Treinamento',
            ordenacao: '13.1',
            atributos: [
              {
                id: 24,
                ordenacao: 1,
                descricao: 'Treinamento',
                codTipoAtributo: 2,
                idResposta: 124,
                resposta: 'Sim',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
        {
          key: '13.2',
          data: {
            descricao: 'Carga Horária',
            ordenacao: '13.2',
            atributos: [
              {
                id: 25,
                ordenacao: 2,
                descricao: 'Carga Horária',
                codTipoAtributo: 1,
                idResposta: 125,
                resposta: '8 horas',
                anotacoes: [],
              },
            ],
          },
          children: [],
        },
      ],
    },
  ],
}
