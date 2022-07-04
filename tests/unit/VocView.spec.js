import { mount } from '@vue/test-utils'
import VocView from '@/views/VocView'

describe('testing VocView.vue', () => {
  it('should test vocView', () => {
    const wrapper = mount(VocView)

    expect(wrapper.text()).toContain('German')
  })
})
