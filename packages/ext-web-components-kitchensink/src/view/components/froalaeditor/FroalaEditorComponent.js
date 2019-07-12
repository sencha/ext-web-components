import './FroalaEditorComponent.html';

Ext.require(['Ext.froala.EditorField']);

export default class FroalaEditorComponent {
    constructor(){
        this.html = '<p>Four score and seven years ago.</p>';
    }
    onReadyPanel = (event) => {
        const panelCmp = event.detail.cmp;
        const tbar = {
            xtype: 'label',
            bind: {
                html: this.html.bind(this)
            }
        };
        panelCmp.setTbar(tbar);
    }
    onTitlebarReady = (event) => {
        const titlebarCmp = event.detail.cmp;
        titlebarCmp.setHtml(this.html);
    }
    encodedHtml = (event) => {
        console.log(event.detail.cmp);
        // return Ext.htmlEncode(get('html'));
    }
}
