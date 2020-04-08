import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_app_ViewModel from '../../../Ext/app/ViewModel.js';

var Ext_ux_colorpick_SelectorModel = /*#__PURE__*/function (_Ext_app_ViewModel) {
  _inheritsLoose(Ext_ux_colorpick_SelectorModel, _Ext_app_ViewModel);

  Ext_ux_colorpick_SelectorModel.PROPERTIES = function PROPERTIES() {
    return ['data', 'formulas', 'links', 'parent', 'root', 'scheduler', 'schema', 'session', 'stores', 'view'];
  };

  Ext_ux_colorpick_SelectorModel.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_colorpick_SelectorModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_colorpick_SelectorModel.PROPERTIES());
    return Ext_app_ViewModel.getProperties(properties);
  };

  Ext_ux_colorpick_SelectorModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_colorpick_SelectorModel.EVENTS());
    return Ext_app_ViewModel.getEvents(events);
  };

  _createClass(Ext_ux_colorpick_SelectorModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_ViewModel.observedAttributes;
      Ext_ux_colorpick_SelectorModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_colorpick_SelectorModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_colorpick_SelectorModel(properties, events) {
    return _Ext_app_ViewModel.call(this, properties.concat(Ext_ux_colorpick_SelectorModel.PROPERTIES()), events.concat(Ext_ux_colorpick_SelectorModel.EVENTS())) || this;
  }

  var _proto = Ext_ux_colorpick_SelectorModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_ViewModel.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_ViewModel.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_colorpick_SelectorModel;
}(Ext_app_ViewModel);

export { Ext_ux_colorpick_SelectorModel as default };