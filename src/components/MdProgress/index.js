import init from 'vue-material/material'
import MdProgress from './MdProgress'
import MdCircular from './MdCircular'

export default Vue => {
  init(Vue)
  Vue.use(MdCircular)
  Vue.component(MdProgress.name, MdProgress)
}
