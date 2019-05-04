export * from './collection/BasicFilter';
export * from './collection/Cache';
export * from './collection/Filter';
export * from './collection/Group';
export * from './collection/Grouper';
export * from './collection/LRU';
export * from './collection/Sorter';

import { Collection } from './collection/Collection';
import { FilterCollection } from './collection/FilterCollection';
import { GroupCollection } from './collection/GroupCollection';
import { SorterCollection } from './collection/SorterCollection';

Collection.FilterCollection = FilterCollection;
Collection.GroupCollection = GroupCollection;
Collection.SorterCollection = SorterCollection;

export { Collection, FilterCollection, GroupCollection, SorterCollection };
