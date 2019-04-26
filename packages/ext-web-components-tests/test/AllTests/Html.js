describe("HTML", () => {
    it("should be rendered inside Ext Web Components", () => {
        ST.navigate('#Html');
        ST.component('#htmlInExtContainer').visible();
        ST.element('>> #htmlInExt').text('test');
    });
});
