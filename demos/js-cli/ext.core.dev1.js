var Ext = Ext || {};
debugger;
Ext.Boot = Ext.Boot || (function(emptyFn) {
    var doc = document,
        _emptyArray = [],
        _config = {
            disableCaching: (/[?&](?:cache|disableCacheBuster)\b/i.test(location.search) || !(/http[s]?\:/i.test(location.href)) || /(^|[ ;])ext-cache=1/.test(doc.cookie)) ? false : true,
            disableCachingParam: '_dc',
            loadDelay: false,
            preserveScripts: true,
            charset: 'UTF-8'
        },
        _assetConfig = {},
        cssRe = /\.css(?:\?|$)/i,
        resolverEl = doc.createElement('a'),
        isBrowser = typeof window !== 'undefined',
        _environment = {
            browser: isBrowser,
            node: !isBrowser && (typeof require === 'function'),
            phantom: (window && (window._phantom || window.callPhantom)) || /PhantomJS/.test(window.navigator.userAgent)
        },
        _tags = (Ext.platformTags = {}),
        _debug = function(message) {},
        _apply = function(object, config, defaults) {
            if (defaults) {
                _apply(object, defaults);
            }
            if (object && config && typeof config === 'object') {
                for (var i in config) {
                    object[i] = config[i];
                }
            }
            return object;
        },
        _merge = function() {
            var lowerCase = false,
                obj = Array.prototype.shift.call(arguments),
                index, i, len, value;
            if (typeof arguments[arguments.length - 1] === 'boolean') {
                lowerCase = Array.prototype.pop.call(arguments);
            }
            len = arguments.length;
            for (index = 0; index < len; index++) {
                value = arguments[index];
                if (typeof value === 'object') {
                    for (i in value) {
                        obj[lowerCase ? i.toLowerCase() : i] = value[i];
                    }
                }
            }
            return obj;
        },
        _getKeys = (typeof Object.keys == 'function') ? function(object) {
            if (!object) {
                return [];
            }
            return Object.keys(object);
        } : function(object) {
            var keys = [],
                property;
            for (property in object) {
                if (object.hasOwnProperty(property)) {
                    keys.push(property);
                }
            }
            return keys;
        },
        Boot = {
            loading: 0,
            loaded: 0,
            apply: _apply,
            env: _environment,
            config: _config,
            assetConfig: _assetConfig,
            scripts: {},
            currentFile: null,
            suspendedQueue: [],
            currentRequest: null,
            syncMode: false,
            debug: _debug,
            useElements: true,
            listeners: [],
            Request: Request,
            Entry: Entry,
            allowMultipleBrowsers: false,
            browserNames: {
                ie: 'IE',
                firefox: 'Firefox',
                safari: 'Safari',
                chrome: 'Chrome',
                opera: 'Opera',
                dolfin: 'Dolfin',
                edge: 'Edge',
                webosbrowser: 'webOSBrowser',
                chromeMobile: 'ChromeMobile',
                chromeiOS: 'ChromeiOS',
                silk: 'Silk',
                other: 'Other'
            },
            osNames: {
                ios: 'iOS',
                android: 'Android',
                windowsPhone: 'WindowsPhone',
                webos: 'webOS',
                blackberry: 'BlackBerry',
                rimTablet: 'RIMTablet',
                mac: 'MacOS',
                win: 'Windows',
                tizen: 'Tizen',
                linux: 'Linux',
                bada: 'Bada',
                chromeOS: 'ChromeOS',
                other: 'Other'
            },
            browserPrefixes: {
                ie: 'MSIE ',
                edge: 'Edge/',
                firefox: 'Firefox/',
                chrome: 'Chrome/',
                safari: 'Version/',
                opera: 'OPR/',
                dolfin: 'Dolfin/',
                webosbrowser: 'wOSBrowser/',
                chromeMobile: 'CrMo/',
                chromeiOS: 'CriOS/',
                silk: 'Silk/'
            },
            browserPriority: [
                'edge',
                'opera',
                'dolfin',
                'webosbrowser',
                'silk',
                'chromeiOS',
                'chromeMobile',
                'ie',
                'firefox',
                'safari',
                'chrome'
            ],
            osPrefixes: {
                tizen: '(Tizen )',
                ios: 'i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ',
                android: '(Android |HTC_|Silk/)',
                windowsPhone: 'Windows Phone ',
                blackberry: '(?:BlackBerry|BB)(?:.*)Version/',
                rimTablet: 'RIM Tablet OS ',
                webos: '(?:webOS|hpwOS)/',
                bada: 'Bada/',
                chromeOS: 'CrOS '
            },
            fallbackOSPrefixes: {
                windows: 'win',
                mac: 'mac',
                linux: 'linux'
            },
            devicePrefixes: {
                iPhone: 'iPhone',
                iPod: 'iPod',
                iPad: 'iPad'
            },
            maxIEVersion: 12,
            detectPlatformTags: function() {
                var me = this,
                    ua = navigator.userAgent,
                    isMobile = /Mobile(\/|\s)/.test(ua),
                    element = document.createElement('div'),
                    isEventSupported = function(name, tag) {
                        if (tag === undefined) {
                            tag = window;
                        }
                        var eventName = 'on' + name.toLowerCase(),
                            isSupported = (eventName in element);
                        if (!isSupported) {
                            if (element.setAttribute && element.removeAttribute) {
                                element.setAttribute(eventName, '');
                                isSupported = typeof element[eventName] === 'function';
                                if (typeof element[eventName] !== 'undefined') {
                                    element[eventName] = undefined;
                                }
                                element.removeAttribute(eventName);
                            }
                        }
                        return isSupported;
                    },
                    getBrowsers = function() {
                        var browsers = {},
                            maxIEVersion, prefix, value, key, index, len, match, version, matched;
                        len = me.browserPriority.length;
                        for (index = 0; index < len; index++) {
                            key = me.browserPriority[index];
                            if (!matched) {
                                value = me.browserPrefixes[key];
                                match = ua.match(new RegExp('(' + value + ')([\\w\\._]+)'));
                                version = match && match.length > 1 ? parseInt(match[2]) : 0;
                                if (version) {
                                    matched = true;
                                }
                            } else {
                                version = 0;
                            }
                            browsers[key] = version;
                        }
                        if (browsers.ie) {
                            var mode = document.documentMode;
                            if (mode >= 8) {
                                browsers.ie = mode;
                            }
                        }
                        version = browsers.ie || false;
                        maxIEVersion = Math.max(version, me.maxIEVersion);
                        for (index = 8; index <= maxIEVersion; ++index) {
                            prefix = 'ie' + index;
                            browsers[prefix + 'm'] = version ? version <= index : 0;
                            browsers[prefix] = version ? version === index : 0;
                            browsers[prefix + 'p'] = version ? version >= index : 0;
                        }
                        return browsers;
                    },
                    getOperatingSystems = function() {
                        var systems = {},
                            value, key, keys, index, len, match, matched, version, activeCount;
                        keys = _getKeys(me.osPrefixes);
                        len = keys.length;
                        for (index = 0 , activeCount = 0; index < len; index++) {
                            key = keys[index];
                            value = me.osPrefixes[key];
                            match = ua.match(new RegExp('(' + value + ')([^\\s;]+)'));
                            matched = match ? match[1] : null;
                            if (matched && (matched === 'HTC_' || matched === 'Silk/')) {
                                version = 2.3;
                            } else {
                                version = match && match.length > 1 ? parseFloat(match[match.length - 1]) : 0;
                            }
                            if (version) {
                                activeCount++;
                            }
                            systems[key] = version;
                        }
                        keys = _getKeys(me.fallbackOSPrefixes);
                        len = keys.length;
                        for (index = 0; index < len; index++) {
                            key = keys[index];
                            if (activeCount === 0) {
                                value = me.fallbackOSPrefixes[key];
                                match = ua.toLowerCase().match(new RegExp(value));
                                systems[key] = match ? true : 0;
                            } else {
                                systems[key] = 0;
                            }
                        }
                        return systems;
                    },
                    getDevices = function() {
                        var devices = {},
                            value, key, keys, index, len, match;
                        keys = _getKeys(me.devicePrefixes);
                        len = keys.length;
                        for (index = 0; index < len; index++) {
                            key = keys[index];
                            value = me.devicePrefixes[key];
                            match = ua.match(new RegExp(value));
                            devices[key] = match ? true : 0;
                        }
                        return devices;
                    },
                    browsers = getBrowsers(),
                    systems = getOperatingSystems(),
                    devices = getDevices(),
                    platformParams = Boot.loadPlatformsParam();
                _merge(_tags, browsers, systems, devices, platformParams, true);
                _tags.phone = !!((_tags.iphone || _tags.ipod) || (!_tags.silk && (_tags.android && (_tags.android < 3 || isMobile))) || (_tags.blackberry && isMobile) || (_tags.windowsphone));
                _tags.tablet = !!(!_tags.phone && (_tags.ipad || _tags.android || _tags.silk || _tags.rimtablet || (_tags.ie10 && /; Touch/.test(ua))));
                _tags.touch = isEventSupported('touchend') || navigator.maxTouchPoints || navigator.msMaxTouchPoints;
                _tags.desktop = !_tags.phone && !_tags.tablet;
                _tags.cordova = _tags.phonegap = !!(window.PhoneGap || window.Cordova || window.cordova);
                _tags.webview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)(?!.*FBAN)/i.test(ua);
                _tags.androidstock = (_tags.android <= 4.3) && (_tags.safari || _tags.silk);
                _merge(_tags, platformParams, true);
            },
            loadPlatformsParam: function() {
                var paramsString = window.location.search.substr(1),
                    paramsArray = paramsString.split("&"),
                    params = {},
                    i,
                    platforms = {},
                    tmpArray, tmplen, platform, name, enabled;
                for (i = 0; i < paramsArray.length; i++) {
                    tmpArray = paramsArray[i].split("=");
                    params[tmpArray[0]] = tmpArray[1];
                }
                if (params.platformTags) {
                    tmpArray = params.platformTags.split(",");
                    for (tmplen = tmpArray.length , i = 0; i < tmplen; i++) {
                        platform = tmpArray[i].split(":");
                        name = platform[0];
                        enabled = true;
                        if (platform.length > 1) {
                            enabled = platform[1];
                            if (enabled === 'false' || enabled === '0') {
                                enabled = false;
                            }
                        }
                        platforms[name] = enabled;
                    }
                }
                return platforms;
            },
            filterPlatform: function(platform, excludes) {
                platform = _emptyArray.concat(platform || _emptyArray);
                excludes = _emptyArray.concat(excludes || _emptyArray);
                var plen = platform.length,
                    elen = excludes.length,
                    include = (!plen && elen),
                    i, tag;
                for (i = 0; i < plen && !include; i++) {
                    tag = platform[i];
                    include = !!_tags[tag];
                }
                for (i = 0; i < elen && include; i++) {
                    tag = excludes[i];
                    include = !_tags[tag];
                }
                return include;
            },
            init: function() {
                var scriptEls = doc.getElementsByTagName('script'),
                    script = scriptEls[0],
                    len = scriptEls.length,
                    re = /\/ext(\-[a-z\-]+)?\.js$/,
                    entry, src, state, baseUrl, key, n, origin;
                Boot.hasReadyState = ("readyState" in script);
                Boot.hasAsync = ("async" in script);
                Boot.hasDefer = ("defer" in script);
                Boot.hasOnLoad = ("onload" in script);
                Boot.isIE8 = Boot.hasReadyState && !Boot.hasAsync && Boot.hasDefer && !Boot.hasOnLoad;
                Boot.isIE9 = Boot.hasReadyState && !Boot.hasAsync && Boot.hasDefer && Boot.hasOnLoad;
                Boot.isIE10p = Boot.hasReadyState && Boot.hasAsync && Boot.hasDefer && Boot.hasOnLoad;
                if (Boot.isIE8) {
                    Boot.isIE10 = false;
                    Boot.isIE10m = true;
                } else {
                    Boot.isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
                    Boot.isIE10m = Boot.isIE10 || Boot.isIE9 || Boot.isIE8;
                }
                Boot.isIE11 = Boot.isIE10p && !Boot.isIE10;
                for (n = 0; n < len; n++) {
                    src = (script = scriptEls[n]).src;
                    if (!src) {

                        continue;
                    }
                    state = script.readyState || null;
                    if (!baseUrl && re.test(src)) {
                        baseUrl = src;
                    }
                    if (!Boot.scripts[key = Boot.canonicalUrl(src)]) {
                        entry = new Entry({
                            key: key,
                            url: src,
                            done: state === null || state === 'loaded' || state === 'complete',
                            el: script,
                            prop: 'src'
                        });
                    }
                }
                if (!baseUrl) {
                    script = scriptEls[scriptEls.length - 1];
                    baseUrl = script.src;
                }
                Boot.baseUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1);
                origin = window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
                Boot.origin = origin;
                Boot.detectPlatformTags();
                Ext.filterPlatform = Boot.filterPlatform;
            },
            canonicalUrl: function(url) {
                resolverEl.href = url;
                var ret = resolverEl.href,
                    dc = _config.disableCachingParam,
                    pos = dc ? ret.indexOf(dc + '=') : -1,
                    c, end;
                if (pos > 0 && ((c = ret.charAt(pos - 1)) === '?' || c === '&')) {
                    end = ret.indexOf('&', pos);
                    end = (end < 0) ? '' : ret.substring(end);
                    if (end && c === '?') {
                        ++pos;
                        end = end.substring(1);
                    }
                    ret = ret.substring(0, pos - 1) + end;
                }
                return ret;
            },
            getConfig: function(name) {
                return name ? Boot.config[name] : Boot.config;
            },
            setConfig: function(name, value) {
                if (typeof name === 'string') {
                    Boot.config[name] = value;
                } else {
                    for (var s in name) {
                        Boot.setConfig(s, name[s]);
                    }
                }
                return Boot;
            },
            getHead: function() {
                return Boot.docHead || (Boot.docHead = doc.head || doc.getElementsByTagName('head')[0]);
            },
            create: function(url, key, cfg) {
                var config = cfg || {};
                config.url = url;
                config.key = key;
                return Boot.scripts[key] = new Entry(config);
            },
            getEntry: function(url, cfg, canonicalPath) {
                var key, entry;
                key = canonicalPath ? url : Boot.canonicalUrl(url);
                entry = Boot.scripts[key];
                if (!entry) {
                    entry = Boot.create(url, key, cfg);
                    if (canonicalPath) {
                        entry.canonicalPath = true;
                    }
                }
                return entry;
            },
            registerContent: function(url, type, content) {
                var cfg = {
                        content: content,
                        loaded: true,
                        css: type === 'css'
                    };
                return Boot.getEntry(url, cfg);
            },
            processRequest: function(request, sync) {
                request.loadEntries(sync);
            },
            load: function(request) {
                var request = new Request(request);
                if (request.sync || Boot.syncMode) {
                    return Boot.loadSync(request);
                }
                if (Boot.currentRequest) {
                    request.getEntries();
                    Boot.suspendedQueue.push(request);
                } else {
                    Boot.currentRequest = request;
                    Boot.processRequest(request, false);
                }
                return Boot;
            },
            loadSync: function(request) {
                var request = new Request(request);
                Boot.syncMode++;
                Boot.processRequest(request, true);
                Boot.syncMode--;
                return Boot;
            },
            loadBasePrefix: function(request) {
                request = new Request(request);
                request.prependBaseUrl = true;
                return Boot.load(request);
            },
            loadSyncBasePrefix: function(request) {
                request = new Request(request);
                request.prependBaseUrl = true;
                return Boot.loadSync(request);
            },
            requestComplete: function(request) {
                var next;
                if (Boot.currentRequest === request) {
                    Boot.currentRequest = null;
                    while (Boot.suspendedQueue.length > 0) {
                        next = Boot.suspendedQueue.shift();
                        if (!next.done) {
                            Boot.load(next);
                            break;
                        }
                    }
                }
                if (!Boot.currentRequest && Boot.suspendedQueue.length == 0) {
                    Boot.fireListeners();
                }
            },
            isLoading: function() {
                return !Boot.currentRequest && Boot.suspendedQueue.length == 0;
            },
            fireListeners: function() {
                var listener;
                while (Boot.isLoading() && (listener = Boot.listeners.shift())) {
                    listener();
                }
            },
            onBootReady: function(listener) {
                if (!Boot.isLoading()) {
                    listener();
                } else {
                    Boot.listeners.push(listener);
                }
            },
            getPathsFromIndexes: function(indexMap, loadOrder) {
                if (!('length' in indexMap)) {
                    var indexArray = [],
                        index;
                    for (index in indexMap) {
                        if (!isNaN(+index)) {
                            indexArray[+index] = indexMap[index];
                        }
                    }
                    indexMap = indexArray;
                }
                return Request.prototype.getPathsFromIndexes(indexMap, loadOrder);
            },
            createLoadOrderMap: function(loadOrder) {
                return Request.prototype.createLoadOrderMap(loadOrder);
            },
            fetch: function(url, complete, scope, async) {
                async = (async === undefined) ? !!complete : async;
                var xhr = new XMLHttpRequest(),
                    result, status, content,
                    exception = false,
                    readyStateChange = function() {
                        if (xhr && xhr.readyState == 4) {
                            status = (xhr.status === 1223) ? 204 : (xhr.status === 0 && ((self.location || {}).protocol === 'file:' || (self.location || {}).protocol === 'ionp:')) ? 200 : xhr.status;
                            content = xhr.responseText;
                            result = {
                                content: content,
                                status: status,
                                exception: exception
                            };
                            if (complete) {
                                complete.call(scope, result);
                            }
                            xhr.onreadystatechange = emptyFn;
                            xhr = null;
                        }
                    };
                if (async) {
                    xhr.onreadystatechange = readyStateChange;
                }
                try {
                    xhr.open('GET', url, async);
                    xhr.send(null);
                } catch (err) {
                    exception = err;
                    readyStateChange();
                    return result;
                }
                if (!async) {
                    readyStateChange();
                }
                return result;
            },
            notifyAll: function(entry) {
                entry.notifyRequests();
            }
        };
    function Request(cfg) {
        if (cfg.$isRequest) {
            return cfg;
        }
        var cfg = cfg.url ? cfg : {
                url: cfg
            },
            url = cfg.url,
            urls = url.charAt ? [
                url
            ] : url,
            charset = cfg.charset || Boot.config.charset;
        _apply(this, cfg);
        delete this.url;
        this.urls = urls;
        this.charset = charset;
    }

    Request.prototype = {
        $isRequest: true,
        createLoadOrderMap: function(loadOrder) {
            var len = loadOrder.length,
                loadOrderMap = {},
                i, element;
            for (i = 0; i < len; i++) {
                element = loadOrder[i];
                loadOrderMap[element.path] = element;
            }
            return loadOrderMap;
        },
        getLoadIndexes: function(item, indexMap, loadOrder, includeUses, skipLoaded) {
            var resolved = [],
                queue = [
                    item
                ],
                itemIndex = item.idx,
                queue, entry, dependencies, depIndex, i, len;
            if (indexMap[itemIndex]) {
                return resolved;
            }
            indexMap[itemIndex] = resolved[itemIndex] = true;
            while (item = queue.shift()) {
                if (item.canonicalPath) {
                    entry = Boot.getEntry(item.path, null, true);
                } else {
                    entry = Boot.getEntry(this.prepareUrl(item.path));
                }
                if (!(skipLoaded && entry.done)) {
                    if (includeUses && item.uses && item.uses.length) {
                        dependencies = item.requires.concat(item.uses);
                    } else {
                        dependencies = item.requires;
                    }
                    for (i = 0 , len = dependencies.length; i < len; i++) {
                        depIndex = dependencies[i];
                        if (!indexMap[depIndex]) {
                            indexMap[depIndex] = resolved[depIndex] = true;
                            queue.push(loadOrder[depIndex]);
                        }
                    }
                }
            }
            return resolved;
        },
        getPathsFromIndexes: function(indexes, loadOrder) {
            var paths = [],
                index, len;
            for (index = 0 , len = indexes.length; index < len; index++) {
                if (indexes[index]) {
                    paths.push(loadOrder[index].path);
                }
            }
            return paths;
        },
        expandUrl: function(url, loadOrder, loadOrderMap, indexMap, includeUses, skipLoaded) {
            var item, resolved;
            if (loadOrder) {
                item = loadOrderMap[url];
                if (item) {
                    resolved = this.getLoadIndexes(item, indexMap, loadOrder, includeUses, skipLoaded);
                    if (resolved.length) {
                        return this.getPathsFromIndexes(resolved, loadOrder);
                    }
                }
            }
            return [
                url
            ];
        },
        expandUrls: function(urls, includeUses) {
            var me = this,
                loadOrder = me.loadOrder,
                expanded = [],
                expandMap = {},
                indexMap = [],
                loadOrderMap, tmpExpanded, i, len, t, tlen, tUrl;
            if (typeof urls === "string") {
                urls = [
                    urls
                ];
            }
            if (loadOrder) {
                loadOrderMap = me.loadOrderMap;
                if (!loadOrderMap) {
                    loadOrderMap = me.loadOrderMap = me.createLoadOrderMap(loadOrder);
                }
            }
            for (i = 0 , len = urls.length; i < len; i++) {
                tmpExpanded = this.expandUrl(urls[i], loadOrder, loadOrderMap, indexMap, includeUses, false);
                for (t = 0 , tlen = tmpExpanded.length; t < tlen; t++) {
                    tUrl = tmpExpanded[t];
                    if (!expandMap[tUrl]) {
                        expandMap[tUrl] = true;
                        expanded.push(tUrl);
                    }
                }
            }
            if (expanded.length === 0) {
                expanded = urls;
            }
            return expanded;
        },
        expandLoadOrder: function() {
            var me = this,
                urls = me.urls,
                expanded;
            if (!me.expanded) {
                expanded = this.expandUrls(urls, true);
                me.expanded = true;
            } else {
                expanded = urls;
            }
            me.urls = expanded;
            if (urls.length != expanded.length) {
                me.sequential = true;
            }
            return me;
        },
        getUrls: function() {
            this.expandLoadOrder();
            return this.urls;
        },
        prepareUrl: function(url) {
            if (this.prependBaseUrl) {
                return Boot.baseUrl + url;
            }
            return url;
        },
        getEntries: function() {
            var me = this,
                entries = me.entries,
                loadOrderMap, item, i, entry, urls, url;
            if (!entries) {
                entries = [];
                urls = me.getUrls();
                if (me.loadOrder) {
                    loadOrderMap = me.loadOrderMap;
                }
                for (i = 0; i < urls.length; i++) {
                    url = me.prepareUrl(urls[i]);
                    if (loadOrderMap) {
                        item = loadOrderMap[url];
                    }
                    entry = Boot.getEntry(url, {
                        buster: me.buster,
                        charset: me.charset
                    }, item && item.canonicalPath);
                    entry.requests.push(me);
                    entries.push(entry);
                }
                me.entries = entries;
            }
            return entries;
        },
        loadEntries: function(sync) {
            var me = this,
                entries = me.getEntries(),
                len = entries.length,
                start = me.loadStart || 0,
                continueLoad, entries, entry, i;
            if (sync !== undefined) {
                me.sync = sync;
            }
            me.loaded = me.loaded || 0;
            me.loading = me.loading || len;
            for (i = start; i < len; i++) {
                entry = entries[i];
                if (!entry.loaded) {
                    continueLoad = entries[i].load(me.sync);
                } else {
                    continueLoad = true;
                }
                if (!continueLoad) {
                    me.loadStart = i;
                    entry.onDone(function() {
                        me.loadEntries(sync);
                    });
                    break;
                }
            }
            me.processLoadedEntries();
        },
        processLoadedEntries: function() {
            var me = this,
                entries = me.getEntries(),
                len = entries.length,
                start = me.startIndex || 0,
                i, entry;
            if (!me.done) {
                for (i = start; i < len; i++) {
                    entry = entries[i];
                    if (!entry.loaded) {
                        me.startIndex = i;
                        return;
                    }
                    if (!entry.evaluated) {
                        entry.evaluate();
                    }
                    if (entry.error) {
                        me.error = true;
                    }
                }
                me.notify();
            }
        },
        notify: function() {
            var me = this;
            if (!me.done) {
                var error = me.error,
                    fn = me[error ? 'failure' : 'success'],
                    delay = ('delay' in me) ? me.delay : (error ? 1 : Boot.config.chainDelay),
                    scope = me.scope || me;
                me.done = true;
                if (fn) {
                    if (delay === 0 || delay > 0) {
                        setTimeout(function() {
                            fn.call(scope, me);
                        }, delay);
                    } else {
                        fn.call(scope, me);
                    }
                }
                me.fireListeners();
                Boot.requestComplete(me);
            }
        },
        onDone: function(listener) {
            var me = this,
                listeners = me.listeners || (me.listeners = []);
            if (me.done) {
                listener(me);
            } else {
                listeners.push(listener);
            }
        },
        fireListeners: function() {
            var listeners = this.listeners,
                listener;
            if (listeners) {
                while ((listener = listeners.shift())) {
                    listener(this);
                }
            }
        }
    };
    function Entry(cfg) {
        if (cfg.$isEntry) {
            return cfg;
        }
        var charset = cfg.charset || Boot.config.charset,
            manifest = Ext.manifest,
            loader = manifest && manifest.loader,
            cache = (cfg.cache !== undefined) ? cfg.cache : (loader && loader.cache),
            buster, busterParam;
        if (Boot.config.disableCaching) {
            if (cache === undefined) {
                cache = !Boot.config.disableCaching;
            }
            if (cache === false) {
                buster = +new Date();
            } else if (cache !== true) {
                buster = cache;
            }
            if (buster) {
                busterParam = (loader && loader.cacheParam) || Boot.config.disableCachingParam;
                buster = busterParam + "=" + buster;
            }
        }
        _apply(this, cfg);
        this.charset = charset;
        this.buster = buster;
        this.requests = [];
    }

    Entry.prototype = {
        $isEntry: true,
        done: false,
        evaluated: false,
        loaded: false,
        isCrossDomain: function() {
            var me = this;
            if (me.crossDomain === undefined) {
                me.crossDomain = (me.getLoadUrl().indexOf(Boot.origin) !== 0);
            }
            return me.crossDomain;
        },
        isCss: function() {
            var me = this;
            if (me.css === undefined) {
                if (me.url) {
                    var assetConfig = Boot.assetConfig[me.url];
                    me.css = assetConfig ? assetConfig.type === "css" : cssRe.test(me.url);
                } else {
                    me.css = false;
                }
            }
            return this.css;
        },
        getElement: function(tag) {
            var me = this,
                el = me.el;
            if (!el) {
                if (me.isCss()) {
                    tag = tag || "link";
                    el = doc.createElement(tag);
                    if (tag == "link") {
                        el.rel = 'stylesheet';
                        me.prop = 'href';
                    } else {
                        me.prop = "textContent";
                    }
                    el.type = "text/css";
                } else {
                    tag = tag || "script";
                    el = doc.createElement(tag);
                    el.type = 'text/javascript';
                    me.prop = 'src';
                    if (me.charset) {
                        el.charset = me.charset;
                    }
                    if (Boot.hasAsync) {
                        el.async = false;
                    }
                }
                me.el = el;
            }
            return el;
        },
        getLoadUrl: function() {
            var me = this,
                url;
            url = me.canonicalPath ? me.url : Boot.canonicalUrl(me.url);
            if (!me.loadUrl) {
                me.loadUrl = !!me.buster ? (url + (url.indexOf('?') === -1 ? '?' : '&') + me.buster) : url;
            }
            return me.loadUrl;
        },
        fetch: function(req) {
            var url = this.getLoadUrl(),
                async = !!req.async,
                complete = req.complete;
            Boot.fetch(url, complete, this, async);
        },
        onContentLoaded: function(response) {
            var me = this,
                status = response.status,
                content = response.content,
                exception = response.exception,
                url = this.getLoadUrl();
            me.loaded = true;
            if ((exception || status === 0) && !_environment.phantom) {
                me.error = ("Failed loading synchronously via XHR: '" + url + "'. It's likely that the file is either being loaded from a " + "different domain or from the local file system where cross " + "origin requests are not allowed for security reasons. Try " + "asynchronous loading instead.") || true;
                me.evaluated = true;
            } else if ((status >= 200 && status < 300) || status === 304 || _environment.phantom || (status === 0 && content.length > 0)) {
                me.content = content;
            } else {
                me.error = ("Failed loading synchronously via XHR: '" + url + "'. Please verify that the file exists. XHR status code: " + status) || true;
                me.evaluated = true;
            }
        },
        createLoadElement: function(callback) {
            var me = this,
                el = me.getElement();
            me.preserve = true;
            el.onerror = function() {
                me.error = true;
                if (callback) {
                    callback();
                    callback = null;
                }
            };
            if (Boot.isIE10m) {
                el.onreadystatechange = function() {
                    if (this.readyState === 'loaded' || this.readyState === 'complete') {
                        if (callback) {
                            callback();
                            callback = this.onreadystatechange = this.onerror = null;
                        }
                    }
                };
            } else {
                el.onload = function() {
                    callback();
                    callback = this.onload = this.onerror = null;
                };
            }
            el[me.prop] = me.getLoadUrl();
        },
        onLoadElementReady: function() {
            Boot.getHead().appendChild(this.getElement());
            this.evaluated = true;
        },
        inject: function(content, asset) {
            var me = this,
                head = Boot.getHead(),
                url = me.url,
                key = me.key,
                base, el, ieMode, basePath;
            if (me.isCss()) {
                me.preserve = true;
                basePath = key.substring(0, key.lastIndexOf("/") + 1);
                base = doc.createElement('base');
                base.href = basePath;
                if (head.firstChild) {
                    head.insertBefore(base, head.firstChild);
                } else {
                    head.appendChild(base);
                }
                base.href = base.href;
                if (url) {
                    content += "\n/*# sourceURL=" + key + " */";
                }
                el = me.getElement("style");
                ieMode = ('styleSheet' in el);
                head.appendChild(base);
                if (ieMode) {
                    head.appendChild(el);
                    el.styleSheet.cssText = content;
                } else {
                    el.textContent = content;
                    head.appendChild(el);
                }
                head.removeChild(base);
            } else {
                if (url) {
                    content += "\n//# sourceURL=" + key;
                }
                Ext.globalEval(content);
            }
            return me;
        },
        loadCrossDomain: function() {
            var me = this,
                complete = function() {
                    me.el.onerror = me.el.onload = emptyFn;
                    me.el = null;
                    me.loaded = me.evaluated = me.done = true;
                    me.notifyRequests();
                };
            me.createLoadElement(function() {
                complete();
            });
            me.evaluateLoadElement();
            return false;
        },
        loadElement: function() {
            var me = this,
                complete = function() {
                    me.el.onerror = me.el.onload = emptyFn;
                    me.el = null;
                    me.loaded = me.evaluated = me.done = true;
                    me.notifyRequests();
                };
            me.createLoadElement(function() {
                complete();
            });
            me.evaluateLoadElement();
            return true;
        },
        loadSync: function() {
            var me = this;
            me.fetch({
                async: false,
                complete: function(response) {
                    me.onContentLoaded(response);
                }
            });
            me.evaluate();
            me.notifyRequests();
        },
        load: function(sync) {
            var me = this;
            if (!me.loaded) {
                if (me.loading) {
                    return false;
                }
                me.loading = true;
                if (!sync) {
                    if (Boot.isIE10 || me.isCrossDomain()) {
                        return me.loadCrossDomain();
                    }
                    else if (!me.isCss() && Boot.hasReadyState) {
                        me.createLoadElement(function() {
                            me.loaded = true;
                            me.notifyRequests();
                        });
                    } else if (Boot.useElements && !(me.isCss() && _environment.phantom)) {
                        return me.loadElement();
                    } else {
                        me.fetch({
                            async: !sync,
                            complete: function(response) {
                                me.onContentLoaded(response);
                                me.notifyRequests();
                            }
                        });
                    }
                } else {
                    me.loadSync();
                }
            }
            return true;
        },
        evaluateContent: function() {
            this.inject(this.content);
            this.content = null;
        },
        evaluateLoadElement: function() {
            Boot.getHead().appendChild(this.getElement());
        },
        evaluate: function() {
            var me = this;
            if (!me.evaluated) {
                if (me.evaluating) {
                    return;
                }
                me.evaluating = true;
                if (me.content !== undefined) {
                    me.evaluateContent();
                } else if (!me.error) {
                    me.evaluateLoadElement();
                }
                me.evaluated = me.done = true;
                me.cleanup();
            }
        },
        cleanup: function() {
            var me = this,
                el = me.el,
                prop;
            if (!el) {
                return;
            }
            if (!me.preserve) {
                me.el = null;
                el.parentNode.removeChild(el);
                for (prop in el) {
                    try {
                        if (prop !== me.prop) {
                            el[prop] = null;
                        }
                        delete el[prop];
                    } catch (cleanEx) {}
                }
            }
            el.onload = el.onerror = el.onreadystatechange = emptyFn;
        },
        notifyRequests: function() {
            var requests = this.requests,
                len = requests.length,
                i, request;
            for (i = 0; i < len; i++) {
                request = requests[i];
                request.processLoadedEntries();
            }
            if (this.done) {
                this.fireListeners();
            }
        },
        onDone: function(listener) {
            var me = this,
                listeners = me.listeners || (me.listeners = []);
            if (me.done) {
                listener(me);
            } else {
                listeners.push(listener);
            }
        },
        fireListeners: function() {
            var listeners = this.listeners,
                listener;
            if (listeners && listeners.length > 0) {
                while ((listener = listeners.shift())) {
                    listener(this);
                }
            }
        }
    };
    Ext.disableCacheBuster = function(disable, path) {
        var date = new Date();
        date.setTime(date.getTime() + (disable ? 10 * 365 : -1) * 24 * 60 * 60 * 1000);
        date = date.toGMTString();
        doc.cookie = 'ext-cache=1; expires=' + date + '; path=' + (path || '/');
    };
    Boot.init();
    return Boot;
}(function() {}));
Ext.globalEval = Ext.globalEval || (this.execScript ? function(code) {
    execScript(code);
} : function($$code) {
    eval.call(window, $$code);
});
if (!Function.prototype.bind) {
    (function() {
        var slice = Array.prototype.slice,
            bind = function(me) {
                var args = slice.call(arguments, 1),
                    method = this;
                if (args.length) {
                    return function() {
                        var t = arguments;
                        return method.apply(me, t.length ? args.concat(slice.call(t)) : args);
                    };
                }
                args = null;
                return function() {
                    return method.apply(me, arguments);
                };
            };
        Function.prototype.bind = bind;
        bind.$extjs = true;
    }());
}
Ext.setResourcePath = function(poolName, path) {
    var manifest = Ext.manifest || (Ext.manifest = {}),
        paths = manifest.resources || (manifest.resources = {});
    if (manifest) {
        if (typeof poolName !== 'string') {
            Ext.apply(paths, poolName);
        } else {
            paths[poolName] = path;
        }
        manifest.resources = paths;
    }
};
Ext.getResourcePath = function(path, poolName, packageName) {
    if (typeof path !== 'string') {
        poolName = path.pool;
        packageName = path.packageName;
        path = path.path;
    }
    var manifest = Ext.manifest,
        paths = manifest && manifest.resources,
        poolPath = paths[poolName],
        output = [];
    if (poolPath == null) {
        poolPath = paths.path;
        if (poolPath == null) {
            poolPath = 'resources';
        }
    }
    if (poolPath) {
        output.push(poolPath);
    }
    if (packageName) {
        output.push(packageName);
    }
    output.push(path);
    return output.join('/');
};

