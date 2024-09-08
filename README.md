# Goalify

## CONTRIBUTING

### Branch Strategy

**ATTENTION:** There are 2 fixed branches within the version control system: the `main` & `dev` branches. These branches hold the source of truth for the state of the application. All topic branches are prefixed with the following prefixes:

- `feat/` for feature requests
- `fix/` for bug fixes
- `chore/` for enchancements such as dependency updates
- `test/` for PRs that only contain tests
- `doc/` for documentation

### Getting Started

1. Clone the repository
2. Run the following command
   - `git checkout dev`
   - `git pull`
   - `git checkout -b <prefix>/<branch_name>` eg `git checkout -b feat/email_reminder_scheduling`

Try to keep the commits as granular and as compact as possible to avoid merge conflicts.

## Day-to-day Development

### Run locally

1. Install [`pnpm`](https://pnpm.io/installation)
2. create a new file called `.env.local`; copy the variables defined in the .env.example into this file.
3. Start the dev server by using this command
   - `pnpm dev`

### Frameworks Used

1. [React](https://react.dev/)
2. [Vite](https://vitejs.dev)
3. [TailwindCSS](https://tailwindcss.com/)
4. [Mantine](https://mantine.dev/)

## TESTS

### Unit Tests with Vitest

**ATTENTION:** Before you start writing unit tests with Vitest, make sure you read through the documentation for the [React Testing Library](https://testing-library.com/docs/react-testing-library/api)

1. `pnpm test` to open up the Vitest Test Runner
2. Test away! 🚀
