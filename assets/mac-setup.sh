# Script to verify cypress dependencies and install any missing dependencies
# Owner - DigitalQe Architects - Prasanna/Rahul/Yogesh
# Last revised 01/09/2022
# Note: prefer running with sudo rights: sudo sh mac-setup.sh

echo "\n\n\033[1;47m----------------STARTTING : VERSION CHECK & INSTALL--------------------\033[0m\n\n"
BREW_VERSION="$(brew -v)"
if [[ "$BREW_VERSION" = "Homebrew"* ]]; then
    echo "\033[1;32m Homebrew setup looks good!! \033[0m"
  else
	echo "\033[1;31m Homebrew is NOT installed \033[0m";
	echo "\033[1;30m Starting homebrew installation... \033[0m\n";
	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)";
	echo ${BREW_VERSION} "\033[1;32m Homebrew version 1x is installed \033[0m";
fi
echo "\n-------------------------------------------------\n"
NODE_VERSION="$(node -v)"
if [[ "$NODE_VERSION" = "v"* ]]; then
    echo ${NODE_VERSION} "\033[1;32m Node is installed \033[0m"
  else
	echo "\033[1;31m Node is NOT installed \033[0m";
	echo "\033[1;30m Starting node installation... \033[0m\n";
	brew install node;
	echo ${NODE_VERSION} "\033[1;32m Node installed \033[0m";
fi
echo "\n-------------------------------------------------\n"
GIT_VERSION="$(git --version)"
if [[ "$GIT_VERSION" = "git version"* ]]; then
    echo ${GIT_VERSION} "\033[1;32m Git is installed \033[0m"
  else
	echo "\033[1;31m Git is NOT installed \033[0m";
	echo "\033[1;30m Starting git installation... \033[0m\n";
	brew install git;
	echo ${GIT_VERSION} "\033[1;32m Git is installed \033[0m";
fi
echo "\n-------------------------------------------------\n"
YARN_VERSION="$(yarn --version)"
if [[ "$YARN_VERSION" = *"1."* ]]; then
    echo ${YARN_VERSION} "\033[1;32m Yarn version 1x is installed \033[0m"
  else
	echo "\033[1;31m Yarn version 1x is NOT installed \033[0m";
	echo "\033[1;30m Starting yarn installation... \033[0m\n";
	chmod 777 /usr/local/lib/node_modules;
	npm install --global yarn;
	echo ${YARN_VERSION} "\033[1;32m Yarn version 1x is installed \033[0m";
fi
echo "\n\n\033[1;47m------------------END : VERSION CHECK & INSTALL--------------------\033[0m\n\n"
echo "\n\n\033[1;34mInstall visual studio code if not done already: https://code.visualstudio.com/\033[0m\n\n"


echo "\n\n\033[1;47m----------------STARTTING : Cloning project--------------------\033[0m\n\n"

read -p "Do you want to clone a new git project, Type Y or N ?: " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]];
then
	echo "\n----"
    read -p 'Enter your git username(no spaces) : ' USERNAME
	echo "\n----"
	read -p 'Enter your git email address : ' EMAIL
	echo "\n----"
	read -p 'Enter your git project cloning url : ' URL
	echo "\n----"
	git config --global user.name $USERNAME;
	git config --global user.email $EMAIL;
	echo "\n\n\033[1;30m A new working directory 'workspace' will be created, inside that the new project will be cloned \033[0m\n";
	mkdir workspace;
	cd workspace;
	git clone $URL;		
	echo "\n\n\033[1;47m----------------STARTTING : Installing cypress--------------------\033[0m\n\n"
	read -p "Do you want to build the project and install cypress, Type Y or N ?: " -n 1 -r
	if [[ $REPLY =~ ^[Yy]$ ]]
		then
			cd cypress;
			echo "\n\033[1;30m Starting cypress installation... \033[0m\n";
			npm install cypress --save-dev;
			echo "\n\033[1;30m Cypress installed: try running npx cypress open inside the project to launch the runner... \033[0m\n";
		else
			echo "\n\033[1;30m Exiting cypress installation... \033[0m\n";
	fi	
	echo "\n\033[1;30m If there is a issue downloading cypress in internal network, update your .npmrc file... \033[0m\n";
	echo "\n\n\033[1;47m------------------END : Installing cypress--------------------\033[0m\n\n"
else
	echo "\n\033[1;32mYou are all set!! If you want to clone a different repo, run this file again!\033[0m"
		
fi

echo "\n\n\033[1;47m------------------END : Cloning project--------------------\033[0m\n\n"