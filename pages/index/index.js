"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    navigateToNewPage1() {
      common_vendor.index.navigateTo({
        url: "/pages/index/shenbao/shenbao"
      });
    },
    navigateToNewPage2() {
      common_vendor.index.navigateTo({
        url: "/pages/index/baoming/baoming"
      });
    },
    navigateToNewPage3() {
      common_vendor.index.navigateTo({
        url: "/pages/index/wodexiangmu/wodexiangmu"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      placeholder: "\u641C\u7D22...",
      bgColor: "#EEEEEE"
    }),
    b: common_vendor.o((...args) => $options.navigateToNewPage1 && $options.navigateToNewPage1(...args)),
    c: common_vendor.o((...args) => $options.navigateToNewPage2 && $options.navigateToNewPage2(...args)),
    d: common_vendor.o((...args) => $options.navigateToNewPage3 && $options.navigateToNewPage3(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp/app1/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
