import {createApp} from 'vue'
import Plugin from '../src/index';

describe('Toast plugin', () => {

  test('works as plugin', (done) => {

    const app = createApp({
      render() {
        return null
      },
      async created() {
        let toast = this.$toast.success('test message', {
          duration: 10000,
        });
        await this.$nextTick();

        expect(document.body.querySelectorAll('.v-toast__item').length).toEqual(1);
        toast.dismiss();

        done();
      }
    });

    app.use(Plugin);
    app.mount('body')
  });

});

