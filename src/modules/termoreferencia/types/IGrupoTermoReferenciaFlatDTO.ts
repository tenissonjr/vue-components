import type { IAtributoTermoReferenciaDTO } from './IAtributoTermoReferenciaDTO'
import type { IGrupoTermoReferenciaDTO } from './IGrupoTermoReferenciaDTO'
export interface IGrupoTermoReferenciaFlatDTO {
  id: number;
  descricao: string
  ordenacao: number
  nivel: number
  ordenacaoHierarquica: string
  atributos: IAtributoTermoReferenciaDTO[]
}
export const flatGrupoTermoReferencia = (
  grupos: IGrupoTermoReferenciaDTO[],
  nivel: number = 0,
  ordenacaoHierarquica: string = '',
): IGrupoTermoReferenciaFlatDTO[] => {
  const flatGrupos: IGrupoTermoReferenciaFlatDTO[] = []

  const prefixo = ordenacaoHierarquica != '' ? ordenacaoHierarquica + '.' : ''

  grupos.forEach((grupo) => {
    flatGrupos.push({
      id: grupo.id,
      descricao: grupo.descricao,
      ordenacao: grupo.ordenacao,
      nivel: nivel,
      ordenacaoHierarquica: `${prefixo}${grupo.ordenacao.toString()}`,
      atributos: grupo.atributos,
    })
    if (grupo.grupos && grupo.grupos.length > 0) {
      flatGrupos.push(
        ...flatGrupoTermoReferencia(
          grupo.grupos,
          nivel + 1,
          `${prefixo}${grupo.ordenacao.toString()}`,
        ),
      )
    }
  })

  return flatGrupos
}
