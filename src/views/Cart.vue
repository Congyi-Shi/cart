<template lang="">
  <div class="cart-container" v-if="items && items.length">
    <ItemCard class="item" v-for="item in items" :key="item.name" :item="item" />
  </div>
  <div class="empty-cart" v-else>
    <div>Cart is empty</div>
    <el-button
      v-on="{
        click: addItems
      }"
      >Go to Add Page</el-button
    >
  </div>
</template>
<script lang="ts" setup>
import { useGoodsStore } from '../stores/goods'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
const goodsStore = useGoodsStore()
const router = useRouter()
const { totalItems, totalPrices, totalItemsQuantity } = goodsStore
const items = totalItems

onMounted(() => {
  console.log('totalItems', totalItems)
})
const addItems = () => {
  router.push('/home')
}
</script>
<style lang="scss" scoped></style>
