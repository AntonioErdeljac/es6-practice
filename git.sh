#!/bin/bash

echo "Updated at $(date +"%T")" >> cronJobOutput.txt

git add .
git commit -m "Cronjob commit at $(date + "%T")"
git push
