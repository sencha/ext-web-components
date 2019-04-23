describe("HTML", () => {
    it("should be rendered inside ExtReact components", () => {
        ST.navigate('#Html');
        ST.component('#htmlInExtContainer').visible();
        ST.element('>> #htmlInExt').text('test');
    });
});