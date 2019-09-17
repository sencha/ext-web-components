import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../Ext/Container';

var Ext_Toolbar_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_Toolbar_Component, _Ext_Container_Compon);

  //events
  //configs
  Ext_Toolbar_Component.XTYPE = function XTYPE() {
    return 'toolbar';
  };

  Ext_Toolbar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "defaultButtonUI": ["string"],
      "defaultType": ["string"],
      "docked": ["string"],
      "layout": ["object", "string"],
      "minHeight": ["number", "string"],
      "title": ["string", "Ext.Title"]
    };
  };

  Ext_Toolbar_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Toolbar_Component.METHODS = function METHODS() {
    return [{
      name: 'applyTitle',
      "function": function _function(title) {
        return this.ext.applyTitle(title);
      }
    }, {
      name: 'getTitle',
      "function": function _function() {
        return this.ext.getTitle();
      }
    }, {
      name: 'hideTitle',
      "function": function _function() {
        return this.ext.hideTitle();
      }
    }, {
      name: 'setTitle',
      "function": function _function(title) {
        return this.ext.setTitle(title);
      }
    }, {
      name: 'showTitle',
      "function": function _function() {
        return this.ext.showTitle();
      }
    }, {
      name: 'updateTitle',
      "function": function _function(newTitle, oldTitle) {
        return this.ext.updateTitle(newTitle, oldTitle);
      }
    }];
  };

  _createClass(Ext_Toolbar_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_Toolbar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Toolbar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Toolbar_Component(propertiesobject, methods, events) {
    return _Ext_Container_Compon.call(this, Object.assign(propertiesobject, Ext_Toolbar_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Toolbar_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Toolbar_Component.METHODS()), events.concat(Ext_Toolbar_Component.EVENTS())) || this; //this.XTYPE = Ext_Toolbar_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Toolbar_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Toolbar_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Toolbar_Component.EVENTS());
  }

  var _proto = Ext_Toolbar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Toolbar_Component;
}(Ext_Container_Component);

export { Ext_Toolbar_Component as default };