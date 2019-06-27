import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import ExtBase from './base';
export var ExtRenderercellComponent =
/*#__PURE__*/
function (_ExtBase) {
  _inheritsLoose(ExtRenderercellComponent, _ExtBase);

  ExtRenderercellComponent.XTYPE = function XTYPE() {
    return 'renderercell';
  };

  ExtRenderercellComponent.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "renderer": "Number"
    };
  };

  ExtRenderercellComponent.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: ''
    }];
  };

  ExtRenderercellComponent.METHODS = function METHODS() {
    return [{
      name: '_addDeclaredListeners',
      "function": function _function(listeners) {
        return this.ext._addDeclaredListeners(listeners);
      }
    }];
  };

  _createClass(ExtRenderercellComponent, [{
    key: "renderer",
    get: function get() {
      return this.getAttribute('renderer');
    },
    set: function set(renderer) {
      this.setAttribute('renderer', renderer);
    }
  }]);

  function ExtRenderercellComponent() {
    var _this;

    _this = _ExtBase.call(this) || this;
    _this.METHODS = ExtRenderercellComponent.METHODS();
    _this.XTYPE = ExtRenderercellComponent.XTYPE(); //this.PROPERTIES = ExtRenderercellComponent.PROPERTIES()

    _this.PROPERTIESOBJECT = ExtRenderercellComponent.PROPERTIESOBJECT();
    _this.EVENTS = ExtRenderercellComponent.EVENTS();
    return _this;
  }

  var _proto = ExtRenderercellComponent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _ExtBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _ExtBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return ExtRenderercellComponent;
}(ExtBase);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-renderercell', ExtRenderercellComponent);
  });
})();