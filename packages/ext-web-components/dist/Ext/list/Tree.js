import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget_Component from '../../Ext/Gadget';

var Ext_list_Tree_Component =
/*#__PURE__*/
function (_Ext_Gadget_Component) {
  _inheritsLoose(Ext_list_Tree_Component, _Ext_Gadget_Component);

  //configs
  Ext_list_Tree_Component.XTYPE = function XTYPE() {
    return 'treelist';
  };

  Ext_list_Tree_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "defaults": ["object"],
      "expanderFirst": ["boolean"],
      "expanderOnly": ["boolean"],
      "floatLeafItems": ["boolean"],
      "highlightPath": ["boolean"],
      "indent": ["number"],
      "micro": ["boolean"],
      "publishes": ["string", "string[]", "object"],
      "selection": ["Ext.data.TreeModel", "number", "string"],
      "selectOnExpander": ["boolean"],
      "singleExpand": ["boolean"],
      "store": ["string", "object", "Ext.data.TreeStore"],
      "twoWayBindable": ["string", "string[]", "object"],
      "ui": ["string", "string[]"]
    };
  };

  Ext_list_Tree_Component.EVENTS = function EVENTS() {
    return [{
      name: 'itemclick',
      parameters: 'sender,info'
    }, {
      name: 'selectionchange',
      parameters: 'treelist,record'
    }];
  };

  Ext_list_Tree_Component.METHODS = function METHODS() {
    return [{
      name: 'createItem',
      "function": function _function(node, parent) {
        return this.ext.createItem(node, parent);
      }
    }, {
      name: 'createRootItem',
      "function": function _function(root) {
        return this.ext.createRootItem(root);
      }
    }, {
      name: 'getItem',
      "function": function _function(node) {
        return this.ext.getItem(node);
      }
    }, {
      name: 'getItemConfig',
      "function": function _function(node, parent) {
        return this.ext.getItemConfig(node, parent);
      }
    }, {
      name: 'onClick',
      "function": function _function(e) {
        return this.ext.onClick(e);
      }
    }, {
      name: 'onNodeAppend',
      "function": function _function(parentNode, node) {
        return this.ext.onNodeAppend(parentNode, node);
      }
    }, {
      name: 'onNodeCollapse',
      "function": function _function(node) {
        return this.ext.onNodeCollapse(node);
      }
    }, {
      name: 'onNodeExpand',
      "function": function _function(node) {
        return this.ext.onNodeExpand(node);
      }
    }, {
      name: 'onNodeInsert',
      "function": function _function(parentNode, node, refNode) {
        return this.ext.onNodeInsert(parentNode, node, refNode);
      }
    }, {
      name: 'onNodeRemove',
      "function": function _function(parentNode, node, isMove) {
        return this.ext.onNodeRemove(parentNode, node, isMove);
      }
    }, {
      name: 'onNodeUpdate',
      "function": function _function(store, node, type, modifiedFieldNames) {
        return this.ext.onNodeUpdate(store, node, type, modifiedFieldNames);
      }
    }, {
      name: 'onRefresh',
      "function": function _function(store) {
        return this.ext.onRefresh(store);
      }
    }, {
      name: 'onRootChange',
      "function": function _function(root) {
        return this.ext.onRootChange(root);
      }
    }, {
      name: 'onToolStripClick',
      "function": function _function(e) {
        return this.ext.onToolStripClick(e);
      }
    }, {
      name: 'onToolStripMouseOver',
      "function": function _function(e) {
        return this.ext.onToolStripMouseOver(e);
      }
    }, {
      name: 'removeItem',
      "function": function _function(node) {
        return this.ext.removeItem(node);
      }
    }];
  };

  _createClass(Ext_list_Tree_Component, [{
    key: "onitemclick",
    //events
    get: function get() {
      return this.getAttribute('onitemclick');
    },
    set: function set(onitemclick) {
      this.setAttribute('onitemclick', onitemclick);
    }
  }, {
    key: "onselectionchange",
    get: function get() {
      return this.getAttribute('onselectionchange');
    },
    set: function set(onselectionchange) {
      this.setAttribute('onselectionchange', onselectionchange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget_Component.observedAttributes;

      for (var property in Ext_list_Tree_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_list_Tree_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_list_Tree_Component(propertiesobject, methods, events) {
    return _Ext_Gadget_Component.call(this, Object.assign(propertiesobject, Ext_list_Tree_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_list_Tree_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_list_Tree_Component.METHODS()), events.concat(Ext_list_Tree_Component.EVENTS())) || this; //this.XTYPE = Ext_list_Tree_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_list_Tree_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_list_Tree_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_list_Tree_Component.EVENTS());
  }

  var _proto = Ext_list_Tree_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_list_Tree_Component;
}(Ext_Gadget_Component);

export { Ext_list_Tree_Component as default };