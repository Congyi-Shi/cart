<template>
  <div class="footer-container">
    <div class="price">total prices is {{ totalPrices }}</div>
    <div class="checkCart">
      <el-button type="success" @click="viewCart">{{
        route.path.includes('cart') ? 'Item' : 'Cart'
      }}</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGoodsStore } from '../stores/goods'
import { useRouter, useRoute } from 'vue-router'
const goodsStore = useGoodsStore()
const { totalPrices, totalItemsQuantity } = storeToRefs(goodsStore)
const router = useRouter()
const route = useRoute()

const viewCart = () => {
  router.push(route.path.includes('cart') ? '/home' : '/cart')
}
</script>

<style lang="scss" scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  color: #333333;
}
</style>
