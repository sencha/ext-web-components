import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Button_Component from '../Ext/Button';

var Ext_SplitButton_Component =
/*#__PURE__*/
function (_Ext_Button_Component) {
  _inheritsLoose(Ext_SplitButton_Component, _Ext_Button_Component);

  //configs
  Ext_SplitButton_Component.XTYPE = function XTYPE() {
    return 'splitbutton';
  };

  Ext_SplitButton_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "arrowHandler": ["function"]
    };
  };

  Ext_SplitButton_Component.EVENTS = function EVENTS() {
    return [{
      name: 'arrowclick',
      parameters: 'undefined,e'
    }];
  };

  Ext_SplitButton_Component.METHODS = function METHODS() {
    return [{
      name: 'doTap',
      "function": function _function(me, e) {
        return this.ext.doTap(me, e);
      }
    }];
  };

  _createClass(Ext_SplitButton_Component, [{
    key: "onarrowclick",
    //events
    get: function get() {
      return this.getAttribute('onarrowclick');
    },
    set: function set(onarrowclick) {
      this.setAttribute('onarrowclick', onarrowclick);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Button_Component.observedAttributes;

      for (var property in Ext_SplitButton_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_SplitButton_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_SplitButton_Component(propertiesobject, methods, events) {
    return _Ext_Button_Component.call(this, Object.assign(propertiesobject, Ext_SplitButton_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_SplitButton_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_SplitButton_Component.METHODS()), events.concat(Ext_SplitButton_Component.EVENTS())) || this; //this.XTYPE = Ext_SplitButton_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_SplitButton_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_SplitButton_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_SplitButton_Component.EVENTS());
  }

  var _proto = Ext_SplitButton_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Button_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Button_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_SplitButton_Component;
}(Ext_Button_Component);

export { Ext_SplitButton_Component as default };