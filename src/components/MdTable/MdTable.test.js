import mountTemplate from 'test/utils/mountTemplate'
import MdTable from './MdTable.vue'

test('should render the table', async () => {
  const template = '<md-table>Lorem ipsum</md-table>'
  const wrapper = await mountTemplate(MdTable, template)

  expect(wrapper.hasClass('md-table')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-table md-theme="alt">Lorem ipsum</md-table>'
  const wrapper = await mountTemplate(MdTable, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
