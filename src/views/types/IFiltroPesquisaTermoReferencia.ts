import type { IValueObject } from '@/modules/shared/types/IValueObject'

export interface IFiltroPesquisaTermoReferencia {
  titulo: string | null
  numeroTermoReferencia: number | null
  numeroProcesso: number | null
  anoProcesso: number | null
  usuario: string | null
  situacoes: IValueObject[] | null
  tiposModelo: IValueObject[] | null
  unidades: IValueObject[] | null
  page?: number | null
  size?: number | null
}
