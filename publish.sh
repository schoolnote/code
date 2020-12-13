set -e
# 进入生成的文件夹
cd docs/.vuepress/dist
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'



git push -f git@second.github.com:schoolnote/schoolnote.github.io.git main
cd –