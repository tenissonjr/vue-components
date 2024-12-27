export interface IHistoryItem {
  status: string
  date: string
  content?: string
  backgroundColor?: string
  color?: string
  icon: string
}

export interface IHistory {
  dataKey: string
  align: 'left' | 'right' | 'top' | 'bottom' | 'alternate'
  layout: 'vertical' | 'horizontal'
  events: IHistoryItem[]
}
