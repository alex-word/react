#!/bin/bash
set -u  # 开启未设置变量检测

max_attempts=3
attempt=0  # 初始化尝试次数为0

while [ $attempt -lt $max_attempts ]; do
    echo "提交代码中请稍等..."
    pink_bg='\033[44;37m'
    err_color='\033[38;5;206m'
    git pull

    git add .

    # 内层循环用于获取有效的提交内容
    while true; do
        read -p "请输入提交内容: " commit_context

        if [ -z "$commit_context" ]; then
            echo -e "$err_color 请输入commit内容 \033[0m"
            attempt=$((attempt + 1))
            if [ $attempt -lt $max_attempts ]; then
                remaining_attempts=$((max_attempts - attempt))
                echo "你还有 $remaining_attempts 次尝试机会。"
                # 继续内层循环，让用户重新输入
                continue 2
            else
                echo -e "$err_color 达到最大尝试次数，退出。 \033[0m"
                exit 1
            fi
        fi

        # 成功获取到提交内容，退出内层循环
        git commit -m "$commit_context"
        if git push; then
            echo "代码提交完成。"
            echo -e "\033{ \033[5m"
            echo -e "$pink_bg ********************************************************* \033[0m"
            echo -e "$pink_bg 🚀*******************代码提交完成。********************🚀 \033[0m"
            echo -e "$pink_bg ********************************************************* \033[0m"
            exit 0
        else
            echo -e "$err_color 提交失败，请检查问题并重试。 \033[0m"
            attempt=$((attempt + 1))
            if [ $attempt -lt $max_attempts ]; then
                echo "尝试次数：$attempt/$max_attempts"
                # 退出内层循环，尝试新的提交
                break
            else
                echo -e "$err_color 达到最大尝试次数，退出。 \033[0m"
                exit 1
            fi
        fi
    done
done
