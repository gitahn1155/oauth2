import { b as _export_sfc, v as vue_cjs_prod, c as __nuxt_component_0 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "@vue/server-renderer";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "h3";
import "defu";
import "axios";
import "dayjs";
import "vue-sweetalert2";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="container"><section class="max-w-md text-center"><form><p class="mt-20">\uBE44\uBC88\uCC3E\uAE30</p><div class="mb-4"><input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="\uC5F0\uB77D\uCC98 11\uC790\uB9AC"></div><div class="mb-4"><input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="\uC0DD\uB144\uC6D4\uC77C"></div><div class="text-center pt-1 mb-12 pb-1"><button class="inline-block px-6 py-2.5 w-full mb-3" type="button"> \uBE44\uBC88\uCC3E\uAE30 </button></div></form></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lostpassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lostpassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  lostpassword as default
};
