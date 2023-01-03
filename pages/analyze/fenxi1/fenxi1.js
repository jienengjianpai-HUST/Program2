"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toPageAnalyze() {
      common_vendor.index.switchTab({
        url: "/pages/analyze/analyze"
      });
    },
    toPagefenxi2() {
      common_vendor.index.navigateTo({
        url: "/pages/analyze/fenxi2/fenxi2"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toPageAnalyze && $options.toPageAnalyze(...args)),
    b: common_vendor.o((...args) => $options.toPagefenxi2 && $options.toPagefenxi2(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp/app1/pages/analyze/fenxi1/fenxi1.vue"]]);
wx.createPage(MiniProgramPage);