var Ext = Ext || {};
(function() {
    var global = this,
        objectPrototype = Object.prototype,
        toString = objectPrototype.toString,
        enumerables = [
            'valueOf',
            'toLocaleString',
            'toString',
            'constructor'
        ],
        emptyFn = Ext.fireIdle = function() {},
        privateFn = function() {},
        identityFn = function(o) {
            return o;
        },
        callOverrideParent = function() {
            var method = callOverrideParent.caller.caller;
            return method.$owner.prototype[method.$name].apply(this, arguments);
        },
        manifest = Ext.manifest || {},
        iterableRe = /\[object\s*(?:Array|Arguments|\w*Collection|\w*List|HTML\s+document\.all\s+class)\]/,
        MSDateRe = /^\\?\/Date\(([-+])?(\d+)(?:[+-]\d{4})?\)\\?\/$/,
        elevateArgs, elevateFn, elevateRet, elevateScope, i;
    Ext.global = global;
    Ext.$nextIid = 0;
    Ext.now = Date.now || (Date.now = function() {
        return +new Date();
    });
    Ext.ticks = (global.performance && global.performance.now) ? function() {
        return performance.now();
    } : Ext.now;
    Ext._startTime = Ext.ticks();
    emptyFn.$nullFn = identityFn.$nullFn = emptyFn.$emptyFn = identityFn.$identityFn = privateFn.$nullFn = true;
    privateFn.$privacy = 'framework';
    emptyFn.$noClearOnDestroy = identityFn.$noClearOnDestroy = true;
    privateFn.$noClearOnDestroy = true;
    Ext['suspendLayouts'] = Ext['resumeLayouts'] = emptyFn;
    for (i in {
        toString: 1
    }) {
        enumerables = null;
    }
    Ext.enumerables = enumerables;
    Ext.apply = function(object, config, defaults) {
        var i, j, k;
        if (object) {
            if (defaults) {
                Ext.apply(object, defaults);
            }
            if (config && typeof config === 'object') {
                for (i in config) {
                    object[i] = config[i];
                }
                if (enumerables) {
                    for (j = enumerables.length; j--; ) {
                        k = enumerables[j];
                        if (config.hasOwnProperty(k)) {
                            object[k] = config[k];
                        }
                    }
                }
            }
        }
        return object;
    };
    function addInstanceOverrides(target, owner, overrides) {
        var name, value;
        for (name in overrides) {
            if (overrides.hasOwnProperty(name)) {
                value = overrides[name];
                if (typeof value === 'function') {
                    if (owner.$className) {
                        value.name = owner.$className + '#' + name;
                    }
                    value.$name = name;
                    value.$owner = owner;
                    value.$previous = target.hasOwnProperty(name) ? target[name] : callOverrideParent;
                }
                target[name] = value;
            }
        }
    }
    Ext.buildSettings = Ext.apply({
        baseCSSPrefix: 'x-'
    }, Ext.buildSettings || {});
    Ext.apply(Ext, {
        idSeed: 0,
        idPrefix: 'ext-',
        isRobot: false,
        isSecure: /^https/i.test(window.location.protocol),
        enableGarbageCollector: false,
        enableListenerCollection: true,
        name: Ext.sandboxName || 'Ext',
        privateFn: privateFn,
        emptyFn: emptyFn,
        identityFn: identityFn,
        frameStartTime: Ext.now(),
        manifest: manifest,
        debugConfig: Ext.debugConfig || manifest.debug || {
            hooks: {
                '*': true
            }
        },
        enableAria: true,
        startsWithHashRe: /^#/,
        validIdRe: /^[a-z_][a-z0-9\-_]*$/i,
        BLANK_IMAGE_URL: 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
        makeIdSelector: function(id) {
            if (!Ext.validIdRe.test(id)) {
                Ext.raise('Invalid id selector: "' + id + '"');
            }
            return '#' + id;
        },
        id: function(o, prefix) {
            if (o && o.id) {
                return o.id;
            }
            var id = (prefix || Ext.idPrefix) + (++Ext.idSeed);
            if (o) {
                o.id = id;
            }
            return id;
        },
        returnId: function(o) {
            return o.getId();
        },
        returnTrue: function() {
            return true;
        },
        emptyString: new String(),
        emptyArray: Object.freeze ? Object.freeze([]) : [],
        baseCSSPrefix: Ext.buildSettings.baseCSSPrefix,
        $eventNameMap: {},
        $vendorEventRe: /^(DOMMouse|Moz.+|MS.+|webkit.+)/,
        canonicalEventName: function(name) {
            return Ext.$eventNameMap[name] || (Ext.$eventNameMap[name] = (Ext.$vendorEventRe.test(name) ? name : name.toLowerCase()));
        },
        applyIf: function(object, config) {
            var property;
            if (object && config && typeof config === 'object') {
                for (property in config) {
                    if (object[property] === undefined) {
                        object[property] = config[property];
                    }
                }
            }
            return object;
        },
        destroy: function() {
            var ln = arguments.length,
                i, arg;
            for (i = 0; i < ln; i++) {
                arg = arguments[i];
                if (arg) {
                    if (Ext.isArray(arg)) {
                        this.destroy.apply(this, arg);
                    } else if (Ext.isFunction(arg.destroy) && !arg.destroyed) {
                        arg.destroy();
                    }
                }
            }
            return null;
        },
        destroyMembers: function(object) {
            for (var ref, name,
                i = 1,
                a = arguments,
                len = a.length; i < len; i++) {
                ref = object[name = a[i]];
                if (ref != null) {
                    object[name] = Ext.destroy(ref);
                }
            }
        },
        override: function(target, overrides) {
            if (target.$isClass) {
                target.override(overrides);
            } else if (typeof target === 'function') {
                Ext.apply(target.prototype, overrides);
            } else {
                var owner = target.self,
                    privates;
                if (owner && owner.$isClass) {
                    privates = overrides.privates;
                    if (privates) {
                        overrides = Ext.apply({}, overrides);
                        delete overrides.privates;
                        addInstanceOverrides(target, owner, privates);
                    }
                    addInstanceOverrides(target, owner, overrides);
                } else {
                    Ext.apply(target, overrides);
                }
            }
            return target;
        },
        valueFrom: function(value, defaultValue, allowBlank) {
            return Ext.isEmpty(value, allowBlank) ? defaultValue : value;
        },
        isEmpty: function(value, allowEmptyString) {
            return (value == null) || (!allowEmptyString ? value === '' : false) || (Ext.isArray(value) && value.length === 0);
        },
        isArray: ('isArray' in Array) ? Array.isArray : function(value) {
            return toString.call(value) === '[object Array]';
        },
        isDate: function(obj) {
            return toString.call(obj) === '[object Date]';
        },
        isMSDate: function(value) {
            if (!Ext.isString(value)) {
                return false;
            }
            return MSDateRe.test(value);
        },
        isObject: (toString.call(null) === '[object Object]') ? function(value) {
            return value != null && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
        } : function(value) {
            return toString.call(value) === '[object Object]';
        },
        isSimpleObject: function(value) {
            return value instanceof Object && value.constructor === Object;
        },
        isPrimitive: function(value) {
            var type = typeof value;
            return type === 'string' || type === 'number' || type === 'boolean';
        },
        isFunction: (typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function') ? function(value) {
            return !!value && toString.call(value) === '[object Function]';
        } : function(value) {
            return !!value && typeof value === 'function';
        },
        isNumber: function(value) {
            return typeof value === 'number' && isFinite(value);
        },
        isNumeric: function(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },
        isString: function(value) {
            return typeof value === 'string';
        },
        isBoolean: function(value) {
            return typeof value === 'boolean';
        },
        isElement: function(value) {
            return value ? value.nodeType === 1 : false;
        },
        isTextNode: function(value) {
            return value ? value.nodeName === "#text" : false;
        },
        isDefined: function(value) {
            return typeof value !== 'undefined';
        },
        isIterable: function(value) {
            if (!value || typeof value.length !== 'number' || typeof value === 'string' || Ext.isFunction(value)) {
                return false;
            }
            if (!value.propertyIsEnumerable) {
                return !!value.item;
            }
            if (value.hasOwnProperty('length') && !value.propertyIsEnumerable('length')) {
                return true;
            }
            return iterableRe.test(toString.call(value));
        },
        isDebugEnabled: function(className, defaultEnabled) {
            var debugConfig = Ext.debugConfig.hooks;
            if (debugConfig.hasOwnProperty(className)) {
                return debugConfig[className];
            }
            var enabled = debugConfig['*'],
                prefixLength = 0;
            if (defaultEnabled !== undefined) {
                enabled = defaultEnabled;
            }
            if (!className) {
                return enabled;
            }
            for (var prefix in debugConfig) {
                var value = debugConfig[prefix];
                if (className.charAt(prefix.length) === '.') {
                    if (className.substring(0, prefix.length) === prefix) {
                        if (prefixLength < prefix.length) {
                            prefixLength = prefix.length;
                            enabled = value;
                        }
                    }
                }
            }
            return enabled;
        } || emptyFn,
        clone: function(item, cloneDom) {
            if (item == null) {
                return item;
            }
            if (cloneDom !== false && item.nodeType && item.cloneNode) {
                return item.cloneNode(true);
            }
            var type = toString.call(item),
                i, j, k, clone, key;
            if (type === '[object Date]') {
                return new Date(item.getTime());
            }
            if (type === '[object Array]') {
                i = item.length;
                clone = [];
                while (i--) {
                    clone[i] = Ext.clone(item[i], cloneDom);
                }
            }
            else if (type === '[object Object]' && item.constructor === Object) {
                clone = {};
                for (key in item) {
                    clone[key] = Ext.clone(item[key], cloneDom);
                }
                if (enumerables) {
                    for (j = enumerables.length; j--; ) {
                        k = enumerables[j];
                        if (item.hasOwnProperty(k)) {
                            clone[k] = item[k];
                        }
                    }
                }
            }
            return clone || item;
        },
        getUniqueGlobalNamespace: function() {
            var uniqueGlobalNamespace = this.uniqueGlobalNamespace,
                i;
            if (uniqueGlobalNamespace === undefined) {
                i = 0;
                do {
                    uniqueGlobalNamespace = 'ExtBox' + (++i);
                } while (global[uniqueGlobalNamespace] !== undefined);
                global[uniqueGlobalNamespace] = Ext;
                this.uniqueGlobalNamespace = uniqueGlobalNamespace;
            }
            return uniqueGlobalNamespace;
        },
        functionFactoryCache: {},
        cacheableFunctionFactory: function() {
            var me = this,
                args = Array.prototype.slice.call(arguments),
                cache = me.functionFactoryCache,
                idx, fn, ln;
            if (Ext.isSandboxed) {
                ln = args.length;
                if (ln > 0) {
                    ln--;
                    args[ln] = 'var Ext=window.' + Ext.name + ';' + args[ln];
                }
            }
            idx = args.join('');
            fn = cache[idx];
            if (!fn) {
                fn = Function.prototype.constructor.apply(Function.prototype, args);
                cache[idx] = fn;
            }
            return fn;
        },
        functionFactory: function() {
            var args = Array.prototype.slice.call(arguments),
                ln;
            if (Ext.isSandboxed) {
                ln = args.length;
                if (ln > 0) {
                    ln--;
                    args[ln] = 'var Ext=window.' + Ext.name + ';' + args[ln];
                }
            }
            return Function.prototype.constructor.apply(Function.prototype, args);
        },
        Logger: {
            log: function(message, priority) {
                if (message && global.console) {
                    if (!priority || !(priority in global.console)) {
                        priority = 'log';
                    }
                    message = '[' + priority.toUpperCase() + '] ' + message;
                    global.console[priority](message);
                }
            },
            verbose: function(message) {
                this.log(message, 'verbose');
            },
            info: function(message) {
                this.log(message, 'info');
            },
            warn: function(message) {
                this.log(message, 'warn');
            },
            error: function(message) {
                throw new Error(message);
            },
            deprecate: function(message) {
                this.log(message, 'warn');
            }
        } || {
            verbose: emptyFn,
            log: emptyFn,
            info: emptyFn,
            warn: emptyFn,
            error: function(message) {
                throw new Error(message);
            },
            deprecate: emptyFn
        },
        ariaWarn: function(target, msg) {
            if (Ext.enableAria && !Ext.slicer) {
                if (!Ext.ariaWarn.first) {
                    Ext.ariaWarn.first = true;
                    Ext.log.warn("WAI-ARIA compatibility warnings can be suppressed " + "by adding the following to application startup code:");
                    Ext.log.warn("    Ext.ariaWarn = Ext.emptyFn;");
                }
                Ext.log.warn({
                    msg: msg,
                    dump: target
                });
            }
        },
        getElementById: function(id) {
            return document.getElementById(id);
        },
        splitAndUnescape: (function() {
            var cache = {};
            return function(origin, delimiter) {
                if (!origin) {
                    return [];
                } else if (!delimiter) {
                    return [
                        origin
                    ];
                }
                var replaceRe = cache[delimiter] || (cache[delimiter] = new RegExp('\\\\' + delimiter, 'g')),
                    result = [],
                    parts, part;
                parts = origin.split(delimiter);
                while ((part = parts.shift()) !== undefined) {
                    while (part.charAt(part.length - 1) === '\\' && parts.length > 0) {
                        part = part + delimiter + parts.shift();
                    }
                    part = part.replace(replaceRe, delimiter);
                    result.push(part);
                }
                return result;
            };
        })(),
        doElevate: function() {
            var fn = elevateFn,
                args = elevateArgs,
                scope = elevateScope;
            elevateFn = elevateArgs = elevateScope = null;
            elevateRet = args ? fn.apply(scope, args) : fn.call(scope);
            Ext.fireIdle();
        },
        elevate: function(fn, scope, args, timer) {
            var ret;
            if (args && !args.length) {
                args = null;
            }
            Ext._suppressIdle = false;
            if (timer) {
                timer.tick();
            }
            if (Ext.elevateFunction) {
                elevateFn = fn;
                elevateScope = scope;
                elevateArgs = args;
                Ext.elevateFunction(Ext.doElevate);
                ret = elevateRet;
                elevateRet = null;
            } else {
                ret = args ? fn.apply(scope, args) : fn.call(scope);
                Ext.fireIdle();
            }
            if (timer) {
                timer.tock();
            }
            return ret;
        },
        Timer: {
            all: {},
            track: false,
            captureStack: true,
            created: function(kind, id, info) {
                if (!Ext.Timer.track) {
                    return null;
                }
                var timer = Ext.apply({
                        kind: kind,
                        id: id,
                        done: false,
                        firing: false,
                        creator: Ext.Timer.captureStack ? new Error().stack : null,
                        tick: Ext.Timer.tick,
                        tock: Ext.Timer.tock
                    }, info);
                var timers = Ext.Timer.all[kind] || (Ext.Timer.all[kind] = {});
                timers[timer.id] = timer;
                if (Ext.Timer.hook) {
                    Ext.Timer.hook(timer);
                }
                return timer;
            },
            get: function(id, kind) {
                kind = kind || 'timeout';
                var timers = Ext.Timer.all[kind];
                return timers && timers[id] || null;
            },
            cancel: function(kind, id) {
                var timers = Ext.Timer.all[kind],
                    timer = timers && timers[id];
                if (timer) {
                    timer.cancelled = true;
                    timers[id] = null;
                    delete timers[id];
                }
            },
            tick: function() {
                if (Ext.Timer.firing) {
                    Ext.log.error('Previous timer state not cleaned up properly: ' + Ext.Timer.firing.creator);
                }
                if (this.kind !== 'interval') {
                    this.done = true;
                    Ext.Timer.all[this.kind][this.id] = null;
                    delete Ext.Timer.all[this.kind][this.id];
                }
                this.firing = true;
                Ext.Timer.firing = this;
            },
            tock: function() {
                this.firing = false;
                if (Ext.Timer.firing === this) {
                    Ext.Timer.firing = null;
                }
            }
        },
        getExpando: function(target, id) {
            var expandos = target.$expandos;
            return expandos && expandos[id] || null;
        },
        setExpando: function(target, id, value) {
            var expandos = target.$expandos;
            if (value !== undefined) {
                (expandos || (target.$expandos = {}))[id] = value;
            } else if (expandos) {
                delete expandos[id];
            }
            return value;
        }
    });
    Ext.returnTrue.$nullFn = Ext.returnId.$nullFn = true;
}());

