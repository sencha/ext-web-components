Ext.define('KitchenSink.view.dataview.MultiSortButton', {
    extend: 'Ext.Button',
    xtype: 'dataview-multisort-sortbutton',

    config: {
        direction: 'ASC',
        dataIndex: undefined
    },

    getHandler: function () {
        this.toggleDirection();
    },

    applyDirection: function (direction) {
        if (direction) {
            direction = direction.toUpperCase();
        }

        return direction;
    },

    updateDirection: function (direction) {
        this.setIconCls('x-fa fa-sort-' + direction.toLowerCase());

        this.fireEvent('changeDirection', direction);
    },

    toggleDirection: function () {
        this.setDirection(Ext.String.toggle(this.getDirection(), 'ASC', 'DESC'));
    }
});
