# Git configuration

**SSH**

(Generating a new SSH key and adding it to the ssh-agent)[https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent]

(Git push requires username and password)[https://stackoverflow.com/questions/6565357/git-push-requires-username-and-password]

# Git commands

**Edit config**

Can also add `--global` flag to edit global config

`git config --edit`

**Rename branch**

Rename branch

`git branch -m <old_name> <new_name>`

Rename current branch:

`git branch -m <new_name>`

**Delete branch**

`git branch -d <branch_name>`

**Delete remote branch**
`git push origin --delete <branch_name>`

**Undo commit**

https://www.git-tower.com/learn/git/faq/undo-last-commit/

Move back to previous commit preserving changes

> git reset --soft HEAD~1

Without preserving changes

> git reset --hard HEAD~1
