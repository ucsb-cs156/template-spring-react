# docs/background.md

This file explains the background for this code base.

# Intention

As of Summer 2024, the four legacy code projects in CMPSC156 were based on a code base initially originally devised by Scott Chow and Phill Conrad during Summer 2019. Additional parts were added to this code base over time, until it reached a point where it had the following features:

Overall:

* Spring Boot backend 
* React frontend (created using Create-React-App)
* Ability to deploy frontend and backend either separately (typically used for development on localhost) or together (typically used for deployments on dokku)
* Storybook for frontend documentation and prototyping
* Ability to deploy Javadoc for backend and Storybook for frontend automatically using Github Actions/Github Pages for each github branch.
* JUnit 5 unit tests, Jacoco Integration Tests, and Pitest mutation coverage of backend code.
* jest tests, jest coverage, and StrykerJS mutation coverage for frontend code
* OAuth authentication/authorization using either Google or Github as OAuth Providers
* Ability to run Asynchronous and/or Scheduled jobs in the backend

Unfortunately, however, this code base became stuck on version 16.20.0 of node, and a very specific set of npm dependencies. 

Attempts to upgrade that code base directly were quite difficult because of the complexity of the many dependencies.  This code base is an effort to rebuild that base from scratch, adding just one aspect at a time, using the most recent versions where possible.

# Building the frontend

We started with an empty repo, with just a README, .gitignore
and LICENSE file provided by Github.

We then did this command to establish the most up-to-date Long Term Support version of Node (as of 08/21/2024) as the current version of Node:

```
nvm use 20.17.0
```

Followed by:

```
npx create-react-app frontend
```
Commit: <https://github.com/ucsb-cs156/template-spring-react/commit/df8c37822f111e996c9448fd8f10725026991e64>

# Fixing a test warning

The initial code had this warning when running `npm test`:

```
 console.error
    Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.
```

[This link](https://github.com/facebook/react/issues/29000) suggested the following fix, which addressed the issue

```
npm install --save-dev @testing-library/react 
```

Commit: <>


# Next: Introduce a few components plus test coverage

We next introduced a few components for the navigation bar
and footer to have a basis to try out:
* test coverage
* mutation testing
* Storybook

Commit: <https://github.com/ucsb-cs156/template-spring-react/commit/d24bf91cc3431c4300e532f3f283a038bcd452c8>

Here are some details:

### Updating test coverage to `nyc`

One of the first things we found is that our old way of doing coverage was using a dependency that had not been updated in five years.  We therefore needed to update to either `nyc` or `c8`, and chose `nyc` based on [this article](https://dev.to/andrewbaisden/how-to-improve-test-coverage-in-a-javascript-react-project-235p) from Jan 6, 2023, and the fact that `nyc` had received recent updates (as recently as two months prior to August 2024).

So we did:

```
npm install --save-dev nyc
```

and added this to `package.json` under `scripts`:

```
   "coverage": "nyc --reporter=html --reporter=text-summary react-scripts test --watchAll --coverage"
```

Running `npm run coverage` will bring up a test report as well
as putting a detailed report in `frontend/coverage/lcov-report/index.html`

### Absolute imports

It was also necessary to make an adjustment [as described here 
in the CRA documentation](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
so that absolute paths would work, for example, rather than:

```
import Footer from "../../../main/components/Nav/Footer";
```

We use:

```
import Footer from "main/components/Nav/Footer";
```

### Fixing axios issue

There was an issue with importing axios at first as described in [this stack overflow post](https://stackoverflow.com/questions/73958968/cannot-use-import-statement-outside-a-module-with-axios).  The fix was to update jest from version 27 to version 29.

```
npm i @jest/core
```

We also needed this in `package.json`

```
"jest": {
   "moduleNameMapper": {
      "^axios$": "axios/dist/node/axios.cjs"
    },
    ...
}
```

### Restricting scope of code coverage

We restricted the scope of code coverage with these lines in `package.json`, under `jest`:

```
 "jest": {
    ...
    "collectCoverageFrom": [
      "src/main/**/*.{js,jsx,ts,tsx}"
    ]
  }
```

### Updating tests for React 18

When upgrading from React 16 to React 18, the dependency 
`@testing-library/react-hooks` is no longer needed (or supported) as the functionality has been moved into the core of the react testing library. 

So, the following change must be made; change:

```
import { renderHook } from '@testing-library/react-hooks'
```

to this:

```
import { renderHook } from '@testing-library/react'
```

## Changing act, waitFor

Any time you see this:

```
      const { result, waitFor } = renderHook(() => useCurrentUser(), { wrapper });
```

It's the old style of getting waitFor.  Instead, it should now be imported like this:

In addition, this should be changed from:

```
import { act } from 'react-dom/test-utils';
```

to:

```
import { act } from '@testing-library/react'
```

### Fixed one test

One test in currentUser.test.js had to be changed to include
`initialData` as follows.  It is not immediately clear why, but there may be some difference in timing with the newer versions of node, react, etc.  

```js
            expect(result.current.data).toEqual({ initialData:true, loggedIn: false, root: null });
```

# Add in stryker

We then added Stryker mutation testing in this commit:

Commit: <https://github.com/ucsb-cs156/template-spring-react/commit/c59bc96147400a7d536cb4533e1e4642cb246ab8>

# Next: add in eslint

We next added in eslint, migrating to the new format for configuration, which
is optional in version 8.x, but mandatory in version 9.x.

Commit: <https://github.com/ucsb-cs156/template-spring-react/commit/e0aece456f70454ef29608716fdc6ae9a8e4acb3>

# Next: add in prettier

We next added in prettier, and the `npm run format` and `npm run check-format` scripts.



# Next: add in storybook

TODO
