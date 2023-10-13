import { Store } from '@/store';// path to store file

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store;
  }
}
/* eslint-disable */
// import { Store } from 'vuex'

// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   interface State {
//     count: number
//   }
//   interface ComponentCustomProperties {
//     $store: Store<State>
//   }
//   export default component
// }

// import { Store } from 'vuex'

// declare module '*.vue'; {
//   // declare your own store states
//   import type { DefineComponent } from 'vue';
//   const component: DefineComponent<{}, {}, any>
//   interface State {
//     clientStorage: [],
//     selectedClient: {},
//     newClientNumber: "",
//     modalInfo: {}
//   }

//   // provide typings for `this.$store`
//   interface ComponentCustomProperties {
//     $store: Store<State>
//   }
//   export default component
// }


