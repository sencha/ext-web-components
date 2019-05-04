import { Base, EMPTY, define, config } from '../../../extjs-core/src';

/**
 * Simple wrapper class that represents a set of records returned by a Proxy.
 */
@define
class ResultSet extends Base {
    /**
     * @cfg {Model[]} groupData
     * The grouping data.
     */
    @config
    groupData = null;

    /**
     * @cfg {Boolean} loaded
     * True if the records have already been loaded. This is only meaningful when dealing
     * with remote proxies.
     */
    @config('initial')
    loaded = true;

    /**
     * @cfg {String} message
     * The message that was read in from the data.
     */
    @config
    message = null;

    /**
     * @cfg {Object} metadata
     * The metadata object from a server sourced JSON data packet.
     */
    @config
    metadata = null;

    /**
     * @cfg {Model[]/Object[]} records (required)
     * The array of record instances or record config objects.
     */
    @config
    records = null;

    /**
     * @cfg {Number} remoteTotal
     * The total number of records reported by the remote data source.
     */
    @config
    remoteTotal = null;

    /**
     * @cfg {Boolean} success
     * True if the ResultSet loaded successfully, false if any errors were encountered.
     */
    @config
    success = null;

    /**
     * @cfg {Model} summaryData
     * The summary data.
     */
    @config
    summaryData = null;

    /**
     * @cfg {Number} total
     * The total number of records reported by the data source. This ResultSet may be only
     * a subset of those records (see {@link #count}).
     */
    @config
    total = null;

    /**
     * @property {Number} count
     * The number of records in this ResultSet. Note that `total` may be larger than this
     * number.
     */
    get count () {
        let records = this.records;

        return records ? records.length : 0;
    }
}

ResultSet.EMPTY = new ResultSet({
    message: '',
    records: EMPTY,
    success: true,
    total: 0
});

export { ResultSet };
