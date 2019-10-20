import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Media from './Ext/Media.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtMedia =
/*#__PURE__*/
function (_Ext_Media) {
  _inheritsLoose(ExtMedia, _Ext_Media);

  function ExtMedia() {
    var _this;

    _this = _Ext_Media.call(this, [], []) || this;
    _this.xtype = 'media';
    return _this;
  }

  return ExtMedia;
}(Ext_Media); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-media', ExtMedia);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtMedia as default };
window.customElements.define('ext-media', HTMLParsedElement.withParsedCallback(ExtMedia)); //export default reactify(ExtMedia);