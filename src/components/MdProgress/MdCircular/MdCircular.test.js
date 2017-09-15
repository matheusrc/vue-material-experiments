import mountTemplate from 'test/utils/mountTemplate'
import MdCircular from './MdCircular.vue'

test('should render the progress', async () => {
  const template = '<md-circular md-indeterminate></md-circular>'
  const wrapper = await mountTemplate(MdCircular, template)

  expect(wrapper.hasClass('md-circular')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-circular md-indeterminate></md-circular>'
  const wrapper = await mountTemplate(MdCircular, template)

  expect(wrapper.hasClass('md-circular')).toBe(true)
})
