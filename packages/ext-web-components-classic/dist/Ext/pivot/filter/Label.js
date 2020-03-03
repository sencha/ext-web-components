import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_filter_Base from '../../../Ext/pivot/filter/Base.js';

var Ext_pivot_filter_Label = /*#__PURE__*/function (_Ext_pivot_filter_Bas) {
  _inheritsLoose(Ext_pivot_filter_Label, _Ext_pivot_filter_Bas);

  Ext_pivot_filter_Label.PROPERTIES = function PROPERTIES() {
    return ['caseSensitive', 'operator', 'type', 'value'];
  };

  Ext_pivot_filter_Label.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_filter_Label.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_filter_Label.PROPERTIES());
    return Ext_pivot_filter_Base.getProperties(properties);
  };

  Ext_pivot_filter_Label.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_filter_Label.EVENTS());
    return Ext_pivot_filter_Base.getEvents(events);
  };

  _createClass(Ext_pivot_filter_Label, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_filter_Bas.observedAttributes;
      Ext_pivot_filter_Label.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_filter_Label.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_filter_Label(properties, events) {
    return _Ext_pivot_filter_Bas.call(this, properties.concat(Ext_pivot_filter_Label.PROPERTIES()), events.concat(Ext_pivot_filter_Label.EVENTS())) || this;
  }

  var _proto = Ext_pivot_filter_Label.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_filter_Bas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_filter_Bas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_filter_Label;
}(Ext_pivot_filter_Base);

export { Ext_pivot_filter_Label as default };