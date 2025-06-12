
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/psn-store/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/psn-store"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 763, hash: 'bd31972c622998fc6ce2a6557def60162bb11c28abe1e0c83a096a8270bf16cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: '790a74e10ba3cb11b38d882395283e47f864dc75880a186fb22f6d5deeb3dd15', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9312, hash: '0ec9b5028303564870b1aee7fa035dfc89867aa1c5d4d71d9e5c5e0f2b48dd9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-E6MZGFMY.css': {size: 136, hash: 'gM54z2MWE9s', text: () => import('./assets-chunks/styles-E6MZGFMY_css.mjs').then(m => m.default)}
  },
};
