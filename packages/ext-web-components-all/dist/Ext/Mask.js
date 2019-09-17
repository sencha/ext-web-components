import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../Ext/Component';

var Ext_Mask_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_Mask_Component, _Ext_Component_Compon);

  //configs
  Ext_Mask_Component.XTYPE = function XTYPE() {
    return 'mask';
  };

  Ext_Mask_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "bottom": ["any"],
      "left": ["any"],
      "right": ["any"],
      "top": ["any"],
      "transparent": ["boolean"]
    };
  };

  Ext_Mask_Component.EVENTS = function EVENTS() {
    return [{
      name: 'tap',
      parameters: 'undefined,e'
    }];
  };

  Ext_Mask_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_Mask_Component, [{
    key: "ontap",
    //events
    get: function get() {
      return this.getAttribute('ontap');
    },
    set: function set(ontap) {
      this.setAttribute('ontap', ontap);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_Mask_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Mask_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Mask_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this) || this;
    _this.XTYPE = Ext_Mask_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Mask_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_Mask_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_Mask_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Mask_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Mask_Component;
}(Ext_Component_Component);

export { Ext_Mask_Component as default };