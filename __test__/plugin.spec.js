import {createApp} from 'vue'
import Plugin from '../src/index';
import CustomToast from '../examples/CustomToast.vue';

describe('Toast plugin', () => {
  let app = null;

  test('with default component', async () => {
    app = createApp({
      render() {
        return null
      },
      async created() {
        const toast = this.$toast.success('test message', {
          duration: 10000,
        });
        await this.$nextTick();
      }
    });
    app.use(Plugin);
    app.mount('body');
    expect(document.body.querySelectorAll('.v-toast__item').length).toEqual(1);
  })

  test('with custom component', () => {
    app = createApp({
      render() {
        return null
      },
      async created() {
        this.$toast.success({
          duration: 10000,
          customToast: {
            component: CustomToast,
            props: {
              title: 'Custom title',
              description: 'Custom description'
            }
          }
        });
        await this.$nextTick();
      }
    });
    app.use(Plugin);
    app.mount('body');
    expect(document.body.querySelectorAll('.custom-toast-example').length).toEqual(1);
  })

  afterEach(() => {
    app?.unmount()
  })
});

