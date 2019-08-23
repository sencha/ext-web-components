import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_svg_Svg_Component from '../../../Ext/d3/svg/Svg';

var Ext_d3_hierarchy_Hierarchy_Component =
/*#__PURE__*/
function (_Ext_d3_svg_Svg_Compo) {
  _inheritsLoose(Ext_d3_hierarchy_Hierarchy_Component, _Ext_d3_svg_Svg_Compo);

  //configs
  Ext_d3_hierarchy_Hierarchy_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_d3_hierarchy_Hierarchy_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "colorAxis": ["Ext.d3.axis.Color"],
      "expandEventName": ["string", "string[]"],
      "hierarchyCls": ["string"],
      "layout": ["function"],
      "linkKey": ["function"],
      "nodeChildren": ["function"],
      "nodeClass": ["function"],
      "nodeKey": ["function"],
      "nodeText": ["function", "string", "string[]"],
      "nodeTransform": ["function"],
      "nodeValue": ["function", "string", "number"],
      "noParentValue": ["boolean"],
      "noSizeLayout": ["boolean"],
      "publishes": ["string", "string[]", "object"],
      "renderLinks": ["boolean"],
      "rootVisible": ["boolean"],
      "selectEventName": ["string", "string[]"],
      "selection": ["Ext.data.TreeModel"],
      "sorter": ["function"],
      "transitions": ["any"]
    };
  };

  Ext_d3_hierarchy_Hierarchy_Component.EVENTS = function EVENTS() {
    return [{
      name: 'layout',
      parameters: 'component'
    }];
  };

  Ext_d3_hierarchy_Hierarchy_Component.METHODS = function METHODS() {
    return [{
      name: 'addNodeListener',
      "function": function _function(eventName, handler) {
        return this.ext.addNodeListener(eventName, handler);
      }
    }, {
      name: 'addNodeListeners',
      "function": function _function() {
        return this.ext.addNodeListeners();
      }
    }, {
      name: 'findNode',
      "function": function _function(node, selection) {
        return this.ext.findNode(node, selection);
      }
    }, {
      name: 'hideRoot',
      "function": function _function() {
        return this.ext.hideRoot();
      }
    }, {
      name: 'isRecordInStore',
      "function": function _function(record) {
        return this.ext.isRecordInStore(record);
      }
    }, {
      name: 'nodeFromRecord',
      "function": function _function(record) {
        return this.ext.nodeFromRecord(record);
      }
    }, {
      name: 'onLayout',
      "function": function _function() {
        return this.ext.onLayout();
      }
    }, {
      name: 'onNodeDeselect',
      "function": function _function(record, selection) {
        return this.ext.onNodeDeselect(record, selection);
      }
    }, {
      name: 'onNodesAdd',
      "function": function _function(selection) {
        return this.ext.onNodesAdd(selection);
      }
    }, {
      name: 'onNodeSelect',
      "function": function _function(record, selection) {
        return this.ext.onNodeSelect(record, selection);
      }
    }, {
      name: 'performLayout',
      "function": function _function() {
        return this.ext.performLayout();
      }
    }, {
      name: 'removeLinks',
      "function": function _function(selection) {
        return this.ext.removeLinks(selection);
      }
    }, {
      name: 'removeNodeListener',
      "function": function _function(eventName, handler) {
        return this.ext.removeNodeListener(eventName, handler);
      }
    }, {
      name: 'removeNodes',
      "function": function _function(selection) {
        return this.ext.removeNodes(selection);
      }
    }, {
      name: 'renderLinks',
      "function": function _function(update) {
        return this.ext.renderLinks(update);
      }
    }, {
      name: 'renderNodes',
      "function": function _function(update) {
        return this.ext.renderNodes(update);
      }
    }, {
      name: 'renderScene',
      "function": function _function(nodes, links) {
        return this.ext.renderScene(nodes, links);
      }
    }, {
      name: 'selectionFromRecord',
      "function": function _function(record) {
        return this.ext.selectionFromRecord(record);
      }
    }, {
      name: 'setLayoutSize',
      "function": function _function(size) {
        return this.ext.setLayoutSize(size);
      }
    }, {
      name: 'skipLayoutTransition',
      "function": function _function() {
        return this.ext.skipLayoutTransition();
      }
    }, {
      name: 'updateEventName',
      "function": function _function(name, oldName, handler) {
        return this.ext.updateEventName(name, oldName, handler);
      }
    }];
  };

  _createClass(Ext_d3_hierarchy_Hierarchy_Component, [{
    key: "onlayout",
    //events
    get: function get() {
      return this.getAttribute('onlayout');
    },
    set: function set(onlayout) {
      this.setAttribute('onlayout', onlayout);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_svg_Svg_Compo.observedAttributes;

      for (var property in Ext_d3_hierarchy_Hierarchy_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_d3_hierarchy_Hierarchy_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_hierarchy_Hierarchy_Component() {
    var _this;

    _this = _Ext_d3_svg_Svg_Compo.call(this, Ext_d3_hierarchy_Hierarchy_Component.METHODS(), Ext_d3_hierarchy_Hierarchy_Component.XTYPE(), Ext_d3_hierarchy_Hierarchy_Component.PROPERTIESOBJECT(), Ext_d3_hierarchy_Hierarchy_Component.EVENTS()) || this;
    _this.XTYPE = Ext_d3_hierarchy_Hierarchy_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_d3_hierarchy_Hierarchy_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_d3_hierarchy_Hierarchy_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_d3_hierarchy_Hierarchy_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_d3_hierarchy_Hierarchy_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_svg_Svg_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_svg_Svg_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_hierarchy_Hierarchy_Component;
}(Ext_d3_svg_Svg_Component);

export { Ext_d3_hierarchy_Hierarchy_Component as default };