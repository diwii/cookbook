# Gnu/Linux terminal commands

History of entered commands:

> history

**Reload bash settings:**

> source ~/.bashrc

or shorter:

> . ~/.bashrc

**Show All Running Processes:**

https://www.cyberciti.biz/faq/show-all-running-processes-in-linux/

ps command in combination with grep to find process id

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