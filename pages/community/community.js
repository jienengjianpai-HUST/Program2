"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toPageJiangli() {
      common_vendor.index.navigateTo({
        url: "/pages/community/jiangli/jiangli"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_icons2 + _easycom_uni_card2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toPageJiangli && $options.toPageJiangli(...args)),
    b: common_vendor.p({
      type: "redo",
      size: "18",
      color: "#999"
    }),
    c: common_vendor.p({
      type: "heart",
      size: "18",
      color: "#999"
    }),
    d: common_vendor.p({
      type: "chatbubble",
      size: "18",
      color: "#999"
    }),
    e: common_vendor.p({
      type: "redo",
      size: "18",
      color: "#999"
    }),
    f: common_vendor.p({
      type: "heart",
      size: "18",
      color: "#999"
    }),
    g: common_vendor.p({
      type: "chatbubble",
      size: "18",
      color: "#999"
    }),
    h: common_vendor.p({
      type: "redo",
      size: "18",
      color: "#999"
    }),
    i: common_vendor.p({
      type: "heart",
      size: "18",
      color: "#999"
    }),
    j: common_vendor.p({
      type: "chatbubble",
      size: "18",
      color: "#999"
    }),
    k: common_vendor.p({
      type: "redo",
      size: "18",
      color: "#999"
    }),
    l: common_vendor.p({
      type: "heart",
      size: "18",
      color: "#999"
    }),
    m: common_vendor.p({
      type: "chatbubble",
      size: "18",
      color: "#999"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp/app1/pages/community/community.vue"]]);
wx.createPage(MiniProgramPage);
