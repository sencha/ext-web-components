import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Sheet_Component from '../Ext/Sheet';

var Ext_ActionSheet_Component =
/*#__PURE__*/
function (_Ext_Sheet_Component) {
  _inheritsLoose(Ext_ActionSheet_Component, _Ext_Sheet_Component);

  //events
  //configs
  Ext_ActionSheet_Component.XTYPE = function XTYPE() {
    return 'actionsheet';
  };

  Ext_ActionSheet_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_ActionSheet_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_ActionSheet_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_ActionSheet_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Sheet_Component.observedAttributes;

      for (var property in Ext_ActionSheet_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_ActionSheet_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ActionSheet_Component() {
    var _this;

    _this = _Ext_Sheet_Component.call(this, Ext_ActionSheet_Component.METHODS(), Ext_ActionSheet_Component.XTYPE(), Ext_ActionSheet_Component.PROPERTIESOBJECT(), Ext_ActionSheet_Component.EVENTS()) || this;
    _this.XTYPE = Ext_ActionSheet_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_ActionSheet_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_ActionSheet_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_ActionSheet_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_ActionSheet_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Sheet_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Sheet_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ActionSheet_Component;
}(Ext_Sheet_Component);

export { Ext_ActionSheet_Component as default };