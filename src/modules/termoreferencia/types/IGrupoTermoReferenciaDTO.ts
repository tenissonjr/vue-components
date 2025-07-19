import type { IAtributoTermoReferenciaDTO } from './IAtributoTermoReferenciaDTO'
export interface IGrupoTermoReferenciaDTO {
  id:number; //Número aleatório
  descricao: string //Descrição do grupo que será igual ao nome do atributo ( Primeira Release)
  ordenacao: number
  atributos: IAtributoTermoReferenciaDTO[]
  grupos?: IGrupoTermoReferenciaDTO[] // Atributo opcional
}
