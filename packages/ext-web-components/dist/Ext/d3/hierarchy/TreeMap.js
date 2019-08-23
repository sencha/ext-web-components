import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_Hierarchy_Component from '../../../Ext/d3/hierarchy/Hierarchy';

var Ext_d3_hierarchy_TreeMap_Component =
/*#__PURE__*/
function (_Ext_d3_hierarchy_Hie) {
  _inheritsLoose(Ext_d3_hierarchy_TreeMap_Component, _Ext_d3_hierarchy_Hie);

  //events
  //configs
  Ext_d3_hierarchy_TreeMap_Component.XTYPE = function XTYPE() {
    return 'd3-treemap';
  };

  Ext_d3_hierarchy_TreeMap_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "busyLayoutText": ["string"],
      "leafTile": ["object"],
      "parentTile": ["object"],
      "scaleLabels": ["boolean"],
      "tiling": ["function"]
    };
  };

  Ext_d3_hierarchy_TreeMap_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_d3_hierarchy_TreeMap_Component.METHODS = function METHODS() {
    return [{
      name: 'createLabelQuantizer',
      "function": function _function() {
        return this.ext.createLabelQuantizer();
      }
    }, {
      name: 'getContentRect',
      "function": function _function() {
        return this.ext.getContentRect();
      }
    }, {
      name: 'getLabelSize',
      "function": function _function(node, element) {
        return this.ext.getLabelSize(node, element);
      }
    }, {
      name: 'labelSizer',
      "function": function _function(node, element) {
        return this.ext.labelSizer(node, element);
      }
    }, {
      name: 'nodeSizeFn',
      "function": function _function(selection) {
        return this.ext.nodeSizeFn(selection);
      }
    }, {
      name: 'textVisibilityFn',
      "function": function _function(selection) {
        return this.ext.textVisibilityFn(selection);
      }
    }];
  };

  _createClass(Ext_d3_hierarchy_TreeMap_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_hierarchy_Hie.observedAttributes;

      for (var property in Ext_d3_hierarchy_TreeMap_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_d3_hierarchy_TreeMap_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_hierarchy_TreeMap_Component() {
    var _this;

    _this = _Ext_d3_hierarchy_Hie.call(this, Ext_d3_hierarchy_TreeMap_Component.METHODS(), Ext_d3_hierarchy_TreeMap_Component.XTYPE(), Ext_d3_hierarchy_TreeMap_Component.PROPERTIESOBJECT(), Ext_d3_hierarchy_TreeMap_Component.EVENTS()) || this;
    _this.XTYPE = Ext_d3_hierarchy_TreeMap_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_d3_hierarchy_TreeMap_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_d3_hierarchy_TreeMap_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_d3_hierarchy_TreeMap_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_d3_hierarchy_TreeMap_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_hierarchy_Hie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_hierarchy_Hie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_hierarchy_TreeMap_Component;
}(Ext_d3_hierarchy_Hierarchy_Component);

export { Ext_d3_hierarchy_TreeMap_Component as default };