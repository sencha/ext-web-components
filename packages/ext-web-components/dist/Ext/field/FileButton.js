import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Button_Component from '../../Ext/Button';

var Ext_field_FileButton_Component =
/*#__PURE__*/
function (_Ext_Button_Component) {
  _inheritsLoose(Ext_field_FileButton_Component, _Ext_Button_Component);

  //configs
  Ext_field_FileButton_Component.XTYPE = function XTYPE() {
    return 'filebutton';
  };

  Ext_field_FileButton_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "accept": ["string"],
      "capture": ["string"],
      "multiple": ["boolean"],
      "value": ["string"]
    };
  };

  Ext_field_FileButton_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,newValue,oldValue'
    }];
  };

  Ext_field_FileButton_Component.METHODS = function METHODS() {
    return [{
      name: 'getFiles',
      "function": function _function() {
        return this.ext.getFiles();
      }
    }];
  };

  _createClass(Ext_field_FileButton_Component, [{
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
      var attrs = _Ext_Button_Component.observedAttributes;

      for (var property in Ext_field_FileButton_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_FileButton_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_FileButton_Component(propertiesobject, methods, events) {
    return _Ext_Button_Component.call(this, Object.assign(propertiesobject, Ext_field_FileButton_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_field_FileButton_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_field_FileButton_Component.METHODS()), events.concat(Ext_field_FileButton_Component.EVENTS())) || this; //this.XTYPE = Ext_field_FileButton_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_FileButton_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_field_FileButton_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_field_FileButton_Component.EVENTS());
  }

  var _proto = Ext_field_FileButton_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Button_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Button_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_FileButton_Component;
}(Ext_Button_Component);

export { Ext_field_FileButton_Component as default };