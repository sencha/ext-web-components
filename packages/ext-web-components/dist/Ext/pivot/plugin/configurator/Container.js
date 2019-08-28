import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../../../Ext/Panel';

var Ext_pivot_plugin_configurator_Container_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_pivot_plugin_configurator_Container_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_pivot_plugin_configurator_Container_Component.XTYPE = function XTYPE() {
    return 'pivotconfigcontainer';
  };

  Ext_pivot_plugin_configurator_Container_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "fieldType": ["any"]
    };
  };

  Ext_pivot_plugin_configurator_Container_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_plugin_configurator_Container_Component.METHODS = function METHODS() {
    return [{
      name: 'addField',
      "function": function _function(config, pos) {
        return this.ext.addField(config, pos);
      }
    }, {
      name: 'applyChanges',
      "function": function _function() {
        return this.ext.applyChanges();
      }
    }];
  };

  _createClass(Ext_pivot_plugin_configurator_Container_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_pivot_plugin_configurator_Container_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_plugin_configurator_Container_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_configurator_Container_Component() {
    var _this;

    _this = _Ext_Panel_Component.call(this, Ext_pivot_plugin_configurator_Container_Component.METHODS(), Ext_pivot_plugin_configurator_Container_Component.XTYPE(), Ext_pivot_plugin_configurator_Container_Component.PROPERTIESOBJECT(), Ext_pivot_plugin_configurator_Container_Component.EVENTS()) || this;
    _this.XTYPE = Ext_pivot_plugin_configurator_Container_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_pivot_plugin_configurator_Container_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_pivot_plugin_configurator_Container_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_pivot_plugin_configurator_Container_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_pivot_plugin_configurator_Container_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_configurator_Container_Component;
}(Ext_Panel_Component);

export { Ext_pivot_plugin_configurator_Container_Component as default };