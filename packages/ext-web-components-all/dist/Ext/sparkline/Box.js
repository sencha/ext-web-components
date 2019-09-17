import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base_Component from '../../Ext/sparkline/Base';

var Ext_sparkline_Box_Component =
/*#__PURE__*/
function (_Ext_sparkline_Base_C) {
  _inheritsLoose(Ext_sparkline_Box_Component, _Ext_sparkline_Base_C);

  //events
  //configs
  Ext_sparkline_Box_Component.XTYPE = function XTYPE() {
    return 'sparklinebox';
  };

  Ext_sparkline_Box_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "boxFillColor": ["string"],
      "boxLineColor": ["string"],
      "chartRangeMax": ["number"],
      "chartRangeMin": ["number"],
      "medianColor": ["string"],
      "outlierFillColor": ["string"],
      "outlierIQR": ["number"],
      "outlierLineColor": ["string"],
      "raw": ["boolean"],
      "showOutliers": ["boolean"],
      "spotRadius": ["number"],
      "target": ["number"],
      "targetColor": ["string"],
      "whiskerColor": ["string"]
    };
  };

  Ext_sparkline_Box_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_sparkline_Box_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_sparkline_Box_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_sparkline_Base_C.observedAttributes;

      for (var property in Ext_sparkline_Box_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_sparkline_Box_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_Box_Component() {
    var _this;

    _this = _Ext_sparkline_Base_C.call(this) || this;
    _this.XTYPE = Ext_sparkline_Box_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_sparkline_Box_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_sparkline_Box_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_sparkline_Box_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_sparkline_Box_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_sparkline_Base_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_sparkline_Base_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_Box_Component;
}(Ext_sparkline_Base_Component);

export { Ext_sparkline_Box_Component as default };