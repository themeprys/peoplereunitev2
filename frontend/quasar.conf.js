/*
* This file runs in a Node context (it's NOT transpiled by Babel), so use only
* the ES6 features that are supported by your Node version. https://node.green/
*/

// Configuration for your app
// https://v1.quasar.dev/quasar-cli/quasar-conf-js

module.exports = function ( ctx ) {
return {

        bin: {
        linuxAndroidStudio: "/snap/android-studio/current/android-studio/bin/studio.sh"
  },
  
  // https://v1.quasar.dev/quasar-cli/supporting-ts
  supportTS: false,

  // https://v1.quasar.dev/quasar-cli/prefetch-feature
  preFetch: true,

  // app boot file (/src/boot)
  // --> boot files are part of "main.js"
  // https://v1.quasar.dev/quasar-cli/boot-files
  boot: [
    'addressbar-color',
    'axios',
    'vue-social-sharing',
    {
      server: false,
      path: 'gtm',
    },
    {
      server: false,
      path: 'vue-google-adsense'
    }
    ],

  // https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
  css: [
    'app.scss'
  ],

  // https://github.com/quasarframework/quasar/tree/dev/extras
  extras: [
    // 'ionicons-v4',
    // 'mdi-v5',
    'fontawesome-v5',
    // 'eva-icons',
    // 'themify',
    // 'line-awesome',
    // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

    'roboto-font', // optional, you are not bound to it
    'material-icons', // optional, you are not bound to it
  ],

  // Full list of options: https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
  build: {
    vueRouterMode: 'history', // available values: 'hash', 'history'

    // transpile: false,

    // Add dependencies for transpiling with Babel (Array of string/regex)
    // (from node_modules, which are by default not transpiled).
    // Applies only if "transpile" is set to true.
    // transpileDependencies: [],

    // rtl: false, // https://v1.quasar.dev/options/rtl-support
    // preloadChunks: true,
    // showProgress: false,
    // gzip: true,
    // analyze: true,

    // Options below are automatically set depending on the env, set them if you want to override
    // extractCSS: false,

    // https://v1.quasar.dev/quasar-cli/handling-webpack
    // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
    // chainWebpack (/* chain */) {
    //   //
    // },

    chainWebpack (chain, { isServer, isClient }) {
        chain.module.rule('vue')
          .use('vue-loader')
          .loader('vue-loader')
          .tap(options => {
            options.transpileOptions = {
              transforms: {
                dangerousTaggedTemplateString: true
              }
            }
            return options
          })
        chain.module.rule('gql')
          .test(/\.(graphql|gql)$/)
          .use('graphql-tag/loader')
          .loader('graphql-tag/loader')
    }
      
  },

  // Full list of options: https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
  devServer: {
    https: false,
    port: 8080,
    open: false // opens browser window automatically
  },

  // https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
  framework: {
    iconSet: 'material-icons', // Quasar icon set
    lang: 'en-us', // Quasar language pack
    config: {
      dark: 'false' // or Boolean true/false
    },

    // Possible values for "importStrategy":
    // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
    // * 'all'  - Manually specify what to import
    importStrategy: 'auto',

    // For special cases outside of where "auto" importStrategy can have an impact
    // (like functional components as one of the examples),
    // you can manually specify Quasar components/directives to be available everywhere:
    //
    // components: [],
    // directives: [],

    // Quasar plugins
    plugins: [
      'AddressbarColor',
      'Meta',
      'LocalStorage',
      'SessionStorage',
      'LoadingBar',
    ],

    config: {
      loadingBar: {
        color: 'red',
  size: '2px',
  position: 'top'
        /* look at QuasarConfOptions from the API card */
      }
    }    

  },

  // animations: 'all', // --- includes all animations
  // https://v1.quasar.dev/options/animations
  animations: [],

  // https://v1.quasar.dev/quasar-cli/developing-ssr/configuring-ssr
  ssr: {
    pwa: true
  },

  // https://v1.quasar.dev/quasar-cli/developing-pwa/configuring-pwa
  pwa: {
    workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }, // only for GenerateSW
    manifest: {
      name: `People Reunite`,
      short_name: `PeopleReunite`,
      description: `People Reunite Web App`,
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#ffffff',
      theme_color: '#1D1D1D',
      icons: [
        {
          src: 'icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: 'icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icons/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png'
        },
        {
          src: 'icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: 'icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },

  // Full list of options: https://v1.quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
  cordova: {
    // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
  },

  // Full list of options: https://v1.quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
  capacitor: {
    hideSplashscreen: true
  },

  // Full list of options: https://v1.quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
  electron: {
    bundler: 'packager', // 'packager' or 'builder'

    packager: {
      // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

      // OS X / Mac App Store
      // appBundleId: '',
      // appCategoryType: '',
      // osxSign: '',
      // protocol: 'myapp://path',

      // Windows only
      // win32metadata: { ... }
    },

    builder: {
      // https://www.electron.build/configuration/configuration

      appId: 'peoplereunite'
    },

    // More info: https://v1.quasar.dev/quasar-cli/developing-electron-apps/node-integration
    nodeIntegration: true,

    extendWebpack (/* cfg */) {
      // do something with Electron main process Webpack cfg
      // chainWebpack also available besides this extendWebpack
    }
  }
}
}
