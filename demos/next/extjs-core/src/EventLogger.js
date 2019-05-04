import { is, prototype } from './Misc';
import { Relayer } from './Watchable';

@prototype({
    isEventLogger: true,
    level: {},
    mask: {},
    out: console,
    prefix: ''
})
class EventLogger extends Relayer {
    constructor (logOptions, relayOptions) {
        super(relayOptions);

        if (logOptions) {
            if (is.array(logOptions)) {
                logOptions = {
                    to: logOptions
                };
            }

            if (typeof logOptions.log === 'function') {
                this.out = logOptions;
            }
            else {
                let to = logOptions.to;

                if (to) {
                    this.to = to;

                    this.out = {
                        log: (event, ...args) => {
                            let s = args.map(this.format).join(', ');
                            to.push(`${event}${s ? ': ' : ''}${s}`);
                        }
                    };

                    if (typeof logOptions.format === 'function') {
                        this.format = logOptions.format.bind(logOptions);
                    }
                }
            }

            if (logOptions.level) {
                this.level = logOptions.level;
            }

            if ('mask' in logOptions) {
                let m = logOptions.mask;

                if (typeof m === 'number') {
                    m = { '*': m };
                }

                this.mask = m;
            }

            if (logOptions.prefix) {
                this.prefix = logOptions.prefix;
            }
        }
    }

    format (arg) {
        return (typeof arg === 'string') ? JSON.stringify(arg) : String(arg);
    }

    doRelay (event, args) {
        let a = args;
        let m = this.mask;
        let level = this.level[event] || 'log';

        m = m[event] || m['*'];

        if (m != null) {
            a = args.filter((val, i) => m & (1 << i));
        }

        this.out[level](`${this.prefix}${event}`, ...a);
    }
}

function logEvents (watchable, logOptions, relayOptions) {
    return Relayer.create(watchable, new EventLogger(logOptions, relayOptions));
}

export { EventLogger, logEvents };
