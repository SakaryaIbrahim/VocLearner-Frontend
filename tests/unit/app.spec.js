import { mount } from '@vue/test-utils'
import VocLog from '@/components/VocLog'
import App from '@/App'

describe('test App view', () => {
  it('should test App have VocLgo', () => {
    const wrapper = mount(App)
    const vocLogo = wrapper.findComponent(VocLog)
    expect(vocLogo.exists()).toBeTruthy()
  })
})
