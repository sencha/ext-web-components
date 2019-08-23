import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../Ext/Component';

var Ext_Label_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_Label_Component, _Ext_Component_Compon);

  //events
  //configs
  Ext_Label_Component.XTYPE = function XTYPE() {
    return 'label';
  };

  Ext_Label_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "html": ["string"]
    };
  };

  Ext_Label_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Label_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_Label_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_Label_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Label_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Label_Component() {
    var _this;

    _this = _Ext_Component_Compon.call(this, Ext_Label_Component.METHODS(), Ext_Label_Component.XTYPE(), Ext_Label_Component.PROPERTIESOBJECT(), Ext_Label_Component.EVENTS()) || this;
    _this.XTYPE = Ext_Label_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_Label_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_Label_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_Label_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_Label_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Label_Component;
}(Ext_Component_Component);

export { Ext_Label_Component as default };