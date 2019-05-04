/**
 * This class serves as an interface contact for the {@link Session#visitData} method.
 * All methods of an actual visitors are optional.
 */
class Visitor {
    //<debug>
    /**
     * This method is called after all changes have been processed.
     */
    finish () {
        // empty
        //<debug>
        return;  // this is here to appease code coverage (it no like all empty methods)
        //</debug>
    }

    /**
     * This method is called to describe a record that is known but unchanged.
     *
     * @param {Model} record The unmodified record.
     */
    onCleanRecord (record) {
        // empty
        //<debug>
        return;  // this is here to appease code coverage (it no like all empty methods)
        //</debug>
    }

    /**
     * This method is called to describe a record that has either been created, dropped or
     * modified.
     *
     * @param {Model} record The modified record.
     */
    onDirtyRecord (record) {
        // empty
        //<debug>
        return;  // this is here to appease code coverage (it no like all empty methods)
        //</debug>
    }

    /**
     * This method is called for changes in a many-to-many association (a "matrix").
     *
     * @param {Association} association The object describing the many-to-many ("matrix")
     * association.
     *
     * @param leftId The `idProperty` of the record on the "left" of the association.
     *
     * @param rightId The `idProperty` of the record on the "right" of the association.
     *
     * @param {Number} state A negative number if the two records are being disassociated
     * or a positive number if they are being associated. For example, when adding User 10
     * to Group 20, this would be 1. When removing the User this argument would be -1.
     */
    onMatrixChange (association, leftId, rightId, state) {
        // empty
        //<debug>
        return;  // this is here to appease code coverage (it no like all empty methods)
        //</debug>
    }

    //</debug>
}

export { Visitor };
