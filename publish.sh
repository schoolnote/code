set -e
# 进入生成的文件夹
cd dist
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'



git push -f git@2github.com:schoolnote/schoolnote.github.io.git main
cd –