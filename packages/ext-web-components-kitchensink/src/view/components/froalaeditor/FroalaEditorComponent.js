Ext.require([ 'Ext.froala.EditorField' ]);
import './FroalaEditorComponent.html';

export default class FroalaEditorComponent {
    constructor() {}

    onTopLabelReady(event) {
      this.formPanelTopLabelCmp = event.detail.cmp;
    }

    onEditorFieldReady(event) {
      this.editorFieldCmp = event.detail.cmp;
    }

    onBottomLabelReady(event) {
      this.bottomLabelCmp = event.detail.cmp;
    }
}
