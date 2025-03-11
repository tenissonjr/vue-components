import type { IAtributoTermoReferenciaDTO } from './IAtributoTermoReferenciaDTO'
export interface IGrupoTermoReferenciaDTO {
  id:number;
  descricao: string
  ordenacao: number
  atributos: IAtributoTermoReferenciaDTO[]
  grupos?: IGrupoTermoReferenciaDTO[] // Atributo opcional
}
