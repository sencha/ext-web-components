import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../Ext/Mixin.js';

var Ext_mixin_Container = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_mixin_Container, _Ext_Mixin);

  Ext_mixin_Container.PROPERTIES = function PROPERTIES() {
    return ['nameHolder', 'referenceHolder'];
  };

  Ext_mixin_Container.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_mixin_Container.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_mixin_Container.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_mixin_Container.getEvents = function getEvents(events) {
    events = events.concat(Ext_mixin_Container.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_mixin_Container, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_mixin_Container.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_mixin_Container.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_mixin_Container(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_mixin_Container.PROPERTIES()), events.concat(Ext_mixin_Container.EVENTS())) || this;
  }

  var _proto = Ext_mixin_Container.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_mixin_Container;
}(Ext_Mixin);

export { Ext_mixin_Container as default };