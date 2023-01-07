import Vue from 'vue'
import VueSocialSharing from 'vue-social-sharing'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async (/* { app, router, Vue ... } */) => {
  Vue.use(VueSocialSharing);
}
