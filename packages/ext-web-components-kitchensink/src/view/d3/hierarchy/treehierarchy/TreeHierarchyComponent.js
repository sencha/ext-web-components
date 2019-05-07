import './TreeHierarchyComponent.html';

Ext.define('KitchenSink.reader.Salary', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.salary',
    getResponseData: function(...args) {
        const data = KitchenSink.reader.Salary.superclass.getResponseData.call(this, ...args);
        return this.addTreeHierarchy(data);
    },
    addTreeHierarchy: function(data) {
        data = this.addTreeLevel(data, 'industry_type', ['salary', 'state'], 'industry');
        return this.addTreeLevel(data, 'state', [], 'state');
    },
    addTreeLevel: function(data, fieldName, fieldsToCopy, notBlank) {
        var tree = [],
            currentValue,
            parentItem;

        Ext.Array.each(data, function(item) {
            if (item[fieldName] != currentValue) {
                currentValue = item[fieldName];
                parentItem = {};
                parentItem[fieldName] = currentValue;
                parentItem.text = currentValue;
                Ext.Array.each(fieldsToCopy, function(field) {
                    parentItem[field] = item[field];
                });
                parentItem.children = [];
                tree.push(Ext.apply(parentItem));
            }
            if (item[notBlank]) {
                if (Ext.isEmpty(item.children)) {
                    item.leaf = true;
                }
                if (Ext.isEmpty(item.text)) {
                    item.text = item[notBlank];
                }
                tree[tree.length - 1].children.push(item);
            }
        });

        return tree;
    }
});

export default class TreeHierarchyComponent {
    constructor() { }

    getNodeText = (tree, node) => {
        const record = node.data;
        let text = record.data.text;
        if (node.depth > 1) {
            text += ' (' + Ext.util.Format.currency(record.data.salary, '$', 0) + ')';
        }
        return text;
    }

    onTooltip = (component, tooltip, node) => {
        const n = node.data.childNodes.length;
        tooltip.setHtml(n + ' item' + (n === 1 ? '' : 's') + ' inside.');
    }

    treeReady = (event) => {
        const store = Ext.create('Ext.data.TreeStore', {
            autoLoad: true,
            fields: ['state', 'text', 'salary'],
            root: { text: 'States' },
            proxy: {
                type: 'ajax',
                url: 'resources/data/tree/salary.json',
                reader: {
                    type: 'salary'
                }
            }
        });
        const cmp = event.detail.cmp;
        cmp.setStore(store);
        cmp.setNodeText(this.getNodeText.bind(this));
        cmp.setTooltip({
            renderer:this.onTooltip.bind(this),
        });
    }
}