Ext.Base = (function(flexSetter) {
    var noArgs = [],
        baseStaticMember,
        baseStaticMembers = [],
        makeDeprecatedMethod = function(oldName, newName, msg) {
            var message = '"' + oldName + '" is deprecated.';
            if (msg) {
                message += ' ' + msg;
            } else if (newName) {
                message += ' Please use "' + newName + '" instead.';
            }
            return function() {
                Ext.raise(message);
            };
        },
        addDeprecatedProperty = function(object, oldName, newName, message) {
            if (!message) {
                message = '"' + oldName + '" is deprecated.';
            }
            if (newName) {
                message += ' Please use "' + newName + '" instead.';
            }
            if (message) {
                Ext.Object.defineProperty(object, oldName, {
                    get: function() {
                        Ext.raise(message);
                    },
                    set: function(value) {
                        Ext.raise(message);
                    },
                    configurable: true
                });
            }
        },
        getOwnObject = function(proto, name) {
            if (!proto.hasOwnProperty(name)) {
                proto[name] = Ext.Object.chain(getOwnObject(proto.superclass, name));
            }
            return proto[name];
        },
        makeAliasFn = function(name) {
            return function() {
                return this[name].apply(this, arguments);
            };
        },
        Version = Ext.Version,
        leadingDigitRe = /^\d/,
        oneMember = {},
        aliasOneMember = {},
        Base = function() {},
        BasePrototype = Base.prototype,
        Reaper;
    Ext.Reaper = Reaper = {
        delay: 100,
        queue: [],
        timer: null,
        add: function(obj) {
            if (!Reaper.timer) {
                Reaper.timer = Ext.defer(Reaper.tick, Reaper.delay);
            }
            Reaper.queue.push(obj);
        },
        flush: function() {
            if (Reaper.timer) {
                Ext.undefer(Reaper.timer);
                Reaper.timer = null;
            }
            var queue = Reaper.queue,
                n = queue.length,
                i, obj;
            Reaper.queue = [];
            for (i = 0; i < n; ++i) {
                obj = queue[i];
                if (obj && obj.$reap) {
                    obj.$reap();
                }
            }
        },
        tick: function() {
            Reaper.timer = null;
            Reaper.flush();
        }
    };
    Ext.apply(Base, {
        $className: 'Ext.Base',
        $isClass: true,
        create: function() {
            return Ext.create.apply(Ext, [
                this
            ].concat(Array.prototype.slice.call(arguments, 0)));
        },
        addConfigTransform: function(methodName, priority) {
            var transforms = getOwnObject(this.prototype, '$configTransforms');
            if (this.$configTransforms) {
                Ext.raise('Config transforms cannot be added after instances are created');
            }
            transforms[methodName] = priority;
        },
        addDeprecations: function(deprecations) {
            var me = this,
                all = [],
                compatVersion = Ext.getCompatVersion(deprecations.name),
                configurator = me.getConfigurator(),
                displayName = (me.$className || '') + '#',
                deprecate, versionSpec, index, message, target, enabled, existing, fn, names, oldName, newName, member, statics, version;
            for (versionSpec in deprecations) {
                if (leadingDigitRe.test(versionSpec)) {
                    version = new Ext.Version(versionSpec);
                    version.deprecations = deprecations[versionSpec];
                    all.push(version);
                }
            }
            all.sort(Version.compare);
            for (index = all.length; index--; ) {
                deprecate = (version = all[index]).deprecations;
                target = me.prototype;
                statics = deprecate.statics;
                enabled = compatVersion && compatVersion.lt(version);
                if (!enabled) {}
                else if (!enabled) {
                    break;
                }
                while (deprecate) {
                    names = deprecate.methods;
                    if (names) {
                        for (oldName in names) {
                            member = names[oldName];
                            fn = null;
                            if (!member) {
                                Ext.Assert.isNotDefinedProp(target, oldName);
                                fn = makeDeprecatedMethod(displayName + oldName);
                            } else if (Ext.isString(member)) {
                                Ext.Assert.isNotDefinedProp(target, oldName);
                                Ext.Assert.isDefinedProp(target, member);
                                if (enabled) {
                                    fn = makeAliasFn(member);
                                } else {
                                    fn = makeDeprecatedMethod(displayName + oldName, member);
                                }
                            } else {
                                message = '';
                                if (member.message || member.fn) {
                                    message = member.message;
                                    member = member.fn;
                                }
                                existing = target.hasOwnProperty(oldName) && target[oldName];
                                if (enabled && member) {
                                    member.$owner = me;
                                    member.$name = oldName;
                                    member.name = displayName + oldName;
                                    if (existing) {
                                        member.$previous = existing;
                                    }
                                    fn = member;
                                } else if (!existing) {
                                    fn = makeDeprecatedMethod(displayName + oldName, null, message);
                                }
                            }
                            if (fn) {
                                target[oldName] = fn;
                            }
                        }
                    }
                    names = deprecate.configs;
                    if (names) {
                        configurator.addDeprecations(names);
                    }
                    names = deprecate.properties;
                    if (names && !enabled) {
                        for (oldName in names) {
                            newName = names[oldName];
                            if (Ext.isString(newName)) {
                                addDeprecatedProperty(target, displayName + oldName, newName);
                            } else if (newName && newName.message) {
                                addDeprecatedProperty(target, displayName + oldName, null, newName.message);
                            } else {
                                addDeprecatedProperty(target, displayName + oldName);
                            }
                        }
                    }
                    deprecate = statics;
                    statics = null;
                    target = me;
                }
            }
        },
        extend: function(parentClass) {
            var me = this,
                parentPrototype = parentClass.prototype,
                prototype, name, statics;
            prototype = me.prototype = Ext.Object.chain(parentPrototype);
            prototype.self = me;
            me.superclass = prototype.superclass = parentPrototype;
            if (!parentClass.$isClass) {
                for (name in BasePrototype) {
                    if (name in prototype) {
                        prototype[name] = BasePrototype[name];
                    }
                }
            }
            statics = parentPrototype.$inheritableStatics;
            if (statics) {
                for (name in statics) {
                    if (!me.hasOwnProperty(name)) {
                        me[name] = parentClass[name];
                    }
                }
            }
            if (parentClass.$onExtended) {
                me.$onExtended = parentClass.$onExtended.slice();
            }
            me.getConfigurator();
        },
        $onExtended: [],
        triggerExtended: function() {
            if (Ext.classSystemMonitor) {
                Ext.classSystemMonitor(this, 'Ext.Base#triggerExtended', arguments);
            }
            var callbacks = this.$onExtended,
                ln = callbacks.length,
                i, callback;
            if (ln > 0) {
                for (i = 0; i < ln; i++) {
                    callback = callbacks[i];
                    callback.fn.apply(callback.scope || this, arguments);
                }
            }
        },
        onExtended: function(fn, scope) {
            this.$onExtended.push({
                fn: fn,
                scope: scope
            });
            return this;
        },
        addStatics: function(members) {
            this.addMembers(members, true);
            return this;
        },
        addInheritableStatics: function(members) {
            var me = this,
                proto = me.prototype,
                inheritableStatics = me.$inheritableStatics,
                name, member, current;
            if (!inheritableStatics) {
                inheritableStatics = Ext.apply({}, proto.$inheritableStatics);
                me.$inheritableStatics = proto.$inheritableStatics = inheritableStatics;
            }
            var className = Ext.getClassName(me) + '.';
            for (name in members) {
                if (members.hasOwnProperty(name)) {
                    member = members[name];
                    current = me[name];
                    if (typeof member === 'function') {
                        member.name = className + name;
                    }
                    if (typeof current === 'function' && !current.$isClass && !current.$nullFn) {
                        member.$previous = current;
                    }
                    me[name] = member;
                    inheritableStatics[name] = true;
                }
            }
            return me;
        },
        addMembers: function(members, isStatic, privacy) {
            var me = this,
                cloneFunction = Ext.Function.clone,
                target = isStatic ? me : me.prototype,
                defaultConfig = !isStatic && target.defaultConfig,
                enumerables = Ext.enumerables,
                privates = members.privates,
                configs, i, ln, member, name, subPrivacy, privateStatics;
            var displayName = (me.$className || '') + '#';
            if (privates) {
                delete members.privates;
                if (!isStatic) {
                    privateStatics = privates.statics;
                    delete privates.statics;
                }
                subPrivacy = privates.privacy || privacy || 'framework';
                me.addMembers(privates, isStatic, subPrivacy);
                if (privateStatics) {
                    me.addMembers(privateStatics, true, subPrivacy);
                }
            }
            for (name in members) {
                if (members.hasOwnProperty(name)) {
                    member = members[name];
                    if (privacy === true) {
                        privacy = 'framework';
                    }
                    if (member && member.$nullFn && privacy !== member.$privacy) {
                        Ext.raise('Cannot use stock function for private method ' + (me.$className ? me.$className + '#' : '') + name);
                    }
                    if (typeof member === 'function' && !member.$isClass && !member.$nullFn) {
                        if (member.$owner) {
                            member = cloneFunction(member);
                        }
                        if (target.hasOwnProperty(name)) {
                            member.$previous = target[name];
                        }
                        member.$owner = me;
                        member.$name = name;
                        member.name = displayName + name;
                        var existing = target[name];
                        if (privacy) {
                            member.$privacy = privacy;
                            if (existing && existing.$privacy && existing.$privacy !== privacy) {
                                Ext.privacyViolation(me, existing, member, isStatic);
                            }
                        } else if (existing && existing.$privacy) {
                            Ext.privacyViolation(me, existing, member, isStatic);
                        }
                    }
                    else if (defaultConfig && (name in defaultConfig) && !target.config.hasOwnProperty(name)) {
                        (configs || (configs = {}))[name] = member;

                        continue;
                    }
                    target[name] = member;
                }
            }
            if (configs) {
                me.addConfig(configs);
            }
            if (enumerables) {
                for (i = 0 , ln = enumerables.length; i < ln; ++i) {
                    if (members.hasOwnProperty(name = enumerables[i])) {
                        member = members[name];
                        if (member && !member.$nullFn) {
                            if (member.$owner) {
                                member = cloneFunction(member);
                            }
                            member.$owner = me;
                            member.$name = name;
                            member.name = displayName + name;
                            if (target.hasOwnProperty(name)) {
                                member.$previous = target[name];
                            }
                        }
                        target[name] = member;
                    }
                }
            }
            return this;
        },
        addMember: function(name, member, privacy) {
            oneMember[name] = member;
            this.addMembers(oneMember, false, privacy);
            delete oneMember[name];
            return this;
        },
        hookMember: function(name, member) {
            var existing = this.prototype[name];
            return this.addMember(name, member, existing && existing.$privacy);
        },
        borrow: function(fromClass, members) {
            if (Ext.classSystemMonitor) {
                Ext.classSystemMonitor(this, 'Ext.Base#borrow', arguments);
            }
            var prototype = fromClass.prototype,
                membersObj = {},
                i, ln, name;
            members = Ext.Array.from(members);
            for (i = 0 , ln = members.length; i < ln; i++) {
                name = members[i];
                membersObj[name] = prototype[name];
            }
            return this.addMembers(membersObj);
        },
        override: function(members) {
            var me = this,
                statics = members.statics,
                inheritableStatics = members.inheritableStatics,
                config = members.config,
                mixins = members.mixins,
                cachedConfig = members.cachedConfig;
            if (statics || inheritableStatics || config) {
                members = Ext.apply({}, members);
            }
            if (statics) {
                me.addMembers(statics, true);
                delete members.statics;
            }
            if (inheritableStatics) {
                me.addInheritableStatics(inheritableStatics);
                delete members.inheritableStatics;
            }
            if (members.platformConfig) {
                me.addPlatformConfig(members);
            }
            if (config) {
                me.addConfig(config);
                delete members.config;
            }
            if (cachedConfig) {
                me.addCachedConfig(cachedConfig);
                delete members.cachedConfig;
            }
            delete members.mixins;
            me.addMembers(members);
            if (mixins) {
                me.mixin(mixins);
            }
            return me;
        },
        addPlatformConfig: function(data) {
            var me = this,
                prototype = me.prototype,
                platformConfigs = data.platformConfig,
                added, classConfigs, configs, configurator, keys, name, value, i, ln;
            delete prototype.platformConfig;
            if (platformConfigs instanceof Array) {
                throw new Error('platformConfigs must be specified as an object.');
            }
            configurator = me.getConfigurator();
            classConfigs = configurator.configs;
            keys = Ext.getPlatformConfigKeys(platformConfigs);
            for (i = 0 , ln = keys.length; i < ln; ++i) {
                configs = platformConfigs[keys[i]];
                added = null;
                for (name in configs) {
                    value = configs[name];
                    if (name in classConfigs) {
                        (added || (added = {}))[name] = value;
                    } else {
                        prototype[name] = value;
                    }
                }
                if (added) {
                    configurator.add(added);
                }
            }
        },
        callParent: function(args) {
            var method;
            return (method = this.callParent.caller) && (method.$previous || ((method = method.$owner ? method : method.caller) && method.$owner.superclass.self[method.$name])).apply(this, args || noArgs);
        },
        callSuper: function(args) {
            var method;
            return (method = this.callSuper.caller) && ((method = method.$owner ? method : method.caller) && method.$owner.superclass.self[method.$name]).apply(this, args || noArgs);
        },
        mixin: function(name, mixinClass) {
            var me = this,
                mixin, prototype, key, statics, i, ln, mixinName, mixinValue, mixins, mixinStatics, staticName;
            if (typeof name !== 'string') {
                mixins = name;
                if (mixins instanceof Array) {
                    for (i = 0 , ln = mixins.length; i < ln; i++) {
                        mixin = mixins[i];
                        me.mixin(mixin.prototype.mixinId || mixin.$className, mixin);
                    }
                } else {
                    for (mixinName in mixins) {
                        me.mixin(mixinName, mixins[mixinName]);
                    }
                }
                return;
            }
            mixin = mixinClass.prototype;
            prototype = me.prototype;
            if (mixin.onClassMixedIn) {
                mixin.onClassMixedIn.call(mixinClass, me);
            }
            if (!prototype.hasOwnProperty('mixins')) {
                if ('mixins' in prototype) {
                    prototype.mixins = Ext.Object.chain(prototype.mixins);
                } else {
                    prototype.mixins = {};
                }
            }
            for (key in mixin) {
                mixinValue = mixin[key];
                if (key === 'mixins') {
                    Ext.applyIf(prototype.mixins, mixinValue);
                }
                else if (!(key === 'mixinId' || key === 'config' || key === '$inheritableStatics') && (prototype[key] === undefined)) {
                    prototype[key] = mixinValue;
                }
            }
            statics = mixin.$inheritableStatics;
            if (statics) {
                mixinStatics = {};
                for (staticName in statics) {
                    if (!me.hasOwnProperty(staticName)) {
                        mixinStatics[staticName] = mixinClass[staticName];
                    }
                }
                me.addInheritableStatics(mixinStatics);
            }
            if ('config' in mixin) {
                me.addConfig(mixin.config, mixinClass);
            }
            prototype.mixins[name] = mixin;
            if (mixin.afterClassMixedIn) {
                mixin.afterClassMixedIn.call(mixinClass, me);
            }
            return me;
        },
        addConfig: function(config, mixinClass) {
            var cfg = this.$config || this.getConfigurator();
            cfg.add(config, mixinClass);
        },
        addCachedConfig: function(config, isMixin) {
            var cached = {},
                key;
            for (key in config) {
                cached[key] = {
                    cached: true,
                    $value: config[key]
                };
            }
            this.addConfig(cached, isMixin);
        },
        getConfigurator: function() {
            return this.$config || new Ext.Configurator(this);
        },
        getName: function() {
            return Ext.getClassName(this);
        },
        createAlias: flexSetter(function(alias, origin) {
            aliasOneMember[alias] = function() {
                return this[origin].apply(this, arguments);
            };
            this.override(aliasOneMember);
            delete aliasOneMember[alias];
        })
    });
    for (baseStaticMember in Base) {
        if (Base.hasOwnProperty(baseStaticMember)) {
            baseStaticMembers.push(baseStaticMember);
        }
    }
    Base.$staticMembers = baseStaticMembers;
    Base.getConfigurator();
    Base.addMembers({
        $className: 'Ext.Base',
        $configTransforms: {},
        isInstance: true,
        $configPrefixed: true,
        $configStrict: true,
        isConfiguring: false,
        isFirstInstance: false,
        destroyed: false,
        clearPropertiesOnDestroy: true,
        clearPrototypeOnDestroy: false,
        statics: function() {
            var method = this.statics.caller,
                self = this.self;
            if (!method) {
                return self;
            }
            return method.$owner;
        },
        callParent: function(args) {
            var method,
                superMethod = (method = this.callParent.caller) && (method.$previous || ((method = method.$owner ? method : method.caller) && method.$owner.superclass[method.$name]));
            if (!superMethod) {
                method = this.callParent.caller;
                var parentClass, methodName;
                if (!method.$owner) {
                    if (!method.caller) {
                        throw new Error("Attempting to call a protected method from the " + "public scope, which is not allowed");
                    }
                    method = method.caller;
                }
                parentClass = method.$owner.superclass;
                methodName = method.$name;
                if (!(methodName in parentClass)) {
                    throw new Error("this.callParent() was called but there's no such method (" + methodName + ") found in the parent class (" + (Ext.getClassName(parentClass) || 'Object') + ")");
                }
            }
            return superMethod.apply(this, args || noArgs);
        },
        callSuper: function(args) {
            var method,
                superMethod = (method = this.callSuper.caller) && ((method = method.$owner ? method : method.caller) && method.$owner.superclass[method.$name]);
            if (!superMethod) {
                method = this.callSuper.caller;
                var parentClass, methodName;
                if (!method.$owner) {
                    if (!method.caller) {
                        throw new Error("Attempting to call a protected method from the " + "public scope, which is not allowed");
                    }
                    method = method.caller;
                }
                parentClass = method.$owner.superclass;
                methodName = method.$name;
                if (!(methodName in parentClass)) {
                    throw new Error("this.callSuper() was called but there's no such method (" + methodName + ") found in the parent class (" + (Ext.getClassName(parentClass) || 'Object') + ")");
                }
            }
            return superMethod.apply(this, args || noArgs);
        },
        self: Base,
        constructor: function() {
            return this;
        },
        initConfig: function(instanceConfig) {
            var me = this,
                cfg = me.self.getConfigurator();
            me.initConfig = Ext.emptyFn;
            me.initialConfig = instanceConfig || {};
            cfg.configure(me, instanceConfig);
            return me;
        },
        beforeInitConfig: Ext.emptyFn,
        getConfig: function(name, peek, ifInitialized) {
            var me = this,
                ret, cfg, propName;
            if (name) {
                cfg = me.self.$config.configs[name];
                if (cfg) {
                    propName = me.$configPrefixed ? cfg.names.internal : name;
                    if (ifInitialized) {
                        ret = me.hasOwnProperty(propName) ? me[propName] : null;
                    } else if (peek) {
                        ret = me.hasOwnProperty(propName) ? me[propName] : me.config[name];
                    } else {
                        ret = me[cfg.names.get]();
                    }
                } else {
                    ret = me[name];
                }
            } else {
                ret = me.getCurrentConfig();
            }
            return ret;
        },
        destroyMembers: function() {
            var me = this,
                configs = me.self.$config.configs,
                len = arguments.length,
                cfg, name, value, i;
            for (i = 0; i < len; i++) {
                name = arguments[i];
                cfg = configs[name];
                name = cfg && me.$configPrefixed ? cfg.names.internal : name;
                value = me.hasOwnProperty(name) && me[name];
                if (value) {
                    Ext.destroy(value);
                    me[name] = null;
                }
            }
        },
        freezeConfig: function(name) {
            var me = this,
                config = Ext.Config.get(name),
                names = config.names,
                value = me[names.get]();
            me[names.set] = function(v) {
                if (v !== value) {
                    Ext.raise('Cannot change frozen config "' + name + '"');
                }
                return me;
            };
            if (!Ext.isIE8) {
                Object.defineProperty(me, me.$configPrefixed ? names.internal : name, {
                    get: function() {
                        return value;
                    },
                    set: function(v) {
                        if (v !== value) {
                            Ext.raise('Cannot change frozen config "' + name + '"');
                        }
                    }
                });
            }
        },
        setConfig: function(name, value, options) {
            var me = this,
                configurator, config, prop;
            if (name) {
                configurator = me.self.getConfigurator();
                if (typeof name === 'string') {
                    config = configurator.configs[name];
                    if (!config) {
                        if (me.$configStrict) {
                            prop = me.self.prototype[name];
                            if ((typeof prop === 'function') && !prop.$nullFn) {
                                Ext.Error.raise("Cannot override method " + name + " on " + me.$className + " instance.");
                                return me;
                            } else {
                                if (name !== 'type') {
                                    Ext.log.warn('No such config "' + name + '" for class ' + me.$className);
                                }
                            }
                        }
                        config = Ext.Config.map[name] || Ext.Config.get(name);
                    }
                    if (me[config.names.set]) {
                        me[config.names.set](value);
                    } else {
                        me[name] = value;
                    }
                } else {
                    configurator.reconfigure(me, name, options || value);
                }
            }
            return me;
        },
        getConfigWatcher: function() {
            return this.$configWatch || (this.$configWatch = new Ext.mixin.Watchable());
        },
        watchConfig: function(name, fn, scope) {
            var watcher = this.getConfigWatcher();
            return watcher.on.apply(watcher, arguments);
        },
        $configWatch: null,
        getCurrentConfig: function() {
            var cfg = this.self.getConfigurator();
            return cfg.getCurrentConfig(this);
        },
        hasConfig: function(name) {
            return name in this.defaultConfig;
        },
        getInitialConfig: function(name) {
            var config = this.config;
            if (!name) {
                return config;
            }
            return config[name];
        },
        $links: null,
        link: function(name, value) {
            var me = this,
                links = me.$links || (me.$links = {});
            links[name] = true;
            me[name] = value;
            return value;
        },
        unlink: function(names) {
            var me = this,
                i, ln, link, value;
            if (!Ext.isArray(names)) {
                Ext.raise('Invalid argument - expected array of strings');
            }
            for (i = 0 , ln = names.length; i < ln; i++) {
                link = names[i];
                value = me[link];
                if (value) {
                    if (value.isInstance && !value.destroyed) {
                        value.destroy();
                    } else if (value.parentNode && 'nodeType' in value) {
                        value.parentNode.removeChild(value);
                    }
                }
                me[link] = null;
            }
            return me;
        },
        $reap: function() {
            var me = this,
                keepers = me.$noClearOnDestroy,
                props, prop, val, t, i, len;
            props = Ext.Object.getKeys(me);
            for (i = 0 , len = props.length; i < len; i++) {
                prop = props[i];
                val = me[prop];
                if (val && !(keepers && keepers[prop])) {
                    t = typeof val;
                    if (t === 'object' || (t === 'function' && !val.$noClearOnDestroy)) {
                        me[prop] = null;
                    }
                }
            }
            me.$nulled = true;
            if (Object.setPrototypeOf) {
                if (me.clearPrototypeOnDestroy && !me.$vetoClearingPrototypeOnDestroy) {
                    props = me.$preservePrototypeProperties;
                    if (props) {
                        for (i = 0 , len = props.length; i < len; i++) {
                            prop = props[i];
                            if (!me.hasOwnProperty(prop)) {
                                me[prop] = me[prop];
                            }
                        }
                    }
                    Object.setPrototypeOf(me, null);
                }
            }
        },
        destroy: function() {
            var me = this,
                links = me.$links,
                clearPropertiesOnDestroy = me.clearPropertiesOnDestroy;
            if (links) {
                me.$links = null;
                me.unlink(Ext.Object.getKeys(links));
            }
            me.destroy = Ext.emptyFn;
            me.isDestroyed = me.destroyed = true;
            if (clearPropertiesOnDestroy === true) {
                if (!me.isObservable) {
                    me.$reap();
                }
            } else if (clearPropertiesOnDestroy) {
                if (clearPropertiesOnDestroy !== 'async') {
                    Ext.raise('Invalid value for clearPropertiesOnDestroy');
                }
                Reaper.add(me);
            }
        }
    });
    BasePrototype.callOverridden = BasePrototype.callParent;
    Ext.privacyViolation = function(cls, existing, member, isStatic) {
        var name = member.$name,
            conflictCls = existing.$owner && existing.$owner.$className,
            s = isStatic ? 'static ' : '',
            msg = member.$privacy ? 'Private ' + s + member.$privacy + ' method "' + name + '"' : 'Public ' + s + 'method "' + name + '"';
        if (cls.$className) {
            msg = cls.$className + ': ' + msg;
        }
        if (!existing.$privacy) {
            msg += conflictCls ? ' hides public method inherited from ' + conflictCls : ' hides inherited public method.';
        } else {
            msg += conflictCls ? ' conflicts with private ' + existing.$privacy + ' method declared by ' + conflictCls : ' conflicts with inherited private ' + existing.$privacy + ' method.';
        }
        var compat = Ext.getCompatVersion(),
            ver = Ext.getVersion();
        if (ver && compat && compat.lt(ver)) {
            Ext.log.error(msg);
        } else {
            Ext.raise(msg);
        }
    };
    Ext.Reaper.tick.$skipTimerCheck = true;
    return Base;
}(Ext.Function.flexSetter));

