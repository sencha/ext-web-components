import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Container_Component from '../../Ext/field/Container';

var Ext_field_FieldGroupContainer_Component =
/*#__PURE__*/
function (_Ext_field_Container_) {
  _inheritsLoose(Ext_field_FieldGroupContainer_Component, _Ext_field_Container_);

  //configs
  Ext_field_FieldGroupContainer_Component.XTYPE = function XTYPE() {
    return 'groupcontainer';
  };

  Ext_field_FieldGroupContainer_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "defaultFieldValue": ["mixed"],
      "delegate": ["string"],
      "fieldsName": ["string"],
      "shareableName": ["boolean"],
      "vertical": ["boolean"]
    };
  };

  Ext_field_FieldGroupContainer_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,newValue,oldValue'
    }];
  };

  Ext_field_FieldGroupContainer_Component.METHODS = function METHODS() {
    return [{
      name: 'getGroupItems',
      "function": function _function(query) {
        return this.ext.getGroupItems(query);
      }
    }, {
      name: 'getValue',
      "function": function _function(enabled, all) {
        return this.ext.getValue(enabled, all);
      }
    }, {
      name: 'isEqual',
      "function": function _function(value1, value2) {
        return this.ext.isEqual(value1, value2);
      }
    }, {
      name: 'isValid',
      "function": function _function() {
        return this.ext.isValid();
      }
    }, {
      name: 'setValue',
      "function": function _function(value) {
        return this.ext.setValue(value);
      }
    }, {
      name: 'updateFieldsName',
      "function": function _function(name, oldName) {
        return this.ext.updateFieldsName(name, oldName);
      }
    }];
  };

  _createClass(Ext_field_FieldGroupContainer_Component, [{
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
      var attrs = _Ext_field_Container_.observedAttributes;

      for (var property in Ext_field_FieldGroupContainer_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_FieldGroupContainer_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_FieldGroupContainer_Component() {
    var _this;

    _this = _Ext_field_Container_.call(this) || this;
    _this.XTYPE = Ext_field_FieldGroupContainer_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_FieldGroupContainer_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_field_FieldGroupContainer_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_field_FieldGroupContainer_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_FieldGroupContainer_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Container_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Container_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_FieldGroupContainer_Component;
}(Ext_field_Container_Component);

export { Ext_field_FieldGroupContainer_Component as default };