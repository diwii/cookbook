# Topics I'm interested in

* The **curl** command.
* 

# Set Environment Variables

> export VARIABLE_NAME=VALUE

> echo VARIABLE_NAME

> unset VARIABLE_NAME

Set env var - *When an environment variable is set from the shell using the export command, its existence ends when the user’s sessions ends.*

> export SAM_CLI_TELEMETRY=0

Unset env var

> unset SAM_CLI_TELEMETRY

Output env var

> echo $SAM_CLI_TELEMETRY

**Persisting Environment Variables for a User**

To make an environment persistent variable for a user’s environment, we export the variable from the user’s profile script.

When you log in graphically, ~/.profile will be specifically sourced by the script that launches gnome-session (or whichever desktop environment you're using)

The .bash_profile file is located in the current user home directory as a hidden file.
By default, the .bash_profile is not created by most of the Linux distributions.
~/.bash_profile is only sourced by bash when started in login mode. That is typically when you log in at the console (Ctrl+Alt+F1..F6), connect via ssh, or use sudo -i or su - to run commands as another user.
[askubuntu.com Why Bash Profile is Not Getting Sourced](https://askubuntu.com/questions/121073/why-bash-profile-is-not-getting-sourced-when-opening-a-terminal)

Create .bash_profile <- *~/.bash_profile is not sourced at all when you log in graphically, use ~/.bashrc*

> touch ~/.bash_profile

Add `export VARIABLE_NAME=VALUE` in ~/.bashrc
> nano ~/.bashrc*

**Setting Permanent Global Environment Variables for All Users**

Add systemwide env variable

Create a new file under `/etc/profile.d` to store the global environment variable(s), the name of the file should be contextual.

> nano /etc/profile.d/aws.sh

Add `export SAM_CLI_TELEMETRY=0` in `aws.sh` file *Require relogin*


# Gnu/Linux terminal commands

**Sleep/delay command**

Wait 60 minutes and sleep the pc

> sleep 60m; systemctl suspend -i 

**Write the full path of COMMAND(s) to standard output.:**

> which <command_name>

> which node
> /usr/bin/node

**whereis  locates  the  binary, source and manual files for the specified command names.**

> whereis node
> node: /usr/bin/node

**History of entered commands:**

> history

**Reload bash settings:**

> source ~/.bashrc

or shorter:

> . ~/.bashrc

**Show All Running Processes:**

https://www.cyberciti.biz/faq/show-all-running-processes-in-linux/

ps command in combination with grep to find process id, for grep

> ps -A | grep [command_name]

> ps -A | grep firefox

**Kill process by PID or by name**

> kill [PID]

> killall chrome

**netstat**

Active Internet connections (only servers)

> netstat -tunlp

**List installed packages**

> apt list --installed

or:

> dpkg --list

**Uninstall/Remove package**

https://askubuntu.com/questions/151941/how-can-you-completely-remove-a-package

> sudo apt-get remove [package_name]

purge is identical to remove except that packages are removed and purged (any configuration files are deleted too).

> sudo apt-get purge [package_name]
> 
> sudo apt-get autoremove
> 
> sudo apt-get clean