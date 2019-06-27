import './TreeDecorationsComponent.html';
import data from './data';

export default class TreeDecorationsComponent {
    onTreeReady = (event) => {
        this.treeCmp = event.detail.cmp;
        const isPhone = Ext.os.is.Phone;
        const width = !isPhone ? '400' : null;
        const height = !isPhone ? '600' : null;

        this.store = data;
        this.treeCmp.setWidth(width);
        this.treeCmp.setHeight(height);
        this.treeCmp.setStore(this.store);
    }
}
