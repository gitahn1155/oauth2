import { v as vue_cjs_prod, _ as __nuxt_component_0$1, a as __nuxt_component_0$2 } from '../server.mjs';
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
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_Nuxt_link = __nuxt_component_0$2;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "admin" }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center min-h-screen bg-white" style="${serverRenderer.exports.ssrRenderStyle({ "padding-top": "40px" })}"${_scopeId}><div class="flex flex-col"${_scopeId}><div class="flex flex-col items-center"${_scopeId}><div class="text-indigo-500 font-bold text-5xl"${_scopeId}> 404 </div><div class="font-bold text-3xl xl:text-4xl lg:text-4xl md:text-3xl mt-10"${_scopeId}> \uD398\uC774\uC9C0\uB97C \uCC3E\uC77C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 </div><div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8"${_scopeId}> \uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uAC70\uB098, \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4. <br${_scopeId}>\uC785\uB825\uD558\uC2E0 \uC8FC\uC18C\uAC00 \uC815\uD655\uD55C\uC9C0 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. </div></div><div class="flex flex-col items-center"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_Nuxt_link, {
              class: "mt-10 text-2xl",
              to: "/"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\uD648\uC73C\uB85C \uAC00\uAE30`);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode("\uD648\uC73C\uB85C \uAC00\uAE30")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                class: "flex items-center justify-center min-h-screen bg-white",
                style: { "padding-top": "40px" }
              }, [
                vue_cjs_prod.createVNode("div", { class: "flex flex-col" }, [
                  vue_cjs_prod.createVNode("div", { class: "flex flex-col items-center" }, [
                    vue_cjs_prod.createVNode("div", { class: "text-indigo-500 font-bold text-5xl" }, " 404 "),
                    vue_cjs_prod.createVNode("div", { class: "font-bold text-3xl xl:text-4xl lg:text-4xl md:text-3xl mt-10" }, " \uD398\uC774\uC9C0\uB97C \uCC3E\uC77C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 "),
                    vue_cjs_prod.createVNode("div", { class: "text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8" }, [
                      vue_cjs_prod.createTextVNode(" \uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uAC70\uB098, \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4. "),
                      vue_cjs_prod.createVNode("br"),
                      vue_cjs_prod.createTextVNode("\uC785\uB825\uD558\uC2E0 \uC8FC\uC18C\uAC00 \uC815\uD655\uD55C\uC9C0 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. ")
                    ])
                  ]),
                  vue_cjs_prod.createVNode("div", { class: "flex flex-col items-center" }, [
                    vue_cjs_prod.createVNode(_component_Nuxt_link, {
                      class: "mt-10 text-2xl",
                      to: "/"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode("\uD648\uC73C\uB85C \uAC00\uAE30")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=404.4a25841b.mjs.map
