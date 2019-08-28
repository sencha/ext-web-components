describe('Lifecycle', () => {
    beforeEach(() => ST.navigate('#Lifecycle'));

    it('Should find the created button component', () => {
        ST.component('#lifeCycleButton').visible().and(function(element) {
            expect(element.getText()).toEqual('Unmount');
        });
    });

    describe('componentWillUnmount', () => {
        it('should be called when a component is removed', () => {
            ST.component('#my-component-id').visible();
            ST.component('#lifeCycleButton').click();
            ST.component('#lifeCycleContainer').and(function(parent) {
                expect(parent.getRenderTarget().dom.childElementCount).toBe(1);
            });
        });
    });
});
