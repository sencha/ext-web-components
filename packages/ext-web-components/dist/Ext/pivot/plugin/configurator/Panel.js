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

  function Ext_pivot_plugin_configurator_Panel_Component() {
    var _this;

    _this = _Ext_Panel_Component.call(this, Ext_pivot_plugin_configurator_Panel_Component.METHODS(), Ext_pivot_plugin_configurator_Panel_Component.XTYPE(), Ext_pivot_plugin_configurator_Panel_Component.PROPERTIESOBJECT(), Ext_pivot_plugin_configurator_Panel_Component.EVENTS()) || this;
    _this.XTYPE = Ext_pivot_plugin_configurator_Panel_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_pivot_plugin_configurator_Panel_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_pivot_plugin_configurator_Panel_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_pivot_plugin_configurator_Panel_Component.EVENTS());
    return _this;
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