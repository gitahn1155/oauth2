import { b as _export_sfc, v as vue_cjs_prod, c as __nuxt_component_0 } from '../server.mjs';
import { s as serverRenderer } from '../../handlers/renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'defu';
import 'dayjs';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'node:url';
import 'ipx';
import 'stream';

const _sfc_main = {
  data() {
    return {
      form: {
        user_id: null,
        password: null
      }
    };
  },
  methods: {
    login() {
      const config = { headers: { "content-type": "multipart/form-data" } };
      let formData = new FormData();
      formData.append("user_id", this.form.user_id);
      formData.append("password", this.form.password);
      axios.post(`http://127.0.0.1:8000/api/auth/login`, formData, config).then((res) => {
        this.$router.push({ path: "/myprofile" });
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="container"><section class="max-w-md text-center"><form><p class="mt-20">\uB85C\uADF8\uC778\uD558\uAE30</p><div class="mb-4"><input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="\uC5F0\uB77D\uCC98 11\uC790\uB9AC"${serverRenderer.exports.ssrRenderAttr("value", $data.form.user_id)}></div><div class="mb-4"><input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="\uC0DD\uB144\uC6D4\uC77C"${serverRenderer.exports.ssrRenderAttr("value", $data.form.password)}></div><div class="text-center pt-1 mb-12 pb-1"><button class="inline-block px-6 py-2.5 w-full mb-3" type="button"> \uB85C\uADF8\uC778 </button><a class="text-gray-500" href="#!">\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?</a></div></form></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login.036ab475.mjs.map
