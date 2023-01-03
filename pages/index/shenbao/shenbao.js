"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_easyinput2 + _easycom_uni_section2)();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.input),
    b: common_vendor.o(($event) => _ctx.value = $event),
    c: common_vendor.p({
      trim: "all",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: _ctx.value
    }),
    d: common_vendor.p({
      title: "\u7533\u62A5\u4EBA\u59D3\u540D",
      type: "line",
      padding: "1rpx"
    }),
    e: common_vendor.o(_ctx.input),
    f: common_vendor.o(($event) => _ctx.value = $event),
    g: common_vendor.p({
      trim: "all",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: _ctx.value
    }),
    h: common_vendor.p({
      title: "\u7533\u62A5\u4EBA\u5B66\u53F7",
      type: "line",
      padding: "1rpx"
    }),
    i: common_vendor.o(_ctx.input),
    j: common_vendor.o(($event) => _ctx.value = $event),
    k: common_vendor.p({
      trim: "all",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: _ctx.value
    }),
    l: common_vendor.p({
      title: "\u6D3B\u52A8\u540D\u79F0",
      type: "line",
      padding: "1rpx"
    }),
    m: common_vendor.o(_ctx.input),
    n: common_vendor.o(($event) => _ctx.value = $event),
    o: common_vendor.p({
      trim: "all",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: _ctx.value
    }),
    p: common_vendor.p({
      title: "\u6D3B\u52A8\u6240\u9700\u4EBA\u6570",
      type: "line",
      padding: "1rpx"
    }),
    q: common_vendor.o(_ctx.input),
    r: common_vendor.o(($event) => _ctx.value = $event),
    s: common_vendor.p({
      trim: "all",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      type: "textarea",
      modelValue: _ctx.value
    }),
    t: common_vendor.p({
      title: "\u6D3B\u52A8\u5185\u5BB9",
      type: "line",
      padding: "30rpx"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp/app1/pages/index/shenbao/shenbao.vue"]]);
wx.createPage(MiniProgramPage);
