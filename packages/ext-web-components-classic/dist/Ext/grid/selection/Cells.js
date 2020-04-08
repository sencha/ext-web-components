import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_selection_Selection from '../../../Ext/grid/selection/Selection.js';

var Ext_grid_selection_Cells = /*#__PURE__*/function (_Ext_grid_selection_S) {
  _inheritsLoose(Ext_grid_selection_Cells, _Ext_grid_selection_S);

  Ext_grid_selection_Cells.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_grid_selection_Cells.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_selection_Cells.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_selection_Cells.PROPERTIES());
    return Ext_grid_selection_Selection.getProperties(properties);
  };

  Ext_grid_selection_Cells.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_selection_Cells.EVENTS());
    return Ext_grid_selection_Selection.getEvents(events);
  };

  _createClass(Ext_grid_selection_Cells, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_selection_S.observedAttributes;
      Ext_grid_selection_Cells.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_selection_Cells.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_selection_Cells(properties, events) {
    return _Ext_grid_selection_S.call(this, properties.concat(Ext_grid_selection_Cells.PROPERTIES()), events.concat(Ext_grid_selection_Cells.EVENTS())) || this;
  }

  var _proto = Ext_grid_selection_Cells.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_selection_S.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_selection_S.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_selection_Cells;
}(Ext_grid_selection_Selection);

export { Ext_grid_selection_Cells as default };