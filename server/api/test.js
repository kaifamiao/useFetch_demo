// server/api/getListTwo.js
import { getDBConnection } from '../utils/db'

export default defineEventHandler(async () => {
    const db = await getDBConnection()

    // 查询数据库中的值
    const row = await db.get('SELECT list_two_value FROM select_states WHERE id = ?', [1])
    console.log('数据库查询结果:', row) // 输出查询结果

    if (row && row.list_two_value) {
        // 正确返回数据时，将其包装为 JSON 对象
        const result = { data: row.list_two_value }
        console.log('返回的 JSON:', result) // 输出返回值
        return result
    } else {
        // 如果查询没有结果，返回带有错误的信息
        console.log('未找到有效数据')
        return { data: null, error: 'No state found' }
    }
})
