import './CheckBoxGroupComponent.html';

export default class CheckBoxFieldComponent {
    checkboxFieldReady = (event) => {
        const isPhone = Ext.os.is.Phone;
        this.checkboxCmp = event.detail.cmp;

        const top = !isPhone ? 10 : null;
        const left = !isPhone ? 10 : null;

        this.checkboxCmp.setTop(top);
        this.checkboxCmp.setLeft(left);
    }

    onSaveFormClick = () => {
        var form = this.getView();

        if (form.isValid()) {
            Ext.Msg.alert(
                'Form completed',
                'Form values will be sent to the server'
            );
        }
        else {
            Ext.Msg.alert(
                'Form incomplete',
                'You must fill out the form with valid values'
            );
        }
    }

    onResetFormClick = () => {
        this.getView().reset();
    }
}
