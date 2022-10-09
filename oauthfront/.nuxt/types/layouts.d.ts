import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/sungjunahn/Documents/laravel9nuxt3/develop/oauthfront/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}