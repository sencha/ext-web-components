Ext.require([ 'Ext.froala.EditorField' ]);
import 'froala-editor/css/froala_editor.pkgd.min.css';
import './FroalaEditorComponent.html';

export default class FroalaEditorComponent {
    constructor() {}

    parentFormPanelReady(event) {
      this.parentFormPanelCmp = event.detail.cmp;
      this.parentFormPanelCmp.setButtons({
        ok: {
            text: 'getValues()',
            handler: this.formPanelOkBtnClick
          }
      });
    }

    formPanelOkBtnClick = () => {
      Ext.Msg.alert('getValues()', Ext.JSON.encode(this.parentFormPanelCmp.getValues()));
    }

    onEditorFieldReady = (event) => {
      if (event.detail.cmp) {
        this.editorFieldCmp = event.detail.cmp;
        this.editorFieldCmp.setValue("<p>Four score and seven years ago.</p>");

        this.editorFieldCmp.setListeners({
          'froala.click': (froalaComponent) => { Ext.toast({ message: 'Click!' }); }
        });
      }
    }

    froalaTextChange = (event) => {
      Ext.toast({ message: 'Change!' });
    }
}
