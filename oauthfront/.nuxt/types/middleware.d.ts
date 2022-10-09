import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/sungjunahn/Documents/laravel9nuxt3/develop/oauthfront/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}