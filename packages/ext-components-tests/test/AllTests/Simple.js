describe("Simple", () => {
    it('should have the button with right text', () => {
        ST.navigate('#simple');
        ST.component('#button')
            .visible()
            .text('Click Me');
    });
    
    it('should create the button from Ext-Component Button with right class', () => {
        ST.navigate('#simple');
        ST.element('>> .testClass').visible();
    });
});