import type { IAtributoTermoReferenciaDTO } from './IAtributoTermoReferenciaDTO'
export interface TreeNode {
  key: string
  data: {
    descricao: string
    ordenacao: string
    atributos: IAtributoTermoReferenciaDTO[]
  }
  children?: TreeNode[]
}
