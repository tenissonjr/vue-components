import type { ITermoReferenciaDTO } from './ITermoReferenciaDTO'
import type { TreeNode } from './TreeNode'

export interface IAtualizacaoTermoReferenciaTreeNodeDTO {
  termoReferencia: ITermoReferenciaDTO
  grupos: TreeNode[]
}

// Exemplo de um objeto IAtualizacaoTermoReferenciaDTO completo
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
    {
      key: '1',
      data: {
        descricao: 'Grupo 1 - Equipamentos de Informática',
        ordenacao: '1',
        atributos: [
          {
            id: 1,
            ordenacao: 1,
            descricao: 'Computador Desktop',
            codTipoAtributo: 101,
            idResposta: null,
            resposta: null,
            anotacoes: [],
          },
          {
            id: 2,
            ordenacao: 2,
            descricao: 'Impressora Multifuncional',
            codTipoAtributo: 102,
            idResposta: null,
            resposta: null,
            anotacoes: [],
          },
        ],
      },
      children: [],
    },
    {
      key: '2',
      data: {
        descricao: 'Grupo 2 - Serviços de Manutenção',
        ordenacao: '2',
        atributos: [
          {
            id: 3,
            ordenacao: 1,
            descricao: 'Manutenção Preventiva',
            codTipoAtributo: 201,
            idResposta: null,
            resposta: null,
            anotacoes: [],
          },
          {
            id: 4,
            ordenacao: 2,
            descricao: 'Suporte Técnico Remoto',
            codTipoAtributo: 202,
            idResposta: null,
            resposta: null,
            anotacoes: [],
          },
        ],
      },
      children: [],
    },
  ],
}
