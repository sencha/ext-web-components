describe("Component.tooltip", () => {
  it("should auto-assign tooltip from children", () => {
    ST.navigate('#RelTooltip').wait(1000).and(function() {
      ST.play([
          {target: '#buttonTooltip', type: 'pointermove', x: 46, y: 100 },
          {target: '#buttonTooltip', type: 'mouseenter'},
          {target: '#buttonTooltip', type: 'mouseover'},
      ]);
    });
  });
});
