### Steps to fire up your VM and start coding!

1. `brew install vagrant`
2. `brew install virtualbox`
3. `cd ` this directory
4. `vagrant up --provision`
Wait for the image to download and the VM to load.
5. When you reach the terminal, run `sudo startxfce4` to open the desktop environment.
6. Have fun in your new VM :)

PS: @Yann21: "You're free to install whatever programs you want inside (sublime, vscode, atom, emacs..). But don't spend to much time on it, because I might have to change it over time."


### Don't forget to add /env/.vagrant/ to your .gitignore
1. `touch $PROJECT_DIR/.gitignore`
2. `vim .gitignore`
3. Add the following lines
`.gitignore`
`/env/.vagrant/`