Ext.util = Ext.util || {};
Ext.util.DelayedTask = function(fn, scope, args, cancelOnDelay, fireIdleEvent) {
    var me = this,
        delay,
        call = function() {
            me.id = null;
            if (!(scope && scope.destroyed)) {
                if (args) {
                    fn.apply(scope, args);
                } else {
                    fn.call(scope);
                }
            }
            if (fireIdleEvent === false) {
                Ext._suppressIdle = true;
            }
        };
    if (fn) {
        call.$origFn = fn.$origFn || fn;
        call.$skipTimerCheck = call.$origFn.$skipTimerCheck;
    }
    cancelOnDelay = typeof cancelOnDelay === 'boolean' ? cancelOnDelay : true;
    me.id = null;
    me.delay = function(newDelay, newFn, newScope, newArgs) {
        if (cancelOnDelay) {
            me.cancel();
        }
        if (typeof newDelay === 'number') {
            delay = newDelay;
        }
        fn = newFn || fn;
        scope = newScope || scope;
        args = newArgs || args;
        me.delayTime = delay;
        if (fn) {
            call.$origFn = fn.$origFn || fn;
            call.$skipTimerCheck = call.$origFn.$skipTimerCheck;
        }
        if (!me.id) {
            if (delay === -1) {
                me.id = Ext.raf(call);
            } else {
                me.id = Ext.defer(call, delay || 1);
            }
        }
        return me.id;
    };
    me.cancel = function() {
        if (me.id) {
            if (me.delayTime === -1) {
                Ext.unraf(me.id);
            } else {
                Ext.undefer(me.id);
            }
            me.id = null;
        }
    };
    me.flush = function() {
        var was;
        if (me.id) {
            me.cancel();
            was = fireIdleEvent;
            fireIdleEvent = true;
            call();
            fireIdleEvent = was;
        }
    };
    me.stop = function(stopFn, stopScope) {
        if (stopFn && stopFn === fn && (!stopScope || stopScope === scope)) {
            me.cancel();
        }
    };
};

