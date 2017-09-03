import mountTemplate from 'test/utils/mountTemplate'
import MdProgress from './MdProgress.vue'

test('should render the progress', async () => {
  const template = '<md-progress md-indeterminate></md-progress>'
  const wrapper = await mountTemplate(MdProgress, template)

  expect(wrapper.hasClass('md-progress')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-progress md-indeterminate></md-progress>'
  const wrapper = await mountTemplate(MdProgress, template)

  expect(wrapper.hasClass('md-progress')).toBe(true)
})
