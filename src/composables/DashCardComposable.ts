import { ref } from 'vue'
import type { IDashCard } from '../types/IDashCard'

export function useDashCard() {
  const cards = ref<IDashCard[]>([])

  const addCard = (card: IDashCard): void => {
    const cardExists = cards.value.some((existingCard) => existingCard.alias === card.alias)
    if (cardExists) {
      throw new Error(`Já existe Card com o alias "${card.alias}" .`)
    }
    cards.value.push(card)
  }

  const getCards = (): IDashCard[] => {
    return cards.value
  }

  const getLargeCards = (): IDashCard[] => {
    return cards.value.filter((card) => card.size === 'large')
  }

  const getSmallCards = (): IDashCard[] => {
    return cards.value.filter((card) => card.size === 'small')
  }

  const selectCardByAlias = (alias: string): void => {
    const cardExists = cards.value.some((card) => card.alias === alias)
    if (!cardExists) {
      return
    }
    cards.value.forEach((card) => {
      card.selected = card.alias === alias
    })
  }

  return {
    addCard,
    getCards,
    getLargeCards,
    getSmallCards,
    selectCardByAlias,
  }
}
