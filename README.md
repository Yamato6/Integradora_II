# Integradora II

In this section, you will find clear instructions on how to clone the project, create branches, commit changes, and submit pull requests.

## 1. Repository Initialization and Cloning

To establish a synchronized local instance of the development workspace from the remote GitHub repository, execute the following commands in your terminal:

```bash
git clone https://github.com/Yamato6/Integradora_ll.git
cd Integradora_ll
```

> **Note:** Remember to install the project dependencies (such as `npm install`) inside the appropriate directories before running the application locally.

---

## 2. Branching Strategy and Workflow

The project follows a modular branching strategy to prevent merge conflicts. Direct contributions to the main branches are restricted. Each developer must work on an independent feature branch created from the `main` branch.

Before creating a new branch, make sure your local repository is up to date:

```bash
git checkout main
git pull origin main
```

Then create and switch to your feature branch:

```bash
git checkout -b feature/your-name-task-description
```

---

## 3. Staging and Committing Changes

Once your code modifications follow the project's architecture and coding standards, stage and commit your changes using meaningful commit messages.

Check the repository status:

```bash
git status
```

Stage the modified files:

```bash
git add .
```

Create the commit:

```bash
git commit -m "Your descriptive commit message"
```

---

## 4. Submitting Pull Requests (PR) and Integration Workflow

After completing and validating your feature against the project's requirements, push your branch to the remote GitHub repository:

```bash
git push origin feature/your-name-task-description
```

Finally, open a Pull Request on GitHub to request the integration of your changes into the main development branch.
