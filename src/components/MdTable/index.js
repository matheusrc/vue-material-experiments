import material from 'vue-material/material'
import MdTable from './MdTable'
import MdTableRow from './MdTableRow'
import MdTableHead from './MdTableHead'
import MdTableCell from './MdTableCell'

export default Vue => {
  material(Vue)
  Vue.component(MdTable.name, MdTable)
  Vue.component(MdTableRow.name, MdTableRow)
  Vue.component(MdTableHead.name, MdTableHead)
  Vue.component(MdTableCell.name, MdTableCell)
}
