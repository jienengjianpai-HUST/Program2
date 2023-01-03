"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toPagexiangqing() {
      common_vendor.index.navigateTo({
        url: "/pages/index/xiangqing/xiangqing"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_search_bar2 + _easycom_uni_card2)();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      placeholder: "\u641C\u7D22...",
      bgColor: "#EEEEEE"
    }),
    b: common_vendor.o($options.toPagexiangqing),
    c: common_vendor.o($options.toPagexiangqing),
    d: common_vendor.o($options.toPagexiangqing),
    e: common_vendor.o($options.toPagexiangqing)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp/app1/pages/index/baoming/baoming.vue"]]);
wx.createPage(MiniProgramPage);
