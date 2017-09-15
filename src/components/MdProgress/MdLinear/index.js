import init from 'vue-material/material'
import MdLinear from './MdLinear'

export default Vue => {
  init(Vue)
  Vue.component(MdLinear.name, MdLinear)
}
