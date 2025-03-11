import type { IAtributoTermoReferenciaDTO } from './IAtributoTermoReferenciaDTO'
import type { IGrupoTermoReferenciaDTO } from './IGrupoTermoReferenciaDTO'
export interface IGrupoTermoReferenciaFlatDTO {
  id:number;
  descricao: string
  ordenacao: number
  nivel: number
  ordernacaoHierarquica: string
  atributos: IAtributoTermoReferenciaDTO[]
}
//Função que recebe como parametro uma array de objetos IGrupoTermoReferenciaDTO e retorna um objeto um array de  IGrupoTermoReferenciaFlatDTO a ordenação hierarquica deverá deverser a concatenação de todas as ordenações de todos os níveis
export const flatGrupoTermoReferencia = (
  grupos: IGrupoTermoReferenciaDTO[],
  nivel: number = 0,
  ordernacaoHierarquica: string = '',
): IGrupoTermoReferenciaFlatDTO[] => {
  const flatGrupos: IGrupoTermoReferenciaFlatDTO[] = []

  const prefixo = ordernacaoHierarquica != '' ? ordernacaoHierarquica + '.' : ''

  grupos.forEach((grupo) => {
    flatGrupos.push({
      id: grupo.id,
      descricao: grupo.descricao,
      ordenacao: grupo.ordenacao,
      nivel: nivel,
      ordernacaoHierarquica: `${prefixo}${grupo.ordenacao.toString()}`,
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
