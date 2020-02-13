import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_d3_svg_Export =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_d3_svg_Export, _Ext_Base);

  Ext_d3_svg_Export.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_d3_svg_Export.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_d3_svg_Export.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_svg_Export.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_d3_svg_Export.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_svg_Export.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_d3_svg_Export, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_d3_svg_Export.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_svg_Export.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_svg_Export(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_d3_svg_Export.PROPERTIES()), events.concat(Ext_d3_svg_Export.EVENTS())) || this;
  }

  var _proto = Ext_d3_svg_Export.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_svg_Export;
}(Ext_Base);

export { Ext_d3_svg_Export as default };