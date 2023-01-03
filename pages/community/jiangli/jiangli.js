"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toPageTaolun() {
      common_vendor.index.switchTab({
        url: "/pages/community/community"
      });
    },
    toPageMyprize() {
      common_vendor.index.navigateTo({
        url: "/pages/community/jiangli/myprize/myprize"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toPageTaolun && $options.toPageTaolun(...args)),
    b: common_vendor.o((...args) => $options.toPageMyprize && $options.toPageMyprize(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp/app1/pages/community/jiangli/jiangli.vue"]]);
wx.createPage(MiniProgramPage);
