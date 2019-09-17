import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../Ext/Component';

var Ext_Chip_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_Chip_Component, _Ext_Component_Compon);

  //events
  //configs
  Ext_Chip_Component.XTYPE = function XTYPE() {
    return 'chip';
  };

  Ext_Chip_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "closable": ["boolean"],
      "closeHandler": ["function", "string"],
      "icon": ["string"],
      "iconCls": ["string"],
      "scope": ["object"],
      "text": ["string"]
    };
  };

  Ext_Chip_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Chip_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_Chip_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_Chip_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Chip_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Chip_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this) || this;
    _this.XTYPE = Ext_Chip_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Chip_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_Chip_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_Chip_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Chip_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Chip_Component;
}(Ext_Component_Component);

export { Ext_Chip_Component as default };