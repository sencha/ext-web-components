import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Media_Component from '../Ext/Media';

var Ext_Video_Component =
/*#__PURE__*/
function (_Ext_Media_Component) {
  _inheritsLoose(Ext_Video_Component, _Ext_Media_Component);

  //events
  //configs
  Ext_Video_Component.XTYPE = function XTYPE() {
    return 'video';
  };

  Ext_Video_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "posterUrl": ["string"],
      "showPosterOnPause": ["boolean"],
      "url": ["string", "array"]
    };
  };

  Ext_Video_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Video_Component.METHODS = function METHODS() {
    return [{
      name: 'onGhostTap',
      "function": function _function() {
        return this.ext.onGhostTap();
      }
    }, {
      name: 'onPause',
      "function": function _function(e) {
        return this.ext.onPause(e);
      }
    }, {
      name: 'onPlay',
      "function": function _function(e) {
        return this.ext.onPlay(e);
      }
    }, {
      name: 'updatePosterUrl',
      "function": function _function(newUrl) {
        return this.ext.updatePosterUrl(newUrl);
      }
    }];
  };

  _createClass(Ext_Video_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Media_Component.observedAttributes;

      for (var property in Ext_Video_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Video_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Video_Component(propertiesobject, methods, events) {
    return _Ext_Media_Component.call(this, Object.assign(propertiesobject, Ext_Video_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Video_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Video_Component.METHODS()), events.concat(Ext_Video_Component.EVENTS())) || this; //this.XTYPE = Ext_Video_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Video_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Video_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Video_Component.EVENTS());
  }

  var _proto = Ext_Video_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Media_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Media_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Video_Component;
}(Ext_Media_Component);

export { Ext_Video_Component as default };