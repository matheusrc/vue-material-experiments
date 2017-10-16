import material from 'vue-material/material'
import MdTest from './MdTest'
import MdTableCell from './MdTableCell'

export default Vue => {
  material(Vue)
  Vue.component(MdTest.name, MdTest)
  Vue.component(MdTableCell.name, MdTableCell)
}
