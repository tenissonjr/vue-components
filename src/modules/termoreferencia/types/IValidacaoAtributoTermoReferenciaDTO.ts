export interface IValidacaoAtributoTermoReferenciaDTO {
  descricaoGrupo: string
  idAtributo: number
  descricaoAtributo: string
  tipo: 'Erro' | 'Aviso'
  mensagem: string
}
