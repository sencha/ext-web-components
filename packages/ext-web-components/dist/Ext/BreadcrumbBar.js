import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Toolbar_Component from '../Ext/Toolbar';

var Ext_BreadcrumbBar_Component =
/*#__PURE__*/
function (_Ext_Toolbar_Componen) {
  _inheritsLoose(Ext_BreadcrumbBar_Component, _Ext_Toolbar_Componen);

  //configs
  Ext_BreadcrumbBar_Component.XTYPE = function XTYPE() {
    return 'breadcrumbbar';
  };

  Ext_BreadcrumbBar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "btnCls": ["string"],
      "buttonConfig": ["object"],
      "buttonUI": ["string"],
      "displayField": ["string"],
      "menu": ["Ext.menu.Menu", "boolean", "object"],
      "publishes": ["string", "string[]", "object"],
      "selection": ["Ext.data.TreeModel", "string"],
      "showIcons": ["boolean"],
      "showMenuIcons": ["boolean"],
      "store": ["Ext.data.TreeStore"],
      "twoWayBindable": ["string", "string[]", "object"],
      "useSplitButtons": ["boolean"]
    };
  };

  Ext_BreadcrumbBar_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,node,prevNode'
    }, {
      name: 'selectionchange',
      parameters: 'undefined,node,prevNode'
    }];
  };

  Ext_BreadcrumbBar_Component.METHODS = function METHODS() {
    return [{
      name: 'getMenuItems',
      "function": function _function(nodeId) {
        return this.ext.getMenuItems(nodeId);
      }
    }, {
      name: 'getSelection',
      "function": function _function() {
        return this.ext.getSelection();
      }
    }, {
      name: 'handleMenu',
      "function": function _function(buttons, refreshMenuItems, forceCreate) {
        return this.ext.handleMenu(buttons, refreshMenuItems, forceCreate);
      }
    }, {
      name: 'onButtonTap',
      "function": function _function(button, e) {
        return this.ext.onButtonTap(button, e);
      }
    }, {
      name: 'onMenuClick',
      "function": function _function(menu, item, e) {
        return this.ext.onMenuClick(menu, item, e);
      }
    }, {
      name: 'onStoreClear',
      "function": function _function() {
        return this.ext.onStoreClear();
      }
    }, {
      name: 'onStoreDataChange',
      "function": function _function() {
        return this.ext.onStoreDataChange();
      }
    }, {
      name: 'removeAllBreadcrumbButtons',
      "function": function _function() {
        return this.ext.removeAllBreadcrumbButtons();
      }
    }, {
      name: 'setSelection',
      "function": function _function(node) {
        return this.ext.setSelection(node);
      }
    }, {
      name: 'updateButtonOnDataChange',
      "function": function _function() {
        return this.ext.updateButtonOnDataChange();
      }
    }];
  };

  _createClass(Ext_BreadcrumbBar_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
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
      var attrs = _Ext_Toolbar_Componen.observedAttributes;

      for (var property in Ext_BreadcrumbBar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_BreadcrumbBar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_BreadcrumbBar_Component(propertiesobject, methods, events) {
    return _Ext_Toolbar_Componen.call(this, Object.assign(propertiesobject, Ext_BreadcrumbBar_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_BreadcrumbBar_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_BreadcrumbBar_Component.METHODS()), events.concat(Ext_BreadcrumbBar_Component.EVENTS())) || this; //this.XTYPE = Ext_BreadcrumbBar_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_BreadcrumbBar_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_BreadcrumbBar_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_BreadcrumbBar_Component.EVENTS());
  }

  var _proto = Ext_BreadcrumbBar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Toolbar_Componen.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Toolbar_Componen.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_BreadcrumbBar_Component;
}(Ext_Toolbar_Component);

export { Ext_BreadcrumbBar_Component as default };