describe("Simple", () => {
    it('should have the button with right text', () => {
        ST.navigate('#Simple');
        ST.component('#buttonSimple').visible();
        ST.component('#buttonSimple').and(function(button) {
          expect(button.getText()).toEqual('Click Me');
        });
    });

    it('should create the button from Ext-Component Button with right class', () => {
        ST.navigate('#Simple');
        ST.element('>> .testClass').visible();
    });
});
