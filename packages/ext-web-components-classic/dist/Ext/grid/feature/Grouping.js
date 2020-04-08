import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_feature_Feature from '../../../Ext/grid/feature/Feature.js';

var Ext_grid_feature_Grouping = /*#__PURE__*/function (_Ext_grid_feature_Fea) {
  _inheritsLoose(Ext_grid_feature_Grouping, _Ext_grid_feature_Fea);

  Ext_grid_feature_Grouping.PROPERTIES = function PROPERTIES() {
    return ['collapseTip', 'collapsible', 'depthToIndent', 'enableGroupingMenu', 'enableNoGroups', 'expandTip', 'groupByText', 'groupers', 'groupHeaderTpl', 'hideGroupedHeader', 'listeners', 'remoteRoot', 'showGroupsText', 'showSummaryRow', 'startCollapsed'];
  };

  Ext_grid_feature_Grouping.EVENTS = function EVENTS() {
    return [{
      name: 'groupclick',
      parameters: 'view,node,group,e'
    }, {
      name: 'groupcollapse',
      parameters: 'view,node,group'
    }, {
      name: 'groupcontextmenu',
      parameters: 'view,node,group,e'
    }, {
      name: 'groupdblclick',
      parameters: 'view,node,group,e'
    }, {
      name: 'groupexpand',
      parameters: 'view,node,group'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_feature_Grouping.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_Grouping.PROPERTIES());
    return Ext_grid_feature_Feature.getProperties(properties);
  };

  Ext_grid_feature_Grouping.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_feature_Grouping.EVENTS());
    return Ext_grid_feature_Feature.getEvents(events);
  };

  _createClass(Ext_grid_feature_Grouping, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_feature_Fea.observedAttributes;
      Ext_grid_feature_Grouping.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_feature_Grouping.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_feature_Grouping(properties, events) {
    return _Ext_grid_feature_Fea.call(this, properties.concat(Ext_grid_feature_Grouping.PROPERTIES()), events.concat(Ext_grid_feature_Grouping.EVENTS())) || this;
  }

  var _proto = Ext_grid_feature_Grouping.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_feature_Fea.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_feature_Fea.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_feature_Grouping;
}(Ext_grid_feature_Feature);

export { Ext_grid_feature_Grouping as default };