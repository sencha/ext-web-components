import './ContainerFieldComponent.html';

export default class ContainerFieldComponent {
    containerFieldComponentReady = (event) => {
        const isPhone = Ext.os.is.Phone;
        this.containerFieldCmp = event.detail.cmp;
        const layout = isPhone ? 'vbox' : 'hbox';
        this.containerFieldCmp.setLayout(layout);
    }
}
