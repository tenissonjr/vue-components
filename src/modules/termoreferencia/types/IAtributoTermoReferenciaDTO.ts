import type { IAnotacaoAtributoTermoReferenciaDTO } from './IAnotacaoAtributoTermoReferenciaDTO'

export interface IAtributoTermoReferenciaDTO {
  id: number
  descricao: string
  resposta: string
  anotacoes: IAnotacaoAtributoTermoReferenciaDTO[]
}
