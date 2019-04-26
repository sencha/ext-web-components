describe("Dialog.buttons", () => {
  it('dialog box should be created', () => {
    ST.navigate('#RelDialog').wait(500).and(function() {
      expect(Ext.ComponentQuery.query('[itemId=dialogComponent]')[0].isVisible()).toEqual(true)
      ST.component('#dialogButton').click().and().wait(500).and(function () {
        expect(Ext.ComponentQuery.query('#dialogComponent')[0].isVisible()).toEqual(false)
      });
    });
  });
});
