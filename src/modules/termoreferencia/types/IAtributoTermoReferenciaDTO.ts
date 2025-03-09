import type { IAnotacaoAtributoTermoReferenciaDTO } from './IAnotacaoAtributoTermoReferenciaDTO'

export interface IAtributoTermoReferenciaDTO {
  id: number
  descricao: string
  codTipoAtributo: number
  idResposta: number | null
  resposta: string | null
  anotacoes: IAnotacaoAtributoTermoReferenciaDTO[]
}
