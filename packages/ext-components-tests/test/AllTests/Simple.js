describe("Simple", () => {
    it('should have the button with right text', () => {
        ST.navigate('#Simple');
        ST.component('#buttonSimple')
            .visible()
            .text('Click Me');
    });
    
    it('should create the button from Ext-Component Button with right class', () => {
        ST.navigate('#Simple');
        ST.element('>> .testClass').visible();
    });
});