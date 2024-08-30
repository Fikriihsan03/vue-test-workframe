/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_VUE_APP_TITLE:string
    readonly VITE_VUE_APP_BASE_API: string
    // tambahkan variabel lain yang Anda gunakan di sini...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }