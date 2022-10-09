import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     axios: {
        baseURL: any,
    },

    app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    ipx: {
        dir: string,

        domains: Array<any>,

        sharp: any,

        alias: any,
    },
  }
  interface PublicRuntimeConfig {
  
  }
}