import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Field_Component from '../../Ext/field/Field';

var Ext_field_Container_Component =
/*#__PURE__*/
function (_Ext_field_Field_Comp) {
  _inheritsLoose(Ext_field_Container_Component, _Ext_field_Field_Comp);

  //events
  //configs
  Ext_field_Container_Component.XTYPE = function XTYPE() {
    return 'containerfield';
  };

  Ext_field_Container_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "autoSize": ["any"],
      "container": ["Ext.Container"],
      "defaults": ["object"],
      "defaultType": ["string"],
      "error": ["any"],
      "fieldDefaults": ["object"],
      "items": ["array", "object"],
      "layout": ["object", "string"]
    };
  };

  Ext_field_Container_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_Container_Component.METHODS = function METHODS() {
    return [{
      name: 'add',
      "function": function _function(newItems) {
        return this.ext.add(newItems);
      }
    }, {
      name: 'child',
      "function": function _function(selector) {
        return this.ext.child(selector);
      }
    }, {
      name: 'down',
      "function": function _function(selector) {
        return this.ext.down(selector);
      }
    }, {
      name: 'getAt',
      "function": function _function(index) {
        return this.ext.getAt(index);
      }
    }, {
      name: 'getFocusEl',
      "function": function _function() {
        return this.ext.getFocusEl();
      }
    }, {
      name: 'getRefItems',
      "function": function _function(deep) {
        return this.ext.getRefItems(deep);
      }
    }, {
      name: 'insert',
      "function": function _function(index, item) {
        return this.ext.insert(index, item);
      }
    }, {
      name: 'query',
      "function": function _function(selector) {
        return this.ext.query(selector);
      }
    }, {
      name: 'remove',
      "function": function _function(which, destroy) {
        return this.ext.remove(which, destroy);
      }
    }, {
      name: 'removeAll',
      "function": function _function(destroy, everything) {
        return this.ext.removeAll(destroy, everything);
      }
    }, {
      name: 'setErrors',
      "function": function _function(errors) {
        return this.ext.setErrors(errors);
      }
    }];
  };

  _createClass(Ext_field_Container_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Field_Comp.observedAttributes;

      for (var property in Ext_field_Container_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_Container_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Container_Component() {
    var _this;

    _this = _Ext_field_Field_Comp.call(this) || this;
    _this.XTYPE = Ext_field_Container_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_field_Container_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_field_Container_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_field_Container_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_field_Container_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Field_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Field_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Container_Component;
}(Ext_field_Field_Component);

export { Ext_field_Container_Component as default };