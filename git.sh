#!/bin/bash
set -u  # 开启未设置变量检测
set -e  # 开启错误检测

echo "提交代码中请稍等..."
pink_bg='\033[44;37m'
err_color='\033[38;5;206m'
git pull || { echo -e "$err_color Git pull 失败 \033[0m"; exit 1; }

git add .

read -p "请输入提交内容: " commit_context

if [ -z "$commit_context" ]; then
    echo -e "$err_color 请输入commit内容 \033[0m"
    exit 1
fi

git commit -m "$commit_context" || { echo -e "$err_color Git commit 失败 \033[0m"; exit 1; }

git push || { echo -e "$err_color Git push 失败 \033[0m"; exit 1; }

echo "代码提交完成。"
echo -e "\033[5m"
echo -e "$pink_bg ********************************************************* \033[0m"
echo -e "$pink_bg 🚀*******************代码提交完成。********************🚀 \033[0m"
echo -e "$pink_bg ********************************************************* \033[0m"
