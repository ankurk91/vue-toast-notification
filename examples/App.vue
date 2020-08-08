<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar navbar-light bg-white shadow-sm mb-3">
      <span class="navbar-brand mb-0">Vue.js Toast</span>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/ankurk91/vue-toast-notification"
             target="_blank"> GitHub</a></li>
      </ul>
    </nav>
    <main class="container">
      <div class="row">
        <div class="col-md-8 mb-3">
          <div class="card">
            <form class="card-body" method="post" @submit.prevent="show">

              <div class="form-group">
                <label>Message <code>(required)</code></label>
                <input type="text" required class="form-control" v-model.trim="form.message" name="message"/>
              </div>

              <div class="form-group">
                <label>Type</label>
                <div>
                  <div v-for="item in types" class="custom-control custom-radio custom-control-inline">
                    <input v-model="form.type" :value="item" type="radio" :id="`radio-type-${item}`"
                           class="custom-control-input">
                    <label class="custom-control-label text-capitalize" :for="`radio-type-${item}`">{{ item }}</label>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>Duration <code>({{ form.duration / 1000 }} seconds)</code></label>
                <input type="range" class="custom-range" min="100" max="60000"
                       v-model.number="form.duration">
              </div>

              <div class="form-row">
                <div class="col-md-3">
                  <div class="form-group">
                    <label>Dismissible</label>
                    <div class="custom-control custom-checkbox">
                      <input v-model="form.dismissible" type="checkbox" class="custom-control-input"
                             id="checkbox-dismissible">
                      <label class="custom-control-label" for="checkbox-dismissible">Close on click</label>
                    </div>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="form-group">
                    <label>Queue</label>
                    <div class="custom-control custom-checkbox">
                      <input v-model="form.queue" type="checkbox" class="custom-control-input"
                             id="checkbox-queue">
                      <label class="custom-control-label" for="checkbox-queue">Wait for previous to close before
                        showing new</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>Position</label>
                <div>
                  <div v-for="item in positions" class="custom-control custom-radio custom-control-inline">
                    <input v-model="form.position" :value="item" type="radio" :id="`radio-position-${item}`"
                           class="custom-control-input">
                    <label class="custom-control-label text-capitalize"
                           :for="`radio-position-${item}`">{{ item }}</label>
                  </div>
                </div>
              </div>

              <hr>

              <button type="submit" class="btn btn-primary">Show notification</button>
              <button type="button" class="btn btn-outline-info" @click="showAll">Demo all</button>
              <button type="button" class="btn btn-secondary" @click="clearAll">Hide all</button>

            </form>
          </div>
        </div>

        <aside class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header"> Links</div>
            <div class="card-body">
              <ul>
                <li><a href="https://github.com/ankurk91/vue-toast-notification" target="_blank">GitHub</a></li>
                <li><a href="https://www.npmjs.com/package/vue-toast-notification" target="_blank">npm</a></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

    </main>
    <footer class="text-center text-muted small mb-3">
      Created by <a href="https://twitter.com/ankurk91" target="_blank" rel="noopener">@ankurk91</a>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import Plugin, {Positions} from '../src/index';
//import '../src/themes/default/index.scss'
import '../src/themes/sugar/index.scss'

Vue.use(Plugin);

export default {
  name: 'app',
  data() {
    return {
      form: {
        message: 'This is a sample message',
        type: 'success',
        duration: 10000,
        dismissible: true,
        queue: false,
        position: 'bottom-right',
        onClick: this.onClick,
        onClose: this.onClose,
      },
      types: [
        'success',
        'error',
        'warning',
        'info',
        'default',
      ],
      positions: Positions
    }
  },
  components: {},
  mounted() {
    // Lets show some toasts on page load
    this.showAll();
  },
  methods: {
    showAll() {
      this.types.forEach((type) => {
        this.$toast.open({
          message: 'Yet another toast notification!',
          duration: this.form.duration,
          type
        })
      })
    },
    onClick() {
      console.log("User dismissed the notification.")
    },
    onClose() {
      console.log("Toast was closed.")
    },
    show() {
      this.$toast.open(this.form);
    },
    clearAll() {
      this.$toast.clear()
    }
  }
}
</script>

