import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_selection_Model from '../../Ext/selection/Model.js';

var Ext_selection_DataViewModel = /*#__PURE__*/function (_Ext_selection_Model) {
  _inheritsLoose(Ext_selection_DataViewModel, _Ext_selection_Model);

  Ext_selection_DataViewModel.PROPERTIES = function PROPERTIES() {
    return ['allowDeselect', 'ignoreRightMouseSelection', 'listeners', 'mode', 'ordered', 'pruneRemoved', 'selected', 'store', 'toggleOnClick'];
  };

  Ext_selection_DataViewModel.EVENTS = function EVENTS() {
    return [{
      name: 'beforedeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'beforeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'deselect',
      parameters: 'sender,record'
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

  Ext_selection_DataViewModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_selection_DataViewModel.PROPERTIES());
    return Ext_selection_Model.getProperties(properties);
  };

  Ext_selection_DataViewModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_selection_DataViewModel.EVENTS());
    return Ext_selection_Model.getEvents(events);
  };

  _createClass(Ext_selection_DataViewModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_selection_Model.observedAttributes;
      Ext_selection_DataViewModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_selection_DataViewModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_selection_DataViewModel(properties, events) {
    return _Ext_selection_Model.call(this, properties.concat(Ext_selection_DataViewModel.PROPERTIES()), events.concat(Ext_selection_DataViewModel.EVENTS())) || this;
  }

  var _proto = Ext_selection_DataViewModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_selection_Model.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_selection_Model.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_selection_DataViewModel;
}(Ext_selection_Model);

export { Ext_selection_DataViewModel as default };