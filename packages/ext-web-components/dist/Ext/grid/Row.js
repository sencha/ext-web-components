import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../../Ext/Component';

var Ext_grid_Row_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_grid_Row_Component, _Ext_Component_Compon);

  //events
  //configs
  Ext_grid_Row_Component.XTYPE = function XTYPE() {
    return 'gridrow';
  };

  Ext_grid_Row_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "body": ["object"],
      "defaultCellUI": ["string"],
      "expandedField": ["string"],
      "stickyVisibility": ["any"]
    };
  };

  Ext_grid_Row_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_Row_Component.METHODS = function METHODS() {
    return [{
      name: 'collapse',
      "function": function _function() {
        return this.ext.collapse();
      }
    }, {
      name: 'expand',
      "function": function _function() {
        return this.ext.expand();
      }
    }, {
      name: 'getCells',
      "function": function _function(selector) {
        return this.ext.getCells(selector);
      }
    }];
  };

  _createClass(Ext_grid_Row_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_grid_Row_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_Row_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_Row_Component(propertiesobject, methods, events) {
    return _Ext_Component_Compon.call(this, Object.assign(propertiesobject, Ext_grid_Row_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_grid_Row_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_grid_Row_Component.METHODS()), events.concat(Ext_grid_Row_Component.EVENTS())) || this; //this.XTYPE = Ext_grid_Row_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_Row_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_grid_Row_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_grid_Row_Component.EVENTS());
  }

  var _proto = Ext_grid_Row_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_Row_Component;
}(Ext_Component_Component);

export { Ext_grid_Row_Component as default };