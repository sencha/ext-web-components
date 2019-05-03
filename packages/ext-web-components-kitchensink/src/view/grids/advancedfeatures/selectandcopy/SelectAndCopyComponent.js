import './SelectAndCopyComponent.html';
import createStore from './SelectAndCopyComponentData.js';

Ext.require([ 'Ext.grid.plugin.Clipboard']);

export default class SelectAndCopyComponent {
  constructor  = () => {
    this.extensibleOptions = [];

    this.gridSelectable = {
      extensible: 'both',
      rows: true,
      cells: true,
      columns: true,
      drag: true,
      checkbox:true
    };
  }

  gridReady = (event) => {
    this.grid = event.detail.cmp;
    this.store = createStore();
    this.grid.setStore(this.store);
    this.grid.on('selectionchange', this.onSelectionChange.bind(this));
  }

  infoContainerReady = (event) => {
    this.infoContainer = event.detail.cmp;
  }

  menuItemReady = (event) => {
    this.extensibleOptions.push(event.detail.cmp);
  }

  extensibleMenuReady = (event) => {
    this.extensibleMenu = event.detail.cmp;
    this.extensibleMenu.on('click', this.onExtensibleChange.bind(this));
  }

  onSelectableChange = (event) => {
    const currentCheckValue = event.detail.checked;
    const changedItem = event.detail.menucheckitem._text;
    this.gridSelectable.extensible = currentCheckValue

    this.grid.setSelectable(this.gridSelectable);
  }

  onExtensibleChange = (sender, value) => {
    this.gridSelectable.extensible = value._text;
    this.grid.setSelectable(this.gridSelectable);

    for (let index=0; index < this.extensibleOptions.length; index++) {
      if (this.extensibleOptions[index]._text === value._text) {
        this.extensibleOptions[index].setIconCls('x-font-icon md-icon-check');
      } else {
        this.extensibleOptions[index].setIconCls('');
      }
    }
  }

  onSelectionChange = (grid, records, selecting, selection) => {
    let message = '??',
        firstRowIndex,
        firstColumnIndex,
        lastRowIndex,
        lastColumnIndex;

    if (!selection) {
        message = 'No selection';
    }

    else if (selection.isCells) {
        firstRowIndex = selection.getFirstRowIndex();
        firstColumnIndex = selection.getFirstColumnIndex();
        lastRowIndex = selection.getLastRowIndex();
        lastColumnIndex = selection.getLastColumnIndex();

        message = 'Selected cells: ' + (lastColumnIndex - firstColumnIndex + 1) + 'x' + (lastRowIndex - firstRowIndex + 1) +
            ' at (' + firstColumnIndex + ',' + firstRowIndex + ')';
    }
    else if (selection.isRows) {
        message = 'Selected rows: ' + selection.getCount();
    }
    else if (selection.isColumns) {
        message = 'Selected columns: ' + selection.getCount();
    }

    this.infoContainer.setHtml(message);
  }
}
