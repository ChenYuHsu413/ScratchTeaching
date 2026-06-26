# Claude 專案記憶備份

這個資料夾是「Claude 對本專案的長期記憶」的雲端備份。

## 為什麼需要它？

開發這台電腦裝了**還原卡**，C 槽（`C:\Users\admin\.claude\...`，Claude 實際存記憶的位置）會在**關機後被還原清空**。
為了讓記憶不遺失，把記憶檔放進這個 repo、推上 GitHub（雲端不受還原卡影響）。

## 檔案說明

- `MEMORY.md`、`scratch-teaching-site.md`：記憶內容本體。
- `restore-memory.ps1`：開機後用來把記憶**還原回 C 槽**的腳本。
- `backup-memory.ps1`：把 C 槽最新記憶**備份到這裡並推上 GitHub**的腳本。

## 開機後如何還原記憶

1. 確保有這個 repo（D 槽若也被還原，先 `git clone https://github.com/ChenYuHsu413/ScratchTeaching.git`）。
2. 在這個資料夾執行：
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\restore-memory.ps1
   ```
3. 記憶就會被複製回 `C:\Users\admin\.claude\projects\D--AI-Class-ChenYu-AIClass-Scratch\memory\`，下次和 Claude 對話時就能記得這個專案。

## 更新記憶後記得備份

之後若 Claude 更新了記憶（C 槽那份），關機就會被還原卡清空。請在**關機前**執行備份：
```powershell
powershell -ExecutionPolicy Bypass -File .\backup-memory.ps1
```
這支腳本會把 C 槽最新記憶複製過來，並自動 commit / push 到 GitHub。

> 註：本機 D 槽不會被還原，所以專案與 git repo 開機後都還在；只有 C 槽（Claude 記憶）需要靠這套腳本來回搬。
