import { shallow } from '@vue/test-utils'
import Form from '@/components/Form'
import expect from 'expect'

describe('Form.vue', () => {
  let wrapper
  const githubInputSelector = 'form input[type="text"][name="github_url"]'
  const uniqueIdInputSelector = 'form input[type="text"][name="unique_id"]'
  beforeEach(() => {
    wrapper = shallow(Form)
  })

  it('renders form component', () => {
    expect(wrapper.find('h1').text()).toEqual('Form')
    expect(wrapper.find('form').exists()).toBeTruthy()
  })

  it('has a github URL field', () => {
    expect(wrapper.find('form input[type="text"][name="github_url"]').exists()).toBeTruthy()
  })

  it('has a uniqueID field', () => {
    expect(wrapper.find('form input[type="text"][name="unique_id"]').exists()).toBeTruthy()
  })

  it('prefills unique ID from github URL', () => {
    let githubURL = wrapper.find(githubInputSelector)
    githubURL.element.value = 'https://github.com/odavid87/vue-js-hello-world/'

    githubURL.trigger('input')

    expect(wrapper.find(uniqueIdInputSelector).element.value).toEqual('vue-js-hello-world')
  })

  it('lets me change unique ID value', () => {
    wrapper.setData({
      githubURL: 'https://github.com/odavid87/vue-js-hello-world/'
    })
    let uniqueID = wrapper.find(uniqueIdInputSelector)
    uniqueID.element.value = 'testing'
    uniqueID.trigger('input')

    expect(wrapper.find(uniqueIdInputSelector).element.value).toEqual('testing')
  })
})
