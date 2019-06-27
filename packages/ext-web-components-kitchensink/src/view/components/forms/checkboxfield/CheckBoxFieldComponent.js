import './CheckBoxFieldComponent.html';

export default class CheckBoxFieldComponent {
    checkboxFieldReady = (event) => {
        const isPhone = Ext.os.is.Phone;
        this.checkboxCmp = event.detail.cmp;

        const top = !isPhone ? 10 : null;
        const left = !isPhone ? 10 : null;

        this.checkboxCmp.setTop(top);
        this.checkboxCmp.setLeft(left);
    }
}
