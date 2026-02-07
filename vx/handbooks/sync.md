git clone --branch v3 --single-branch https://github.com/heroui-inc/heroui.git
cd heroui
git remote remove origin
git remote add origin https://github.com/vezham/heroui-v3-fork.git
git push -u origin v3
git remote add upstream https://github.com/heroui-inc/heroui.git

---

git fetch upstream
git merge upstream/v3

---

git diff --quiet --merge-base upstream/v3 origin/timeline

---
