import type { IAnotacaoAtributoTermoReferenciaDTO } from './IAnotacaoAtributoTermoReferenciaDTO'

export interface IAtributoTermoReferenciaDTO {
  id: number  //id do Conteúdo Textual Referente à pergunta
  ordenacao: number
  descricao: string
  codTipoAtributo: number
  idResposta: number | null //id do Conteúdo Textual Referente à resposta
  resposta: string | null
  anotacoes: IAnotacaoAtributoTermoReferenciaDTO[]
}
