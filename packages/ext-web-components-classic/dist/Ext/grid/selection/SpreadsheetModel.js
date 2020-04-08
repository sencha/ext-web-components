import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_selection_Model from '../../../Ext/selection/Model.js';

var Ext_grid_selection_SpreadsheetModel = /*#__PURE__*/function (_Ext_selection_Model) {
  _inheritsLoose(Ext_grid_selection_SpreadsheetModel, _Ext_selection_Model);

  Ext_grid_selection_SpreadsheetModel.PROPERTIES = function PROPERTIES() {
    return ['allowDeselect', 'cellSelect', 'checkboxColumnIndex', 'checkboxHeaderWidth', 'checkboxSelect', 'checkColumnHeaderText', 'columnSelect', 'dragSelect', 'extensible', 'ignoreRightMouseSelection', 'listeners', 'mode', 'ordered', 'pruneRemoved', 'reducible', 'rowNumbererHeaderWidth', 'rowSelect', 'selected', 'showHeaderCheckbox', 'store', 'toggleOnClick'];
  };

  Ext_grid_selection_SpreadsheetModel.EVENTS = function EVENTS() {
    return [{
      name: 'focuschange',
      parameters: 'sender,oldFocused,newFocused'
    }, {
      name: 'selectionchange',
      parameters: 'grid,selection'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_selection_SpreadsheetModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_selection_SpreadsheetModel.PROPERTIES());
    return Ext_selection_Model.getProperties(properties);
  };

  Ext_grid_selection_SpreadsheetModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_selection_SpreadsheetModel.EVENTS());
    return Ext_selection_Model.getEvents(events);
  };

  _createClass(Ext_grid_selection_SpreadsheetModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_selection_Model.observedAttributes;
      Ext_grid_selection_SpreadsheetModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_selection_SpreadsheetModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_selection_SpreadsheetModel(properties, events) {
    return _Ext_selection_Model.call(this, properties.concat(Ext_grid_selection_SpreadsheetModel.PROPERTIES()), events.concat(Ext_grid_selection_SpreadsheetModel.EVENTS())) || this;
  }

  var _proto = Ext_grid_selection_SpreadsheetModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_selection_Model.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_selection_Model.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_selection_SpreadsheetModel;
}(Ext_selection_Model);

export { Ext_grid_selection_SpreadsheetModel as default };