"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toPagefenxi2() {
      common_vendor.index.navigateTo({
        url: "/pages/analyze/fenxi2/fenxi2"
      });
    },
    toPage_suggestion() {
      common_vendor.index.navigateTo({
        url: "/pages/analyze/suggestion/suggestion"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toPagefenxi2 && $options.toPagefenxi2(...args)),
    b: common_vendor.o((...args) => $options.toPage_suggestion && $options.toPage_suggestion(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp/app1/pages/analyze/fenxi3/fenxi3.vue"]]);
wx.createPage(MiniProgramPage);
