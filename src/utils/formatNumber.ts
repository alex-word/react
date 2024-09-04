// 数字格式化
export function formatNumber(num) {
  return Number(num).toLocaleString()
}
export function formatToWan(number) {
  if (typeof number == 'number') {
    if (number < 10000) return number.toString(); // 小于1万的数字不做转换
    return (number / 10000).toFixed(2) + '万'; // 转换为万单位，保留两位小数
  }
  return number
}
const formatNumberZh = new Intl.NumberFormat('zh', { notation: 'compact' });
export const formatNumberZhCh = (num) => Number(num)? formatNumberZh.format(num) : num