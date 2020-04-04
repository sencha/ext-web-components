import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_sparkline_CanvasBase from '../../Ext/sparkline/CanvasBase.js';

var Ext_sparkline_CanvasCanvas = /*#__PURE__*/function (_Ext_sparkline_Canvas) {
  _inheritsLoose(Ext_sparkline_CanvasCanvas, _Ext_sparkline_Canvas);

  var _super = _createSuper(Ext_sparkline_CanvasCanvas);

  Ext_sparkline_CanvasCanvas.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_sparkline_CanvasCanvas.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_sparkline_CanvasCanvas.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_sparkline_CanvasCanvas.PROPERTIES());
    return Ext_sparkline_CanvasBase.getProperties(properties);
  };

  Ext_sparkline_CanvasCanvas.getEvents = function getEvents(events) {
    events = events.concat(Ext_sparkline_CanvasCanvas.EVENTS());
    return Ext_sparkline_CanvasBase.getEvents(events);
  };

  _createClass(Ext_sparkline_CanvasCanvas, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_sparkline_Canvas.observedAttributes;
      Ext_sparkline_CanvasCanvas.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_sparkline_CanvasCanvas.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_CanvasCanvas(properties, events) {
    return _Ext_sparkline_Canvas.call(this, properties.concat(Ext_sparkline_CanvasCanvas.PROPERTIES()), events.concat(Ext_sparkline_CanvasCanvas.EVENTS())) || this;
  }

  var _proto = Ext_sparkline_CanvasCanvas.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_sparkline_Canvas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_sparkline_Canvas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_CanvasCanvas;
}(Ext_sparkline_CanvasBase);

export { Ext_sparkline_CanvasCanvas as default };