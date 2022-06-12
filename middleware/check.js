/** 
 * ページが表示される前に実行されます
 * ログイン認証とかに使える
 */

export default function (context) {
  console.log('middlewareのチェックです')
  console.log('middeleware:', context.route)
}