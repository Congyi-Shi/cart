<template>
  <div class="cart-container">
    <div class="name">{{ item.name }}</div>
    <div class="price">{{ item.price }}</div>
    <div class="quantity">
      <el-input v-model="item.quantity" type="number"></el-input>
    </div>
    <div class="operations">
      <el-button type="danger" @click="removeItem">Remove</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import { useGoodsStore } from '@/stores/goods'

const goodsStore = useGoodsStore()
const { removeGoods } = goodsStore
interface Item {
  name: string
  price: number
  quantity: number
}
const props = defineProps({ item: Object })
const item = ref(props.item)
onMounted(() => {
  console.log('item', props.item)
})
const removeItem = () => {
  removeGoods(item as any)
}
</script>
<style lang="scss" scoped>
.cart-container {
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
  background: #444444;
  padding: 20px;
  .name {
    width: 200px;
  }
  .price {
    width: 100px;
  }
  .quantity {
    width: 160px;
  }
}
</style>
