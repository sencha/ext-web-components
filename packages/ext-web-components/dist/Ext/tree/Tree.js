import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Grid_Component from '../../Ext/grid/Grid';

var Ext_tree_Tree_Component =
/*#__PURE__*/
function (_Ext_grid_Grid_Compon) {
  _inheritsLoose(Ext_tree_Tree_Component, _Ext_grid_Grid_Compon);

  //configs
  Ext_tree_Tree_Component.XTYPE = function XTYPE() {
    return 'tree';
  };

  Ext_tree_Tree_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "expanderFirst": ["boolean"],
      "expanderOnly": ["boolean"],
      "folderSort": ["boolean"],
      "selectOnExpander": ["boolean"],
      "singleExpand": ["boolean"]
    };
  };

  Ext_tree_Tree_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforecheckchange',
      parameters: 'undefined,checked,current,record,e'
    }, {
      name: 'beforeload',
      parameters: 'store,operation'
    }, {
      name: 'beforenodecollapse',
      parameters: 'node,record'
    }, {
      name: 'beforenodeexpand',
      parameters: 'row,record'
    }, {
      name: 'checkchange',
      parameters: 'cell,checked,record,e'
    }, {
      name: 'load',
      parameters: 'undefined,records,successful,operation,node'
    }, {
      name: 'nodecollapse',
      parameters: 'node,record'
    }, {
      name: 'nodeexpand',
      parameters: 'row,record'
    }];
  };

  Ext_tree_Tree_Component.METHODS = function METHODS() {
    return [{
      name: 'collapseAll',
      "function": function _function(callback, scope) {
        return this.ext.collapseAll(callback, scope);
      }
    }, {
      name: 'collapseNode',
      "function": function _function(record, deep, callback, scope) {
        return this.ext.collapseNode(record, deep, callback, scope);
      }
    }, {
      name: 'expandAll',
      "function": function _function(callback, scope) {
        return this.ext.expandAll(callback, scope);
      }
    }, {
      name: 'expandNode',
      "function": function _function(record, deep, callback, scope) {
        return this.ext.expandNode(record, deep, callback, scope);
      }
    }, {
      name: 'getChecked',
      "function": function _function() {
        return this.ext.getChecked();
      }
    }, {
      name: 'getCheckedChildItems',
      "function": function _function(childNodes, checked) {
        return this.ext.getCheckedChildItems(childNodes, checked);
      }
    }, {
      name: 'getRootNode',
      "function": function _function() {
        return this.ext.getRootNode();
      }
    }, {
      name: 'setRootNode',
      "function": function _function(root) {
        return this.ext.setRootNode(root);
      }
    }];
  };

  _createClass(Ext_tree_Tree_Component, [{
    key: "onbeforecheckchange",
    //events
    get: function get() {
      return this.getAttribute('onbeforecheckchange');
    },
    set: function set(onbeforecheckchange) {
      this.setAttribute('onbeforecheckchange', onbeforecheckchange);
    }
  }, {
    key: "onbeforeload",
    get: function get() {
      return this.getAttribute('onbeforeload');
    },
    set: function set(onbeforeload) {
      this.setAttribute('onbeforeload', onbeforeload);
    }
  }, {
    key: "onbeforenodecollapse",
    get: function get() {
      return this.getAttribute('onbeforenodecollapse');
    },
    set: function set(onbeforenodecollapse) {
      this.setAttribute('onbeforenodecollapse', onbeforenodecollapse);
    }
  }, {
    key: "onbeforenodeexpand",
    get: function get() {
      return this.getAttribute('onbeforenodeexpand');
    },
    set: function set(onbeforenodeexpand) {
      this.setAttribute('onbeforenodeexpand', onbeforenodeexpand);
    }
  }, {
    key: "oncheckchange",
    get: function get() {
      return this.getAttribute('oncheckchange');
    },
    set: function set(oncheckchange) {
      this.setAttribute('oncheckchange', oncheckchange);
    }
  }, {
    key: "onload",
    get: function get() {
      return this.getAttribute('onload');
    },
    set: function set(onload) {
      this.setAttribute('onload', onload);
    }
  }, {
    key: "onnodecollapse",
    get: function get() {
      return this.getAttribute('onnodecollapse');
    },
    set: function set(onnodecollapse) {
      this.setAttribute('onnodecollapse', onnodecollapse);
    }
  }, {
    key: "onnodeexpand",
    get: function get() {
      return this.getAttribute('onnodeexpand');
    },
    set: function set(onnodeexpand) {
      this.setAttribute('onnodeexpand', onnodeexpand);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_Grid_Compon.observedAttributes;

      for (var property in Ext_tree_Tree_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_tree_Tree_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_tree_Tree_Component(propertiesobject, methods, events) {
    return _Ext_grid_Grid_Compon.call(this, Object.assign(propertiesobject, Ext_tree_Tree_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_tree_Tree_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_tree_Tree_Component.METHODS()), events.concat(Ext_tree_Tree_Component.EVENTS())) || this; //this.XTYPE = Ext_tree_Tree_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_tree_Tree_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_tree_Tree_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_tree_Tree_Component.EVENTS());
  }

  var _proto = Ext_tree_Tree_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_Grid_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_Grid_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_tree_Tree_Component;
}(Ext_grid_Grid_Component);

export { Ext_tree_Tree_Component as default };