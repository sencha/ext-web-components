import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_selection_DataViewModel from '../../Ext/selection/DataViewModel.js';

var Ext_selection_CellModel = /*#__PURE__*/function (_Ext_selection_DataVi) {
  _inheritsLoose(Ext_selection_CellModel, _Ext_selection_DataVi);

  Ext_selection_CellModel.PROPERTIES = function PROPERTIES() {
    return ['allowDeselect', 'deselectOnContainerClick', 'enableKeyNav', 'ignoreRightMouseSelection', 'listeners', 'mode', 'ordered', 'preventWrap', 'pruneRemoved', 'selected', 'store', 'toggleOnClick'];
  };

  Ext_selection_CellModel.EVENTS = function EVENTS() {
    return [{
      name: 'beforedeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'beforeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'deselect',
      parameters: 'sender,record,row,column'
    }, {
      name: 'focuschange',
      parameters: 'sender,oldFocused,newFocused'
    }, {
      name: 'select',
      parameters: 'sender,record,row,column'
    }, {
      name: 'selectionchange',
      parameters: 'sender,selected'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_selection_CellModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_selection_CellModel.PROPERTIES());
    return Ext_selection_DataViewModel.getProperties(properties);
  };

  Ext_selection_CellModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_selection_CellModel.EVENTS());
    return Ext_selection_DataViewModel.getEvents(events);
  };

  _createClass(Ext_selection_CellModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_selection_DataVi.observedAttributes;
      Ext_selection_CellModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_selection_CellModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_selection_CellModel(properties, events) {
    return _Ext_selection_DataVi.call(this, properties.concat(Ext_selection_CellModel.PROPERTIES()), events.concat(Ext_selection_CellModel.EVENTS())) || this;
  }

  var _proto = Ext_selection_CellModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_selection_DataVi.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_selection_DataVi.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_selection_CellModel;
}(Ext_selection_DataViewModel);

export { Ext_selection_CellModel as default };