import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_drag_Source from '../../../Ext/drag/Source.js';

var Ext_calendar_dd_WeeksSource = /*#__PURE__*/function (_Ext_drag_Source) {
  _inheritsLoose(Ext_calendar_dd_WeeksSource, _Ext_drag_Source);

  Ext_calendar_dd_WeeksSource.PROPERTIES = function PROPERTIES() {
    return ['activeCls', 'activeOnLongPress', 'autoDestroy', 'component', 'constrain', 'describe', 'element', 'groups', 'handle', 'listeners', 'proxy', 'revert'];
  };

  Ext_calendar_dd_WeeksSource.EVENTS = function EVENTS() {
    return [{
      name: 'beforedragstart',
      parameters: 'sender,info,event'
    }, {
      name: 'dragcancel',
      parameters: 'sender,info,event'
    }, {
      name: 'dragend',
      parameters: 'sender,info,event'
    }, {
      name: 'dragmove',
      parameters: 'sender,info,event'
    }, {
      name: 'dragstart',
      parameters: 'sender,info,event'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_dd_WeeksSource.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_dd_WeeksSource.PROPERTIES());
    return Ext_drag_Source.getProperties(properties);
  };

  Ext_calendar_dd_WeeksSource.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_dd_WeeksSource.EVENTS());
    return Ext_drag_Source.getEvents(events);
  };

  _createClass(Ext_calendar_dd_WeeksSource, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_drag_Source.observedAttributes;
      Ext_calendar_dd_WeeksSource.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_dd_WeeksSource.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_dd_WeeksSource(properties, events) {
    return _Ext_drag_Source.call(this, properties.concat(Ext_calendar_dd_WeeksSource.PROPERTIES()), events.concat(Ext_calendar_dd_WeeksSource.EVENTS())) || this;
  }

  var _proto = Ext_calendar_dd_WeeksSource.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_drag_Source.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_drag_Source.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_dd_WeeksSource;
}(Ext_drag_Source);

export { Ext_calendar_dd_WeeksSource as default };