import {mount} from '@vue/test-utils';
import ToastDefault from '../src/js/ToastDefault.vue';

describe('ToastDefault component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ToastDefault, {
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

  test('renders', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$el).toMatchSnapshot()
  });
});
