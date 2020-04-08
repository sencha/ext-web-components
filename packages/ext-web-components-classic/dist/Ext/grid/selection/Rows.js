import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_selection_Selection from '../../../Ext/grid/selection/Selection.js';

var Ext_grid_selection_Rows = /*#__PURE__*/function (_Ext_grid_selection_S) {
  _inheritsLoose(Ext_grid_selection_Rows, _Ext_grid_selection_S);

  Ext_grid_selection_Rows.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_grid_selection_Rows.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_selection_Rows.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_selection_Rows.PROPERTIES());
    return Ext_grid_selection_Selection.getProperties(properties);
  };

  Ext_grid_selection_Rows.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_selection_Rows.EVENTS());
    return Ext_grid_selection_Selection.getEvents(events);
  };

  _createClass(Ext_grid_selection_Rows, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_selection_S.observedAttributes;
      Ext_grid_selection_Rows.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_selection_Rows.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_selection_Rows(properties, events) {
    return _Ext_grid_selection_S.call(this, properties.concat(Ext_grid_selection_Rows.PROPERTIES()), events.concat(Ext_grid_selection_Rows.EVENTS())) || this;
  }

  var _proto = Ext_grid_selection_Rows.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_selection_S.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_selection_S.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_selection_Rows;
}(Ext_grid_selection_Selection);

export { Ext_grid_selection_Rows as default };