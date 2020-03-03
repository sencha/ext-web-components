import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_view_NavigationModel from '../../Ext/view/NavigationModel.js';

var Ext_grid_NavigationModel = /*#__PURE__*/function (_Ext_view_NavigationM) {
  _inheritsLoose(Ext_grid_NavigationModel, _Ext_view_NavigationM);

  Ext_grid_NavigationModel.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_grid_NavigationModel.EVENTS = function EVENTS() {
    return [{
      name: 'cellactivate',
      parameters: 'grid,position,event'
    }, {
      name: 'navigate',
      parameters: 'event'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_NavigationModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_NavigationModel.PROPERTIES());
    return Ext_view_NavigationModel.getProperties(properties);
  };

  Ext_grid_NavigationModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_NavigationModel.EVENTS());
    return Ext_view_NavigationModel.getEvents(events);
  };

  _createClass(Ext_grid_NavigationModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_view_NavigationM.observedAttributes;
      Ext_grid_NavigationModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_NavigationModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_NavigationModel(properties, events) {
    return _Ext_view_NavigationM.call(this, properties.concat(Ext_grid_NavigationModel.PROPERTIES()), events.concat(Ext_grid_NavigationModel.EVENTS())) || this;
  }

  var _proto = Ext_grid_NavigationModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_view_NavigationM.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_view_NavigationM.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_NavigationModel;
}(Ext_view_NavigationModel);

export { Ext_grid_NavigationModel as default };