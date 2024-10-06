import { defineStore } from 'pinia'
export const useSelectStore = defineStore('select', {
    state: () => ({
        listOneValue: null, // 列表一的值
        listTwoValue: null, // 列表二的值
    }),
    actions: {
        async loadTest() {

            try {
                // 使用 $fetch 发送请求
                const data = await useFetch('/api/test')

                // 输出 data 的结构
                console.log('返回的 data:', data.data.value.data)

                // 检查是否有返回数据
                if (data) {
                    console.log('成功获取数据:', data)
                    this.testData = data  // 假设 API 返回的 JSON 中有 message 字段
                } else {
                    console.warn('获取的 data 为 null')
                }
            } catch (error) {
                console.error('请求测试 API 时发生错误:', error)
            }
        }
    }

})
