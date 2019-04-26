describe('main rel', () => {
  it('should assign an element to a config when a rel prop is present', () => {
    ST.navigate('#Rel').wait(500).and(function() {
      ST.component('#relButtonMenu1').click()
      ST.component('#menuRel1').visible().and(function (menu) {
        expect(Ext.ComponentQuery.query('menuitem[text="Option 1"]')[0].isVisible()).toEqual(true)
        expect(Ext.ComponentQuery.query('menuitem[text="Option 2"]')[0].isVisible()).toEqual(true)
        expect(Ext.ComponentQuery.query('menuitem[text="Option 3"]')[0].isVisible()).toEqual(true)
      });
    });
  });
});
