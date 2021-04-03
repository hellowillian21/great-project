# great-project
> Great project starts from here!!  

## What is this?
This is a template for new project, so that you can quickly have a react development environment and specifications.

## How to do?
- git clone git@github.com:hellowillian21/great-project.git
- cd great-project
- npm install
- open project with vscode

## pre-commit
pre-commit is used to check the code before the Git commit command is executed.  

In the window system, it is easy to cause hook binding failure. The behavior in the file system is that the pre commit file (.symlink file) is not generated in the ".git/hooks" directory. under these circumstances:

Execute the command: `node ./node_modules/pre-commit/install.js` Manually install the . symlink file.
