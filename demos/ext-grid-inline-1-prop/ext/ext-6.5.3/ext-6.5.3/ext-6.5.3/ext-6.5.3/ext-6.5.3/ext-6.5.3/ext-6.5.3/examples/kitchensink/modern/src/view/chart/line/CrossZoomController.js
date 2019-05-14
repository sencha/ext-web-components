Ext.define('KitchenSink.view.chart.line.CrossZoomController', {
    extend: 'KitchenSink.view.chart.ChartController',
    alias: 'controller.line-crosszoom',

    init: function (view) {
        this.callParent([view]);

        var chart = view.lookup('chart'),
            toolbar = view.lookup('toolbar'),
            interaction = chart.getInteraction('crosszoom'),
            button = interaction.getUndoButton();

        toolbar.add(button);
    }
});
