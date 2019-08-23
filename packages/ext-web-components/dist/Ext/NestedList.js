import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../Ext/Container';

var Ext_NestedList_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_NestedList_Component, _Ext_Container_Compon);

  //configs
  Ext_NestedList_Component.XTYPE = function XTYPE() {
    return 'nestedlist';
  };

  Ext_NestedList_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "allowDeselect": ["boolean"],
      "backButton": ["object"],
      "backText": ["string"],
      "cardSwitchAnimation": ["string", "object", "boolean"],
      "detailCard": ["Ext.Component"],
      "detailContainer": ["Ext.Container"],
      "displayField": ["string"],
      "emptyText": ["string"],
      "lastActiveList": ["any"],
      "lastNode": ["any"],
      "layout": ["string"],
      "listConfig": ["object"],
      "loadingText": ["string"],
      "onItemDisclosure": ["boolean", "function"],
      "store": ["Ext.data.TreeStore", "string"],
      "title": ["string"],
      "toolbar": ["Ext.Toolbar", "object", "boolean"],
      "updateTitleText": ["boolean"],
      "useTitleAsBackText": ["boolean"],
      "variableHeights": ["boolean"]
    };
  };

  Ext_NestedList_Component.EVENTS = function EVENTS() {
    return [{
      name: 'back',
      parameters: 'undefined,node,lastActiveList,detailCardActive'
    }, {
      name: 'beforeload',
      parameters: 'undefined,store,operation'
    }, {
      name: 'beforeselectionchange',
      parameters: 'undefined,list,node,selections'
    }, {
      name: 'containertap',
      parameters: 'undefined,list,e'
    }, {
      name: 'deselect',
      parameters: 'undefined,list,selections'
    }, {
      name: 'itemdoubletap',
      parameters: 'undefined,list,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'undefined,list,index,target,record,e'
    }, {
      name: 'leafitemtap',
      parameters: 'undefined,list,index,target,record,e'
    }, {
      name: 'listchange',
      parameters: 'undefined,listitem'
    }, {
      name: 'load',
      parameters: 'undefined,store,records,successful,operation'
    }, {
      name: 'select',
      parameters: 'undefined,list,selections'
    }, {
      name: 'selectionchange',
      parameters: 'undefined,list,selections'
    }];
  };

  Ext_NestedList_Component.METHODS = function METHODS() {
    return [{
      name: 'getItemTextTpl',
      "function": function _function(node) {
        return this.ext.getItemTextTpl(node);
      }
    }, {
      name: 'getList',
      "function": function _function(node) {
        return this.ext.getList(node);
      }
    }, {
      name: 'getTitleTextTpl',
      "function": function _function(node) {
        return this.ext.getTitleTextTpl(node);
      }
    }, {
      name: 'goToLeaf',
      "function": function _function(node) {
        return this.ext.goToLeaf(node);
      }
    }, {
      name: 'goToNode',
      "function": function _function(node) {
        return this.ext.goToNode(node);
      }
    }, {
      name: 'goToNodeReverseAnimation',
      "function": function _function(node) {
        return this.ext.goToNodeReverseAnimation(node);
      }
    }, {
      name: 'onBackTap',
      "function": function _function() {
        return this.ext.onBackTap();
      }
    }, {
      name: 'onChildTap',
      "function": function _function(list, location) {
        return this.ext.onChildTap(list, location);
      }
    }, {
      name: 'renderTitleText',
      "function": function _function(node, forBackButton) {
        return this.ext.renderTitleText(node, forBackButton);
      }
    }, {
      name: 'setToolbarTitle',
      "function": function _function(newTitle) {
        return this.ext.setToolbarTitle(newTitle);
      }
    }, {
      name: 'syncToolbar',
      "function": function _function(forceDetail) {
        return this.ext.syncToolbar(forceDetail);
      }
    }];
  };

  _createClass(Ext_NestedList_Component, [{
    key: "onback",
    //events
    get: function get() {
      return this.getAttribute('onback');
    },
    set: function set(onback) {
      this.setAttribute('onback', onback);
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
    key: "onbeforeselectionchange",
    get: function get() {
      return this.getAttribute('onbeforeselectionchange');
    },
    set: function set(onbeforeselectionchange) {
      this.setAttribute('onbeforeselectionchange', onbeforeselectionchange);
    }
  }, {
    key: "oncontainertap",
    get: function get() {
      return this.getAttribute('oncontainertap');
    },
    set: function set(oncontainertap) {
      this.setAttribute('oncontainertap', oncontainertap);
    }
  }, {
    key: "ondeselect",
    get: function get() {
      return this.getAttribute('ondeselect');
    },
    set: function set(ondeselect) {
      this.setAttribute('ondeselect', ondeselect);
    }
  }, {
    key: "onitemdoubletap",
    get: function get() {
      return this.getAttribute('onitemdoubletap');
    },
    set: function set(onitemdoubletap) {
      this.setAttribute('onitemdoubletap', onitemdoubletap);
    }
  }, {
    key: "onitemtap",
    get: function get() {
      return this.getAttribute('onitemtap');
    },
    set: function set(onitemtap) {
      this.setAttribute('onitemtap', onitemtap);
    }
  }, {
    key: "onleafitemtap",
    get: function get() {
      return this.getAttribute('onleafitemtap');
    },
    set: function set(onleafitemtap) {
      this.setAttribute('onleafitemtap', onleafitemtap);
    }
  }, {
    key: "onlistchange",
    get: function get() {
      return this.getAttribute('onlistchange');
    },
    set: function set(onlistchange) {
      this.setAttribute('onlistchange', onlistchange);
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
    key: "onselect",
    get: function get() {
      return this.getAttribute('onselect');
    },
    set: function set(onselect) {
      this.setAttribute('onselect', onselect);
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
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_NestedList_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_NestedList_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_NestedList_Component() {
    var _this;

    _this = _Ext_Container_Compon.call(this, Ext_NestedList_Component.METHODS(), Ext_NestedList_Component.XTYPE(), Ext_NestedList_Component.PROPERTIESOBJECT(), Ext_NestedList_Component.EVENTS()) || this;
    _this.XTYPE = Ext_NestedList_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_NestedList_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_NestedList_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_NestedList_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_NestedList_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_NestedList_Component;
}(Ext_Container_Component);

export { Ext_NestedList_Component as default };