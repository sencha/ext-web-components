import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_grid_selection_Selection = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_grid_selection_Selection, _Ext_Base);

  Ext_grid_selection_Selection.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_grid_selection_Selection.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_selection_Selection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_selection_Selection.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_grid_selection_Selection.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_selection_Selection.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_grid_selection_Selection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_grid_selection_Selection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_selection_Selection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_selection_Selection(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_grid_selection_Selection.PROPERTIES()), events.concat(Ext_grid_selection_Selection.EVENTS())) || this;
  }

  var _proto = Ext_grid_selection_Selection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_selection_Selection;
}(Ext_Base);

export { Ext_grid_selection_Selection as default };