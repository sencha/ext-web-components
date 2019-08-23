import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Container_Component from '../../Ext/field/Container';

var Ext_froala_EditorField_Component =
/*#__PURE__*/
function (_Ext_field_Container_) {
  _inheritsLoose(Ext_froala_EditorField_Component, _Ext_field_Container_);

  //configs
  Ext_froala_EditorField_Component.XTYPE = function XTYPE() {
    return 'froalaeditorfield';
  };

  Ext_froala_EditorField_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_froala_EditorField_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,the'
    }, {
      name: 'ready',
      parameters: 'undefined,the'
    }];
  };

  Ext_froala_EditorField_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_froala_EditorField_Component, [{
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
      var attrs = _Ext_field_Container_.observedAttributes;

      for (var property in Ext_froala_EditorField_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_froala_EditorField_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_froala_EditorField_Component() {
    var _this;

    _this = _Ext_field_Container_.call(this, Ext_froala_EditorField_Component.METHODS(), Ext_froala_EditorField_Component.XTYPE(), Ext_froala_EditorField_Component.PROPERTIESOBJECT(), Ext_froala_EditorField_Component.EVENTS()) || this;
    _this.XTYPE = Ext_froala_EditorField_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_froala_EditorField_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_froala_EditorField_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_froala_EditorField_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_froala_EditorField_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Container_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Container_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_froala_EditorField_Component;
}(Ext_field_Container_Component);

export { Ext_froala_EditorField_Component as default };