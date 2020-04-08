import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_selection_DataViewModel from '../../Ext/selection/DataViewModel.js';

var Ext_selection_RowModel = /*#__PURE__*/function (_Ext_selection_DataVi) {
  _inheritsLoose(Ext_selection_RowModel, _Ext_selection_DataVi);

  Ext_selection_RowModel.PROPERTIES = function PROPERTIES() {
    return ['allowDeselect', 'deselectOnContainerClick', 'enableKeyNav', 'ignoreRightMouseSelection', 'listeners', 'mode', 'ordered', 'pruneRemoved', 'selected', 'store', 'toggleOnClick'];
  };

  Ext_selection_RowModel.EVENTS = function EVENTS() {
    return [{
      name: 'beforedeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'beforeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'deselect',
      parameters: 'sender,record,index'
    }, {
      name: 'focuschange',
      parameters: 'sender,oldFocused,newFocused'
    }, {
      name: 'select',
      parameters: 'sender,record,index'
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

  Ext_selection_RowModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_selection_RowModel.PROPERTIES());
    return Ext_selection_DataViewModel.getProperties(properties);
  };

  Ext_selection_RowModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_selection_RowModel.EVENTS());
    return Ext_selection_DataViewModel.getEvents(events);
  };

  _createClass(Ext_selection_RowModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_selection_DataVi.observedAttributes;
      Ext_selection_RowModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_selection_RowModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_selection_RowModel(properties, events) {
    return _Ext_selection_DataVi.call(this, properties.concat(Ext_selection_RowModel.PROPERTIES()), events.concat(Ext_selection_RowModel.EVENTS())) || this;
  }

  var _proto = Ext_selection_RowModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_selection_DataVi.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_selection_DataVi.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_selection_RowModel;
}(Ext_selection_DataViewModel);

export { Ext_selection_RowModel as default };