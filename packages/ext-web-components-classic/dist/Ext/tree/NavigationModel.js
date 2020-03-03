import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_NavigationModel from '../../Ext/grid/NavigationModel.js';

var Ext_tree_NavigationModel = /*#__PURE__*/function (_Ext_grid_NavigationM) {
  _inheritsLoose(Ext_tree_NavigationModel, _Ext_grid_NavigationM);

  Ext_tree_NavigationModel.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_tree_NavigationModel.EVENTS = function EVENTS() {
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

  Ext_tree_NavigationModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_tree_NavigationModel.PROPERTIES());
    return Ext_grid_NavigationModel.getProperties(properties);
  };

  Ext_tree_NavigationModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_tree_NavigationModel.EVENTS());
    return Ext_grid_NavigationModel.getEvents(events);
  };

  _createClass(Ext_tree_NavigationModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_NavigationM.observedAttributes;
      Ext_tree_NavigationModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_tree_NavigationModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_tree_NavigationModel(properties, events) {
    return _Ext_grid_NavigationM.call(this, properties.concat(Ext_tree_NavigationModel.PROPERTIES()), events.concat(Ext_tree_NavigationModel.EVENTS())) || this;
  }

  var _proto = Ext_tree_NavigationModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_NavigationM.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_NavigationM.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_tree_NavigationModel;
}(Ext_grid_NavigationModel);

export { Ext_tree_NavigationModel as default };