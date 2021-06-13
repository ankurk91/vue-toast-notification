import {mount} from '@vue/test-utils';
import Component from '../src/js/Component.vue';

describe('Toast component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: {
        message: 'Test message'
      },
      global: {
        stubs: {
          transition: false
        },
      }
    });
  });

  test('renders when active', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$el).toMatchSnapshot()
  });

});
