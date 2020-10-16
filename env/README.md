### Steps to fire up your VM and start coding!

1. `brew install vagrant`
2. `brew install virtualbox`
3. `cd ` this directory
4. `vagrant up --provision`
Wait for the image to download and the VM to load.


### Don't forget to add /env/.vagrant/ to your .gitignore
1. `touch $PROJECT_DIR/.gitignore`
2. `vim .gitignore`
3. Add the following lines
`.gitignore`
`/env/.vagrant/`
