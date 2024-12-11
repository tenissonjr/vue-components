export interface IDashCard {
  alias: string
  size: 'large' | 'small'
  text: string
  quantity: number
  iconName: string
  selected: boolean
  value?: object
}
