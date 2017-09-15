import init from 'vue-material/material'
import MdCircular from './MdCircular'

export default Vue => {
  init(Vue)
  Vue.component(MdCircular.name, MdCircular)
}
