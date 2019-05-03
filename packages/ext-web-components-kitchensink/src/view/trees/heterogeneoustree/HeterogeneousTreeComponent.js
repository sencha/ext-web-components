import './HeterogeneousTreeComponent.html';
import './data';

export default class HeterogeneousTreeComponent {
  constructor () {
    const cityModel = Ext.define('KitchenSink.model.tree.City', {
      extend: 'Ext.data.TreeModel',
      entityName: 'City',
      idProperty: 'name',
      glyph: 'xf19c@FontAwesome',
      fields: [{
          name: 'name',
          convert: undefined
      },{
          name: 'iconCls',
          defaultValue: 'x-fa fa-bank'
      }]
    }); 

    const countryModel = Ext.define('KitchenSink.model.tree.Country', {
      extend: 'Ext.data.TreeModel',
      entityName: 'Country',
      idProperty: 'name',
      glyph: 'xf024@FontAwesome',
      fields: [{
          name: 'name',
          convert: undefined
      },{
          name: 'iconCls',
          defaultValue: 'x-fa fa-flag'
      }]
    });

    const territoryModel = Ext.define('KitchenSink.model.tree.Territory', {
      extend: 'Ext.data.TreeModel',
      entityName: 'Territory',
      idProperty: 'name',
      glyph: 'xf0ac@FontAwesome',
      fields: [{
          name: 'name',
          convert: undefined
      },{
          name: 'iconCls',
          defaultValue: 'x-fa fa-globe'
      }]
    });
    this.cityModel = cityModel
    this.countryModel = countryModel
    this.territoryModel = territoryModel
  }

  onTextFieldReady = (event) => {
    this.textField = event.detail.cmp;
  }

  onButtonReady = (event) => {
    this.buttonField = event.detail.cmp;
  }

  onTreeReady = (event) => {
    this.treeField = event.detail.cmp;
    const isPhone = Ext.os.is.Phone;
    const top = !isPhone ? '10' : null
    const left = !isPhone ? '10' : null
    const width = !isPhone ? '400' : null
    const height = !isPhone ? '450' : null

    this.store = Ext.create('Ext.data.TreeStore', {
      proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            typeProperty: 'mtype'
        },
        url: '/KitchenSink/GeoData'
      },
      lazyFill: false,
      rootVisible: false
    });
  
    this.treeField.setTop(top);
    this.treeField.setLeft(left);
    this.treeField.setWidth(width);
    this.treeField.setHeight(height);
    this.treeField.setStore(this.store);
  }

  addItem() {
    const target = this.treeField.getSelections()[0] || this.store.getRoot();

    const value = this.textField.getValue()
    if (value != null && value != '') {
      if (this.store.getNodeById(value)) {
        return Ext.Msg.alert('Error', 'A node with this name already exists.'); 
      }
      let node = {name : value};
      if (target.isRoot()) {
        node.children = [];
        node.mtype = 'Territory';
      } else if (target instanceof this.territoryModel) {
        node.children = [];
        node.mtype = 'Country';
      } else if (target instanceof this.countryModel) {
        node.leaf = true;
        node.mtype = 'City';
      }
      
      target.appendChild(node);
      if (!target.isExpanded()) {
        target.expand(false);
      }
      this.textField.reset();
    }
    else {
      Ext.Msg.alert('Enter a Value', 'Please Enter a Value');
    }
  };

   onFieldAction = (event) => {
    if (event.e.ENTER === event.e.getKey()) {
      this.addItem();
    }
  };

   onSelectionChange = (event) => {
    var button = this.buttonField;
    var selection = event.detail.selected;
    if (selection.length) {
      const selectedNode = selection[0];

      if (selectedNode instanceof this.territoryModel) {
          button.setText('Add Country');
          button.enable();
      } else if (selectedNode instanceof this.countryModel) {
          button.setText('Add City');
          button.enable();
      } else {
          button.disable();
      }
    } else {
      button.setText('Add Territory');
      button.enable();
    }
  };
}
