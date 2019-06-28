# Lab31 - Hooks

Implements hooks for React functional components to access state, context, and reducers

### Author: Chris Kozlowski

### Links and Resources

- [GitHub PR](https://github.com/401-advanced-javascript-cdk/lab31-hooks/pull/1)
- [Netlify Deployment](https://7ey5u.csb.dev/)
- [Travis](https://travis-ci.com/401-advanced-javascript-cdk/lab31-hooks)

### Modules

#### `index.js`

Gets the root element in the HTML and renders the App component

#### `app.js`

Imports a Header and ToDo components and wraps them in LoginContext

#### `components/header/header.js`

Renders the Login component for user login and logout

#### `components/auth/login/login.js`

Uses context to access LoginContext and useState hook to control form input

#### `components/todo.todo.js`

Uses useState hook to handle task creation and useReducer with a reducer and actions to control adding it to the list or toggling the task complete/in progress.  Uses Auth to restrict access to specific elements unless the user has the correct capability.

#### `components/context/context.js`

Defines the structure of LoginContext provider and returns it's children with LoginContext access

#### `components/auth/auth.js`

Uses the useContext hook to check if a user is logged in and returns it's children if they are logged in or have the correct capability

#### Operation

Go to the deployment [here](https://app.netlify.com/sites/unruffled-meninsky-803ec6/overview).  Logging in as an editor or admin will enable creating and completing tasks.  Logging in as a user will only allow viewing the tasks.
```
username: | password:
          |
user      | USER
editor    | EDITOR
admin     | ADMIN
```
#### Testing

Tests can be viewed [here](https://travis-ci.com/401-advanced-javascript-cdk/lab31-hooks) or running `npm run test` from a local repository instance.
