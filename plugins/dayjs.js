import 'dayjs/locale/ja' // node-moduleのインポート
import dayjs from 'dayjs' // 本体のインポート
dayjs.locale('ja')

export default (({app}, inject) => {
  inject('dayjs', string => dayjs(string))
})