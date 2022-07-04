import { flushPromises, shallowMount } from '@vue/test-utils'
import beforeMount from '@/views/PlayView.vue'

// eslint-disable-next-line no-undef
describe('dynamic Playing', () => {
  // eslint-disable-next-line no-undef
  it('should test backen response', async function () {
    const data = '[{"id":24,"bezeichnung":"run","sprache":"english","uebersetzungSet":[]}]'
    fetch.mockResponseOnce(JSON.stringify(data))

    const wrapper = shallowMount(beforeMount)

    await flushPromises()
    // eslint-disable-next-line no-undef
    expect(wrapper.text()).toContain(data)
  })
})
