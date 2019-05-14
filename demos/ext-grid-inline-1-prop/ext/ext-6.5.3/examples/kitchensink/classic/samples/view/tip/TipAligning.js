/**
 * This view demonstrates how to use the tooltip align config to specify the two
 * points of the tooltip and its target which should align with each other.
 *
 * It also demonstrates how the tooltip alignment falls back when the desired
 * alignment is not possible due to space constraints. The target is draggable,
 * and when close to the panel border, the tip will move into the closest available
 * space.
 */
Ext.define('KitchenSink.view.tip.TipAligning', {
    extend: 'Ext.panel.Panel',
    xtype: 'tip-aligning',
    controller: 'tip-aligning',

    //<example>
    requires: [
        'KitchenSink.view.tip.TipAligningController',
        'KitchenSink.view.tip.TipAligningModel'
    ],

    otherContent: [{
        type: 'Controller',
        path: 'classic/samples/view/tip/TipAligningController.js'
    }, {
        type: 'ViewModel',
        path: 'app/view/tip/TipAligningModel.js'
    }],
    //</example>

    height: 500,
    width: 750,
    title: 'Draggable button with configurable tooltip',
    bodyBorder: true,

    listeners: {
        boxready: 'showButton'
    },
    
    viewModel: {
        type: 'tip-aligning'
    },

    items: {
        xtype: 'component',
        cls: Ext.baseCSSPrefix + 'btn-default-small',
        reference: 'button',
        shadow: false,
        floating: true,
        constrain: true,
        html: '<span class="x-btn-inner x-btn-inner-default-small">Confirm selection</span>',
        draggable: {
            listeners: {
                drag: function() {
                    this.comp.lookupController().onButtonDrag();
                }
            }
        },
        hidden: true,
        listeners: {
            render: 'initToolTip'
        }
    },

    bbar: {
        items: [{
            xtype: 'label',
            text: 'Tip:'
        }, {
            xtype: 'segmentedbutton',
            bind: '{tipEdge}',
            items: [{
                text: 'T'
            }, {
                text: 'R'
            }, {
                text: 'B'
            }, {
                text: 'L'
            }]
        }, {
            xtype: 'slider',
            width: 100,
            minValue: 0,
            maxValue: 100,
            bind: '{tipOffset}',
            publishOnComplete: false
        }, {
            xtype: 'label',
            text: 'Target:'
        }, {
            xtype: 'segmentedbutton',
            bind: '{targetEdge}',
            items: [{
                text: 'T'
            }, {
                text: 'R'
            }, {
                text: 'B'
            }, {
                text: 'L'
            }]
        }, {
            xtype: 'slider',
            width: 100,
            minValue: 0,
            maxValue: 100,
            bind: '{targetOffset}',
            publishOnComplete: false
        }, {
            xtype: 'textfield',
            editable: false,
            bind: '{alignSpec}',
            width: 80
        }, {
            xtype: 'checkboxfield',
            boxLabel: 'Anchor',
            bind: '{anchor}',
            inputValue: true,
            width: 80
        }]
    }
});
