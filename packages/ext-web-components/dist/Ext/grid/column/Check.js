import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Column_Component from '../../../Ext/grid/column/Column';

var Ext_grid_column_Check_Component =
/*#__PURE__*/
function (_Ext_grid_column_Colu) {
  _inheritsLoose(Ext_grid_column_Check_Component, _Ext_grid_column_Colu);

  //configs
  Ext_grid_column_Check_Component.XTYPE = function XTYPE() {
    return 'checkcolumn';
  };

  Ext_grid_column_Check_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "align": ["string"],
      "cell": ["object"],
      "headerCheckbox": ["boolean"],
      "headerCheckboxAlign": ["'top'", "'right'", "'bottom'", "'left'"],
      "ignoreExport": ["boolean"],
      "stopSelection": ["boolean"],
      "text": ["string"]
    };
  };

  Ext_grid_column_Check_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforecheckchange',
      parameters: 'undefined,rowIndex,checked,record,e'
    }, {
      name: 'checkchange',
      parameters: 'undefined,rowIndex,checked,record,e'
    }];
  };

  Ext_grid_column_Check_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_column_Check_Component, [{
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
      var attrs = _Ext_grid_column_Colu.observedAttributes;

      for (var property in Ext_grid_column_Check_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_column_Check_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_column_Check_Component() {
    var _this;

    _this = _Ext_grid_column_Colu.call(this, Ext_grid_column_Check_Component.METHODS(), Ext_grid_column_Check_Component.XTYPE(), Ext_grid_column_Check_Component.PROPERTIESOBJECT(), Ext_grid_column_Check_Component.EVENTS()) || this;
    _this.XTYPE = Ext_grid_column_Check_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_column_Check_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_grid_column_Check_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_grid_column_Check_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_column_Check_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_column_Colu.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_column_Colu.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_column_Check_Component;
}(Ext_grid_column_Column_Component);

export { Ext_grid_column_Check_Component as default };