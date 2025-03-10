import type { IAtributoTermoReferenciaDTO } from './IAtributoTermoReferenciaDTO'
import type { IGrupoTermoReferenciaDTO } from './IGrupoTermoReferenciaDTO'
export interface IGrupoTermoReferenciaFlatDTO {
  descricao: string
  ordenacao: number
  nivel: number
  ordernacaoHierarquica: string
  atributos: IAtributoTermoReferenciaDTO[]
}
//Função que recebe como parametro uma array de objetos IGrupoTermoReferenciaDTO e retorna um objeto um array de  IGrupoTermoReferenciaFlatDTO a ordenação hierarquica deverá deverser a concatenação de todas as ordenações de todos os níveis
export const flatGrupoTermoReferencia = (
  grupo: IGrupoTermoReferenciaDTO,
  nivel = 0,
  ordernacaoHierarquica = '',
): IGrupoTermoReferenciaFlatDTO[] => {
  let flatGrupo: IGrupoTermoReferenciaFlatDTO[] = []
  let ordernacaoHierarquicaAtual = `${ordernacaoHierarquica}.${grupo.ordenacao}`
  flatGrupo.push({
    descricao: grupo.descricao,
    ordenacao: grupo.ordenacao,
    nivel: nivel,
    ordernacaoHierarquica: ordernacaoHierarquicaAtual,
    atributos: grupo.atributos,
  })
  grupo.grupos?.forEach((grupoFilho) => {
    flatGrupo = flatGrupo.concat(
      flatGrupoTermoReferencia(grupoFilho, nivel + 1, ordernacaoHierarquicaAtual),
    )
  })
  return flatGrupo
}
