<div align="center">

# The Berkeley algorithm in JavaScript

This project is a simple implementation of the Berkeley algorithm in JavaScript. The Berkeley algorithm is a time synchronisation algorithm that allows a group of computers to synchronise their clocks with a central server. This project demonstrates how the algorithm works and how it can be implemented in a real-world scenario. You can read more about the Berkeley algorithm [here](https://www.geeksforgeeks.org/berkeleys-algorithm/).

<img src="https://media.geeksforgeeks.org/wp-content/uploads/Ping_for_time.png" alt="Example of the Berkeley algorithm in action" width="300"/>
<img src="https://media.geeksforgeeks.org/wp-content/uploads/Receive_time_from_slaves-1.png" alt="Example of the Berkeley algorithm in action" width="300"/>
</div>

## Rive.App Animation?

The website uses some animations created with rive.app. The animations can be found in the `src/images` folder. The animations are exported as `.riv` files. You can find out more about Rive.app [here](https://rive.app/community/doc/introduction/docvphVOrBbl).

<div align="center">


</div>


## Table of contents

- [Prerequisites](#prerequisites)
- [How to use this project](#how-to-use-this-project)
  - [1. Clone the repository](#1-clone-the-repository)
  - [2. Navigate to the project directory](#2-navigate-to-the-project-directory)
    - [2.1. Identifying the directory name](#21-identifying-the-directory-name)
    - [2.2. Using the 'cd' command](#22-using-the-cd-command)
  - [3. Open the project in VS Code](#3-open-the-project-in-vs-code)
  - [4. Install the dependencies](#4-install-the-dependencies)
    - [4.2. Installing via NPM](#42-installing-via-npm)
  - [5. Running the project](#5-running-the-project)
  - [6. Customise the project](#6-customise-the-project)

## Prerequisites

Before you begin, you'll need to have the following tools installed on your computer:

- 📝 [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
- 🛠️ [Git](https://git-scm.com/) - To clone the repository from GitHub.

## How to use this project

Follow the steps below to set up the project on your computer:

### 1. 📂 Clone the repository

Open your terminal and run the following command to clone this repository:

```bash
git clone https://github.com/Capitaozila/BerkeleyClockWeb.git
```

### 2. Navigate to the project directory

After cloning, the project files will be in a new folder on your system. In order to work with these files, you will need to "enter" this folder in the terminal. Here's a step-by-step guide:

#### 2.1. Identifying the directory name

   When you clone a repository, it's downloaded into a folder with the same name as the repository on GitHub. In this case the repository name is **BerkeleyClockWeb**, so a new folder named **BerkeleyClockWeb** will be created.

#### 2.2. Using the 'cd' command

   In the Terminal, use the cd command to access this new folder. The basic format of the command is

   ```bash
   cd folder name
   ```

   Here the folder is called **BerkeleyClockWeb**, so

   ```bash
   cd BerkeleyClockWeb
   ```

   After this command, the terminal will be "inside" the project folder and you can execute commands specific to this project.

   **Note:** If you have cloned the repository to a different location, specify the full path to the folder. For example:

   ```bash
   cd /path/to/your/folder/BerkeleyClockWeb
   ```

### 3. Open the project in VS Code

In the terminal, inside the project directory, run the following command

```bash
code .
```

**Explanation**
- `code`: Opens VS Code from the terminal.
- `.`: Represents the current directory, so this command opens the project directory directly in VS Code.
If the `code` command doesn't work, you may need to add it to your PATH:

1. Open VS Code.
2. Press **Ctrl + Shift + P** (or **Cmd + Shift + P** on MacOS) to open the command palette.
3. Type and select 'Shell Command: Install 'code' command in PATH'.
4. Press **Enter** to install.

VS Code will then open with your project loaded.

### 4. Install the dependencies

You can use BeerCSS either via CDN or NPM, here we use NPM.

#### 4.2. Installing via NPM

   We'll use NPM to manage the project's dependencies. Run the following commands to install BeerCSS and Material Dynamic Colours

   ```bash
   npm install
   ```

### 5. Running the project

Once the dependencies are installed, you can run the project locally using parcel.
Follow the steps below:

1. **Start the local server:**
   - With the project open in VS Code, open the terminal and type

   ```bash
   npm start
   ```

   Then, to build:

   ```bash
   npm run build
   ```

Now you can see changes to the code in real time in your browser, without having to manually reload the page.

### 6. Customise the project

Feel free to edit the files in the `src` directory to customise the portfolio to your needs. The main sections of the site can be found and modified within this directory.

## Technologies used

## Technologies used

- **Web Kit**: A collection of technologies that allow web developers to create websites and web applications.
- **BeerCSS**: A lightweight and intuitive CSS framework.
- **Vite**: A web application bundler that simplifies the development, packaging and optimisation of code files.
- **Rive.app**: A design tool that allows you to create animations and export them as code.

## 🤝 Contributions

Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements.
