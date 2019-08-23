import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Cell_Component from '../../../Ext/grid/cell/Cell';

var Ext_grid_cell_Tree_Component =
/*#__PURE__*/
function (_Ext_grid_cell_Cell_C) {
  _inheritsLoose(Ext_grid_cell_Tree_Component, _Ext_grid_cell_Cell_C);

  //configs
  Ext_grid_cell_Tree_Component.XTYPE = function XTYPE() {
    return 'treecell';
  };

  Ext_grid_cell_Tree_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "autoCheckChildren": ["boolean"],
      "checkable": ["boolean"],
      "checkableField": ["string"],
      "checkedField": ["string"],
      "checkOnTriTap": ["boolean"],
      "enableTri": ["boolean"],
      "iconCls": ["string"],
      "iconClsProperty": ["string"],
      "text": ["string"],
      "toolDefaults": ["object"]
    };
  };

  Ext_grid_cell_Tree_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforecheckchange',
      parameters: 'undefined,checked,current,record,e'
    }, {
      name: 'checkchange',
      parameters: 'undefined,checked,record,e'
    }];
  };

  Ext_grid_cell_Tree_Component.METHODS = function METHODS() {
    return [{
      name: 'collapse',
      "function": function _function() {
        return this.ext.collapse();
      }
    }, {
      name: 'doNodeUpdate',
      "function": function _function(record) {
        return this.ext.doNodeUpdate(record);
      }
    }, {
      name: 'expand',
      "function": function _function() {
        return this.ext.expand();
      }
    }, {
      name: 'maybeToggle',
      "function": function _function(e) {
        return this.ext.maybeToggle(e);
      }
    }, {
      name: 'toggle',
      "function": function _function() {
        return this.ext.toggle();
      }
    }];
  };

  _createClass(Ext_grid_cell_Tree_Component, [{
    key: "onbeforecheckchange",
    //events
    get: function get() {
      return this.getAttribute('onbeforecheckchange');
    },
    set: function set(onbeforecheckchange) {
      this.setAttribute('onbeforecheckchange', onbeforecheckchange);
    }
  }, {
    key: "oncheckchange",
    get: function get() {
      return this.getAttribute('oncheckchange');
    },
    set: function set(oncheckchange) {
      this.setAttribute('oncheckchange', oncheckchange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Cell_C.observedAttributes;

      for (var property in Ext_grid_cell_Tree_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_cell_Tree_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_cell_Tree_Component() {
    var _this;

    _this = _Ext_grid_cell_Cell_C.call(this, Ext_grid_cell_Tree_Component.METHODS(), Ext_grid_cell_Tree_Component.XTYPE(), Ext_grid_cell_Tree_Component.PROPERTIESOBJECT(), Ext_grid_cell_Tree_Component.EVENTS()) || this;
    _this.XTYPE = Ext_grid_cell_Tree_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_cell_Tree_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_grid_cell_Tree_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_grid_cell_Tree_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_cell_Tree_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Cell_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Cell_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_cell_Tree_Component;
}(Ext_grid_cell_Cell_Component);

export { Ext_grid_cell_Tree_Component as default };