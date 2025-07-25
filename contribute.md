# 👥 GitHub Organization Workflow Guide

Welcome to our GitHub organization! This guide will help you understand how to collaborate effectively using Git, GitHub branches, and pull requests. Please read carefully before contributing.

---

## 🧰 Prerequisites

- Git installed → [Download Git](https://git-scm.com/downloads)
- GitHub account → [Sign Up](https://github.com/join)
- Set your global Git info:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your@email.com"
## 🔗 1. Clone the Repository
Only needed once when you start working on a project.
  ```bash
    git clone https://github.com/your-org/repo-name.git
    cd repo-name
  ```

## 🌿 2. Create a New Branch
❌ Do NOT push directly to main.
✅ Create a separate branch for every new feature or bug fix:

  ```bash
  git checkout -b feature/your-feature-name
  ```
Examples:
- `feature/user-auth`
- `bugfix/navbar-overlap`
- `hotfix/typo-homepage`

## 💻 3. Make Changes Locally
Open the project in your preferred editor and work on your assigned task or feature.

## 💾 4. Stage and Commit Your Changes
  ```bash
  git add .
  git commit -m "Describe your changes here"
  ```
Examples:
  ```bash
  git commit -m "Added responsive login form"
  git commit -m "Fixed footer not sticking to bottom"
  ```

## 🚀 5. Push Your Branch to GitHub
  ```bash
  git push origin your-branch-name
  ```
## 🔁 6. Create a Pull Request (PR)
- Go to the GitHub repository page.
- Click the "Compare & pull request" button.
- Add:
  - A meaningful title
  - A description of what you did
- Click "Create pull request"
- Wait for a reviewer to approve or suggest changes

## 🔄 7. Sync Your Branch with main (Regularly)
To avoid conflicts:

  ```bash
  git checkout main
  git pull origin main
  
  git checkout your-branch-name
  git merge main
  ```
## 🔒 8. Protected Branch Rules (Admin Only)
To enforce this workflow:
- Go to Settings > Branches
- Add a branch protection rule for main
- Enable:
  - ✅ Require pull request before merging
  - ✅ Require review before merging
  - ✅ Restrict direct pushes (optional)

## 🧠 Best Practices
- ✅ DO:
  - Always use a new branch per feature
  - Write clear commit messages
  - Pull from main often
  - Create PRs for all changes

- 🚫 DON’T:
  - Push directly to main
  - Leave vague commit messages like update or fixed something
  - Ignore merge conflicts—ask for help if needed
