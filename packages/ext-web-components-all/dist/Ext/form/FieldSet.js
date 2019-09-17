import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../../Ext/Container';

var Ext_form_FieldSet_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_form_FieldSet_Component, _Ext_Container_Compon);

  //events
  //configs
  Ext_form_FieldSet_Component.XTYPE = function XTYPE() {
    return 'fieldset';
  };

  Ext_form_FieldSet_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "fieldDefaults": ["object"],
      "instructions": ["string"],
      "title": ["string"]
    };
  };

  Ext_form_FieldSet_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_form_FieldSet_Component.METHODS = function METHODS() {
    return [{
      name: 'applyInstructions',
      "function": function _function(instructions) {
        return this.ext.applyInstructions(instructions);
      }
    }, {
      name: 'applyTitle',
      "function": function _function(title) {
        return this.ext.applyTitle(title);
      }
    }, {
      name: 'getInstructions',
      "function": function _function() {
        return this.ext.getInstructions();
      }
    }, {
      name: 'getTitle',
      "function": function _function() {
        return this.ext.getTitle();
      }
    }, {
      name: 'updateDisabled',
      "function": function _function(newDisabled) {
        return this.ext.updateDisabled(newDisabled);
      }
    }, {
      name: 'updateInstructions',
      "function": function _function(newInstructions, oldInstructions) {
        return this.ext.updateInstructions(newInstructions, oldInstructions);
      }
    }, {
      name: 'updateTitle',
      "function": function _function(newTitle, oldTitle) {
        return this.ext.updateTitle(newTitle, oldTitle);
      }
    }];
  };

  _createClass(Ext_form_FieldSet_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_form_FieldSet_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_form_FieldSet_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_FieldSet_Component() {
    var _this;

    _this = _Ext_Container_Compon.call(this) || this;
    _this.XTYPE = Ext_form_FieldSet_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_form_FieldSet_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_form_FieldSet_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_form_FieldSet_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_form_FieldSet_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_FieldSet_Component;
}(Ext_Container_Component);

export { Ext_form_FieldSet_Component as default };