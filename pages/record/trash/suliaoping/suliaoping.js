"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toKuaidihesmall() {
      common_vendor.index.navigateTo({
        url: "/pages/record/trash/kuadihe-small/kuadihe-small"
      });
    },
    toKuaidixinfeng() {
      common_vendor.index.navigateTo({
        url: "/pages/record/trash/kuaidixinfeng/kuaidixinfeng"
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
    b: common_vendor.o((...args) => $options.toKuaidihesmall && $options.toKuaidihesmall(...args)),
    c: common_vendor.o((...args) => $options.toKuaidixinfeng && $options.toKuaidixinfeng(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp/app1/pages/record/trash/suliaoping/suliaoping.vue"]]);
wx.createPage(MiniProgramPage);
