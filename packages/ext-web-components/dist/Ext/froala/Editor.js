import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../../Ext/Component';

var Ext_froala_Editor_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_froala_Editor_Component, _Ext_Component_Compon);

  //configs
  Ext_froala_Editor_Component.XTYPE = function XTYPE() {
    return 'froalaeditor';
  };

  Ext_froala_Editor_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_froala_Editor_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,the'
    }, {
      name: 'ready',
      parameters: 'undefined,the'
    }];
  };

  Ext_froala_Editor_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_froala_Editor_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }, {
    key: "onready",
    get: function get() {
      return this.getAttribute('onready');
    },
    set: function set(onready) {
      this.setAttribute('onready', onready);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_froala_Editor_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_froala_Editor_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_froala_Editor_Component(propertiesobject, methods, events) {
    return _Ext_Component_Compon.call(this, Object.assign(propertiesobject, Ext_froala_Editor_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_froala_Editor_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_froala_Editor_Component.METHODS()), events.concat(Ext_froala_Editor_Component.EVENTS())) || this; //this.XTYPE = Ext_froala_Editor_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_froala_Editor_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_froala_Editor_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_froala_Editor_Component.EVENTS());
  }

  var _proto = Ext_froala_Editor_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_froala_Editor_Component;
}(Ext_Component_Component);

export { Ext_froala_Editor_Component as default };