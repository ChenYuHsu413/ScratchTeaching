# 把 C 槽的 Claude 專案記憶備份到這個 repo，並自動 commit / push 到 GitHub。
# 每次 Claude 更新了記憶後執行一次，避免關機（還原卡清空 C 槽）後遺失。
# 用法：在這個資料夾按右鍵「用 PowerShell 執行」，或在終端機跑：
#   powershell -ExecutionPolicy Bypass -File .\backup-memory.ps1

$source = "$env:USERPROFILE\.claude\projects\D--AI-Class-ChenYu-AIClass-Scratch\memory"
$dest = $PSScriptRoot
$repo = Split-Path $PSScriptRoot -Parent

if (-not (Test-Path $source)) {
  Write-Host "找不到記憶來源資料夾：$source" -ForegroundColor Yellow
  Write-Host "（可能還沒產生記憶，或 C 槽已被還原。）"
  return
}

# 複製 C 槽記憶資料夾裡所有 .md（含未來新增的記憶檔）到備份資料夾。
Copy-Item "$source\*.md" $dest -Force
Write-Host "已複製記憶到 $dest" -ForegroundColor Green

# 只有真的有變動才 commit / push。
$changes = git -C $repo status --porcelain -- claude-memory
if ([string]::IsNullOrWhiteSpace($changes)) {
  Write-Host "記憶沒有變化，不需要備份。" -ForegroundColor Cyan
  return
}

git -C $repo add claude-memory
git -C $repo commit -m "chore: 更新 Claude 專案記憶備份"
git -C $repo push
Write-Host "記憶已備份並推上 GitHub。" -ForegroundColor Green
