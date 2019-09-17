import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_viewport_Default_Component from '../../Ext/viewport/Default';

var Ext_viewport_Android_Component =
/*#__PURE__*/
function (_Ext_viewport_Default) {
  _inheritsLoose(Ext_viewport_Android_Component, _Ext_viewport_Default);

  //events
  //configs
  Ext_viewport_Android_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_viewport_Android_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_viewport_Android_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_viewport_Android_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_viewport_Android_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_viewport_Default.observedAttributes;

      for (var property in Ext_viewport_Android_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_viewport_Android_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_viewport_Android_Component(propertiesobject, methods, events) {
    return _Ext_viewport_Default.call(this, Object.assign(propertiesobject, Ext_viewport_Android_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_viewport_Android_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_viewport_Android_Component.METHODS()), events.concat(Ext_viewport_Android_Component.EVENTS())) || this; //this.XTYPE = Ext_viewport_Android_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_viewport_Android_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_viewport_Android_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_viewport_Android_Component.EVENTS());
  }

  var _proto = Ext_viewport_Android_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_viewport_Default.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_viewport_Default.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_viewport_Android_Component;
}(Ext_viewport_Default_Component);

export { Ext_viewport_Android_Component as default };