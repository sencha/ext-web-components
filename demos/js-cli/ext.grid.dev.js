Ext.define('Ext.grid.CellEditor', {
    extend: Ext.Editor,
    xtype: 'celleditor',
    isCellEditor: true,
    floated: false,
    classCls: Ext.baseCSSPrefix + 'celleditor',
    config: {
        autoPin: true
    },
    relayedEvents: [
        'beforestartedit',
        'startedit',
        'beforecomplete',
        'complete',
        'canceledit',
        'specialkey'
    ],
    swallowKeys: false,
    layout: 'fit',
    shadow: false,
    allowBlur: true,
    alignment: 'tl-tl',
    zIndex: 10,
    useBoundValue: false,
    inheritUi: true,
    field: {
        inheritUi: true
    },
    constructor: function(config) {
        var me = this,
            grid;
        me.callParent([
            config
        ]);
        if (config.plugin) {
            grid = config.plugin.getGrid();
        }
        if (grid) {
            grid.relayEvents(me, me.relayedEvents);
        }
    },
    beforeEdit: function(el, value) {
        var me = this,
            ret;
        ret = me.callParent([
            el,
            value
        ]);
        if (ret !== false) {
            ret = me.$activeLocation.beforeEdit(me);
        }
        return ret;
    },
    startEdit: function(location, value, doFocus) {
        var me = this,
            cell, el, row, grid, result;
        if (location) {
            cell = location.cell;
            el = cell.el;
            value = value != null ? value : location.record.get(cell.dataIndex);
            me.$activeLocation = location;
            me.ownerCmp = cell;
            me.render(el);
            me.callParent([
                el,
                value,
                doFocus
            ]);
            if (me.editing) {
                me.$activeRow = row = location.row;
                me.$activeGrid = grid = row.getGrid();
                me.editingPlugin.editing = true;
                me.editingPlugin.location = me.$activeLocation = result = new Ext.grid.Location(grid, me.getField().getFocusEl());
                me.editingPlugin.activeEditor = me;
                grid.stickItem(row, {
                    autoPin: me.getAutoPin()
                });
            } else {
                me.$activeLocation = null;
            }
        }
        return result;
    },
    onFocusLeave: function(e) {
        if (!this.editingPlugin.getGrid().destroying) {
            if (this.isCancelling) {
                this.cancelEdit();
            } else {
                this.completeEdit(false);
            }
        }
        this.isCancelling = false;
    },
    onFocusEnter: function(e) {
        if (this.$activeLocation) {
            e.relatedTarget = e.fromElement = this.$activeLocation.getFocusEl('dom');
        }
        this.callParent([
            e
        ]);
    },
    getLocation: function() {
        return this.$activeLocation;
    },
    onSpecialKey: function(field, event) {
        var me = this;
        if (event.getKey() === event.ESC) {
            me.isCancelling = true;
        } else {
            me.callParent([
                field,
                event
            ]);
        }
    },
    onEditComplete: function(remainVisible, cancelling) {
        var me = this,
            location = me.$activeLocation,
            value = me.getValue(),
            record, dataIndex, row, grid, sticky;
        me.callParent([
            remainVisible,
            cancelling
        ]);
        if (location) {
            grid = location.row.getGrid();
            if (!cancelling && value !== me.startValue) {
                record = location.record;
                dataIndex = location.cell.dataIndex;
                if (record) {
                    record.set(dataIndex, value);
                    grid.ensureVisible(location.record);
                    location.refresh();
                }
            }
            if (!remainVisible) {
                row = location.row;
                sticky = !!row.$sticky;
                if (sticky) {
                    grid.stickItem(row, null);
                    grid.ensureVisible(location.record, {
                        column: location.columnIndex,
                        focus: true
                    });
                }
                me.$stickyVisibility = me.$activeLocation = me.$activeRow = me.$activeGrid = null;
                me.editingPlugin.editing = false;
                me.editingPlugin.location = me.editingPlugin.activeEditor = null;
            }
        }
    },
    realign: Ext.emptyFn,
    toggleBoundEl: function(visible) {
        var location = this.$activeLocation,
            cell, bodyEl;
        if (location && this.hideEl) {
            cell = location.cell;
            if (cell) {
                bodyEl = cell.bodyElement;
                bodyEl.setVisibility(visible);
            }
        }
    }
});

Ext.define('Ext.grid.Location', {
    extend: Ext.dataview.Location,
    isGridLocation: true,
    actionable: false,
    cell: null,
    column: null,
    columnIndex: -1,
    summary: false,
    row: null,
    rowBody: null,
    isTreeLocation: false,
    inheritableStatics: {
        defineProtoProperty: function(propName, getterName) {
            Object.defineProperty(this.prototype, propName, {
                get: function() {
                    var v = this[getterName]();
                    Object.defineProperty(this, propName, {
                        value: v,
                        configurable: true
                    });
                    return v;
                }
            });
        }
    },
    attach: function(source) {
        var me = this,
            view = me.view,
            store = view.store,
            item, cell, column, columns, sourceRec, sourceCol, first;
        if (source.constructor === Object) {
            sourceRec = source.record;
            if (typeof sourceRec === 'number') {
                sourceRec = store.getAt(Math.max(Math.min(sourceRec, store.getCount() - 1), 0));
            }
            sourceCol = source.column;
            if (typeof sourceCol === 'number') {
                columns = view.getVisibleColumns();
                sourceCol = columns[Math.max(Math.min(sourceCol, columns.length - 1), 0)];
            }
            if (!(sourceRec && sourceCol)) {
                if (sourceRec) {
                    sourceCol = view.getFirstVisibleColumn();
                } else {
                    sourceRec = store.getAt(0);
                }
            }
            cell = view.mapToCell(sourceRec, sourceCol);
            if (cell) {
                source = cell.element;
            } else {
                me._setColumn(sourceCol);
                source = sourceRec;
            }
        }
        me.callParent([
            source
        ]);
        item = me.item;
        if (item && item.isGridRow) {
            me.row = item;
            me.summary = item.isSummaryRow;
            if (!cell) {
                cell = view.mapToCell(source);
                if (!cell) {
                    columns = view.getVisibleColumns();
                    first = columns[0];
                    if (first) {
                        cell = item.getCellByColumn(first);
                    }
                }
            }
            me.cell = cell;
            if (cell) {
                me.column = column = cell.getColumn();
                columns = columns || view.getVisibleColumns();
                me.columnIndex = columns.indexOf(column);
                me.isTreeLocation = !!cell.isTreeCell;
            } else {
                me.rowBody = view.mapToRowBody(source);
            }
        }
    },
    beforeEdit: function(editor) {
        return this.fireEditEvent('beforeedit', editor);
    },
    fireEditEvent: function(eventName, editor) {
        var me = this,
            view = me.view;
        if (editor) {
            me.editor = editor;
        }
        return view.fireEvent(eventName, view, me);
    },
    clone: function(options) {
        var me = this,
            ret = me.callParent(),
            record, column, cell;
        if (options) {
            if (options.record !== undefined) {
                record = options.record;
            }
            if (options.column !== undefined) {
                column = options.column;
            }
            delete ret.sourceElement;
        }
        if (record != null) {
            delete me.source;
            me.superclass.attach.call(ret, record);
            ret.row = ret.item;
        } else {
            ret.row = ret.child = me.row;
            ret.summary = me.summary;
            ret.rowBody = me.rowBody;
        }
        if (column != null) {
            ret._setColumn(column);
        } else {
            ret.cell = cell = me.cell;
            ret.column = me.column;
            ret.columnIndex = me.columnIndex;
            me.isTreeLocation = !!(cell && cell.isTreeCell);
        }
        return ret;
    },
    cloneForColumn: function(column) {
        return this.clone({
            column: column
        });
    },
    equals: function(other) {
        var me = this;
        if (other && other.view === me.view && other.isGridLocation) {
            if (me.actionable !== other.actionable) {
                return false;
            }
            if (me.sourceElement && me.actionable) {
                return other.sourceElement === me.sourceElement;
            }
            if ((me.recordIndex !== other.recordIndex) || me.record !== other.record) {
                return false;
            }
            return me.column === other.column;
        }
        return false;
    },
    equalCell: function(other) {
        var me = this;
        return other && other.view === me.view && other.isGridLocation && me.recordIndex === other.recordIndex && me.column === other.column;
    },
    getFocusEl: function(as) {
        var me = this,
            ret;
        if (me.actionable) {
            ret = me.sourceElement;
        } else {
            ret = me.get();
            ret = ret && !ret.destroyed && ret.el.dom;
        }
        return Ext.getBody().contains(ret) ? me.as(ret, as || 'el') : null;
    },
    getCell: function(as) {
        var result = this.cell,
            ret = null;
        if (result) {
            ret = (as === 'dom' || as === true) ? result.el.dom : (as === 'cmp' ? result : result.el);
        }
        return ret;
    },
    get: function() {
        return this.cell;
    },
    isFirstColumn: function() {
        var column = this.column,
            ret = false;
        if (column) {
            ret = this.view.isFirstVisibleColumn(column);
        }
        return ret;
    },
    isLastColumn: function() {
        var column = this.column,
            ret = false;
        if (column) {
            ret = this.view.isLastVisibleColumn(column);
        }
        return ret;
    },
    refresh: function() {
        var me = this,
            column = me.column,
            oldColumnIndex = me.columnIndex,
            newColumnIndex = me.view.getHeaderContainer().indexOfLeaf(column),
            location;
        if (newColumnIndex === -1) {
            newColumnIndex = (oldColumnIndex === -1) ? 0 : oldColumnIndex;
        }
        location = me.callParent();
        return location._setColumn(newColumnIndex);
    },
    next: function(options) {
        var me = this,
            candidate;
        if (me.actionable) {
            return me.navigate();
        } else {
            for (candidate = me.nextCell(options); candidate && !candidate.get().el.isFocusable(); candidate = candidate.nextCell(options)) {}
            return candidate || me;
        }
    },
    previous: function(options) {
        var me = this,
            candidate;
        if (me.actionable) {
            return me.navigate(true);
        } else {
            for (candidate = me.previousCell(options); candidate && !candidate.get().el.isFocusable(); candidate = candidate.previousCell(options)) {}
            return candidate || me;
        }
    },
    down: function(options) {
        var me = this,
            column = options && options.column || me.column,
            candidate = me.nextItem(options),
            cell;
        if (candidate) {
            candidate._setColumn(column);
            cell = candidate.get();
            while (candidate && (!cell || !cell.el.isFocusable())) {
                candidate = candidate.nextItem(options);
                if (candidate) {
                    candidate._setColumn(column);
                    cell = candidate.get();
                }
            }
            if (candidate && !candidate.equals(me)) {
                return candidate;
            }
        }
        return me;
    },
    up: function(options) {
        var me = this,
            column = options && options.column || me.column,
            candidate = me.previousItem(options),
            cell;
        if (candidate) {
            candidate._setColumn(column);
            cell = candidate.get();
            while (candidate && (!cell || !cell.el.isFocusable())) {
                candidate = candidate.previousItem(options);
                if (candidate) {
                    candidate._setColumn(column);
                    cell = candidate.get();
                }
            }
        }
        if (candidate && !candidate.equals(me)) {
            return candidate;
        }
        return me;
    },
    privates: {
        determineActionable: function() {
            var target = this.sourceElement,
                cell = this.cell,
                actionable = false;
            if (target && (!cell || cell.destroyed || cell.element.dom !== target)) {
                actionable = Ext.fly(target).isFocusable(true);
            }
            return actionable;
        },
        navigate: function(reverse) {
            var me = this,
                activeEl = me.sourceElement,
                view = me.view,
                scrollable = view.getScrollable(),
                actionables = view.getNavigationModel().actionables,
                len = actionables && actionables.length,
                candidate = me.clone(),
                previousCandidate = me.clone(),
                testEl,
                visitOptions = {
                    callback: function(el) {
                        testEl = Ext.fly(el);
                        if (!testEl.$isFocusTrap && testEl.isFocusable()) {
                            component = Ext.Component.from(el);
                            if (!component || !component.getDisabled()) {
                                focusables.push(el);
                            }
                        }
                    },
                    reverse: reverse,
                    skipSelf: true
                },
                focusables = [],
                i, result, component;
            while (candidate && !result && candidate.get()) {
                focusables.length = 0;
                candidate.get().el.visit(visitOptions);
                activeEl = focusables[activeEl ? (Ext.Array.indexOf(focusables, activeEl) + 1) : 0];
                if (activeEl) {
                    result = candidate;
                    result.source = result.sourceElement = activeEl;
                    delete result.actionable;
                    if (candidate.child) {
                        scrollable.ensureVisible(candidate.child.el);
                    }
                    scrollable.ensureVisible(activeEl);
                    activeEl.focus();
                } else {
                    candidate = candidate[reverse ? 'previousCell' : 'nextCell']();
                    if (candidate.equals(previousCandidate)) {
                        return me;
                    }
                    if (candidate && len) {
                        for (i = 0; !result && i < len; i++) {
                            view.ensureVisible(candidate.record, {
                                column: candidate.columnIndex,
                                focus: true
                            });
                            result = actionables[i].activateCell(candidate);
                        }
                    }
                }
                previousCandidate = candidate;
            }
            return result || me;
        },
        activate: function() {
            var me = this,
                view = me.view,
                scrollable = view.getScrollable(),
                actionables = view.getNavigationModel().actionables,
                len = actionables && actionables.length,
                candidate = me.clone(),
                activeEl, i, result;
            candidate.get().el.visit({
                callback: function(el) {
                    if (Ext.fly(el).isFocusable()) {
                        activeEl = el;
                        return false;
                    }
                },
                skipSelf: true
            });
            if (activeEl) {
                result = candidate;
                result.source = result.sourceElement = activeEl;
                delete result.actionable;
                if (candidate.child) {
                    scrollable.ensureVisible(candidate.child.el);
                }
                scrollable.ensureVisible(activeEl);
                activeEl.focus();
            } else {
                for (i = 0; !result && i < len; i++) {
                    result = actionables[i].activateCell(candidate);
                }
            }
            return result;
        },
        getFocusables: function() {
            var focusables = [],
                element = this.sourceElement;
            if (element) {
                Ext.fly(element).visit({
                    callback: function(el) {
                        if (Ext.fly(el).isFocusable()) {
                            focusables.push(el);
                        }
                    },
                    skipSelf: true
                });
            }
            return focusables;
        },
        nextCell: function(options) {
            var me = this,
                startPoint = me.clone(),
                result = me.clone(),
                columns = me.getVisibleColumns(),
                rowIndex = me.view.store.indexOf(me.row.getRecord()),
                targetIndex,
                wrap = false;
            if (options) {
                if (typeof options === 'boolean') {
                    wrap = options;
                } else {
                    wrap = options.wrap;
                }
            }
            do {
                targetIndex = columns.indexOf(result.column) + 1;
                if (targetIndex === columns.length || !me.child.isGridRow) {
                    if (rowIndex < me.view.store.getData().count() - 1) {
                        result = me.getUpdatedLocation(columns[0], rowIndex + 1);
                    } else if (wrap) {
                        result = me.getUpdatedLocation(columns[0], 0);
                    }
                } else {
                    result = me.getUpdatedLocation(columns[targetIndex], rowIndex);
                }
                if (result && result.equals(startPoint)) {
                    break;
                }
                if (!result) {
                    result = startPoint;
                    break;
                }
            } while (result && !result.sourceElement);
            return result;
        },
        getVisibleColumns: function() {
            var me = this,
                view = me.view,
                partners = view.allPartners || [
                    view
                ],
                partnerLen = partners.length,
                i,
                visibleColumns = [];
            for (i = 0; i < partnerLen; i++) {
                visibleColumns = visibleColumns.concat(partners[i].getVisibleColumns());
            }
            return visibleColumns;
        },
        previousCell: function(options) {
            var me = this,
                startPoint = me.clone(),
                result = me.clone(),
                columns = me.getVisibleColumns(),
                rowIndex = me.view.store.indexOf(me.row.getRecord()),
                targetIndex,
                wrap = false;
            if (options) {
                if (typeof options === 'boolean') {
                    wrap = options;
                } else {
                    wrap = options.wrap;
                }
            }
            do {
                targetIndex = columns.indexOf(result.column) - 1;
                if (targetIndex === -1 || !me.child.isGridRow) {
                    if (rowIndex > 0) {
                        result = me.getUpdatedLocation(columns[columns.length - 1], rowIndex - 1);
                    } else if (wrap) {
                        result = me.getUpdatedLocation(columns[columns.length - 1], me.view.store.getData().count() - 1);
                    }
                } else {
                    result = me.getUpdatedLocation(columns[targetIndex], rowIndex);
                }
                if (result && result.equals(startPoint)) {
                    break;
                }
                if (!result) {
                    result = startPoint;
                    break;
                }
            } while (result && !result.sourceElement);
            return result;
        },
        getUpdatedLocation: function(column, targetRowIndex) {
            var me = this,
                grid = column.getGrid(),
                targetRecord = me.view.store.getData().getAt(targetRowIndex),
                location = grid.createLocation(targetRecord);
            location.column = column;
            location.columnIndex = grid.getVisibleColumns().indexOf(column);
            location.cell = location.row && location.row.getCellByColumn(column);
            if (location.cell) {
                delete me.event;
                delete me.actionable;
                location.isTreeLocation = !!location.cell.isTreeCell;
                location.sourceElement = location.cell.el.dom;
                return location;
            } else {
                return null;
            }
        },
        _setColumn: function(column) {
            var me = this,
                columns = me.view.getVisibleColumns(),
                index;
            if (typeof column === 'number') {
                index = column;
                column = columns[index];
            } else {
                index = columns.indexOf(column);
            }
            delete me.event;
            delete me.actionable;
            me.column = column;
            me.columnIndex = index;
            me.cell = me.row && me.row.getCellByColumn(column);
            if (me.cell) {
                me.isTreeLocation = !!me.cell.isTreeCell;
                me.sourceElement = me.cell.el.dom;
            }
            return me;
        }
    }
}, function(Cls) {
    Cls.defineProtoProperty('actionable', 'determineActionable');
});

Ext.define('Ext.grid.NavigationModel', {
    extend: Ext.dataview.NavigationModel,
    alias: 'navmodel.grid',
    locationClass: 'Ext.grid.Location',
    statics: {
        ignoreInputFieldKeys: {
            PAGE_UP: true,
            PAGE_DOWN: true,
            END: true,
            HOME: true,
            LEFT: true,
            UP: true,
            RIGHT: true,
            DOWN: true
        }
    },
    setLocation: function(location, options) {
        var me = this,
            view = me.getView(),
            event = options && options.event;
        me.columnIndex = -1;
        if (location != null && !location.isGridLocation) {
            if (Ext.isArray(location)) {
                location = {
                    column: location[0],
                    record: location[1]
                };
            } else if (typeof location === 'number') {
                location = view.store.getAt(location);
            }
            location = me.createLocation(location);
            if (event) {
                location.event = event;
            }
        }
        return me.callParent([
            location,
            options
        ]);
    },
    clearLocation: function() {
        var me = this,
            item;
        if (me.location) {
            me.previousLocation = me.location;
            item = me.location.sourceElement;
            if (item) {
                Ext.fly(item).removeCls(me.focusedCls);
            }
            me.location = null;
        }
    },
    registerActionable: function(actionable) {
        var me = this,
            view = me.getView(),
            actionables = me.actionables || (me.actionables = []),
            triggerEvent, listeners;
        if (!Ext.Array.contains(actionables, actionable)) {
            actionables.push(actionable);
            triggerEvent = actionable.getTriggerEvent();
            if (triggerEvent) {
                listeners = {
                    scope: me,
                    args: [
                        actionable
                    ]
                };
                listeners[triggerEvent] = 'triggerActionable';
                actionable.triggerEventListener = view.bodyElement.on(listeners);
            }
        }
    },
    unregisterActionable: function(actionable) {
        var actionables = this.actionables;
        if (actionables) {
            Ext.Array.remove(actionables, actionable);
        }
    },
    privates: {
        onFocusMove: function(e) {
            var me = this,
                view = me.getView(),
                location = me.getLocation();
            if (e.toElement === view.el.dom && location) {
                me.clearLocation();
                return me.setLocation(location);
            }
            location = me.createLocation(e);
            if (!location.equals(me.location)) {
                me.handleLocationChange(location, {
                    event: e,
                    navigate: false
                });
            }
        },
        processViewEvent: function(e) {
            var me = this,
                view = me.getView(),
                cell = view.mapToCell(e);
            if (Ext.fly(e.target).isInputField() && me.self.ignoreInputFieldKeys[e.getKeyName()]) {
                return false;
            }
            if (cell && cell.row.grid === view) {
                return e;
            }
        },
        activateCell: function(location) {
            location.clone().activate();
        },
        triggerActionable: function(actionable, e) {
            var actionLocation;
            actionLocation = actionable.activateCell(this.createLocation(e));
            if (actionLocation) {
                this.setLocation(actionLocation);
            }
        },
        onChildTouchStart: function(view, location) {
            var e = location.event;
            if (location.header || location.footer) {
                e.preventDefault();
            } else {
                if (this.location && !this.location.equalCell(location)) {
                    this.setLocation(location, {
                        event: location.event,
                        navigate: this.getView().getTriggerEvent() === 'childtouchstart'
                    });
                }
            }
        },
        onKeyUp: function(e) {
            e.preventDefault();
            if (!this.location.actionable) {
                if (this.location) {
                    this.moveUp(e);
                } else {
                    this.setLocation(0);
                }
            }
        },
        onKeyDown: function(e) {
            e.preventDefault();
            if (!this.location.actionable) {
                if (this.location) {
                    this.moveDown(e);
                } else {
                    this.setLocation(0);
                }
            }
        },
        onKeyLeft: function(e) {
            var location = this.location,
                isSimpleTree = location.isLastColumn() && location.isFirstColumn();
            if (!location.actionable) {
                e.preventDefault();
                if (location.isTreeLocation && !location.record.isLeaf() && location.record.isExpanded()) {
                    if (isSimpleTree === !e.ctrlKey) {
                        return location.cell.collapse();
                    }
                }
                if (!(e.shiftKey && location.isFirstColumn())) {
                    this.movePrevious({
                        event: e
                    });
                }
            }
            else if (Ext.fly(e.target).isInputField()) {
                return true;
            }
        },
        onKeyRight: function(e) {
            var location = this.location,
                isSimpleTree = location.isLastColumn() && location.isFirstColumn();
            if (!location.actionable) {
                e.preventDefault();
                if (location.isTreeLocation && !location.record.isLeaf() && !location.record.isExpanded()) {
                    if (isSimpleTree === !e.ctrlKey) {
                        return location.cell.expand();
                    }
                }
                if (!(e.shiftKey && location.isLastColumn())) {
                    this.moveNext({
                        event: e
                    });
                }
            }
            else if (Ext.fly(e.target).isInputField()) {
                return true;
            }
        },
        onKeyF2: function(e) {
            if (this.location.actionable) {
                this.onKeyEsc();
            } else {
                this.activateCell(this.location);
            }
        },
        onKeyEsc: function(e) {
            if (this.location.actionable) {
                this.location.get().el.focus();
            }
        },
        onKeyTab: function(e) {
            var me = this,
                location = me.location,
                navigate;
            if (location.actionable) {
                navigate = function() {
                    me.location = e.shiftKey ? location.previous() : location.next();
                };
                navigate();
            } else {
                return true;
            }
        },
        onKeyPageDown: function(e) {
            var me = this,
                view, y, candidate;
            e.preventDefault();
            if (!me.location.actionable) {
                view = me.getView();
                y = (view.infinite ? view.getItemTop(me.location.child) : me.location.child.el.dom.offsetTop) + view.getVisibleHeight();
                candidate = view.getRecordIndexFromPoint(0, y);
                view.ensureVisible(candidate).then(function() {
                    candidate = new Ext.grid.Location(view, {
                        record: candidate,
                        column: me.location.column
                    });
                    if (!(candidate.sourceElement && Ext.fly(candidate.sourceElement).isFocusable())) {
                        candidate = candidate.up();
                    }
                    me.setLocation(candidate, {
                        event: e
                    });
                });
            }
        },
        onKeyPageUp: function(e) {
            var me = this,
                view, y, candidate;
            e.preventDefault();
            if (!me.location.actionable) {
                view = me.getView();
                y = (view.infinite ? view.getItemTop(me.location.child) : me.location.child.el.dom.offsetTop) - view.getVisibleHeight();
                candidate = view.getRecordIndexFromPoint(0, y);
                view.ensureVisible(candidate).then(function() {
                    candidate = new Ext.grid.Location(view, {
                        record: candidate,
                        column: me.location.column
                    });
                    if (!(candidate.sourceElement && Ext.fly(candidate.sourceElement).isFocusable())) {
                        candidate = candidate.down();
                    }
                    me.setLocation(candidate, {
                        event: e
                    });
                });
            }
        },
        onKeyHome: function(e) {
            e.preventDefault();
            if (!this.location.actionable) {
                if (e.ctrlKey) {
                    this.setLocation({
                        record: this.getView().getStore().first(),
                        column: this.location.column
                    }, {
                        event: e
                    });
                } else {
                    this.setLocation({
                        record: this.location.record,
                        column: this.getView().getFirstVisibleColumn()
                    }, {
                        event: e
                    });
                }
            }
        },
        onKeyEnd: function(e) {
            e.preventDefault();
            if (!this.location.actionable) {
                if (e.ctrlKey) {
                    this.setLocation({
                        record: this.getView().getStore().last(),
                        column: this.location.column
                    }, {
                        event: e
                    });
                } else {
                    this.setLocation({
                        record: this.location.record,
                        column: this.getView().getLastVisibleColumn()
                    }, {
                        event: e
                    });
                }
            }
        },
        onKeySpace: function(e) {
            var target = Ext.fly(e.target),
                events, focusables, result;
            this.onNavigate(e);
            if (!this.location.actionable) {
                focusables = this.location.getFocusables();
                if (focusables.length) {
                    events = Ext.get(focusables[0]).events;
                }
            } else {
                if (target.isInputField()) {
                    result = true;
                } else {
                    events = target.events;
                }
            }
            if (events) {
                if (events.tap) {
                    events.tap.fire(e);
                }
                if (events.click) {
                    events.click.fire(e);
                }
            }
            return result;
        },
        onKeyEnter: function(e) {
            var l = this.location;
            e.stopEvent();
            if (!l.actionable) {
                if (l.isTreeLocation && l.record.data.checked != null) {
                    l.record.set('checked', !l.record.data.checked);
                } else {
                    this.activateCell(l);
                }
            } else {
                this.onKeySpace(e);
            }
        },
        onSelectAllKeyPress: function(e) {
            if (Ext.fly(e.target).isInputField()) {
                return true;
            } else {
                return this.callParent([
                    e
                ]);
            }
        },
        moveUp: function(e) {
            var location = this.getLocation();
            if (location) {
                location = location.up();
                if (location) {
                    this.setLocation(location, {
                        event: e
                    });
                }
            }
        },
        moveDown: function(e) {
            var location = this.getLocation();
            if (location) {
                location = location.down();
                if (location) {
                    this.setLocation(location, {
                        event: e
                    });
                }
            }
        }
    }
});

Ext.define('Ext.grid.cell.Base', {
    extend: Ext.Widget,
    xtype: 'gridcellbase',
    isGridCell: true,
    mixins: [
        Ext.mixin.Toolable
    ],
    cachedConfig: {
        align: null,
        cls: null,
        bodyCls: null,
        bodyStyle: null,
        cellCls: null,
        selectable: null
    },
    config: {
        column: null,
        hidden: false,
        record: null,
        value: null
    },
    classCls: Ext.baseCSSPrefix + 'gridcell',
    dirtyCls: Ext.baseCSSPrefix + 'dirty',
    alignCls: {
        left: Ext.baseCSSPrefix + 'align-left',
        center: Ext.baseCSSPrefix + 'align-center',
        right: Ext.baseCSSPrefix + 'align-right'
    },
    inheritUi: true,
    cellSelector: '.' + Ext.baseCSSPrefix + 'gridcell',
    defaultBindProperty: 'value',
    toolDefaults: {
        zone: 'head',
        ui: 'gridcell'
    },
    getTemplate: function() {
        var template = {
                reference: 'bodyElement',
                cls: Ext.baseCSSPrefix + 'body-el',
                uiCls: 'body-el'
            };
        if (!(template.children = this.innerTemplate)) {
            template.html = '\xa0';
        }
        return [
            template
        ];
    },
    doDestroy: function() {
        this.setColumn(null);
        this.setRecord(null);
        this.mixins.toolable.doDestroy.call(this);
        this.callParent();
    },
    getComputedWidth: function() {
        return this.getHidden() ? 0 : this.getWidth();
    },
    updateAlign: function(align, oldAlign) {
        var me = this,
            alignCls = me.alignCls;
        if (oldAlign) {
            me.removeCls(alignCls[oldAlign]);
        }
        if (align) {
            if (!alignCls[align]) {
                Ext.raise("Invalid value for align: '" + align + "'");
            }
            me.addCls(alignCls[align]);
        }
        me.syncToolableAlign();
    },
    updateBodyCls: function(cellCls, oldCellCls) {
        if (cellCls || oldCellCls) {
            this.bodyElement.replaceCls(oldCellCls, cellCls);
        }
    },
    updateBodyStyle: function(style) {
        this.bodyElement.applyStyles(style);
    },
    updateCellCls: function(cls, oldCls) {
        this.element.replaceCls(oldCls, cls);
    },
    updateCls: function(cls, oldCls) {
        this.element.replaceCls(oldCls, cls);
    },
    updateColumn: function(column) {
        var dataIndex = null,
            row = this.row;
        if (column) {
            dataIndex = ((row && row.isSummaryRow) && column.getSummaryDataIndex()) || column.getDataIndex();
        }
        this.dataIndex = dataIndex;
    },
    updateRecord: function() {
        if (!this.destroyed && !this.destroying) {
            this.refresh();
        }
    },
    updateSelectable: function(value) {
        this.toggleCls(Ext.baseCSSPrefix + 'item-no-select', value === false);
    },
    refresh: function(ctx) {
        var me = this,
            was = me.refreshContext,
            context, modified, value;
        if (!me.isBound('value')) {
            ctx = ctx || was;
            modified = ctx && ctx.modified;
            if (!modified || me.bound(modified)) {
                me.refreshContext = context = me.beginRefresh(ctx);
                value = me.refreshValue(context);
                if (value !== me.getValue()) {
                    me.setValue(value);
                } else if (me.writeValue) {
                    me.writeValue();
                }
                me.refreshContext = was;
            }
        }
    },
    refreshValue: function(context) {
        var me = this,
            record = context.record,
            dataIndex = context.dataIndex,
            value, dirty, modified;
        if (context.summary) {
            value = me.summarize(context);
        } else if (record && dataIndex) {
            value = record.get(dataIndex);
            modified = record.modified;
            dirty = !!(modified && modified.hasOwnProperty(dataIndex));
            if (dirty !== me.$dirty) {
                me.toggleCls(me.dirtyCls, dirty);
                me.$dirty = dirty;
            }
        }
        return value;
    },
    privates: {
        refreshCounter: 0,
        $dirty: false,
        refreshContext: null,
        storeMethodRe: /^(?:average|max|min|sum)$/,
        augmentToolHandler: function(tool, args) {
            var info = args[1] = {
                    event: args.pop(),
                    record: this.getRecord(),
                    column: this.getColumn(),
                    cell: args[0],
                    tool: args[1]
                };
            args[0] = info.grid = info.column.getGrid();
        },
        beginRefresh: function(context) {
            var me = this,
                column = me.getColumn(),
                row = me.row;
            context = context || (row ? row.beginRefresh() : {
                record: me.getRecord()
            });
            ++me.refreshCounter;
            context.from = context.from || 'cell';
            context.cell = me;
            context.column = column;
            context.dataIndex = me.dataIndex;
            context.scope = column.getScope();
            return context;
        },
        bound: function(fields) {
            return !!fields[this.dataIndex];
        },
        summarize: function(context) {
            var me = this,
                column = context.column,
                summaryType = column.getSummaryType(),
                dataIndex = context.dataIndex,
                group = context.group,
                store = context.store,
                records = context.records,
                value;
            if (summaryType) {
                if (!column.$warnSummaryType) {
                    column.$warnSummaryType = true;
                    Ext.log.warn('[column] summaryType is deprecated; use summaryRenderer (' + column.getId() + ')');
                }
                if (Ext.isFunction(summaryType)) {
                    value = summaryType.call(store, store.data.items.slice(), dataIndex);
                } else if (summaryType === 'count') {
                    value = store.getCount();
                } else if (me.storeMethodRe.test(summaryType)) {
                    value = store[summaryType](dataIndex);
                } else {
                    value = Ext.callback(summaryType, null, [
                        store.data.items.slice(),
                        dataIndex,
                        store
                    ], 0, me);
                }
            } else if (!(summaryType = column.getSummary())) {
                if (dataIndex) {
                    value = context.record.get(dataIndex);
                }
            }
            else if (!dataIndex) {
                Ext.raise('Cannot use summary config w/o summaryDataIndex or dataIndex (' + context.grid.getId() + ')');
            } else {
                if (group) {
                    if (group.isVirtualGroup) {
                        Ext.raise('Cannot calculate a group summary on a virtual store (' + context.grid.getId() + ')');
                    }
                } else if (store.getRemoteSort()) {
                    Ext.raise('Cannot calculate a summary on a remoteSort store (' + context.grid.getId() + ')');
                }
                value = summaryType.calculate(records, dataIndex, 'data', 0, records.length);
            }
            return value;
        }
    },
    deprecated: {
        '6.5': {
            configs: {
                innerStyle: 'bodyStyle',
                innerCls: 'bodyCls'
            }
        }
    }
});

Ext.define('Ext.grid.cell.Text', {
    extend: Ext.grid.cell.Base,
    xtype: 'textcell',
    config: {
        encodeHtml: true,
        rawValue: null,
        zeroValue: null
    },
    getTemplate: function() {
        var template = this.callParent();
        template[0]["data-qoverflow"] = true;
        return template;
    },
    formatValue: function(v) {
        var me = this,
            context = me.refreshContext,
            column = context.column,
            zeroValue = me.getZeroValue(),
            format = column.getFormatter(),
            renderer, scope;
        if (context.summary) {
            renderer = column.getSummaryRenderer();
            if (renderer) {
                format = null;
                scope = context.scope;
                if (typeof renderer === 'string') {
                    v = Ext.callback(renderer, scope, [
                        v,
                        context
                    ], 0, column);
                } else {
                    v = renderer.call(scope || me, v, context);
                }
            }
            format = column.getSummaryFormatter() || format;
        } else if (v === 0 && zeroValue !== null) {
            v = zeroValue;
            format = null;
        }
        if (format) {
            v = format(v);
        }
        if (v != null) {
            v = String(v);
        } else {
            v = '';
        }
        return v;
    },
    printValue: function(v) {
        var me = this,
            was = me.refreshContext,
            s;
        me.refreshContext = me.beginRefresh(was);
        s = me.formatValue(v);
        if (me.getEncodeHtml()) {
            s = Ext.htmlEncode(s);
        }
        me.refreshContext = was;
        return s;
    },
    updateRawValue: function(rawValue) {
        var dom = this.bodyElement.dom,
            value = rawValue == null ? '' : rawValue;
        if (this.getEncodeHtml()) {
            dom.textContent = value;
        } else {
            dom.innerHTML = value;
        }
    },
    updateValue: function() {
        var me = this,
            was = me.refreshContext,
            row = me.row;
        if (row && row.parent) {
            if (!was) {
                me.refreshContext = me.beginRefresh();
            }
            me.writeValue();
            me.refreshContext = was;
        }
    },
    updateZeroValue: function() {
        if (!this.isConfiguring) {
            this.refresh();
        }
    },
    writeValue: function() {
        var me = this,
            value = me.getValue();
        if (!(value = me.formatValue(value))) {
            value = me.getColumn().getEmptyText();
        }
        me.setRawValue(value);
    }
});

Ext.define('Ext.grid.cell.Cell', {
    extend: Ext.grid.cell.Text,
    xtype: 'gridcell',
    config: {
        tpl: null,
        renderer: null,
        formatter: null,
        scope: null
    },
    friendly: null,
    updateColumn: function(column, oldColumn) {
        var me = this,
            friendly = true,
            tpl, renderer, formatter;
        me.callParent([
            column,
            oldColumn
        ]);
        if (column) {
            tpl = column.getTpl();
            renderer = column.getRenderer();
            formatter = column.getFormatter();
            if (renderer !== null) {
                me.setRenderer(renderer);
                friendly = (typeof renderer === 'function') && renderer.length === 1;
            }
            if (tpl !== null) {
                me.setTpl(tpl);
                friendly = false;
            }
            if (formatter !== null) {
                me.setFormatter(formatter);
            }
            me.friendly = friendly;
        }
    },
    applyTpl: function(tpl) {
        return Ext.XTemplate.get(tpl);
    },
    applyFormatter: function(format) {
        var me = this,
            fmt = format,
            parser;
        if (typeof fmt === 'string') {
            parser = Ext.app.bind.Parser.fly(fmt);
            fmt = parser.compileFormat();
            parser.release();
            return function(v) {
                return fmt(v, me.getScope() || me.resolveListenerScope());
            };
        } else if (typeof fmt !== 'function') {
            Ext.raise('Invalid formatter');
        }
        return fmt;
    },
    updateTpl: function() {
        if (!this.isConfiguring) {
            this.refresh();
        }
    },
    updateRenderer: function() {
        if (!this.isConfiguring) {
            this.refresh();
        }
    },
    updateFormatter: function() {
        if (!this.isConfiguring) {
            this.refresh();
        }
    },
    formatValue: function(v) {
        var me = this,
            context = me.refreshContext,
            dataIndex = context.dataIndex,
            column = context.column,
            record = context.record,
            zeroValue = me.getZeroValue(),
            raw = v,
            summary = context.summary,
            args, data, format, renderer, scope, tpl;
        if (!context.summary && v === 0 && zeroValue !== null) {
            raw = zeroValue;
        } else if (!(tpl = me.getTpl(context))) {
            format = me.getFormatter();
            if (summary) {
                renderer = column.getSummaryRenderer();
                if (renderer) {
                    format = null;
                    scope = context.scope;
                    if (typeof renderer === 'string') {
                        raw = Ext.callback(renderer, scope, [
                            v,
                            context
                        ], 0, column);
                        me.friendly = false;
                    } else {
                        raw = renderer.call(scope || me, v, context);
                        if (renderer.length > 1) {
                            me.friendly = false;
                        }
                    }
                }
                format = column.getSummaryFormatter() || format;
            } else {
                renderer = me.getRenderer();
                if (renderer) {
                    args = [
                        v,
                        record,
                        dataIndex,
                        me,
                        column
                    ];
                    scope = me.getScope() || context.scope;
                    if (typeof renderer === 'function') {
                        raw = renderer.apply(scope || column, args);
                    } else {
                        raw = Ext.callback(renderer, scope, args, 0, me);
                    }
                }
            }
            if (format) {
                raw = format(raw);
            }
        } else {
            if (!(data = context.data)) {
                context.data = data = context.summary ? context.record.getData() : context.grid.gatherData(context.record);
            }
            raw = tpl.apply(data);
        }
        if (raw != null) {
            raw = String(raw);
        } else {
            raw = '';
        }
        return raw;
    },
    privates: {
        bound: function(fields) {
            var me = this,
                bound = !!fields[me.dataIndex],
                column, depends, i;
            if (!bound) {
                column = me.getColumn();
                depends = column && column.getDepends();
                if (depends) {
                    for (i = depends.length; !bound && i-- > 0; ) {
                        bound = !!fields[depends[i]];
                    }
                } else if (!me.friendly) {
                    bound = true;
                }
            }
            return bound;
        }
    }
});

Ext.define('Ext.grid.RowBody', {
    extend: Ext.Component,
    xtype: 'rowbody',
    config: {
        widget: null
    },
    classCls: Ext.baseCSSPrefix + 'rowbody',
    inheritUi: true,
    template: [
        {
            reference: 'spacerElement',
            cls: Ext.baseCSSPrefix + 'spacer-el'
        },
        {
            reference: 'contentElement',
            cls: Ext.baseCSSPrefix + 'content-el'
        }
    ],
    initialize: function() {
        var me = this,
            grid, rowExpander;
        me.callParent();
        grid = me.row.getGrid();
        if (grid && grid.hasRowExpander) {
            rowExpander = grid.findPlugin('rowexpander');
            if (rowExpander) {
                me.spacerElement.setWidth(rowExpander.getColumn().getWidth());
            }
        }
    },
    applyWidget: function(widget) {
        var row = this.row;
        if (widget) {
            widget = Ext.apply({
                ownerCmp: row
            }, widget);
            widget = Ext.widget(widget);
        }
        return widget;
    },
    updateWidget: function(widget, oldWidget) {
        if (oldWidget) {
            oldWidget.destroy();
        }
        if (widget) {
            this.contentElement.appendChild(widget.element);
        }
    },
    updateRecord: function(record, oldRecord) {
        var tpl = this.getTpl();
        if (tpl) {
            this.callParent([
                record,
                oldRecord
            ]);
        }
    },
    getInnerHtmlElement: function() {
        return this.contentElement;
    },
    doDestroy: function() {
        this.setWidget(null);
        this.callParent();
    }
});

Ext.define('Ext.grid.Row', {
    extend: Ext.Component,
    xtype: 'gridrow',
    mixins: [
        Ext.mixin.Queryable,
        Ext.dataview.GenericItem,
        Ext.dataview.Pinnable
    ],
    isGridRow: true,
    isRecordRefreshable: true,
    hasGridCells: true,
    cachedConfig: {
        collapsed: true
    },
    config: {
        body: null,
        expandedField: null,
        defaultCellUI: null,
        stickyVisibility: null
    },
    classCls: [
        Ext.baseCSSPrefix + 'listitem',
        Ext.baseCSSPrefix + 'gridrow'
    ],
    inheritUi: true,
    expandedCls: Ext.baseCSSPrefix + 'expanded',
    element: {
        reference: 'element',
        children: [
            {
                reference: 'cellsElement',
                className: Ext.baseCSSPrefix + 'cells-el'
            }
        ]
    },
    constructor: function(config) {
        this.cells = [];
        this.columnMap = {};
        this.callParent([
            config
        ]);
    },
    doDestroy: function() {
        var me = this;
        me.setRecord(null);
        me.setBody(null);
        me.cells = Ext.destroy(me.cells);
        me.callParent();
    },
    collapse: function() {
        this.setCollapsed(true);
    },
    expand: function() {
        this.setCollapsed(false);
    },
    toggleCollapsed: function() {
        this.setCollapsed(!this.getCollapsed());
    },
    updateCollapsed: function(collapsed) {
        var me = this,
            body = me.getBody(),
            grid = me.getParent(),
            record = me.getRecord(),
            expandField = me.getExpandedField(),
            expandedCls = me.expandedCls,
            expanderCell = me.expanderCell,
            recordsExpanded;
        if (record) {
            if (expandField) {
                record.set(expandField, !collapsed);
            } else {
                recordsExpanded = grid.$recordsExpanded || (grid.$recordsExpanded = {});
                if (collapsed) {
                    delete recordsExpanded[record.internalId];
                } else {
                    recordsExpanded[record.internalId] = true;
                }
            }
        }
        if (expanderCell) {
            expanderCell.setCollapsed(collapsed);
        }
        if (body) {
            if (collapsed) {
                body.hide();
                me.removeCls(expandedCls);
            } else {
                body.show();
                me.addCls(expandedCls);
            }
        }
    },
    applyBody: function(config, existing) {
        return Ext.updateWidget(existing, config, this, 'createBody');
    },
    createBody: function(body) {
        return Ext.merge({
            xtype: 'rowbody',
            ownerCmp: this,
            row: this,
            hidden: true
        }, body);
    },
    updateBody: function(body) {
        var me = this,
            grid = me.getParent();
        if (body) {
            me.bodyElement.appendChild(body.element);
            if (me.rendered && !body.rendered) {
                body.setRendered(true);
            }
        }
        if (grid) {
            grid.setVariableHeights(true);
            if (!grid.hasRowExpander) {
                me.expand();
            }
        }
    },
    onAdded: function(grid) {
        var me = this,
            cells = me.cells,
            cell, col, columns, i, k, n;
        me.callParent(arguments);
        if (grid) {
            columns = grid.getColumns();
            for (i = 0 , n = columns.length; i < n; i++) {
                cell = cells[i];
                col = columns[i];
                if (cell) {
                    if (cell.getColumn() === col) {
                        
                        continue;
                    }
                    for (k = cells.length; k-- > i; ) {
                        cell = cells[k];
                        me.removeColumn(cell.getColumn());
                    }
                }
                me.addColumn(columns[i]);
            }
        }
    },
    addColumn: function(column) {
        this.insertColumn(this.cells.length, column);
    },
    getCells: function(selector) {
        return selector ? Ext.ComponentQuery.query(selector, this.cells) : this.cells;
    },
    getRefItems: function(deep) {
        var result = [],
            body = this.getConfig('body', false, true),
            cells = this.cells,
            len = cells && cells.length,
            i, cell;
        for (i = 0; i < len; i++) {
            cell = cells[i];
            result.push(cell);
            if (deep && cell.getRefItems) {
                result.push.apply(result, cell.getRefItems());
            }
        }
        if (body) {
            result.push(body);
            if (deep && body.getRefItems) {
                result.push.apply(result, body.getRefItems());
            }
        }
        return result;
    },
    insertColumn: function(index, column) {
        var me = this,
            cells = me.cells,
            cell;
        if (column.isHeaderGroup) {
            return;
        }
        cell = me.createCell(column);
        if (index >= cells.length) {
            me.cellsElement.appendChild(cell.element);
            cells.push(cell);
        } else {
            cell.element.insertBefore(cells[index].element);
            cells.splice(index, 0, cell);
        }
        me.columnMap[column.getId()] = cell;
        if (cell.isExpanderCell) {
            me.expanderCell = cell;
        }
        if (me.rendered) {
            cell.setRendered(true);
        }
    },
    insertColumnBefore: function(column, ref) {
        var me = this,
            map = me.columnMap,
            id = column.getId(),
            cell = map[id],
            cells = me.cells,
            refCell, refIndex, index;
        if (ref) {
            refCell = me.getCellByColumn(ref);
            refIndex = cells.indexOf(refCell);
        } else {
            refIndex = cells.length - (cell ? 1 : 0);
        }
        if (cell) {
            index = cells.indexOf(cell);
            Ext.Array.move(cells, index, refIndex);
            if (refCell) {
                cell.element.insertBefore(refCell.element);
            } else {
                me.cellsElement.appendChild(cell.element);
            }
        } else {
            me.insertColumn(refIndex, column);
        }
    },
    removeColumn: function(column) {
        var me = this,
            columnMap = me.columnMap,
            columnId = column.getId(),
            cell = columnMap[columnId];
        if (cell) {
            Ext.Array.remove(me.cells, cell);
            delete columnMap[columnId];
            cell.destroy();
        }
    },
    updateRecord: function(record) {
        if (!this.destroyed && !this.destroying) {
            this.refresh();
        }
    },
    setColumnWidth: function(column) {
        var cell = this.getCellByColumn(column);
        if (cell) {
            cell.setWidth(column.getComputedWidth());
        }
    },
    showColumn: function(column) {
        this.setCellHidden(column, false);
    },
    hideColumn: function(column) {
        this.setCellHidden(column, true);
    },
    getCellByColumn: function(column) {
        return this.columnMap[column.getId()];
    },
    getColumnByCell: function(cell) {
        return cell.getColumn();
    },
    updateStickyVisibility: function(value) {
        this.fireEvent('stickyvisiblitychange', value);
    },
    refresh: function(context) {
        var me = this,
            cells = me.cells,
            body = me.getBody(),
            len = cells.length,
            expandField = me.getExpandedField(),
            grid = me.getParent(),
            sm = grid.getSelectable(),
            selection = sm.getSelection(),
            isCellSelection = selection.isCells || selection.isColumns,
            i, visibleIndex, cell, record, recordsExpanded;
        me.refreshContext = context = me.beginRefresh(context);
        record = context.record;
        me.syncDirty(record);
        for (i = 0 , visibleIndex = 0; i < len; ++i) {
            cell = cells[i];
            if (!context.summary || !cell.getColumn().getIgnore()) {
                if (cell.getRecord() === record) {
                    cell.refresh(context);
                } else {
                    cell.refreshContext = context;
                    cell.setRecord(record);
                    cell.refreshContext = null;
                }
                if (isCellSelection) {
                    cell.toggleCls(grid.selectedCls, sm.isCellSelected(me._recordIndex, visibleIndex));
                }
            }
            if (!cell.isHidden()) {
                visibleIndex++;
            }
        }
        context.cell = context.column = context.dataIndex = context.scope = null;
        if (body) {
            body.refreshContext = context;
            if (body.getRecord() === record) {
                body.updateRecord(record);
            } else {
                body.setRecord(record);
            }
            body.refreshContext = null;
            if (expandField) {
                me.setCollapsed(!record.get(expandField));
            } else {
                recordsExpanded = grid.$recordsExpanded || (grid.$recordsExpanded = {});
                if (grid.hasRowExpander) {
                    me.setCollapsed(!recordsExpanded[record.internalId]);
                }
            }
        }
        me.refreshContext = null;
    },
    privates: {
        refreshContext: null,
        beginRefresh: function(context) {
            var me = this,
                grid = me.getParent();
            context = context || {};
            context.from = context.from || 'row';
            context.grid = grid;
            context.record = me.getRecord();
            context.row = me;
            context.store = grid.store;
            return context;
        },
        createCell: function(column) {
            var cell = column.createCell(this);
            cell = Ext.create(cell);
            delete cell.$initParent;
            if (cell.inheritUi) {
                cell.doInheritUi();
            }
            cell.el.setTabIndex(-1);
            return cell;
        },
        setCellHidden: function(column, hidden) {
            var cell = this.getCellByColumn(column);
            if (cell) {
                cell.setHidden(hidden);
            }
        },
        getGrid: function() {
            return this.getParent();
        }
    }
});

Ext.define('Ext.grid.HeaderContainer', {
    extend: Ext.Container,
    xtype: 'headercontainer',
    isHeaderContainer: true,
    config: {
        columns: null,
        defaultColumnUI: null,
        sortable: true,
        verticalOverflow: null,
        reserveScrollbar: null,
        grid: null
    },
    docked: 'top',
    defaultType: 'column',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    inheritUi: true,
    scrollable: {
        x: false,
        y: false
    },
    weighted: true,
    autoSize: null,
    constructor: function(config) {
        var me = this,
            isRoot = !me.isGridColumn;
        me.isRootHeader = isRoot;
        if (isRoot) {
            config.grid._headerContainer = me;
        }
        me.columns = [];
        me.callParent([
            config
        ]);
        if (isRoot) {
            config.grid._headerContainer = null;
        }
    },
    initialize: function() {
        var me = this;
        me.callParent();
        if (me.isRootHeader) {
            me.setInstanceCls(Ext.baseCSSPrefix + 'headercontainer');
            me.on({
                tap: 'onHeaderTap',
                triggertap: 'onHeaderTriggerTap',
                columnresize: 'onColumnResize',
                show: 'onColumnShow',
                hide: 'onColumnHide',
                sort: 'onColumnSort',
                scope: me,
                delegate: '[isLeafHeader]'
            });
            me.on({
                tap: 'onGroupTap',
                triggertap: 'onGroupTriggerTap',
                show: 'onGroupShow',
                hide: 'onGroupHide',
                add: 'onColumnAdd',
                move: 'onColumnMove',
                remove: 'onColumnRemove',
                scope: me,
                delegate: '[isHeaderGroup]'
            });
            me.on({
                add: 'onColumnAdd',
                move: 'onColumnMove',
                remove: 'onColumnRemove',
                scope: me
            });
        }
    },
    getRootHeaderCt: function() {
        var grid = this.getGrid();
        return grid && grid.getHeaderContainer();
    },
    getColumnForField: function(fieldName) {
        var columns = this.columns,
            n = columns.length,
            c, i;
        for (i = 0; i < n; ++i) {
            c = columns[i].getColumnForField(fieldName);
            if (c) {
                return c;
            }
        }
        return null;
    },
    getColumns: function(selector) {
        var result = this.columns;
        if (selector) {
            if (typeof selector === 'string') {
                result = Ext.ComponentQuery.query(selector, result);
            } else if (Ext.isFunction(selector)) {
                return result.filter(selector);
            }
        }
        return result;
    },
    getVisibleColumns: function() {
        var me = this,
            result = me.visibleColumns;
        if (!result) {
            result = me.visibleColumns = me.columns.filter(me.visibleLeafFilter);
        }
        return result;
    },
    getClosestVisibleHeader: function(index) {
        var result = typeof index === 'number' ? this.getVisibleColumns()[index] : index;
        if (result && result.hidden) {
            result = result.next(':visible') || result.prev(':visible');
        }
        return result;
    },
    indexOfLeaf: function(column) {
        return this.getVisibleColumns().indexOf(column);
    },
    factoryItem: function(item) {
        var grid = this.getGrid();
        if (item.isComponent) {
            if (item.isGridColumn) {
                item.setGrid(grid);
            }
        } else {
            item = Ext.apply({
                grid: grid
            }, item);
        }
        return this.callParent([
            item
        ]);
    },
    updateColumns: function(columns) {
        var me = this;
        if (me.isRootHeader) {
            me.columns = [];
            me.visibleColumns = null;
            me.add(columns);
        }
    },
    beginColumnUpdate: function() {
        var me = this;
        if (!me.isRootHeader) {
            return;
        }
        me.hasBulkUpdate = me.hasBulkUpdate || 0;
        me.hasBulkUpdate++;
        if (me.hasBulkUpdate === 1) {
            me.bulkAdd = [];
            me.updateMenuDisabledState = Ext.emptyFn;
        }
    },
    endColumnUpdate: function() {
        var me = this,
            length, i, columns, item;
        if (!me.isRootHeader || !me.hasBulkUpdate) {
            return;
        }
        me.hasBulkUpdate--;
        if (me.hasBulkUpdate === 0) {
            columns = me.bulkAdd;
            length = columns && columns.length;
            if (length) {
                me.visibleColumns = null;
                me.columns = me.getLeaves();
                for (i = 0; i < length; i++) {
                    item = columns[i];
                    item.columnIndex = me.columns.indexOf(item.column);
                }
                Ext.Array.sort(columns, me.sortByColumnIndex);
                for (i = 0; i < length; i++) {
                    item = columns[i];
                    me.fireEvent('columnadd', me, item.column, item.columnIndex);
                }
            }
            me.getGrid().refreshInnerWidth();
            me.bulkAdd = null;
            delete me.updateMenuDisabledState;
            me.updateMenuDisabledState();
            if (this.isRootHeader) {
                this.onColumnComputedWidthChange();
            }
        }
    },
    sortByColumnIndex: function(a, b) {
        return a.columnIndex - b.columnIndex;
    },
    add: function(items) {
        var ret,
            rootHeaders = this.getRootHeaderCt();
        if (rootHeaders) {
            rootHeaders.beginColumnUpdate();
        }
        ret = this.callParent([
            items
        ]);
        if (rootHeaders) {
            rootHeaders.endColumnUpdate();
        }
        return ret;
    },
    insert: function(index, item) {
        var ret,
            rootHeaders = this.getRootHeaderCt();
        if (rootHeaders) {
            rootHeaders.beginColumnUpdate();
        }
        ret = this.callParent([
            index,
            item
        ]);
        if (rootHeaders) {
            rootHeaders.endColumnUpdate();
        }
        return ret;
    },
    remove: function(which, destroy) {
        var ret,
            rootHeaders = this.getRootHeaderCt();
        if (rootHeaders) {
            rootHeaders.beginColumnUpdate();
        }
        ret = this.callParent([
            which,
            destroy
        ]);
        if (rootHeaders) {
            rootHeaders.endColumnUpdate();
        }
        return ret;
    },
    onColumnAdd: function(container, column) {
        var me = this,
            grid = me.getGrid(),
            groupColumns, ln, i, ui;
        if (column.isHeaderGroup) {
            groupColumns = column.getItems().items;
            for (i = 0 , ln = groupColumns.length; i < ln; i++) {
                me.onColumnAdd(column, groupColumns[i]);
            }
        } else {
            ui = column.getUi();
            if (ui == null) {
                column.setUi(me.getDefaultColumnUI());
            }
            column.setGrid(grid);
            me.bulkAdd.push({
                column: column
            });
        }
        me.updateMenuDisabledState();
    },
    onColumnMove: function(parent, column, toIdx, fromIdx) {
        var me = this,
            columns = me.columns,
            group = null,
            cols;
        me.visibleColumns = null;
        if (column.isHeaderGroup) {
            cols = column.getItems().items;
            group = column;
        } else {
            cols = [
                column
            ];
        }
        fromIdx = columns.indexOf(cols[0]);
        me.columns = me.getLeaves();
        me.fireEvent('columnmove', me, cols, group, fromIdx);
    },
    onColumnRemove: function(parent, column) {
        var me = this,
            columns, i, ln;
        me.visibleColumns = null;
        if (column.isHeaderGroup) {
            if (!column.destroying) {
                columns = column.getItems().items;
                ln = columns.length;
                for (i = 0; i < ln; i++) {
                    me.onColumnRemove(column, columns[i]);
                }
            }
        } else {
            Ext.Array.remove(me.columns, column);
            me.fireEvent('columnremove', me, column);
        }
        me.updateMenuDisabledState();
    },
    onHeaderTap: function(column, e) {
        var selModel = this.getGrid().getSelectable(),
            ret = this.fireEvent('columntap', this, column, e);
        if (ret !== false) {
            if (selModel.onHeaderTap) {
                selModel.onHeaderTap(this, column, e);
            }
        }
    },
    onGroupTriggerTap: function(column) {
        column.showMenu();
    },
    onHeaderTriggerTap: function(column) {
        column.showMenu();
    },
    onColumnShow: function(column) {
        var me = this;
        me.visibleColumns = null;
        me.fireEvent('columnshow', me, column);
        me.updateMenuDisabledState();
        if (this.isRootHeader) {
            this.onColumnComputedWidthChange();
        }
    },
    onColumnHide: function(column) {
        var me = this;
        me.visibleColumns = null;
        me.fireEvent('columnhide', me, column);
        me.updateMenuDisabledState();
        if (this.isRootHeader) {
            this.onColumnComputedWidthChange();
        }
    },
    onGroupShow: function(group) {
        var columns = group.getInnerItems(),
            ln = columns.length,
            i, column;
        this.visibleColumns = null;
        for (i = 0; i < ln; i++) {
            column = columns[i];
            if (!column.isHidden()) {
                this.fireEvent('columnshow', this, column);
            }
        }
        this.updateMenuDisabledState();
    },
    onGroupHide: function(group) {
        var columns = group.getInnerItems(),
            ln = columns.length,
            i, column;
        this.visibleColumns = null;
        for (i = 0; i < ln; i++) {
            column = columns[i];
            this.fireEvent('columnhide', this, column);
        }
        this.updateMenuDisabledState();
    },
    onGroupTap: function(column, e) {
        return this.fireEvent('headergrouptap', this, column, e);
    },
    onColumnResize: function(column, width, oldWidth) {
        this.fireEvent('columnresize', this, column, width, oldWidth);
    },
    onColumnSort: function(column, direction, newDirection) {
        if (direction !== null) {
            this.fireEvent('columnsort', this, column, direction, newDirection);
        }
    },
    scrollTo: function(x) {
        this.getScrollable().scrollTo(x);
    },
    updateGrid: function(grid) {
        if (this.isRootHeader) {
            this.parent = grid;
        }
    },
    doDestroy: function() {
        this.setGrid(null);
        this.callParent();
    },
    afterRender: function() {
        this.callParent();
        if (this.isRootHeader) {
            this.onColumnComputedWidthChange();
        }
    },
    privates: {
        columnsResizing: null,
        updateVerticalOverflow: function() {
            this.syncReserveSpace();
        },
        updateReserveScrollbar: function() {
            this.syncReserveSpace();
        },
        updateMenuDisabledState: function() {
            if (this.rendered) {
                var me = this.isRootHeader ? this : this.getRootHeaderCt(),
                    columns = [],
                    menuOfferingColumns = [],
                    len, i, column, columnIsHideable, checkItem;
                me.visitPreOrder('gridcolumn:not([hidden])', function(col) {
                    columns.push(col);
                    if (!col.isHidden(true) && !col.getMenuDisabled() && col.getConfig('menu', true)) {
                        menuOfferingColumns.push(col);
                    }
                });
                len = columns.length;
                for (i = 0; i < len; ++i) {
                    column = columns[i];
                    checkItem = column.getHideShowMenuItem(false);
                    if (checkItem) {
                        columnIsHideable = menuOfferingColumns.length > 1 || menuOfferingColumns[0] !== column;
                        checkItem['set' + (checkItem.getMenu() ? 'CheckChange' : '') + 'Disabled'](!columnIsHideable);
                    }
                }
            }
        },
        getLeaves: function() {
            return this.query('[isLeafHeader]');
        },
        onColumnComputedWidthChange: function(column, computedWidth) {
            var me = this,
                totalColumnWidth = 0,
                changedColumns = me.columnsResizing,
                columns, len, i, c, width;
            if (me.destroying) {
                return;
            }
            if (changedColumns) {
                changedColumns.push(column);
                return;
            }
            me.columnsResizing = changedColumns = [];
            columns = me.getColumns();
            len = columns.length;
            for (i = 0; i < len; i++) {
                c = columns[i];
                if (c === column) {
                    changedColumns.push(c);
                    width = computedWidth;
                } else {
                    width = c.isHidden(true) ? 0 : c.measureWidth();
                }
                totalColumnWidth += width;
            }
            totalColumnWidth = Math.floor(totalColumnWidth);
            me.getGrid().onColumnComputedWidthChange(changedColumns, totalColumnWidth);
            me.columnsResizing = null;
        },
        setRendered: function(rendered) {
            this.visibleColumns = null;
            this.callParent([
                rendered
            ]);
        },
        setSortState: function() {
            var grid = this.getGrid(),
                store = grid.getStore(),
                columns = grid.getColumns(),
                isGrouped = store.isGrouped(),
                len = columns && columns.length,
                sorters = store.getSorters(),
                grouper = store.getGrouper(),
                i, header, isGroupedHeader, sorter;
            for (i = 0; i < len; i++) {
                header = columns[i];
                sorter = header.sorter;
                isGroupedHeader = store.getGroupField() === header.getDataIndex();
                if (sorter) {
                    if (isGrouped && !isGroupedHeader) {
                        sorter = null;
                    } else if (isGrouped && isGroupedHeader) {
                        sorter = grouper;
                    } else if (!(sorters.contains(sorter) || grouper === sorter)) {
                        sorter = null;
                    }
                }
                header.setSortState(sorter);
            }
        },
        syncReserveSpace: function() {
            var reserve = this.getVerticalOverflow() || this.getReserveScrollbar(),
                scrollbarWidth = 0,
                grid, scroller;
            if (reserve) {
                grid = this.getGrid();
                if (grid) {
                    scroller = grid.getScrollable();
                    if (scroller) {
                        scrollbarWidth = scroller.getScrollbarSize().width + 'px';
                    }
                }
            }
            this.el.setStyle('padding-right', scrollbarWidth);
        },
        visibleLeafFilter: function(c) {
            return c.isLeafHeader && !c.isHidden();
        }
    }
});

Ext.define('Ext.grid.column.Column', {
    extend: Ext.grid.HeaderContainer,
    alternateClassName: 'Ext.grid.column.Template',
    xtype: [
        'gridcolumn',
        'column',
        'templatecolumn'
    ],
    isGridColumn: true,
    mixins: [
        Ext.mixin.StyleCacher,
        Ext.mixin.Toolable
    ],
    config: {
        align: undefined,
        cell: {
            xtype: 'gridcell'
        },
        dataIndex: null,
        locked: null,
        defaultWidth: 100,
        depends: null,
        emptyText: {
            cached: true,
            $value: '\xa0'
        },
        text: '\xa0',
        sortable: true,
        groupable: true,
        resizable: true,
        hideable: true,
        renderer: null,
        formatter: null,
        scope: null,
        editable: null,
        editor: null,
        defaultEditor: {
            lazy: true,
            $value: {}
        },
        editorDefaults: {
            cached: true,
            $value: {
                "default": {
                    xtype: 'textfield',
                    autoComplete: false,
                    textAlign: undefined
                },
                'bool,boolean': {
                    xtype: 'checkboxfield',
                    bodyAign: undefined
                },
                date: {
                    xtype: 'datefield',
                    textAlign: undefined
                },
                'float,number': {
                    xtype: 'numberfield',
                    textAlign: undefined
                },
                'int,integer': {
                    xtype: 'numberfield',
                    decimals: 0,
                    textAlign: undefined
                }
            }
        },
        ignore: false,
        ignoreExport: false,
        exportStyle: null,
        exportRenderer: false,
        summary: null,
        summaryCell: null,
        summaryDataIndex: null,
        summaryFormatter: null,
        summaryRenderer: null,
        summaryType: null,
        exportSummaryRenderer: false,
        minWidth: 40,
        tpl: null,
        computedWidth: null,
        grouper: {
            lazy: true,
            $value: null
        },
        groupHeaderTpl: null,
        sorter: {
            lazy: true,
            $value: true
        },
        scratchCell: {
            lazy: true,
            $value: true
        },
        menu: {
            lazy: true,
            $value: {}
        },
        menuDisabled: null,
        hideShowMenuItem: {
            lazy: true,
            $value: {
                xtype: 'menucheckitem'
            }
        }
    },
    updateLocked: function(v) {
        var me = this,
            grid = me.getGrid(),
            region = grid && grid.region,
            lockedGrid, key, targetRegion;
        if (region) {
            lockedGrid = region.lockedGrid;
            key = lockedGrid.getRegionKey(v);
            targetRegion = lockedGrid.getRegion(key);
            if (targetRegion && targetRegion !== region) {
                lockedGrid.handleChangeRegion(targetRegion, me);
            }
        }
        return v;
    },
    toolDefaults: {
        ui: 'gridcolumn',
        zone: 'tail'
    },
    toolAnchorName: 'titleWrapElement',
    dockTools: false,
    scrollable: false,
    docked: null,
    sortState: null,
    ariaSortStates: {
        ASC: 'ascending',
        DESC: 'descending'
    },
    inheritUi: true,
    classCls: Ext.baseCSSPrefix + 'gridcolumn',
    sortedCls: Ext.baseCSSPrefix + 'sorted',
    secondarySortCls: Ext.baseCSSPrefix + 'secondary-sort',
    auxSortCls: Ext.baseCSSPrefix + 'aux-sort',
    resizableCls: Ext.baseCSSPrefix + 'resizable',
    groupCls: Ext.baseCSSPrefix + 'group',
    leafCls: Ext.baseCSSPrefix + 'leaf',
    menuOpenCls: Ext.baseCSSPrefix + 'menu-open',
    alignCls: {
        left: Ext.baseCSSPrefix + 'align-left',
        center: Ext.baseCSSPrefix + 'align-center',
        right: Ext.baseCSSPrefix + 'align-right'
    },
    constructor: function(config) {
        var me = this,
            isHeaderGroup, menu;
        if (config.columns || me.columns) {
            isHeaderGroup = me.isHeaderGroup = true;
        } else {
            me.isLeafHeader = true;
        }
        me.callParent([
            config
        ]);
        me.addCls(isHeaderGroup ? me.groupCls : me.leafCls);
        menu = me.getConfig('menu', true);
        if (!menu && me.getMenuDisabled() === null) {
            me.setMenuDisabled(true);
        }
    },
    getTemplate: function() {
        var me = this,
            beforeTitleTemplate = me.beforeTitleTemplate,
            afterTitleTemplate = me.afterTitleTemplate,
            titleTpl = [];
        if (beforeTitleTemplate) {
            titleTpl.push.apply(titleTpl, beforeTitleTemplate);
        }
        titleTpl.push({
            reference: 'titleElement',
            className: Ext.baseCSSPrefix + 'title-el',
            children: [
                {
                    reference: 'textElement',
                    className: Ext.baseCSSPrefix + 'text-el',
                    "data-qoverflow": true
                },
                {
                    reference: 'sortIconElement',
                    cls: Ext.baseCSSPrefix + 'sort-icon-el ' + Ext.baseCSSPrefix + 'font-icon'
                }
            ]
        });
        if (afterTitleTemplate) {
            titleTpl.push.apply(titleTpl, afterTitleTemplate);
        }
        return [
            {
                reference: 'headerElement',
                cls: Ext.baseCSSPrefix + 'header-el',
                children: [
                    {
                        reference: 'titleWrapElement',
                        cls: Ext.baseCSSPrefix + 'title-wrap-el',
                        uiCls: 'title-wrap-el',
                        children: titleTpl
                    },
                    {
                        reference: 'resizerElement',
                        cls: Ext.baseCSSPrefix + 'resizer-el ' + Ext.baseCSSPrefix + 'item-no-tap'
                    },
                    {
                        reference: 'triggerElement',
                        cls: Ext.baseCSSPrefix + 'trigger-el ' + Ext.baseCSSPrefix + 'font-icon ' + Ext.baseCSSPrefix + 'item-no-tap'
                    }
                ]
            },
            {
                reference: 'bodyElement',
                cls: Ext.baseCSSPrefix + 'body-el',
                uiCls: 'body-el'
            }
        ];
    },
    initialize: function() {
        var me = this;
        if (me.isLeafHeader && !me.getWidth() && me.getFlex() == null) {
            me.setWidth(me.getDefaultWidth());
        }
        me.callParent();
        me.element.on({
            tap: 'onColumnTap',
            longpress: 'onColumnLongPress',
            scope: this
        });
        me.triggerElement.on({
            tap: 'onTriggerTap',
            scope: this
        });
        me.resizerElement.on({
            tap: 'onResizerTap',
            doubletap: 'onResizerDoubleTap',
            scope: this
        });
        if (me.isHeaderGroup) {
            me.on({
                add: 'doVisibilityCheck',
                remove: 'doVisibilityCheck',
                show: 'onColumnShow',
                hide: 'onColumnHide',
                move: 'onColumnMove',
                delegate: '> column',
                scope: me
            });
            me.on({
                show: 'onShow',
                scope: me
            });
        }
    },
    doDestroy: function() {
        var me = this;
        me.destroyMembers('editor', 'resizeListener', 'menu', 'hideShowMenuItem', 'childColumnsMenu');
        me.setScratchCell(null);
        me.mixins.toolable.doDestroy.call(me);
        me.callParent();
    },
    onAdded: function(parent, instanced) {
        this.visibleIndex = null;
        this.callParent([
            parent,
            instanced
        ]);
    },
    ensureEditor: function() {
        var me = this,
            editable = me.getEditable(),
            editor = editable !== false && me.getEditor(),
            cfg;
        if (!editor && editable) {
            cfg = me.getDefaultEditor();
            editor = Ext.create(cfg);
            me.setEditor(editor);
        }
        return editor;
    },
    getVisibleIndex: function() {
        var visibleIndex = this.visibleIndex,
            rootHeaders;
        if (visibleIndex == null) {
            if (this.isHeaderGroup) {
                visibleIndex = false;
            } else {
                rootHeaders = this.getRootHeaderCt();
                if (rootHeaders) {
                    visibleIndex = rootHeaders.indexOfLeaf(this);
                }
            }
            this.visibleIndex = visibleIndex;
        }
        return visibleIndex;
    },
    _columnScopeRe: /^column\./,
    _gridScopeRe: /^grid\./,
    applyMenu: function(menu) {
        var me = this,
            grid = me.getGrid(),
            columnScopeRe = me._columnScopeRe,
            gridScopeRe = me._gridScopeRe,
            extraItems, gridColumnMenu, i, item, items, s;
        Ext.destroy(me.sortChangeListener);
        if (menu && !menu.isMenu) {
            if (Ext.isArray(menu)) {
                extraItems = menu;
                menu = null;
            } else if (!menu.items) {
                menu = {
                    items: menu
                };
            }
            if (!(gridColumnMenu = grid.getColumnMenu())) {
                menu = menu ? Ext.clone(menu) : {};
            } else {
                gridColumnMenu = Ext.clone(gridColumnMenu);
                menu = menu ? Ext.merge(gridColumnMenu, menu) : gridColumnMenu;
            }
            menu.ownerCmp = me;
            menu = Ext.create(menu);
            me.sortChangeListener = menu.on({
                groupchange: 'onColumnMenuGroupChange',
                scope: me
            });
            items = menu.getItems().items;
            for (i = items && items.length; i-- > 0; ) {
                item = items[i];
                if (columnScopeRe.test(s = item.getHandler() || '')) {
                    item.setHandler(s.substr(7));
                    item.scope = me;
                } else if (gridScopeRe.test(s)) {
                    item.setHandler(s.substr(5));
                    item.scope = grid;
                } else if (item.isMenuCheckItem) {
                    if (columnScopeRe.test(s = item.getCheckHandler() || '')) {
                        item.setCheckHandler(s.substr(7));
                        item.scope = me;
                    } else if (gridScopeRe.test(s)) {
                        item.setCheckHandler(s.substr(5));
                        item.scope = grid;
                    }
                }
            }
            if (extraItems) {
                menu.add(extraItems);
            }
            grid.fireEvent('columnmenucreated', grid, me, menu);
        }
        return menu;
    },
    updateMenu: function(menu, oldMenu) {
        if (oldMenu) {
            oldMenu.destroy();
        }
    },
    beforeShowMenu: function(menu) {
        var me = this,
            store = me.getGrid().getStore(),
            isGrouped = store && !!store.getGrouper(),
            groupByThis = menu.getComponent('groupByThis'),
            showInGroups = menu.getComponent('showInGroups'),
            sortAsc = menu.getComponent('sortAsc'),
            sortDesc = menu.getComponent('sortDesc');
        sortAsc.setDisabled(!store);
        sortDesc.setDisabled(!store);
        if (!store) {
            groupByThis.setHidden(true);
            showInGroups.setHidden(true);
            return;
        }
        menu.suspendEvent('groupchange');
        if (sortAsc) {
            me.syncMenuItemState(sortAsc);
        }
        if (sortDesc) {
            me.syncMenuItemState(sortDesc);
        }
        if (groupByThis) {
            groupByThis.setHidden(!(me.canGroup() && !store.isTreeStore));
        }
        menu.resumeEvent('groupchange');
        if (showInGroups) {
            showInGroups.setHidden(store.isTreeStore);
            showInGroups.setChecked(isGrouped);
            showInGroups.setDisabled(!isGrouped);
        }
    },
    showMenu: function() {
        var me = this,
            menu = !me.getMenuDisabled() && me.getMenu(),
            menuOpenCls = me.menuOpenCls,
            grid;
        if (menu) {
            grid = me.getGrid();
            if (me.beforeShowMenu(menu) !== false && grid.beforeShowColumnMenu(me, menu) !== false) {
                menu.showBy(me.triggerElement);
                me.addCls(menuOpenCls);
                menu.on({
                    single: true,
                    hide: function() {
                        if (!(me.destroyed || me.destroying)) {
                            me.removeCls(menuOpenCls);
                        }
                        if (!(grid.destroyed || grid.destroying)) {
                            grid.onColumnMenuHide(me, menu);
                        }
                    }
                });
            }
        }
    },
    getCells: function() {
        var cells = [],
            rows = this.getGrid().items.items,
            len = rows.length,
            i, row;
        for (i = 0; i < len; ++i) {
            row = rows[i];
            if (row.isGridRow) {
                cells.push(row.getCellByColumn(this));
            }
        }
        return cells;
    },
    getColumnForField: function(fieldName) {
        if (fieldName === this.getDataIndex()) {
            return this;
        }
        return this.callParent([
            fieldName
        ]);
    },
    isHideable: function() {
        var menuOfferingColumns = [];
        this.getRootHeaderCt().visitPreOrder('gridcolumn:not([hidden])', function(col) {
            if (!col.getMenuDisabled() && col.getConfig('menu', true)) {
                menuOfferingColumns.push(col);
            }
        });
        return menuOfferingColumns.length > 1 || menuOfferingColumns[0] !== this;
    },
    applyTpl: function(tpl) {
        return Ext.XTemplate.get(tpl);
    },
    applyAlign: function(align, oldAlign) {
        if (align == null) {
            align = this.isHeaderGroup ? 'center' : 'left';
        }
        return align;
    },
    updateAlign: function(align, oldAlign) {
        var me = this,
            alignCls = me.alignCls;
        if (oldAlign) {
            me.removeCls(alignCls[oldAlign]);
        }
        if (align) {
            if (!alignCls[align]) {
                Ext.raise("Invalid value for align: '" + align + "'");
            }
            me.addCls(alignCls[align]);
        }
        me.syncToolableAlign();
    },
    updateMenuDisabled: function(menuDisabled) {
        if (this.triggerElement) {
            this.triggerElement.setVisible(!menuDisabled);
        }
    },
    onColumnTap: function(e) {
        var me = this,
            grid = me.getGrid(),
            selModel = grid.getSelectable(),
            store = grid.getStore(),
            sorters = store && store.getSorters(true),
            sorter = store && me.pickSorter(),
            sorterIndex = sorter ? sorters.indexOf(sorter) : -1,
            isSorted = sorter && (sorterIndex !== -1 || sorter === store.getGrouper());
        if (Ext.Component.from(e) !== me || e.getTarget('.' + Ext.baseCSSPrefix + 'item-no-tap', me)) {
            return;
        }
        if (store && me.isSortable() && (!selModel || !selModel.getColumns())) {
            if (sorter.isGrouper) {
                sorter.toggle();
                store.group(sorter);
            }
            else if (sorterIndex === 0) {
                me.toggleSortState();
            } else {
                if (isSorted) {
                    store.sort(sorter, 'prepend');
                } else {
                    me.sort('ASC');
                }
            }
        }
        return me.fireEvent('tap', me, e);
    },
    onTriggerTap: function(e) {
        this.fireEvent('triggertap', this, e);
    },
    onResizerTap: function(e) {
        if (e.getPoint().isContainedBy(this.triggerElement.getRegion())) {
            this.fireEvent('triggertap', this, e);
        }
    },
    onResizerDoubleTap: function(e) {
        e.claimGesture();
        Ext.asap(this.autoSize, this);
    },
    onColumnLongPress: function(e) {
        this.fireEvent('longpress', this, e);
    },
    onGroupByThis: function() {
        var me = this,
            grid = me.getGrid(),
            grouper = me.getGrouper(),
            store = grid.getStore(),
            dataIndex;
        if (!grouper) {
            dataIndex = me.getDataIndex();
            if (dataIndex != null) {
                me.setGrouper({
                    property: dataIndex
                });
                grouper = me.getGrouper();
            }
        }
        if (grouper) {
            store.setGrouper(grouper);
        }
    },
    onColumnMenuGroupChange: function(menu, groupName, value) {
        if (groupName === 'sortDir') {
            this.setSortDirection(value);
        }
    },
    getSortDirection: function() {
        var sorter = this.pickSorter();
        return sorter && sorter.getDirection();
    },
    setSortDirection: function(direction) {
        var me = this,
            grid = me.getGrid(),
            store = grid.getStore(),
            sorter = me.pickSorter(),
            sorters = store.getSorters(true),
            isSorted = sorter && (sorters.contains(sorter) || sorter.isGrouper);
        if (direction) {
            if (isSorted) {
                if (sorter.getDirection() !== direction) {
                    sorter.setDirection(direction);
                    if (sorter.isGrouper) {
                        store.group(sorter);
                    } else {
                        sorters.beginUpdate();
                        sorters.endUpdate();
                    }
                }
            } else {
                return me.sort(direction);
            }
        }
        else if (sorter) {
            sorters.remove(sorter);
        }
        if (!store.getRemoteSort()) {
            me.getRootHeaderCt().setSortState();
        }
    },
    syncMenuItemState: function(menuItem) {
        if (menuItem) {
            var me = this,
                sortable = me.isSortable(),
                store = me.getGrid().getStore(),
                sorter = me.pickSorter(),
                isSorted = sorter && (store.getSorters().contains(sorter) || sorter.isGrouper);
            menuItem.setDisabled(!sortable);
            menuItem.setChecked(sortable && isSorted && sorter.getDirection() === menuItem.getValue());
        }
    },
    onToggleShowInGroups: function() {
        var grid = this.getGrid(),
            store = grid.getStore();
        store.setGrouper(null);
    },
    updateResizable: function() {
        var me = this,
            widthed = me.getWidth() != null,
            flexed = me.getFlex() != null;
        me.toggleCls(me.resizableCls, !!(me.getResizable() && (widthed || flexed || me.isLeafHeader)));
    },
    updateText: function(text) {
        this.setHtml(text || '\xa0');
    },
    onResize: function() {
        if (!this.isHidden(true)) {
            this.updateResizable(this.getResizable());
            this.measureWidth();
            this.syncRowHeight();
        }
    },
    syncRowHeight: function() {
        var grids = this.getGrid().allPartners || [
                this.getGrid()
            ],
            i,
            len = grids.length,
            grid;
        for (i = 0; i < len; ++i) {
            grid = grids[i];
            grid.syncRowsToHeight(true);
        }
    },
    getComputedWidth: function() {
        return this.isVisible(true) ? this._computedWidth : 0;
    },
    updateColumns: function(columns) {
        this.getItems();
        this.add(columns);
    },
    measureWidth: function() {
        var width = this.el.measure('w');
        this.setComputedWidth(width);
        return width;
    },
    updateComputedWidth: function(value, oldValue) {
        var me = this,
            rootHeaderCt = !me.isConfiguring && me.getRootHeaderCt();
        if (rootHeaderCt) {
            rootHeaderCt.onColumnComputedWidthChange(me, value);
            me.fireEvent('columnresize', me, value, oldValue);
        }
    },
    updateDataIndex: function(dataIndex) {
        var sorter;
        if (!this.isConfiguring) {
            sorter = this.pickSorter();
            if (sorter) {
                this.setSorter(null);
            }
        }
    },
    applyGroupHeaderTpl: function(tpl) {
        return Ext.XTemplate.get(tpl);
    },
    updateGroupHeaderTpl: function(tpl) {
        var grouper = this.grouper;
        if (grouper) {
            grouper.headerTpl = tpl;
        }
    },
    isSortable: function() {
        var me = this;
        return me.isLeafHeader && me.getSortable() && (me.pickSorter() || me.getDataIndex()) && me.getRootHeaderCt().getSortable() && me.getGrid().sortableColumns !== false;
    },
    applyEditor: function(value) {
        if (value && !value.isInstance) {
            if (typeof (value) === 'string') {
                value = {
                    xtype: value
                };
            }
            if (!value.xtype) {
                value = Ext.apply({
                    xtype: value.field ? 'celleditor' : 'textfield'
                }, value);
            }
            return Ext.create(value);
        }
        return value;
    },
    applyEditorDefaults: function(defaults) {
        var ret = {},
            i, key, keys;
        if (defaults) {
            for (key in defaults) {
                keys = key.split(',');
                for (i = 0; i < keys.length; ++i) {
                    ret[keys[i]] = defaults[key];
                }
            }
        }
        return ret;
    },
    applyDefaultEditor: function(editor) {
        var me = this,
            dataIndex = me.getDataIndex(),
            bodyAlign = 'bodyAlign',
            textAlign = 'textAlign',
            defaults, model, field, undef;
        if (dataIndex) {
            model = me.getGrid().store.getModel();
            field = model.getField(dataIndex);
            if (!editor.isInstance) {
                editor = Ext.clone(editor);
                if (!editor.xtype) {
                    defaults = me.getEditorDefaults();
                    defaults = Ext.clone((field && defaults[field.type]) || defaults.default);
                    if (textAlign in defaults && defaults[textAlign] === undef) {
                        defaults[textAlign] = me.getAlign();
                    } else if (bodyAlign in defaults && defaults[bodyAlign] === undef) {
                        defaults[bodyAlign] = me.getAlign();
                    }
                    Ext.applyIf(editor, defaults);
                }
            }
            editor._validationField = field;
        }
        return editor;
    },
    updateEditor: function(editor, oldEditor) {
        if (oldEditor && (!editor || (editor.isCellEditor && editor.getField() !== oldEditor))) {
            oldEditor.destroy();
        }
        if (editor) {
            editor.$column = this;
        }
    },
    applyFormatter: function(format) {
        var me = this,
            fmt = format,
            parser;
        if (fmt) {
            parser = Ext.app.bind.Parser.fly(fmt);
            fmt = parser.compileFormat();
            parser.release();
            return function(v) {
                return fmt(v, me.getScope() || me.resolveListenerScope());
            };
        }
        return fmt;
    },
    applySummaryFormatter: function(format) {
        var me = this,
            fmt = format,
            parser;
        if (fmt) {
            parser = Ext.app.bind.Parser.fly(fmt);
            fmt = parser.compileFormat();
            parser.release();
            return function(v) {
                return fmt(v, me.getScope() || me.resolveListenerScope());
            };
        }
        return fmt;
    },
    applyGrouper: function(grouper) {
        var me = this,
            cfg = grouper;
        if (cfg && !cfg.isInstance) {
            if (typeof cfg === 'string') {
                cfg = {
                    groupFn: cfg
                };
            } else {
                cfg = Ext.apply({}, cfg);
            }
            if (typeof cfg.groupFn === 'string') {
                cfg = me.scopeReplacer(cfg, grouper, 'groupFn', 'setGroupFn');
            }
            if (typeof cfg.sorterFn === 'string') {
                cfg = me.scopeReplacer(cfg, grouper, 'sorterFn', 'setSorterFn');
            }
            grouper = new Ext.util.Grouper(cfg);
        }
        if (grouper) {
            grouper.owner = me.getGrid();
            grouper.headerTpl = me.getGroupHeaderTpl();
        }
        return grouper;
    },
    updateGrouper: function(grouper, oldGrouper) {
        var store = this.getGrid().getStore();
        if (store && oldGrouper) {
            if (oldGrouper === store.getGrouper()) {
                store.setGrouper(grouper);
            }
        }
        this.grouper = grouper;
    },
    applySorter: function(sorter) {
        var me = this,
            cfg = sorter,
            sortProperty;
        if (cfg && !cfg.isInstance) {
            if (cfg === true) {
                sortProperty = me.getSortParam();
                if (!sortProperty) {
                    return null;
                }
                cfg = {
                    property: sortProperty,
                    direction: 'ASC'
                };
            } else {
                if (typeof cfg === 'string') {
                    cfg = {
                        sorterFn: cfg
                    };
                }
                if (typeof cfg.sorterFn === 'string') {
                    cfg = me.scopeReplacer(cfg, sorter, 'sorterFn', 'setSorterFn');
                }
            }
            sorter = new Ext.util.Sorter(cfg);
        }
        if (sorter) {
            sorter.owner = me.getGrid();
        }
        return sorter;
    },
    updateSorter: function(sorter, oldSorter) {
        var store = this.getGrid().getStore(),
            sorters = store ? store.getSorters() : null,
            at;
        if (sorters) {
            if (oldSorter && (at = sorters.indexOf(oldSorter)) > -1) {
                if (sorter) {
                    sorters.splice(at, 1, sorter);
                } else {
                    sorters.remove(oldSorter);
                }
            }
        }
        this.sorter = sorter;
    },
    pickSorter: function() {
        var me = this,
            store = me.getGrid().getStore(),
            result;
        if (store.isGrouped() && store.getGroupField() === me.getDataIndex()) {
            result = me.getGrouper() || store.getGrouper();
            me.sortState = result.getDirection();
        } else {
            result = me.getSorter();
        }
        return result;
    },
    applyHideShowMenuItem: function(config, existing) {
        return Ext.updateWidget(existing, config, this, 'createHideShowMenuItem');
    },
    createHideShowMenuItem: function(defaults) {
        return Ext.apply({
            text: this.getText(),
            checked: !this.getHidden(),
            column: this
        }, defaults);
    },
    getHideShowMenuItem: function(deep) {
        var me = this,
            result = me.callParent(),
            items = me.items.items,
            len = items.length,
            childItems = [],
            childColumnsMenu = me.childColumnsMenu,
            i;
        if (me.isHeaderGroup && deep !== false) {
            if (!childColumnsMenu) {
                result.setMenu({});
                me.childColumnsMenu = childColumnsMenu = result.getMenu();
            }
            if (!childColumnsMenu.items.length || me.rebuildChildColumnsMenu) {
                for (i = 0; i < len; i++) {
                    if (items[i].getHideable()) {
                        childItems.push(items[i].getHideShowMenuItem());
                    }
                }
                childColumnsMenu.removeAll(false);
                childColumnsMenu.add(childItems);
            }
        }
        result['set' + (result.getMenu() ? 'CheckChange' : '') + 'Disabled'](!me.isHideable());
        return result;
    },
    getInnerHtmlElement: function() {
        return this.textElement;
    },
    getSortParam: function() {
        return this.getDataIndex();
    },
    applyCell: function(cell, oldCell) {
        if (oldCell) {
            cell = Ext.apply(oldCell, cell);
        }
        return cell;
    },
    createCell: function(row) {
        var me = this,
            cfg = {
                row: row,
                ownerCmp: row || me,
                column: me,
                width: me.rendered ? (me.getComputedWidth() || me.measureWidth()) : me.getWidth(),
                minWidth: me.getMinWidth()
            },
            align = me.getAlign(),
            cellCfg;
        if (row && row.isSummaryRow) {
            cellCfg = me.getSummaryCell();
            if (!cellCfg) {
                cellCfg = me.getCell();
                if (cellCfg.xtype === 'widgetcell') {
                    cellCfg = Ext.apply({}, cellCfg);
                    cellCfg.xtype = 'gridcell';
                    delete cellCfg.widget;
                }
            }
        } else {
            cellCfg = me.getCell();
        }
        if (align) {
            cfg.align = align;
        }
        if (row) {
            cfg.hidden = me.isHidden(row.getGrid().getHeaderContainer());
            cfg.record = row.getRecord();
            if (!(cfg.ui = row.getDefaultCellUI())) {
                delete cfg.ui;
            }
        }
        if (typeof cellCfg === 'string') {
            cfg.xtype = cellCfg;
        } else {
            Ext.apply(cfg, cellCfg);
        }
        return cfg;
    },
    applyScratchCell: function(cell, oldCell) {
        var me = this;
        if (cell) {
            cell = Ext.create(me.createCell());
            if (!cell.printValue) {
                Ext.destroy(cell);
                cell = me.createCell();
                cell.xtype = 'gridcell';
                cell = Ext.create(cell);
            }
            cell.addCls(me.floatingCls);
        }
        if (oldCell) {
            oldCell.destroy();
        }
        return cell;
    },
    printValue: function(value) {
        var me = this,
            row = me.getGrid().dataItems[0],
            cell;
        if (row && row.isGridRow) {
            cell = row.getCellByColumn(me);
        }
        cell = (cell && cell.printValue) ? cell : me.getScratchCell();
        return cell.printValue(value);
    },
    autoSize: function() {
        var me = this,
            max = Math.max,
            textMatrics = new Ext.util.TextMetrics(),
            widthAdjust = 0,
            maxWidth = 0,
            innerCells = me.getCells(),
            grid = me.getGrid(),
            columnIndex, textWidth, rec, store, len, i, records, idx, paddedWidth, cellElement;
        if (!me.getResizable()) {
            return;
        }
        store = grid.getStore();
        columnIndex = me.getDataIndex();
        if (store && columnIndex) {
            if (store.isVirtualStore) {
                records = store.pageMap.pages;
            } else {
                records = store.getData() && store.getData().items;
            }
            if (columnIndex && Ext.isArray(records)) {
                len = records.length;
                for (i = 0; i < len; i++) {
                    textWidth = textMatrics.getWidth(records[i].get(columnIndex));
                    maxWidth = max(maxWidth, textWidth);
                }
            } else if (Ext.isObject(records)) {
                for (idx in records) {
                    rec = records[idx].records;
                    len = rec && rec.length;
                    for (i = 0; i < len; i++) {
                        textWidth = textMatrics.getWidth(rec[i].get(columnIndex));
                        maxWidth = max(maxWidth, textWidth);
                    }
                }
            }
        }
        paddedWidth = me.textElement.dom.offsetWidth + me.titleElement.getPadding('lr');
        maxWidth = max(maxWidth, paddedWidth);
        if (innerCells.length) {
            len = innerCells.length;
            cellElement = innerCells[0].element;
            for (i = 0; i < len; i++) {
                maxWidth = max(maxWidth, innerCells[i].element.getTextWidth());
            }
            if (Ext.supports.ScrollWidthInlinePaddingBug) {
                widthAdjust += cellElement.getPadding('r');
            }
            if (grid.getColumnLines()) {
                widthAdjust += cellElement.getBorderWidth('lr');
            }
            maxWidth += widthAdjust;
        }
        maxWidth = max(maxWidth + 1, me.getMinWidth());
        me.setWidth(maxWidth);
        textMatrics.destroy();
    },
    privates: {
        directionSequence: {
            "null": "ASC",
            "ASC": "DESC",
            "DESC": null
        },
        applySummary: function(summary) {
            if (summary) {
                summary = Ext.Factory.dataSummary(summary);
            }
            return summary;
        },
        beginRefresh: function(context) {
            var me = this,
                grid = me.getGrid();
            context = context || {};
            context.column = me;
            context.grid = grid;
            context.store = grid.store;
            return context;
        },
        canGroup: function() {
            return this.getGroupable() && (this.getDataIndex() || this.getGrouper());
        },
        sort: function(direction, mode) {
            var me = this,
                sorter = me.pickSorter(),
                grid = me.getGrid(),
                store = grid.getStore(),
                sorters = store.getSorters();
            if (!me.isSortable()) {
                return;
            }
            if (sorter.isGrouper) {
                if (sorter.getDirection() !== direction) {
                    sorter.toggle();
                    store.group(sorter);
                }
            }
            else if (direction) {
                if (sorter) {
                    if (sorters.indexOf(sorter) !== 0) {
                        sorter.setDirection(direction);
                    }
                } else {
                    me.setSorter({
                        property: me.getSortParam(),
                        direction: 'ASC'
                    });
                    sorter = me.getSorter();
                }
                store.sort(sorter, mode || grid.getMultiColumnSort() ? 'multi' : 'replace');
            } else {
                if (sorter) {
                    sorters.remove(sorter);
                    if (!store.getRemoteSort()) {
                        me.getRootHeaderCt().setSortState();
                    }
                }
            }
        },
        toggleSortState: function() {
            this.sort(this.directionSequence[this.sortState]);
        },
        setSortState: function(sorter) {
            var me = this,
                store = me.getGrid().getStore(),
                grouper = store.isGrouped() && store.getGrouper(),
                oldDirection = me.sortState,
                direction = null,
                sortedCls = me.sortedCls,
                secondarySortCls = me.secondarySortCls,
                auxSortCls = me.auxSortCls,
                ascCls = sortedCls + '-asc',
                descCls = sortedCls + '-desc',
                ariaDom = me.ariaEl.dom,
                sortPrioClass = '',
                changed, index,
                remove = [
                    secondarySortCls,
                    auxSortCls
                ],
                add;
            if (sorter) {
                if (typeof sorter === 'string') {
                    direction = sorter;
                } else {
                    if (!sorter.isSorter) {
                        Ext.raise('Must pass a sorter instance into HeaderContainer#saveState');
                    }
                    if (sorter === grouper) {
                        index = 0;
                    } else {
                        index = store.getSorters().indexOf(sorter);
                    }
                    if (index === -1) {
                        Ext.raise("Sorter passed to HeaderContainer#saveState not in grid's store");
                    }
                    direction = sorter.getDirection();
                    sortPrioClass = index === 1 ? secondarySortCls : index > 1 ? auxSortCls : '';
                }
            }
            changed = direction !== oldDirection;
            me.sortState = direction;
            switch (direction) {
                case 'DESC':
                    add = [
                        sortedCls,
                        descCls,
                        sortPrioClass
                    ];
                    remove.push(ascCls);
                    break;
                case 'ASC':
                    add = [
                        sortedCls,
                        ascCls,
                        sortPrioClass
                    ];
                    remove.push(descCls);
                    break;
                default:
                    remove.push(sortedCls, ascCls, descCls);
                    break;
            }
            me.replaceCls(remove, add);
            if (ariaDom) {
                if (direction) {
                    ariaDom.setAttribute('aria-sort', me.ariaSortStates[direction]);
                } else {
                    ariaDom.removeAttribute('aria-sort');
                }
            }
            if (changed) {
                me.fireEvent('sort', me, direction, oldDirection);
            }
        },
        getVisibleCount: function() {
            var columns = this.getInnerItems(),
                len = columns.length,
                count = 0,
                i;
            for (i = 0; i < len; ++i) {
                if (columns[i].isHeaderGroup) {
                    count += columns[i].getVisibleCount();
                } else {
                    count += columns[i].isHidden() ? 0 : 1;
                }
            }
            return count;
        },
        onShow: function() {
            var toShow;
            if (!this.getVisibleCount()) {
                toShow = this.getComponent(0);
                if (toShow) {
                    toShow.show();
                }
            }
        },
        doVisibilityCheck: function() {
            var me = this,
                columns = me.getInnerItems(),
                ln = columns.length,
                i, column;
            for (i = 0; i < ln; i++) {
                column = columns[i];
                if (!column.isHidden()) {
                    if (me.isHidden()) {
                        if (me.initialized) {
                            me.show();
                        } else {
                            me.setHidden(false);
                        }
                    }
                    return;
                }
            }
            me.hide();
            me.rebuildChildColumnsMenu = true;
            me.updateMenuDisabledState();
        },
        onColumnShow: function() {
            var me = this,
                hideShowItem;
            if (me.getVisibleCount() > 0) {
                me.show();
                hideShowItem = me.getHideShowMenuItem(false);
                hideShowItem.setChecked(true);
                hideShowItem.setCheckChangeDisabled(false);
            }
            me.rebuildChildColumnsMenu = true;
            me.updateMenuDisabledState();
        },
        onColumnHide: function(column) {
            var me = this,
                hideShowItem;
            if (me.getVisibleCount() === 0) {
                me.hide();
                hideShowItem = me.getHideShowMenuItem(false);
                hideShowItem.setChecked(false);
                hideShowItem.setCheckChangeDisabled(true);
            }
            me.rebuildChildColumnsMenu = true;
            me.updateMenuDisabledState();
        },
        onColumnMove: function(column) {
            this.rebuildChildColumnsMenu = true;
        },
        scopeReplacer: function(config, original, prop, setter) {
            var me = this,
                name = config[prop];
            if (typeof name === 'string') {
                prop = prop || 'sorterFn';
                setter = setter || 'setSorterFn';
                if (original === config) {
                    config = Ext.apply({}, config);
                }
                config[prop] = function() {
                    var scope = me.resolveListenerScope(),
                        fn = scope && scope[name],
                        ret = 0;
                    if (fn) {
                        this[setter](fn.bind(scope));
                        ret = fn.apply(scope, arguments);
                    } else if (!scope) {
                        Ext.raise('Cannot resolve scope for column ' + me.id);
                    } else {
                        Ext.raise('No such method "' + name + '" on ' + scope.$className);
                    }
                    return ret;
                };
            }
            return config;
        }
    }
});

Ext.define('Ext.grid.filters.Column', {
    override: 'Ext.grid.column.Column',
    config: {
        filter: null
    },
    createFilter: function(config) {
        var me = this,
            filter = me.getFilter(),
            cloned, field, model;
        if (filter !== false) {
            if (!filter || filter === true) {
                cloned = true;
                filter = {};
            } else if (typeof filter === 'string') {
                cloned = true;
                filter = {
                    type: filter
                };
            }
            if (!filter.type) {
                if (!cloned) {
                    cloned = true;
                    filter = Ext.clone(filter);
                }
                if (!(filter.type = me.defaultFilterType || me.columnFilterTypes[me.xtype])) {
                    model = me.getGrid().getStore();
                    model = model && model.getModel();
                    field = me.getDataIndex();
                    if (field && model) {
                        field = model.getField(field);
                        filter.type = me.fieldFilterTypes[field && field.type];
                    }
                }
                if (!filter.type) {
                    filter = false;
                }
            }
            if (config && filter) {
                if (!cloned) {
                    filter = Ext.clone(filter);
                }
                filter = Ext.apply(filter, config);
            }
        }
        return filter;
    },
    privates: {
        columnFilterTypes: {
            booleancolumn: 'boolean',
            datecolumn: 'date',
            numbercolumn: 'number'
        },
        fieldFilterTypes: {
            auto: 'string',
            bool: 'boolean',
            date: 'date',
            'float': 'number',
            number: 'number',
            'int': 'number',
            integer: 'number',
            string: 'string'
        }
    }
}, function() {
    Ext.Factory.define('gridFilters', {
        defaultType: 'string'
    });
});

Ext.define('Ext.grid.cell.Date', {
    extend: Ext.grid.cell.Text,
    xtype: 'datecell',
    isDateCell: true,
    config: {
        format: ''
    },
    updateColumn: function(column, oldColumn) {
        var format;
        this.callParent([
            column,
            oldColumn
        ]);
        if (column && column.isDateColumn) {
            format = column.getFormat();
            if (format !== null) {
                this.setFormat(format);
            }
        }
    },
    applyFormat: function(format) {
        return format || Ext.Date.defaultFormat;
    },
    updateFormat: function(format) {
        if (!this.isConfiguring) {
            this.writeValue();
        }
    },
    formatValue: function(value) {
        return value ? Ext.Date.format(value, this.getFormat()) : '';
    }
});

Ext.define('Ext.grid.column.Date', {
    extend: Ext.grid.column.Column,
    xtype: 'datecolumn',
    isDateColumn: true,
    config: {
        format: null,
        defaultEditor: {
            xtype: 'datepickerfield'
        },
        cell: {
            xtype: 'datecell'
        }
    }
});

Ext.define('Ext.grid.menu.Shared', {
    extend: Ext.menu.Item,
    config: {
        grid: null
    },
    doDestroy: function() {
        this.setGrid(null);
        this.callParent();
    },
    updateGrid: function(grid, oldGrid) {
        var me = this;
        if (oldGrid) {
            oldGrid.removeSharedMenuItem(me);
        }
        me.grid = grid;
        if (grid) {
            grid.addSharedMenuItem(me);
        }
    },
    onBeforeShowColumnMenu: function(menu) {
        menu.add(this);
    },
    onColumnMenuHide: function(menu) {
        if (!this.destroyed) {
            menu.remove(this, false);
        }
    }
});

Ext.define('Ext.grid.menu.Columns', {
    extend: Ext.grid.menu.Shared,
    xtype: 'gridcolumnsmenu',
    iconCls: Ext.baseCSSPrefix + 'headermenu-columns-icon',
    text: 'Columns',
    menu: {},
    updateMenu: function(menu, oldMenu) {
        var me = this;
        me.callParent([
            menu,
            oldMenu
        ]);
        Ext.destroy(me.menuListeners);
        if (menu) {
            me.menuListeners = menu.on({
                checkchange: 'onCheckItem',
                delegate: 'menucheckitem',
                scope: me,
                destroyable: true
            });
        }
    },
    onBeforeShowColumnMenu: function(menu, column, grid) {
        var columns = grid.getHeaderContainer().items.items,
            items = [],
            len = columns.length,
            subMenu = this.getMenu(),
            i, col;
        this.callParent([
            menu,
            column,
            grid
        ]);
        for (i = 0; i < len; ++i) {
            col = columns[i];
            if (col.getHideable()) {
                items.push(col.getHideShowMenuItem());
            }
        }
        subMenu.removeAll(false);
        subMenu.add(items);
    },
    onCheckItem: function(menuItem, checked) {
        menuItem.column.setHidden(!checked);
    }
});

Ext.define('Ext.grid.menu.GroupByThis', {
    extend: Ext.menu.Item,
    xtype: 'gridgroupbythismenuitem',
    iconCls: Ext.baseCSSPrefix + 'headermenu-group-by-this',
    text: 'Group by this field'
});

Ext.define('Ext.grid.menu.ShowInGroups', {
    extend: Ext.menu.CheckItem,
    xtype: 'gridshowingroupsmenuitem',
    hideOnClick: true,
    text: 'Show in groups'
});

Ext.define('Ext.grid.menu.SortAsc', {
    extend: Ext.menu.RadioItem,
    xtype: 'gridsortascmenuitem',
    iconCls: Ext.baseCSSPrefix + 'headermenu-sort-asc',
    text: 'Sort Ascending',
    value: 'ASC',
    allowUncheck: true,
    group: 'grid-sorters'
});

Ext.define('Ext.grid.menu.SortDesc', {
    extend: Ext.menu.RadioItem,
    xtype: 'gridsortdescmenuitem',
    iconCls: Ext.baseCSSPrefix + 'headermenu-sort-desc',
    text: 'Sort Descending',
    value: 'DESC',
    allowUncheck: true,
    group: 'grid-sorters'
});

Ext.define('Ext.grid.selection.Cells', {
    extend: Ext.dataview.selection.Selection,
    alias: 'selection.cells',
    isCells: true,
    clone: function() {
        var me = this,
            result = new me.self(me.view);
        if (me.startCell) {
            result.startCell = me.startCell.clone();
            result.endCell = me.endCell.clone();
        }
        return result;
    },
    isSelected: function(recordIndex, columnIndex) {
        var range;
        if (this.startCell) {
            if (recordIndex.isGridLocation) {
                columnIndex = recordIndex.columnIndex;
                recordIndex = recordIndex.recordIndex;
            }
            if (!(Ext.isNumber(recordIndex) && Ext.isNumber(columnIndex))) {
                Ext.raise('Cells#isSelected must be passed either a GridLocation of ' + 'a row and column index');
            }
            range = this.getRowRange();
            if (recordIndex >= range[0] && recordIndex <= range[1]) {
                range = this.getColumnRange();
                return (columnIndex >= range[0] && columnIndex <= range[1]);
            }
        }
        return false;
    },
    eachRow: function(fn, scope) {
        var me = this,
            rowRange = me.getRowRange(),
            store = me.view.store,
            rowIdx;
        for (rowIdx = rowRange[0]; rowIdx <= rowRange[1]; rowIdx++) {
            if (fn.call(scope || me, store.getAt(rowIdx)) === false) {
                return;
            }
        }
    },
    eachColumn: function(fn, scope) {
        var colRange = this.getColumnRange(),
            columns = this.view.getVisibleColumns(),
            i;
        for (i = colRange[0]; i <= colRange[1]; i++) {
            if (fn.call(scope || this, columns[i], i) === false) {
                return;
            }
        }
    },
    eachCell: function(fn, scope) {
        var me = this,
            view = me.view,
            store = view.store,
            rowRange = me.getRowRange(),
            colRange = me.getColumnRange(),
            baseLocation, location, rowIdx, colIdx;
        for (rowIdx = rowRange[0]; rowIdx <= rowRange[1]; rowIdx++) {
            baseLocation = new Ext.grid.Location(view, store.getAt(rowIdx));
            for (colIdx = colRange[0]; colIdx <= colRange[1]; colIdx++) {
                location = baseLocation.cloneForColumn(colIdx);
                if (fn.call(scope || me, location, colIdx, rowIdx) === false) {
                    return;
                }
            }
        }
    },
    getFirstRowIndex: function() {
        return this.startCell ? Math.min(this.startCell.recordIndex, this.endCell.recordIndex) : 0;
    },
    getLastRowIndex: function() {
        return this.startCell ? Math.max(this.startCell.recordIndex, this.endCell.recordIndex) : -1;
    },
    getFirstColumnIndex: function() {
        return this.startCell ? Math.min(this.startCell.columnIndex, this.endCell.columnIndex) : 0;
    },
    getLastColumnIndex: function() {
        return this.startCell ? Math.max(this.startCell.columnIndex, this.endCell.columnIndex) : -1;
    },
    privates: {
        clear: function(suppressEvent) {
            var me = this,
                view = me.view,
                changed;
            if (view.getVisibleColumns().length) {
                me.eachCell(function(location) {
                    view.onCellDeselect(location);
                    changed = true;
                });
            }
            me.startCell = me.endCell = null;
            if (changed && !suppressEvent) {
                this.getSelectionModel().fireSelectionChange();
            }
        },
        setRangeStart: function(startCell) {
            this.startCell = (this.endCell = startCell.clone()).clone();
            this.view.onCellSelect(startCell);
            this.fireCellSelection();
        },
        setRangeEnd: function(endCell) {
            var me = this,
                view = me.view,
                store = view.store,
                renderInfo = view.renderInfo,
                maxColIdx = view.getVisibleColumns().length - 1,
                range, lastRange, rowStart, rowEnd, colStart, colEnd, rowIdx, colIdx, location, baseLocation;
            me.endCell = endCell.clone();
            range = me.getRange();
            lastRange = me.lastRange || range;
            rowStart = Math.max(Math.min(range[0][1], lastRange[0][1]), renderInfo.indexTop);
            rowEnd = Math.min(Math.max(range[1][1], lastRange[1][1]), renderInfo.indexBottom - 1);
            colStart = Math.min(range[0][0], lastRange[0][0]);
            colEnd = Math.min(Math.max(range[1][0], lastRange[1][0]), maxColIdx);
            for (rowIdx = rowStart; rowIdx <= rowEnd; rowIdx++) {
                baseLocation = new Ext.grid.Location(view, store.getAt(rowIdx));
                for (colIdx = colStart; colIdx <= colEnd; colIdx++) {
                    location = baseLocation.cloneForColumn(colIdx);
                    if (rowIdx < range[0][1] || rowIdx > range[1][1] || colIdx < range[0][0] || colIdx > range[1][0]) {
                        view.onCellDeselect(location);
                    } else {
                        view.onCellSelect(location);
                    }
                }
            }
            me.lastRange = range;
            me.fireCellSelection();
        },
        extendRange: function(extensionVector) {
            var me = this,
                view = me.view,
                newEndCell;
            if (extensionVector[extensionVector.type] < 0) {
                newEndCell = new Ext.grid.Location(view, {
                    record: me.getLastRowIndex(),
                    column: me.getLastColumnIndex()
                });
                me.startCell = extensionVector.start.clone();
                me.setRangeEnd(newEndCell);
                view.getNavigationModel().setLocation({
                    column: extensionVector.start.columnIndex,
                    record: extensionVector.start.record
                });
            } else {
                me.startCell = new Ext.grid.Location(view, {
                    record: me.getFirstRowIndex(),
                    column: me.getFirstColumnIndex()
                });
                me.setRangeEnd(extensionVector.end);
                view.getNavigationModel().setLocation({
                    column: extensionVector.end.columnIndex,
                    record: extensionVector.end.record
                });
            }
        },
        reduceRange: function(extensionVector) {
            var me = this,
                view = me.view,
                newEndCell;
            if (extensionVector.type === 'rows') {
                newEndCell = new Ext.grid.Location(view, {
                    record: extensionVector.end.recordIndex - 1,
                    column: extensionVector.end.columnIndex
                });
                me.setRangeEnd(newEndCell);
                view.getNavigationModel().setLocation({
                    column: extensionVector.end.columnIndex,
                    record: me.view.getStore().getAt(extensionVector.end.recordIndex - 1)
                });
            } else {
                newEndCell = new Ext.grid.Location(view, {
                    record: extensionVector.end.recordIndex,
                    column: extensionVector.end.columnIndex
                });
                me.setRangeEnd(newEndCell);
                view.getNavigationModel().setLocation({
                    column: extensionVector.end.columnIndex,
                    record: me.view.getStore().getAt(extensionVector.end.recordIndex)
                });
            }
        },
        getRange: function() {
            return [
                [
                    this.getFirstColumnIndex(),
                    this.getFirstRowIndex()
                ],
                [
                    this.getLastColumnIndex(),
                    this.getLastRowIndex()
                ]
            ];
        },
        getRangeSize: function() {
            return this.getCount();
        },
        getRecords: function() {
            var rowRange = this.getRowRange();
            return this.getSelectionModel().getStore().getRange(rowRange[0], rowRange[1]);
        },
        getCount: function() {
            var range = this.getRange();
            return (range[1][0] - range[0][0] + 1) * (range[1][1] - range[0][1] + 1);
        },
        fireCellSelection: function() {
            var me = this,
                selModel = me.getSelectionModel(),
                view = selModel.getView();
            view.fireEvent('cellselection', view, me.getRange());
        },
        selectAll: function() {
            var me = this,
                view = me.view,
                columns = view.getVisibleColumns();
            me.clear();
            me.setRangeStart(new Ext.grid.Location(view, {
                record: 0,
                column: 0
            }));
            me.setRangeEnd(new Ext.grid.Location(view, {
                record: view.store.last(),
                column: columns[columns.length - 1]
            }));
        },
        isAllSelected: function() {
            var start = this.startCell,
                end = this.endCell;
            if (start) {
                if (!start.columnIndex && !start.recordIndex) {
                    return end.columnIndex === end.view.getVisibleColumns().length - 1 && end.recordIndex === end.view.store.getCount() - 1;
                }
            }
            return false;
        },
        getColumnRange: function() {
            return [
                this.getFirstColumnIndex(),
                this.getLastColumnIndex()
            ];
        },
        getLastSelected: function() {
            return this.view.getStore().getAt(this.endCell.recordIndex);
        },
        getRowRange: function() {
            return [
                this.getFirstRowIndex(),
                this.getLastRowIndex()
            ];
        },
        onSelectionFinish: function() {
            var me = this,
                view = me.view;
            if (me.getCount()) {
                me.getSelectionModel().onSelectionFinish(me, new Ext.grid.Location(view, {
                    record: me.getFirstRowIndex(),
                    column: me.getFirstColumnIndex()
                }), new Ext.grid.Location(view, {
                    record: me.getLastRowIndex(),
                    column: me.getLastColumnIndex()
                }));
            } else {
                me.getSelectionModel().onSelectionFinish(me);
            }
        }
    }
});

Ext.define('Ext.grid.selection.Columns', {
    extend: Ext.dataview.selection.Selection,
    alias: 'selection.columns',
    isColumns: true,
    clone: function() {
        var me = this,
            result = new me.self(me.view),
            columns = me.selectedColumns;
        if (columns) {
            result.selectedColumns = Ext.Array.slice(columns);
        }
        return result;
    },
    eachRow: function(fn, scope) {
        var columns = this.selectedColumns;
        if (columns && columns.length) {
            this.view.getStore().each(fn, scope || this);
        }
    },
    eachColumn: function(fn, scope) {
        var me = this,
            columns = me.selectedColumns,
            len, i;
        if (columns) {
            len = columns.length;
            for (i = 0; i < len; i++) {
                if (fn.call(scope || me, columns[i], i) === false) {
                    return false;
                }
            }
        }
    },
    eachCell: function(fn, scope) {
        var me = this,
            view = me.view,
            columns = me.selectedColumns,
            context = new Ext.grid.Location(view),
            len, i;
        if (columns) {
            len = columns.length;
            view.getStore().each(function(record) {
                context = context.clone({
                    record: record
                });
                for (i = 0; i < len; i++) {
                    context = context.clone({
                        column: columns[i]
                    });
                    if (fn.call(scope || me, context, context.columnIndex, context.recordIndex) === false) {
                        return false;
                    }
                }
            });
        }
    },
    isSelected: function(column) {
        var selectedColumns = this.selectedColumns;
        if (column && column.isGridColumn && selectedColumns && selectedColumns.length) {
            return Ext.Array.contains(selectedColumns, column);
        }
        return false;
    },
    getCount: function() {
        var selectedColumns = this.selectedColumns;
        return selectedColumns ? selectedColumns.length : 0;
    },
    getColumns: function() {
        return this.selectedColumns || [];
    },
    privates: {
        add: function(column, suppressEvent) {
            var me = this,
                selModel;
            if (!column.isGridColumn) {
                Ext.raise('Column selection must be passed a grid Column header object');
            }
            selModel = me.getSelectionModel();
            Ext.Array.include((me.selectedColumns || (me.selectedColumns = [])), column);
            me.refreshColumns(column);
            selModel.updateHeaderState();
            if (!suppressEvent) {
                selModel.fireSelectionChange();
                me.fireColumnSelection();
            }
        },
        clear: function(suppressEvent) {
            var me = this,
                selModel = me.getSelectionModel(),
                prevSelection = me.selectedColumns;
            if (prevSelection && prevSelection.length) {
                me.selectedColumns = [];
                me.refreshColumns.apply(me, prevSelection);
                selModel.updateHeaderState();
                if (!suppressEvent) {
                    selModel.fireSelectionChange();
                    me.fireColumnSelection();
                }
            }
        },
        setRangeStart: function(startColumn) {
            var me = this,
                prevSelection = me.getColumns();
            prevSelection.push(startColumn);
            me.clear(true);
            me.startColumn = startColumn;
            me.add(startColumn);
        },
        setRangeEnd: function(endColumn) {
            var me = this,
                prevSelection = me.getColumns(),
                headerCt = this.view.ownerGrid.getHeaderContainer(),
                columns = headerCt.getVisibleColumns(),
                start = headerCt.indexOfLeaf(me.startColumn),
                end = headerCt.indexOfLeaf(endColumn),
                i;
            if (end < start) {
                i = start;
                start = end;
                end = i;
            }
            me.selectedColumns = [];
            for (i = start; i <= end; i++) {
                me.selectedColumns.push(columns[i]);
                prevSelection.push(columns[i]);
            }
            me.refreshColumns.apply(me, prevSelection);
            me.fireColumnSelection();
        },
        isAllSelected: function() {
            var selectedColumns = this.selectedColumns,
                headerContainer;
            if (!selectedColumns) {
                return false;
            }
            headerContainer = this.view.getHeaderContainer();
            return selectedColumns.length === headerContainer.getVisibleColumns().length;
        },
        refreshColumns: function(column) {
            var me = this,
                view = me.view,
                store = view.store,
                renderInfo = view.renderInfo,
                columns = arguments,
                len = columns.length,
                selected = [],
                location, rowIdx, colIdx;
            if (view.rendered) {
                for (colIdx = 0; colIdx < len; colIdx++) {
                    selected[colIdx] = me.isSelected(columns[colIdx]);
                }
                for (rowIdx = renderInfo.indexTop; rowIdx < renderInfo.indexBottom; rowIdx++) {
                    location = new Ext.grid.Location(view, store.getAt(rowIdx));
                    for (colIdx = 0; colIdx < len; colIdx++) {
                        location = location.cloneForColumn(columns[colIdx]);
                        if (selected[colIdx]) {
                            view.onCellSelect(location);
                        } else {
                            view.onCellDeselect(location);
                        }
                    }
                }
            }
        },
        remove: function(column, suppressEvent) {
            var me = this,
                selModel = me.getSelectionModel();
            if (!column.isGridColumn) {
                Ext.raise('Column selection must be passed a grid Column header object');
            }
            if (me.selectedColumns) {
                Ext.Array.remove(me.selectedColumns, column);
                if (column.getGrid() && column.isVisible()) {
                    me.refreshColumns(column);
                    selModel.updateHeaderState();
                    if (!suppressEvent) {
                        selModel.fireSelectionChange();
                        me.fireColumnSelection();
                    }
                }
            }
        },
        fireColumnSelection: function() {
            var me = this,
                selModel = me.getSelectionModel(),
                view = selModel.getView();
            view.fireEvent('columnselection', view, me.selectedColumns);
        },
        selectAll: function() {
            var me = this;
            me.clear();
            me.selectedColumns = me.getSelectionModel().lastContiguousColumnRange = me.view.getHeaderContainer().getVisibleColumns();
            me.refreshColumns.apply(me, me.selectedColumns);
        },
        extendRange: function(extensionVector) {
            var me = this,
                columns = me.view.getHeaderContainer().getVisibleColumns(),
                i;
            for (i = extensionVector.start.columnIndex; i <= extensionVector.end.columnIndex; i++) {
                me.add(columns[i]);
            }
        },
        reduceRange: function(extensionVector) {
            var me = this,
                columns = me.view.getHeaderContainer().getVisibleColumns(),
                startIdx = extensionVector.start.columnIndex,
                endIdx = extensionVector.end.columnIndex,
                reduceTo = Math.abs(startIdx - endIdx) + 1,
                diff = me.selectedColumns.length - reduceTo,
                i;
            for (i = diff; i > 0; i--) {
                me.remove(columns[endIdx + i]);
            }
        },
        onSelectionFinish: function() {
            var me = this,
                range = me.getContiguousSelection(),
                start, end;
            if (range) {
                start = new Ext.grid.Location(me.view, {
                    record: 0,
                    column: range[0]
                });
                end = new Ext.grid.Location(me.view, {
                    record: me.view.getStore().getCount() - 1,
                    column: range[1]
                });
                me.getSelectionModel().onSelectionFinish(me, start, end);
            } else {
                me.getSelectionModel().onSelectionFinish(me);
            }
        },
        getContiguousSelection: function() {
            var selection = Ext.Array.sort(this.getColumns(), function(c1, c2) {
                    var c1Grid = c1.getGrid().ownerGrid,
                        c1IndexOfLeaf = c1Grid.getHeaderContainer().indexOfLeaf(c1),
                        c2Grid = c2.getGrid().ownerGrid,
                        c2IndexOfLeaf = c2Grid.getHeaderContainer().indexOfLeaf(c2);
                    return c1IndexOfLeaf - c2IndexOfLeaf;
                }),
                len = selection.length,
                i;
            if (len) {
                for (i = 1; i < len; i++) {
                    if (selection[i].getVisibleIndex() !== selection[i - 1].getVisibleIndex() + 1) {
                        return false;
                    }
                }
                return [
                    selection[0],
                    selection[len - 1]
                ];
            }
        }
    }
});

Ext.define('Ext.grid.selection.Replicator', {
    extend: Ext.plugin.Abstract,
    alias: 'plugin.selectionreplicator',
    init: function(grid) {
        this.gridListeners = grid.on({
            beforeselectionextend: this.onBeforeSelectionExtend,
            scope: this,
            destroyable: true
        });
    },
    onBeforeSelectionExtend: function(ownerGrid, sel, extension) {
        var columns = this.columns = [];
        sel.eachColumn(function(column) {
            columns.push(column);
        });
        return this.replicateSelection(ownerGrid, sel, extension);
    },
    replicateSelection: function(ownerGrid, sel, extension) {
        var me = this,
            columns, colCount, j, column, values, startIdx, endIdx, selFirstRowIdx, selLastRowIdx, i, increment, store, record, prevValues, prevValue, selectedRowCount, lastTwoRecords, x, y;
        if (extension.columns || sel.isColumns) {
            return;
        }
        columns = me.columns;
        selFirstRowIdx = sel.getFirstRowIndex();
        selLastRowIdx = sel.getLastRowIndex();
        selectedRowCount = selLastRowIdx - selFirstRowIdx + 1;
        lastTwoRecords = [];
        colCount = columns.length;
        store = columns[0].getGrid().getStore();
        if (selectedRowCount === 1) {
            values = me.getColumnValues(sel.view.getStore().getAt(selFirstRowIdx));
        } else {
            values = new Array(colCount);
            if (extension.rows < 0) {
                lastTwoRecords = [
                    store.getAt(selFirstRowIdx + 1),
                    store.getAt(selFirstRowIdx)
                ];
            } else {
                lastTwoRecords = [
                    store.getAt(selLastRowIdx - 1),
                    store.getAt(selLastRowIdx)
                ];
            }
            lastTwoRecords[0] = me.getColumnValues(lastTwoRecords[0]);
            lastTwoRecords[1] = me.getColumnValues(lastTwoRecords[1]);
            for (j = 0; j < colCount; j++) {
                x = lastTwoRecords[1][j];
                y = lastTwoRecords[0][j];
                if (!isNaN(x) && !isNaN(y)) {
                    values[j] = Number(x) - Number(y);
                }
            }
        }
        if (extension.rows < 0) {
            startIdx = extension.end.recordIndex;
            endIdx = extension.start.recordIndex - 1;
            increment = -1;
        } else {
            startIdx = extension.start.recordIndex;
            endIdx = extension.end.recordIndex + 1;
            increment = 1;
        }
        if (selectedRowCount === 1) {
            for (i = startIdx; i !== endIdx; i += increment) {
                record = store.getAt(i);
                for (j = 0; j < colCount; j++) {
                    column = columns[j];
                    if (column.getDataIndex()) {
                        record.set(column.getDataIndex(), values[j]);
                    }
                }
            }
        } else {
            for (i = startIdx; i !== endIdx; i += increment) {
                record = store.getAt(i);
                prevValues = me.getColumnValues(store.getAt(i - increment));
                for (j = 0; j < colCount; j++) {
                    column = columns[j];
                    if (column.getDataIndex()) {
                        prevValue = prevValues[j];
                        if (!isNaN(prevValue)) {
                            record.set(column.getDataIndex(), Ext.coerce(Number(prevValue) + values[j], prevValue));
                        }
                    }
                }
            }
        }
    },
    getColumnValues: function(record) {
        var columns = this.columns,
            len = columns.length,
            i, column,
            result = new Array(columns.length);
        for (i = 0; i < len; i++) {
            column = columns[i];
            if (column.getDataIndex()) {
                result[i] = record.get(column.getDataIndex());
            }
        }
        return result;
    },
    destroy: function() {
        this.gridListeners = Ext.destroy(this.gridListeners);
        this.callParent();
    }
});

Ext.define('Ext.grid.selection.SelectionExtender', {
    maskBox: {},
    constructor: function(config) {
        var me = this,
            view = config.view,
            handleListeners = {
                dragstart: 'onDragStart',
                dragend: 'onDragEnd',
                scope: me
            };
        Ext.apply(me, config);
        me.el = view.outerCt;
        me.handle = view.bodyElement.createChild({
            cls: Ext.baseCSSPrefix + 'selmodel-extender-drag-handle'
        }).hide();
        if (Ext.supports.Touch) {
            handleListeners.longpress = 'onHandleLongpress';
        }
        me.handle.on(handleListeners);
        me.mask = view.outerCt.createChild({
            cls: Ext.baseCSSPrefix + 'selmodel-extender-mask'
        }).hide();
        me.scrollListener = view.getScrollable().on({
            scroll: me.onViewScroll,
            scope: me,
            destroyable: true
        });
        me.viewListener = view.on({
            columnresize: 'alignHandle',
            columnhide: 'alignHandle',
            columnshow: 'alignHandle',
            columnmove: 'alignHandle',
            scope: me,
            destroyable: true
        });
        if (config && config.axes) {
            me.setAxes(config.axes);
        }
    },
    setAxes: function(axes) {
        var me = this;
        me.axes = axes;
        me.extendX = !!(axes & 1);
        me.extendY = !!(axes & 2);
    },
    setHandle: function(firstPos, endPos) {
        var me = this;
        me.firstPos = firstPos;
        me.endPos = endPos;
        if (firstPos && endPos && endPos.getCell(true)) {
            me.curPos = endPos;
            me.alignHandle();
        } else {
            me.disable();
        }
    },
    alignHandle: function() {
        var me = this,
            lastCell = me.endPos;
        if (me.firstPos && lastCell && me.view.isRecordRendered(lastCell.recordIndex)) {
            lastCell = lastCell.clone({
                record: lastCell.record,
                column: lastCell.column
            }).getCell();
            if (lastCell && lastCell.isVisible()) {
                me.enable();
            } else {
                me.disable();
            }
            me.handle.alignTo(lastCell, 'c-br');
        } else {
            me.disable();
        }
    },
    enable: function() {
        this.handle.show();
    },
    disable: function() {
        this.handle.hide();
        this.mask.hide();
    },
    onHandleLongpress: function(e) {
        e.startDrag();
    },
    onDragStart: function(e) {
        if (e.pointerType !== 'touch' || e.longpress) {
            e.claimGesture();
            this.handle.on('drag', this.onDrag, this);
        }
    },
    onDrag: function(e) {
        var me = this,
            target, view, scrollClientRegion, touch, realTarget, overCell, scrollTask, thresh, scrollDelta, scrollBy;
        if (e.changedTouches) {
            touch = e.changedTouches[0];
            if (touch && !Ext.fly(touch.target).getRegion().contains(touch.point)) {
                realTarget = Ext.event.Event.resolveTextNode(Ext.Element.fromPagePoint(touch.pageX, touch.pageY, true));
                if (realTarget) {
                    e.target = realTarget;
                }
            }
        }
        target = e.target;
        view = me.view;
        scrollClientRegion = view.getScrollable().getElement().getClientRegion();
        overCell = new Ext.grid.Location(view, target);
        scrollTask = me.scrollTask || (me.scrollTask = Ext.util.TaskManager.newTask({
            run: me.doAutoScroll,
            scope: me,
            interval: 10
        }));
        thresh = 25 * (window.devicePixelRatio || 1);
        scrollDelta = 3 * (window.devicePixelRatio || 1);
        scrollBy = me.scrollBy || (me.scrollBy = []);
        e.claimGesture();
        me.lastXY = [
            e.pageX,
            e.pageY
        ];
        if (!me.el.contains(target)) {
            scrollBy[0] = scrollBy[1] = 0;
            return scrollTask.stop();
        }
        if (me.lastXY[1] > scrollClientRegion.bottom - thresh) {
            if (me.extendY) {
                scrollBy[1] = scrollDelta;
                scrollTask.start();
            }
        }
        else if (me.lastXY[1] < scrollClientRegion.top + thresh) {
            if (me.extendY) {
                scrollBy[1] = -scrollDelta;
                scrollTask.start();
            }
        }
        else if (me.lastXY[0] > scrollClientRegion.right - thresh) {
            if (me.extendX) {
                scrollBy[0] = scrollDelta;
                scrollTask.start();
            }
        }
        else if (me.lastXY[0] < scrollClientRegion.left + thresh) {
            if (me.extendX) {
                scrollBy[0] = -scrollDelta;
                scrollTask.start();
            }
        } else {
            scrollBy[0] = scrollBy[1] = 0;
            scrollTask.stop();
        }
        if (overCell && overCell.getCell() && !overCell.equals(me.lastOverCell)) {
            me.lastOverCell = overCell;
            me.syncMaskOnCell(overCell);
        }
    },
    doAutoScroll: function() {
        var me = this,
            view = me.view,
            scroller = view.getScrollable(),
            scrollOverCell;
        scroller.scrollBy.apply(scroller, me.scrollBy);
        scrollOverCell = document.elementFromPoint.apply(document, me.lastXY);
        if (scrollOverCell) {
            scrollOverCell = new Ext.grid.Location(me.view, scrollOverCell);
            if (scrollOverCell && scrollOverCell.getCell() && !scrollOverCell.equals(me.lastOverCell)) {
                me.lastOverCell = scrollOverCell;
                me.syncMaskOnCell(scrollOverCell);
            }
        }
    },
    onDragEnd: function(e) {
        var me = this,
            selectable = me.view.getSelectable(),
            selection = selectable && selectable.getSelection();
        me.handle.un('drag', me.onDrag, me);
        if (me.scrollTask) {
            me.scrollTask.stop();
        }
        if (me.extensionDescriptor) {
            me.disable();
            if ((selection.isColumns && e.direction.y < 0) || selection.isRows && e.direction.x < 0) {
                me.alignHandle();
                return;
            }
            selectable.extendSelection(me.extensionDescriptor);
        }
    },
    onViewScroll: function() {
        var me = this;
        if ((me.active && me.lastOverCell) || me.firstPos) {
            me.endPos = me.endPos.clone({
                record: me.endPos.recordIndex
            });
            me.alignHandle();
        }
    },
    stopEvent: function(e) {
        e.stopEvent();
    },
    syncMaskOnCell: function(overCell) {
        var me = this,
            view = me.view,
            renderInfo = view.renderInfo,
            maskBox = me.maskBox,
            startRecordIndex = me.firstPos.recordIndex,
            endRecordIndex = me.endPos.recordIndex,
            extensionStart = me.firstPos.clone({
                record: startRecordIndex
            }),
            extensionEnd = me.endPos.clone({
                record: endRecordIndex
            }),
            preventReduce = !me.allowReduceSelection,
            selRegion, firstCell, firstCellEl, endCell, endCellEl, curPos;
        firstCell = me.firstPos.clone({
            record: Ext.Number.constrain(Math.min(startRecordIndex, endRecordIndex), renderInfo.indexTop, renderInfo.indexBottom - 1),
            column: me.firstPos.column
        });
        endCell = me.endPos.clone({
            record: Ext.Number.constrain(Math.max(firstCell.recordIndex, endRecordIndex), renderInfo.indexTop, renderInfo.indexBottom - 1)
        });
        firstCellEl = firstCell.getCell();
        endCellEl = endCell.getCell();
        me.selectionRegion = selRegion = firstCellEl.getRegion().union(endCellEl.getRegion());
        me.curPos = curPos = overCell;
        overCell = overCell.getCell('el');
        me.mask.dom.style.borderTopWidth = me.mask.dom.style.borderRightWidth = me.mask.dom.style.borderBottomWidth = me.mask.dom.style.borderLeftWidth = '';
        if (curPos.recordIndex < me.firstPos.recordIndex && me.extendY) {
            me.extensionDescriptor = {
                type: 'rows',
                start: extensionStart.clone({
                    record: curPos.recordIndex
                }),
                end: extensionEnd.clone({
                    record: me.firstPos.recordIndex - 1
                }),
                rows: curPos.recordIndex - me.firstPos.recordIndex,
                mousePosition: me.lastXY
            };
            me.mask.dom.style.borderBottomWidth = '0';
            maskBox.x = selRegion.x;
            maskBox.y = overCell.getY();
            maskBox.width = selRegion.right - selRegion.left;
            maskBox.height = selRegion.top - overCell.getY();
        }
        else if (curPos.recordIndex > me.endPos.recordIndex && me.extendY) {
            me.extensionDescriptor = {
                type: 'rows',
                start: extensionStart.clone({
                    record: me.endPos.recordIndex + 1
                }),
                end: extensionEnd.clone({
                    record: curPos.recordIndex
                }),
                rows: curPos.recordIndex - me.endPos.recordIndex,
                mousePosition: me.lastXY
            };
            me.mask.dom.style.borderTopWidth = '0';
            maskBox.x = selRegion.x;
            maskBox.y = selRegion.bottom;
            maskBox.width = selRegion.right - selRegion.left;
            maskBox.height = overCell.getRegion().bottom - selRegion.bottom;
        }
        else if (!preventReduce && curPos.recordIndex < me.endPos.recordIndex && me.extendY && curPos.columnIndex === me.endPos.columnIndex) {
            me.extensionDescriptor = {
                type: 'rows',
                start: extensionStart.clone({
                    record: me.endPos.recordIndex
                }),
                end: extensionEnd.clone({
                    record: curPos.recordIndex + 1
                }),
                rows: -1,
                mousePosition: me.lastXY,
                reduce: true
            };
            me.mask.dom.style.borderTopWidth = '0';
            maskBox.x = selRegion.x;
            maskBox.y = selRegion.top;
            maskBox.width = selRegion.right - selRegion.left;
            maskBox.height = overCell.getRegion().bottom - selRegion.top;
        } else {
            if (curPos.columnIndex < me.firstPos.columnIndex && me.extendX) {
                me.extensionDescriptor = {
                    type: 'columns',
                    start: extensionStart.clone({
                        column: curPos.columnIndex
                    }),
                    end: extensionEnd.clone({
                        column: me.firstPos.columnIndex - 1
                    }),
                    columns: curPos.columnIndex - me.firstPos.columnIndex,
                    mousePosition: me.lastXY
                };
                me.mask.dom.style.borderRightWidth = '0';
                maskBox.x = overCell.getX();
                maskBox.y = selRegion.top;
                maskBox.width = selRegion.left - overCell.getX();
                maskBox.height = selRegion.bottom - selRegion.top;
            }
            else if (curPos.columnIndex > me.endPos.columnIndex && me.extendX) {
                me.extensionDescriptor = {
                    type: 'columns',
                    start: extensionStart.clone({
                        column: me.endPos.columnIndex + 1
                    }),
                    end: extensionEnd.clone({
                        column: curPos.columnIndex
                    }),
                    columns: curPos.columnIndex - me.endPos.columnIndex,
                    mousePosition: me.lastXY
                };
                me.mask.dom.style.borderLeftWidth = '0';
                maskBox.x = selRegion.right;
                maskBox.y = selRegion.top;
                maskBox.width = overCell.getRegion().right - selRegion.right;
                maskBox.height = selRegion.bottom - selRegion.top;
            }
            else if (!preventReduce && curPos.columnIndex < me.endPos.columnIndex && me.extendX) {
                me.extensionDescriptor = {
                    type: 'columns',
                    start: extensionStart.clone({
                        column: me.firstPos.columnIndex
                    }),
                    end: extensionEnd.clone({
                        column: curPos.columnIndex
                    }),
                    columns: -1,
                    mousePosition: me.lastXY,
                    reduce: true
                };
                me.mask.dom.style.borderLeftWidth = '0';
                maskBox.x = selRegion.left;
                maskBox.y = selRegion.top;
                maskBox.width = overCell.getRegion().right - selRegion.left;
                maskBox.height = selRegion.bottom - selRegion.top;
            } else {
                me.extensionDescriptor = null;
            }
        }
        if (view.hasListeners.selectionextenderdrag) {
            view.fireEvent('selectionextenderdrag', view, view.getSelectable().getSelection(), me.extensionDescriptor);
        }
        if (me.extensionDescriptor) {
            me.mask.show();
            me.mask.setBox(maskBox);
        } else {
            me.mask.hide();
        }
    },
    destroy: function() {
        this.destroyMembers('viewListener', 'scrollListener', 'mask', 'handle');
    }
});

Ext.define('Ext.grid.cell.Number', {
    extend: Ext.grid.cell.Text,
    xtype: 'numbercell',
    isNumberCell: true,
    config: {
        format: '0,000.00'
    },
    classCls: Ext.baseCSSPrefix + 'numbercell',
    zeroValue: null,
    updateColumn: function(column, oldColumn) {
        var format;
        this.callParent([
            column,
            oldColumn
        ]);
        if (column && column.isNumberColumn) {
            format = column.getFormat();
            if (format !== null) {
                this.setFormat(format);
            }
        }
    },
    updateFormat: function(format) {
        if (!this.isConfiguring) {
            this.writeValue();
        }
    },
    formatValue: function(value) {
        var hasValue = value || value === 0,
            zeroValue;
        if (value === 0 && (zeroValue = this.getZeroValue()) !== null) {
            value = zeroValue || '';
        } else {
            value = hasValue ? Ext.util.Format.number(value, this.getFormat()) : '';
        }
        return value;
    }
});

Ext.define('Ext.grid.cell.Check', {
    extend: Ext.grid.cell.Base,
    xtype: 'checkcell',
    config: {
        disabled: null
    },
    innerTemplate: [
        {
            reference: 'checkboxElement',
            tabIndex: -1,
            cls: Ext.baseCSSPrefix + 'checkbox-el ' + Ext.baseCSSPrefix + 'font-icon'
        }
    ],
    classCls: Ext.baseCSSPrefix + 'checkcell',
    disabledCls: Ext.baseCSSPrefix + 'disabled',
    checkedCls: Ext.baseCSSPrefix + 'checked',
    constructor: function(config) {
        this.callParent([
            config
        ]);
        this.checkboxElement.on('tap', 'onTap', this);
    },
    applyValue: function(value) {
        return !!value;
    },
    updateValue: function(value, oldValue) {
        var me = this,
            column = me.getColumn();
        me.el.toggleCls(me.checkedCls, !!value);
        if (value) {
            column.updateHeaderState();
        } else {
            column.setHeaderStatus(value);
        }
    },
    updateColumn: function(column, oldColumn) {
        this.callParent([
            column,
            oldColumn
        ]);
        if (column) {
            this.setDisabled(column.getDisabled());
        }
    },
    applyDisabled: function(disabled) {
        return Boolean(disabled);
    },
    updateDisabled: function(disabled) {
        this.element.toggleCls(this.disabledCls, disabled);
    },
    disable: function() {
        this.setDisabled(true);
    },
    enable: function() {
        this.setDisabled(false);
    },
    onTap: function(e) {
        var me = this,
            record = me.getRecord(),
            column = me.getColumn(),
            recordIndex = column.up('grid').getStore().indexOf(record),
            checked;
        if (record) {
            checked = !column.isRecordChecked(record);
            if (me.getDisabled()) {
                return;
            }
            if (column.fireEvent('beforecheckchange', me, recordIndex, checked, record, e) !== false) {
                if (me.getColumn().getStopSelection()) {
                    e.stopSelection = true;
                }
                if (record) {
                    column.setRecordChecked(record, checked, e);
                }
                if (column.hasListeners.checkchange) {
                    column.fireEvent('checkchange', me, recordIndex, checked, record, e);
                }
            }
        }
    }
});

Ext.define('Ext.grid.column.Check', {
    extend: Ext.grid.column.Column,
    isCheckColumn: true,
    xtype: 'checkcolumn',
    cachedConfig: {
        headerCheckboxAlign: 'bottom'
    },
    config: {
        stopSelection: true,
        headerCheckbox: false
    },
    align: 'center',
    classCls: Ext.baseCSSPrefix + 'checkcolumn',
    noHeaderCheckboxCls: Ext.baseCSSPrefix + 'no-header-checkbox',
    checkedCls: Ext.baseCSSPrefix + 'checked',
    hasTextCls: Ext.baseCSSPrefix + 'has-text',
    checkboxAlignCls: {
        top: Ext.baseCSSPrefix + 'checkbox-align-top',
        right: Ext.baseCSSPrefix + 'checkbox-align-right',
        bottom: Ext.baseCSSPrefix + 'checkbox-align-bottom',
        left: Ext.baseCSSPrefix + 'checkbox-align-left'
    },
    text: '',
    ignoreExport: true,
    cell: {
        xtype: 'checkcell'
    },
    afterTitleTemplate: [
        {
            reference: 'checkboxElement',
            classList: [
                Ext.baseCSSPrefix + 'checkbox-el',
                Ext.baseCSSPrefix + 'font-icon'
            ]
        }
    ],
    onColumnTap: function(e) {
        var me = this;
        if ((e.target === me.checkboxElement.dom) && !me.getDisabled()) {
            me.toggleAll(e);
        }
        me.callParent([
            e
        ]);
    },
    toggleAll: function(e) {
        var me = this,
            checked = !me.allChecked;
        if (me.fireEvent('beforeheadercheckchange', me, checked, e) !== false) {
            me.doToggleAll(checked);
            me.setHeaderStatus(checked);
            me.fireEvent('headercheckchange', me, checked, e);
        }
    },
    doToggleAll: function(checked) {
        var me = this,
            store = me.getGrid().getStore();
        store.each(function(record) {
            me.setRecordChecked(record, checked);
        });
    },
    setRecordChecked: function(record, checked, e) {
        checked = !!checked;
        this.doSetRecordChecked(record, checked);
        if (checked) {
            this.updateHeaderState();
        } else {
            this.setHeaderStatus(checked);
        }
    },
    doSetRecordChecked: function(record, checked) {
        var dataIndex = this.getDataIndex();
        if (record.get(dataIndex) !== checked) {
            record.set(dataIndex, checked);
        }
    },
    areAllChecked: function() {
        var me = this,
            store = me.getGrid().getStore(),
            records, len, i;
        if (store && !store.isVirtualStore && store.getCount() > 0) {
            records = store.getData().items;
            len = records.length;
            for (i = 0; i < len; ++i) {
                if (!me.isRecordChecked(records[i])) {
                    return false;
                }
            }
            return true;
        }
    },
    isRecordChecked: function(record) {
        return record.get(this.getDataIndex());
    },
    updateHeaderState: function() {
        if (!this.destroyed && (this.getHeaderCheckbox() !== false)) {
            this.setHeaderStatus(this.areAllChecked());
        }
    },
    setHeaderStatus: function(checked) {
        var me = this;
        if (me.allChecked !== checked) {
            me.allChecked = checked;
            me.el.toggleCls(me.checkedCls, checked);
        }
    },
    updateDisabled: function(disabled, oldDisabled) {
        var me = this,
            grid = me.getGrid(),
            rows, len, i;
        me.callParent([
            disabled,
            oldDisabled
        ]);
        if (grid) {
            rows = grid.getViewItems();
            len = rows.length;
            for (i = 0; i < len; i++) {
                rows[i].getCellByColumn(me).setDisabled(disabled);
            }
        }
    },
    updateHeaderCheckboxAlign: function(align, oldAlign) {
        var me = this,
            checkboxAlignCls = me.checkboxAlignCls;
        if (oldAlign) {
            me.removeCls(checkboxAlignCls[oldAlign]);
        }
        if (align) {
            if (!checkboxAlignCls[align]) {
                Ext.raise("Invalid value for checkboxAlign: '" + align + "'");
            }
            me.addCls(checkboxAlignCls[align]);
        }
    },
    updateHeaderCheckbox: function(headerCheckbox) {
        var me = this,
            grid = me.getGrid();
        me.el.toggleCls(me.noHeaderCheckboxCls, !headerCheckbox);
        me.setSortable(me.getSortable() && !headerCheckbox);
        if (grid) {
            me.updateHeaderState();
        }
    },
    updateText: function(text) {
        this.setHtml(text);
        this.toggleCls(this.hasTextCls, !!text);
    }
});

Ext.define('Ext.grid.column.Selection', {
    extend: Ext.grid.column.Check,
    xtype: 'selectioncolumn',
    classCls: Ext.baseCSSPrefix + 'selectioncolumn',
    cell: {
        cls: Ext.baseCSSPrefix + 'selection-cell'
    },
    weight: -900,
    menu: null,
    sortable: false,
    draggable: false,
    resizable: false,
    hideable: false,
    ignore: true,
    stopSelection: false,
    updateHeaderState: function() {
        if (!this.isConfiguring) {
            this.getGrid().getSelectable().updateHeaderState();
        }
    },
    toggleAll: function(e) {
        this.getGrid().getSelectable().toggleAll(this, e);
    },
    setRecordChecked: function(record, checked, e) {
        var selectionModel = this.getGrid().getSelectable();
        if (checked) {
            selectionModel.select(record, selectionModel.getMode() !== 'single');
        } else {
            selectionModel.deselect(record);
        }
    },
    isRecordChecked: function(record) {
        return this.getGrid().getSelectable().isRowSelected(record);
    }
});

Ext.define('Ext.grid.column.Number', {
    extend: Ext.grid.column.Column,
    xtype: 'numbercolumn',
    isNumberColumn: true,
    config: {
        format: null
    },
    cell: {
        xtype: 'numbercell'
    },
    defaultEditor: {
        xtype: 'numberfield'
    }
});

Ext.define('Ext.grid.cell.RowNumberer', {
    extend: Ext.grid.cell.Number,
    xtype: 'rownumberercell',
    classCls: Ext.baseCSSPrefix + 'rownumberercell',
    format: '0,000',
    refreshValue: function(context) {
        var row = context.row,
            ret;
        if (context.summary) {
            ret = '\xa0';
        } else {
            ret = row ? row.$datasetIndex + 1 : null;
        }
        return ret;
    }
});

Ext.define('Ext.grid.column.RowNumberer', {
    extend: Ext.grid.column.Number,
    xtype: 'rownumberer',
    isRowNumberer: true,
    cell: {
        xtype: 'rownumberercell'
    },
    menu: null,
    align: 'right',
    hideable: false,
    ignore: true,
    ignoreExport: true,
    sortable: false,
    text: '',
    width: 'auto',
    minWidth: null,
    onAdded: function(parent, instanced) {
        var me = this,
            grid;
        me.callParent([
            parent,
            instanced
        ]);
        me.checkWidth();
        grid = me.getGrid();
        me.gridListeners = grid.on({
            storechange: 'attachStoreListeners',
            scope: me,
            destroyable: true
        });
        me.attachStoreListeners(grid.getStore());
    },
    onRemoved: function(destroying) {
        Ext.destroy(this.gridListeners, this.storeListeners);
        this.callParent([
            destroying
        ]);
    },
    privates: {
        attachStoreListeners: function(store) {
            Ext.destroy(this.storeListeners);
            if (store) {
                this.storeListeners = store.on({
                    datachanged: 'checkWidth',
                    totalcountchange: 'checkWidth',
                    scope: this,
                    destroyable: true
                });
            }
        },
        getCharWidth: function() {
            var me = this,
                charWidth = me._charWidth,
                text, cell, cellUi, gridUi, textWidth;
            if (!charWidth) {
                text = '0000000000';
                cell = me.getScratchCell();
                cellUi = me.getCell().ui;
                if (cellUi) {
                    cell.addUi(cellUi);
                }
                gridUi = me.getGrid().getUi();
                if (gridUi) {
                    cell.addUi(gridUi);
                }
                document.body.appendChild(cell.el.dom);
                textWidth = Ext.util.TextMetrics.measure(cell.bodyElement, text).width;
                document.body.removeChild(cell.el.dom);
                me._charWidth = charWidth = textWidth / text.length;
            }
            return charWidth;
        },
        checkWidth: function() {
            var me = this;
            if (document.fonts) {
                document.fonts.ready.then(function() {
                    if (!me.destroyed) {
                        me.doCheckWidth();
                    }
                });
            } else {
                me.doCheckWidth();
            }
        },
        doCheckWidth: function() {
            var me = this,
                store = me.getGrid().getStore(),
                charLen = 1,
                charWidth = me.getCharWidth();
            if (store && store.getTotalCount()) {
                charLen = me.getScratchCell().printValue(store.getTotalCount()).length;
            }
            me.textElement.setStyle('min-width', Math.ceil(charLen * charWidth) + 'px');
        }
    }
});

Ext.define('Ext.grid.selection.Model', {
    extend: Ext.dataview.selection.Model,
    alias: 'selmodel.grid',
    isGridSelectionModel: true,
    config: {
        columns: {
            $value: false,
            lazy: true
        },
        cells: {
            $value: false,
            lazy: true
        },
        rows: {
            $value: true,
            lazy: true
        },
        drag: false,
        extensible: {
            $value: false,
            lazy: true
        },
        reducible: true,
        checkbox: false,
        headerCheckbox: true,
        checkboxDefaults: {
            xtype: 'selectioncolumn',
            text: null,
            width: 30
        },
        showNumbererColumn: false
    },
    checkboxSelect: false,
    checkboxColumnIndex: 0,
    mode: 'multi',
    columnSelectCls: Ext.baseCSSPrefix + 'selmodel-column-select',
    rowNumbererHeaderCls: Ext.baseCSSPrefix + 'selmodel-row-numberer-hd',
    updateView: function(view, oldView) {
        var me = this,
            rowNumberer = me.numbererColumn = view.getRowNumbers(),
            checkbox = me.getCheckbox();
        me.callParent([
            view,
            oldView
        ]);
        if (oldView) {
            me.navigationModel = null;
            Ext.destroy(me.viewListeners);
        }
        if (view) {
            if (rowNumberer) {
                rowNumberer.setCell({
                    cls: me.rowNumbererCellCls
                });
                rowNumberer.setCls(me.rowNumbererHeaderCls);
            }
            if (checkbox) {
                view.registerColumn(checkbox);
            }
            me.viewListeners = view.on(me.getViewListeners());
        }
    },
    onViewCreated: function(view) {
        if (this.getColumns()) {
            view.addCls(this.columnSelectCls);
        }
        this.updateHeaderState();
    },
    updateDrag: function(drag) {
        var view = this.getView(),
            viewListeners = {
                dragstart: 'onViewDragStart',
                delegate: view.eventDelegate,
                scope: this
            };
        if (Ext.supports.Touch) {
            viewListeners.longpress = 'onViewLongpress';
        }
        view.innerCt[drag ? 'on' : 'un'](viewListeners);
    },
    getSelection: function(what, reset) {
        var config, result;
        if (what === 'rows' || what === 'records') {
            what = this.getStore().isVirtualStore ? 'rows' : 'records';
        }
        result = this.callParent();
        if (what) {
            what = what.toLowerCase();
            if (!result || result.type !== what) {
                config = {
                    type: what
                };
                if (what === 'records') {
                    config.selected = this.getSelected();
                }
                this.setSelection(config);
                result = this.callParent();
            } else if (reset) {
                result.clear(true);
            }
        }
        return result;
    },
    createCheckboxColumn: function(checkboxDefaults) {
        var me = this;
        return Ext.apply({
            headerCheckbox: me.getHeaderCheckbox() !== false
        }, checkboxDefaults);
    },
    onHeaderTap: function(headerCt, header, e) {
        var me = this,
            sel = me.getSelection(),
            isSelected = false,
            range, columns, i;
        if (header === this.numbererColumn) {
            me.toggleAll(header, e);
        }
        else if (me.getColumns() && header !== me.getCheckbox()) {
            if (e.shiftKey && sel && sel.lastColumnSelected) {
                if (!e.ctrlKey) {
                    sel.clear();
                }
                headerCt = me.getView().getHeaderContainer();
                columns = headerCt.getColumns();
                range = Ext.Array.sort([
                    headerCt.indexOfLeaf(sel.lastColumnSelected),
                    headerCt.indexOf(header)
                ], Ext.Array.numericSortFn);
                for (i = range[0]; i <= range[1]; i++) {
                    me.selectColumn(columns[i], true);
                }
            } else {
                isSelected = me.isColumnSelected(header);
                if (!e.ctrlKey) {
                    sel.clear();
                } else if (isSelected) {
                    me.deselectColumn(header);
                    me.getSelection().lastColumnSelected = null;
                }
                if (!isSelected || !e.ctrlKey && e.pointerType !== 'touch') {
                    me.selectColumn(header, e.ctrlKey);
                    me.getSelection().lastColumnSelected = header;
                }
                me.updateSelectionExtender();
            }
        }
    },
    toggleAll: function(header, e) {
        var me = this,
            sel = me.getSelection();
        e.stopEvent();
        if (!sel || !sel.isAllSelected()) {
            me.selectAll();
        } else {
            me.deselectAll();
        }
        me.updateHeaderState();
        me.lastColumnSelected = null;
    },
    selectByLocation: function(location) {
        if (!location.isGridLocation) {
            Ext.raise('selectByLocation MUST be passed an Ext.grid.Location');
        }
        var me = this,
            record = location.record,
            column = location.column;
        if (me.getCells()) {
            me.selectCells(location, location);
        } else if (me.getRows() && record) {
            this.select(record);
        } else if (me.getColumns() && column) {
            me.selectColumn(column);
        }
    },
    updateHeaderState: function() {
        var me = this,
            store = me.getStore(),
            sel = me.getSelection(),
            isChecked = false,
            checkHd = me.getCheckbox(),
            storeCount;
        if (store && sel && sel.isRows) {
            storeCount = store.getCount();
            if (store.isBufferedStore) {
                isChecked = sel.allSelected;
            } else {
                isChecked = storeCount > 0 && (storeCount === sel.getCount());
            }
        }
        if (checkHd) {
            checkHd.setHeaderStatus(isChecked);
        }
    },
    onColumnUpdate: function(headerCt, columns) {
        var me = this,
            checkColumn = me.getCheckbox();
        if (checkColumn) {
            if (headerCt) {
                headerCt.remove(checkColumn, false);
            }
            columns.push(checkColumn);
        }
    },
    select: function(records, keepExisting, suppressEvent) {
        var me = this,
            sel = me.getSelection('records'),
            store = me.getStore(),
            len, i, record;
        if (!Ext.isArray(records)) {
            records = [
                records
            ];
        }
        len = records.length;
        for (i = 0; i < len; i++) {
            record = records[i];
            if (typeof record === 'number') {
                records[i] = record = store.getAt(record);
            }
        }
        sel.add(records, keepExisting, suppressEvent);
    },
    deselect: function(records, suppressEvent) {
        var me = this,
            sel = me.getSelection('records'),
            store = me.getView().getStore(),
            len, i, record;
        if (sel && sel.isRecords) {
            if (!Ext.isArray(records)) {
                records = [
                    records
                ];
            }
            len = records.length;
            for (i = 0; i < len; i++) {
                record = records[i];
                if (typeof record === 'number') {
                    records[i] = record = store.getAt(record);
                }
            }
        }
        sel.remove(records, suppressEvent);
    },
    onCollectionRemove: function(selectedCollection, chunk) {
        this.updateHeaderState();
        this.callParent([
            selectedCollection,
            chunk
        ]);
    },
    onCollectionAdd: function(selectedCollection, adds) {
        this.updateHeaderState();
        this.callParent([
            selectedCollection,
            adds
        ]);
    },
    selectCells: function(rangeStart, rangeEnd, suppressEvent) {
        var me = this,
            view = me.getView(),
            sel;
        rangeStart = rangeStart.isGridLocation ? rangeStart.clone() : new Ext.grid.Location(view, {
            record: rangeStart[0],
            column: rangeStart[1]
        });
        rangeEnd = rangeEnd.isGridLocation ? rangeEnd.clone() : new Ext.grid.Location(view, {
            record: rangeEnd[0],
            column: rangeEnd[1]
        });
        me.resetSelection(true);
        sel = me.getSelection('cells');
        sel.setRangeStart(rangeStart);
        sel.setRangeEnd(rangeEnd);
        if (!suppressEvent) {
            me.fireSelectionChange();
        }
    },
    selectAll: function(suppressEvent) {
        var me = this,
            sel = me.getSelection(),
            doSelect;
        if (me.getRows()) {
            sel = me.getSelection('records');
            doSelect = true;
        } else if (me.getCells()) {
            sel = me.getSelection('cells');
            doSelect = true;
        } else if (me.getColumns()) {
            sel = me.getSelection('columns');
            doSelect = true;
        }
        if (doSelect) {
            sel.selectAll(suppressEvent);
        }
    },
    deselectAll: function(suppressEvent) {
        var sel = this.getSelection();
        if (sel && sel.getCount()) {
            sel.clear(suppressEvent);
        }
    },
    selectRows: function(rows, keepSelection, suppressEvent) {
        var sel = this.getSelection('records');
        if (!keepSelection) {
            this.resetSelection(true);
        }
        sel.add(rows, keepSelection, suppressEvent);
    },
    isSelected: function(record) {
        return this.isRowSelected(record);
    },
    selectColumn: function(column, keepSelection, suppressEvent) {
        var selData = this.getSelection('columns');
        if (!selData.isSelected(column)) {
            if (!keepSelection) {
                selData.clear(suppressEvent);
                selData.setRangeStart(column);
            } else {
                selData.add(column);
            }
        }
    },
    deselectColumn: function(column, suppressEvent) {
        var selData = this.getSelection();
        if (selData && selData.isColumns && selData.isSelected(column)) {
            selData.remove(column, suppressEvent);
        }
    },
    destroy: function() {
        var me = this,
            view = me.getView(),
            checkbox = me.checkbox;
        if (view && !view.destroying && checkbox) {
            view.unregisterColumn(checkbox, true);
        }
        Ext.destroy(me.viewListeners, me.getConfig('extensible', null, true));
        me.callParent();
    },
    privates: {
        axesConfigs: {
            x: 1,
            y: 2,
            xy: 3,
            both: 3,
            "true": 3
        },
        getViewListeners: function() {
            return {
                columnschanged: 'onColumnsChanged',
                columnmove: 'onColumnMove',
                scope: this,
                destroyable: true
            };
        },
        refreshSelection: function() {
            if (this.getSelection().isRecords) {
                this.callParent();
            } else {
                this.resetSelection();
            }
        },
        onColumnsChanged: function() {
            var me = this,
                selData = me.getSelection(),
                view, selectionChanged;
            if (selData) {
                view = selData.view;
                if (selData.isCells) {
                    if (view.visibleColumns().length) {
                        selData.eachCell(function(location) {
                            view.onCellDeselect(location);
                        });
                    } else {
                        me.clearSelections();
                    }
                }
                else if (selData.isColumns) {
                    selectionChanged = false;
                    selData.eachColumn(function(column) {
                        if (!column.isVisible() || !view.isAncestor(column)) {
                            me.remove(column);
                            selectionChanged = true;
                        }
                    });
                }
            }
            Ext.on('idle', selectionChanged ? me.fireSelectionChange : me.updateSelectionExtender, me, {
                single: true
            });
        },
        onColumnMove: function() {
            this.updateSelectionExtender();
        },
        resetSelection: function(suppressEvent) {
            var sel = this.getSelection();
            if (sel) {
                sel.clear(suppressEvent);
            }
        },
        onViewLongpress: function(e) {
            if (e.pointerType === 'touch') {
                e.startDrag();
            }
        },
        onViewDragStart: function(e) {
            if (e.pointerType === 'touch' && !e.longpress) {
                return;
            }
            var me = this,
                view = me.getView(),
                location = new Ext.grid.Location(view, e),
                header = location.column,
                viewLocation = view.getNavigationModel().getLocation(),
                isCheckClick = header === me.getCheckbox(),
                resumingSelection = false,
                sel;
            if (!location.cell) {
                return;
            }
            if (e.claimed || e.button > 0 || e.altKey || (viewLocation && viewLocation.actionable) || !view.shouldSelectItem(e)) {
                return;
            }
            if (header) {
                e.claimGesture();
                me.mousedownPosition = location.clone();
                if (isCheckClick) {
                    me.checkCellClicked = location.cell.element.dom;
                }
                if (header === me.numbererColumn || isCheckClick || !me.getCells()) {
                    if (me.getRows()) {
                        if (e.shiftKey && me.isSelected(location.record)) {
                            resumingSelection = true;
                        } else if (!e.shiftKey && !isCheckClick && me.checkboxOnly) {
                            return;
                        }
                        sel = me.getSelection('records');
                        if (!e.shiftKey && !e.ctrlKey && !isCheckClick) {
                            sel.clear();
                        }
                    } else if (me.getColumns()) {
                        sel = me.getSelection('columns');
                        if (e.shiftKey && me.isColumnSelected(location.column)) {
                            resumingSelection = true;
                        } else if (!e.shiftKey && !e.ctrlKey && !isCheckClick) {
                            sel.clear();
                        }
                    } else {
                        return false;
                    }
                } else {
                    sel = me.getSelection('cells');
                    if (e.shiftKey && me.isCellSelected(location.recordIndex, location.columnIndex)) {
                        resumingSelection = true;
                    } else if (!e.shiftKey) {
                        sel.clear();
                    }
                }
                if (!resumingSelection) {
                    me.lastDragLocation = null;
                }
                if (e.longpress) {
                    location.row.removeCls(view.pressedCls);
                    me.onViewSelectionDrag(e);
                }
                if (sel) {
                    view.innerCt.on('dragend', me.onViewDragEnd, me, {
                        single: true
                    });
                    me.mousemoveListener = view.innerCt.on({
                        drag: 'onViewSelectionDrag',
                        scope: me,
                        delegate: view.eventDelegate,
                        destroyable: true
                    });
                }
            }
        },
        onViewSelectionDrag: function(e) {
            var me = this,
                view = me.getView(),
                newLocation, touch, realTarget;
            if (e.changedTouches) {
                touch = e.changedTouches[0];
                if (touch && !Ext.fly(touch.target).getRegion().contains(touch.point)) {
                    realTarget = Ext.event.Event.resolveTextNode(Ext.Element.fromPagePoint(touch.pageX, touch.pageY, true));
                    if (realTarget) {
                        e.target = realTarget;
                    }
                }
            }
            me.stopAutoScroller();
            if (!Ext.fly(e.target).up(view.eventDelegate)) {
                me.scrollTowardsPointer(e, view);
                return;
            }
            newLocation = me.dragLocation = new Ext.grid.Location(view, e);
            me.changeSelectionRange(view, newLocation, e);
        },
        changeSelectionRange: function(view, location, e) {
            var me = this,
                overColumn = location.column,
                overRecord = location.record,
                overRowIdx = location.recordIndex,
                lastDragLocation = me.lastDragLocation,
                selData, lastOverRecord, lastOverColumn, recChange, colChange;
            e.claimGesture();
            if (lastDragLocation) {
                lastOverRecord = lastDragLocation.record;
                lastOverColumn = lastDragLocation.column;
            }
            if (me.checkCellClicked) {
                selData = me.getSelection('rows');
                selData.setRangeStart(me.getStore().indexOf(overRecord));
                me.checkCellClicked = null;
                return;
            }
            selData = me.getSelection();
            if (me.getExtensible()) {
                me.getExtensible().disable();
            }
            if (overColumn) {
                recChange = overRecord !== lastOverRecord;
                colChange = overColumn !== lastOverColumn;
                if (selData.isRows || selData.isRecords) {
                    if (recChange) {
                        if (lastOverRecord) {
                            selData.setRangeEnd(overRowIdx);
                        } else {
                            selData.setRangeStart(overRowIdx);
                        }
                    }
                }
                else if (selData.isCells) {
                    if (recChange || colChange) {
                        if (lastOverRecord) {
                            selData.setRangeEnd(location);
                        } else {
                            selData.setRangeStart(location);
                        }
                    }
                }
                else if (selData.isColumns) {
                    if (colChange) {
                        if (lastOverColumn) {
                            selData.setRangeEnd(location.column);
                        } else {
                            selData.setRangeStart(location.column);
                        }
                    }
                }
                if (recChange || colChange) {
                    view.getNavigationModel().setLocation(location);
                }
                me.lastDragLocation = location;
            }
        },
        scrollTowardsPointer: function(e, view) {
            var me = this,
                scrollClientRegion = view.getScrollable().getElement().getClientRegion(),
                point = e.getXY(),
                scrollTask = me.scrollTask || (me.scrollTask = Ext.util.TaskManager.newTask({
                    run: me.doAutoScroll,
                    args: [
                        e,
                        view
                    ],
                    scope: me,
                    interval: 10
                })),
                thresh = 25 * (window.devicePixelRatio || 1),
                scrollDelta = 3 * (window.devicePixelRatio || 1),
                scrollBy = me.scrollBy || (me.scrollBy = []);
            e.claimGesture();
            if (point[1] > scrollClientRegion.bottom - thresh) {
                scrollBy[0] = 0;
                scrollBy[1] = scrollDelta;
                scrollTask.start();
            }
            else if (point[1] < scrollClientRegion.top + thresh) {
                scrollBy[0] = 0;
                scrollBy[1] = -scrollDelta;
                scrollTask.start();
            }
            else if (point[0] > scrollClientRegion.right - thresh) {
                scrollBy[0] = scrollDelta;
                scrollBy[1] = 0;
                scrollTask.start();
            } else if (point[0] < scrollClientRegion.left + thresh) {
                scrollBy[0] = -scrollDelta;
                scrollBy[1] = 0;
                scrollTask.start();
            }
        },
        doAutoScroll: function(e, view) {
            var me = this,
                scrollClientRegion = view.getScrollable().getElement().getClientRegion(),
                scroller = view.getScrollable(),
                xy = [],
                cell, location;
            scroller.scrollBy.apply(scroller, me.scrollBy);
            if (me.scrollBy[0]) {
                xy[0] = me.scrollBy[0] > 0 ? scrollClientRegion.right - 5 : scrollClientRegion.left + 5;
            } else {
                xy[0] = e.getX();
            }
            if (me.scrollBy[1]) {
                xy[1] = me.scrollBy[1] > 0 ? scrollClientRegion.bottom - 5 : scrollClientRegion.top + 5;
            } else {
                xy[1] = e.getY();
            }
            cell = document.elementFromPoint.apply(document, xy);
            if (cell) {
                cell = Ext.fly(cell).up(view.cellSelector);
                if (!cell) {
                    me.stopAutoScroller();
                    return;
                }
                location = new Ext.grid.Location(view, cell);
                if (cell && !location.equals(me.lastDragLocation)) {
                    me.changeSelectionRange(view, location, e);
                }
            }
        },
        stopAutoScroller: function() {
            var me = this;
            if (me.scrollTask) {
                me.scrollBy[0] = me.scrollBy[1] = 0;
                me.scrollTask.stop();
                me.scrollTask = null;
            }
        },
        onViewDragEnd: function(e) {
            var me = this,
                view = me.getView(),
                dragLocation = me.dragLocation,
                changedCell = !dragLocation || !dragLocation.equals(me.mousedownPosition),
                location = e.location,
                sel;
            me.checkCellClicked = null;
            me.stopAutoScroller();
            if (view && !view.destroyed) {
                if (!location) {
                    e.location = new Ext.grid.Location(view, e);
                }
                if (me.getExtensible() && changedCell) {
                    me.getExtensible().disable();
                }
                me.mousemoveListener.destroy();
                if ((sel = me.getSelection()) && sel.isRows) {
                    sel.addRange(true);
                }
                else if (changedCell) {
                    me.fireSelectionChange();
                }
            }
        },
        onNavigate: function(navigateEvent) {
            var me = this,
                view = me.getView(),
                store = me.getStore(),
                selectingRows = me.getRows(),
                selectingCells = me.getCells(),
                selectingColumns = me.getColumns(),
                checkbox = me.getCheckbox(),
                checkboxOnly = me.checkboxOnly,
                mode = me.getMode(),
                location = navigateEvent.to,
                toColumn = location.column,
                record = location.record,
                sel = me.getSelection(),
                ctrlKey = navigateEvent.ctrlKey,
                shiftKey = navigateEvent.shiftKey,
                adding = true,
                isSpace = navigateEvent.getKey() === navigateEvent.SPACE,
                count, changedRow, selectionChanged, selected, continueLocation;
            if (navigateEvent.stopSelection || toColumn === me.checkboxColumn) {
                return;
            }
            if (!navigateEvent.pointerType && !isSpace) {
                if (ctrlKey) {
                    return;
                }
                changedRow = !navigateEvent.from || (location.recordIndex !== navigateEvent.from.recordIndex);
                if (!changedRow && !(selectingCells || selectingColumns)) {
                    return;
                }
            }
            if (sel && (sel.isCells || (sel.isColumns && selectingRows && !(ctrlKey || shiftKey))) && sel.getCount() > 1 && !shiftKey && navigateEvent.type === 'click') {
                return;
            }
            if (!(selectingCells || selectingColumns || selectingRows) || !record || navigateEvent.type === 'mousedown') {
                return;
            }
            if (ctrlKey && navigateEvent.keyCode === navigateEvent.A && mode === 'multi') {
                if (!sel || sel.getCount() < 2) {
                    me.selectAll();
                } else {
                    me.deselectAll();
                }
                me.updateHeaderState();
                return;
            }
            if (shiftKey && mode === 'multi') {
                if (toColumn === me.numbererColumn || toColumn === me.checkColumn || !(selectingCells || selectingColumns) || (sel && (sel.isRows || sel.isRecords))) {
                    if (selectingRows) {
                        if (toColumn !== checkbox && checkboxOnly) {
                            return;
                        }
                        sel = me.getSelection('records');
                        if (!sel.getRangeSize()) {
                            if (me.selectionStart == null) {
                                me.selectionStart = location.recordIndex;
                            }
                            sel.setRangeStart(me.selectionStart);
                        } else {
                            continueLocation = new Ext.grid.Location(view, me.getLastSelected());
                            sel.setRangeStart(continueLocation.recordIndex);
                        }
                        sel.setRangeEnd(location.recordIndex);
                        selectionChanged = true;
                    }
                } else {
                    if (selectingCells) {
                        sel = me.getSelection('cells');
                        count = sel.getCount();
                        if (!sel.getRangeSize()) {
                            sel.setRangeStart(navigateEvent.from || new Ext.grid.Location(me.getView(), {
                                record: 0,
                                column: 0
                            }));
                        }
                        sel.setRangeEnd(location);
                        adding = count < sel.getCount();
                        selectionChanged = true;
                    } else if (selectingColumns) {
                        sel = me.getSelection('columns');
                        if (!sel.getCount()) {
                            sel.setRangeStart(toColumn);
                        }
                        sel.setRangeEnd(toColumn);
                        selectionChanged = true;
                    }
                }
            } else {
                me.selectionStart = null;
                if (sel && (mode !== 'multi' || !ctrlKey) && !isSpace) {
                    sel.clear(true);
                }
                if (selectingRows && (toColumn === me.numbererColumn || toColumn === checkbox || !selectingCells)) {
                    if (toColumn !== checkbox && checkboxOnly || (navigateEvent.keyCode && navigateEvent.from && record === navigateEvent.from.record)) {
                        return;
                    }
                    sel = me.getSelection('records');
                    if (sel.isSelected(record)) {
                        if (ctrlKey || toColumn === checkbox || me.getDeselectable()) {
                            sel.remove(record);
                            selectionChanged = true;
                        }
                    } else {
                        sel.add(record, ctrlKey || toColumn === checkbox);
                        selectionChanged = true;
                    }
                    if (selectionChanged && (selected = sel.getSelected()) && selected.length) {
                        me.selectionStart = store.indexOf(selected.first());
                        sel.setRangeStart(me.selectionStart);
                    }
                } else {
                    if (selectingCells) {
                        sel = me.getSelection('cells', true);
                        sel.setRangeStart(location);
                        selectionChanged = true;
                    } else if (selectingColumns) {
                        sel = me.getSelection('columns');
                        if (ctrlKey) {
                            if (sel.isSelected(toColumn)) {
                                sel.remove(toColumn);
                            } else {
                                sel.add(toColumn);
                            }
                        } else {
                            sel.setRangeStart(toColumn);
                        }
                        selectionChanged = true;
                    }
                }
            }
            if (selectionChanged) {
                if (!sel.isRecords) {
                    me.fireSelectionChange(null, adding);
                }
            }
            me.lastDragLocation = location;
        },
        isColumnSelected: function(column) {
            var me = this,
                sel = me.getSelection(),
                ret = false;
            if (sel && sel.isColumns) {
                ret = sel.isSelected(column);
            }
            return ret;
        },
        isCellSelected: function(row, column) {
            var sel = this.getSelection();
            if (sel) {
                if (sel.isColumns) {
                    if (typeof column === 'number') {
                        column = this.getView().getVisibleColumns()[column];
                    }
                    return sel.isSelected(column);
                }
                if (sel.isCells) {
                    return sel.isSelected(row, column);
                }
                return sel.isSelected(row);
            }
            return false;
        },
        updateSelection: function(selection, oldSelection) {
            var view = this.getView();
            Ext.destroy(oldSelection);
            if (selection && selection.getCount()) {
                view = selection.view;
                if (selection.isRows) {
                    selection.eachRow(view.onRowSelect, view);
                }
                else if (selection.isColumns) {
                    selection.eachCell(view.onCellSelect, view);
                }
                else if (selection.isCells) {
                    selection.eachCell(view.onCellSelect, view);
                }
            }
        },
        updateRows: function(rows) {
            var sel;
            if (!rows) {
                this.setCheckbox(false);
                sel = this.getSelection();
                if (sel && sel.isRows) {
                    sel.clear();
                }
            }
        },
        updateColumns: function(columns) {
            var me = this,
                view = me.getView(),
                sel = me.getSelection();
            if (!columns && sel && sel.isColumns) {
                sel.clear();
                me.fireSelectionChange();
            }
            view.toggleCls(me.columnSelectCls, !!columns);
        },
        updateCells: function(cells) {
            var me = this,
                sel = me.getSelection();
            if (!cells && sel && sel.isCells) {
                sel.clear();
                me.fireSelectionChange();
            }
        },
        updateMode: function(mode) {
            if (mode === 'multi') {
                this.setDrag(this.getInitialConfig().drag);
            }
            else if (!this.isConfiguring) {
                this.setDrag(false);
            }
        },
        fireSelectionChange: function(records, selecting) {
            var me = this,
                view = me.getView(),
                sel = me.getSelection();
            me.updateSelectionExtender();
            me.fireEvent('selectionchange', view, me.getSelection());
            if (sel.isCells) {
                view.fireEvent('selectionchange', view, sel.getRange(), selecting, sel);
            } else {
                view.fireEvent('selectionchange', view, sel.isRecords ? records : (sel.isCells ? sel.getRecords() : null), selecting, me.getSelection());
            }
        },
        updateSelectionExtender: function() {
            var sel = this.getSelection();
            if (sel) {
                sel.onSelectionFinish();
            }
        },
        onSelectionFinish: function(sel, firstCell, lastCell) {
            var extensible = this.getExtensible();
            if (extensible) {
                extensible.setHandle(firstCell, lastCell);
            }
        },
        applyExtensible: function(extensible, oldExtensible) {
            var me = this,
                axes;
            if (!extensible) {
                return undefined;
            }
            if (extensible === true || typeof extensible === 'string') {
                axes = me.axesConfigs[extensible];
                if (oldExtensible) {
                    oldExtensible.setAxes(axes);
                    return oldExtensible;
                }
                extensible = {
                    axes: axes
                };
            } else {
                extensible = Ext.Object.chain(extensible);
            }
            extensible.allowReduceSelection = me.getReducible();
            extensible.view = me.getView();
            if (oldExtensible) {
                oldExtensible.destroy();
            }
            return new Ext.grid.selection.SelectionExtender(extensible);
        },
        applyReducible: function(reducible) {
            return !!reducible;
        },
        updateReducible: function(reducible) {
            var extensible;
            extensible = this.getConfig('extensible', null, true);
            if (extensible) {
                extensible.allowReduceSelection = reducible;
            }
        },
        applyCheckbox: function(checkbox) {
            var me = this;
            if (checkbox) {
                me.checkboxOnly = checkbox === 'only';
                me.checkboxColumn = checkbox = Ext.create(me.createCheckboxColumn(me.getCheckboxDefaults()));
            }
            return checkbox;
        },
        updateCheckbox: function(checkbox, oldCheckbox) {
            var me = this,
                view;
            if (!me.isConfiguring) {
                view = me.getView();
                if (oldCheckbox) {
                    view.unregisterColumn(oldCheckbox, true);
                }
                if (checkbox) {
                    view.registerColumn(checkbox);
                    me.setRows(true);
                }
            }
        },
        applyView: function(view) {
            return view.ownerGrid;
        },
        extendSelection: function(extension) {
            var me = this,
                view = me.getView(),
                sel = me.getSelection(),
                action = extension.reduce ? 'reduce' : 'extend';
            if (view.fireEvent('beforeselectionextend', view, sel, extension) !== false) {
                sel[action + 'Range'](extension);
                if (!sel.isRows) {
                    me.fireSelectionChange();
                }
            }
        },
        onIdChanged: function(store, rec, oldId, newId) {
            var sel = this.getSelection();
            if (sel && sel.isRecords) {
                sel.getSelected().updateKey(rec, oldId);
            }
        },
        onSelectionStoreAdd: function() {
            this.callParent(arguments);
            this.updateHeaderState();
        },
        onSelectionStoreClear: function() {
            this.callParent(arguments);
            this.updateHeaderState();
        },
        onSelectionStoreLoad: function() {
            this.callParent(arguments);
            this.updateHeaderState();
        }
    }
}, function(GridModel) {
    var RowNumberer = Ext.ClassManager.get('Ext.grid.column.RowNumberer'),
        cellCls;
    if (RowNumberer) {
        cellCls = Ext.grid.column.RowNumberer.prototype.cellCls;
        GridModel.prototype.rowNumbererCellCls = (cellCls ? (cellCls + ' ') : '') + Ext.baseCSSPrefix + 'selmodel-row-numberer-cell';
    }
});

Ext.define('Ext.grid.plugin.ColumnResizing', {
    extend: Ext.Component,
    alias: [
        'plugin.columnresizing',
        'plugin.gridcolumnresizing'
    ],
    config: {
        grid: null,
        realtime: false
    },
    hasResizingCls: Ext.baseCSSPrefix + 'has-columnresizing',
    resizingCls: Ext.baseCSSPrefix + 'resizing',
    columnSelector: '.' + Ext.baseCSSPrefix + 'gridcolumn',
    resizerSelector: '.' + Ext.baseCSSPrefix + 'gridcolumn .' + Ext.baseCSSPrefix + 'resizer-el',
    init: function(grid) {
        this.setGrid(grid);
        grid.getHeaderContainer().setTouchAction({
            panX: false
        });
    },
    updateGrid: function(grid, oldGrid) {
        var me = this,
            cls = me.hasResizingCls,
            headerContainer, resizeMarker;
        if (oldGrid) {
            headerContainer = oldGrid.getHeaderContainer();
            headerContainer.renderElement.un({
                touchstart: 'onContainerTouchStart',
                scope: me,
                priority: 100
            });
            oldGrid.removeCls(cls);
        }
        if (grid) {
            me._resizeMarker = resizeMarker = grid.resizeMarkerElement;
            me._resizeMarkerParent = resizeMarker.parent();
            headerContainer = grid.getHeaderContainer();
            headerContainer.renderElement.on({
                touchstart: 'onContainerTouchStart',
                scope: me
            });
            grid.addCls(cls);
        }
    },
    onContainerTouchStart: function(e) {
        var me = this,
            gridHeader = me.getGrid().getHeaderContainer(),
            target = e.getTarget(me.columnSelector),
            resizer = e.getTarget(me.resizerSelector),
            column;
        if (resizer && !e.multitouch && target && !me._resizeColumn) {
            column = Ext.Component.from(target);
            if (column && column.getResizable()) {
                me._startColumnWidth = column.getComputedWidth();
                me._minColumnWidth = column.getMinWidth();
                me._maxColumnWidth = column.getMaxWidth();
                me._resizeColumn = column;
                me._startX = e.getX();
                column.addCls(me.resizingCls);
                gridHeader.renderElement.suspendEvent('drag', 'longpress');
                if (!this.getRealtime()) {
                    me._resizeMarker.show();
                    me._resizeMarker.setLeft(column.el.getOffsetsTo(me._resizeMarkerParent)[0] + me._startColumnWidth);
                } else {
                    column.setWidth(me._startColumnWidth);
                }
                me.touchListeners = Ext.getBody().on({
                    touchEnd: 'onTouchEnd',
                    touchMove: 'onTouchMove',
                    scope: me,
                    destroyable: true
                });
            }
        } else if (e.multitouch && me._resizeColumn) {
            me.endResize();
        }
    },
    onTouchMove: function(e) {
        var me = this,
            column = me._resizeColumn,
            resizeAmount;
        if (e.isMultitouch) {
            me.endResize();
        } else if (column) {
            resizeAmount = e.getX() - me._startX;
            me.currentColumnWidth = Math.max(Math.ceil(me._startColumnWidth + resizeAmount), me._minColumnWidth);
            if (me._maxColumnWidth) {
                me.currentColumnWidth = Math.min(me.currentColumnWidth, me._maxColumnWidth);
            }
            if (me.getRealtime()) {
                column.setWidth(me.currentColumnWidth);
                column.renderElement.setWidth(me.currentColumnWidth);
            } else {
                me._resizeMarker.setLeft(column.el.getOffsetsTo(me._resizeMarkerParent)[0] + me.currentColumnWidth);
            }
            column.resizing = true;
            e.claimGesture();
        }
    },
    onTouchEnd: function(e) {
        var column = this._resizeColumn,
            hasResized = e.getX() !== this._startX;
        Ext.destroy(this.touchListeners);
        if (column) {
            this.endResize();
            if (!hasResized) {
                column.onResizerTap(e);
            }
        }
    },
    endResize: function() {
        var me = this,
            column = me._resizeColumn,
            grid = me.getGrid();
        if (column) {
            if (!me.getRealtime()) {
                grid.resizeMarkerElement.hide();
            }
            if (me.currentColumnWidth) {
                column.setFlex(null);
                if (column.resizing) {
                    column.setWidth(me.currentColumnWidth);
                    column.resizing = false;
                } else if (me._resizeColumn.getWidth() === me._startColumnWidth) {
                    column.setWidth(me._startColumnWidth);
                }
            }
            column.removeCls(me.resizingCls);
            me._resizeColumn = null;
        }
    }
});

Ext.define('Ext.grid.plugin.HeaderReorder', {
    extend: Ext.plugin.dd.DragDrop,
    alias: 'plugin.headerreorder',
    config: {
        grid: null
    },
    handle: '.' + Ext.baseCSSPrefix + 'gridcolumn',
    groups: 'gridHeaderGroup',
    dropIndicator: Ext.baseCSSPrefix + 'grid-column-drop-indicator',
    updateGrid: function(grid, oldGrid) {
        var me = this;
        if (oldGrid) {
            me.dragZone = me.dropZone = Ext.destroy(me.dragZone, me.dropZone);
        }
        if (grid) {
            me.initializeDrag(grid);
        }
    },
    initializeDrag: function(view) {
        var me = this,
            headerCt = view.getHeaderContainer(),
            dragZone = {};
        if (me.enableDrag) {
            if (me.proxy) {
                dragZone.proxy = me.proxy;
            }
            if (me.activateOnLongPress) {
                dragZone.activateOnLongPress = me.activateOnLongPress;
            }
            me.dragZone = new Ext.grid.HeaderDragZone(Ext.apply({
                element: headerCt.bodyElement,
                handle: me.handle,
                groups: me.groups,
                view: view,
                constrain: Ext.getBody()
            }, dragZone));
        }
        if (me.enableDrop) {
            me.dropZone = new Ext.grid.HeaderDropZone({
                element: headerCt.el,
                groups: me.groups,
                view: view,
                dropIndicator: me.dropIndicator
            });
        }
    }
});

Ext.define('Ext.grid.RowHeader', {
    extend: Ext.dataview.ItemHeader,
    xtype: 'rowheader',
    classCls: Ext.baseCSSPrefix + 'rowheader',
    isRowHeader: true,
    toolDefaults: {
        ui: 'itemheader rowheader'
    },
    privates: {
        augmentToolHandler: function(tool, args) {
            this.callParent([
                tool,
                args
            ]);
            args[1].grid = args[1].list;
        },
        getGroupHeaderTplData: function() {
            var data = this.callParent([
                    true
                ]),
                grid = this.parent,
                partners = grid.allPartners || [
                    grid
                ],
                len = partners.length,
                i, p, column;
            if (data) {
                for (i = 0; i < len; ++i) {
                    p = partners[i];
                    column = p.getColumnForField(data.groupField);
                    if (column) {
                        break;
                    }
                }
            }
            if (column) {
                data.columnName = column.getText();
                if (column.printValue) {
                    data.html = column.printValue(data.value);
                }
            } else if (data) {
                data.html = Ext.htmlEncode(data.name);
            }
            return data;
        }
    }
});

Ext.define('Ext.grid.Grid', {
    extend: Ext.dataview.List,
    xtype: 'grid',
    isGrid: true,
    mixins: [
        Ext.mixin.ConfigProxy
    ],
    storeEventListeners: {
        sort: 'onStoreSort'
    },
    config: {
        columns: null,
        columnMenu: {
            cached: true,
            $value: {
                xtype: 'menu',
                weighted: true,
                align: 'tl-bl?',
                hideOnParentHide: false,
                items: {
                    sortAsc: {
                        xtype: 'gridsortascmenuitem',
                        group: 'sortDir',
                        weight: -100
                    },
                    sortDesc: {
                        xtype: 'gridsortdescmenuitem',
                        group: 'sortDir',
                        weight: -90
                    },
                    groupByThis: {
                        xtype: 'gridgroupbythismenuitem',
                        handler: 'column.onGroupByThis',
                        separator: true,
                        weight: -50
                    },
                    showInGroups: {
                        xtype: 'gridshowingroupsmenuitem',
                        handler: 'column.onToggleShowInGroups',
                        weight: -40
                    }
                }
            }
        },
        columnResize: true,
        headerContainer: {
            xtype: 'headercontainer'
        },
        hideHeaders: false,
        enableColumnMove: true,
        hideScrollbar: null,
        itemsFocusable: false,
        title: '',
        titleBar: {
            xtype: 'titlebar',
            docked: 'top'
        },
        sortable: true,
        multiColumnSort: false,
        columnsMenuItem: {
            lazy: true,
            $value: {
                xtype: 'gridcolumnsmenu',
                weight: -80,
                separator: true
            }
        },
        columnLines: null,
        rowNumbers: null
    },
    itemConfig: {
        xtype: 'gridrow'
    },
    groupHeader: {
        xtype: 'rowheader'
    },
    infinite: true,
    navigationModel: 'grid',
    pinnedHeader: {
        xtype: 'rowheader'
    },
    scrollable: true,
    scrollToTopOnRefresh: false,
    striped: true,
    proxyConfig: {
        headerContainer: [
            'reserveScrollbar'
        ]
    },
    selectionModel: 'grid',
    classCls: Ext.baseCSSPrefix + 'grid',
    columnLinesCls: Ext.baseCSSPrefix + 'column-lines',
    getTemplate: function() {
        var template = this.callParent();
        template.push({
            reference: 'resizeMarkerElement',
            className: Ext.baseCSSPrefix + 'resize-marker-el',
            hidden: true
        });
        return template;
    },
    beforeInitialize: function() {
        this.ownerGrid = this;
        this.callParent();
    },
    initialize: function() {
        var me = this,
            columns = me.getColumns(),
            persist = me.registeredColumns,
            titleBar = me.getTitleBar(),
            headerContainer = me.getHeaderContainer(),
            scroller = me.getScrollable(),
            selectable = me.getSelectable();
        me.callParent();
        if (scroller) {
            headerContainer.getScrollable().addPartner(scroller, 'x');
        }
        if (titleBar) {
            me.insert(0, titleBar);
        }
        me.add(headerContainer);
        if (selectable) {
            selectable.onViewCreated(me);
        }
        if (!columns.length && persist && persist.length) {
            headerContainer.add(persist);
        }
    },
    doDestroy: function() {
        this.destroyMembers('columnsMenu', 'columnsMenuItem', 'rowNumbererColumn');
        this.callParent();
    },
    addColumn: function(column) {
        return this.getHeaderContainer().add(column);
    },
    addSharedMenuItem: function(sharedItem) {
        (this.sharedMenuItems || (this.sharedMenuItems = [])).push(sharedItem);
    },
    removeSharedMenuItem: function(sharedItem) {
        var sharedMenuItems = this.sharedMenuItems;
        if (sharedMenuItems) {
            Ext.Array.remove(sharedMenuItems, sharedItem);
        }
    },
    beforeShowColumnMenu: function(column, menu) {
        var me = this,
            i, n, item, sharedMenuItems;
        me.getColumnsMenuItem();
        sharedMenuItems = me.sharedMenuItems;
        for (i = 0 , n = sharedMenuItems && sharedMenuItems.length; i < n; ++i) {
            item = sharedMenuItems[i];
            item.onBeforeShowColumnMenu(menu, column, me);
        }
        return me.fireEvent('beforeshowcolumnmenu', me, column, menu);
    },
    onColumnMenuHide: function(column, menu) {
        var me = this,
            sharedMenuItems = me.sharedMenuItems,
            n = sharedMenuItems && sharedMenuItems.length,
            i, item;
        for (i = 0; i < n; ++i) {
            item = sharedMenuItems[i];
            if (!item.destroyed && !item.destroying && !menu.isHidden()) {
                item.onColumnMenuHide(menu, column, me);
            }
        }
    },
    getColumnForField: function(fieldName) {
        return this.getHeaderContainer().getColumnForField(fieldName);
    },
    getColumns: function(selector) {
        return this.getHeaderContainer().getColumns(selector);
    },
    getVisibleColumns: function() {
        return this.getHeaderContainer().getVisibleColumns();
    },
    insertColumn: function(index, column) {
        return this.getHeaderContainer().insert(index, column);
    },
    insertColumnBefore: function(column, before) {
        var ret;
        if (!before) {
            ret = this.getHeaderContainer().add(column);
        } else {
            ret = before.getParent().insertBefore(column, before);
        }
        return ret;
    },
    mapToCell: function(value, column) {
        var me = this,
            ret;
        if (value) {
            if (value.isGridCell && value.row.getGrid() === me) {
                ret = value;
            } else {
                if (value.isEntity) {
                    value = me.mapToItem(value);
                }
                if (value) {
                    if (value.isGridRow) {
                        column = column || me.getFirstVisibleColumn();
                        if (column) {
                            ret = value.getCellByColumn(column);
                        }
                    } else {
                        ret = Ext.Component.from(value, me.innerCt, 'gridcellbase');
                    }
                }
            }
        }
        return ret || null;
    },
    mapToItem: function(value, as) {
        if (value && value.isGridCell) {
            value = value.row;
        }
        return this.callParent([
            value,
            as
        ]);
    },
    mapToRowBody: function(value) {
        if (value) {
            if (!value.isGridRow) {
                value = this.mapToItem(value);
            }
            if (value && value.isGridRow) {
                value = value.getBody();
            }
        }
        return value || null;
    },
    removeColumn: function(column) {
        return this.getHeaderContainer().remove(column);
    },
    registerActionable: function(actionable) {
        this.getNavigationModel().registerActionable(actionable);
    },
    unregisterActionable: function(actionable) {
        this.getNavigationModel().unregisterActionable(actionable);
    },
    onColumnAdd: function(container, column, columnIndex) {
        var me = this,
            items, ln, i, row;
        if (!me.initializingColumns && !me.destroying) {
            items = me.items.items;
            ln = items.length;
            for (i = 0; i < ln; i++) {
                row = items[i];
                if (row.hasGridCells) {
                    row.insertColumn(columnIndex, column);
                }
            }
            me.onColumnChange('columnadd', [
                me,
                column,
                columnIndex
            ]);
        }
    },
    onColumnHide: function(container, column) {
        var me = this,
            items, ln, i, row;
        if (me.initialized && !me.destroying) {
            items = me.items.items;
            ln = items.length;
            for (i = 0; i < ln; i++) {
                row = items[i];
                if (row.hasGridCells) {
                    row.hideColumn(column);
                }
            }
            me.onColumnChange('columnhide', [
                me,
                column
            ]);
        }
    },
    onColumnMove: function(container, columns, group, fromIdx) {
        var me = this,
            before = null,
            colLen = columns.length,
            items, ln, i, j, row, column, index, leaves;
        if (me.initialized && !me.destroying) {
            items = me.items.items;
            ln = items.length;
            leaves = me.getHeaderContainer().getColumns();
            index = leaves.indexOf(columns[colLen - 1]);
            before = leaves[index + 1] || null;
            for (i = colLen - 1; i >= 0; --i) {
                column = columns[i];
                for (j = 0; j < ln; j++) {
                    row = items[j];
                    if (row.hasGridCells) {
                        row.insertColumnBefore(column, before);
                    }
                }
                me.onColumnChange('columnmove', [
                    me,
                    column,
                    fromIdx + i,
                    leaves.indexOf(column)
                ]);
                before = column;
            }
        }
    },
    onColumnRemove: function(container, column) {
        var me = this,
            items, ln, i, row;
        if (me.initialized && !me.destroying) {
            if (column === me.sortedColumn) {
                me.sortedColumn = null;
            }
            items = me.items.items;
            ln = items.length;
            for (i = 0; i < ln; i++) {
                row = items[i];
                if (row.hasGridCells) {
                    row.removeColumn(column);
                }
            }
            me.onColumnChange('columnremove', [
                me,
                column
            ]);
        }
    },
    onColumnResize: function(container, column, width, oldWidth) {
        var me = this;
        if (!me.destroying) {
            if (oldWidth && !column.getHidden()) {
                if (me.infinite) {
                    me.refreshScrollerSize();
                }
                me.fireEvent('columnresize', me, column, width);
            }
        }
    },
    onColumnShow: function(container, column) {
        var me = this,
            items, ln, i, row;
        if (me.initialized && !me.destroying) {
            items = me.items.items;
            ln = items.length;
            for (i = 0; i < ln; i++) {
                row = items[i];
                if (row.hasGridCells) {
                    row.showColumn(column);
                }
            }
            me.onColumnChange('columnshow', [
                me,
                column
            ]);
        }
    },
    onColumnSort: function(container, column, direction) {
        this.fireEvent('columnsort', this, column, direction);
    },
    onRender: function() {
        var hideHeaders = this._hideHeaders;
        this.callParent();
        if (hideHeaders) {
            this.updateHideHeaders(hideHeaders);
        }
    },
    privates: {
        dataItemMap: {
            header: 1,
            footer: 1
        },
        handleStoreSort: function() {
            if (this.rendered) {
                this.getHeaderContainer().setSortState();
            }
        },
        onStoreGroupChange: function(store, grouper) {
            this.callParent([
                store,
                grouper
            ]);
            this.handleStoreSort();
        },
        onStoreSort: function() {
            this.handleStoreSort();
        },
        registerColumn: function(column) {
            var me = this,
                columns = me.registeredColumns,
                headerCt = me.getHeaderContainer();
            if (!column.isGridColumn) {
                column = Ext.create(column);
            }
            if (!columns) {
                me.registeredColumns = columns = [];
            }
            columns.push(column);
            if (!me.isConfiguring || (headerCt && headerCt.items.getCount())) {
                headerCt.add(column);
            }
            return column;
        },
        unregisterColumn: function(column, destroy) {
            var columns = this.registeredColumns,
                headerCt = this.getHeaderContainer();
            if (!this.destroying) {
                if (columns) {
                    Ext.Array.remove(columns, column);
                }
                if (headerCt) {
                    headerCt.remove(column, destroy === true);
                }
            }
            return column;
        },
        generateSelectorFunctions: function() {
            var me = this;
            me.callParent();
            me.eventDelegate = function(candidate) {
                var comp = Ext.Component.from(candidate),
                    ret = true,
                    row;
                if (!comp || comp === me) {
                    return false;
                }
                if (comp.getRefOwner() === me) {
                    ret = comp.isGridRow || me.dataItemMap[comp.$dataItem];
                } else {
                    row = comp.row;
                    ret = row && row.isGridRow && (row.grid || row.list) === me;
                }
                return ret;
            };
        },
        getFirstVisibleColumn: function() {
            var columns = this.getVisibleColumns();
            return columns.length ? columns[0] : null;
        },
        getLastVisibleColumn: function() {
            var columns = this.getVisibleColumns(),
                len = columns.length;
            return len ? columns[len - 1] : null;
        },
        isFirstVisibleColumn: function(column) {
            return this.getFirstVisibleColumn() === column;
        },
        isLastVisibleColumn: function(column) {
            return this.getLastVisibleColumn() === column;
        },
        createDataItem: function(cfg) {
            var item = this.callParent([
                    cfg
                ]);
            item.grid = this;
            return item;
        },
        onColumnChange: function(changeEvent, eventArgs) {
            var me = this;
            if (changeEvent !== 'columnmove' && changeEvent !== 'columnadd' && changeEvent !== 'columnremove') {
                me.refreshInnerWidth();
            }
            if (!me.isConfiguring) {
                me.fireEventArgs(changeEvent, eventArgs);
            }
            me.clearItemCaches();
        },
        refreshInnerWidth: function() {
            var body = this.getHeaderContainer().bodyElement.dom;
            this.setInnerWidth(Math.max(body.scrollWidth, body.clientWidth));
        },
        onColumnComputedWidthChange: function(changedColumns, totalColumnWidth) {
            var me = this,
                groupingInfo = me.groupingInfo;
            if (!me.destroying) {
                me.setInnerWidth(totalColumnWidth);
                me.setCellSizes(changedColumns, me.items.items);
                me.setCellSizes(changedColumns, me.itemCache);
                if (me.isGrouping()) {
                    me.setCellSizes(changedColumns, groupingInfo.header.unused);
                    me.setCellSizes(changedColumns, groupingInfo.footer.unused);
                }
                if (me.hasListeners.columnlayout) {
                    me.fireEvent('columnlayout', me, changedColumns, totalColumnWidth);
                }
            }
        },
        onCellSelect: function(location) {
            var cell = location.getCell();
            if (cell) {
                cell.addCls(this.selectedCls);
            }
        },
        onCellDeselect: function(location) {
            var cell = location.getCell();
            if (cell) {
                cell.removeCls(this.selectedCls);
            }
        },
        setCellSizes: function(changedColumns, items) {
            var len = items.length,
                changedColCount = changedColumns.length,
                row, i, j;
            for (i = 0; i < len; i++) {
                row = items[i];
                if (row.hasGridCells) {
                    for (j = 0; j < changedColCount; j++) {
                        row.setColumnWidth(changedColumns[j]);
                    }
                }
            }
        },
        updateColumnLines: function(columnLines) {
            this.el.toggleCls(this.columnLinesCls, columnLines);
        },
        updateColumnResize: function(enabled) {
            var me = this,
                plugin = me.findPlugin('columnresizing');
            if (!plugin) {
                if (enabled) {
                    me.addPlugin('columnresizing');
                }
            } else {
                plugin.setGrid(enabled ? me : null);
            }
        },
        updateColumns: function(columns) {
            var me = this,
                header = me.getHeaderContainer(),
                count = columns && columns.length,
                persist = me.registeredColumns;
            if (header) {
                me.rowHeight = null;
                if (header) {
                    header.beginColumnUpdate();
                    if (header.getItems().getCount()) {
                        if (persist) {
                            header.remove(persist, false);
                        }
                        if (count) {
                            header.remove(columns.filter(function(col) {
                                return col.isInstance;
                            }), false);
                        }
                        header.removeAll(true, true);
                    }
                    if (count) {
                        me.initializingColumns = me.isConfiguring;
                        header.setColumns(columns);
                        if (persist) {
                            header.add(persist);
                        }
                        delete me.initializingColumns;
                    }
                    header.endColumnUpdate();
                }
            }
        },
        applyRowNumbers: function(rowNumbers) {
            var me = this;
            if (rowNumbers) {
                rowNumbers = me.rowNumbererColumn = Ext.create(Ext.apply({
                    xtype: 'rownumberer',
                    weight: -1000,
                    editRenderer: me.renderEmpty
                }, rowNumbers));
            }
            return rowNumbers;
        },
        updateRowNumbers: function(rowNumbers, oldRowNumbers) {
            if (oldRowNumbers) {
                this.unregisterColumn(oldRowNumbers, true);
            }
            if (rowNumbers) {
                this.registerColumn(rowNumbers);
            }
        },
        renderEmpty: function() {
            return '\xa0';
        },
        applyColumnsMenuItem: function(config, existing) {
            return Ext.updateWidget(existing, config, this, 'createColumnsMenuItem');
        },
        createColumnsMenuItem: function(config) {
            return Ext.apply({
                grid: this
            }, config);
        },
        applyHeaderContainer: function(config, existing) {
            return Ext.updateWidget(existing, config, this, 'createHeaderContainer');
        },
        createHeaderContainer: function(config) {
            config = this.mergeProxiedConfigs('headerContainer', config, true);
            config.sortable = this.getSortable();
            config.grid = this;
            return config;
        },
        updateHeaderContainer: function(headerContainer) {
            if (headerContainer) {
                headerContainer.on({
                    columnresize: 'onColumnResize',
                    columnshow: 'onColumnShow',
                    columnhide: 'onColumnHide',
                    columnadd: 'onColumnAdd',
                    columnmove: 'onColumnMove',
                    columnremove: 'onColumnRemove',
                    columnsort: 'onColumnSort',
                    scope: this
                });
            }
        },
        updateHideHeaders: function(hideHeaders) {
            if (this.rendered) {
                var headerContainer = this.getHeaderContainer();
                if (hideHeaders) {
                    headerContainer.el.setStyle({
                        marginBottom: '-' + headerContainer.el.measure('h') + 'px'
                    });
                } else {
                    headerContainer.el.setStyle({
                        marginBottom: ''
                    });
                }
            }
        },
        updateHideScrollbar: function(hide) {
            var w = Ext.scrollbar.width();
            this.element.setStyle('margin-right', hide ? -w + 'px' : '');
        },
        updateTitle: function(title) {
            var titleBar = this.getTitleBar();
            if (titleBar) {
                if (title) {
                    titleBar.setTitle(title);
                    if (titleBar.isHidden()) {
                        titleBar.show();
                    }
                } else {
                    titleBar.hide();
                }
            }
        },
        applyTitleBar: function(config, existing) {
            return Ext.updateWidget(existing, config);
        },
        updateTitleBar: function(titleBar) {
            if (titleBar && !titleBar.getTitle()) {
                titleBar.setTitle(this.getTitle());
            }
        },
        applyTotalColumnWidth: function(totalColumnWidth) {
            var rows = this.dataItems;
            return rows.length === 0 ? undefined : totalColumnWidth;
        },
        updateVerticalOverflow: function(value, was) {
            var headerContainer = this.getHeaderContainer(),
                summaryRow = this.findPlugin('summaryrow') || this.findPlugin('gridsummaryrow'),
                scrollable = this.getScrollable(),
                verticalScrollbarWidth = scrollable && scrollable.getScrollbarSize().width,
                y = !!(scrollable && scrollable.getY()),
                addOverflow = y && verticalScrollbarWidth > 0 && value,
                row;
            this.callParent([
                value,
                was
            ]);
            headerContainer.setVerticalOverflow(addOverflow);
            if (summaryRow) {
                row = summaryRow.getRow();
                if (!row.destroyed) {
                    row.rightSpacer.setStyle({
                        width: (addOverflow ? (verticalScrollbarWidth - 1) : 0) + 'px'
                    });
                }
            }
        },
        updateEnableColumnMove: function(enabled) {
            var me = this,
                plugin = me.findPlugin('headerreorder');
            if (!plugin && enabled) {
                plugin = me.addPlugin('headerreorder');
            }
            if (plugin) {
                plugin.setGrid(enabled ? me : null);
            }
        },
        getSelection: function() {
            var me = this,
                selectable = me.getSelectable(),
                selection = selectable.getSelection(),
                selectionType = selection.type;
            if (selectionType === 'columns') {
                return selection.lastColumnSelected;
            }
            if (selectionType === 'cells') {
                return selection.endCell && selection.endCell.record;
            }
            return this.callParent();
        }
    }
}, function(Grid) {
    Grid.prototype.indexModifiedFields = Ext.Array.toMap;
});

Ext.define('Ext.grid.GridDragZone', {
    extend: Ext.plugin.dd.DragZone,
    getViewScrollable: function() {
        var me = this,
            view = me.view,
            scroller = view.getScrollable(),
            item, grid;
        if (!scroller) {
            if (view.isLockedGrid) {
                if (me.ddRow) {
                    item = me.ddRow;
                } else {
                    item = Ext.dd.Manager.getTargetComp(me.info);
                }
                if (item && item.getGrid) {
                    grid = item.getGrid();
                }
                if (grid) {
                    scroller = grid.getScrollable();
                }
            }
        }
        return scroller;
    },
    toggleDragMarker: function(rows, state) {
        var ddManager = Ext.dd.Manager,
            view = this.view,
            row, i;
        for (i = 0; i < rows.length; i++) {
            row = rows[i];
            if (!row.isDestroyed) {
                if (!state) {
                    delete row.isDragging;
                    delete row.draggingRecordId;
                    delete row.dragMarkerCls;
                }
                ddManager.toggleMarkerCls(view, row, this.dragMarkerCls, state);
            }
        }
    },
    getDraggingRows: function(info) {
        var data = info.data.dragData,
            records = data.records || [],
            view = this.view,
            rows = [],
            i, row;
        for (i = 0; i < records.length; i++) {
            row = null;
            if (view.isLockedGrid && view.visibleGrids.length) {
                row = view.visibleGrids[0].itemFromRecord(records[i]);
            } else {
                row = view.itemFromRecord(records[i]);
            }
            if (row) {
                row.isDragging = true;
                row.draggingRecordId = records[i].id;
                row.dragMarkerCls = this.dragMarkerCls;
                rows.push(row);
            }
        }
        return rows;
    },
    onDragStart: function(info) {
        var me = this,
            scroller = me.getViewScrollable();
        if (scroller && scroller.isVirtualScroller) {
            scroller.setDisabled(true);
        }
        if (me.containerScroll) {
            Ext.dd.ScrollManager.scrollTowardsPointer.apply(me, [
                me.view
            ]);
        }
        me.rows = me.getDraggingRows(info);
        me.toggleDragMarker(me.rows, true);
    },
    onDragEnd: function() {
        var me = this,
            scroller = me.getViewScrollable();
        if (scroller && scroller.isVirtualScroller) {
            scroller.setDisabled(false);
        }
        if (me.containerScroll) {
            Ext.dd.ScrollManager.stopAutoScroller.apply(me);
        }
        me.onDragCancel();
    },
    onDragCancel: function() {
        this.toggleDragMarker(this.rows, false);
        this.rows = null;
    },
    getDragData: function(e) {
        var view = this.view,
            cell = Ext.Component.from(e, view),
            selections, record, selectionIndex;
        if (!cell) {
            return;
        }
        record = cell.getRecord();
        selections = view.getSelections();
        if (selections) {
            selectionIndex = selections.indexOf(record);
            record = (selectionIndex !== -1) ? selections : record;
        }
        return {
            eventTarget: e,
            view: view,
            item: cell,
            records: Ext.Array.from(record)
        };
    },
    getDragText: function(info) {
        var data = info.data.dragData,
            count = data.records.length;
        if (Ext.isFunction(this.dragText)) {
            return this.dragText(count, info);
        }
        return Ext.String.format(this.dragText, count, count === 1 ? '' : Ext.util.Inflector.pluralize(''));
    }
});

Ext.define('Ext.grid.GridDropZone', {
    extend: Ext.plugin.dd.DropZone,
    onDragMove: function(info) {
        var me = this,
            ddManager = Ext.dd.Manager,
            targetCmp = ddManager.getTargetComp(info),
            ddRecords, isSameGroup, highlight, store, targetRecord, isValidTarget, positionCls;
        highlight = ddManager.getPosition(info, targetCmp);
        positionCls = me.dropMarkerCls + '-' + highlight;
        if (!targetCmp || targetCmp.hasCls(positionCls)) {
            return;
        }
        if (targetCmp.getRecord) {
            targetRecord = targetCmp.getRecord();
        }
        isSameGroup = Ext.Array.intersect(me.getGroups(), info.source.getGroups()).length;
        if (!targetRecord || !isSameGroup) {
            if (targetCmp.getStore) {
                store = targetCmp.getStore();
            }
            if (!store || (store && store.getCount() > 0)) {
                return;
            }
        }
        ddRecords = info.data.dragData.records;
        isValidTarget = ddRecords.indexOf(targetRecord) === -1;
        if (me.ddEl) {
            me.removeDropMarker();
        }
        if (isValidTarget) {
            me.addDropMarker(targetCmp, [
                me.dropIndicator,
                positionCls
            ]);
            me.ddEl = targetCmp;
        }
    },
    onDrop: function(info) {
        var me = this,
            draggedData, position, targetNode, targetComponent, targetRecord, component;
        if (!me.ddEl) {
            return;
        }
        draggedData = info.data.dragData;
        position = me.ddEl.hasCls(me.dropMarkerCls + '-before') ? 'before' : 'after';
        targetNode = Ext.dd.Manager.getTargetComp(info);
        if (targetNode.isGridRow) {
            targetComponent = targetNode.parent;
        }
        targetRecord = targetNode.getRecord();
        component = me.view;
        if (component.fireEvent('beforedrop', targetNode, draggedData, targetRecord, position) !== false) {
            me.onNodeDrop(draggedData, targetRecord, position, targetComponent || component);
            component.fireEvent('drop', targetNode, draggedData, targetRecord, position);
        }
        me.removeDropMarker();
    },
    onNodeDrop: function(data, record, position, targetComponent) {
        var sourceView = data.view,
            targetStore = targetComponent.getStore(),
            crossView = targetComponent !== sourceView,
            records = data.records,
            removeRecord = crossView || records.length > 1,
            index, i, len, selModel, selectable;
        if (this.copy) {
            len = records.length;
            for (i = 0; i < len; i++) {
                records[i] = records[i].copy();
            }
        } else if (removeRecord) {
            sourceView.getStore().remove(records);
        }
        if (record && position) {
            index = targetStore.indexOf(record);
            if (position !== 'before') {
                index++;
            }
            targetStore.insert(index, records);
        } else {
            targetStore.add(records);
        }
        if (removeRecord) {
            selectable = targetComponent.getSelectable();
            selModel = selectable.getSelection().getSelectionModel();
            selModel.select(records);
        }
    },
    addDropMarker: function(targetNode, positionCls) {
        var me = this,
            ddManager = Ext.dd.Manager;
        ddManager.toggleProxyCls(me.info, me.validDropCls, true);
        ddManager.toggleMarkerCls(me.view, targetNode, positionCls, true);
        if (me.overCls) {
            ddManager.toggleTargetNodeCls(targetNode, me.overCls, true);
        }
    },
    removeDropMarker: function() {
        var me = this,
            prefix = me.dropMarkerCls + '-',
            ddManager = Ext.dd.Manager,
            cls;
        if (me.info) {
            ddManager.toggleProxyCls(me.info, me.validDropCls, false);
        }
        if (me.ddEl) {
            cls = [
                me.dropIndicator,
                prefix + 'before',
                prefix + 'after'
            ];
            ddManager.toggleMarkerCls(me.view, me.ddEl, cls, false);
            if (me.overCls) {
                ddManager.toggleTargetNodeCls(me.ddEl, me.overCls, false);
            }
            me.ddEl = null;
        }
    }
});

Ext.define('Ext.grid.HeaderDragZone', {
    extend: Ext.plugin.dd.DragZone,
    autoDestroy: false,
    resizerCls: Ext.baseCSSPrefix + 'resizer-el',
    maskCls: Ext.baseCSSPrefix + 'mask',
    beforeDragStart: function(info) {
        var targetCmp = Ext.dd.Manager.getSourceComp(info),
            targetEl = targetCmp.renderElement,
            hoveredNodeEl = Ext.dd.Manager.getTargetEl(info),
            isDragSuspended = targetEl.isSuspended('drag') || targetEl.isSuspended('longpress');
        if (isDragSuspended || targetCmp.isDragColumn || targetCmp.getDraggable() === false || Ext.fly(info.eventTarget).hasCls(this.resizerCls) || Ext.fly(hoveredNodeEl).hasCls(this.maskCls)) {
            return false;
        }
        this.callParent([
            info
        ]);
    },
    getDragText: function(info) {
        var targetCmp = Ext.dd.Manager.getTargetComp(info);
        return targetCmp.getText();
    }
});

Ext.define('Ext.grid.HeaderDropZone', {
    extend: Ext.grid.GridDropZone,
    dropMarkerCls: Ext.baseCSSPrefix + 'header-drop-indicator',
    autoDestroy: false,
    isValidDrag: function(targetCmp, sourceCmp) {
        var info = this.info,
            cursor, prevSibling, nextSibling, box, diff;
        if (!!targetCmp.up(sourceCmp)) {
            return false;
        }
        cursor = info.cursor.current;
        prevSibling = sourceCmp.previousSibling();
        nextSibling = sourceCmp.nextSibling();
        if (targetCmp === prevSibling) {
            box = prevSibling.element.getBox();
            diff = (cursor.x - box.left) / box.width;
            if (diff > 0.5) {
                return false;
            }
        } else if (targetCmp === nextSibling) {
            box = nextSibling.element.getBox();
            diff = (cursor.x - box.left) / box.width;
            if (diff <= 0.5) {
                return false;
            }
        }
        return true;
    },
    onDragMove: function(info) {
        var me = this,
            ddManager = Ext.dd.Manager,
            targetCmp = ddManager.getTargetComp(info),
            isDragTarget = targetCmp.isDragColumn,
            sourceCmp = ddManager.getSourceComp(info),
            notHeader = !targetCmp.isHeaderContainer || !sourceCmp.isHeaderContainer,
            highlight, positionCls;
        if (notHeader || targetCmp === sourceCmp || isDragTarget || targetCmp.getParent() === me.view) {
            if (this.ddEl) {
                this.removeDropMarker();
            }
            return;
        }
        highlight = ddManager.getPosition(info, targetCmp, 'x');
        positionCls = me.dropMarkerCls + '-' + highlight;
        if (targetCmp.hasCls(positionCls)) {
            return;
        }
        if (this.ddEl) {
            this.removeDropMarker();
        }
        if (me.isValidDrag(targetCmp, sourceCmp)) {
            me.ddEl = targetCmp;
            me.addDropMarker(targetCmp, [
                me.dropIndicator,
                positionCls
            ]);
        }
    },
    trackHeaderMove: function(header, headerCt) {
        var parentCt;
        if (!header || header === headerCt || header.innerItems.length) {
            return;
        }
        parentCt = header.getParent();
        parentCt.remove(header);
        this.trackHeaderMove(parentCt, headerCt);
    },
    onDrop: function(info) {
        var me = this,
            dropMethod = 'insertBefore',
            ddManager, targetCmp, headerCt, sourceCmp, dropAt, position, relativeToItem, fromCtRoot, fromIdx, sourceCmpParent;
        if (!me.ddEl) {
            return;
        }
        ddManager = Ext.dd.Manager;
        targetCmp = ddManager.getTargetComp(info);
        headerCt = targetCmp.getParent() || targetCmp.getRootHeaderCt();
        sourceCmp = ddManager.getSourceComp(info);
        fromCtRoot = sourceCmp.getRootHeaderCt();
        fromIdx = fromCtRoot.indexOf(sourceCmp);
        dropAt = headerCt.indexOf(targetCmp);
        position = ddManager.getPosition(info, targetCmp, 'x');
        sourceCmpParent = sourceCmp.getParent();
        me.removeDropMarker();
        if (dropAt === -1) {
            return;
        }
        if (position === 'after') {
            relativeToItem = headerCt.getAt(dropAt + 1);
            if (!relativeToItem) {
                dropMethod = 'insertAfter';
                relativeToItem = targetCmp;
            }
        } else {
            relativeToItem = headerCt.getAt(dropAt);
        }
        headerCt[dropMethod](sourceCmp, (relativeToItem || null));
        me.trackHeaderMove(sourceCmpParent, fromCtRoot);
        fromCtRoot.fireEvent('move', fromCtRoot, sourceCmp, dropAt, fromIdx);
    }
});

Ext.define('Ext.grid.PagingToolbar', {
    extend: Ext.Toolbar,
    xtype: 'pagingtoolbar',
    classCls: Ext.baseCSSPrefix + 'pagingtoolbar',
    config: {
        prevButton: {
            xtype: 'button',
            iconCls: Ext.baseCSSPrefix + 'pagingtoolbar-prev'
        },
        nextButton: {
            xtype: 'button',
            iconCls: Ext.baseCSSPrefix + 'pagingtoolbar-next'
        },
        sliderField: {
            xtype: 'singlesliderfield',
            liveUpdate: true,
            value: 1,
            flex: 1,
            minValue: 1
        },
        summaryComponent: {
            xtype: 'component',
            cls: Ext.baseCSSPrefix + 'pagingtoolbar-summary'
        }
    },
    inheritUi: true,
    initialize: function() {
        var me = this;
        me.callParent();
        me.add([
            me.getPrevButton(),
            me.getSummaryComponent(),
            me.getSliderField(),
            me.getNextButton()
        ]);
    },
    applyPrevButton: function(prevButton, oldPrevButton) {
        return Ext.factory(prevButton, Ext.Button, oldPrevButton);
    },
    applyNextButton: function(nextButton, oldNextButton) {
        return Ext.factory(nextButton, Ext.Button, oldNextButton);
    },
    applySliderField: function(sliderField, oldSliderField) {
        return Ext.factory(sliderField, Ext.field.SingleSlider, oldSliderField);
    },
    applySummaryComponent: function(summaryComponent, oldSummaryComponent) {
        return Ext.factory(summaryComponent, Ext.Component, oldSummaryComponent);
    }
});

Ext.define('Ext.grid.SummaryRow', {
    extend: Ext.grid.Row,
    xtype: 'gridsummaryrow',
    isSummaryRow: true,
    config: {
        group: null
    },
    defaultCellUI: 'summary',
    classCls: Ext.baseCSSPrefix + 'summaryrow',
    element: {
        reference: 'element',
        children: [
            {
                reference: 'cellsElement',
                className: Ext.baseCSSPrefix + 'cells-el'
            },
            {
                reference: 'rightSpacer',
                className: Ext.baseCSSPrefix + 'cells-el-right-spacer'
            }
        ]
    },
    updateGroup: function() {
        this.syncSummary();
    },
    privates: {
        beginRefresh: function(context) {
            var me = this,
                group = me.getGroup();
            context = me.callParent([
                context
            ]);
            context.group = group;
            context.records = (group ? group.data : context.store.data).items;
            context.summary = true;
            return context;
        },
        syncSummary: function() {
            var me = this,
                owner = me.getGroup() || me.parent.store,
                record = owner.getSummaryRecord(),
                viewModel = me.getViewModel();
            if (record === me.getRecord()) {
                me.refresh();
            } else {
                me.setRecord(record);
                if (viewModel) {
                    viewModel.setData({
                        record: record
                    });
                }
            }
        }
    }
});

Ext.define('Ext.grid.cell.Boolean', {
    extend: Ext.grid.cell.Text,
    xtype: 'booleancell',
    isBooleanCell: true,
    config: {
        falseText: 'False',
        trueText: 'True',
        undefinedText: '\xa0'
    },
    updateColumn: function(column, oldColumn) {
        var text;
        this.callParent([
            column,
            oldColumn
        ]);
        if (column && column.isBooleanColumn) {
            text = column.getFalseText();
            if (text !== null) {
                this.setFalseText(text);
            }
            text = column.getTrueText();
            if (text !== null) {
                this.setTrueText(text);
            }
            text = column.getUndefinedText();
            if (text !== null) {
                this.setUndefinedText(text);
            }
        }
    },
    updateFalseText: function() {
        if (!this.isConfiguring) {
            this.writeValue();
        }
    },
    updateTrueText: function() {
        if (!this.isConfiguring) {
            this.writeValue();
        }
    },
    updateUndefinedText: function() {
        if (!this.isConfiguring) {
            this.writeValue();
        }
    },
    formatValue: function(value) {
        var me = this;
        if (value === undefined) {
            value = me.getUndefinedText();
        } else if (!value || value === 'false') {
            value = me.getFalseText();
        } else {
            value = me.getTrueText();
        }
        return value;
    }
});

Ext.define('Ext.grid.cell.Expander', {
    extend: Ext.grid.cell.Base,
    xtype: 'expandercell',
    isExpanderCell: true,
    config: {
        collapsed: true
    },
    align: 'center',
    classCls: Ext.baseCSSPrefix + 'expandercell',
    expandedCls: Ext.baseCSSPrefix + 'expanded',
    innerTemplate: [
        {
            reference: 'iconElement',
            cls: Ext.baseCSSPrefix + 'icon-el ' + Ext.baseCSSPrefix + 'font-icon'
        }
    ],
    updateCollapsed: function(collapsed) {
        this.element.toggleCls(this.expandedCls, !collapsed);
    }
});

Ext.define('Ext.grid.cell.Widget', {
    extend: Ext.grid.cell.Base,
    xtype: 'widgetcell',
    isWidgetCell: true,
    config: {
        forceWidth: false,
        widget: null
    },
    align: 'center',
    classCls: Ext.baseCSSPrefix + 'widgetcell',
    selectable: false,
    getRefItems: function(deep) {
        var result = [],
            widget = this.getWidget();
        if (widget) {
            result.push(widget);
            if (deep && widget.getRefItems) {
                result.push.apply(result, widget.getRefItems(deep));
            }
        }
        return result;
    },
    setValue: function(value) {
        if (value && typeof value === 'object') {
            this._value = value;
            this.updateValue(value);
        } else {
            if (value === undefined) {
                value = null;
            }
            this.callParent([
                value
            ]);
        }
        return this;
    },
    updateValue: function(value) {
        var me = this,
            widget = me.getWidget(),
            defaultBindCfg = me.defaultBindCfg;
        if (defaultBindCfg && widget) {
            widget[defaultBindCfg.names.set](value);
        }
    },
    applyWidget: function(widget) {
        var me = this;
        if (widget) {
            widget = Ext.apply({
                ownerCmp: me
            }, widget);
            widget = Ext.create(widget);
        }
        return widget;
    },
    updateWidget: function(widget, oldWidget) {
        var me = this,
            defaultBindCfg;
        if (oldWidget) {
            me.widgetChangeListener = Ext.destroy(me.widgetChangeListener);
            oldWidget.measurer = null;
            oldWidget.destroy();
        }
        if (widget) {
            me.bodyElement.setHtml('');
            me.bodyElement.appendChild(widget.element);
            if (me.getForceWidth()) {
                me.setWidgetWidth(me.getWidth());
            }
            defaultBindCfg = widget.defaultBindProperty;
            defaultBindCfg = widget.self.getConfigurator().configs[defaultBindCfg];
            me.defaultBindCfg = defaultBindCfg || null;
            if (!defaultBindCfg || !widget[defaultBindCfg.names.get] || !widget[defaultBindCfg.names.set]) {
                Ext.raise('Invalid config "' + widget.defaultBindProperty + '" for ' + widget.$className);
            }
            if (me.dataIndex) {
                me.widgetChangeListener = widget.on({
                    change: 'onWidgetChange',
                    scope: me
                });
            }
        }
    },
    onWidgetChange: function(widget) {
        var me = this,
            record, defaultBindCfg, dataIndex, value;
        if (!me.refreshContext) {
            record = me.getRecord();
            defaultBindCfg = me.defaultBindCfg;
            dataIndex = me.dataIndex;
            if (defaultBindCfg) {
                value = widget[defaultBindCfg.names.get]();
                me.setValue(value);
                if (record && !record.isSummaryRecord && dataIndex) {
                    record.set(dataIndex, value);
                }
            }
        }
    },
    updateWidth: function(width, oldWidth) {
        this.callParent([
            width,
            oldWidth
        ]);
        if (this.getForceWidth()) {
            this.setWidgetWidth(width);
        }
    },
    onRender: function() {
        var me = this;
        if (me.getForceWidth()) {
            me.setWidgetWidth(me.getWidth());
        }
    },
    doDestroy: function() {
        this.setWidget(null);
        this.callParent();
    },
    privates: {
        setWidgetWidth: function(width) {
            var me = this,
                el = me.bodyElement,
                widget, column, leftPad, rightPad;
            if (!me.rendered) {
                return;
            }
            widget = me.getWidget();
            if (widget) {
                column = me.getColumn();
                leftPad = parseInt(column.getCachedStyle(el, 'padding-left'), 10) || 0;
                rightPad = parseInt(column.getCachedStyle(el, 'padding-right'), 10) || 0;
                widget.measurer = column;
                widget.setWidth(width - leftPad - rightPad);
            }
        }
    }
});

Ext.define('Ext.grid.column.Boolean', {
    extend: Ext.grid.column.Column,
    xtype: 'booleancolumn',
    isBooleanColumn: true,
    config: {
        trueText: null,
        falseText: null,
        undefinedText: null,
        defaultEditor: {
            xtype: 'checkboxfield'
        },
        cell: {
            xtype: 'booleancell'
        }
    }
});

Ext.define('Ext.grid.column.Drag', {
    extend: Ext.grid.column.Column,
    xtype: 'dragcolumn',
    classCls: Ext.baseCSSPrefix + 'drag-column',
    cell: {
        bodyCls: Ext.baseCSSPrefix + 'row-drag-indicator'
    },
    menu: null,
    sortable: false,
    draggable: false,
    resizable: false,
    hideable: false,
    ignore: true,
    width: 'auto',
    minWidth: 30,
    ignoreExport: true,
    text: '',
    isDragColumn: true,
    onViewColumnAdd: function(grid, column, index) {
        if (!index && !column.isDragColumn) {
            grid.insertColumn(0, this);
        }
    },
    onColumnMoved: function(grid, column, fromIndex, toIndex) {
        this.onViewColumnAdd(grid, column, toIndex);
    },
    updateGrid: function(grid, oldGrid) {
        var listeners = {
                scope: this,
                columnadd: 'onViewColumnAdd',
                columnmove: 'onColumnMoved'
            };
        if (this.isDestructing()) {
            return;
        }
        if (oldGrid) {
            oldGrid.un(listeners);
        }
        if (grid) {
            grid.on(listeners);
        }
    }
});

Ext.define('Ext.grid.column.Text', {
    extend: Ext.grid.column.Column,
    xtype: 'textcolumn',
    cell: {
        xtype: 'textcell'
    }
});

Ext.define('Ext.grid.filters.menu.Base', {
    extend: Ext.menu.CheckItem,
    isFilterMenuItem: true,
    mixins: [
        Ext.mixin.Bufferable
    ],
    text: 'Filter',
    menu: {
        indented: false
    },
    weight: -70,
    bufferableMethods: {
        onInputChange: 300
    },
    syncFilter: function() {
        var me = this,
            dataIndex = me.column.getDataIndex(),
            query = me.plugin.getQuery(),
            filters = query.getFilters(),
            items = me.getMenu().getItems().items,
            f, i, k, item, value;
        for (i = items.length; i-- > 0; ) {
            item = items[i];
            if (item.operator) {
                value = null;
                for (k = dataIndex && filters && filters.length; k-- > 0; ) {
                    f = filters[k];
                    if (f.property === dataIndex && f.operator === item.operator) {
                        value = f.value;
                        break;
                    }
                }
                item.setValue(value);
            }
        }
    },
    syncQuery: function() {
        var me = this,
            dataIndex = me.column.getDataIndex(),
            plugin = me.plugin,
            query = plugin.getQuery(),
            added = 0,
            removed = 0,
            filters, i, item, items, value;
        if (dataIndex) {
            filters = Ext.clone(query.getFilters());
            items = me.getMenu().getItems().items;
            for (i = filters && filters.length; i-- > 0; ) {
                if (filters[i].property === dataIndex) {
                    filters.splice(i, 1);
                    ++removed;
                }
            }
            if (me.getChecked()) {
                for (i = items.length; i-- > 0; ) {
                    item = items[i];
                    if (item.operator) {
                        value = item.getValue();
                        if (value !== null && value !== '') {
                            ++added;
                            if (Ext.isDate(value)) {
                                value = Ext.Date.format(value, 'C');
                            }
                            (filters || (filters = [])).push({
                                property: dataIndex,
                                operator: item.operator,
                                value: value
                            });
                        }
                    }
                }
            }
            if (!added) {
                me.setChecked(false);
            }
            if (added || removed) {
                plugin.setActiveFilter(filters);
            }
        }
    },
    privates: {
        doOnInputChange: function() {
            this.setChecked(true);
            this.syncQuery();
        }
    }
});

Ext.define('Ext.grid.filters.menu.Boolean', {
    extend: Ext.grid.filters.menu.Base,
    alias: 'gridFilters.boolean',
    menu: {
        defaults: {
            name: 'boolfilter',
            group: 'value',
            xtype: 'menuradioitem',
            operator: '==',
            checkHandler: 'up.onInputChange'
        },
        items: {
            yes: {
                value: true,
                text: 'True',
                weight: 10
            },
            no: {
                value: false,
                text: 'False',
                weight: 20
            }
        }
    },
    syncFilter: function() {
        var me = this,
            column = me.column,
            dataIndex = column.getDataIndex(),
            query = me.plugin.getQuery(),
            filters = query.getFilters(),
            items = me.getMenu().getItems().items,
            f, i, k, item, value;
        for (i = items.length; i-- > 0; ) {
            item = items[i];
            if (item.operator) {
                value = null;
                for (k = dataIndex && filters && filters.length; k-- > 0; ) {
                    f = filters[k];
                    if (f.property === dataIndex && f.operator === item.operator) {
                        if (item.getChecked) {
                            if (f.value === item.getValue()) {
                                value = f.value;
                                break;
                            }
                        } else {
                            value = f.value;
                            break;
                        }
                    }
                }
                if (item.operator === '==' && item.getChecked) {
                    if (item.getValue() === value) {
                        item.setChecked(true);
                    } else {
                        item.setChecked(false);
                    }
                } else {
                    item.setValue(value);
                }
            }
        }
    },
    syncQuery: function() {
        var me = this,
            dataIndex = me.column.getDataIndex(),
            plugin = me.plugin,
            query = plugin.getQuery(),
            added = 0,
            removed = 0,
            filters, i, item, items, value;
        if (dataIndex) {
            filters = Ext.clone(query.getFilters());
            items = me.getMenu().getItems().items;
            for (i = filters && filters.length; i-- > 0; ) {
                if (filters[i].property === dataIndex) {
                    filters.splice(i, 1);
                    ++removed;
                }
            }
            if (me.getChecked()) {
                for (i = items.length; i-- > 0; ) {
                    item = items[i];
                    if (item.operator) {
                        if (item && item.getChecked) {
                            if (item.getChecked() && (item.getValue() === true || item.getValue() === false)) {
                                value = item.getValue();
                            } else {
                                value = null;
                            }
                        } else {
                            value = item.getValue();
                            me.setChecked(true);
                        }
                        if (value !== null && value !== '') {
                            ++added;
                            (filters || (filters = [])).push({
                                property: dataIndex,
                                operator: item.operator,
                                value: value
                            });
                        }
                    }
                }
            }
            if (!added) {
                me.setChecked(false);
            }
            if (added || removed) {
                plugin.setActiveFilter(filters);
            }
        }
    }
});

Ext.define('Ext.grid.filters.menu.Date', {
    extend: Ext.grid.filters.menu.Base,
    alias: 'gridFilters.date',
    menu: {
        items: {
            lt: {
                xtype: 'datefield',
                label: 'Before',
                placeholder: 'Before...',
                operator: '<',
                weight: 10,
                listeners: {
                    change: 'up.onInputChange'
                }
            },
            gt: {
                xtype: 'datefield',
                label: 'After',
                placeholder: 'After...',
                operator: '>',
                weight: 20,
                listeners: {
                    change: 'up.onInputChange'
                }
            },
            eq: {
                xtype: 'datefield',
                label: 'On',
                placeholder: 'On...',
                operator: '=',
                separator: true,
                weight: 30,
                listeners: {
                    change: 'up.onInputChange'
                }
            }
        }
    },
    syncFilter: function() {
        var me = this,
            column = me.column,
            dataIndex = column.getDataIndex(),
            query = me.plugin.getQuery(),
            filters = query.getFilters(),
            items = me.getMenu().getItems().items,
            f, i, k, item, value;
        for (i = items.length; i-- > 0; ) {
            item = items[i];
            if (item.operator) {
                value = null;
                for (k = dataIndex && filters && filters.length; k-- > 0; ) {
                    f = filters[k];
                    if (f.operator === '==' && !item.getChecked && !(typeof f.value === 'boolean')) {
                        f.operator = '=';
                    }
                    if (f.property === dataIndex && f.operator === item.operator) {
                        value = f.value;
                        break;
                    }
                }
                if (column.columnFilterTypes[column.xtype] === 'date') {
                    value = value && Ext.Date.parse(value);
                }
                item.setValue(value);
            }
        }
    }
});

Ext.define('Ext.grid.filters.menu.Number', {
    extend: Ext.grid.filters.menu.Base,
    alias: 'gridFilters.number',
    menu: {
        items: {
            lt: {
                xtype: 'numberfield',
                label: 'Less than',
                placeholder: 'Less than...',
                floatedPickerAlign: 'tl-tr?',
                operator: '<',
                weight: 10,
                listeners: {
                    change: 'up.onInputChange'
                }
            },
            gt: {
                xtype: 'numberfield',
                label: 'Greater than',
                placeholder: 'Greater than...',
                floatedPickerAlign: 'tl-tr?',
                operator: '>',
                weight: 20,
                listeners: {
                    change: 'up.onInputChange'
                }
            },
            eq: {
                xtype: 'numberfield',
                label: 'Equal to',
                placeholder: 'Equal to...',
                floatedPickerAlign: 'tl-tr?',
                operator: '=',
                separator: true,
                weight: 30,
                listeners: {
                    change: 'up.onInputChange'
                }
            }
        }
    },
    syncFilter: function() {
        var me = this,
            dataIndex = me.column.getDataIndex(),
            query = me.plugin.getQuery(),
            filters = query.getFilters(),
            items = me.getMenu().getItems().items,
            f, i, k, item, value;
        for (i = items.length; i-- > 0; ) {
            item = items[i];
            if (item.operator) {
                value = null;
                for (k = dataIndex && filters && filters.length; k-- > 0; ) {
                    f = filters[k];
                    if (f.operator === '==' && !item.getChecked && !(typeof f.value === 'boolean')) {
                        f.operator = '=';
                    }
                    if (f.property === dataIndex && f.operator === item.operator) {
                        value = f.value;
                        break;
                    }
                }
                item.setValue(value);
            }
        }
    }
});

Ext.define('Ext.grid.filters.menu.String', {
    extend: Ext.grid.filters.menu.Base,
    alias: 'gridFilters.string',
    menu: {
        items: {
            like: {
                xtype: 'textfield',
                placeholder: 'Like...',
                operator: 'like',
                listeners: {
                    change: 'up.onInputChange'
                }
            }
        }
    }
});

Ext.define('Ext.grid.filters.Plugin', {
    extend: Ext.plugin.Abstract,
    alias: 'plugin.gridfilters',
    mixins: [
        Ext.state.Stateful,
        Ext.mixin.StoreWatcher
    ],
    config: {
        activeFilter: null,
        query: {
            type: 'default',
            format: 'filters'
        }
    },
    stateful: [
        'activeFilter'
    ],
    init: function(grid) {
        this.setOwner(grid);
        grid.on({
            beforeshowcolumnmenu: 'onBeforeShowColumnMenu',
            scope: this
        });
    },
    destroy: function() {
        this.setOwner(null);
        this.callParent();
    },
    updateActiveFilter: function(filter) {
        var query = this.getQuery();
        if (Ext.isString(filter)) {
            query.setSource(filter);
        } else {
            query.setFilters(filter);
        }
    },
    applyQuery: function(config, query) {
        return Ext.Factory.query.update(query, config);
    },
    updateQuery: function(query) {
        if (query) {
            var me = this,
                fn = query.compile;
            query.compile = function() {
                fn.call(query);
                me.queryModified(query);
            };
        }
    },
    updateStore: function(store, oldStore) {
        var me = this,
            query = me.getQuery();
        me.mixins.storewatcher.updateStore.call(me, store, oldStore);
        if (oldStore && !(oldStore.destroying || oldStore.destroyed)) {
            oldStore.getFilters().remove(query);
        }
        if (store) {
            store.getFilters().add(query);
        }
    },
    onSetFilter: function(menuItem) {
        this.setActiveFilter(menuItem.rec.data.query);
    },
    privates: {
        onBeforeShowColumnMenu: function(grid, column, menu) {
            var me = this,
                filterMenuItem = menu.getComponent('filter'),
                menuConfig;
            if (!filterMenuItem) {
                menuConfig = column.createFilter({
                    itemId: 'filter',
                    plugin: me,
                    column: column
                });
                filterMenuItem = menuConfig && menu.add(Ext.Factory.gridFilters(menuConfig));
                if (filterMenuItem) {
                    filterMenuItem.setCheckHandler(me.onFilterItemCheckChange.bind(me));
                }
            }
            if (filterMenuItem) {
                filterMenuItem.syncFilter();
            }
        },
        onFilterItemCheckChange: function(item) {
            item.syncQuery();
        },
        queryModified: function() {
            var filters = this.cmp.getStore();
            filters = filters && filters.getFilters();
            if (filters) {
                filters.beginUpdate();
                ++filters.generation;
                filters.endUpdate();
            }
        }
    }
});

Ext.define('Ext.grid.locked.Grid', {
    extend: Ext.Panel,
    xtype: 'lockedgrid',
    alternateClassName: 'Ext.grid.LockedGrid',
    isLockedGrid: true,
    classCls: Ext.baseCSSPrefix + 'lockedgrid',
    config: {
        columnMenu: {
            items: {
                region: {
                    text: 'Locked',
                    iconCls: 'fi-lock',
                    menu: {}
                }
            }
        },
        columns: null,
        defaultLockedRegion: 'left',
        gridDefaults: null,
        hideHeaders: false,
        itemConfig: {},
        leftRegionDefaults: {
            locked: true,
            menuItem: {
                iconCls: 'fi-chevron-left'
            }
        },
        regions: {
            left: {
                menuItem: {
                    text: 'Locked (Left)'
                },
                weight: -10
            },
            center: {
                flex: 1,
                menuItem: {
                    text: 'Unlocked',
                    iconCls: 'fi-unlock'
                },
                weight: 0
            },
            right: {
                menuItem: {
                    text: 'Locked (Right)'
                },
                weight: 10
            }
        },
        rightRegionDefaults: {
            locked: true,
            menuItem: {
                iconCls: 'fi-chevron-right'
            }
        },
        store: null,
        variableHeights: false,
        enableColumnMove: true,
        grouped: true
    },
    weighted: true,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    onRender: function() {
        this.callParent();
        this.setupHeaderSync();
        this.reconfigure();
    },
    doDestroy: function() {
        Ext.undefer(this.partnerTimer);
        this.callParent();
    },
    addColumn: function(columns) {
        var me = this,
            map = me.processColumns(columns),
            isArray = Array.isArray(columns),
            ret = isArray ? [] : null,
            grids = me.gridItems,
            len = grids.length,
            v, i, grid, toAdd;
        for (i = 0; i < len; ++i) {
            grid = grids[i];
            toAdd = map[grid.regionKey];
            if (toAdd) {
                v = grid.addColumn(toAdd);
                if (isArray) {
                    Ext.Array.push(ret, v);
                } else {
                    ret = v[0];
                }
            }
        }
        if (me.getVariableHeights()) {
            me.doRefresh();
        }
        return ret;
    },
    getHorizontalOverflow: function() {
        var grids = this.visibleGrids,
            n = grids && grids.length,
            i;
        for (i = 0; i < n; ++i) {
            if (grids[i].getHorizontalOverflow()) {
                return true;
            }
        }
        return false;
    },
    getRegion: function(key) {
        return this.regionMap[key] || null;
    },
    getVerticalOverflow: function() {
        var grids = this.visibleGrids,
            n = grids && grids.length;
        return n && grids[n - 1].getVerticalOverflow();
    },
    insertColumnBefore: function(column, before) {
        var ret;
        if (before === null) {
            ret = this.gridMap.center.addColumn(column);
        } else {
            ret = before.getParent().insertBefore(column, before);
        }
        if (this.getVariableHeights()) {
            this.doRefresh();
        }
        return ret;
    },
    removeColumn: function(column) {
        var ret = column.getGrid().removeColumn(column);
        if (this.getVariableHeights()) {
            this.doRefresh();
        }
        return ret;
    },
    createLocation: function(location) {
        var grid;
        if (location.isGridLocation && location.column) {
            grid = location.column.getGrid();
            if (grid.getHidden()) {
                grid = null;
                location = location.record;
            }
        }
        if (!grid) {
            grid = this.regionMap.center.getGrid();
        }
        return grid.createLocation(location);
    },
    setLocation: function(location, options) {
        var grid;
        if (location.isGridLocation && location.column) {
            grid = location.column.getGrid();
            if (grid.getHidden()) {
                grid = null;
                location = location.record;
            }
        }
        if (!grid) {
            grid = this.regionMap.center.getGrid();
        }
        grid.setLocation(location, options);
    },
    updateColumns: function(columns) {
        var me = this,
            grids = me.gridItems,
            map, len, i, grid;
        if (me.isConfiguring) {
            return;
        }
        map = me.processColumns(columns);
        ++me.bulkColumnChange;
        for (i = 0 , len = grids.length; i < len; ++i) {
            grid = grids[i];
            grid.setColumns(map[grid.regionKey] || []);
        }
        me.doRefresh();
        --me.bulkColumnChange;
    },
    updateGrouped: function(value) {
        this.relayConfig('grouped', value);
    },
    updateHideHeaders: function(hideHeaders) {
        var me = this;
        me.headerSync = Ext.destroy(me.headerSync);
        me.relayConfig('hideHeaders', hideHeaders);
        me.setupHeaderSync();
    },
    updateEnableColumnMove: function(enabled) {
        var me = this,
            gridItems, b;
        if (me.isConfiguring) {
            return;
        }
        gridItems = me.gridItems;
        for (b = 0; b < gridItems.length; b++) {
            gridItems[b].setEnableColumnMove(enabled);
        }
    },
    updateItemConfig: function(itemConfig) {
        this.relayConfig('itemConfig', itemConfig);
    },
    updateMaxHeight: function(maxHeight) {
        this.relayConfig('maxHeight', maxHeight);
    },
    updateRegions: function(regions) {
        var me = this,
            regionMap = me.regionMap,
            gridDefaults = me.getGridDefaults(),
            variableHeights = me.getVariableHeights(),
            enableColumnMove = me.getEnableColumnMove(),
            key, region, colMap, grid, gridMap, prev, scroller, len, i, defaultPartner, regionItems, gridItems;
        if (regionMap) {
            for (key in regionMap) {
                me.remove(regionMap[key]);
            }
        }
        me.regionMap = regionMap = {};
        me.gridMap = gridMap = {};
        colMap = me.processColumns(me.getColumns());
        for (key in regions) {
            region = regions[key];
            if (region) {
                region = me.createRegion(key, regions[key], colMap[key], gridDefaults);
                region = me.add(region);
                grid = region.getGrid();
                grid.isDefaultPartner = key === me.unlockedKey;
                grid.setEnableColumnMove(enableColumnMove);
                if (variableHeights) {
                    grid.partnerManager = me;
                    if (grid.isDefaultPartner) {
                        me.defaultPartner = defaultPartner = grid;
                    }
                }
                region.on({
                    scope: me,
                    collapse: 'onRegionCollapse',
                    expand: 'onRegionExpand',
                    hide: 'onRegionHide',
                    show: 'onRegionShow'
                });
                regionMap[key] = region;
                gridMap[key] = grid;
                scroller = grid.getScrollable();
                if (scroller) {
                    if (prev) {
                        prev.addPartner(scroller, 'y');
                    }
                    prev = scroller;
                }
                me.setupGrid(grid);
            }
        }
        me.regionItems = regionItems = me.query('>[isLockedGridRegion]');
        me.gridItems = gridItems = [];
        for (i = 0 , len = regionItems.length; i < len; ++i) {
            grid = regionItems[i].getGrid();
            gridItems.push(grid);
            if (defaultPartner && grid !== defaultPartner) {
                grid.renderInfo = defaultPartner.renderInfo;
            }
        }
        me.setupHeaderSync();
    },
    applyStore: function(store) {
        return store ? Ext.data.StoreManager.lookup(store) : null;
    },
    updateStore: function(store) {
        this.store = store;
        this.relayConfig('store', store);
    },
    updateVariableHeights: function(variableHeights) {
        this.relayConfig('variableHeights', variableHeights);
    },
    registerActionable: function(actionable) {
        var me = this,
            actionables = me.actionables || (me.actionables = []),
            gridItems = me.gridItems,
            i;
        if (!Ext.Array.contains(actionables, actionable)) {
            actionables.push(actionable);
            if (gridItems) {
                for (i = gridItems.length; i-- > 0; ) {
                    gridItems[i].registerActionable(actionable);
                }
            }
        }
    },
    unregisterActionable: function(actionable) {
        var actionables = this.actionables,
            gridItems = this.gridItems,
            i;
        if (actionables) {
            Ext.Array.remove(actionables, actionable);
            if (gridItems) {
                for (i = gridItems.length; i-- > 0; ) {
                    gridItems[i].registerActionable(actionable);
                }
            }
        }
    },
    statics: {
        relayGridMethod: function(name, collection, key, defaultResult) {
            collection = collection || 'visibleGrids';
            key = key || 0;
            if (defaultResult == null) {
                defaultResult = null;
            }
            this.prototype[name] = function() {
                var grid = this[collection],
                    ret = defaultResult;
                grid = grid && grid[key];
                if (grid) {
                    if (grid.isLockedGridRegion) {
                        grid = grid.getGrid();
                    }
                    ret = grid[name].apply(grid, arguments);
                }
                return ret;
            };
        },
        relayGridMethods: function(descr) {
            var simple = [],
                name, options;
            for (name in descr) {
                options = descr[name];
                if (options === true) {
                    options = simple;
                    simple[0] = name;
                } else {
                    options = options.slice();
                    options.unshift(name);
                }
                this.relayGridMethod.apply(this, options);
            }
        }
    },
    privates: {
        bulkColumnChange: 0,
        partnerOffset: 200,
        itemConfiguring: false,
        lastPartnerRequest: 0,
        unlockedKey: 'center',
        claimActivePartner: function(partner) {
            var me = this,
                now = Date.now(),
                active = me.activePartner;
            me.partnerTimer = Ext.undefer(me.partnerTimer);
            if (!active || (now - me.lastPartnerRequest > me.partnerOffset)) {
                me.activePartner = partner;
                me.lastPartnerRequest = now;
                me.setActivePartner(partner);
            }
        },
        configureHeaderHeights: function() {
            var headerSync = this.headerSync;
            if (headerSync) {
                headerSync.sync();
            }
        },
        configureItems: function() {
            var me = this,
                gridItems = me.gridItems,
                regionItems = me.regionItems,
                i, found, grid, hide, region;
            me.itemConfiguring = true;
            for (i = gridItems.length - 1; i >= 0; --i) {
                grid = gridItems[i];
                region = regionItems[i];
                me.setRegionVisibility(region);
                hide = true;
                if (!found || !grid.getVerticalOverflow()) {
                    hide = false;
                    found = !region.hasHiddenContent();
                }
                grid.setHideScrollbar(hide);
            }
            me.itemConfiguring = false;
        },
        configurePartners: function() {
            var me = this,
                gridItems = this.gridItems,
                len = gridItems.length,
                visibleGrids, i, grid;
            visibleGrids = gridItems.filter(function(item) {
                return me.isRegionVisible(item.region);
            });
            me.visibleGrids = visibleGrids;
            for (i = 0; i < len; ++i) {
                grid = gridItems[i];
                grid.allPartners = visibleGrids;
                grid.partners = visibleGrids.filter(function(item) {
                    return item !== grid;
                });
            }
        },
        createRegion: function(key, cfg, columns, gridDefaults) {
            var me = this,
                weight = cfg.weight,
                defaults;
            me.fireEvent('createregion', me, columns);
            if (weight !== 0) {
                defaults = weight < 0 ? me.getLeftRegionDefaults() : me.getRightRegionDefaults();
            }
            return Ext.merge({
                xtype: 'lockedgridregion',
                regionKey: key,
                lockedGrid: me,
                grid: Ext.apply({
                    regionKey: key,
                    columnMenu: me.getColumnMenu(),
                    columns: columns,
                    hideHeaders: me.getHideHeaders(),
                    grouped: me.getGrouped(),
                    itemConfig: me.getItemConfig(),
                    store: me.getStore(),
                    variableHeights: me.getVariableHeights()
                }, gridDefaults)
            }, defaults, cfg);
        },
        doHorizontalScrollCheck: function() {
            var grids = this.gridItems,
                len = grids.length,
                grid, scroller, i;
            for (i = 0; i < len; ++i) {
                grid = grids[i];
                scroller = grid.getScrollable();
                if (this.isRegionVisible(grid.region) && scroller) {
                    scroller.setX(grid.getHorizontalOverflow() ? 'scroll' : true);
                }
            }
        },
        doRefresh: function() {
            this.reconfigure();
            this.refreshGrids();
            this.doHorizontalScrollCheck();
            this.doVerticalScrollCheck();
        },
        doReleaseActivePartner: function() {
            var me = this;
            if (!me.destroyed) {
                me.lastPartnerRequest = 0;
                me.activePartner = null;
                me.setActivePartner(me.defaultPartner);
            }
        },
        doVerticalScrollCheck: function() {
            var grids = this.gridItems,
                len = grids.length,
                grid, scroller, region, i;
            for (i = 0; i < len; ++i) {
                grid = grids[i];
                scroller = grid.getScrollable();
                region = grid.region;
                if (region && this.isRegionVisible(region) && scroller) {
                    if (grid.getVerticalOverflow()) {
                        this.setGridScrollers(region, region.isHidden());
                    } else {
                        this.setGridScrollers(false);
                    }
                }
            }
        },
        handleChangeRegion: function(region, column) {
            var me = this,
                grid = region.getGrid(),
                gridItems = me.gridItems,
                newIdx = gridItems.indexOf(grid),
                oldIdx = gridItems.indexOf(column.getGrid());
            ++me.bulkColumnChange;
            if (newIdx < oldIdx) {
                grid.addColumn(column);
            } else {
                grid.insertColumn(0, column);
            }
            grid.syncRowsToHeight(true);
            --me.bulkColumnChange;
            me.doHorizontalScrollCheck();
            me.doVerticalScrollCheck();
        },
        handleRegionVisibilityChange: function(region, hiding) {
            var me = this;
            if (!me.itemConfiguring) {
                me.configurePartners();
                me.refreshGrids();
                me.setGridScrollers(region, hiding);
                me.configureHeaderHeights();
            }
        },
        isActivePartner: function(grid) {
            var active = this.activePartner;
            return active ? grid === active : grid.isDefaultPartner;
        },
        isHeaderVisible: function(header) {
            return this.isRegionVisible(header.getGrid().region);
        },
        isRegionVisible: function(region) {
            return !region.hasHiddenContent();
        },
        isLastVisibleRegion: function(region) {
            var regions = this.regionItems,
                index = regions.indexOf(region),
                other, i;
            for (i = regions.length - 1; i > index; --i) {
                other = regions[i];
                if (!other.hasHiddenContent()) {
                    return false;
                }
            }
            return true;
        },
        onBeforeShowColumnMenu: function(grid, column, menu) {
            var regions = this.regionItems,
                len = regions.length,
                current = grid.region,
                disabled = false,
                items, region, i;
            menu = menu.getComponent('region');
            if (menu) {
                menu = menu.getMenu();
                menu.removeAll();
                items = [];
                disabled = !!(grid.isDefaultPartner && grid.getVisibleColumns().length === 1);
                for (i = 0; i < len; ++i) {
                    region = regions[i];
                    items.push(Ext.applyIf({
                        disabled: disabled || region === current,
                        handler: this.handleChangeRegion.bind(this, region, column)
                    }, region.getMenuItem()));
                }
                menu.add(items);
            }
        },
        onColumnAdd: function(grid) {
            if (!this.setRegionVisibility(grid.region)) {
                this.refreshGrids();
            }
            this.configureHeaderHeights();
        },
        onColumnHide: function(grid) {
            if (!this.setRegionVisibility(grid.region)) {
                this.refreshGrids();
            }
            this.configureHeaderHeights();
        },
        onColumnRemove: function(grid, column) {
            var me = this;
            me.fireEvent('columnremove', grid, column);
            if (!me.setRegionVisibility(grid.region)) {
                me.refreshGrids();
            }
            me.configureHeaderHeights();
        },
        onColumnShow: function(grid) {
            if (!this.setRegionVisibility(grid.region)) {
                this.refreshGrids();
            }
            this.configureHeaderHeights();
        },
        onGridHorizontalOverflowChange: function() {
            if (!this.bulkColumnChange) {
                this.doHorizontalScrollCheck();
            }
        },
        onGridResize: function(grid) {
            grid.syncRowsToHeight(true);
        },
        onGridVerticalOverflowChange: function(grid, value) {
            var region = grid.region;
            if (value) {
                this.setGridScrollers(region, region.isHidden());
            } else {
                grid.setHideScrollbar(false);
            }
        },
        onRegionCollapse: function(region) {
            this.handleRegionVisibilityChange(region, true);
        },
        onRegionExpand: function(region) {
            this.handleRegionVisibilityChange(region, false);
        },
        onRegionHide: function(region) {
            this.handleRegionVisibilityChange(region, true);
        },
        onRegionShow: function(region) {
            this.handleRegionVisibilityChange(region, false);
        },
        getRegionKey: function(lockedValue) {
            var defaultLocked = this.getDefaultLockedRegion(),
                key;
            if (lockedValue) {
                key = lockedValue === true ? defaultLocked : lockedValue;
            } else {
                key = this.unlockedKey;
            }
            return key;
        },
        processColumns: function(columns) {
            var me = this,
                map = {},
                len, i, col, locked, key, arr;
            if (columns) {
                if (!Array.isArray(columns)) {
                    columns = [
                        columns
                    ];
                }
                for (i = 0 , len = columns.length; i < len; ++i) {
                    col = columns[i];
                    locked = col.locked || (col.getLocked && col.getLocked());
                    key = me.getRegionKey(locked);
                    arr = map[key];
                    if (!arr) {
                        map[key] = arr = [];
                    }
                    arr.push(col);
                }
            }
            return map;
        },
        reconfigure: function() {
            this.configureItems();
            this.configurePartners();
            this.configureHeaderHeights();
        },
        refreshGrids: function() {
            var visibleGrids = this.visibleGrids,
                len = visibleGrids.length,
                i;
            if (!this.rendered) {
                return;
            }
            for (i = 0; i < len; ++i) {
                visibleGrids[i].syncRowsToHeight(true);
            }
        },
        relayConfig: function(name, value) {
            var grids = this.gridItems,
                i, len, setter;
            if (grids && !this.isConfiguring) {
                setter = Ext.Config.get(name).names.set;
                for (i = 0 , len = grids.length; i < len; ++i) {
                    grids[i][setter](value);
                }
            }
        },
        releaseActivePartner: function(partner) {
            var me = this;
            if (me.activePartner === partner) {
                Ext.undefer(me.partnerTimer);
                me.partnerTimer = Ext.defer(me.doReleaseActivePartner, me.partnerOffset, me);
            }
        },
        setActivePartner: function(partner) {
            var visibleGrids = this.visibleGrids;
            Ext.Array.remove(visibleGrids, partner);
            visibleGrids.unshift(partner);
        },
        setGridScrollers: function(region, isHiding) {
            var gridItems = this.gridItems,
                len = gridItems.length,
                index, i, grid;
            if (this.isLastVisibleRegion(region)) {
                grid = region.getGrid();
                index = gridItems.indexOf(grid) - (isHiding ? 1 : 0);
                for (i = 0; i < len; ++i) {
                    gridItems[i].setHideScrollbar(grid.getVerticalOverflow() ? i < index : false);
                }
            }
        },
        setRegionVisibility: function(region) {
            var grid = region.getGrid(),
                hidden = !!region.getHidden();
            region.setHidden(grid.getVisibleColumns().length === 0);
            return hidden !== region.getHidden();
        },
        setupGrid: function(grid) {
            var actionables = this.actionables,
                i;
            if (actionables) {
                for (i = 0; i < actionables.length; ++i) {
                    grid.registerActionable(actionables[i]);
                }
            }
            grid.on({
                scope: this,
                beforeshowcolumnmenu: 'onBeforeShowColumnMenu',
                columnadd: 'onColumnAdd',
                columnhide: 'onColumnHide',
                columnremove: 'onColumnRemove',
                columnshow: 'onColumnShow',
                horizontaloverflowchange: 'onGridHorizontalOverflowChange',
                resize: 'onGridResize',
                verticaloverflowchange: 'onGridVerticalOverflowChange'
            });
        },
        setupHeaderSync: function() {
            var me = this,
                grids = me.gridItems,
                headers, i;
            if (!me.getHideHeaders() && !me.isConfiguring) {
                headers = [];
                for (i = 0; i < grids.length; ++i) {
                    headers.push(grids[i].getHeaderContainer());
                }
                Ext.destroy(me.headerSync);
                me.headerSync = new Ext.util.HeightSynchronizer(headers, me.isHeaderVisible.bind(me));
            }
        }
    }
}, function(LockedGrid) {
    LockedGrid.relayGridMethods({
        ensureVisible: true,
        gatherData: true,
        getSelections: true,
        mapToItem: true,
        mapToRecord: true,
        mapToRecordIndex: true
    });
});

Ext.define('Ext.grid.locked.Region', {
    extend: Ext.Panel,
    xtype: 'lockedgridregion',
    isLockedGridRegion: true,
    alternateClassName: 'Ext.grid.LockedGridRegion',
    classCls: Ext.baseCSSPrefix + 'lockedgridregion',
    autoSize: null,
    lockedGrid: null,
    config: {
        grid: {
            xtype: 'grid',
            manageHorizontalOverflow: false,
            reserveScrollbar: true,
            scrollable: {
                x: true,
                y: true
            }
        },
        locked: false,
        menuItem: {},
        menuLabel: '',
        regionKey: ''
    },
    border: true,
    layout: 'fit',
    onResize: function() {},
    applyMenuItem: function(menuItem) {
        var label = this.getMenuLabel();
        if (menuItem && label) {
            menuItem = Ext.applyIf({
                text: label
            }, menuItem);
        }
        return menuItem;
    },
    updateHidden: function(hidden, wasHidden) {
        var me = this,
            headerSync = me.lockedGrid.headerSync,
            navModel;
        me.callParent([
            hidden,
            wasHidden
        ]);
        if (hidden) {
            navModel = me.getGrid().getNavigationModel();
            if (navModel && navModel.getLocation()) {
                navModel.setLocation(null);
            }
        }
        if (headerSync) {
            headerSync.invalidateItems();
        }
    },
    applyGrid: function(grid) {
        if (grid) {
            grid = this.add(grid);
            grid.region = this;
        }
        return grid;
    },
    updateWeight: function(weight, oldWeight) {
        var me = this,
            map = me.sideClsMap;
        me.callParent([
            weight,
            oldWeight
        ]);
        if (oldWeight) {
            me.removeCls(map[Ext.Number.sign(oldWeight)]);
        }
        if (weight) {
            me.addCls(map[Ext.Number.sign(weight)]);
        }
    },
    privates: {
        sideClsMap: {
            '-1': Ext.baseCSSPrefix + 'lock-start',
            1: Ext.baseCSSPrefix + 'lock-end'
        }
    }
});

Ext.define('Ext.grid.plugin.CellEditing', {
    extend: Ext.plugin.Abstract,
    alias: [
        'plugin.gridcellediting',
        'plugin.cellediting'
    ],
    config: {
        grid: null,
        triggerEvent: 'doubletap',
        selectOnEdit: null
    },
    init: function(grid) {
        this.setGrid(grid);
        grid.setTouchAction({
            doubleTapZoom: false
        });
        grid.$cellEditing = true;
    },
    getEditor: function(location) {
        var column = location.column,
            fieldName = column.getDataIndex(),
            record = location.record,
            editable = column.getEditable(),
            editor, field;
        if (!(editor = editable !== false && column.getEditor(location.record)) && editable) {
            editor = Ext.create(column.getDefaultEditor());
        }
        if (editor) {
            if (!editor.isCellEditor) {
                editor = Ext.create({
                    xtype: 'celleditor',
                    field: editor,
                    plugin: this
                });
            }
            column.setEditor(editor);
            editor.editingPlugin = this;
            field = editor.getField();
            field.addUi('celleditor');
            field.setValidationField(record.getField(fieldName), record);
        }
        return editor;
    },
    getActiveEditor: function() {
        return this.activeEditor;
    },
    updateGrid: function(grid, oldGrid) {
        if (oldGrid) {
            oldGrid.unregisterActionable(this);
        }
        if (grid) {
            grid.registerActionable(this);
        }
    },
    activateCell: function(location) {
        var me = this,
            activeEditor = me.activeEditor,
            previousEditor = me.$previousEditor,
            editor, selModel, result;
        if (!location) {
            Ext.raise('A grid Location must be passed into CellEditing#activateCell');
        }
        if (activeEditor && activeEditor.$activeLocation.cell === location.cell) {
            return activeEditor.$activeLocation;
        } else {
            editor = me.getEditor(location);
            if (editor) {
                if (previousEditor) {
                    if (previousEditor.isCancelling) {
                        previousEditor.cancelEdit();
                    } else {
                        previousEditor.completeEdit();
                    }
                }
                result = editor.startEdit(location);
                if (editor.editing) {
                    if (me.getSelectOnEdit()) {
                        selModel = me.getGrid().getSelectable();
                        if (selModel.getCells()) {
                            selModel.selectCells(location, location);
                        } else if (selModel.getRows()) {
                            selModel.select(location.record);
                        }
                    }
                    me.$previousEditor = editor;
                    return result;
                } else {
                    editor.onEditComplete(false, true);
                }
            }
        }
    },
    startEdit: function(record, column) {
        this.activateCell(new Ext.grid.Location(this.getGrid(), {
            record: record,
            column: column
        }));
    },
    destroy: function() {
        var grid = this.getGrid();
        if (grid) {
            grid.$cellEditing = false;
        }
        this.$previousEditor = null;
        this.callParent();
    }
});

Ext.define('Ext.grid.plugin.Clipboard', {
    extend: Ext.plugin.AbstractClipboard,
    alias: 'plugin.clipboard',
    formats: {
        cell: {
            get: 'getCells'
        },
        html: {
            get: 'getCellData'
        },
        raw: {
            get: 'getCellData',
            put: 'putCellData'
        }
    },
    gridListeners: {
        initialize: 'onCmpReady'
    },
    getCellData: function(format, erase) {
        var cmp = this.getCmp(),
            selectable = cmp.getSelectable(),
            selection = selectable && selectable.getSelection(),
            ret = [],
            isRaw = format === 'raw',
            isText = format === 'text',
            data, dataIndex, lastRecord, column, record, row;
        if (selection) {
            selection.eachCell(function(location, colIdx, rowIdx) {
                column = location.column;
                record = location.record;
                if (column.getIgnoreExport()) {
                    return;
                }
                if (lastRecord !== record) {
                    lastRecord = record;
                    ret.push(row = []);
                }
                dataIndex = column.getDataIndex();
                data = record.data[dataIndex];
                if (!isRaw) {
                    data = column.printValue(data);
                    if (isText) {
                        data = Ext.util.Format.stripTags(data);
                    }
                }
                row.push(data);
                if (erase && dataIndex) {
                    record.set(dataIndex, null);
                }
            });
        }
        return Ext.util.TSV.encode(ret);
    },
    getCells: function(format, erase) {
        var cmp = this.getCmp(),
            selectable = cmp.getSelectable(),
            selection = selectable && selectable.getSelection(),
            ret = [],
            dataIndex, lastRecord, record, row;
        if (selection) {
            selection.eachCell(function(location) {
                record = location.record;
                if (lastRecord !== record) {
                    lastRecord = record;
                    ret.push(row = {
                        model: record.self,
                        fields: []
                    });
                }
                dataIndex = location.column.getDataIndex();
                row.fields.push({
                    name: dataIndex,
                    value: record.data[dataIndex]
                });
                if (erase && dataIndex) {
                    record.set(dataIndex, null);
                }
            });
        }
        return ret;
    },
    getTextData: function(format, erase) {
        return this.getCellData(format, erase);
    },
    putCellData: function(data, format) {
        var cmp = this.getCmp(),
            values = Ext.util.TSV.decode(data, undefined, null),
            recCount = values.length,
            colCount = recCount ? values[0].length : 0,
            columns = cmp.getHeaderContainer().getVisibleColumns(),
            store = cmp.getStore(),
            maxRowIdx = store ? store.getCount() - 1 : 0,
            maxColIdx = columns.length - 1,
            selectable = cmp.getSelectable(),
            selection = selectable && selectable.getSelection(),
            row, sourceRowIdx, sourceColIdx, column, record, columnIndex, recordIndex, dataObject, destination, dataIndex, startColumnIndex, startRecordIndex;
        if (maxRowIdx <= 0 || maxColIdx <= 0) {
            return;
        }
        if (selection) {
            selection.eachCell(function(c) {
                destination = c;
                return false;
            });
        }
        startColumnIndex = destination ? destination.columnIndex : 0;
        startRecordIndex = destination ? destination.recordIndex : 0;
        for (sourceRowIdx = 0; sourceRowIdx < recCount; sourceRowIdx++) {
            row = values[sourceRowIdx];
            recordIndex = startRecordIndex + sourceRowIdx;
            if (recordIndex > maxRowIdx) {
                break;
            }
            record = store.getAt(recordIndex);
            dataObject = {};
            columnIndex = startColumnIndex;
            sourceColIdx = 0;
            while (sourceColIdx < colCount && columnIndex <= maxColIdx) {
                column = columns[columnIndex];
                dataIndex = column.getDataIndex();
                if (!column.getIgnoreExport()) {
                    if (dataIndex && (format === 'raw' || format === 'text')) {
                        dataObject[dataIndex] = row[sourceColIdx];
                    }
                    sourceColIdx++;
                }
                columnIndex++;
            }
            record.set(dataObject);
        }
    },
    putTextData: function(data, format) {
        this.putCellData(data, format);
    },
    getTarget: function(comp) {
        return comp.element;
    },
    privates: {
        validateAction: function(event) {
            var cmp = this.getCmp(),
                viewLocation = cmp.getNavigationModel().getLocation(),
                selectable = cmp.getSelectable(),
                checkColumn = selectable && selectable.getCheckbox();
            if (viewLocation && viewLocation.actionable && checkColumn !== viewLocation.column) {
                return false;
            }
        }
    }
});

Ext.define('Ext.grid.plugin.Editable', {
    extend: Ext.plugin.Abstract,
    alias: 'plugin.grideditable',
    config: {
        grid: null,
        triggerEvent: 'childdoubletap',
        formConfig: null,
        defaultFormConfig: {
            xtype: 'formpanel',
            scrollable: true,
            items: [
                {
                    xtype: 'fieldset'
                }
            ]
        },
        toolbarConfig: {
            xtype: 'titlebar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    ui: 'alt',
                    text: 'Cancel',
                    align: 'left',
                    action: 'cancel'
                },
                {
                    xtype: 'button',
                    ui: 'alt',
                    text: 'Submit',
                    align: 'right',
                    action: 'submit'
                }
            ]
        },
        enableDeleteButton: true
    },
    init: function(grid) {
        this.setGrid(grid);
        grid.setTouchAction({
            doubleTapZoom: false
        });
    },
    destroy: function() {
        this.cleanup();
        this.callParent();
    },
    updateGrid: function(grid, oldGrid) {
        var triggerEvent = this.getTriggerEvent();
        if (oldGrid) {
            oldGrid.un(triggerEvent, 'onTrigger', this);
        }
        if (grid) {
            grid.on(triggerEvent, 'onTrigger', this);
        }
    },
    onCancelTap: function() {
        this.sheet.hide();
    },
    onSubmitTap: function() {
        this.form.getRecord().set(this.form.getValues());
        this.sheet.hide();
    },
    onSheetHide: function() {
        this.cleanup();
    },
    getEditorFields: function(columns) {
        var fields = [],
            ln = columns.length,
            map = {},
            i, column, editor;
        for (i = 0; i < ln; i++) {
            column = columns[i];
            editor = column.ensureEditor();
            if (editor) {
                if (map[column.getDataIndex()]) {
                    Ext.raise('An editable column with the same dataIndex "' + column.getDataIndex() + '" already exists.');
                }
                map[column.getDataIndex()] = true;
                if (editor.isEditor) {
                    editor = editor.getField();
                }
                editor.setLabel(column.getText());
                editor.setName(column.getDataIndex());
                fields.push(editor);
            }
        }
        return fields;
    },
    onTrigger: function(grid, location) {
        var me = this,
            record = location.record,
            formConfig = me.getFormConfig(),
            toolbarConfig = me.getToolbarConfig(),
            fields, form, sheet, toolbar;
        if (!record || !location.row) {
            return;
        }
        if (formConfig) {
            me.form = form = Ext.factory(formConfig, Ext.form.Panel);
        } else {
            me.form = form = Ext.factory(me.getDefaultFormConfig());
            fields = me.getEditorFields(grid.getColumns());
            form.down('fieldset').setItems(fields);
            form.clearFields = true;
        }
        toolbar = Ext.factory(toolbarConfig, Ext.form.TitleBar);
        me.submitButton = toolbar.down('button[action=submit]');
        toolbar.down('button[action=cancel]').on('tap', 'onCancelTap', me);
        me.submitButton.on('tap', 'onSubmitTap', me);
        form.on({
            change: 'onFieldChange',
            delegate: 'field',
            scope: me
        });
        form.setRecord(record);
        me.sheet = sheet = grid.add({
            xtype: 'sheet',
            items: [
                toolbar,
                form
            ],
            hideOnMaskTap: true,
            enter: 'right',
            exit: 'right',
            right: 0,
            width: 320,
            layout: 'fit',
            stretchY: true,
            hidden: true
        });
        if (me.getEnableDeleteButton()) {
            form.add({
                xtype: 'button',
                text: 'Delete',
                ui: 'decline',
                margin: 10,
                handler: function() {
                    grid.getStore().remove(record);
                    sheet.hide();
                }
            });
        }
        sheet.on('hide', 'onSheetHide', me);
        sheet.show();
    },
    privates: {
        onFieldChange: function() {
            this.submitButton.setDisabled(!this.form.isValid());
        },
        cleanup: function() {
            var me = this,
                form = me.form;
            if (form && !form.destroyed && form.clearFields) {
                form.removeAll(false);
            }
            me.form = me.sheet = Ext.destroy(me.sheet);
        }
    }
});

Ext.define('Ext.grid.plugin.PagingToolbar', {
    extend: Ext.plugin.Abstract,
    alias: [
        'plugin.pagingtoolbar',
        'plugin.gridpagingtoolbar'
    ],
    mixins: [
        Ext.mixin.Hookable
    ],
    config: {
        grid: null,
        currentPage: 1,
        pageSize: 0,
        totalCount: 0,
        totalPages: 0,
        loadPages: null,
        buffer: 250,
        toolbar: {
            xtype: 'pagingtoolbar',
            docked: 'bottom'
        }
    },
    init: function(grid) {
        this.setGrid(grid);
        grid.add(this.getToolbar());
    },
    destroy: function() {
        this.setBuffer(null);
        this.setGrid(null);
        this.callParent();
    },
    updateGrid: function(grid, oldGrid) {
        var me = this;
        me.gridListeners = me.storeListeners = me.scrollListeners = Ext.destroy(me.gridListeners, me.storeListeners, me.scrollListeners);
        if (grid) {
            me.gridListeners = grid.on({
                updatevisiblecount: 'onUpdateVisibleCount',
                storechange: 'onStoreChanged',
                destroyable: true,
                scope: me
            });
            me.scrollListeners = grid.getScrollable().on({
                scrollend: 'checkPageChange',
                buffer: 100,
                scope: me
            });
            me.bindStore(grid.getStore());
        }
    },
    bindStore: function(store) {
        var me = this;
        Ext.destroy(me.storeListeners);
        me.getToolbar().setDisabled(!!store);
        if (!store) {
            return;
        }
        me.storeListeners = store.on({
            add: 'onTotalCountChange',
            remove: 'onTotalCountChange',
            refresh: 'onTotalCountChange',
            clear: 'onTotalCountChange',
            destroyable: true,
            scope: me
        });
        me.setLoadPages(store.pageSize > 0);
        me.cancelBufferTask();
        if (store.isLoaded()) {
            me.onTotalCountChange(store);
        }
    },
    onStoreChanged: function(grid, store) {
        this.bindStore(store);
    },
    getPageData: function() {
        var grid = this.getGrid(),
            store = grid.getStore(),
            totalCount = store.getTotalCount() || store.getCount(),
            pageSize = this.getLoadPages() ? store.pageSize : grid.visibleCount,
            pageCount = Math.ceil(totalCount / pageSize);
        return {
            totalCount: totalCount,
            totalPages: Ext.Number.isFinite(pageCount) ? pageCount : 1,
            currentPage: store.currentPage,
            pageSize: pageSize
        };
    },
    checkPageChange: function() {
        var me = this,
            grid = me.getGrid(),
            pageSize = me.getPageSize(),
            currentPage = me.getCurrentPage(),
            topVisibleIndex = grid.topVisibleIndex,
            newPage = Math.ceil((topVisibleIndex + pageSize) / pageSize);
        if (grid.getStore() && !me.getLoadPages() && newPage > 0 && newPage !== currentPage) {
            me.preventGridScroll = true;
            me.setCurrentPage(newPage);
            me.preventGridScroll = false;
        }
    },
    updateBuffer: function(buffer) {
        var me = this,
            bufferTask = me.bufferTask;
        if (Ext.isNumber(buffer)) {
            me.bufferTask = bufferTask || new Ext.util.DelayedTask(me.bufferTaskRun, me);
            me.cancelBufferTask();
        } else if (bufferTask) {
            bufferTask.cancel();
            me.bufferTask = null;
        }
    },
    cancelBufferTask: function() {
        if (this.bufferTask) {
            this.bufferTask.cancel();
        }
    },
    loadCurrentPage: function() {
        this.getGrid().getStore().loadPage(this.getCurrentPage());
    },
    bufferTaskRun: function() {
        this.loadCurrentPage();
    },
    applyToolbar: function(toolbar, oldToolbar) {
        return Ext.factory(toolbar, Ext.Toolbar, oldToolbar);
    },
    updateToolbar: function(toolbar) {
        var me = this;
        if (toolbar) {
            toolbar.getSliderField().on({
                change: 'onPageChange',
                dragstart: 'onPageSliderDrag',
                drag: 'onPageSliderDrag',
                dragend: 'onPageSliderDragEnd',
                scope: me
            });
            toolbar.getNextButton().on({
                tap: 'onNextPageTap',
                scope: me
            });
            toolbar.getPrevButton().on({
                tap: 'onPreviousPageTap',
                scope: me
            });
        }
    },
    onPageChange: function(field, value) {
        this.setCurrentPage(value);
    },
    onPageSliderDrag: function(field, slider, value) {
        this.isDragging = true;
        this.setCurrentPage(Ext.isArray(value) ? value[0] : value);
    },
    onPageSliderDragEnd: function() {
        var me = this;
        me.isDragging = false;
        if (me.getBuffer() === 'dragend' || me.bufferTask.Id) {
            me.cancelBufferTask();
            me.loadCurrentPage();
        }
    },
    onNextPageTap: function() {
        var nextPage = this.getCurrentPage() + 1;
        if (nextPage <= this.getTotalPages()) {
            this.setCurrentPage(nextPage);
        }
    },
    onPreviousPageTap: function() {
        var previousPage = this.getCurrentPage() - 1;
        if (previousPage > 0) {
            this.setCurrentPage(previousPage);
        }
    },
    onTotalCountChange: function(store) {
        var me = this,
            data = me.getPageData();
        me.bulkConfigs = true;
        me.setConfig(data);
        me.bulkConfigs = false;
        me.syncSummary();
    },
    onUpdateVisibleCount: function(grid, visibleCount) {
        var store = grid.getStore(),
            totalCount;
        if (store && !this.getLoadPages()) {
            visibleCount -= 1;
            this.setPageSize(visibleCount);
            totalCount = store.getTotalCount() || store.getCount();
            this.setTotalPages(Math.ceil(totalCount / visibleCount));
        }
    },
    updateTotalPages: function() {
        if (!this.isConfiguring) {
            this.syncSummary();
        }
    },
    updateCurrentPage: function(page) {
        var me = this,
            isDragging = me.isDragging,
            bufferTask = me.bufferTask,
            buffer = me.getBuffer();
        if (!me.isConfiguring) {
            if (me.getLoadPages()) {
                if (bufferTask && Ext.isNumber(buffer) && isDragging) {
                    bufferTask.delay(buffer);
                } else if (buffer !== 'dragend' || !isDragging) {
                    me.getGrid().getStore().loadPage(page);
                }
            } else {
                me.syncSummary();
            }
        }
    },
    updateTotalCount: function(totalCount) {
        if (!this.isConfiguring) {
            this.syncSummary();
        }
    },
    getPageTopRecord: function(page) {
        var grid = this.getGrid(),
            store = grid && grid.getStore(),
            pageSize = this.getPageSize(),
            pageTopRecordIndex = (page - 1) * pageSize;
        return store && store.getAt(pageTopRecordIndex);
    },
    privates: {
        syncSummary: function() {
            var me = this,
                grid = me.getGrid(),
                toolbar = me.getToolbar(),
                sliderField = toolbar.getSliderField(),
                currentPage = me.getCurrentPage(),
                totalPages = me.getTotalPages(),
                pageTopRecord;
            if (me.bulkConfigs) {
                return;
            }
            toolbar.getSummaryComponent().element.dom.innerHTML = currentPage + ' / ' + totalPages;
            sliderField.setMaxValue(totalPages || 1);
            sliderField.setValue(currentPage);
            sliderField.setDisabled(totalPages <= 1);
            pageTopRecord = me.getPageTopRecord(currentPage);
            if (grid && !me.preventGridScroll && pageTopRecord) {
                grid.scrollToRecord(pageTopRecord);
            }
            toolbar.getNextButton().setDisabled(currentPage === totalPages);
            toolbar.getPrevButton().setDisabled(currentPage === 1);
        }
    }
});

Ext.define('Ext.grid.plugin.RowDragDrop', {
    extend: Ext.plugin.dd.DragDrop,
    alias: 'plugin.gridrowdragdrop',
    handle: '.' + Ext.baseCSSPrefix + 'gridrow',
    groups: 'gridRowGroup',
    dropIndicator: Ext.baseCSSPrefix + 'grid-drop-indicator',
    dragText: '{0} selected row{1}',
    dragIcon: (Ext.supports.Touch && Ext.supports.TouchEvents) ? true : false,
    init: function(view) {
        var me = this;
        if (view.isLockedGrid) {
            me.addDragIndicator(view);
        }
        view.on('initialize', me.onViewInitialize, me);
    },
    onViewInitialize: function(view) {
        var me = this,
            dragZone = {};
        if (me.enableDrag) {
            if (me.proxy) {
                dragZone.proxy = me.proxy;
            }
            if (me.activateOnLongPress) {
                dragZone.activateOnLongPress = me.activateOnLongPress;
            }
            me.dragZone = new Ext.grid.GridDragZone(Ext.apply({
                element: view.bodyElement,
                view: view,
                dragText: me.dragText,
                handle: me.handle,
                groups: me.groups,
                scrollAmount: me.scrollAmount,
                containerScroll: me.containerScroll,
                constrain: Ext.getBody()
            }, dragZone));
        }
        if (me.enableDrop) {
            me.dropZone = new Ext.grid.GridDropZone({
                view: view,
                element: view.bodyElement,
                groups: me.groups,
                dropIndicator: me.dropIndicator,
                overCls: me.overCls,
                copy: me.copy
            });
        }
        if (!view.isLockedGrid) {
            me.addDragIndicator(view);
        }
    },
    addDragIndicator: function(view) {
        if (!this.dragIcon) {
            return;
        }
        if (view.isLockedGrid) {
            view.on({
                columnremove: 'onColumnRemove',
                createregion: 'onCreateRegion',
                scope: this
            });
        } else if (view.insertColumn) {
            view.insertColumn(0, {
                xtype: 'dragcolumn'
            });
        }
    },
    onCreateRegion: function(grid, columns) {
        columns = Ext.Array.from(columns);
        if (columns.length && !grid.hasDragColumn) {
            columns = Ext.Array.insert(columns, 0, [
                {
                    xtype: 'dragcolumn'
                }
            ]);
            grid.hasDragColumn = true;
        }
        return columns;
    },
    onColumnRemove: function(regionGrid, column) {
        if (this.cmp.hasDragColumn && !column.isDragColumn) {
            Ext.asap(this.handleColumnMove, this);
        }
    },
    handleColumnMove: function() {
        var view = this.cmp,
            dragCol = view.query('dragcolumn')[0],
            leftRegion, leftGrid, centerRegion, columns;
        if (!dragCol) {
            return;
        }
        leftRegion = view.getRegion('left');
        leftGrid = leftRegion.getGrid();
        columns = leftGrid.getColumns();
        if (columns.indexOf(dragCol) !== -1 && columns.length === 1) {
            centerRegion = view.getRegion('center');
            centerRegion.getGrid().insertColumn(0, dragCol);
        } else if (columns.length && columns.indexOf(dragCol) === -1) {
            leftGrid.insertColumn(0, dragCol);
        }
    }
});

Ext.define('Ext.grid.plugin.RowExpander', {
    extend: Ext.plugin.Abstract,
    alias: 'plugin.rowexpander',
    config: {
        grid: null,
        column: {
            weight: -1100,
            xtype: 'gridcolumn',
            align: 'center',
            text: '',
            width: 50,
            resizable: false,
            hideable: false,
            sortable: false,
            editable: false,
            ignore: true,
            ignoreExport: true,
            cell: {
                xtype: 'expandercell'
            },
            menuDisabled: true
        }
    },
    expanderSelector: '.' + Ext.baseCSSPrefix + 'expandercell .' + Ext.baseCSSPrefix + 'icon-el',
    init: function(grid) {
        grid.setVariableHeights(true);
        this.setGrid(grid);
    },
    destroy: function() {
        var grid = this.getGrid(),
            col = this.colInstance;
        if (col && !grid.destroying) {
            grid.unregisterColumn(col, true);
        }
        this.callParent();
    },
    applyColumn: function(column, oldColumn) {
        return Ext.factory(Ext.apply({}, column), null, oldColumn);
    },
    updateGrid: function(grid) {
        var me = this;
        if (grid) {
            grid.hasRowExpander = true;
            grid.addCls(Ext.baseCSSPrefix + 'has-rowexpander');
            me.colInstance = grid.registerColumn(me.getColumn());
            grid.refreshScrollerSize();
            grid.element.on({
                tap: 'onGridTap',
                delegate: me.expanderSelector,
                scope: me
            });
        }
    },
    onGridTap: function(e) {
        var cell = Ext.Component.from(e),
            row = cell.row;
        if (row.getGrid() === this.getGrid()) {
            row.toggleCollapsed();
        }
    }
});

Ext.define('Ext.grid.plugin.RowOperations', {
    extend: Ext.plugin.Abstract,
    alias: [
        'plugin.rowoperations',
        'plugin.multiselection',
        'plugin.gridmultiselection'
    ],
    alternateClassName: 'Ext.grid.plugin.MultiSelection',
    config: {
        operation: {
            lazy: true,
            $value: {
                xtype: 'button',
                ui: 'alt decline',
                align: 'right',
                handler: 'me.onOperationTap',
                margin: '0 0 0 10'
            }
        },
        selectButton: {
            lazy: true,
            $value: {
                xtype: 'button',
                ui: 'alt',
                align: 'right',
                margin: '0 0 0 10'
            }
        },
        selectionColumn: {
            sortable: false
        },
        useTriggerButton: true,
        triggerText: 'Select',
        cancelText: 'Done',
        deleteText: 'Delete',
        disableSelection: true,
        selecting: null
    },
    init: function(grid) {
        if (!this.useSelectButton()) {
            this.setSelecting(true);
        }
        if (this.getDisableSelection()) {
            grid.setDisableSelection(true);
        }
    },
    destroy: function() {
        this.setOperation(null);
        this.setSelectButton(null);
        this.callParent();
    },
    getRecords: function() {
        var grid = this.cmp;
        return grid.getSelections();
    },
    onOperationTap: function() {
        this.deleteSelectedRecords();
    },
    onTriggerTap: function() {
        this.setSelecting(!this.getSelecting());
    },
    applyOperation: function(config, button) {
        return Ext.updateWidget(button, config, this, 'createOperation');
    },
    createOperation: function(config) {
        var me = this,
            ret = Ext.apply({
                text: me.getDeleteText()
            }, config);
        ret.plugin = me;
        if (ret.handler === 'me.onOperationTap') {
            ret.handler = 'onOperationTap';
            ret.scope = me;
        }
        return ret;
    },
    updateOperation: function(operation) {
        var selectButton, titleBar, container;
        if (operation) {
            selectButton = this.useSelectButton();
            titleBar = this.cmp.getTitleBar();
            if (titleBar) {
                if (selectButton) {
                    container = selectButton.getParent();
                    titleBar.insert(container.indexOf(selectButton), operation);
                } else {
                    titleBar.add(operation);
                }
            }
        }
    },
    applySelectButton: function(config, button) {
        return Ext.updateWidget(button, config, this, 'createSelectButton');
    },
    createSelectButton: function(config) {
        var me = this,
            ret = Ext.apply({
                text: me.getTriggerText()
            }, config);
        ret.handler = 'onTriggerTap';
        ret.scope = me;
        return ret;
    },
    updateSelectButton: function(selectButton) {
        if (selectButton) {
            this.cmp.getTitleBar().add(selectButton);
        }
    },
    updateSelecting: function(selecting) {
        var me = this,
            grid = me.cmp,
            disableSelection = me.getDisableSelection(),
            operation = me.getOperation(),
            selectButton = me.useSelectButton(),
            selectionModel = grid.getSelectable();
        if (operation) {
            operation.setHidden(!selecting);
        }
        if (selectButton) {
            selectButton.setText(selecting ? me.getCancelText() : me.getTriggerText());
        }
        if (disableSelection) {
            grid.setDisableSelection(!selecting);
        }
        selectionModel.setCheckbox(selecting && me.getSelectionColumn());
        selectionModel.setMode(selecting ? 'multi' : 'single');
        if (disableSelection || !selecting) {
            selectionModel.deselectAll();
        }
    },
    privates: {
        deleteSelectedRecords: function() {
            var records = this.getRecords(),
                store = this.cmp.getStore();
            store.remove(records);
        },
        useSelectButton: function() {
            var me = this,
                titleBar = me.cmp.getTitleBar();
            return me.getUseTriggerButton() && titleBar && titleBar.getTitle() && me.getSelectButton();
        }
    }
});

Ext.define('Ext.grid.plugin.Summary', {
    extend: Ext.plugin.Abstract,
    alias: [
        'plugin.gridsummary',
        'plugin.summaryrow',
        'plugin.gridsummaryrow'
    ],
    alternateClassName: 'Ext.grid.plugin.SummaryRow',
    mixins: [
        Ext.mixin.Bufferable,
        Ext.mixin.StoreWatcher
    ],
    config: {
        row: {
            lazy: true,
            $value: {
                xtype: 'gridsummaryrow',
                docked: 'bottom'
            }
        }
    },
    inheritUi: true,
    storeListeners: {
        add: 'syncSummary',
        clear: 'syncSummary',
        remove: 'syncSummary',
        refresh: 'syncSummary',
        update: 'syncSummary'
    },
    bufferableMethods: {
        syncSummary: 5
    },
    init: function(grid) {
        var scrollable = grid.getScrollable(),
            row, rowScroller;
        this.setOwner(grid);
        row = this.getRow();
        grid.addCls(Ext.baseCSSPrefix + 'grid-has-summaryrow');
        if (scrollable) {
            rowScroller = row.getScrollable();
            if (!rowScroller) {
                row.setScrollable({
                    x: false,
                    y: false
                });
                rowScroller = row.getScrollable();
            }
            rowScroller.addPartner(scrollable, 'x');
        }
    },
    destroy: function() {
        this.setOwner(null);
        this.callParent();
    },
    createRow: function(config) {
        return Ext.apply({
            viewModel: this.getOwner().getItemConfig().viewModel
        }, config);
    },
    applyRow: function(row) {
        if (row) {
            row = this.createRow(row);
            row = this.cmp.add(row);
        }
        return row;
    },
    updateStore: function(store, oldStore) {
        this.mixins.storewatcher.updateStore.call(this, store, oldStore);
        if (store && store.isLoaded()) {
            this.syncSummary();
        }
    },
    privates: {
        doSyncSummary: function() {
            var row = this.getRow();
            if (row) {
                row.syncSummary();
            }
        },
        onContainerScroll: function(scr, x) {
            var item = this.getRow(),
                scroller;
            if (!(scroller = item.getScrollable())) {
                item.setScrollable({
                    x: false,
                    y: false
                });
                scroller = item.getScrollable();
            }
            scroller.scrollTo(x, null);
        }
    }
});

Ext.define('Ext.grid.plugin.ViewOptionsListItem', {
    extend: Ext.dataview.SimpleListItem,
    xtype: 'viewoptionslistitem',
    toolDefaults: {
        hideMode: 'visibility'
    },
    tools: {
        handle: {
            zone: 'start',
            cls: Ext.baseCSSPrefix + 'no-ripple',
            iconCls: Ext.baseCSSPrefix + 'column-options-sortablehandle'
        },
        icon: {
            zone: 'start',
            iconCls: ''
        },
        group: {
            zone: 'end',
            iconCls: Ext.baseCSSPrefix + 'column-options-groupindicator',
            stopEvent: false
        },
        hide: {
            zone: 'end',
            iconCls: Ext.baseCSSPrefix + 'column-options-visibleindicator',
            stopEvent: false
        }
    },
    cls: Ext.baseCSSPrefix + 'column-options-item',
    updateRecord: function(record, oldRecord) {
        var me = this,
            tool;
        if (!record) {
            return;
        }
        me.callParent([
            record,
            oldRecord
        ]);
        me.toggleCls(me.hiddenColumnCls, record.get('hidden'));
        me.toggleCls(me.groupedColumnCls, record.get('grouped'));
        tool = me.lookupTool('icon');
        tool.setIconCls(record.get('header') ? me.headerCls : me.leafCls);
        me.lookupTool('group').setHidden(!record.get('groupable'));
        me.lookupTool('hide').setHidden(!record.get('hideable'));
    },
    privates: {
        groupedColumnCls: Ext.baseCSSPrefix + 'column-options-grouped',
        headerCls: Ext.baseCSSPrefix + 'column-options-folder',
        hiddenColumnCls: Ext.baseCSSPrefix + 'column-options-hidden',
        leafCls: Ext.baseCSSPrefix + 'column-options-leaf'
    }
});

Ext.define('Ext.grid.plugin.ViewOptions', {
    extend: Ext.plugin.Abstract,
    alias: 'plugin.gridviewoptions',
    config: {
        grid: null,
        sheetWidth: 320,
        sheet: {
            lazy: true,
            $value: {
                xtype: 'sheet',
                cls: Ext.baseCSSPrefix + 'gridviewoptions',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Customize',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Done',
                                ui: 'action',
                                align: 'right',
                                role: 'donebutton'
                            }
                        ]
                    }
                ],
                hidden: true,
                hideOnMaskTap: true,
                enter: 'right',
                exit: 'right',
                modal: true,
                right: 0,
                layout: 'fit',
                stretchY: true
            }
        },
        columnList: {
            lazy: true,
            $value: {
                xtype: 'nestedlist',
                title: 'Columns',
                clearSelectionOnListChange: false,
                listConfig: {
                    triggerEvent: null,
                    infinite: true,
                    mode: 'MULTI',
                    variableHeights: true,
                    plugins: {
                        sortablelist: {
                            source: {
                                handle: '.' + Ext.baseCSSPrefix + 'column-options-sortablehandle'
                            }
                        }
                    },
                    itemConfig: {
                        xtype: 'viewoptionslistitem'
                    },
                    itemTpl: '{text}'
                },
                store: {
                    type: 'tree',
                    fields: [
                        'id',
                        'text',
                        'dataIndex',
                        'header',
                        'hidden',
                        'hideable',
                        'grouped',
                        'groupable'
                    ],
                    root: {
                        text: 'Columns'
                    }
                }
            }
        },
        visibleIndicatorSelector: '.' + Ext.baseCSSPrefix + 'column-options-visibleindicator',
        groupIndicatorSelector: '.' + Ext.baseCSSPrefix + 'column-options-groupindicator'
    },
    init: function(grid) {
        this.setGrid(grid);
    },
    destroy: function() {
        this.destroyMembers('sheet', 'columnList');
        this.callParent();
    },
    updateGrid: function(grid, oldGrid) {
        if (oldGrid) {
            oldGrid.getHeaderContainer().renderElement.un({
                contextmenu: 'onHeaderContextMenu',
                longpress: 'onHeaderLongPress',
                scope: this
            });
            oldGrid.un({
                columnadd: 'onColumnAdd',
                columnmove: 'onColumnMove',
                columnremove: 'onColumnRemove',
                columnhide: 'onColumnHide',
                columnshow: 'onColumnShow',
                scope: this
            });
        }
        if (grid) {
            grid.getHeaderContainer().renderElement.on({
                contextmenu: 'onHeaderContextMenu',
                longpress: 'onHeaderLongPress',
                scope: this
            });
        }
    },
    applySheet: function(sheet) {
        if (sheet && !sheet.isComponent) {
            sheet = Ext.factory(sheet, Ext.Sheet);
        }
        return sheet;
    },
    applyColumnList: function(list) {
        if (list && !list.isComponent) {
            list = Ext.factory(list, Ext.Container);
        }
        return list;
    },
    updateColumnList: function(list) {
        if (list) {
            list.on({
                listchange: 'onListChange',
                scope: this
            });
            list.on('dragsort', 'onColumnDrag', this, {
                delegate: '> list'
            });
            this.attachTapListeners();
        }
    },
    updateSheet: function(sheet) {
        sheet.setWidth(this.getSheetWidth());
        sheet.add(this.getColumnList());
        sheet.on('hide', 'onSheetHide', this);
    },
    onDoneButtonTap: function() {
        this.getSheet().hide();
    },
    onColumnDrag: function(list, row, newIndex) {
        var column = Ext.getCmp(row.getRecord().get('id')),
            parent = column.getParent(),
            siblings = parent.getInnerItems(),
            i, ln, sibling;
        for (i = 0 , ln = newIndex; i < ln; i++) {
            sibling = siblings[i];
            if (!sibling.isHeaderGroup && sibling.getIgnore()) {
                newIndex += 1;
            }
        }
        this.isMoving = true;
        parent.insert(newIndex, column);
        this.isMoving = false;
    },
    attachTapListeners: function() {
        var activeList = this.getColumnList().getActiveItem();
        if (!activeList.hasAttachedTapListeners) {
            activeList.onBefore({
                childtap: 'onListChildTap',
                scope: this
            });
            activeList.hasAttachedTapListeners = true;
        }
    },
    onListChange: function(nestedList, list) {
        var store = list.getStore(),
            activeNode = store.getNode(),
            records = activeNode.childNodes,
            ln = records.length,
            i, column, record;
        for (i = 0; i < ln; i++) {
            record = records[i];
            column = Ext.getCmp(record.getId());
            record.set('hidden', column.isHidden());
        }
        this.attachTapListeners();
    },
    onListChildTap: function(list, location) {
        var me = this,
            handled = false,
            e = location.event;
        if (Ext.fly(e.target).is(me.getVisibleIndicatorSelector())) {
            me.onVisibleIndicatorTap(location.row, location.record);
            handled = true;
        } else if (Ext.fly(e.target).is(me.getGroupIndicatorSelector())) {
            me.onGroupIndicatorTap(location.row, location.record);
            handled = true;
        }
        return !handled;
    },
    onVisibleIndicatorTap: function(row, record) {
        var hidden = !record.get('hidden'),
            column = Ext.getCmp(record.get('id'));
        column.setHidden(hidden);
        record.set('hidden', hidden);
    },
    onGroupIndicatorTap: function(row, record) {
        var me = this,
            grouped = !record.get('grouped'),
            store = me.getGrid().getStore();
        this.getListRoot().cascade(function(node) {
            node.set('grouped', false);
        });
        if (grouped) {
            store.setGrouper({
                property: record.get('dataIndex')
            });
            record.set('grouped', true);
        } else {
            store.setGrouper(null);
        }
    },
    onColumnHide: function(headerContainer, column) {
        var nestedList = this.getColumnList(),
            activeList = nestedList.getActiveItem(),
            store = activeList.getStore(),
            record = store.getById(column.getId());
        if (record) {
            record.set('hidden', true);
        }
    },
    onColumnShow: function(headerContainer, column) {
        var nestedList = this.getColumnList(),
            activeList = nestedList.getActiveItem(),
            store = activeList.getStore(),
            record = store.getById(column.getId());
        if (record) {
            record.set('hidden', false);
        }
    },
    onColumnAdd: function(grid, column) {
        var me = this,
            nestedList, mainHeaderCt, header, store, parentNode, isGridGrouped, grouper, dataIndex, data, idx, headerNode;
        if (column.getIgnore() || this.isMoving) {
            return;
        }
        nestedList = me.getColumnList();
        mainHeaderCt = grid.getHeaderContainer();
        header = column.getParent();
        store = nestedList.getStore();
        parentNode = store.getRoot();
        isGridGrouped = grid.getGrouped();
        grouper = grid.getStore().getGrouper();
        dataIndex = column.getDataIndex();
        data = {
            id: column.getId(),
            text: column.getText() || '\xa0',
            groupable: isGridGrouped && column.canGroup(),
            hidden: column.isHidden(),
            hideable: column.getHideable(),
            grouped: !!(isGridGrouped && grouper && grouper.getProperty() === dataIndex),
            dataIndex: column.getDataIndex(),
            leaf: true
        };
        if (header !== mainHeaderCt) {
            headerNode = parentNode.findChild('id', header.getId());
            if (!headerNode) {
                idx = header.getParent().indexOf(header);
                headerNode = parentNode.insertChild(idx, {
                    groupable: false,
                    header: true,
                    hidden: header.isHidden(),
                    id: header.getId(),
                    text: header.getText()
                });
            }
            idx = header.indexOf(column);
            parentNode = headerNode;
        } else {
            idx = mainHeaderCt.indexOf(column);
        }
        parentNode.insertChild(idx, data);
    },
    onColumnMove: function(headerContainer, column, header) {
        this.onColumnRemove(headerContainer, column);
        this.onColumnAdd(headerContainer, column, header);
    },
    onColumnRemove: function(headerContainer, column) {
        var root, record;
        if (column.getIgnore() || this.isMoving) {
            return;
        }
        root = this.getListRoot();
        record = root.findChild('id', column.getId(), true);
        if (record) {
            record.parentNode.removeChild(record, true);
        }
    },
    onHeaderContextMenu: function(e) {
        e.preventDefault();
    },
    onHeaderLongPress: function(e) {
        if (!this.getSheet().isVisible()) {
            this.showViewOptions();
        }
    },
    hideViewOptions: function() {
        var me = this,
            sheet = me.getSheet();
        me.getGrid().getHeaderContainer().setSortable(me.cachedSortable);
        delete me.cachedSortable;
        sheet.hide();
    },
    onSheetHide: function() {
        this.hideViewOptions();
    },
    showViewOptions: function() {
        var me = this,
            sheet = me.getSheet(),
            header;
        me.setup();
        if (!sheet.isVisible()) {
            header = me.getGrid().getHeaderContainer();
            me.cachedSortable = header.getSortable();
            header.setSortable(false);
            me.updateListInfo();
            sheet.show();
        }
    },
    privates: {
        getListRoot: function() {
            return this.getColumnList().getStore().getRoot();
        },
        setup: function() {
            var me = this,
                grid = me.getGrid(),
                sheet, root;
            if (me.doneSetup) {
                return;
            }
            me.doneSetup = true;
            root = this.getListRoot();
            root.removeAll();
            grid.getColumns().forEach(function(leaf) {
                me.onColumnAdd(grid, leaf);
            });
            grid.on({
                columnadd: 'onColumnAdd',
                columnmove: 'onColumnMove',
                columnremove: 'onColumnRemove',
                columnhide: 'onColumnHide',
                columnshow: 'onColumnShow',
                scope: me
            });
            sheet = me.getSheet();
            sheet.down('button[role=donebutton]').on({
                tap: 'onDoneButtonTap',
                scope: me
            });
        },
        updateListInfo: function() {
            var grid = this.getGrid(),
                store = grid.getStore(),
                grouper = store.getGrouper(),
                isGridGrouped = grid.getGrouped(),
                grouperProp = grouper && grouper.getProperty();
            this.getColumnList().getStore().getRoot().cascade(function(node) {
                var grouped = false,
                    dataIndex;
                if (isGridGrouped) {
                    dataIndex = node.get('dataIndex');
                    grouped = dataIndex && dataIndex === grouperProp;
                }
                node.set('grouped', dataIndex && grouped);
            });
        }
    }
});

Ext.define('Ext.grid.rowedit.Bar', {
    extend: Ext.Panel,
    xtype: 'roweditorbar',
    isRowEditorBar: true,
    mixins: [
        Ext.mixin.Bufferable
    ],
    config: {
        active: null,
        defaultCellUI: null,
        grid: null
    },
    layout: {
        type: 'hbox'
    },
    autoSize: true,
    scrollable: {
        monitorScroll: true,
        x: false,
        y: false
    },
    ui: 'roweditor',
    bufferableMethods: {
        syncColumns: 50
    },
    gridHeaderListeners: null,
    gridListeners: null,
    doDestroy: function() {
        this.setActive(false);
        this.callParent();
    },
    commit: function() {
        this.eachEditor(function(item, driver) {
            driver.commit(item);
        });
    },
    eachEditor: function(fn) {
        var items = this.items.items,
            driver, i, item, ret;
        for (i = 0; i < items.length; ++i) {
            item = items[i];
            if (item.$hasValue) {
                driver = item.$driver;
                if (driver) {
                    if ((ret = fn(item, driver)) === false) {
                        break;
                    }
                }
            }
        }
        return ret;
    },
    getEditorValues: function(out, all) {
        this.eachEditor(function(item, driver) {
            if (all || (item.$hasValue && item.isDirty())) {
                (out || (out = {}))[item.$column.getDataIndex()] = driver.get(item);
            }
        });
        return out;
    },
    getDriver: function(cell) {
        var me = this,
            drivers = me.plugin.getDrivers(),
            driver = drivers[cell.xtype],
            base = drivers.default,
            xtypes = cell.xtypes,
            i;
        if (cell.driver) {
            driver = Ext.apply({}, drivers[cell.driver], driver);
        }
        if (xtypes) {
            for (i = 0; !driver && i < xtypes.length; ++i) {
                driver = drivers[xtypes[i]];
            }
        }
        if (driver && driver !== base) {
            driver = Ext.apply({}, driver, base);
        }
        return driver || base;
    },
    hasVerticalScroller: function() {
        var grid = this.grid,
            region = grid.region,
            visibleGrids = region && region.lockedGrid;
        if (visibleGrids) {
            visibleGrids = visibleGrids.visibleGrids;
            return grid === visibleGrids[visibleGrids.length - 1];
        }
        return true;
    },
    isClean: function() {
        return !this.isDirty();
    },
    isDirty: function() {
        var dirty = false;
        this.eachEditor(function(item) {
            dirty = item.isDirty();
            return !dirty;
        });
        return dirty;
    },
    isValid: function() {
        var valid = false;
        this.eachEditor(function(item) {
            valid = item.validate();
            return valid;
        });
        return valid;
    },
    onHorizontalOverflowChange: function() {
        this.syncTop();
    },
    onScroll: function(grid, info) {
        if (info.y !== info.oldY) {
            this.syncTop();
        }
    },
    onVerticalOverflowChange: function() {
        if (this.hasVerticalScroller()) {
            this.parent.syncWidth();
        }
    },
    onVisibleHeightChange: function() {
        this.syncTop();
    },
    resetChanges: function() {
        this.eachEditor(function(item, driver) {
            driver.reset(item);
        });
    },
    setFieldValues: function(values) {
        this.eachEditor(function(item, driver) {
            var field = item.$column.getDataIndex();
            if (field in values) {
                driver.set(item, values[field]);
            }
        });
    },
    updateActive: function(active) {
        var me = this,
            grid = me.grid,
            gridScroller, items, region, scroller;
        if (!grid || grid.destroying) {
            active = false;
        } else {
            gridScroller = grid.getScrollable();
            scroller = me.getScrollable();
        }
        me.gridListeners = me.gridHeaderListeners = me.gridRegionListeners = Ext.destroy(me.gridListeners, me.gridHeaderListeners, me.gridRegionListeners);
        if (active) {
            me.syncColumns();
            scroller.scrollTo(gridScroller.getPosition().x, null);
            gridScroller.addPartner(scroller, 'x');
            me.gridListeners = grid.on({
                scope: me,
                destroyable: true,
                horizontaloverflowchange: 'onHorizontalOverflowChange',
                scroll: 'onScroll',
                verticaloverflowchange: 'onVerticalOverflowChange',
                visibleheightchange: 'onVisibleHeightChange'
            });
            region = grid.region;
            if (region && region.isLockedGridRegion) {
                me.gridRegionListeners = region.el.on({
                    scope: me,
                    destroyable: true,
                    resize: 'syncColumns'
                });
            }
            me.gridHeaderListeners = grid.getHeaderContainer().on({
                scope: me,
                destroyable: true,
                columnadd: 'syncColumns',
                columnhide: 'syncColumns',
                columnmove: 'syncColumns',
                columnremove: 'syncColumns',
                columnresize: 'syncColumns',
                columnshow: 'syncColumns'
            });
        } else {
            items = me.query('> [isRowEditorItem!=true]');
            if (items.length) {
                me.remove(items, false);
            }
            if (gridScroller) {
                gridScroller.removePartner(scroller);
            }
        }
    },
    updateGrid: function(grid, oldGrid) {
        var me = this;
        me.grid = grid;
        if (me.getActive()) {
            me.updateActive(true);
        }
    },
    updateRecord: function() {
        this.syncColumns();
    },
    doSyncColumns: function() {
        var me = this,
            grid = me.grid,
            record = me.getRecord(),
            items = me.items.items,
            columns, context, i, item, n, region, width;
        if (grid && !grid.destroying) {
            region = grid.region;
            if (region && region.lockedGrid) {
                width = region.measure('w');
                if (grid.getVerticalOverflow() && me.hasVerticalScroller()) {
                    width -= Ext.scrollbar.width();
                }
                me.setWidth(Math.floor(width));
            }
            if (record) {
                columns = grid.getHeaderContainer().getVisibleColumns();
                context = {
                    editors: [],
                    gap: 0,
                    gaps: me.query('> roweditorgap'),
                    index: 0,
                    record: record,
                    total: 0
                };
                for (i = 0 , n = columns.length; i < n; ++i) {
                    me.syncColumn(columns[i], context);
                }
                for (i = context.index; i < items.length; ) {
                    item = items[i];
                    if (item.isRowEditorItem) {
                        item.destroy();
                    } else {
                        me.remove(item, false);
                    }
                }
                me.lastSyncRecord = record;
                me.getScrollable().setSize(context.total, 0);
            }
        }
    },
    syncColumn: function(col, context) {
        var me = this,
            adapters = me.plugin.getAdapters(),
            defaultAdapter = adapters.default,
            cellConfig = col.getCell(),
            cellType = cellConfig.xtype,
            adapter = adapters[cellType],
            itemId = col.$editorItemId,
            dataIndex = col.getDataIndex(),
            record = context.record,
            width = col.getComputedWidth(),
            gap = context.gap,
            cell, driver, gapCmp, value;
        context.total += width;
        value = record.data[dataIndex];
        if (!itemId || !(cell = me.getComponent(itemId))) {
            if (!(cell = col.ensureEditor())) {
                if (adapter !== null) {
                    cell = Ext.apply({
                        itemId: itemId = col.getId(),
                        align: col.getAlign(),
                        column: col,
                        width: width
                    }, adapter, defaultAdapter);
                    driver = me.getDriver(cell);
                }
                if (driver && driver.read) {
                    value = driver.read(record, col, me);
                } else if (!dataIndex) {
                    adapter = null;
                }
                if (adapter !== null) {
                    cell[driver.prop] = driver.convert(value, col);
                } else {
                    cell = null;
                    context.gap += width;
                }
            } else {
                driver = me.getDriver(cell);
                itemId = cell.getId();
                cell._validationRecord = record;
                cell.$hasValue = true;
                cell.addUi('celleditor');
                driver.set(cell, value);
                driver.commit(cell);
            }
            if (cell) {
                col.$editorItemId = itemId;
                cell.$driver = driver;
            }
        } else if (me.lastSyncRecord !== record) {
            driver = cell.$driver;
            if (driver.read) {
                value = driver.read(record, col, me);
            }
            cell._validationRecord = record;
            driver.set(cell, value);
            driver.commit(cell);
        }
        if (cell) {
            if (gap) {
                if (!(gapCmp = context.gaps.pop())) {
                    gapCmp = Ext.apply({
                        xtype: 'roweditorgap',
                        width: gap
                    }, defaultAdapter);
                } else {
                    gapCmp.setWidth(gap);
                }
                me.insert(context.index++, gapCmp);
                context.gap = 0;
            }
            cell = me.insert(context.index++, cell);
            cell.setWidth(width);
            if (cell.isRowEditorCell) {
                cell.$column = col;
            }
        }
    },
    syncTop: function() {
        this.parent.unanimated().syncTop();
    }
});

Ext.define('Ext.grid.rowedit.Cell', {
    extend: Ext.Component,
    xtype: 'roweditorcell',
    isRowEditorCell: true,
    isRowEditorItem: true,
    config: {
        align: null,
        column: null
    },
    cls: Ext.baseCSSPrefix + 'roweditorcell',
    updateAlign: function(align) {
        this.setUserCls(Ext.grid.cell.Base.prototype.alignCls[align]);
    }
});

Ext.define('Ext.grid.rowedit.Editor', {
    extend: Ext.dataview.ListItem,
    xtype: 'roweditor',
    isRowEditor: true,
    mixins: [
        Ext.mixin.StoreWatcher,
        Ext.panel.Buttons
    ],
    ownerProperty: 'grid',
    config: {
        buttonContainer: {
            xtype: 'panel',
            ui: 'roweditor-buttons',
            alignSelf: 'center',
            border: true,
            bodyBorder: false,
            defaultType: 'button',
            top: 40,
            weighted: true,
            layout: {
                type: 'hbox',
                align: 'center'
            }
        },
        minButtonWidth: null
    },
    classCls: Ext.baseCSSPrefix + 'roweditor',
    buttonCtCls: Ext.baseCSSPrefix + 'roweditor-button-ct',
    bubbleDirty: false,
    defaultType: 'roweditorbar',
    html: null,
    nameHolder: true,
    plugins: 'tabguard',
    tabGuard: true,
    keyMap: {
        ESC: 'cancel',
        ENTER: 'saveAndClose',
        'CmdOrCtrl+Enter': 'onSaveAndNext',
        'CmdOrCtrl+Down': 'onNextRecord',
        'CmdOrCtrl+Up': 'onPrevRecord',
        HOME: 'onHome',
        END: 'onEnd',
        PAGE_DOWN: 'onPageDown',
        PAGE_UP: 'onPageUp',
        scope: 'this'
    },
    layout: {
        type: 'hbox'
    },
    storeListeners: {
        refresh: 'onStoreRefresh'
    },
    activeLocation: null,
    activeRange: null,
    recordIndex: -1,
    initialize: function() {
        this.callParent();
        this.el.on({
            keydown: function(e) {
                e.stopPropagation();
            }
        });
    },
    cancel: function() {
        this.hide();
    },
    getChanges: function() {
        return this.getEditorValues(false);
    },
    getEditItem: function(column) {
        var ret = null,
            id = column.$editorItemId;
        if (id) {
            this.eachBar(function(bar) {
                ret = bar.getComponent(id);
                return !ret;
            });
        }
        return ret;
    },
    getEditorValues: function(all) {
        var values = {};
        all = all !== false;
        this.eachBar('getEditorValues', [
            values,
            all
        ]);
        return (all || !Ext.Object.isEmpty(values)) ? values : null;
    },
    isDirty: function() {
        return this.eachBar('isClean') === false;
    },
    isValid: function() {
        return this.eachBar('isValid') && this.parent.fireEvent('validateedit', this.activeLocation) !== false;
    },
    resetChanges: function() {
        this.eachBar('resetChanges');
    },
    revertChanges: function() {
        var me = this,
            modified = me.getRecord();
        me.resetChanges();
        modified = modified && modified.modified;
        if (modified) {
            me.setFieldValues(modified);
        }
    },
    saveAndClose: function() {
        if (this.saveChanges(true)) {
            this.hide();
        }
    },
    setFieldValues: function(values) {
        this.eachBar('setFieldValues', [
            values
        ]);
    },
    updateButtons: function(buttonCt) {
        if (buttonCt) {
            buttonCt.addCls(this.buttonCtCls);
        }
    },
    updateHidden: function(value, oldValue) {
        var me = this,
            plugin = me.plugin,
            editing = !value,
            location = me.activeLocation;
        me.callParent([
            value,
            oldValue
        ]);
        plugin.editing = editing;
        if (editing) {
            me.unanimated();
        } else {
            if (location && !plugin.grid.destroying) {
                plugin.grid.setLocation(location);
            }
            me.setRecord(null);
        }
        me.eachBar('setActive', [
            editing
        ]);
        if (editing) {
            me.ensureFocus();
        }
    },
    updateRecord: function(record, oldRecord) {
        var me = this,
            activeLocation = me.activeLocation,
            activeRange = me.activeRange,
            destroying = me.destroying,
            recordIndex, store;
        me.callParent([
            record,
            oldRecord
        ]);
        me.eachBar('setRecord', [
            record
        ]);
        if (record) {
            store = me.grid.store;
            if (activeRange && activeRange.store !== store) {
                activeRange = Ext.destroy(activeRange);
            }
            if (!activeRange) {
                me.activeRange = activeRange = store.createActiveRange();
            }
            me.recordIndex = recordIndex = store.indexOf(record);
            activeRange.goto(recordIndex, recordIndex + 1);
            me.syncTop();
            me.ensureFocus();
            me.activeLocation.fireEditEvent('beginedit', me);
        } else {
            if (activeLocation && !destroying) {
                activeLocation.fireEditEvent('canceledit', me);
            }
            me.activeLocation = me.activeRange = Ext.destroy(activeRange);
            if (!destroying) {
                me.setHidden(true);
            }
        }
    },
    onAdded: function(parent) {
        var grids = parent.visibleGrids,
            config, flex, grid, i;
        if (parent.isLockedGrid) {
            for (i = 0; i < grids.length; ++i) {
                grid = grids[i];
                flex = grid.getFlex();
                config = flex ? {
                    flex: flex
                } : {
                    width: grid.getWidth()
                };
                this.trackGrid(grid, config);
            }
        } else {
            this.trackGrid(parent, {
                flex: 1
            });
        }
    },
    onEnd: function() {
        this.gotoRecord(this.grid.store.getCount() - 1);
    },
    onHome: function() {
        this.gotoRecord(0);
    },
    onNextRecord: function() {
        this.gotoRecord(this.recordIndex + 1);
    },
    onPageDown: function() {
        this.advancePage(1);
    },
    onPageUp: function() {
        this.advancePage(-1);
    },
    onPrevRecord: function() {
        this.gotoRecord(this.recordIndex - 1);
    },
    onResize: function(width, height) {
        this.$height = height;
        this.syncTop();
        this.syncWidth();
    },
    onSaveAndNext: function() {
        var me = this,
            store = me.grid.store,
            nextRecordIndex = me.recordIndex + 1;
        if (me.saveChanges(true)) {
            if (nextRecordIndex < store.getCount()) {
                me.plugin.startEdit(store.getAt(nextRecordIndex));
            } else {
                me.hide();
            }
        }
    },
    onStoreRefresh: function() {
        this.cancel();
    },
    adjustButtons: function(buttons, oldButtons) {
        return this.normalizeButtonBar(buttons, oldButtons, null, this.getButtonContainer());
    },
    advancePage: function(delta) {
        var me = this,
            grid = me.plugin.pickGrid(),
            store = grid.store,
            pageSize = Math.floor(grid.getVisibleHeight() / grid.rowHeight),
            recordIndex = me.recordIndex + pageSize * delta;
        recordIndex = Math.max(0, Math.min(recordIndex, store.getCount() - 1));
        me.gotoRecord(recordIndex);
    },
    beforeEdit: function(location) {
        var me = this,
            plugin = me.plugin,
            rec = me.getRecord(),
            phantom = rec && rec.phantom,
            autoConfirm = plugin.$autoConfirm,
            dirty = me.isDirty(),
            ret = true,
            keep, message;
        if (rec === location.record) {
            return false;
        }
        if (rec && me.isVisible() && (phantom || dirty)) {
            if (phantom) {
                autoConfirm = dirty ? autoConfirm.populated : autoConfirm.new;
            } else {
                autoConfirm = autoConfirm.updated;
            }
            if (!autoConfirm) {
                ret = false;
                message = plugin.getDirtyText();
                if (message) {
                    Ext.toast(message);
                }
            } else if (autoConfirm === true) {
                keep = true;
            }
            if (ret) {
                if (location.beforeEdit(me) === false) {
                    ret = false;
                } else if (keep) {
                    ret = me.saveChanges();
                }
            }
        } else if (location.beforeEdit(me) === false) {
            ret = false;
        }
        return ret;
    },
    gotoRecord: function(recordIndex) {
        var me = this,
            store = me.grid.store;
        if (recordIndex >= 0 && recordIndex < store.getCount()) {
            me.plugin.startEdit(store.getAt(recordIndex));
        }
    },
    startEdit: function(location) {
        var me = this,
            copy;
        me.activeLocation = copy = location.clone();
        copy.editor = me;
        me.setRecord(location.record);
        if (me.getHidden()) {
            me.show();
            me.ensureFocus();
        }
    },
    privates: {
        commit: function() {
            this.eachBar('commit');
        },
        eachBar: function(method, args) {
            var items = this.items,
                fn = typeof method === 'function',
                i, item, n, ret;
            items = items && items.items;
            if (fn) {
                args = args ? args.slice() : [];
                args.unshift(null);
            }
            for (i = 0 , n = items && items.length; i < n; ++i) {
                item = items[i];
                if (item.isRowEditorBar) {
                    if (fn) {
                        args[0] = item;
                        ret = method.apply(null, args);
                    } else {
                        ret = item[method].apply(item, args);
                    }
                    if (ret === false) {
                        break;
                    }
                }
            }
            return ret;
        },
        ensureFocus: function() {
            var me = this,
                field;
            if (me.rendered && !me.getHidden()) {
                me.eachBar('flushSyncColumns');
                field = me.down(':focusable:not(button)');
                if (field) {
                    field.focus();
                }
            }
        },
        getPositionedItemTarget: function() {
            return this.el;
        },
        saveChanges: function(commit) {
            var me = this,
                ret = me.isValid(),
                activeLocation, changes, message;
            if (ret) {
                changes = me.getChanges();
                if (changes) {
                    me.getRecord().set(changes);
                }
                activeLocation = me.activeLocation;
                activeLocation.commit = commit;
                activeLocation.fireEditEvent('edit', me);
                if (activeLocation.commit) {
                    me.commit();
                }
                activeLocation.commit = null;
            } else {
                message = me.plugin.getInvalidToastMessage();
                if (message) {
                    Ext.toast(message);
                }
            }
            return ret;
        },
        syncBtnTop: function() {
            var me = this,
                el = me.el,
                buttonsCt = me.getButtons(),
                buttonsBodyEl = buttonsCt.bodyElement,
                buttonsEl = buttonsCt.el,
                buttonCtHeight = buttonsEl.measure('h'),
                plugin = me.plugin,
                ownerGrid = plugin.grid,
                grid = plugin.pickGrid(),
                top = me.getTop(),
                height = me.$height,
                delta = el.getBorderWidth('tb'),
                btnTop, cls;
            if (ownerGrid.isLockedGrid) {
                top -= grid.getHeaderContainer().measure('h');
            }
            if (top + height + buttonCtHeight < grid.getVisibleHeight()) {
                btnTop = height - delta - buttonsEl.getBorderWidth('t') - buttonsBodyEl.getBorderWidth('t');
                cls = '-below';
            } else {
                btnTop = buttonsEl.getBorderWidth('b') + buttonsBodyEl.getBorderWidth('b') - buttonCtHeight + delta;
                cls = '-above';
            }
            me.setCls(me.buttonCtCls + cls);
            buttonsEl.setTop(btnTop);
        },
        syncTop: function() {
            var me = this,
                plugin = me.plugin,
                grid = plugin.pickGrid(),
                ownerGrid = plugin.grid,
                height = me.$height,
                record = me.getRecord(),
                minTop = 0,
                decoration, item, maxTop, top, visibleHeight, visibleTop;
            if (record) {
                item = grid.mapToItem(record);
                maxTop = visibleHeight = grid.getVisibleHeight();
                visibleTop = grid.getScrollable().getPosition().y;
                if (ownerGrid.getHorizontalOverflow()) {
                    maxTop -= Ext.scrollbar.height();
                }
                if (!grid.infinite) {}
                else if (item) {
                    top = item.$y0 - visibleTop;
                } else {
                    top = (me.recordIndex < grid.getTopRenderedIndex()) ? 0 : visibleHeight;
                }
                if (grid.isGrouping()) {
                    decoration = grid.getPinnedHeader();
                    if (decoration && decoration.$height) {
                        minTop = decoration.$height;
                    }
                    decoration = grid.getPinnedFooter();
                    if (decoration && decoration.$height) {
                        maxTop -= decoration.$height;
                    }
                }
                top = Math.max(minTop, Math.min(top, maxTop - (height || 0)));
                if (ownerGrid.isLockedGrid) {
                    top += grid.getHeaderContainer().measure('h');
                }
                me.setTop(top);
                if (height != null) {
                    me.syncBtnTop();
                }
            }
        },
        syncWidth: function() {
            this.setRight(this.grid.getVerticalOverflow() ? Ext.scrollbar.width() : 0);
        },
        trackGrid: function(grid, config) {
            this.add(Ext.apply({
                grid: grid,
                plugin: this.plugin,
                record: this.getRecord()
            }, config));
        },
        unanimated: function() {
            var me = this,
                cls = Ext.baseCSSPrefix + 'no-transition';
            me.addCls(cls);
            Ext.defer(function() {
                if (!me.destroyed) {
                    me.removeCls(cls);
                }
            }, 50);
            return me;
        }
    }
});

Ext.define('Ext.grid.rowedit.Gap', {
    extend: Ext.Component,
    xtype: 'roweditorgap',
    isRowEditorGap: true,
    isRowEditorItem: true,
    cls: Ext.baseCSSPrefix + 'roweditorgap'
});

Ext.define('Ext.grid.rowedit.Plugin', {
    extend: Ext.plugin.Abstract,
    alias: 'plugin.rowedit',
    config: {
        dirtyText: 'You need to commit or cancel your changes',
        editor: {
            lazy: true,
            $value: {
                xtype: 'roweditor'
            }
        },
        invalidToastMessage: 'Cannot save invalid data',
        triggerEvent: 'doubletap',
        grid: null
    },
    cachedConfig: {
        autoConfirm: 'discard',
        buttons: {
            ok: {
                iconCls: 'fi-check',
                text: null,
                handler: 'up.saveAndClose',
                tooltip: 'Save changes and close editor'
            },
            cancel: {
                iconCls: 'fi-times',
                text: null,
                handler: 'up.cancel',
                tooltip: 'Close editor, discarding any changes'
            },
            reset: {
                iconCls: 'fi-refresh',
                text: null,
                handler: 'up.resetChanges',
                margin: '0 0 0 8',
                tooltip: 'Reset editor to initially displayed values',
                weight: 200
            },
            revert: {
                iconCls: 'fi-undo',
                text: null,
                handler: 'up.revertChanges',
                margin: '0 0 0 8',
                tooltip: 'Reset editor to record\'s original values',
                weight: 210
            }
        },
        confirmation: {
            reset: 'Are you sure you want to discard the current edits?',
            revert: 'Are you sure you want to revert all edits to this record?'
        },
        adapters: {
            "default": {
                xtype: 'roweditorcell'
            },
            checkcell: {
                xtype: 'checkbox',
                isRowEditorCell: true,
                bodyAlign: 'center',
                label: null,
                $hasValue: true
            },
            rownumberercell: {
                driver: 'rownumber'
            },
            expandercell: null,
            widgetcell: null
        },
        drivers: {
            "default": {
                prop: 'value',
                commit: function(item) {
                    item.resetOriginalValue();
                },
                convert: Ext.identityFn,
                get: function(item) {
                    return item.getValue();
                },
                reset: function(item) {
                    item.reset();
                },
                set: function(item, value) {
                    if (item.forceSetValue) {
                        item.forceSetValue(value);
                    } else {
                        item.setValue(value);
                    }
                }
            },
            checkbox: {
                prop: 'checked',
                convert: function(value) {
                    return !!value;
                },
                get: function(item) {
                    return item.getChecked();
                },
                set: function(item, value) {
                    item.setChecked(value);
                }
            },
            rownumber: {
                read: function(record, col, editBar) {
                    return col.printValue(editBar.parent.recordIndex + 1);
                }
            },
            roweditorcell: {
                prop: 'html',
                commit: Ext.emptyFn,
                convert: function(value, col) {
                    return Ext.htmlEncode(col.printValue(value));
                },
                get: function(item) {
                    return Ext.htmlDecode(item.getHtml());
                },
                reset: Ext.emptyFn,
                set: function(item, value) {
                    item.setHtml(this.convert(value, item.getColumn()));
                }
            }
        }
    },
    editing: false,
    constructor: function(config) {
        this.callParent([
            config || {}
        ]);
    },
    init: function(grid) {
        this.callParent([
            grid
        ]);
        this.setGrid(grid);
    },
    doDestroy: function() {
        this.editing = false;
        this.setEditor(null);
        this.setGrid(null);
        this.callParent();
    },
    cancelEdit: function() {
        if (this.editing) {
            this.getEditor().cancel();
        }
    },
    completeEdit: function() {
        if (this.editing) {
            this.getEditor().saveAndClose();
        }
    },
    startEdit: function(record, column) {
        var me = this,
            editor = me.getEditor(),
            location = record;
        if (!location.isLocation) {
            location = me.grid.createLocation({
                record: record,
                column: column
            });
        }
        me.grid.ensureVisible(location.record);
        if (location.record && editor.beforeEdit(location) !== false) {
            editor.startEdit(location);
            return true;
        }
        return false;
    },
    updateAutoConfirm: function(value) {
        var full;
        if (!Ext.isObject(value)) {
            full = {
                "new": value,
                populated: value,
                updated: value
            };
        } else {
            full = Ext.apply({}, value);
            if (!('updated' in full)) {
                full.updated = 'discard';
            }
            if (!('new' in full)) {
                full.new = full.updated;
            }
            if (!('populated' in full)) {
                full.populated = full.new;
            }
        }
        Ext.each([
            'new',
            'populated',
            'updated'
        ], function(key) {
            var v = full[key];
            if (typeof v !== 'boolean' && v !== 'discard') {
                Ext.raise('Invalid autoConfirm' + (Ext.isObject(value) ? '.' + key : '') + ' value "' + v + '"');
            }
        });
        this.$autoConfirm = full;
    },
    applyEditor: function(config, existing) {
        return Ext.updateWidget(existing, config, this, 'createEditor');
    },
    createEditor: function(config) {
        var grid = this.getGrid();
        return Ext.apply({
            $initParent: grid,
            owner: grid,
            parent: grid,
            plugin: this,
            hidden: true,
            buttons: this.getButtons(),
            left: 0,
            right: 0,
            top: 0
        }, config);
    },
    updateEditor: function(editor) {
        this.editor = editor;
        if (editor) {
            this.getGrid().add(editor);
        }
    },
    updateGrid: function(grid, oldGrid) {
        var me = this;
        me.grid = grid;
        if (oldGrid && !oldGrid.destroying) {
            oldGrid.unregisterActionable(this);
        }
        if (grid) {
            grid.registerActionable(this);
        }
    },
    activateCell: function(location) {
        this.startEdit(location);
    },
    pickGrid: function() {
        var grid = this.grid;
        if (grid.isLockedGrid) {
            grid = grid.regionMap.center.getGrid();
        }
        return grid;
    }
});

Ext.define('Ext.grid.plugin.BaseExporter', {
    extend: Ext.exporter.Plugin,
    prepareData: function(config) {
        var me = this,
            store = me.cmp.getStore(),
            table = new Ext.exporter.data.Table(),
            result, columns;
        result = me.getColumnHeaders(config, me.getGridColumns());
        table.setColumns(result.headers);
        if (!store || (store && store.destroyed)) {
            return table;
        }
        if (store && store.isBufferedStore) {
            Ext.raise("BufferedStore can't be exported because it doesn't have all data available");
        }
        columns = me.prepareDataIndexColumns(config, result.dataIndexes);
        if (store.isTreeStore) {
            me.extractNodeData(config, table, columns, store.getRoot());
        } else {
            if (config && config.includeGroups && store.isGrouped()) {
                me.extractData(config, table, columns, store.getGroups());
                me.extractSummaryRow(config, table, columns, store);
            } else {
                me.extractRows(config, table, columns, store);
            }
        }
        return table;
    },
    getColumnHeaders: function(config, columns) {
        var cols = [],
            dataIndexes = [],
            len = columns.length,
            i, result;
        for (i = 0; i < len; i++) {
            result = this.getColumnHeader(config, columns[i]);
            if (result) {
                cols.push(result.header);
                Ext.Array.insert(dataIndexes, dataIndexes.length, result.dataIndexes);
            }
        }
        return {
            headers: cols,
            dataIndexes: dataIndexes
        };
    },
    getGridColumns: function() {
        return [];
    },
    getColumnHeader: Ext.emptyFn,
    prepareDataIndexColumns: function(config, dataIndexes) {
        var len = dataIndexes.length,
            columns = [],
            i;
        for (i = 0; i < len; i++) {
            columns.push(this.prepareDataIndexColumn(config, dataIndexes[i]));
        }
        return columns;
    },
    prepareDataIndexColumn: function(config, column) {
        return {
            column: column,
            fn: Ext.emptyFn
        };
    },
    extractData: function(config, group, columns, collection) {
        var i, len, children, storeGroup, tableGroup;
        if (!collection) {
            return;
        }
        len = collection.getCount();
        for (i = 0; i < len; i++) {
            storeGroup = collection.getAt(i);
            children = storeGroup.getGroups();
            tableGroup = group.addGroup({
                text: storeGroup.getGroupKey()
            });
            if (children) {
                this.extractData(config, tableGroup, columns, children);
            } else {
                this.extractRows(config, tableGroup, columns, storeGroup);
            }
        }
    },
    extractNodeData: function(config, group, columns, node) {
        var me = this,
            store = me.cmp.getStore(),
            lenCols = columns.length,
            i, j, record, row, cell, column, children, len;
        if (node && node.hasChildNodes()) {
            children = node.childNodes;
            len = children.length;
            for (i = 0; i < len; i++) {
                record = children[i];
                row = {
                    cells: []
                };
                for (j = 0; j < lenCols; j++) {
                    column = columns[j];
                    cell = me.getCell(store, record, column) || {
                        value: null
                    };
                    if (column.column.isTreeColumn && cell) {
                        cell.style = Ext.merge(cell.style || {}, {
                            alignment: {
                                indent: record.getDepth() - 1
                            }
                        });
                    }
                    row.cells.push(cell);
                }
                group.addRow(row);
                if (record.hasChildNodes()) {
                    me.extractNodeData(config, group, columns, record);
                }
            }
        }
    },
    extractRows: function(config, group, columns, collection) {
        var cmp = this.cmp,
            store = cmp.getStore(),
            len = collection.getCount(),
            lenCols = columns.length,
            rows = [],
            i, j, record, row, cell;
        for (i = 0; i < len; i++) {
            record = collection.getAt(i);
            row = {
                cells: []
            };
            for (j = 0; j < lenCols; j++) {
                cell = this.getCell(store, record, columns[j]);
                row.cells.push(cell || {
                    value: null
                });
            }
            rows.push(row);
        }
        group.setRows(rows);
        this.extractSummaryRow(config, group, columns, collection);
    },
    extractSummaryRow: function(config, group, columns, collection) {
        var lenCols = columns.length,
            i, record, row, cell;
        if (config.includeSummary) {
            row = {
                cells: []
            };
            record = this.getSummaryRecord(collection, columns);
            for (i = 0; i < lenCols; i++) {
                cell = this.getSummaryCell(collection, record, columns[i]);
                row.cells.push(cell || {
                    value: null
                });
            }
            group.setSummaries(row);
        }
    },
    getCell: Ext.emptyFn,
    getSummaryCell: Ext.emptyFn,
    getSummaryRecord: function(collection, columns) {
        var len = columns.length,
            summaryRecord = collection.getSummaryRecord(),
            record = new Ext.data.Model({
                id: 'summary-record'
            }),
            i, colDef, records;
        record.beginEdit();
        record.set(summaryRecord.getData());
        for (i = 0; i < len; i++) {
            colDef = columns[i];
            if (colDef.summary) {
                records = collection.isStore ? collection.data.items.slice() : collection.items.slice();
                record.set(colDef.summaryIndex, colDef.summary.calculate(records, colDef.summaryIndex, 'data', 0, records.length));
            } else if (colDef.summaryType) {
                record.set(colDef.summaryIndex, this.getSummary(collection, colDef.summaryType, colDef.summaryIndex));
            }
        }
        record.endEdit();
        record.commit(true);
        return record;
    },
    getSummary: function(item, type, field) {
        var isStore = item.isStore;
        if (type) {
            if (Ext.isFunction(type)) {
                if (isStore) {
                    return item.aggregate(type, null, false, [
                        field
                    ]);
                } else {
                    return item.aggregate(field, type);
                }
            }
            switch (type) {
                case 'count':
                    return item.count();
                case 'min':
                    return item.min(field);
                case 'max':
                    return item.max(field);
                case 'sum':
                    return item.sum(field);
                case 'average':
                    return item.average(field);
                default:
                    return null;
            }
        }
    }
});

Ext.define('Ext.grid.plugin.Exporter', {
    alias: [
        'plugin.gridexporter'
    ],
    extend: Ext.grid.plugin.BaseExporter,
    getGridColumns: function() {
        return this.cmp.getHeaderContainer().innerItems;
    },
    getColumnHeader: function(config, column) {
        var dataIndexes = [],
            obj, result, style;
        obj = {
            text: column.getText(),
            width: column.getWidth()
        };
        if (column.isHeaderGroup) {
            result = this.getColumnHeaders(config, column.innerItems);
            obj.columns = result.headers;
            if (obj.columns.length === 0) {
                obj = null;
            } else {
                Ext.Array.insert(dataIndexes, dataIndexes.length, result.dataIndexes);
            }
        } else if (!column.getHidden() && !column.getIgnoreExport()) {
            style = this.getExportStyle(column.getExportStyle(), config);
            obj.style = style;
            obj.width = obj.width || column.getComputedWidth();
            if (style) {
                obj.width = style.width || obj.width;
            }
            dataIndexes.push(column);
        } else {
            obj = null;
        }
        if (obj) {
            return {
                header: obj,
                dataIndexes: dataIndexes
            };
        }
    },
    prepareDataIndexColumn: function(config, column) {
        var fn = Ext.identityFn,
            summaryFn = Ext.identityFn,
            style = this.getExportStyle(column.getExportStyle(), config);
        if (!style || (style && !style.format)) {
            fn = this.getSpecialFn({
                renderer: 'renderer',
                exportRenderer: 'exportRenderer',
                formatter: 'formatter'
            }, column) || fn;
            summaryFn = this.getSpecialFn({
                renderer: 'summaryRenderer',
                exportRenderer: 'exportSummaryRenderer',
                formatter: 'summaryFormatter'
            }, column) || fn;
        }
        return {
            dataIndex: column.getDataIndex(),
            column: column,
            fn: fn,
            summary: column.getSummary(),
            summaryType: column.getSummaryType(),
            summaryIndex: column.getSummaryDataIndex() || column.getDataIndex(),
            summaryFn: summaryFn
        };
    },
    getSpecialFn: function(names, column) {
        var exportRenderer = column['get' + Ext.String.capitalize(names.exportRenderer)](),
            renderer = column['get' + Ext.String.capitalize(names.renderer)](),
            formatter = column['get' + Ext.String.capitalize(names.formatter)](),
            fn, scope, tempFn;
        scope = column.getScope() || column.resolveListenerScope() || column;
        tempFn = exportRenderer;
        if (formatter && !tempFn) {
            fn = formatter;
        } else {
            if (tempFn === true) {
                tempFn = renderer;
            }
            if (typeof tempFn === 'string') {
                fn = function() {
                    return Ext.callback(tempFn, scope, arguments, 0, column);
                };
            } else if (typeof tempFn === 'function') {
                fn = function() {
                    return tempFn.apply(scope, arguments);
                };
            }
        }
        return fn;
    },
    getCell: function(store, record, colDef) {
        var dataIndex = colDef.dataIndex,
            v = record.get(dataIndex);
        return {
            value: colDef.fn(v, record, dataIndex, null, colDef.column)
        };
    },
    getSummaryCell: function(collection, record, colDef) {
        var dataIndex = colDef.summaryIndex,
            v = record.get(dataIndex);
        return {
            value: colDef.summaryFn(v, record, dataIndex, null, colDef.column)
        };
    }
});

Ext.define('Ext.grid.Tree', {
    extend: Ext.grid.Grid,
    xtype: 'tree',
    alternateClassName: 'Ext.tree.Tree',
    classCls: Ext.baseCSSPrefix + 'tree',
    expanderLastCls: Ext.baseCSSPrefix + 'expander-last',
    expanderFirstCls: Ext.baseCSSPrefix + 'expander-first',
    expanderOnlyCls: Ext.baseCSSPrefix + 'expander-only',
    cellExpanderCls: Ext.baseCSSPrefix + 'cell-expander',
    cachedConfig: {
        expanderFirst: true,
        expanderOnly: true
    },
    config: {
        root: {},
        selectOnExpander: false,
        singleExpand: false,
        rootVisible: true,
        displayField: 'text',
        columns: false,
        rowLines: false,
        folderSort: false
    },
    eventsSelector: '.' + Ext.baseCSSPrefix + 'grid-cell',
    applyColumns: function(columns) {
        if (!columns) {
            this.setHideHeaders(true);
            columns = [
                {
                    xtype: 'treecolumn',
                    text: 'Name',
                    dataIndex: this.getDisplayField(),
                    minWidth: 100,
                    flex: 1
                }
            ];
        }
        return columns;
    },
    onRootChange: function(newRoot, oldRoot) {
        var me = this,
            fireEventArgs;
        if (oldRoot) {
            delete oldRoot.fireEventArgs;
        }
        if (newRoot) {
            fireEventArgs = newRoot.fireEventArgs;
            newRoot.fireEventArgs = function(eventName) {
                var ret = fireEventArgs.apply(newRoot, arguments);
                if (ret !== false) {
                    arguments[0] = me.rootEventsMap[eventName] || ('item' + eventName);
                    ret = me.fireEventArgs.apply(me, arguments);
                }
                return ret;
            };
        }
    },
    updateExpanderFirst: function(expanderFirst) {
        var el = this.element;
        el.toggleCls(this.expanderFirstCls, expanderFirst);
        el.toggleCls(this.expanderLastCls, !expanderFirst);
    },
    updateExpanderOnly: function(expanderOnly) {
        var el = this.element;
        el.toggleCls(this.expanderOnlyCls, expanderOnly);
        el.toggleCls(this.cellExpanderCls, !expanderOnly);
    },
    setRootNode: function(root) {
        var store = this.getStore();
        root = store.setRoot(root);
        return root;
    },
    getRootNode: function() {
        var store = this.getStore();
        return store ? store.getRoot() : null;
    },
    expandNode: function(record, deep, callback, scope) {
        return record.expand(deep, callback, scope || this);
    },
    collapseNode: function(record, deep, callback, scope) {
        return record.collapse(deep, callback, scope || this);
    },
    expandAll: function(callback, scope) {
        var me = this,
            root = me.getRootNode();
        if (root) {
            Ext.suspendLayouts();
            root.expand(true, callback, scope || me);
            Ext.resumeLayouts(true);
        }
    },
    collapseAll: function(callback, scope) {
        var me = this,
            root = me.getRootNode();
        if (root) {
            Ext.suspendLayouts();
            scope = scope || me;
            if (me.getStore().rootVisible) {
                root.collapse(true, callback, scope);
            } else {
                root.collapseChildren(true, callback, scope);
            }
            Ext.resumeLayouts(true);
        }
    },
    getChecked: function() {
        var checked = [],
            rootNode = this.getRootNode(),
            isChecked = rootNode.get('checked'),
            childNodes = rootNode.childNodes;
        if (isChecked === true) {
            checked.push(rootNode);
        }
        this.getCheckedChildItems(childNodes, checked);
        return checked;
    },
    privates: {
        rootEventsMap: {
            beforeappend: 'beforeitemappend',
            beforeremove: 'beforeritememove',
            beforemove: 'beforeitemmove',
            beforeinsert: 'beforeiteminsert',
            beforeexpand: 'beforeitemexpand',
            beforecollapse: 'beforeitemcollapse'
        },
        doChildTouchStart: function(location) {
            var cell = location.cell;
            if (cell && (!cell.isTreeCell || this.getSelectOnExpander() || location.event.target !== cell.expanderElement.dom)) {
                this.callParent([
                    location
                ]);
            }
        },
        updateStore: function(newStore, oldStore) {
            var me = this,
                newRoot;
            if (oldStore) {
                Ext.destroy(me.storeListeners, me.storeRelayers);
            }
            if (newStore) {
                me.store = newStore;
                newRoot = newStore.getRoot();
                if (newRoot) {
                    me.onRootChange(newRoot);
                } else {
                    newStore.setRoot(me.getRoot());
                    newRoot = newStore.getRoot();
                }
                if (!('rootVisible' in newStore.initialConfig)) {
                    newStore.setRootVisible(me.getRootVisible());
                }
                newStore.ownerTree = me;
                me.callParent([
                    newStore,
                    oldStore
                ]);
                newStore.folderSort = me.getFolderSort();
                me.storeListeners = me.mon(newStore, {
                    destroyable: true,
                    rootchange: me.onRootChange,
                    scope: me
                });
                me.storeRelayers = me.relayEvents(newStore, [
                    'beforeload',
                    'load'
                ]);
                if (!newStore.rootVisible && !newStore.autoLoad && !(newRoot.isExpanded() || newRoot.isLoading())) {
                    if (newRoot.isLoaded()) {
                        newRoot.data.expanded = true;
                        newStore.onNodeExpand(newRoot, newRoot.childNodes);
                    }
                    else if (newStore.autoLoad !== false && !newStore.hasPendingLoad()) {
                        newRoot.data.expanded = false;
                        newRoot.expand();
                    }
                }
            }
        },
        getCheckedChildItems: function(childNodes, checked) {
            var i, childNode;
            for (i = 0; i < childNodes.length; i++) {
                childNode = childNodes[i];
                if (childNode.get('checked') === true) {
                    checked.push(childNode);
                }
                if (childNode.childNodes.length) {
                    this.getCheckedChildItems(childNode.childNodes, checked);
                }
            }
        }
    }
});

Ext.define('Ext.grid.TreeDragZone', {
    extend: Ext.grid.GridDragZone,
    beforeDragStart: function(info) {
        var targetCmp = Ext.dd.Manager.getTargetComp(info),
            record = targetCmp.getRecord();
        if (record.isRoot()) {
            return false;
        }
        this.callParent([
            info
        ]);
    },
    getDragData: function(e) {
        var view = this.view,
            cell = Ext.Component.from(e, view),
            selections, record, selectionIndex, store, rootIndex, dragRecords;
        record = cell.getRecord();
        store = record.getTreeStore();
        selections = view.getSelections();
        if (selections) {
            selectionIndex = selections.indexOf(record);
            record = (selectionIndex !== -1) ? selections : record;
        }
        dragRecords = Ext.Array.from(record);
        rootIndex = record.indexOf(store.getRoot());
        if (rootIndex !== -1) {
            dragRecords = Ext.Array.removeAt(dragRecords, rootIndex, 0);
        }
        return {
            eventTarget: e,
            view: view,
            item: cell,
            records: dragRecords
        };
    },
    getDragText: function(info) {
        var dragText = this.dragText,
            data = info.data.dragData,
            count = data.records.length,
            record;
        if (Ext.isFunction(dragText)) {
            return dragText(count, info);
        }
        if (count === 1) {
            record = Ext.dd.Manager.getTargetComp(info).getRecord();
            return record.get(this.view.getDisplayField()) || '';
        }
        return Ext.String.format(dragText, count, count === 1 ? '' : Ext.util.Inflector.pluralize(''));
    }
});

Ext.define('Ext.grid.TreeDropZone', {
    extend: Ext.grid.GridDropZone,
    expandNode: function(node) {
        if (!node.isExpanded()) {
            node.expand();
            if (this.ddEl) {
                this.ddEl.removeCls(this.dropMarkerCls + '-after');
            }
        }
        this.timerId = null;
    },
    cancelExpand: function() {
        this.timerId = Ext.undefer(this.timerId);
    },
    isTargetValid: function(draggedData, targetRecord, highlight) {
        var ln = draggedData.length,
            count = 0,
            i, record;
        for (i = 0; i < draggedData.length; i++) {
            record = draggedData[i];
            if (record.contains(targetRecord)) {
                return false;
            }
            if ((record.parentNode === targetRecord) && (highlight !== 'before' || targetRecord.isRoot())) {
                ++count;
            }
        }
        return count < ln ? true : false;
    },
    onDragMove: function(info) {
        var me = this,
            ddManager = Ext.dd.Manager,
            targetCmp = ddManager.getTargetComp(info),
            addDropMarker = true,
            highlight, isValidTargetNode, ddRecords, isSameGroup, isValidTarget, targetRecord, positionCls;
        highlight = ddManager.getPosition(info, targetCmp);
        positionCls = me.dropMarkerCls + '-' + highlight;
        if (!targetCmp || targetCmp.hasCls(positionCls)) {
            return;
        }
        if (targetCmp.getRecord) {
            targetRecord = targetCmp.getRecord();
        }
        isSameGroup = Ext.Array.intersect(me.getGroups(), info.source.getGroups()).length;
        if (!targetRecord || !isSameGroup) {
            if (me.ddEl) {
                me.removeDropMarker();
            }
            return;
        }
        ddRecords = info.data.dragData.records;
        isValidTarget = ddRecords.indexOf(targetRecord) === -1;
        isValidTargetNode = me.isTargetValid(ddRecords, targetRecord, highlight);
        if (!isValidTarget || !isValidTargetNode) {
            if (me.ddEl) {
                me.removeDropMarker();
            }
            return;
        }
        if (me.ddEl) {
            me.removeDropMarker();
        }
        me.cancelExpand();
        me.ddEl = targetCmp;
        if (!targetRecord.isLeaf()) {
            addDropMarker = false;
            ddManager.toggleProxyCls(info, me.validDropCls, true);
            if ((!targetRecord.isExpanded() && highlight === 'after') || (!targetRecord.isRoot() && highlight === 'before')) {
                addDropMarker = true;
            }
            if (highlight === 'after' && me.allowExpandOnHover) {
                me.timerId = Ext.defer(me.expandNode, me.expandDelay, me, [
                    targetRecord
                ]);
            }
        }
        if (addDropMarker) {
            me.addDropMarker(targetCmp, [
                me.dropIndicator,
                positionCls
            ]);
        }
    },
    arrangeNode: function(node, records, args, action) {
        var ln = records.length,
            i;
        for (i = 0; i < ln; i++) {
            args[0] = records[i];
            node[action].apply(node, args);
        }
        this.view.ensureVisible(records[0]);
    },
    onNodeDrop: function(dragInfo) {
        var me = this,
            targetNode = dragInfo.targetNode,
            draggedData = dragInfo.draggedData,
            records = draggedData.records,
            len = records.length,
            targetRecord = dragInfo.targetRecord,
            position = dragInfo.position,
            isRoot = targetRecord.isRoot(),
            parentNode = targetRecord.parentNode || me.view.getRootNode(),
            action = 'appendChild',
            args = [
                null
            ],
            i, nextSibling, selectable, selModel;
        if (me.copy) {
            for (i = 0; i < len; i++) {
                records[i] = records[i].copy(undefined, true, true);
            }
        }
        if (position === 'before') {
            if (!isRoot) {
                action = 'insertBefore';
                args = [
                    null,
                    targetRecord
                ];
            }
        } else if (position === 'after') {
            nextSibling = targetRecord.nextSibling;
            if (isRoot || !targetRecord.isLeaf()) {
                parentNode = targetRecord;
            } else if (nextSibling) {
                if (targetRecord.isLeaf()) {
                    args = [
                        null,
                        nextSibling
                    ];
                    action = 'insertBefore';
                } else {
                    parentNode = targetRecord;
                }
            }
        }
        me.arrangeNode(parentNode, records, args, action);
        selectable = me.view.getSelectable();
        selModel = selectable.getSelection().getSelectionModel();
        selModel.select(records);
        me.view.fireEvent('drop', targetNode, draggedData, targetRecord, position);
        delete me.dragInfo;
    },
    confirmDrop: function() {
        Ext.asap(this.onNodeDrop, this, [
            this.dragInfo
        ]);
    },
    prepareRecordBeforeDrop: function(draggedData, targetRecord, highlight) {
        var draggedRecs = draggedData.records,
            records = [],
            ln = draggedRecs.length,
            record, i;
        for (i = 0; i < ln; i++) {
            record = draggedRecs[i];
            if (record.parentNode !== targetRecord || highlight === 'before') {
                records.push(record);
            }
        }
        draggedData.records = records;
        return draggedData;
    },
    onDrop: function(info) {
        var me = this,
            view = me.view,
            targetNode = me.ddEl,
            draggedData, targetRecord, position;
        me.cancelExpand();
        if (!targetNode) {
            return;
        }
        targetRecord = targetNode.getRecord();
        if (!targetRecord.isNode) {
            return;
        }
        draggedData = info.data.dragData;
        position = targetNode.hasCls(me.dropMarkerCls + '-before') ? 'before' : 'after';
        me.prepareRecordBeforeDrop(draggedData, targetRecord, position);
        if (!draggedData.records.length) {
            return;
        }
        if (view.fireEvent('beforedrop', targetNode, draggedData, targetRecord, position) !== false) {
            me.dragInfo = {
                draggedData: draggedData,
                targetRecord: targetRecord,
                position: position,
                targetNode: targetNode
            };
            if (!targetRecord.isExpanded() && position === 'after') {
                targetRecord.expand(undefined, me.confirmDrop, me);
            } else if (targetRecord.isLoading()) {
                targetRecord.on({
                    expand: 'confirmDrop',
                    single: true,
                    scope: me
                });
            } else {
                me.confirmDrop();
            }
        }
        me.removeDropMarker();
    }
});

Ext.define('Ext.grid.cell.Tree', {
    extend: Ext.grid.cell.Cell,
    xtype: 'treecell',
    isTreeCell: true,
    classCls: Ext.baseCSSPrefix + 'treecell',
    collapsedCls: Ext.baseCSSPrefix + 'collapsed',
    expandedCls: Ext.baseCSSPrefix + 'expanded',
    leafCls: Ext.baseCSSPrefix + 'leaf',
    expandableCls: Ext.baseCSSPrefix + 'expandable',
    withIconCls: Ext.baseCSSPrefix + 'with-icon',
    withoutIconCls: Ext.baseCSSPrefix + 'no-icon',
    loadingCls: Ext.baseCSSPrefix + 'loading',
    selectedCls: Ext.baseCSSPrefix + 'selected',
    checkableCls: Ext.baseCSSPrefix + 'treecell-checkable',
    checkedCls: Ext.baseCSSPrefix + 'treecell-checked',
    trimodeCls: Ext.baseCSSPrefix + 'treecell-trimode',
    uncheckedCls: Ext.baseCSSPrefix + 'treecell-unchecked',
    config: {
        iconClsProperty: 'iconCls',
        iconCls: null,
        indent: null,
        text: {
            lazy: true,
            $value: ''
        },
        autoCheckChildren: true,
        checkable: null,
        checkableField: 'checkable',
        checkedField: 'checked',
        checkOnTriTap: true,
        enableTri: true
    },
    element: {
        reference: 'element',
        children: [
            {
                reference: 'innerElement',
                cls: Ext.baseCSSPrefix + 'inner-el',
                children: [
                    {
                        reference: 'indentElement',
                        cls: Ext.baseCSSPrefix + 'indent-el'
                    },
                    {
                        reference: 'expanderElement',
                        cls: Ext.baseCSSPrefix + 'expander-el ' + Ext.baseCSSPrefix + 'font-icon'
                    },
                    {
                        reference: 'checkElement',
                        listeners: {
                            tap: 'onCheckTap'
                        },
                        cls: Ext.baseCSSPrefix + 'check-el ' + Ext.baseCSSPrefix + 'font-icon'
                    },
                    {
                        reference: 'iconElement',
                        cls: Ext.baseCSSPrefix + 'icon-el ' + Ext.baseCSSPrefix + 'font-icon'
                    },
                    {
                        reference: 'bodyElement',
                        cls: Ext.baseCSSPrefix + 'body-el',
                        uiCls: 'body-el'
                    }
                ]
            }
        ]
    },
    toolDefaults: {
        zone: 'tail'
    },
    relayedEvents: [
        'beforecheckchange',
        'checkchange'
    ],
    constructor: function(config) {
        var me = this;
        me.callParent([
            config
        ]);
        me.element.on({
            scope: me,
            tap: 'maybeToggle'
        });
        me.getGrid().relayEvents(me, me.relayedEvents);
    },
    toggle: function() {
        var me = this,
            record = me.getRecord();
        if (record.isExpanded()) {
            me.collapse();
        } else if (record.isExpandable()) {
            me.expand();
        }
    },
    collapse: function() {
        var me = this,
            record = me.getRecord();
        me.getGrid().fireEventedAction('nodecollapse', [
            me.parent,
            record,
            'collapse'
        ], 'doToggle', this);
    },
    expand: function() {
        var me = this,
            record = me.getRecord(),
            tree = me.getGrid(),
            siblings, i, len, sibling;
        tree.fireEventedAction('nodeexpand', [
            me.parent,
            record,
            'expand'
        ], 'doToggle', me);
        if (record.isExpanded && !record.isRoot() && tree.getSingleExpand()) {
            siblings = record.parentNode.childNodes;
            for (i = 0 , len = siblings.length; i < len; ++i) {
                sibling = siblings[i];
                if (sibling !== record) {
                    sibling.collapse();
                }
            }
        }
    },
    refresh: function(ctx) {
        var record;
        this.callParent([
            ctx
        ]);
        record = this.getRecord();
        if (record) {
            this.doNodeUpdate(record);
        }
    },
    updateCheckable: function() {
        this.syncCheckElement();
    },
    updateIconCls: function(iconCls, oldIconCls) {
        var me = this,
            el = me.element,
            noIcon = !iconCls;
        me.iconElement.replaceCls(oldIconCls, iconCls);
        el.toggleCls(me.withIconCls, !noIcon);
        el.toggleCls(me.withoutIconCls, noIcon);
    },
    updateUi: function(ui, oldUi) {
        this.callParent([
            ui,
            oldUi
        ]);
        this._indent = null;
        this.syncIndent();
    },
    syncCheckElement: function() {
        var me = this,
            record = me.getRecord(),
            cellCheckable = me.getCheckable(),
            checkedCls = me.checkedCls,
            trimodeCls = me.trimodeCls,
            uncheckedCls = me.uncheckedCls,
            checkable = null,
            checked = null,
            shouldTri;
        if (record) {
            checkable = record.get(me.getCheckableField());
            checked = record.get(me.getCheckedField());
        }
        if ((cellCheckable && checkable !== false) || (cellCheckable !== false && checkable && checked != null) || (cellCheckable === null && checked != null)) {
            me.addCls(me.checkableCls);
            shouldTri = me.shouldTri();
            if (checked || shouldTri) {
                if (me.getEnableTri() && cellCheckable !== null) {
                    me.bubbleUp(record);
                }
                if (shouldTri && cellCheckable !== null) {
                    me.replaceCls([
                        checkedCls,
                        uncheckedCls
                    ], trimodeCls);
                } else {
                    me.replaceCls([
                        trimodeCls,
                        uncheckedCls
                    ], checkedCls);
                }
            } else {
                if (checked !== null || cellCheckable !== null) {
                    me.replaceCls([
                        checkedCls,
                        trimodeCls
                    ], uncheckedCls);
                }
            }
        } else {
            me.removeCls([
                me.checkableCls,
                checkedCls,
                trimodeCls,
                uncheckedCls
            ]);
        }
    },
    onCheckTap: function(event) {
        var me = this,
            record = me.getRecord(),
            checkField, current, checked;
        if (!record || me.getCheckable() === false || record.get(me.getCheckableField() === false)) {
            return;
        }
        checkField = me.getCheckedField();
        current = record.get(checkField);
        checked = current && current !== true ? this.getCheckOnTriTap() : !current;
        if (me.fireEvent('beforecheckchange', me, checked, current, record) !== false) {
            record.set(checkField, checked);
            if (me.getCheckable() !== null) {
                if (me.getAutoCheckChildren()) {
                    record.cascade(function(child) {
                        if (child !== record) {
                            child.set(checkField, checked);
                        }
                    });
                }
                if (me.getEnableTri()) {
                    me.bubbleUp(record);
                }
            }
            me.fireEvent('checkchange', me, checked, record);
        }
    },
    bubbleUp: function(node) {
        var me = this,
            parent = node.parentNode,
            shouldTri;
        if (!parent) {
            return;
        }
        shouldTri = me.shouldTri(parent, true);
        parent.set('checked', shouldTri ? 'tri' : node.get('checked'));
        me.bubbleUp(parent);
    },
    shouldTri: function(record, forceCheck) {
        var checkedField, checked, childNodes, found;
        record = record || this.getRecord();
        if (!this.getEnableTri() || !record) {
            return false;
        }
        checkedField = this.getCheckedField();
        checked = record.get(checkedField);
        if (checked != null && (!forceCheck || record.isLeaf())) {
            return checked === 'tri';
        }
        childNodes = record.childNodes;
        if (childNodes) {
            return childNodes.some(function(child, idx) {
                checked = child.get(checkedField);
                if (idx && (!!checked !== !!found || (checked && checked !== true))) {
                    return true;
                }
                found = checked;
            });
        }
        return false;
    },
    privates: {
        doNodeUpdate: function(record) {
            var me = this,
                iconClsProperty = me.getIconClsProperty(),
                el = me.element;
            if (iconClsProperty) {
                me.setIconCls(record.data[iconClsProperty]);
            }
            el.toggleCls(me.loadingCls, record.data.loading);
            el.toggleCls(me.leafCls, record.isLeaf());
            me.syncExpandCls();
            me.syncIndent();
            me.syncCheckElement();
        },
        getGrid: function() {
            return this.row.grid;
        },
        syncExpandCls: function() {
            var me, record, expandable, element, expanded, expandedCls, collapsedCls;
            if (!this.updatingExpandCls) {
                me = this;
                record = me.getRecord();
                expandable = record.isExpandable();
                element = me.element;
                expanded = record.isExpanded();
                expandedCls = me.expandedCls;
                collapsedCls = me.collapsedCls;
                me.updatingExpandCls = true;
                element.toggleCls(me.expandableCls, expandable);
                if (expandable) {
                    element.toggleCls(expandedCls, expanded);
                    element.toggleCls(collapsedCls, !expanded);
                } else {
                    element.removeCls([
                        expandedCls,
                        collapsedCls
                    ]);
                }
                me.updatingExpandCls = false;
            }
        },
        syncIndent: function() {
            var me = this,
                column = me.getColumn(),
                indentSize, record, depth, store;
            if (column) {
                indentSize = column._indentSize;
                record = me.getRecord();
                if (!indentSize) {
                    column._indentSize = indentSize = parseInt(me.el.getStyle('background-position'), 10);
                }
                if (record) {
                    store = record.getTreeStore();
                    depth = (store && store.rootVisible) ? record.data.depth : record.data.depth - 1;
                    me.indentElement.dom.style.width = (depth * indentSize) + 'px';
                }
            }
        },
        maybeToggle: function(e) {
            var me = this,
                record = me.getRecord(),
                wasExpanded = record.isExpanded(),
                grid = me.getGrid();
            if (!record.isLeaf() && (!grid.getExpanderOnly() || e.target === me.expanderElement.dom)) {
                me.toggle();
            }
            if (record.isExpanded() !== wasExpanded) {
                e.nodeToggled = true;
                e.stopEvent();
            }
        },
        doToggle: function(row, record, fn) {
            record[fn]();
        }
    }
});

Ext.define('Ext.grid.column.Tree', {
    extend: Ext.grid.column.Column,
    xtype: 'treecolumn',
    config: {
        cell: {
            xtype: 'treecell'
        }
    },
    isTreeColumn: true
});

Ext.define('Ext.grid.plugin.TreeDragDrop', {
    extend: Ext.plugin.dd.DragDrop,
    alias: 'plugin.treedragdrop',
    handle: '.' + Ext.baseCSSPrefix + 'gridrow',
    groups: 'treeDD',
    dropIndicator: Ext.baseCSSPrefix + 'tree-drop-indicator',
    dragText: '{0} selected node{1}',
    expandDelay: 1000,
    allowExpandOnHover: true,
    init: function(view) {
        var me = this;
        view.on('initialize', me.onViewInitialize, me);
    },
    onViewInitialize: function(view) {
        var me = this,
            dragZone = {};
        if (me.enableDrag) {
            if (me.proxy) {
                dragZone.proxy = me.proxy;
            }
            if (me.activateOnLongPress) {
                dragZone.activateOnLongPress = me.activateOnLongPress;
            }
            me.dragZone = new Ext.grid.TreeDragZone(Ext.apply({
                element: view.bodyElement,
                view: view,
                dragText: me.dragText,
                handle: me.handle,
                groups: me.groups,
                scrollAmount: me.scrollAmount,
                containerScroll: me.containerScroll,
                constrain: Ext.getBody()
            }, dragZone));
        }
        if (me.enableDrop) {
            me.dropZone = new Ext.grid.TreeDropZone({
                view: view,
                element: view.bodyElement,
                groups: me.groups,
                dropIndicator: me.dropIndicator,
                overCls: me.overCls,
                copy: me.copy,
                expandDelay: me.expandDelay,
                allowExpandOnHover: me.allowExpandOnHover
            });
        }
    }
});

