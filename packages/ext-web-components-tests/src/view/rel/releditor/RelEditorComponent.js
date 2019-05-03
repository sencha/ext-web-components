import "./RelEditorComponent.html";

export default class RelEditorComponent {
  constructor() {}

  onGridReady = (event) => {
    this.grid = event.detail.cmp;
    const store = Ext.create('Ext.data.Store', { data: [{ value: '1' }]});
    this.grid.setStore(store);
    this.grid.setPlugins({ gridcellediting: true });
  }
}
