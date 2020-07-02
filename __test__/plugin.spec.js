import {mount, createLocalVue} from '@vue/test-utils'
import Plugin from '../src/index';

describe('Toast plugin', () => {

  // Make a copy of local vue
  let localVue = createLocalVue();
  // Define the global component
  localVue.use(Plugin);

  test('has instance registered', () => {
    expect(localVue.$toast).toBeDefined()
  });

  test('has open method on instance', () => {
    expect(localVue.$toast.open).toBeDefined()
  });

  test('has close method on instance returned by open()',async () => {
    let toast = localVue.$toast.open('<b>Sample</b>');
    await toast.$nextTick();

    expect(toast.$el).toMatchSnapshot();
    expect(toast.close).toBeDefined();
    toast.close();
  });

});
