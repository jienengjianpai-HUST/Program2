"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toPagefenxi1() {
      common_vendor.index.navigateTo({
        url: "/pages/analyze/fenxi1/fenxi1",
        animationType: "pop-in",
        animationDuration: 200
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toPagefenxi1 && $options.toPagefenxi1(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp/app1/pages/analyze/analyze.vue"]]);
wx.createPage(MiniProgramPage);
