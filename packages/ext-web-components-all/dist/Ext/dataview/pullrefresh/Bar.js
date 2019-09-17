import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_pullrefresh_Item_Component from '../../../Ext/dataview/pullrefresh/Item';

var Ext_dataview_pullrefresh_Bar_Component =
/*#__PURE__*/
function (_Ext_dataview_pullref) {
  _inheritsLoose(Ext_dataview_pullrefresh_Bar_Component, _Ext_dataview_pullref);

  //events
  //configs
  Ext_dataview_pullrefresh_Bar_Component.XTYPE = function XTYPE() {
    return 'pullrefreshbar';
  };

  Ext_dataview_pullrefresh_Bar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "lastUpdatedDateFormat": ["string"],
      "lastUpdatedText": ["string"],
      "loadedText": ["string"],
      "loadingText": ["string"],
      "mode": ["'message'", "'spinner'"],
      "pullText": ["string"],
      "releaseText": ["string"]
    };
  };

  Ext_dataview_pullrefresh_Bar_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_dataview_pullrefresh_Bar_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_dataview_pullrefresh_Bar_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_pullref.observedAttributes;

      for (var property in Ext_dataview_pullrefresh_Bar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_pullrefresh_Bar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_pullrefresh_Bar_Component() {
    var _this;

    _this = _Ext_dataview_pullref.call(this) || this;
    _this.XTYPE = Ext_dataview_pullrefresh_Bar_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_dataview_pullrefresh_Bar_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_dataview_pullrefresh_Bar_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_dataview_pullrefresh_Bar_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_dataview_pullrefresh_Bar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_pullref.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_pullref.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_pullrefresh_Bar_Component;
}(Ext_dataview_pullrefresh_Item_Component);

export { Ext_dataview_pullrefresh_Bar_Component as default };