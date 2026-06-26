# 開機後執行這個腳本，把專案記憶還原回 Claude 的 memory 資料夾。
# 用法：在這個資料夾按右鍵「用 PowerShell 執行」，或在終端機跑：
#   powershell -ExecutionPolicy Bypass -File .\restore-memory.ps1

$target = "$env:USERPROFILE\.claude\projects\D--AI-Class-ChenYu-AIClass-Scratch\memory"
New-Item -ItemType Directory -Force -Path $target | Out-Null

$src = $PSScriptRoot
Copy-Item "$src\MEMORY.md" $target -Force
Copy-Item "$src\scratch-teaching-site.md" $target -Force

Write-Host "已還原 Claude 專案記憶到：" -ForegroundColor Green
Write-Host $target
