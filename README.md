# 小小遊戲設計師：Scratch 程式先修班

🔗 **線上 Demo：** https://chenyuhsu413.github.io/ScratchTeaching/

專為**國小三、四年級**設計的 Scratch 程式先修互動教學網站。每週 1 堂、每堂 3 小時、3 個月共 **12 堂**，以現場教學與實作為主，帶孩子完成角色動畫、互動故事、接水果、打地鼠、迷宮挑戰等作品，最後依學生狀況進行作品升級與分享。
網站定位是**教學入口 / 範例展示 / 任務導引**，不是要取代 Scratch 官方編輯器；學生實際編輯仍跳轉 scratch.mit.edu。

## 技術

- Vite + React 18 + TypeScript
- Tailwind CSS
- React Router（純前端，無後端、無資料庫、無登入）

## 開始使用

```bash
npm install      # 安裝套件（第一次才需要）
npm run dev      # 啟動開發伺服器，預設 http://localhost:5173
npm run build    # 型別檢查 + 打包到 dist/
npm run preview  # 預覽打包後的成品
```

## 頁面

| 路徑 | 內容 |
| --- | --- |
| `/` | 首頁：課程定位、快速資訊、特色、給家長的話、Scratch 是什麼、12 堂課表 |
| `/lessons` | 課程總覽：12 堂依「階段」分組（Scratch 基礎 / 接水果 / 打地鼠 / 迷宮 / 綜合整理） |
| `/lessons/:id` | 各堂課詳細頁：目標、概念、作品成果、Scratch iframe、任務卡、小挑戰（選做）、常見錯誤、教師提示 |
| `/concepts` | Scratch 基礎概念頁 |
| `/teacher` | 教師備課頁：3 小時節奏表、環境檢查、教學提醒 |

12 堂課程 id（依序）：`meet-scratch`、`arrow-keys`、`animation-sound`、`interactive-story`、`catch-fruit-1`、`catch-fruit-2`、`catch-fruit-3`、`whack-mole-1`、`whack-mole-2`、`maze-1`、`maze-2`、`review-upgrade`。

## 資料夾結構

```
src/
  data/
    lessons.ts      ← 所有課程資料（最常編輯的檔案）
    concepts.ts     ← 概念→顏色的對照表
  components/
    ScratchEmbed.tsx    ← Scratch iframe 嵌入元件
    LessonCard.tsx      ← 課程卡
    TaskCard.tsx        ← 任務卡（可展開、可勾選完成）
    FAQItem.tsx         ← 展開式 FAQ
    ConceptTag.tsx      ← 概念彩色小標籤
    DifficultyBadge.tsx ← 難度標籤
    Navbar.tsx / Footer.tsx
  pages/                ← 各頁面
  types.ts              ← 課程資料型別
```

## 如何替換 Scratch 範例專案（projectId）

1. 在 Scratch 找到要嵌入的專案，網址長這樣：
   `https://scratch.mit.edu/projects/123456789/`
   其中 `123456789` 就是 **projectId**。
2. 打開 `src/data/lessons.ts`，找到對應課程（例如 `catch-fruit-2`），填入兩個欄位：

   ```ts
   scratchProjectId: '123456789',
   scratchProjectUrl: 'https://scratch.mit.edu/projects/123456789',
   ```

   - `scratchProjectId`：iframe 播放器會用到，填了範例就會出現在頁面上。
   - `scratchProjectUrl`：「打開 Scratch 專案」與「Remix / 開始改編」按鈕會用到（Remix 連結自動加上 `/remix`）。
3. 存檔即可，畫面會自動更新。**沒填 projectId 時**，iframe 區塊會顯示「尚未設定 Scratch 範例專案」的提示，不影響其他內容。

> ScratchEmbed 元件也可單獨使用並調整尺寸：
> `<ScratchEmbed projectId="123456789" title="接水果範例" width={485} height={402} autostart={false} />`

## 如何新增一堂課

在 `src/data/lessons.ts` 複製一個 `Lesson` 物件，改 `id`、`order`（第幾堂）、`stage`（所屬階段，決定總覽分組）、`outcome`（作品成果）與內容，加進 `lessons` 陣列即可。
若新概念需要對應顏色，在 `src/data/concepts.ts` 的 `conceptCategory` 加一行（沒對應到的概念會顯示灰色）。

## 部署到 GitHub Pages

本專案已設定好可直接用 GitHub Pages 呈現：

- `vite.config.ts` 的 `base: './'`：用相對路徑，子目錄網址也能正確載入。
- `src/main.tsx` 用 `HashRouter`：網址會帶 `#`（如 `.../#/lessons/catch-fruit`），重新整理或直接開深層連結都不會 404。

### 方法 A：自動部署（推薦）

已附 `.github/workflows/deploy.yml`，推到 `main` 就會自動建置並上線。第一次設定：

1. 把專案推到 GitHub（建一個 repo，例如 `scratch-game`）。
2. 到 repo 的 **Settings → Pages → Build and deployment → Source** 選 **GitHub Actions**。
3. 之後每次 `git push` 到 `main`，Actions 會自動 build 並部署。
4. 網址會是 `https://你的帳號.github.io/repo名稱/`。

### 方法 B：手動上傳

```bash
npm run build      # 產生 dist/
```
把 `dist/` 整個資料夾的內容推到 `gh-pages` 分支，並在 Settings → Pages 選該分支。

> 若你用的是**使用者主頁 repo**（名稱剛好是 `你的帳號.github.io`），網址會是根目錄 `https://你的帳號.github.io/`，上面設定同樣適用，不需額外修改。

## 未來可擴充項目（第一版未做）

- 任務完成狀態用 localStorage 記住（目前重新整理會重置）
- 學生帳號 / 進度後台 / 資料庫
- 課程內嵌教學影片、列印版任務卡（PDF）
- 多語系、深色模式
- 進階班內容：分身 clone、自訂積木、複雜廣播、多關卡、敵人 AI、物理效果
