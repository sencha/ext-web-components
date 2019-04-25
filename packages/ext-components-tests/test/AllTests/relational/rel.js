describe('rel', () => {
    it('should assign an element to a config when a rel prop is present', () => {
        ST.navigate('#Rel')
        ST.component('#relButtonMenu1').click()
        ST.component('#menuRel1').visible().and(function (menu) {
          expect(Ext.ComponentQuery.query('menuitem[text="Option 1"]')[0].isVisible()).toEqual(true)
          expect(Ext.ComponentQuery.query('menuitem[text="Option 2"]')[0].isVisible()).toEqual(true)
          expect(Ext.ComponentQuery.query('menuitem[text="Option 3"]')[0].isVisible()).toEqual(true)
        });
    });

    describe("Dialog.buttons", () => {
        it('dialog box should be created', () => {
            ST.navigate('#RelDialog');
            ST.component('#dialogComponent').visible();
            ST.component('#dialogButton').click();
            ST.component('#dialogComponent').hidden();
        });
    });

    describe("Grid.columns", () => {
        it("grid is created", () => {
            ST.navigate('#RelGridColumn')
            ST.component('#grid').visible();
        });
    });

    describe("Button.menu", () => {
        it("should auto-assign Menu to the parent button's menu config", () => {
            ST.navigate('#RelMenu')
            ST.component('#relButtonMenu1').click()
            ST.component('#menuRel').visible();
            ST.component('menuitem[text="Option 1"]').visible();
            ST.component('menuitem[text="Option 2"]').visible();
            ST.component('menuitem[text="Option 3"]').visible();
        });
    });

    describe("Component.tooltip", () => {
        it("should auto-assign tooltip from children", () => {
            ST.navigate('#RelTooltip')

            ST.play([
                {target: '#buttonTooltip', type: 'pointermove', x: 46, y: 100 },
                {target: '#buttonTooltip', type: 'mouseenter'},
                {target: '#buttonTooltip', type: 'mouseover'},
            ]);
            // ST.component('#tooltip').visible();
        });
    });

});
