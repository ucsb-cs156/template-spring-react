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


