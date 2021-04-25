import React from 'react';
import ReactDOM from 'react-dom';
import Button from './ClearButton';


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

/*it("renders with or without a name", () => {
    act(() => {
      render(<Hello />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");*/