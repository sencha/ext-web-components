import './CheckBoxGroupComponent.scss';
import './CheckBoxGroupComponent.html';
Ext.require(['Ext.field.CheckboxGroup']);

export default class CheckBoxFieldComponent {
    onParentPanelReady = (event) => {
        this.parentPanelCmp = event.detail.cmp;
    }

    onSaveFormClick = () => {
        if (this.parentPanelCmp.isValid()) {
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
        this.parentPanelCmp.reset();
    }
}
