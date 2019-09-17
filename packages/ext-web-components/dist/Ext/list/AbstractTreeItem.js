import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Widget_Component from '../../Ext/Widget';

var Ext_list_AbstractTreeItem_Component =
/*#__PURE__*/
function (_Ext_Widget_Component) {
  _inheritsLoose(Ext_list_AbstractTreeItem_Component, _Ext_Widget_Component);

  //events
  //configs
  Ext_list_AbstractTreeItem_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_list_AbstractTreeItem_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "expandable": ["boolean"],
      "expanded": ["boolean"],
      "iconCls": ["string"],
      "iconClsProperty": ["string"],
      "leaf": ["boolean"],
      "loading": ["boolean"],
      "node": ["Ext.data.TreeModel"],
      "over": ["number"],
      "owner": ["Ext.list.Tree"],
      "parentItem": ["Ext.list.AbstractTreeItem"],
      "selected": ["boolean"],
      "selectedParent": ["boolean"],
      "text": ["string"],
      "textProperty": ["string"]
    };
  };

  Ext_list_AbstractTreeItem_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_list_AbstractTreeItem_Component.METHODS = function METHODS() {
    return [{
      name: 'collapse',
      "function": function _function() {
        return this.ext.collapse();
      }
    }, {
      name: 'destroy',
      "function": function _function() {
        return this.ext.destroy();
      }
    }, {
      name: 'doNodeUpdate',
      "function": function _function(node, modifiedFieldNames) {
        return this.ext.doNodeUpdate(node, modifiedFieldNames);
      }
    }, {
      name: 'expand',
      "function": function _function() {
        return this.ext.expand();
      }
    }, {
      name: 'getToolElement',
      "function": function _function() {
        return this.ext.getToolElement();
      }
    }, {
      name: 'insertItem',
      "function": function _function(item, refItem) {
        return this.ext.insertItem(item, refItem);
      }
    }, {
      name: 'isExpanded',
      "function": function _function() {
        return this.ext.isExpanded();
      }
    }, {
      name: 'isSelectionEvent',
      "function": function _function(e) {
        return this.ext.isSelectionEvent(e);
      }
    }, {
      name: 'isToggleEvent',
      "function": function _function(e) {
        return this.ext.isToggleEvent(e);
      }
    }, {
      name: 'nodeCollapse',
      "function": function _function(node, collapsingForExpand) {
        return this.ext.nodeCollapse(node, collapsingForExpand);
      }
    }, {
      name: 'nodeExpand',
      "function": function _function(node) {
        return this.ext.nodeExpand(node);
      }
    }, {
      name: 'nodeInsert',
      "function": function _function(node, refNode) {
        return this.ext.nodeInsert(node, refNode);
      }
    }, {
      name: 'nodeRemove',
      "function": function _function(node) {
        return this.ext.nodeRemove(node);
      }
    }, {
      name: 'nodeUpdate',
      "function": function _function(node, modifiedFieldNames) {
        return this.ext.nodeUpdate(node, modifiedFieldNames);
      }
    }, {
      name: 'onClick',
      "function": function _function(e) {
        return this.ext.onClick(e);
      }
    }, {
      name: 'removeItem',
      "function": function _function(item) {
        return this.ext.removeItem(item);
      }
    }, {
      name: 'setExpandable',
      "function": function _function() {
        return this.ext.setExpandable();
      }
    }, {
      name: 'setExpanded',
      "function": function _function() {
        return this.ext.setExpanded();
      }
    }, {
      name: 'setIconCls',
      "function": function _function() {
        return this.ext.setIconCls();
      }
    }, {
      name: 'setLeaf',
      "function": function _function() {
        return this.ext.setLeaf();
      }
    }, {
      name: 'setLoading',
      "function": function _function() {
        return this.ext.setLoading();
      }
    }, {
      name: 'setNode',
      "function": function _function() {
        return this.ext.setNode();
      }
    }, {
      name: 'setOwner',
      "function": function _function() {
        return this.ext.setOwner();
      }
    }, {
      name: 'setParentItem',
      "function": function _function() {
        return this.ext.setParentItem();
      }
    }, {
      name: 'setText',
      "function": function _function() {
        return this.ext.setText();
      }
    }, {
      name: 'updateOwner',
      "function": function _function(owner) {
        return this.ext.updateOwner(owner);
      }
    }];
  };

  _createClass(Ext_list_AbstractTreeItem_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Widget_Component.observedAttributes;

      for (var property in Ext_list_AbstractTreeItem_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_list_AbstractTreeItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_list_AbstractTreeItem_Component(propertiesobject, methods, events) {
    return _Ext_Widget_Component.call(this, Object.assign(propertiesobject, Ext_list_AbstractTreeItem_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_list_AbstractTreeItem_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_list_AbstractTreeItem_Component.METHODS()), events.concat(Ext_list_AbstractTreeItem_Component.EVENTS())) || this; //this.XTYPE = Ext_list_AbstractTreeItem_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_list_AbstractTreeItem_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_list_AbstractTreeItem_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_list_AbstractTreeItem_Component.EVENTS());
  }

  var _proto = Ext_list_AbstractTreeItem_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Widget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Widget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_list_AbstractTreeItem_Component;
}(Ext_Widget_Component);

export { Ext_list_AbstractTreeItem_Component as default };