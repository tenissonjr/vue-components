export interface IDashCard {
  alias: string
  size: 'large' | 'small'
  legend: string
  info: string
  iconName: string
  selected: boolean
  value?: object
}
