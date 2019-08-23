import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base_Component from '../../Ext/sparkline/Base';

var Ext_sparkline_Bullet_Component =
/*#__PURE__*/
function (_Ext_sparkline_Base_C) {
  _inheritsLoose(Ext_sparkline_Bullet_Component, _Ext_sparkline_Base_C);

  //events
  //configs
  Ext_sparkline_Bullet_Component.XTYPE = function XTYPE() {
    return 'sparklinebullet';
  };

  Ext_sparkline_Bullet_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "base": ["number"],
      "performanceColor": ["string"],
      "rangeColors": ["string[]"],
      "targetColor": ["string"],
      "targetWidth": ["number"]
    };
  };

  Ext_sparkline_Bullet_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_sparkline_Bullet_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_sparkline_Bullet_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_sparkline_Base_C.observedAttributes;

      for (var property in Ext_sparkline_Bullet_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_sparkline_Bullet_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_Bullet_Component() {
    var _this;

    _this = _Ext_sparkline_Base_C.call(this, Ext_sparkline_Bullet_Component.METHODS(), Ext_sparkline_Bullet_Component.XTYPE(), Ext_sparkline_Bullet_Component.PROPERTIESOBJECT(), Ext_sparkline_Bullet_Component.EVENTS()) || this;
    _this.XTYPE = Ext_sparkline_Bullet_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_sparkline_Bullet_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_sparkline_Bullet_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_sparkline_Bullet_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_sparkline_Bullet_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_sparkline_Base_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_sparkline_Base_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_Bullet_Component;
}(Ext_sparkline_Base_Component);

export { Ext_sparkline_Bullet_Component as default };