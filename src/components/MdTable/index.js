import material from 'vue-material/material'
import MdTable from './MdTable'
import MdTableCell from './MdTableCell'

export default Vue => {
  material(Vue)
  Vue.component(MdTable.name, MdTable)
  Vue.component(MdTableCell.name, MdTableCell)
}
