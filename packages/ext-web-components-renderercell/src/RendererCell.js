/**
 * Use this component to render a React element inside of a grid cell.  
 *
 *      <Grid>
 *          <Column text="Actions" dataIndex="name">
 *              <RendererCell
 *                  renderer={(value, record) => (
 *                      <Button text={`Call ${value}`} handler={this.onCallClick.bind(this, record)}/>
 *                  )}
 *              />
 *          </Column>
 *      </Grid>
 *
 * RendererCell is automatically used when a Column contains a renderer prop. The following
 * is equivalent to the example above:
 * 
 *      <Grid>
 *          <Column 
 *              text="Actions" 
 *              dataIndex="name"
 *              renderer={(value, record) => (
 *                  <Button text={`Call ${value}`} handler={this.onCallClick.bind(this, record)}/>
 *              )}
 *          />
 *      </Grid>
 * @since 6.5.1
 */



Ext.define('Ext.webcomponents.RendererCell', {
    extend: 'Ext.grid.cell.Base',
    xtype: 'renderercell',

    config: {
        /**
         * @cfg {Function} renderer
         * A function that returns a React element or text to render. It is passed 
         * the following arguments:
         * @cfg {Object} renderer.value The data value for the current cell.
         * @cfg {Ext.data.Model} renderer.record The record for the current row.
         * @cfg {Number} renderer.dataIndex The dataIndex of the current column.
         * @cfg {Ext.grid.cell.Base} renderer.cell The current cell.
         * @cfg {Ext.grid.column.Column} renderer.column The current column.
         * @cfg {React.Element/String} renderer.return The React element or text to be
         * rendered.
         */
        renderer: null,

        /**
         * @cfg {Function} summaryRenderer
         * A function that returns a React element or text to render in the summary 
         * row. It is passed the following arguments:
         * @cfg {Object} renderer.value The data value for the current cell.
         * @cfg {React.Element/String} renderer.return The React element or text to be
         * rendered.
         */
        summaryRenderer: null,

        /**
         * @cfg {Boolean} forceWidth
         * `true` to measure the available width of the cell and set that
         * width on the underlying widget. If `false`, the widget width will auto
         * size.
         */
        forceWidth: false
    },

//https://docs.sencha.com/extjs/6.7.0/modern/src/Text.js-2.html
//https://docs.sencha.com/extjs/6.7.0/modern/src/Widget.js-3.html
    setValue: function (value) {
      var me = this, 
          context = me.refreshContext, 
          column = context.column,
          needsSizing = false,
          scope = column.getScope(),
          markup, renderer, result;

      if (context.summary) {
          renderer = me.getSummaryRenderer() || column.getSummaryRenderer();
      }

      renderer = renderer || me.getRenderer() || column.getRenderer();
      if (renderer) {
        var r
        if (typeof renderer == 'string') {
          r = eval(renderer)
          //markup = Ext.callback(renderer, window, [ value, context ], 0, column);
          //console.log('it is a string')
        }
        else {
          r = renderer
          //markup = renderer.call(scope, value, context.record, context.dataIndex, me, column);
          //console.log('NOT a string')
        }
        //markup = renderer.call(scope, value, context.record, context.dataIndex, me, column);
        markup = r.call(scope, value, context.record, context.dataIndex, me, column);
        if (markup == null) { markup = ''; }
        //console.dir(markup)
        if (typeof markup === 'object') {
          console.log('in RendererCell - markup is an object, not doing anything...')
          // result = Ext.react.ReactDOM.render(markup, me.bodyElement.dom); 
          // console.log('ext-react-renderercell')
          // console.log('value: ' + value)
          // console.dir(result.cmp)

          // //added
          // result.cmp.setRenderTo(me.bodyElement.dom);

          // if (result.isWidget) {
          //   console.log('is widget')
          //     needsSizing = result !== me.widget;
          //     me.widget = result;
          // }
        } 
        else {
          //console.log('markup is a string')
          //console.log(me)
          //var h = Ext.htmlEncode(markup.toString())
          //console.dir(h)
          //Ext.dom.Helper.overwrite(me.bodyElement, Ext.htmlEncode(markup.toString()));
          Ext.dom.Helper.overwrite(me.bodyElement, markup.toString());
          me.widget = null;
          }
        if (needsSizing && me.getForceWidth()) {
          me.setWidgetWidth(me.getWidth());
        }
      }
      return me;
    },

    updateWidth: function (width, oldWidth) {
      this.callParent(arguments);
      if (this.getForceWidth()) {
        this.setWidgetWidth(width);
      }
    },

    doDestroy: function () {
      this.widget = null;
//??        Ext.react.ReactDOM.unmountComponentAtNode(this.bodyElement.dom);
      this.callParent();
    },

    privates: {
        setWidgetWidth: function (width) {
          var me = this,
              el = me.bodyElement,
              widget, column, leftPad, rightPad;

          if (!me.rendered) {
            return;
          }

          widget = me.widget;

          if (widget) {
            column = me.getColumn();
            leftPad = parseInt(column.getCachedStyle(el, 'padding-left'), 10) || 0;
            rightPad = parseInt(column.getCachedStyle(el, 'padding-right'), 10) || 0;

            // Give the widget a reference to ourself to allow it to do extra measuring
            widget.measurer = column;
            widget.setWidth(width - leftPad - rightPad);
          }
        }
    }
});
