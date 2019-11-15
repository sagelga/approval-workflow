#!/usr/bin/env sh
# This deploy script is for deploying 
# the project (as HTML) to GitHub Pages.
# Make sure that the last line is edited to the repository.

# Abort process if fatal error
set -e

# Installing modules + build the HTML + JS file
yarn
yarn docs:build

# Navigate into the build output directory
cd docs/.vuepress/dist

# Choosing the deployment to a custom domain
# echo 'www.example.com' > CNAME


# Pusing the deployment to GitHub
git init
git add -A
git commit -m 'Website AutoDeploy'

git push -f git@github.com:sagelga/approval-workflow.git master:gh-pages

cd -
