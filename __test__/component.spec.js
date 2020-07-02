import {mount} from '@vue/test-utils';
import Component from '../src/js/Component';

describe('Toast component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: {
        message: 'Test message'
      }
    });
  });

  test('renders when active', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  });

});
