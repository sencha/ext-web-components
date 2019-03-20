describe("HTML", () => {
    it("should be rendered inside ExtReact components", () => {
        ST.navigate('#htmlinextcomponent');
        ST.component('#container').visible();
        ST.element('>> #html').text('test');
    });
});