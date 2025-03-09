import type { IAnotacaoAtributoTermoReferenciaDTO } from './IAnotacaoAtributoTermoReferenciaDTO'

export interface IAtributoTermoReferenciaDTO {
  id: number
  descricao: string
  codTipoAtributo: number
  idResposta: number
  resposta: string
  anotacoes: IAnotacaoAtributoTermoReferenciaDTO[]
}
