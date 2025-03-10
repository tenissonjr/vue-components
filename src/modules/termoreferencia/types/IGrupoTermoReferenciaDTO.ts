import type { IAtributoTermoReferenciaDTO } from './IAtributoTermoReferenciaDTO'
export interface IGrupoTermoReferenciaDTO {
  descricao: string
  ordenacao: number
  atributos: IAtributoTermoReferenciaDTO[]
  grupos?: IGrupoTermoReferenciaDTO[] // Atributo opcional
}
