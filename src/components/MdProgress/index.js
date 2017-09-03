import init from 'vue-material/material'
import MdProgress from './MdProgress'

export default Vue => {
  init(Vue)
  Vue.component(MdProgress.name, MdProgress)
}
