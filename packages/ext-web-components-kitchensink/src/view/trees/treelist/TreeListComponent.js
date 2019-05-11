import './TreeListComponent.html';
import data from './data';

export default class TreeListComponent {
    constructor() {
        this.micro = false;
        this.ui='nav';
        this.nav=true;
    }

    onPanelReady = (event) => {
        this.panel = event.detail.cmp;
        const isPhone = Ext.os.is.Phone;
        const top = !isPhone ? '10' : null;
        const left = !isPhone ? '10' : null;
        const width = !isPhone ? '400' : null;
        const height = !isPhone ? '600' : null;

        this.panel.setTop(top);
        this.panel.setLeft(left);
        this.panel.setWidth(width);
        this.panel.setHeight(height);
    }

    onTreeListReady = (event) => {
        this.tree = event.detail.cmp;
        this.store = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: data
        });
        this.tree.setStore(this.store);
    }

    onButtonReady1 = (event) => {
        this.button1 = event.detail.cmp;
        this.button1.setPressed(true);
    }

    onButtonReady2 = (event) => {
        this.button2 = event.detail.cmp;
        this.button2.setPressed(false);
    }

     toggleNav = (event) => {
         if (this.tree) {
             this.nav = event.detail.value;
             if (this.nav) {
                 this.tree.setUi('nav');
                 this.tree.setExpanderFirst(false);
             } else {
                 this.tree.setUi(null);
                 this.tree.setExpanderFirst(true);
             }
         }
         this.button2.setPressed(false);
     }

     toggleMicro = (event) => {
         this.micro = event.detail.value;
         if (this.micro) {
             this.tree.setMicro(true);
             this.tree.setExpanderFirst(false);
             this.tree.setUi('nav');
             this.button1.setDisabled(true);
             this.button1.setPressed(false);
             this.button2.setPressed(true);
         } else {
             this.tree.setMicro(false);
             this.tree.setExpanderFirst(true);
             this.tree.setUi('nav');
             this.button1.setDisabled(false);
             this.button1.setPressed(true);
             this.button2.setPressed(false);
         }
     }
}
