import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../Ext/Component';

var Ext_Title_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_Title_Component, _Ext_Component_Compon);

  //events
  //configs
  Ext_Title_Component.XTYPE = function XTYPE() {
    return 'title';
  };

  Ext_Title_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "title": ["string"]
    };
  };

  Ext_Title_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Title_Component.METHODS = function METHODS() {
    return [{
      name: 'updateTitle',
      "function": function _function(newTitle) {
        return this.ext.updateTitle(newTitle);
      }
    }];
  };

  _createClass(Ext_Title_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_Title_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Title_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Title_Component(propertiesobject, methods, events) {
    return _Ext_Component_Compon.call(this, Object.assign(propertiesobject, Ext_Title_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Title_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Title_Component.METHODS()), events.concat(Ext_Title_Component.EVENTS())) || this; //this.XTYPE = Ext_Title_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Title_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Title_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Title_Component.EVENTS());
  }

  var _proto = Ext_Title_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Title_Component;
}(Ext_Component_Component);

export { Ext_Title_Component as default };