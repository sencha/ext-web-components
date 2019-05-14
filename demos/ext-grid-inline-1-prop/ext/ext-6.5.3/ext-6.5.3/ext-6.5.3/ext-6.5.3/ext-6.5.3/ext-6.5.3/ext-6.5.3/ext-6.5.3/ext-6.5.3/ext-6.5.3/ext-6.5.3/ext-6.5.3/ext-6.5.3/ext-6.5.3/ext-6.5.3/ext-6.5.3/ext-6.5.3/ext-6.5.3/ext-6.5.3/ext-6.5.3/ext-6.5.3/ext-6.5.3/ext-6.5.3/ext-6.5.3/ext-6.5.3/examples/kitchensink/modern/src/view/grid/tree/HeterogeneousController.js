Ext.define('KitchenSink.view.grid.tree.HeterogeneousController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.heterogeneous-tree',

    onSelectionChange: function(selectable, selection) {
        var button = this.lookup('add-button'),
            selectedNode;

        if (selection.length) {
            selectedNode = selection[0];

            if (selectedNode instanceof KitchenSink.model.tree.Territory) {
                button.setText('Add Country');
                button.enable();
            } else if (selectedNode instanceof KitchenSink.model.tree.Country) {
                button.setText('Add City');
                button.enable();
            } else {
                button.disable();
            }
        } else {
            button.setText('Add Territory');
            button.enable();
        }
    },

    onFieldAction: function(field, e) {
        if (e.ENTER === e.getKey()) {
            this.addItem();
        }
    },

    addItem: function() {
        var tree = this.getView(),
            store = tree.getStore(),
            target = tree.getSelections()[0] || store.getRoot(),
            inputField = this.lookup('new-name'),
            value = inputField.getValue(),
            node;

        if (value) {
            if (store.getNodeById(value)) {
                return Ext.Msg.alert('Error', 'A node with this name already exists.');
            }

            node = {
                name: value
            };

            if (target.isRoot()) {
                //Nothing selected -- adding new Territory
                node.children = [];
                node.mtype = 'Territory';
            } else if (target instanceof KitchenSink.model.tree.Territory) {
                // Programatically added - must not try to load over Ajax
                node.children = [];
                node.mtype = 'Country';
            } else if (target instanceof KitchenSink.model.tree.Country) {
                // Adding to the Country level - that is our leaf level
                node.leaf = true;
                node.mtype = 'City';
            }

            node = target.appendChild(node);

            // User might want to see what they've just added!
            if (!target.isExpanded()) {
                target.expand(false);
            }

            tree.select(node);

            inputField.reset();
        }
    }
});