Ext.define('Ext.util.Event', function() {
    var arraySlice = Array.prototype.slice,
        arrayInsert = Ext.Array.insert,
        toArray = Ext.Array.toArray,
        fireArgs = {};
    return {
        isEvent: true,
        suspended: 0,
        noOptions: {},
        constructor: function(observable, name) {
            this.name = name;
            this.observable = observable;
            this.listeners = [];
        },
        addListener: function(fn, scope, options, caller, manager) {
            var me = this,
                added = false,
                observable = me.observable,
                eventName = me.name,
                listeners, listener, priority, isNegativePriority, highestNegativePriorityIndex, hasNegativePriorityIndex, length, index, i, listenerPriority, managedListeners;
            if (scope && !Ext._namedScopes[scope] && (typeof fn === 'string') && (typeof scope[fn] !== 'function')) {
                Ext.raise("No method named '" + fn + "' found on scope object");
            }
            if (me.findListener(fn, scope) === -1) {
                listener = me.createListener(fn, scope, options, caller, manager);
                if (me.firing) {
                    me.listeners = me.listeners.slice(0);
                }
                listeners = me.listeners;
                index = length = listeners.length;
                priority = options && options.priority;
                highestNegativePriorityIndex = me._highestNegativePriorityIndex;
                hasNegativePriorityIndex = highestNegativePriorityIndex !== undefined;
                if (priority) {
                    isNegativePriority = (priority < 0);
                    if (!isNegativePriority || hasNegativePriorityIndex) {
                        for (i = (isNegativePriority ? highestNegativePriorityIndex : 0); i < length; i++) {
                            listenerPriority = listeners[i].o ? listeners[i].o.priority || 0 : 0;
                            if (listenerPriority < priority) {
                                index = i;
                                break;
                            }
                        }
                    } else {
                        me._highestNegativePriorityIndex = index;
                    }
                } else if (hasNegativePriorityIndex) {
                    index = highestNegativePriorityIndex;
                }
                if (!isNegativePriority && index <= highestNegativePriorityIndex) {
                    me._highestNegativePriorityIndex++;
                }
                if (index === length) {
                    listeners[length] = listener;
                } else {
                    arrayInsert(listeners, index, [
                        listener
                    ]);
                }
                if (observable.isElement) {
                    observable._getPublisher(eventName, options.translate === false).subscribe(observable, eventName, options.delegated !== false, options.capture);
                }
                if (manager) {
                    managedListeners = manager.managedListeners || (manager.managedListeners = []);
                    managedListeners.push({
                        item: me.observable,
                        ename: (options && options.managedName) || me.name,
                        fn: fn,
                        scope: scope,
                        options: options
                    });
                }
                added = true;
            }
            return added;
        },
        createListener: function(fn, scope, o, caller, manager) {
            var me = this,
                namedScopes = Ext._namedScopes,
                namedScope = namedScopes[scope],
                listener = {
                    fn: fn,
                    scope: scope,
                    ev: me,
                    caller: caller,
                    manager: manager,
                    namedScope: namedScope,
                    defaultScope: namedScope ? (scope || me.observable) : undefined,
                    lateBound: typeof fn === 'string'
                },
                handler = fn,
                wrapped = false,
                type;
            if (listener.lateBound && fn[2] === '.') {
                if (fn.substr(0, 2) !== 'up') {
                    Ext.raise('Invalid listener method: ' + fn);
                }
                listener.defaultScope = null;
                listener.namedScope = namedScopes[listener.scope = scope = 'up'];
                listener.fn = handler = fn.substr(3);
            }
            if (o) {
                listener.o = o;
                if (o.single) {
                    handler = me.createSingle(handler, listener, o, scope);
                    wrapped = true;
                }
                if (o.target) {
                    handler = me.createTargeted(handler, listener, o, scope, wrapped);
                    wrapped = true;
                }
                if (o.onFrame) {
                    handler = me.createAnimFrame(handler, listener, o, scope, wrapped);
                    wrapped = true;
                }
                if (o.delay) {
                    handler = me.createDelayed(handler, listener, o, scope, wrapped);
                    wrapped = true;
                }
                if (o.buffer) {
                    handler = me.createBuffered(handler, listener, o, scope, wrapped);
                    wrapped = true;
                }
                if (me.observable.isElement) {
                    type = o.type;
                    if (type) {
                        listener.type = type;
                    }
                }
            }
            listener.fireFn = handler;
            listener.wrapped = wrapped;
            return listener;
        },
        findListener: function(fn, scope) {
            var listeners = this.listeners,
                i = listeners.length,
                listener;
            while (i--) {
                listener = listeners[i];
                if (listener) {
                    if (listener.fn === fn && listener.scope == scope) {
                        return i;
                    }
                }
            }
            return -1;
        },
        removeListener: function(fn, scope, index) {
            var me = this,
                removed = false,
                observable = me.observable,
                eventName = me.name,
                listener, options, manager, managedListeners, managedListener, i;
            index = index != null ? index : me.findListener(fn, scope);
            if (index !== -1) {
                listener = me.listeners[index];
                if (me.firing) {
                    me.listeners = me.listeners.slice(0);
                }
                me.listeners.splice(index, 1);
                if (me._highestNegativePriorityIndex) {
                    if (index < me._highestNegativePriorityIndex) {
                        me._highestNegativePriorityIndex--;
                    } else if (index === me._highestNegativePriorityIndex && index === me.listeners.length) {
                        delete me._highestNegativePriorityIndex;
                    }
                }
                if (listener) {
                    options = listener.o;
                    if (listener.task) {
                        listener.task.cancel();
                        delete listener.task;
                    }
                    i = listener.tasks && listener.tasks.length;
                    if (i) {
                        while (i--) {
                            listener.tasks[i].cancel();
                        }
                        delete listener.tasks;
                    }
                    listener.fireFn.timerId = Ext.undefer(listener.fireFn.timerId);
                    manager = listener.manager;
                    if (manager) {
                        managedListeners = manager.managedListeners;
                        if (managedListeners) {
                            for (i = managedListeners.length; i--; ) {
                                managedListener = managedListeners[i];
                                if (managedListener.item === me.observable && managedListener.ename === eventName && managedListener.fn === fn && managedListener.scope === scope) {
                                    managedListeners.splice(i, 1);
                                }
                            }
                        }
                    }
                    if (observable.isElement) {
                        observable._getPublisher(eventName, options.translate === false).unsubscribe(observable, eventName, options.delegated !== false, options.capture);
                    }
                }
                removed = true;
            }
            return removed;
        },
        clearListeners: function() {
            var listeners = this.listeners,
                i = listeners.length,
                listener;
            while (i--) {
                listener = listeners[i];
                this.removeListener(listener.fn, listener.scope);
            }
        },
        suspend: function() {
            ++this.suspended;
        },
        resume: function() {
            if (this.suspended) {
                --this.suspended;
            }
        },
        isSuspended: function() {
            return this.suspended > 0;
        },
        fireDelegated: function(firingObservable, args) {
            this.firingObservable = firingObservable;
            return this.fire.apply(this, args);
        },
        fire: function() {
            var me = this,
                CQ = Ext.ComponentQuery,
                listeners = me.listeners,
                count = listeners.length,
                observable = me.observable,
                isElement = observable.isElement,
                isComponent = observable.isComponent,
                firingObservable = me.firingObservable,
                options, delegate, fireInfo, i, args, listener, len, delegateEl, currentTarget, type, chained, firingArgs, e, fireFn, fireScope;
            if (!me.suspended && count > 0) {
                me.firing = true;
                args = arguments.length ? arraySlice.call(arguments, 0) : [];
                len = args.length;
                if (isElement) {
                    e = args[0];
                }
                for (i = 0; i < count; i++) {
                    listener = listeners[i];
                    if (!listener) {

                        continue;
                    }
                    options = listener.o;
                    if (isElement) {
                        if (currentTarget) {
                            e.setCurrentTarget(currentTarget);
                        }
                        type = listener.type;
                        if (type) {
                            chained = e;
                            e = args[0] = chained.chain({
                                type: type,
                                isGesture: false
                            });
                        }
                        Ext.EventObject = e;
                    }
                    firingArgs = args;
                    if (options) {
                        delegate = options.delegate;
                        if (delegate) {
                            if (isElement) {
                                delegateEl = e.getTarget(typeof delegate === 'function' ? delegate : '#' + e.currentTarget.id + ' ' + delegate);
                                if (delegateEl) {
                                    args[1] = delegateEl;
                                    currentTarget = e.currentTarget;
                                    e.setCurrentTarget(delegateEl);
                                } else {

                                    continue;
                                }
                            }
                            else if (isComponent && !CQ.is(firingObservable, delegate, observable)) {

                                continue;
                            }
                        }
                        if (isElement) {
                            if (options.preventDefault) {
                                e.preventDefault();
                            }
                            if (options.stopPropagation) {
                                e.stopPropagation();
                            }
                            if (options.stopEvent) {
                                e.stopEvent();
                            }
                        }
                        args[len] = options;
                        if (options.args) {
                            firingArgs = options.args.concat(args);
                        }
                    }
                    fireInfo = me.getFireInfo(listener);
                    fireFn = fireInfo.fn;
                    fireScope = fireInfo.scope;
                    fireInfo.fn = fireInfo.scope = null;
                    if (fireScope && fireScope.destroyed) {
                        me.removeListener(fireFn, fireScope, i);
                        fireFn = null;
                        if (fireScope.$className !== 'Ext.container.Monitor') {
                            (Ext.raiseOnDestroyed ? Ext.raise : Ext.log.warn)({
                                msg: 'Attempting to fire "' + me.name + '" event on destroyed ' + (fireScope.$className || 'object') + ' instance with id: ' + (fireScope.id || 'unknown'),
                                instance: fireScope
                            });
                        }
                    }
                    if (fireFn && fireFn.apply(fireScope, firingArgs) === false) {
                        Ext.EventObject = null;
                        return (me.firing = false);
                    }
                    if (options) {
                        args.length--;
                    }
                    if (chained) {
                        e = args[0] = chained;
                        chained = null;
                    }
                    Ext.EventObject = null;
                }
            }
            me.firing = false;
            return true;
        },
        getFireInfo: function(listener, fromWrapped) {
            var observable = this.observable,
                fireFn = listener.fireFn,
                scope = listener.scope,
                namedScope = listener.namedScope,
                fn, origin;
            if (!fromWrapped && listener.wrapped) {
                fireArgs.fn = fireFn;
                return fireArgs;
            }
            fn = fromWrapped ? listener.fn : fireFn;
            var name = fn;
            if (listener.lateBound) {
                origin = listener.caller || observable;
                if (namedScope && namedScope.isUp) {
                    scope = Ext.lookUpFn(origin, fn);
                } else if (!scope || namedScope) {
                    scope = origin.resolveListenerScope(listener.defaultScope);
                }
                if (!scope) {
                    Ext.raise('Unable to dynamically resolve scope for "' + listener.ev.name + '" listener on ' + this.observable.id);
                }
                if (!Ext.isFunction(scope[fn])) {
                    Ext.raise('No method named "' + fn + '" on ' + (scope.$className || 'scope object.'));
                }
                fn = scope[fn];
            } else if (namedScope && namedScope.isController) {
                scope = (listener.caller || observable).resolveListenerScope(listener.defaultScope);
                if (!scope) {
                    Ext.raise('Unable to dynamically resolve scope for "' + listener.ev.name + '" listener on ' + this.observable.id);
                }
            } else if (!scope || namedScope) {
                scope = observable;
            }
            fireArgs.fn = fn;
            fireArgs.scope = scope;
            if (!fn) {
                Ext.raise('Unable to dynamically resolve method "' + name + '" on ' + this.observable.$className);
            }
            return fireArgs;
        },
        createAnimFrame: function(handler, listener, o, scope, wrapped) {
            var fireInfo;
            if (!wrapped) {
                fireInfo = listener.ev.getFireInfo(listener, true);
                handler = fireInfo.fn;
                scope = fireInfo.scope;
                fireInfo.fn = fireInfo.scope = null;
            }
            return Ext.Function.createAnimationFrame(handler, scope, o.args);
        },
        createTargeted: function(handler, listener, o, scope, wrapped) {
            return function() {
                var fireInfo;
                if (o.target === arguments[0]) {
                    if (!wrapped) {
                        fireInfo = listener.ev.getFireInfo(listener, true);
                        handler = fireInfo.fn;
                        scope = fireInfo.scope;
                        fireInfo.fn = fireInfo.scope = null;
                    }
                    return handler.apply(scope, arguments);
                }
            };
        },
        createBuffered: function(handler, listener, o, scope, wrapped) {
            listener.task = new Ext.util.DelayedTask();
            return function() {
                var fireInfo;
                if (listener.task) {
                    if (Ext._unitTesting) {
                        o.$delayedTask = listener.task;
                    }
                    if (!wrapped) {
                        fireInfo = listener.ev.getFireInfo(listener, true);
                        handler = fireInfo.fn;
                        scope = fireInfo.scope;
                        fireInfo.fn = fireInfo.scope = null;
                    }
                    listener.task.delay(o.buffer, handler, scope, toArray(arguments));
                }
            };
        },
        createDelayed: function(handler, listener, o, scope, wrapped) {
            return function() {
                var task = new Ext.util.DelayedTask(),
                    fireInfo;
                if (!wrapped) {
                    fireInfo = listener.ev.getFireInfo(listener, true);
                    handler = fireInfo.fn;
                    scope = fireInfo.scope;
                    fireInfo.fn = fireInfo.scope = null;
                }
                if (!listener.tasks) {
                    listener.tasks = [];
                }
                listener.tasks.push(task);
                if (Ext._unitTesting) {
                    o.$delayedTask = task;
                }
                task.delay(o.delay || 10, handler, scope, toArray(arguments));
            };
        },
        createSingle: function(handler, listener, o, scope, wrapped) {
            return function() {
                var event = listener.ev,
                    observable = event.observable,
                    fn = listener.fn,
                    fireInfo;
                if (observable) {
                    if (!observable.destroyed) {
                        observable.removeListener(event.name, fn, scope);
                    }
                } else {
                    event.removeListener(fn, scope);
                }
                if (!wrapped) {
                    fireInfo = event.getFireInfo(listener, true);
                    handler = fireInfo.fn;
                    scope = fireInfo.scope;
                    fireInfo.fn = fireInfo.scope = null;
                }
                return handler.apply(scope, arguments);
            };
        }
    };
});

