import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_grid_locking_Lockable = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_grid_locking_Lockable, _Ext_Base);

  Ext_grid_locking_Lockable.PROPERTIES = function PROPERTIES() {
    return ['layout', 'lockedGridConfig', 'lockedViewConfig', 'lockText', 'normalGridConfig', 'normalViewConfig', 'split', 'stateEvents', 'subGridXType', 'syncRowHeight', 'unlockText'];
  };

  Ext_grid_locking_Lockable.EVENTS = function EVENTS() {
    return [{
      name: 'beforeload',
      parameters: 'store,operation'
    }, {
      name: 'filterchange',
      parameters: 'store,filters'
    }, {
      name: 'groupchange',
      parameters: 'store,grouper'
    }, {
      name: 'load',
      parameters: 'sender,records,successful,operation'
    }, {
      name: 'lockcolumn',
      parameters: 'sender,column'
    }, {
      name: 'processcolumns',
      parameters: 'lockedColumns,normalColumns'
    }, {
      name: 'unlockcolumn',
      parameters: 'sender,column'
    }, {
      name: 'viewready',
      parameters: 'sender'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_locking_Lockable.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_locking_Lockable.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_grid_locking_Lockable.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_locking_Lockable.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_grid_locking_Lockable, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_grid_locking_Lockable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_locking_Lockable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_locking_Lockable(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_grid_locking_Lockable.PROPERTIES()), events.concat(Ext_grid_locking_Lockable.EVENTS())) || this;
  }

  var _proto = Ext_grid_locking_Lockable.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_locking_Lockable;
}(Ext_Base);

export { Ext_grid_locking_Lockable as default };