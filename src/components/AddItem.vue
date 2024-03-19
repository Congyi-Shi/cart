<template>
  <el-form class="form-container" :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="item name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="item price">
      <el-input v-model="form.price" type="number"></el-input>
    </el-form-item>
    <el-form-item label="item count">
      <el-input v-model="form.quantity" type="number"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Add to Cart</el-button>
      <el-button type="primary" @click="onReset">Reset Item</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useGoodsStore } from '../stores/goods'
const goodsStore = useGoodsStore()
const { addNewGoods, updateGoods } = goodsStore
const form = reactive({
  name: '',
  price: 0,
  quantity: 0
})

const onSubmit = () => {
  const { name, price, quantity } = form
  updateGoods(Object.assign({}, { name, price, quantity }))
}

const onReset = () => {
  form.name = ''
  form.price = 0
  form.quantity = 0
}
</script>
<style lang="scss" scoped>
.form-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background: #999999;
  border-radius: 8px;
  padding: 30px;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
