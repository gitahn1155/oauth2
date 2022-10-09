import { v as vue_cjs_prod, c as __nuxt_component_0 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "@vue/server-renderer";
import axios from "axios";
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
import "dayjs";
import "vue-sweetalert2";
const _sfc_main = {
  __name: "myprofile",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = { headers: { "content-type": "multipart/form-data" } };
    const res = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => axios.get(`http://127.0.0.1:8000/api/auth/user-profile`, config)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="container">${ssrInterpolate(vue_cjs_prod.unref(res).user)} \uB0B4 \uD504\uB85C\uD544\uC5D0 \uC624\uC2E0\uAC78 \uD658\uC601\uD569\uB2C8\uB2E4 </div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myprofile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
