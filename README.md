# Bug description

Cypress claims that the button is not visible although it is visible.

# How to run this example

Run server in root directory with
node cypress/src/server.js

Run tests in root directory with
npx cypress run

# Where is the bug?

I debugged a little bit and found the following suspicious function:

```
const elOrAncestorIsFixed = function ($el) {
    const $stickyOrFixedEl = $elements.getFirstFixedOrStickyPositionParent($el);

    if ($stickyOrFixedEl) {
       return $stickyOrFixedEl.css('position') === 'fixed'; // we are sticky => returns false
    }
};
```

In the case presented the button is inside a sticky element. Thus, `elOrAncestorIsFixed` returns false. Afterwards `elIsOutOfBoundsOfAncestorsOverflow` is called and tells that the button is not inside its ancestor Details which has `overflow:scroll`. However, between the button and Details is the model which hat the property `position:fixed`.