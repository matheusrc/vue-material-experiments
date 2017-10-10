import material from 'vue-material/material'
import MdTable from './MdTable'
import MdTableCard from './MdTableCard'
import MdTableToolbar from './MdTableToolbar'
import MdTableHeader from './MdTableHeader'
import MdTableRow from './MdTableRow'
import MdTableHead from './MdTableHead'
import MdTableCell from './MdTableCell'

export default Vue => {
  material(Vue)
  Vue.component(MdTable.name, MdTable)
  Vue.component(MdTableCard.name, MdTableCard)
  Vue.component(MdTableToolbar.name, MdTableToolbar)
  Vue.component(MdTableHeader.name, MdTableHeader)
  Vue.component(MdTableRow.name, MdTableRow)
  Vue.component(MdTableHead.name, MdTableHead)
  Vue.component(MdTableCell.name, MdTableCell)
}
