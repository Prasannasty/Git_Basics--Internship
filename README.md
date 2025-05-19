git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

### Starting a Repository
git init                          # Initialize a new Git repo
git clone <repo-url>             # Clone an existing repo from GitHub

##  Staging and Committing
git status                       # Show status of files
git add .                        # Add all files to staging area
git add <file>                   # Add specific file
git commit -m "Your message"     # Commit with a message


### Working with Remote Repositories
git remote add origin <repo-url>         # Connect to remote GitHub repo
git remote -v                            # Show remote URL
git push -u origin <branch>              # Push code and track branch
git push                                 # Push changes
git pull                                 # Pull latest changes

## Branching 
git branch                               # List local branches
git branch <new-branch>                  # Create new branch
git checkout <branch>                    # Switch to branch
git checkout -b <new-branch>             # Create + switch branch
git merge <branch>                       # Merge branch into current one
git branch -d <branch>                   # Delete local branch
git push origin --delete <branch>        # Delete remote branch

## viewing histroy
git log                                  # Show commit history
git log --oneline                        # Compact history
