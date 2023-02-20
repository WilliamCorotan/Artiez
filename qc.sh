echo "What is commit message"
read commitMessage
cd c/capstone/Artiez
git add .
git commit -m "${commitMessage}"
git push origin ramuel
