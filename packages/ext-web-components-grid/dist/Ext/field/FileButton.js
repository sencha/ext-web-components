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

  function Ext_field_FileButton_Component() {
    var _this;

    _this = _Ext_Button_Component.call(this) || this;
    _this.XTYPE = Ext_field_FileButton_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_FileButton_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_field_FileButton_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_field_FileButton_Component.EVENTS());
    return _this;
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