import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_CanvasBase from '../../Ext/sparkline/CanvasBase.js';

var Ext_sparkline_VmlCanvas = /*#__PURE__*/function (_Ext_sparkline_Canvas) {
  _inheritsLoose(Ext_sparkline_VmlCanvas, _Ext_sparkline_Canvas);

  Ext_sparkline_VmlCanvas.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_sparkline_VmlCanvas.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_sparkline_VmlCanvas.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_sparkline_VmlCanvas.PROPERTIES());
    return Ext_sparkline_CanvasBase.getProperties(properties);
  };

  Ext_sparkline_VmlCanvas.getEvents = function getEvents(events) {
    events = events.concat(Ext_sparkline_VmlCanvas.EVENTS());
    return Ext_sparkline_CanvasBase.getEvents(events);
  };

  _createClass(Ext_sparkline_VmlCanvas, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_sparkline_Canvas.observedAttributes;
      Ext_sparkline_VmlCanvas.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_sparkline_VmlCanvas.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_VmlCanvas(properties, events) {
    return _Ext_sparkline_Canvas.call(this, properties.concat(Ext_sparkline_VmlCanvas.PROPERTIES()), events.concat(Ext_sparkline_VmlCanvas.EVENTS())) || this;
  }

  var _proto = Ext_sparkline_VmlCanvas.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_sparkline_Canvas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_sparkline_Canvas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_VmlCanvas;
}(Ext_sparkline_CanvasBase);

export { Ext_sparkline_VmlCanvas as default };