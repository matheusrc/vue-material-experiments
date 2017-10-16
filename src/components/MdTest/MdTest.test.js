import mountTemplate from 'test/utils/mountTemplate'
import MdTest from './MdTest.vue'

test('should render the test', async () => {
  const template = '<md-test>Lorem ipsum</md-test>'
  const wrapper = await mountTemplate(MdTest, template)

  expect(wrapper.hasClass('md-test')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-test md-theme="alt">Lorem ipsum</md-test>'
  const wrapper = await mountTemplate(MdTest, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})