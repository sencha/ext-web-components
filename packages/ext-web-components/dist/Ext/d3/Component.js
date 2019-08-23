import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_ComponentBase_Component from '../../Ext/d3/ComponentBase';

var Ext_d3_Component_Component =
/*#__PURE__*/
function (_Ext_d3_ComponentBase) {
  _inheritsLoose(Ext_d3_Component_Component, _Ext_d3_ComponentBase);

  //events
  //configs
  Ext_d3_Component_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_d3_Component_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "componentCls": ["string"],
      "interactions": ["any"],
      "store": ["Ext.data.Store"],
      "transitions": ["any"]
    };
  };

  Ext_d3_Component_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_d3_Component_Component.METHODS = function METHODS() {
    return [{
      name: 'createTransition',
      "function": function _function(name, selection) {
        return this.ext.createTransition(name, selection);
      }
    }, {
      name: 'hideMask',
      "function": function _function() {
        return this.ext.hideMask();
      }
    }, {
      name: 'showMask',
      "function": function _function(msg) {
        return this.ext.showMask(msg);
      }
    }, {
      name: 'toLocalXY',
      "function": function _function(event, view) {
        return this.ext.toLocalXY(event, view);
      }
    }];
  };

  _createClass(Ext_d3_Component_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_ComponentBase.observedAttributes;

      for (var property in Ext_d3_Component_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_d3_Component_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_Component_Component() {
    var _this;

    _this = _Ext_d3_ComponentBase.call(this, Ext_d3_Component_Component.METHODS(), Ext_d3_Component_Component.XTYPE(), Ext_d3_Component_Component.PROPERTIESOBJECT(), Ext_d3_Component_Component.EVENTS()) || this;
    _this.XTYPE = Ext_d3_Component_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_d3_Component_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_d3_Component_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_d3_Component_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_d3_Component_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_ComponentBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_ComponentBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_Component_Component;
}(Ext_d3_ComponentBase_Component);

export { Ext_d3_Component_Component as default };