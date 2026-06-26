---
name: scratch-teaching-site
description: Scratch 小小遊戲設計師教學網站專案概況、技術決策與目前狀態
metadata: 
  node_type: memory
  type: project
  originSessionId: dd40f9c2-ee47-4a8d-8901-fae31e971858
---

「Scratch 小小遊戲設計師」— 國小程式啟蒙互動教學網站。用途：老師上課投影、學生跟任務卡學習、招生成果展示。定位是教學入口／範例展示／任務導引，**不取代** Scratch 官方編輯器；學生實際編輯時跳轉 scratch.mit.edu 做 Remix。

**位置 / 連結**
- 本機：`D:\AI Class ChenYu\AIClass\Scratch`
- GitHub：https://github.com/ChenYuHsu413/ScratchTeaching
- 線上 Demo：https://chenyuhsu413.github.io/ScratchTeaching/
- Git 身分（本機 repo 設定）：name `ChenYuHsu413` / email `jolene19930413@gmail.com`

**技術棧**：Vite + React 18 + TypeScript + Tailwind CSS + React Router。純前端，無後端／資料庫／登入（MVP 刻意精簡）。

**為了 GitHub Pages 做的兩個關鍵決策（不要隨意改回去）**
- `vite.config.ts` 設 `base: './'`（相對路徑，子目錄網址才不會載入 404）。
- `src/main.tsx` 用 `HashRouter`（不是 BrowserRouter）— 純靜態主機深層連結／重新整理才不會 404，代價是網址帶 `#`。
- `.github/workflows/deploy.yml`：push 到 `main` 自動 build＋部署；Pages Source 已設為「GitHub Actions」。

**目前狀態（2026-06-26）**：MVP 完成並上線，使用者表示「暫時先這樣，只是要給個模板」，刻意停在此。
- 已完成頁面：首頁、課程總覽、第 1 課「接水果遊戲」（完整：7 張可勾選任務卡＋進度條、挑戰、常見錯誤、教師提示）、第 2 課打地鼠／第 3 課迷宮逃脫（僅介紹頁）、Scratch 基礎概念頁、教師備課頁。
- 三堂課的 `scratchProjectId` / `scratchProjectUrl` **全部刻意留空**，頁面會顯示「尚未設定範例專案」佔位；有真實 Scratch 作品時再填。

**擴充點**（都在 README）：填範例改 `src/data/lessons.ts` 的 projectId；新增課程複製 `Lesson` 物件加進 `lessons` 陣列；第 2、3 課照第 1 課的 `tasks` 結構補完整任務卡。概念顏色對照在 `src/data/concepts.ts`。
