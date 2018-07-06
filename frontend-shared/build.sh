#!/usr/bin/env bash
set -e # Exit with nonzero exit code if anything fails

START_TIME=$SECONDS

echo -n "NPM Version: " && npm --version
echo -n "Node Version: " && node --version

npm run all

ELAPSED_TIME=$(($SECONDS - $START_TIME))
echo "Frontend Shared lint & test duration: $ELAPSED_TIME seconds"
