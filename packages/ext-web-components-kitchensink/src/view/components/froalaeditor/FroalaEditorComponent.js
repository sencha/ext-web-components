Ext.require([ 'Ext.froala.EditorField' ]);
import 'froala-editor/css/froala_editor.pkgd.min.css';
import './FroalaEditorComponent.html';

export default class FroalaEditorComponent {
    constructor() {
      this.value='<p>Four score and seven years ago.</p>';
    }

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

    onTopLabelReady = (event) => {
      this.formPanelTopLabelCmp = event.detail.cmp;
      this.formPanelTopLabelCmp.setHtml(this.value);
    }

    onEditorFieldReady = (event) => {
      if (event.detail.cmp) {
        this.editorFieldCmp = event.detail.cmp;
        this.editorFieldCmp.setValue(this.value);

        this.editorFieldCmp.setListeners({
          'froala.click': (froalaComponent) => { Ext.toast({ message: 'Click!' }); }
        });
      }
    }

    onBottomLabelReady = (event) => {
      this.formPanelBottomLabelCmp = event.detail.cmp;
      this.formPanelBottomLabelCmp.setHtml(Ext.htmlEncode(this.value));
    }

    froalaTextChange = (event) => {
      this.value = event.detail.the;
      this.formPanelBottomLabelCmp.setHtml(Ext.htmlEncode(this.value));
      this.formPanelTopLabelCmp.setHtml(this.value);
      Ext.toast({ message: 'Change!' });
    }
}
