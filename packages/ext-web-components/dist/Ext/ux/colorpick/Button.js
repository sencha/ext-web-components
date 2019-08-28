import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../../../Ext/Component';

var Ext_ux_colorpick_Button_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_ux_colorpick_Button_Component, _Ext_Component_Compon);

  //configs
  Ext_ux_colorpick_Button_Component.XTYPE = function XTYPE() {
    return 'colorbutton';
  };

  Ext_ux_colorpick_Button_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "popup": ["object"]
    };
  };

  Ext_ux_colorpick_Button_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,color,previousColor'
    }];
  };

  Ext_ux_colorpick_Button_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_ux_colorpick_Button_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_ux_colorpick_Button_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_ux_colorpick_Button_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_colorpick_Button_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this, Ext_ux_colorpick_Button_Component.METHODS(), Ext_ux_colorpick_Button_Component.XTYPE(), Ext_ux_colorpick_Button_Component.PROPERTIESOBJECT(), Ext_ux_colorpick_Button_Component.EVENTS()) || this;
    _this.XTYPE = Ext_ux_colorpick_Button_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_ux_colorpick_Button_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_ux_colorpick_Button_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_ux_colorpick_Button_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_ux_colorpick_Button_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_colorpick_Button_Component;
}(Ext_Component_Component);

export { Ext_ux_colorpick_Button_Component as default };