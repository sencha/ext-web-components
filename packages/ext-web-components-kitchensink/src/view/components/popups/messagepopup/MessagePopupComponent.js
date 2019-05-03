import './MessagePopupComponent.html';

export default class MessagePopupComponent {
  constructor() {}

  onAlertTap = () => {
    Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.')
  }

  onPropmtTap = () => {
    Ext.Msg.prompt('Welcome!', "What's your first name?", this.onPromptResult.bind(this))
  }

  onConfirmTap = () => {
    Ext.Msg.confirm("Confirmation", "Are you sure you want to do that?", this.onConfirmResult.bind(this))
  }

  onConfirmResult = (buttonId, value, opt) => {
    Ext.toast(`User clicked ${buttonId} button.`);
  }

  onPromptResult = (buttonId, value) => {
    Ext.toast(`User clicked ${buttonId} and entered value "${value}".`);
  }
}
