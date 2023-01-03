"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toKuaidihelarge() {
      common_vendor.index.navigateTo({
        url: "/pages/record/trash/kuaidihe-large/kuaidihe-large"
      });
    },
    toKuaizi() {
      common_vendor.index.navigateTo({
        url: "/pages/record/trash/kuaizi/kuaizi"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      placeholder: "\u8BF7\u8F93\u5165\u4E2A\u6570"
    }),
    b: common_vendor.o((...args) => $options.toKuaizi && $options.toKuaizi(...args)),
    c: common_vendor.o((...args) => $options.toKuaidihelarge && $options.toKuaidihelarge(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp/app1/pages/record/trash/waimaihe/waimaihe.vue"]]);
wx.createPage(MiniProgramPage);