Ext.define('Ext.mixin.Identifiable', function(Identifiable) {
    return {
        isIdentifiable: true,
        mixinId: 'identifiable',
        getId: function() {
            var me = this,
                id = me.id,
                cfg;
            if (!(id || id === 0)) {
                cfg = me.initialConfig;
                if (cfg && cfg.id) {
                    id = cfg.id;
                } else {
                    id = me.generateAutoId();
                    me.autoGenId = true;
                }
                me.setId(id);
            }
            me.getId = Identifiable._getId;
            return id;
        },
        setId: function(id) {
            this.id = this.id = id;
        },
        privates: {
            statics: {
                _idCleanRe: /\.|[^\w-]/g,
                uniqueIds: {},
                _getId: function() {
                    return this.id;
                }
            },
            defaultIdPrefix: 'ext-',
            defaultIdSeparator: '-',
            id: null,
            autoGenId: false,
            generateAutoId: function() {
                var me = this,
                    prototype = me.self.prototype,
                    sep = me.defaultIdSeparator,
                    uniqueIds = Identifiable.uniqueIds,
                    cleanRe, defaultIdPrefix, prefix, xtype;
                if (!prototype.hasOwnProperty('identifiablePrefix')) {
                    cleanRe = Identifiable._idCleanRe;
                    defaultIdPrefix = me.defaultIdPrefix;
                    xtype = me.xtype;
                    if (xtype) {
                        prefix = defaultIdPrefix + xtype.replace(cleanRe, sep) + sep;
                    } else if (!(prefix = prototype.$className)) {
                        prefix = defaultIdPrefix + 'anonymous' + sep;
                    } else {
                        prefix = prefix.replace(cleanRe, sep).toLowerCase() + sep;
                    }
                    prototype.identifiablePrefix = prefix;
                }
                prefix = me.identifiablePrefix;
                if (!uniqueIds.hasOwnProperty(prefix)) {
                    uniqueIds[prefix] = 0;
                }
                return prefix + (++uniqueIds[prefix]);
            }
        }
    };
});

