import { shallowMount } from '@vue/test-utils'
import beforeMount from '@/views/PlayView'

require('jest-fetch-mock').enableMocks()

describe('check fetch in PlayView.vue', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('should get the words from the API', () => {
    fetch.mockResponseOnce(JSON.stringify([
      { id: 11, bezeichnung: 'run', sprache: 'english', uebersetzungSet: [] },
      { id: 12, bezeichnung: 'lesen', sprache: 'deutsch', uebersetzungSet: [] }
    ]))
    const wrapper = shallowMount(beforeMount)
    const testValue = 'SubmitCongra! correct answerSorry! Wrong answerPlay again'
    expect(wrapper.text()).toMatch(testValue)
  })
})
