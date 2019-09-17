import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../../../Ext/Panel';

var Ext_pivot_plugin_configurator_Panel_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_pivot_plugin_configurator_Panel_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_pivot_plugin_configurator_Panel_Component.XTYPE = function XTYPE() {
    return 'pivotconfigpanel';
  };

  Ext_pivot_plugin_configurator_Panel_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "panelAggFieldsText": ["string"],
      "panelAggFieldsTitle": ["string"],
      "panelAllFieldsText": ["string"],
      "panelAllFieldsTitle": ["string"],
      "panelLeftFieldsText": ["string"],
      "panelLeftFieldsTitle": ["string"],
      "panelTopFieldsText": ["string"],
      "panelTopFieldsTitle": ["string"]
    };
  };

  Ext_pivot_plugin_configurator_Panel_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_plugin_configurator_Panel_Component.METHODS = function METHODS() {
    return [{
      name: 'dragDropField',
      "function": function _function(fromContainer, toContainer, record, newPos) {
        return this.ext.dragDropField(fromContainer, toContainer, record, newPos);
      }
    }, {
      name: 'findFieldInContainer',
      "function": function _function(field, container) {
        return this.ext.findFieldInContainer(field, container);
      }
    }, {
      name: 'getAggregateContainer',
      "function": function _function() {
        return this.ext.getAggregateContainer();
      }
    }, {
      name: 'getAggregateHeader',
      "function": function _function() {
        return this.ext.getAggregateHeader();
      }
    }, {
      name: 'getAllFieldsContainer',
      "function": function _function() {
        return this.ext.getAllFieldsContainer();
      }
    }, {
      name: 'getAllFieldsHeader',
      "function": function _function() {
        return this.ext.getAllFieldsHeader();
      }
    }, {
      name: 'getLeftAxisContainer',
      "function": function _function() {
        return this.ext.getLeftAxisContainer();
      }
    }, {
      name: 'getLeftAxisHeader',
      "function": function _function() {
        return this.ext.getLeftAxisHeader();
      }
    }, {
      name: 'getTopAxisContainer',
      "function": function _function() {
        return this.ext.getTopAxisContainer();
      }
    }, {
      name: 'getTopAxisHeader',
      "function": function _function() {
        return this.ext.getTopAxisHeader();
      }
    }, {
      name: 'setAggregateContainerVisible',
      "function": function _function(visible) {
        return this.ext.setAggregateContainerVisible(visible);
      }
    }, {
      name: 'setAllFieldsContainerVisible',
      "function": function _function(visible) {
        return this.ext.setAllFieldsContainerVisible(visible);
      }
    }, {
      name: 'setLeftAxisContainerVisible',
      "function": function _function(visible) {
        return this.ext.setLeftAxisContainerVisible(visible);
      }
    }, {
      name: 'setTopAxisContainerVisible',
      "function": function _function(visible) {
        return this.ext.setTopAxisContainerVisible(visible);
      }
    }];
  };

  _createClass(Ext_pivot_plugin_configurator_Panel_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_pivot_plugin_configurator_Panel_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_plugin_configurator_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_configurator_Panel_Component(propertiesobject, methods, events) {
    return _Ext_Panel_Component.call(this, Object.assign(propertiesobject, Ext_pivot_plugin_configurator_Panel_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_pivot_plugin_configurator_Panel_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_pivot_plugin_configurator_Panel_Component.METHODS()), events.concat(Ext_pivot_plugin_configurator_Panel_Component.EVENTS())) || this; //this.XTYPE = Ext_pivot_plugin_configurator_Panel_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_plugin_configurator_Panel_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_pivot_plugin_configurator_Panel_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_pivot_plugin_configurator_Panel_Component.EVENTS());
  }

  var _proto = Ext_pivot_plugin_configurator_Panel_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_configurator_Panel_Component;
}(Ext_Panel_Component);

export { Ext_pivot_plugin_configurator_Panel_Component as default };