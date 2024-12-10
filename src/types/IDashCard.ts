export interface IDashCard {
  alias: string
  size: 'large' | 'small'
  text: string
  value: number
  iconName: string
  selected: boolean
}
