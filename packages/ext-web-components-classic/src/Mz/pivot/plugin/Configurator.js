import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

export default class Mz_pivot_plugin_Configurator extends Ext_plugin_Abstract {
  static PROPERTIES() { return [
    'collapsible',
    'configPanel',
    'dock',
    'fields',
    'id',
    'refreshDelay',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'applyconfigfieldsettings', parameters:'panel,config'},
    {name:'applypivotsettings', parameters:'panel,config'},
    {name:'beforeapplyconfigfieldsettings', parameters:'panel,config'},
    {name:'beforeapplypivotsettings', parameters:'panel,config'},
    {name:'beforeconfigchange', parameters:'panel,config'},
    {name:'beforemoveconfigfield', parameters:'panel,config'},
    {name:'beforeshowconfigfieldmenu', parameters:'panel,config'},
    {name:'beforeshowconfigfieldsettings', parameters:'panel,config'},
    {name:'beforeshowpivotsettings', parameters:'panel,config'},
    {name:'configchange', parameters:'panel,config'},
    {name:'hideconfigpanel', parameters:'panel'},
    {name:'showconfigfieldmenu', parameters:'panel,config'},
    {name:'showconfigfieldsettings', parameters:'panel,config'},
    {name:'showconfigpanel', parameters:'panel'},
    {name:'showpivotsettings', parameters:'panel,config'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Mz_pivot_plugin_Configurator.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Mz_pivot_plugin_Configurator.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Mz_pivot_plugin_Configurator.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Mz_pivot_plugin_Configurator.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Mz_pivot_plugin_Configurator.PROPERTIES()),
      events.concat(Mz_pivot_plugin_Configurator.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
