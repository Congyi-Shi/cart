import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Goods {
  name: string
  price: number
  quantity: number
  id?: number
}

export const useGoodsStore = defineStore('goods', () => {
  const totalItems = ref<Goods[]>([])
  const totalPrices = computed(() => {
    return totalItems.value.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
  })
  const totalItemsQuantity = computed(() => {
    return totalItems.value.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  })
  function addNewGoods(goods: Goods) {
    const copyItem = Object.assign({}, goods)
    totalItems.value.push(copyItem)
  }
  function updateGoods(goods: Goods) {
    const index = totalItems.value.findIndex((item) => item.name === goods.name)
    if (index === -1) {
      addNewGoods(goods)
    } else {
      totalItems.value[index] = Object.assign({}, { ...goods })
    }
    if (goods.quantity === 0) {
      removeGoods(goods)
      return
    }
    totalItems.value[index] = goods
  }
  function removeGoods(goods: Goods) {
    const index = totalItems.value.findIndex((item) => item.name === goods.name)
    totalItems.value.splice(index, 1)
  }
  function clearGoods() {
    totalItems.value = []
  }

  return {
    totalItems,
    totalPrices,
    totalItemsQuantity,
    addNewGoods,
    updateGoods,
    removeGoods,
    clearGoods
  }
})
