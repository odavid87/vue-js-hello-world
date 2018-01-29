import { shallow } from '@vue/test-utils'
import Form from '@/components/Form'
import expect from 'expect'

describe('Form.vue', () => {
  it('renders form component', () => {
    const wrapper = shallow(Form)
    expect(wrapper.find('h1').text()).toEqual('Form')
    expect(wrapper.find('form')).toBeTruthy()
  })
})
