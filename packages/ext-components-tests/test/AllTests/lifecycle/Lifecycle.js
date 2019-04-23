describe("Lifecycle", () => {
    beforeEach(() => ST.navigate('#Lifecycle'));

    it("Should find the created button component", () => {
        ST.component('#lifeCycleButton').visible().text('Unmount');
    })

    describe('componentWillUnmount', () => {
        it('should be called when a component is removed', () => {
            ST.navigate('#Lifecycle');
            ST.component('#lifeCycleButton').click();
            ST.component('#lifeCycleButton').destroyed();
        })
    })
});