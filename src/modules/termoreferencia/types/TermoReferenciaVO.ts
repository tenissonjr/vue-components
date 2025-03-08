import type { IValueObject } from '@/modules/shared/types/IValueObject'

export const ELABORACAO = { descricao: 'Elaboração', codigo: 0 }
export const MINUTA = { descricao: 'Minuta', codigo: 1 }
export const PUBLICADO = { descricao: 'Publicado', codigo: 2 }
export const CANCELADO = { descricao: 'Cancelado', codigo: 9 }
export const EM_DESUSO = { descricao: 'Em Desuso', codigo: 6 }
export const OBSOLETO = { descricao: 'Obsoleta', codigo: 5 }
export const SUSPENSA = { descricao: 'Suspensa', codigo: 3 }
export const REEDITADA = { descricao: 'Reeditada', codigo: 4 }

export const situacoesVO: IValueObject[] = [
  ELABORACAO,
  MINUTA,
  PUBLICADO,
  SUSPENSA,
  REEDITADA,
  OBSOLETO,
  EM_DESUSO,
  CANCELADO]

  export const situacoesPesquisaTermoReferenciaVO: IValueObject[] = [
    ELABORACAO,
    MINUTA,
    PUBLICADO,
    CANCELADO]



export const getArraySituacoesPesquisaTermoReferencia = (): number[] => {
  return situacoesPesquisaTermoReferenciaVO.map(situacao => Number(situacao.codigo))
}

export const tiposModeloVO: IValueObject[] = [
  { descricao: 'Não se aplica', codigo: 0 },
  { descricao: 'Aquisição', codigo: 1 },
  { descricao: 'Contratação', codigo: 2 },
  { descricao: 'Terceirização', codigo: 3 },
  { descricao: 'Informática', codigo: 4 },
  { descricao: 'Credenciamento', codigo: 5 }
]


export const getSituacaoVO = (codigo: number): IValueObject | undefined => {
  return situacoesVO.find((situacao) => situacao.codigo === codigo) ?? undefined
}

export const getTipoModeloVO = (codigo: number): IValueObject | undefined => {
  return tiposModeloVO.find((tipoModelo) => tipoModelo.codigo === codigo) ?? undefined
}
