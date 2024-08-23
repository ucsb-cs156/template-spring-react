# template-spring-react

A new version of a minimal Spring Boot / React app for use in CMPSC 156

# Background

The file [`/docs/background.md`](docs/background.md) contains an explanation of how this code base was assembled in terms of the various dependencies that comprise the backend and frontend.


# Frontend Commands

| Command | Explanation |
|---------|-------------|
| `nvm use --lts` | Use latest long-term-support version of node |
| `nvm install --lts` | Install long-term-support version of node; typically only need to do this once unless version changes |
| `npm ci` | Clean install |
| `npm start` | Start frontend |
| `npm test` | Run unit tests |
| `npm test -- HomePage` | Run unit tests that match pattern `HomePage` |
| `npm run coverage` | Run test coverage; detailed result in `coverage/lcov-report/index.html` |
| `npx stryker run` | Run mutation coverage |
| `npx stryker run -m /full/path/to/file/to/mutate.js` | Run mutation coverage on just one file |
| `npx eslint --fix src` | Run eslint to check code in `src` for common js bugs |
| `npm run format` | Fix formatting of frontend code |
| `npm ci` | Clean Install; replaces/updates contents of `node_modules` directory based on the versions in the `package-lock.json` file |

## Infrequently used frontend commands

| Command | Explanation |
|---------|-------------|
| `npm install` _package_ --save | install package and add to dependencies in `package.json` |
| `npm install` _package_ `--save-dev` | install package and add to dev dependencies in `package.json` |
| `npm install` | recompute dependencies which might modify `package-lock.json`; typicallly not a good idea to do this unless you are installing new packages.  Also updates `node_modules` |
| `npm run check-format` | Check formatting of frontend code; typically only used in Github Actions CI/CD scripts |



# Backend Commands

| Command | Explanation |
|---------|-------------|
| `mvn clean` | Reset development environent (including the development environment database.) |
| `mvn compile` | Recompile all of the code |
| `mvn spring-boot:run` | Run the backend |
| `mvn test` | Run unit tests |
| `mvn git-code-format:format-code` | Format code 
| `INTEGRATION=true mvn test-compile failsafe:integration-test` | Run Integration Tests |
| `mvn test jacoco:report` | Run test coverage report on backend; report will be in `target/site/jacoco/index.html` |
| `mvn pitest:mutationCoverage` | Run mutation testing; report will be in `target/pit-reports/index.html` |

## Backend Testing 

| Command | Explanation |
|---------|-------------|
| `mvn test -Dtest=FooTests` | Run unit tests from class `FooTests` |
| `mvn test -Dtest=FooTests\#test_that_foo_works` | Run a specific test |
| `INTEGRATION=true HEADLESS=false mvn test-compile failsafe:integration-test` | See integration tests run in a live browser |
| `INTEGRATION=true mvn test-compile failsafe:integration-test -Dit.test=HomePageWebIT` | Run a specfific integration test |
| `mvn pitest:mutationCoverage -DtargetClasses=edu.ucsb.cs156.courses.controllers.PSCourseController` | Run pitest on just one class |
| `mvn pitest:mutationCoverage -DtargetClasses=edu.ucsb.cs156.courses.controllers.\*` | Run pitest on just one package |


