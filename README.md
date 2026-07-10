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

### 5. Commands needed to install dependencies, run the frontend, run the backend, and validate the development environment.

This section provides the essential deployment instructions required to initialize project dependencies and execute both application layers within a local workstation environment.

**5.1. Initial Subsystem Setup**

The platform's source code separates the visual interface from the persistent logical gateway. To configure the required node modules across both layers, execute the installation scripts inside their respective development workspaces:

```bash
# Step 1: Install frontend dependencies at the repository root folder
npm install

# Step 2: Navigate into the backend environment and install server dependencies
cd server
npm install
```

**5.2. Environment Variables Provisioning**

Before spinning up the local services, you must configure your local credentials database pipeline. Replicate the architectural environment template to manage database access variables safely:

```bash
# Inside the /server directory, allocate a local environment configuration file
cp .env.example .env
```

*Note:* Open the newly created `.env` file and replace the host, port, and security credentials placeholders with your unique local MySQL execution parameters.

**5.3. Backend Subsystem (Server) Runtime Execution**

The logic layer bridges database queries using Express.js. To launch the server instance locally, execute the runtime script from within the backend space:

```bash
# Ensure you are located inside the /server directory
npm run dev
```

The intermediate terminal worker will notify you once the connection pool targeting `plc_database` is successfully initialized.

**5.4. Frontend Subsystem (Client UI) Runtime Execution**

The user interface structures live widgets and active layout tabs using Vite. Open a secondary, independent terminal instance, return to the repository root directory, and launch the web server:

```bash
# Ensure you are at the main project root folder (Integradora_ll)
npm run dev
```

**5.5. Environment Validation**

After both application layers are running, verify that the development environment has been configured correctly by executing the following validation commands:

```bash
# Verify that the frontend builds successfully
npm run build

# Verify that the backend dependencies are installed correctly
cd server
npm list
```

If the commands execute without errors, start both services (if they are not already running), open the URL provided by Vite (typically `http://localhost:5173`) in a web browser, and confirm that the application loads correctly, the dashboard is displayed, and data is retrieved from the backend without connection or rendering issues.
