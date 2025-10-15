# MSK Suggestion Management Board by Jason Crabtree

### Summary:

NextJS (app router) app using Neon as a serverless postgres db for persistent Storage. Application is deployed on vercel, with all changes persisted in the db.

The app makes use of NextJS app routers server capabilities to securely fetch data where needed, while using client side features to enable a modern, smooth user experience.

[Public GitHub Repository](https://github.com/jasontcrabtree/msk-suggestion-board)

[Deployed Application on Vercel](https://msk-suggestion-board.vercel.app/)

## Running Application Locally:

1. Clone the repository from https://github.com/jasontcrabtree/msk-suggestion-board
2. Install node and npm to run package.json commands via https://docs.npmjs.com/downloading-and-installing-node-js-and-npm (or use alternative tools, e.g. I use pnpm)
3. Copy the contents of the .env.local file sent via email and create a .env.local file locally (or save the attachment) in the root folder of the application - **this is critical, application won't start otherwise**
4. You should now have the entire GitHub repository downloaded locally with the required .env file contents
5. Using a terminal navigate to the project root level

   1. Confirm this by running `ls` in your terminal. You should see the following files and folders:

      ```
      db  public  src  README.md  TODO.md  eslint.config.mjs  next.config.ts  package-lock.json  package.json  pnpm-lock.yaml	postcss.config.mjs tsconfig.json
      ```

6. Run npm (or pnpm) install to install the depenencies listed in the package.json file
7. Verify the installation was successfully completed via the terminal and by checking for a node_modules folder
8. Congratulations! You're now ready to run the application
9. In a terminal at the root level of the project as above, run `npm run dev` to start a local development server
10. Navigate to the url shown in the terminal -
    likely [http://localhost:3000/](http://localhost:3000/) and view the application running locally!

## Assumptions:

Data assumptions

- Every suggestion should be associated with an employee
- Options with repeated values (e.g. priority, type, status) must be chosen from fixed fields, not from free text fields
- Required and optional fields were chosen based on the provided dataset
- The TypeScript Types for Employee and Suggestion are correct, which is an assumption that relies on the shape of the data has provided

Technical assumptions

- Pagination of data is not required at this stage
- The list of suggestions will only stay withoin a certain volume, both overall and per employee. Specifically, the current build could technically load as many results as required (within reason!) however if there was 500 or 1000 pending suggestions to mark overall or per employee this would require different UI and UX decisions
- There will not be mass creation of suggestions, e.g. 1000 people creating suggestions at once - this would cause bottlenecks at the application and db level
- DB is used to modify "Last Updated" field which means no manual modification of this field is possible
- Neon's tagged template literals are used to write PostgreSQL that is santized and passed to the db safely. This is scalable for this level however past a certian point of complexity (of queries) or data requirements, an additional set of tools and libraries may be required, e.g. Drizzle or Prisma or other ORM or DB access solutions

User experience assumptions

- Suggestion statuses only need to be updated one at a time, no batch update functionality has been provided
- Changes to suggestion statuses should be made immediately with no step to check them
- As this is a dashboard for admins, all results are visible to everyone using the dashboard
- Once a suggestion has been marked as completed the first time, dateCompleted shouldn't change

## Architectural Decisions:

These tools were decided based on the informaiton and data provided and the requirements of the brief, and my familiarity. I believe these tools provide an effective starting point for a scalable, robust and modern web application that could grow and change as requirements change.

A component based architecture has been used, splitting code out where appropriate into different components based on whether they are server-side, client-side, presentation, ui, data manipulation or data fetching components.

The main index page, `page.tsx`, is used to fetch data server-side. Some components are re-used when needed, and some components call others or nest others based on reusability and state access requirements.

- ### React + NextJS:
  - NextJS framework which uses React has been used for the UI, with the NextJS app router server-side features such as SSR data loading and server-side data modification. This enables us to securely fetch and update data in the DB. This provides a good mix of server-side rendering and caching and client-side interactivity
- ### TypeScript:
  - Provides type safety during development, with better type checking, editor hints, errors and warning messages when required data is not provided. This enables us to effectively uses NextJSs lint features pre-deploy to reduce the risk of bugs
- ### NeonDB with PostgreSQL:
  - A serverless postgres db that is easy to setup and get started with, including using the "@neondatabase/serverless" npm package which provides useful tools such as the tagged template literals. PostgreSQL far exceeds the data requirements of this project and would be extremely scalable, however the specific way the data is accessed may change in a future refactor (to use an ORM)
- ### Tailwind:
  - Used for styling for convenince and speed, the same design could be built using CSS-in-JS or vanilla CSS options
- ### CI/CD & Deployment:
  - Code is stored in a public GitHub repository which is connected to Vercel. This enables CI/CD, redeploying the application based on any new changes or pushes to branches
  - Env variables (as required for vercel and neon) are stored in Vercel, and also provided for local use
