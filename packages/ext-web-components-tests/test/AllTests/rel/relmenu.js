describe("Button.menu", () => {
  it("should auto-assign Menu to the parent button's menu config", () => {
    ST.navigate('#RelMenu').wait(500).and(function() {
      ST.component('#relButtonMenu2').click()
      ST.component('#menuRel2').visible().and(function (menu) {
        expect(Ext.ComponentQuery.query('menuitem[text="Option 1"]')[0].isVisible()).toEqual(true)
        expect(Ext.ComponentQuery.query('menuitem[text="Option 2"]')[0].isVisible()).toEqual(true)
        expect(Ext.ComponentQuery.query('menuitem[text="Option 3"]')[0].isVisible()).toEqual(true)
      });
    });
  });
});