Ext.define('Ext.mixin.Observable', function(Observable) {
    var emptyFn = Ext.emptyFn,
        emptyArray = [],
        arrayProto = Array.prototype,
        arraySlice = arrayProto.slice,
        ListenerRemover = function(observable) {
            if (observable instanceof ListenerRemover) {
                return observable;
            }
            this.observable = observable;
            if (arguments[1].isObservable) {
                this.managedListeners = true;
            }
            this.args = arraySlice.call(arguments, 1);
        },
        protectedProps = [
            'events',
            'hasListeners',
            'managedListeners',
            'eventedBeforeEventNames'
        ];
    ListenerRemover.prototype.destroy = function() {
        var me = this,
            args = me.args,
            observable = me.observable,
            elementName = args[0].element || (args[3] && args[3].element);
        if (elementName) {
            if (Ext.Array.indexOf(observable.referenceList, elementName) === -1) {
                Ext.Logger.error("Destroying event listener with an invalid element reference " + "of '" + elementName + "' for this component. Available values are: '" + observable.referenceList.join("', '") + "'", observable);
            }
            observable = observable[elementName];
        }
        if (!observable.destroyed) {
            observable[me.managedListeners ? 'mun' : 'un'].apply(observable, me.args);
        }
        me.destroy = Ext.emptyFn;
    };
    return {
        extend: Ext.Mixin,
        mixinConfig: {
            id: 'observable',
            after: {
                destroy: 'destroyObservable'
            }
        },
        mixins: [
            Ext.mixin.Identifiable
        ],
        statics: {
            releaseCapture: function(o) {
                o.fireEventArgs = this.prototype.fireEventArgs;
            },
            capture: function(o, fn, scope) {
                var newFn = function(eventName, args) {
                        return fn.apply(scope, [
                            eventName
                        ].concat(args));
                    };
                this.captureArgs(o, newFn, scope);
            },
            captureArgs: function(o, fn, scope) {
                o.fireEventArgs = Ext.Function.createInterceptor(o.fireEventArgs, fn, scope);
            },
            observe: function(cls, listeners) {
                if (cls) {
                    if (!cls.isObservable) {
                        Ext.applyIf(cls, new this());
                        this.captureArgs(cls.prototype, cls.fireEventArgs, cls);
                    }
                    if (Ext.isObject(listeners)) {
                        cls.on(listeners);
                    }
                }
                return cls;
            },
            prepareClass: function(T, mixin, data) {
                var listeners = T.listeners = [],
                    target = data || T.prototype,
                    targetListeners = target.listeners,
                    superListeners = mixin ? mixin.listeners : T.superclass.self.listeners,
                    scope, namedScope, i, len;
                if (superListeners) {
                    listeners.push(superListeners);
                }
                if (targetListeners) {
                    scope = targetListeners.scope;
                    if (!scope) {
                        targetListeners.scope = 'self';
                    } else {
                        namedScope = Ext._namedScopes[scope];
                        if (namedScope && namedScope.isController) {
                            targetListeners.scope = 'self.controller';
                        }
                    }
                    listeners.push(targetListeners);
                    target.listeners = null;
                }
                if (!T.HasListeners) {
                    var HasListeners = function() {},
                        SuperHL = T.superclass.HasListeners || (mixin && mixin.HasListeners) || Observable.HasListeners;
                    T.prototype.HasListeners = T.HasListeners = HasListeners;
                    HasListeners.prototype = T.hasListeners = new SuperHL();
                }
                scope = T.prototype.$noClearOnDestroy || {};
                for (i = 0 , len = protectedProps.length; i < len; i++) {
                    scope[protectedProps[i]] = true;
                }
                T.prototype.$noClearOnDestroy = scope;
            }
        },
        isObservable: true,
        $vetoClearingPrototypeOnDestroy: true,
        eventsSuspended: 0,
        constructor: function(config) {
            var me = this,
                self = me.self,
                declaredListeners, listeners, bubbleEvents, len, i;
            if (me.$observableInitialized) {
                return;
            }
            me.$observableInitialized = true;
            me.hasListeners = me.hasListeners = new me.HasListeners();
            me.eventedBeforeEventNames = {};
            me.events = me.events || {};
            declaredListeners = self.listeners;
            if (declaredListeners && !me._addDeclaredListeners(declaredListeners)) {
                self.listeners = null;
            }
            listeners = (config && config.listeners) || me.listeners;
            if (listeners) {
                if (listeners instanceof Array) {
                    for (i = 0 , len = listeners.length; i < len; ++i) {
                        me.addListener(listeners[i]);
                    }
                } else {
                    me.addListener(listeners);
                }
            }
            bubbleEvents = (config && config.bubbleEvents) || me.bubbleEvents;
            if (bubbleEvents) {
                me.enableBubble(bubbleEvents);
            }
            if (me.$applyConfigs) {
                if (config) {
                    Ext.apply(me, config);
                }
            } else {
                me.initConfig(config);
            }
            if (listeners) {
                me.listeners = null;
            }
        },
        onClassExtended: function(T, data) {
            if (!T.HasListeners) {
                Observable.prepareClass(T, T.prototype.$observableMixedIn ? undefined : data);
            }
        },
        $eventOptions: {
            scope: 1,
            delay: 1,
            buffer: 1,
            onFrame: 1,
            single: 1,
            args: 1,
            destroyable: 1,
            priority: 1,
            order: 1
        },
        $orderToPriority: {
            before: 100,
            current: 0,
            after: -100
        },
        _addDeclaredListeners: function(listeners) {
            var me = this;
            if (listeners instanceof Array) {
                Ext.each(listeners, me._addDeclaredListeners, me);
            } else {
                me._addedDeclaredListeners = true;
                me.addListener(listeners);
            }
            return me._addedDeclaredListeners;
        },
        addManagedListener: function(item, ename, fn, scope, options, noDestroy) {
            var me = this,
                config, passedOptions;
            me.managedListeners = me.managedListeners || [];
            if (typeof ename !== 'string') {
                passedOptions = arguments.length > 4 ? options : ename;
                options = ename;
                for (ename in options) {
                    if (options.hasOwnProperty(ename)) {
                        config = options[ename];
                        if (!item.$eventOptions[ename]) {
                            me.addManagedListener(item, ename, config.fn || config, config.scope || options.scope || scope, config.fn ? config : passedOptions, true);
                        }
                    }
                }
                if (options && options.destroyable) {
                    return new ListenerRemover(me, item, options);
                }
            } else {
                if (fn !== emptyFn) {
                    item.doAddListener(ename, fn, scope, options, null, me, me);
                    if (!noDestroy && options && options.destroyable) {
                        return new ListenerRemover(me, item, ename, fn, scope);
                    }
                }
            }
        },
        removeManagedListener: function(item, ename, fn, scope) {
            var me = this,
                options, config, managedListeners, length, i;
            if (item.$observableDestroyed) {
                return;
            }
            if (typeof ename !== 'string') {
                options = ename;
                for (ename in options) {
                    if (options.hasOwnProperty(ename)) {
                        config = options[ename];
                        if (!item.$eventOptions[ename]) {
                            me.removeManagedListener(item, ename, config.fn || config, config.scope || options.scope || scope);
                        }
                    }
                }
            } else {
                managedListeners = me.managedListeners ? me.managedListeners.slice() : [];
                ename = Ext.canonicalEventName(ename);
                for (i = 0 , length = managedListeners.length; i < length; i++) {
                    me.removeManagedListenerItem(false, managedListeners[i], item, ename, fn, scope);
                }
            }
        },
        fireEvent: function(eventName) {
            return this.fireEventArgs(eventName, arraySlice.call(arguments, 1));
        },
        resolveListenerScope: function(defaultScope) {
            var namedScope = Ext._namedScopes[defaultScope];
            if (namedScope) {
                if (namedScope.isController) {
                    Ext.raise('scope: "controller" can only be specified on classes ' + 'that derive from Ext.Component or Ext.Widget');
                }
                if (namedScope.isSelf || namedScope.isThis) {
                    defaultScope = null;
                }
            }
            return defaultScope || this;
        },
        fireEventArgs: function(eventName, args) {
            var me = this,
                events = me.events,
                ret = true,
                event;
            eventName = Ext.canonicalEventName(eventName);
            event = events && events[eventName];
            if (me.hasListeners[eventName]) {
                ret = me.doFireEvent(eventName, args || emptyArray, event ? event.bubble : false);
            }
            return ret;
        },
        fireAction: function(eventName, args, fn, scope, options, order) {
            if (typeof fn === 'string' && !scope) {
                fn = this[fn];
            }
            options = options ? Ext.Object.chain(options) : {};
            options.single = true;
            options.priority = ((order === 'after') ? -99.5 : 99.5);
            this.doAddListener(eventName, fn, scope, options);
            this.fireEventArgs(eventName, args);
        },
        $eventedController: {
            _paused: 1,
            pause: function() {
                ++this._paused;
            },
            resume: function() {
                var me = this,
                    fn = me.fn,
                    scope = me.scope,
                    fnArgs = me.fnArgs,
                    args, ret;
                if (!--me._paused) {
                    if (fn) {
                        args = Ext.Array.slice(fnArgs || me.args);
                        if (fnArgs === false) {
                            args.shift();
                        }
                        me.fn = null;
                        args.push(me);
                        if (Ext.isFunction(fn)) {
                            ret = fn.apply(scope, args);
                        } else if (scope && Ext.isString(fn) && Ext.isFunction(scope[fn])) {
                            ret = scope[fn].apply(scope, args);
                        }
                        if (ret === false) {
                            return false;
                        }
                    }
                    if (!me._paused) {
                        return me.owner.fireEventArgs(me.eventName, me.args);
                    }
                }
            }
        },
        fireEventedAction: function(eventName, args, fn, scope, fnArgs) {
            var me = this,
                eventedBeforeEventNames = me.eventedBeforeEventNames,
                beforeEventName = eventedBeforeEventNames[eventName] || (eventedBeforeEventNames[eventName] = 'before' + eventName),
                controller = Ext.apply({
                    owner: me,
                    eventName: eventName,
                    fn: fn,
                    scope: scope,
                    fnArgs: fnArgs,
                    args: args
                }, me.$eventedController),
                value;
            args.push(controller);
            value = me.fireEventArgs(beforeEventName, args);
            args.pop();
            if (value === false) {
                return false;
            }
            return controller.resume();
        },
        doFireEvent: function(eventName, args, bubbles) {
            var target = this,
                queue, event,
                ret = true;
            do {
                if (target.eventsSuspended) {
                    if ((queue = target.eventQueue)) {
                        queue.push([
                            eventName,
                            args
                        ]);
                    }
                    return ret;
                } else {
                    event = target.events && target.events[eventName];
                    if (event && event !== true) {
                        if ((ret = event.fire.apply(event, args)) === false) {
                            break;
                        }
                    }
                }
            } while (bubbles && (target = target.getBubbleParent()));
            return ret;
        },
        getBubbleParent: function() {
            var me = this,
                parent = me.getBubbleTarget && me.getBubbleTarget();
            if (parent && parent.isObservable) {
                return parent;
            }
            return null;
        },
        addListener: function(eventName, fn, scope, options, order, caller) {
            var me = this,
                namedScopes = Ext._namedScopes,
                config, namedScope, isClassListener, innerScope, eventOptions;
            if (typeof eventName !== 'string') {
                options = eventName;
                scope = options.scope;
                namedScope = scope && namedScopes[scope];
                isClassListener = namedScope && namedScope.isSelf;
                eventOptions = ((me.isComponent || me.isWidget) && options.element) ? me.$elementEventOptions : me.$eventOptions;
                for (eventName in options) {
                    config = options[eventName];
                    if (!eventOptions[eventName]) {
                        innerScope = config.scope;
                        if (innerScope && isClassListener) {
                            namedScope = namedScopes[innerScope];
                            if (namedScope && namedScope.isController) {
                                innerScope = 'self.controller';
                            }
                        }
                        me.doAddListener(eventName, config.fn || config, innerScope || scope, config.fn ? config : options, order, caller);
                    }
                }
                if (options && options.destroyable) {
                    return new ListenerRemover(me, options);
                }
            } else {
                me.doAddListener(eventName, fn, scope, options, order, caller);
                if (options && options.destroyable) {
                    return new ListenerRemover(me, eventName, fn, scope, options);
                }
            }
            return me;
        },
        removeListener: function(eventName, fn, scope, eventOptions) {
            var me = this,
                config, options;
            if (typeof eventName !== 'string') {
                options = eventName;
                eventOptions = eventOptions || me.$eventOptions;
                for (eventName in options) {
                    if (options.hasOwnProperty(eventName)) {
                        config = options[eventName];
                        if (!me.$eventOptions[eventName]) {
                            me.doRemoveListener(eventName, config.fn || config, config.scope || options.scope);
                        }
                    }
                }
            } else {
                me.doRemoveListener(eventName, fn, scope);
            }
            return me;
        },
        onBefore: function(eventName, fn, scope, options) {
            return this.addListener(eventName, fn, scope, options, 'before');
        },
        onAfter: function(eventName, fn, scope, options) {
            return this.addListener(eventName, fn, scope, options, 'after');
        },
        unBefore: function(eventName, fn, scope, options) {
            return this.removeListener(eventName, fn, scope, options, 'before');
        },
        unAfter: function(eventName, fn, scope, options) {
            return this.removeListener(eventName, fn, scope, options, 'after');
        },
        addBeforeListener: function() {
            return this.onBefore.apply(this, arguments);
        },
        addAfterListener: function() {
            return this.onAfter.apply(this, arguments);
        },
        removeBeforeListener: function() {
            return this.unBefore.apply(this, arguments);
        },
        removeAfterListener: function() {
            return this.unAfter.apply(this, arguments);
        },
        clearListeners: function() {
            var me = this,
                events = me.events,
                hasListeners = me.hasListeners,
                event, key;
            if (events) {
                for (key in events) {
                    if (events.hasOwnProperty(key)) {
                        event = events[key];
                        if (event.isEvent) {
                            delete hasListeners[key];
                            event.clearListeners();
                        }
                    }
                }
                me.events = null;
            }
            me.clearManagedListeners();
        },
        purgeListeners: function() {
            if (Ext.global.console) {
                Ext.global.console.warn('Observable: purgeListeners has been deprecated. ' + 'Please use clearListeners.');
            }
            return this.clearListeners.apply(this, arguments);
        },
        clearManagedListeners: function() {
            var me = this,
                managedListeners = me.managedListeners,
                i, len;
            if (managedListeners) {
                me.managedListeners = null;
                for (i = 0 , len = managedListeners.length; i < len; i++) {
                    me.removeManagedListenerItem(true, managedListeners[i]);
                }
                managedListeners.length = 0;
            }
            me.managedListeners = managedListeners;
        },
        removeManagedListenerItem: function(isClear, managedListener, item, ename, fn, scope) {
            if (isClear || (managedListener.item === item && managedListener.ename === ename && (!fn || managedListener.fn === fn) && (!scope || managedListener.scope === scope))) {
                if (!managedListener.item.destroyed) {
                    managedListener.item.doRemoveListener(managedListener.ename, managedListener.fn, managedListener.scope, managedListener.options);
                }
                if (!isClear) {
                    Ext.Array.remove(this.managedListeners, managedListener);
                }
            }
        },
        purgeManagedListeners: function() {
            if (Ext.global.console) {
                Ext.global.console.warn('Observable: purgeManagedListeners has been deprecated. ' + 'Please use clearManagedListeners.');
            }
            return this.clearManagedListeners.apply(this, arguments);
        },
        hasListener: function(eventName) {
            eventName = Ext.canonicalEventName(eventName);
            return !!this.hasListeners[eventName];
        },
        isSuspended: function(event) {
            var suspended = this.eventsSuspended > 0,
                events = this.events;
            if (!suspended && event && events) {
                event = events[event];
                if (event && event.isEvent) {
                    return event.isSuspended();
                }
            }
            return suspended;
        },
        suspendEvents: function(queueSuspended) {
            ++this.eventsSuspended;
            if (queueSuspended && !this.eventQueue) {
                this.eventQueue = [];
            }
        },
        suspendEvent: function() {
            var me = this,
                events = me.events,
                len = arguments.length,
                i, event, ename;
            for (i = 0; i < len; i++) {
                ename = arguments[i];
                ename = Ext.canonicalEventName(ename);
                event = events[ename];
                if (!event || !event.isEvent) {
                    event = me._initEvent(ename);
                }
                event.suspend();
            }
        },
        resumeEvent: function() {
            var events = this.events || 0,
                len = events && arguments.length,
                i, event, ename;
            for (i = 0; i < len; i++) {
                ename = Ext.canonicalEventName(arguments[i]);
                event = events[ename];
                if (event && event.resume) {
                    event.resume();
                }
            }
        },
        resumeEvents: function(discardQueue) {
            var me = this,
                queued = me.eventQueue,
                qLen, q;
            if (me.eventsSuspended && !--me.eventsSuspended) {
                delete me.eventQueue;
                if (!discardQueue && queued) {
                    qLen = queued.length;
                    for (q = 0; q < qLen; q++) {
                        me.fireEventArgs.apply(me, queued[q]);
                    }
                }
            }
        },
        relayEvents: function(origin, events, prefix) {
            var me = this,
                len = events.length,
                i = 0,
                oldName, newName,
                relayers = {};
            if (Ext.isObject(events)) {
                for (i in events) {
                    newName = events[i];
                    relayers[i] = me.createRelayer(newName);
                }
            } else {
                for (; i < len; i++) {
                    oldName = events[i];
                    relayers[oldName] = me.createRelayer(prefix ? prefix + oldName : oldName);
                }
            }
            me.mon(origin, relayers, null, null, undefined);
            return new ListenerRemover(me, origin, relayers);
        },
        createRelayer: function(newName, beginEnd) {
            var me = this;
            return function() {
                return me.fireEventArgs.call(me, newName, beginEnd ? arraySlice.apply(arguments, beginEnd) : arguments);
            };
        },
        enableBubble: function(eventNames) {
            if (eventNames) {
                var me = this,
                    names = (typeof eventNames === 'string') ? arguments : eventNames,
                    events = me.events,
                    length = events && names.length,
                    ename, event, i;
                for (i = 0; i < length; ++i) {
                    ename = names[i];
                    ename = Ext.canonicalEventName(ename);
                    event = events[ename];
                    if (!event || !event.isEvent) {
                        event = me._initEvent(ename);
                    }
                    me.hasListeners._incr_(ename);
                    event.bubble = true;
                }
            }
        },
        destroy: function() {
            this.clearListeners();
            this.callParent();
            this.destroyObservable(true);
        },
        destroyObservable: function(skipClearListeners) {
            var me = this,
                clearPropertiesOnDestroy = me.clearPropertiesOnDestroy;
            if (me.$observableDestroyed) {
                return;
            }
            if (!skipClearListeners) {
                me.clearListeners();
            }
            if (me.destroyed) {
                if (clearPropertiesOnDestroy) {
                    if (clearPropertiesOnDestroy === true && !me.$nulled) {
                        me.$reap();
                    }
                    if (!me.clearPrototypeOnDestroy) {
                        me.fireEvent = me.fireEventArgs = me.fireAction = me.fireEventedAction = Ext.emptyFn;
                    }
                    me.events = me.managedListeners = me.eventedBeforeEventNames = null;
                    me.$observableDestroyed = true;
                }
                if (me.clearPrototypeOnDestroy && Object.setPrototypeOf && !me.$alreadyNulled) {
                    Object.setPrototypeOf(me, null);
                    me.$alreadyNulled = true;
                }
            }
        },
        privates: {
            doAddListener: function(ename, fn, scope, options, order, caller, manager) {
                var me = this,
                    ret = false,
                    event, priority;
                order = order || (options && options.order);
                if (order) {
                    priority = (options && options.priority);
                    if (!priority) {
                        options = options ? Ext.Object.chain(options) : {};
                        options.priority = me.$orderToPriority[order];
                    }
                }
                ename = Ext.canonicalEventName(ename);
                if (!fn) {
                    Ext.raise("Cannot add '" + ename + "' listener to " + me.$className + " instance.  No function specified.");
                }
                event = (me.events || (me.events = {}))[ename];
                if (!event || !event.isEvent) {
                    event = me._initEvent(ename);
                }
                if (fn !== emptyFn) {
                    if (!manager && (scope && scope.isObservable && (scope !== me))) {
                        manager = scope;
                    }
                    if (event.addListener(fn, scope, options, caller, manager)) {
                        me.hasListeners._incr_(ename);
                        ret = true;
                    }
                }
                return ret;
            },
            doRemoveListener: function(ename, fn, scope) {
                var me = this,
                    ret = false,
                    events = me.events,
                    event;
                ename = Ext.canonicalEventName(ename);
                event = events && events[ename];
                if (!fn) {
                    Ext.raise("Cannot remove '" + ename + "' listener to " + me.$className + " instance.  No function specified.");
                }
                if (event && event.isEvent) {
                    if (event.removeListener(fn, scope)) {
                        me.hasListeners._decr_(ename);
                        ret = true;
                    }
                }
                return ret;
            },
            _initEvent: function(eventName) {
                return (this.events[eventName] = new Ext.util.Event(this, eventName));
            }
        },
        deprecated: {
            '5.0': {
                methods: {
                    addEvents: null
                }
            }
        }
    };
}, function() {
    var Observable = this,
        proto = Observable.prototype,
        HasListeners = function() {},
        prepareMixin = function(T) {
            var proto = T.prototype;
            if (!T.HasListeners) {
                proto.$observableMixedIn = 1;
                Observable.prepareClass(T, this);
                T.onExtended(function(U, data) {
                    if (Ext.classSystemMonitor) {
                        Ext.classSystemMonitor('extend mixin', arguments);
                    }
                    Observable.prepareClass(U, null, data);
                });
                if (proto.onClassMixedIn) {
                    Ext.override(T, {
                        onClassMixedIn: function(U) {
                            prepareMixin.call(this, U);
                            this.callParent(arguments);
                        }
                    });
                } else {
                    proto.onClassMixedIn = function(U) {
                        prepareMixin.call(this, U);
                    };
                }
            }
            superOnClassMixedIn.call(this, T);
        },
        superOnClassMixedIn = proto.onClassMixedIn;
    HasListeners.prototype = {
        _decr_: function(ev, count) {
            if (count == null) {
                count = 1;
            }
            if (!(this[ev] -= count)) {
                delete this[ev];
            }
        },
        _incr_: function(ev) {
            if (this.hasOwnProperty(ev)) {
                ++this[ev];
            } else {
                this[ev] = 1;
            }
        }
    };
    proto.HasListeners = Observable.HasListeners = HasListeners;
    Observable.createAlias({
        on: 'addListener',
        un: 'removeListener',
        mon: 'addManagedListener',
        mun: 'removeManagedListener',
        setListeners: 'addListener'
    });
    Observable.observeClass = Observable.observe;
    function getMethodEvent(method) {
        var event = (this.methodEvents = this.methodEvents || {})[method],
            returnValue, v, cancel,
            me = this,
            makeCall;
        if (!event) {
            me.methodEvents[method] = event = {};
            event.originalFn = me[method];
            event.methodName = method;
            event.before = [];
            event.after = [];
            makeCall = function(fn, scope, args) {
                scope = scope || me;
                if (typeof fn === 'string') {
                    fn = scope[fn];
                }
                if ((v = fn.apply(scope, args)) !== undefined) {
                    if (typeof v === 'object') {
                        if (v.returnValue !== undefined) {
                            returnValue = v.returnValue;
                        } else {
                            returnValue = v;
                        }
                        cancel = !!v.cancel;
                    } else if (v === false) {
                        cancel = true;
                    } else {
                        returnValue = v;
                    }
                }
            };
            me[method] = function() {
                var args = Array.prototype.slice.call(arguments, 0),
                    argsLen = args.length,
                    b, i, len;
                returnValue = v = undefined;
                cancel = false;
                for (i = 0 , len = event.before.length; i < len; i++) {
                    b = event.before[i];
                    if (b.extraArgs) {
                        args.push.apply(args, b.extraArgs);
                    }
                    makeCall(b.fn, b.scope, args);
                    args.length = argsLen;
                    if (cancel || b.preventDefault) {
                        return returnValue;
                    }
                }
                if ((v = event.originalFn.apply(me, args)) !== undefined) {
                    returnValue = v;
                }
                for (i = 0 , len = event.after.length; i < len; i++) {
                    b = event.after[i];
                    if (b.extraArgs) {
                        args.push.apply(args, b.extraArgs);
                    }
                    makeCall(b.fn, b.scope, args);
                    args.length = argsLen;
                    if (cancel || b.preventDefault) {
                        return returnValue;
                    }
                }
                return returnValue;
            };
        }
        return event;
    }
    Ext.apply(proto, {
        onClassMixedIn: prepareMixin,
        beforeMethod: function(method, fn, scope, preventDefault, extraArgs) {
            getMethodEvent.call(this, method).before.push({
                fn: fn,
                scope: scope,
                extraArgs: extraArgs,
                preventDefault: preventDefault
            });
        },
        afterMethod: function(method, fn, scope, preventDefault, extraArgs) {
            getMethodEvent.call(this, method).after.push({
                fn: fn,
                scope: scope,
                extraArgs: extraArgs,
                preventDefault: preventDefault
            });
        },
        removeMethodListener: function(method, fn, scope) {
            var e = getMethodEvent.call(this, method),
                i, len;
            for (i = 0 , len = e.before.length; i < len; i++) {
                if (e.before[i].fn == fn && e.before[i].scope == scope) {
                    Ext.Array.erase(e.before, i, 1);
                    return;
                }
            }
            for (i = 0 , len = e.after.length; i < len; i++) {
                if (e.after[i].fn == fn && e.after[i].scope == scope) {
                    Ext.Array.erase(e.after, i, 1);
                    return;
                }
            }
        },
        toggleEventLogging: function(toggle) {
            Ext.util.Observable[toggle ? 'capture' : 'releaseCapture'](this, function(en) {
                if (Ext.isDefined(Ext.global.console)) {
                    Ext.global.console.log(en, arguments);
                }
            });
        }
    });
});

