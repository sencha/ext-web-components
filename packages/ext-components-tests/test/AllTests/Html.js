describe("HTML", () => {
    it("should be rendered inside ExtReact components", () => {
        ST.navigate('#htmlinextcomponent');
        ST.component('#htmlInExtContainer').visible();
        ST.element('>> #htmlInExt').text('test');
    });
});