import x from './module-1'       //得到一个文件从module1 x就是模块1默认导出的那个fn
import y from './module-2'
import '../css/main.scss'

x()
console.log('傻逼webpack')
y()