import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Mz_pivot_plugin_Configurator = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Mz_pivot_plugin_Configurator, _Ext_plugin_Abstract);

  Mz_pivot_plugin_Configurator.PROPERTIES = function PROPERTIES() {
    return ['collapsible', 'configPanel', 'dock', 'fields', 'id', 'refreshDelay', 'stateEvents'];
  };

  Mz_pivot_plugin_Configurator.EVENTS = function EVENTS() {
    return [{
      name: 'applyconfigfieldsettings',
      parameters: 'panel,config'
    }, {
      name: 'applypivotsettings',
      parameters: 'panel,config'
    }, {
      name: 'beforeapplyconfigfieldsettings',
      parameters: 'panel,config'
    }, {
      name: 'beforeapplypivotsettings',
      parameters: 'panel,config'
    }, {
      name: 'beforeconfigchange',
      parameters: 'panel,config'
    }, {
      name: 'beforemoveconfigfield',
      parameters: 'panel,config'
    }, {
      name: 'beforeshowconfigfieldmenu',
      parameters: 'panel,config'
    }, {
      name: 'beforeshowconfigfieldsettings',
      parameters: 'panel,config'
    }, {
      name: 'beforeshowpivotsettings',
      parameters: 'panel,config'
    }, {
      name: 'configchange',
      parameters: 'panel,config'
    }, {
      name: 'hideconfigpanel',
      parameters: 'panel'
    }, {
      name: 'showconfigfieldmenu',
      parameters: 'panel,config'
    }, {
      name: 'showconfigfieldsettings',
      parameters: 'panel,config'
    }, {
      name: 'showconfigpanel',
      parameters: 'panel'
    }, {
      name: 'showpivotsettings',
      parameters: 'panel,config'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Mz_pivot_plugin_Configurator.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_pivot_plugin_Configurator.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Mz_pivot_plugin_Configurator.getEvents = function getEvents(events) {
    events = events.concat(Mz_pivot_plugin_Configurator.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Mz_pivot_plugin_Configurator, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Mz_pivot_plugin_Configurator.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_pivot_plugin_Configurator.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_pivot_plugin_Configurator(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Mz_pivot_plugin_Configurator.PROPERTIES()), events.concat(Mz_pivot_plugin_Configurator.EVENTS())) || this;
  }

  var _proto = Mz_pivot_plugin_Configurator.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_pivot_plugin_Configurator;
}(Ext_plugin_Abstract);

export { Mz_pivot_plugin_Configurator as default };