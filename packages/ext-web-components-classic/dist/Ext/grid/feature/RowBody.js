import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_feature_Feature from '../../../Ext/grid/feature/Feature.js';

var Ext_grid_feature_RowBody = /*#__PURE__*/function (_Ext_grid_feature_Fea) {
  _inheritsLoose(Ext_grid_feature_RowBody, _Ext_grid_feature_Fea);

  Ext_grid_feature_RowBody.PROPERTIES = function PROPERTIES() {
    return ['bodyBefore', 'listeners'];
  };

  Ext_grid_feature_RowBody.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_feature_RowBody.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_RowBody.PROPERTIES());
    return Ext_grid_feature_Feature.getProperties(properties);
  };

  Ext_grid_feature_RowBody.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_feature_RowBody.EVENTS());
    return Ext_grid_feature_Feature.getEvents(events);
  };

  _createClass(Ext_grid_feature_RowBody, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_feature_Fea.observedAttributes;
      Ext_grid_feature_RowBody.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_feature_RowBody.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_feature_RowBody(properties, events) {
    return _Ext_grid_feature_Fea.call(this, properties.concat(Ext_grid_feature_RowBody.PROPERTIES()), events.concat(Ext_grid_feature_RowBody.EVENTS())) || this;
  }

  var _proto = Ext_grid_feature_RowBody.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_feature_Fea.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_feature_Fea.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_feature_RowBody;
}(Ext_grid_feature_Feature);

export { Ext_grid_feature_RowBody as default };