import type { IAnotacaoAtributoTermoReferenciaDTO } from './IAnotacaoAtributoTermoReferenciaDTO'

export interface IAtributoTermoReferenciaDTO {
  id: number
  ordenacao: number
  descricao: string
  codTipoAtributo: number
  idResposta: number | null
  resposta: string | null
  anotacoes: IAnotacaoAtributoTermoReferenciaDTO[]
}
