

<template>
<div>
  <h1>hello</h1>
  {{data.data.value}}
</div>
</template>

<script setup lang="ts">
import { useSelectStore } from '@/store/test.js'

const selectStore = useSelectStore()

onMounted(() => {
  // 页面加载时从服务器获取列表二的状态
  selectStore.loadTest()
})
const data = await useFetch('/api/test')

// 输出 data 的结构
console.log('返回的 data:', data)
</script>
