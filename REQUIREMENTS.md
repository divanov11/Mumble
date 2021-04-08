# Frontend

## Requirements

For development, you will need Node.js and a node global package, NPM or Yarn, installed in your environement along with a text editor of your choice.

### Node
- #### Node installation on Windows or MacOS

  The least version of node required is v14.x.

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu
  
  ##### Install NVM
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    or
        wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
        
    To check that nvm is installed, type 
        nvm --version
        0.38.0
        
    Then run
        nvm install 14.16.0
        
    This command automatically installs **nodejs** as well as the latest **npm** version

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

#### If the installation was successful, you should be able to run the following command.
    
      $ node --version
      v14.16.0
      
      $ npm --version
      6.14.8
