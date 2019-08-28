import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Panel_Component from '../../Ext/field/Panel';

var Ext_form_FormPanel_Component =
/*#__PURE__*/
function (_Ext_field_Panel_Comp) {
  _inheritsLoose(Ext_form_FormPanel_Component, _Ext_field_Panel_Comp);

  //configs
  Ext_form_FormPanel_Component.XTYPE = function XTYPE() {
    return 'formpanel';
  };

  Ext_form_FormPanel_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "enableSubmissionForm": ["boolean"],
      "enctype": ["string"],
      "fieldDefaults": ["object"],
      "jsonSubmit": ["boolean"],
      "method": ["string"],
      "multipartDetection": ["boolean"],
      "standardSubmit": ["boolean"],
      "submitOnAction": ["object"],
      "trackResetOnLoad": ["boolean"]
    };
  };

  Ext_form_FormPanel_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforesubmit',
      parameters: 'undefined,values,options,e'
    }, {
      name: 'submit',
      parameters: 'undefined,result,e'
    }];
  };

  Ext_form_FormPanel_Component.METHODS = function METHODS() {
    return [{
      name: 'applyExtraParams',
      "function": function _function(options) {
        return this.ext.applyExtraParams(options);
      }
    }, {
      name: 'beforeAjaxSubmit',
      "function": function _function(form, options, successFn, failureFn) {
        return this.ext.beforeAjaxSubmit(form, options, successFn, failureFn);
      }
    }, {
      name: 'beforeDirectSubmit',
      "function": function _function(api, form, options, successFn, failureFn) {
        return this.ext.beforeDirectSubmit(api, form, options, successFn, failureFn);
      }
    }, {
      name: 'beforeStandardSubmit',
      "function": function _function(form, options) {
        return this.ext.beforeStandardSubmit(form, options);
      }
    }, {
      name: 'createSubmissionForm',
      "function": function _function(form, values) {
        return this.ext.createSubmissionForm(form, values);
      }
    }, {
      name: 'doBeforeSubmit',
      "function": function _function(me, formValues, options) {
        return this.ext.doBeforeSubmit(me, formValues, options);
      }
    }, {
      name: 'initialize',
      "function": function _function() {
        return this.ext.initialize();
      }
    }, {
      name: 'onFieldAction',
      "function": function _function(field) {
        return this.ext.onFieldAction(field);
      }
    }, {
      name: 'onSubmit',
      "function": function _function(event) {
        return this.ext.onSubmit(event);
      }
    }, {
      name: 'submit',
      "function": function _function(options, e) {
        return this.ext.submit(options, e);
      }
    }];
  };

  _createClass(Ext_form_FormPanel_Component, [{
    key: "onbeforesubmit",
    //events
    get: function get() {
      return this.getAttribute('onbeforesubmit');
    },
    set: function set(onbeforesubmit) {
      this.setAttribute('onbeforesubmit', onbeforesubmit);
    }
  }, {
    key: "onsubmit",
    get: function get() {
      return this.getAttribute('onsubmit');
    },
    set: function set(onsubmit) {
      this.setAttribute('onsubmit', onsubmit);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Panel_Comp.observedAttributes;

      for (var property in Ext_form_FormPanel_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_form_FormPanel_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_FormPanel_Component() {
    var _this;

    _this = _Ext_field_Panel_Comp.call(this, Ext_form_FormPanel_Component.METHODS(), Ext_form_FormPanel_Component.XTYPE(), Ext_form_FormPanel_Component.PROPERTIESOBJECT(), Ext_form_FormPanel_Component.EVENTS()) || this;
    _this.XTYPE = Ext_form_FormPanel_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_form_FormPanel_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_form_FormPanel_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_form_FormPanel_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_form_FormPanel_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Panel_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Panel_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_FormPanel_Component;
}(Ext_field_Panel_Component);

export { Ext_form_FormPanel_Component as default };