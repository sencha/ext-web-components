import './Ticker.scss';
import './StockTickerComponent.html';
import model from '../../data/CompanyModel';

export default class StockTickerComponent {
    constructor() {
        this.tickDelay = 1000;
        this.flashBackground = false;
    }

  onGridReady = (event) => {
      this.gridCmp = event.detail.cmp;
      this.store = Ext.create('Ext.data.Store', {
          model,
          autoLoad: true,
          pageSize: null,
          proxy: {
              type: 'ajax',
              url: 'resources/data/CompanyData.json',
              reader: {
                  type: 'json',
                  rootProperty: 'data'
              }
          }
      });

      this.gridCmp.setItemConfig({
          viewModel : {},
          body: {
              tpl: this.rowBodyTpl
          }
      });

      this.grigridCmpd.setStore(this.store);

      if (this.store.isLoaded() && this.store.getCount()) {
          this.onStoreLoad();
      } else {
          this.store.on('load', 'onStoreLoad', this);
      }
  }

  onStoreLoad = (store) => {
      store.removeAt(15, 70);
      let count = store.getCount(),
          i, j, rec;

      for (i = 0; i < count; i++) {
          rec = store.getAt(i);
          rec.beginEdit();
          for (j = 0; j < 10; j++) {
              rec.addPriceTick();
          }
          rec.endEdit(true);
      }

      this.startTicker();
  }

  startTicker = () => {
      const { store } = this;

      if (this.timer) {
          clearInterval(this.timer);
      }

      this.timer = setInterval(() => {
          for (let i=0; i<10; i++) {
              const rec = store.getAt(Ext.Number.randomInt(0, store.getCount() - 1));
              rec.addPriceTick();
          }
      }, this.tickDelay);
  }

  toggleFlashBackground = (event) => {
      this.flashBackground = event.detail.newValue;
  }

  changeColumnReady = (event) => {
      this.changeColumnCmp = event.detail.cmp;
      this.changeColumnCmp.setRenderer(this.renderSign.bind(this, '0.00'));
  }
  percentChangeColumnReady = (event) => {
      this.pctChangeColumnCmp = event.detail.cmp;
      this.pctChangeColumnCmp.setRenderer(this.renderSign.bind(this, '0.00%'));
  }

  renderSign = (format, value, record, dataIndex, cell) => {
      let cls = '';
      if (this.flashBackground) {
          if (value > 0) {
              cls += 'ticker-cell-gain ';
          } else if (value < 0) {
              cls += 'ticker-cell-loss ';
          }
      }

      if(value>0) {
          cls += 'greenClass';
      }
      else if(value<0){
          cls += 'redClass';
      }

      cell.setCls(cls);
      return Ext.util.Format.number(value, format);
  }

  infoContainerReady = (event) => {
      this.infoContainerCmp = event.detail.cmp;
  }

  onTickDelayChange = (event) => {
      this.tickDelay = event.detail.newValue;
      this.startTicker();
      this.infoContainerCmp.setHtml(`${this.tickDelay}ms`);
  }
}
