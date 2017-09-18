
import React     from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import App       from '../src/components/App';

it ('App is rendered', () => {
<<<<<<< HEAD
    // Render App in the document
    const appElement = TestUtils.renderIntoDocument(
        <App />
    );
=======
  // Render App in the document
  const appElement = TestUtils.renderIntoDocument(
    <App/>
  );
>>>>>>> 86e515cf235ead7b6ac88469b36fab078e640ee8

  const appNode = ReactDOM.findDOMNode(appElement);

<<<<<<< HEAD
    // Verify text content
    expect(appNode.textContent).toEqual('Hello World!');
=======
  // Verify text content
  expect(appNode.textContent).toEqual('Hello World!Foo to the bar');
>>>>>>> 86e515cf235ead7b6ac88469b36fab078e640ee8
});