Ext.define('Ext.util.TaskRunner', {
    fireIdleEvent: null,
    interval: 10,
    timerId: null,
    constructor: function(interval) {
        var me = this;
        if (typeof interval === 'number') {
            me.interval = interval;
        } else if (interval) {
            Ext.apply(me, interval);
        }
        me.tasks = [];
        me.timerFn = me.onTick.bind(me);
    },
    newTask: function(config) {
        var task = new Ext.util.TaskRunner.Task(config);
        task.manager = this;
        if (Ext.Timer.track) {
            task.creator = new Error().stack;
        }
        return task;
    },
    start: function(task) {
        var me = this,
            now = Ext.Date.now();
        if (!task.pending) {
            me.tasks.push(task);
            task.pending = true;
        }
        task.stopped = false;
        task.taskStartTime = now;
        task.taskRunTime = task.fireOnStart !== false ? 0 : task.taskStartTime;
        task.taskRunCount = 0;
        if (!me.firing) {
            if (task.fireOnStart !== false) {
                me.startTimer(0, now);
            } else {
                me.startTimer(task.interval, now);
            }
        }
        return task;
    },
    stop: function(task, andRemove) {
        var me = this,
            tasks = me.tasks,
            pendingCount = 0,
            i;
        if (!task.stopped) {
            task.stopped = true;
            task.pending = false;
            if (task.onStop) {
                task.onStop.call(task.scope || task, task);
            }
        }
        if (andRemove) {
            Ext.Array.remove(tasks, task);
        }
        for (i = 0; !pendingCount && i < tasks.length; i++) {
            if (!tasks[i].stopped) {
                pendingCount++;
            }
        }
        if (!pendingCount) {
            Ext.undefer(me.timerId);
            me.timerId = null;
        }
        return task;
    },
    stopAll: function(andRemove) {
        var me = this;
        Ext.each(this.tasks, function(task) {
            me.stop(task, andRemove);
        }, null, true);
    },
    firing: false,
    nextExpires: 1.0E99,
    onTick: function() {
        var me = this,
            tasks = me.tasks,
            fireIdleEvent = me.fireIdleEvent,
            now = Ext.Date.now(),
            nextExpires = 1.0E99,
            len = tasks.length,
            expires, newTasks, i, task, rt, remove, args;
        var timer = Ext.Timer.get(me.timerId);
        if (timer) {
            timer.tasks = [];
        }
        me.timerId = null;
        me.firing = true;
        for (i = 0; i < len || i < (len = tasks.length); ++i) {
            task = tasks[i];
            if (!(remove = task.stopped)) {
                expires = task.taskRunTime + task.interval;
                if (expires <= now) {
                    rt = 1;
                    if (fireIdleEvent === null && task.fireIdleEvent !== false) {
                        fireIdleEvent = true;
                    }
                    task.taskRunCount++;
                    if (task.args) {
                        args = task.addCountToArgs ? task.args.concat([
                            task.taskRunCount
                        ]) : task.args;
                    } else {
                        args = [
                            task.taskRunCount
                        ];
                    }
                    if (timer) {
                        timer.tasks.push(task);
                    }
                    if (me.disableTryCatch) {
                        rt = task.run.apply(task.scope || task, args);
                    } else {
                        try {
                            rt = task.run.apply(task.scope || task, args);
                        } catch (taskError) {
                            try {
                                Ext.log({
                                    fn: task.run,
                                    prefix: 'Error while running task',
                                    stack: taskError.stack,
                                    msg: taskError,
                                    level: 'error'
                                });
                                if (task.onError) {
                                    rt = task.onError.call(task.scope || task, task, taskError);
                                }
                            } catch (e) {}
                        }
                    }
                    task.taskRunTime = now;
                    if (rt === false || task.taskRunCount === task.repeat) {
                        me.stop(task);
                        remove = true;
                    } else {
                        remove = task.stopped;
                        expires = now + task.interval;
                    }
                }
                if (!remove && task.duration && task.duration <= (now - task.taskStartTime)) {
                    me.stop(task);
                    remove = true;
                }
            }
            if (remove) {
                task.pending = false;
                if (!newTasks) {
                    newTasks = tasks.slice(0, i);
                }
            } else {
                if (newTasks) {
                    newTasks.push(task);
                }
                if (nextExpires > expires) {
                    nextExpires = expires;
                }
            }
        }
        if (newTasks) {
            me.tasks = newTasks;
        }
        me.firing = false;
        if (me.tasks.length) {
            me.startTimer(nextExpires - now, Ext.Date.now());
        }
        if (fireIdleEvent === null) {
            fireIdleEvent = false;
        }
        Ext._suppressIdle = !fireIdleEvent;
    },
    startTimer: function(timeout, now) {
        var me = this,
            expires = now + timeout,
            timerId = me.timerId;
        if (timerId && me.nextExpires - expires > me.interval) {
            timerId = Ext.undefer(timerId);
        }
        if (!timerId) {
            if (timeout < me.interval) {
                timeout = me.interval;
            }
            me.timerId = Ext.defer(me.timerFn, timeout);
            me.nextExpires = expires;
            var timer = Ext.Timer.get(me.timerId);
            if (timer) {
                timer.runner = me;
            }
        }
    }
}, function() {
    var me = this,
        proto = me.prototype;
    proto.destroy = proto.stopAll;
    me.Task = new Ext.Class({
        isTask: true,
        stopped: true,
        fireOnStart: false,
        constructor: function(config) {
            Ext.apply(this, config);
        },
        restart: function(interval) {
            if (interval !== undefined) {
                this.interval = interval;
            }
            this.manager.start(this);
        },
        start: function(interval) {
            if (this.stopped) {
                this.restart(interval);
            }
        },
        stop: function(andRemove) {
            this.manager.stop(this, andRemove);
        },
        destroy: function() {
            this.stop(true);
        }
    });
    proto = me.Task.prototype;
    proto.destroy = proto.stop;
});

Ext.define('Ext.util.TaskManager', {
    extend: Ext.util.TaskRunner,
    alternateClassName: [
        'Ext.TaskManager'
    ],
    singleton: true
});

