import { mount } from '@vue/test-utils'
import VocView from '@/views/VocView'

describe('testing VocView.vue', () => {
  it('should test vocView', () => {
    const wrapper = mount(VocView)

    expect(wrapper.text()).toContain('German')
  })

  it('should a button called save in Vocview', () => {
    const wrapper = mount(VocView)

    expect(wrapper.html()).toContain('save')
  })

  it('should a button called delete in Vocview', () => {
    const wrapper = mount(VocView)

    expect(wrapper.html()).toContain('delete')
  })
})
