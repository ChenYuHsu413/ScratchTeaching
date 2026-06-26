import type { ConceptCategory } from '../types'

// 概念顏色系統。
// 每個概念名稱對應一個分類，每個分類對應一組固定的 Tailwind 顏色 class。
// 注意：class 字串必須「完整寫出來」，不要用字串拼接，否則 Tailwind 會在打包時被清掉。

/** 分類 → 顏色樣式（背景、文字、邊框）。 */
export const categoryStyles: Record<ConceptCategory, string> = {
  event: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  motion: 'bg-blue-100 text-blue-800 border-blue-300',
  control: 'bg-orange-100 text-orange-800 border-orange-300',
  condition: 'bg-purple-100 text-purple-800 border-purple-300',
  variable: 'bg-red-100 text-red-700 border-red-300',
  sensing: 'bg-green-100 text-green-800 border-green-300',
  misc: 'bg-slate-100 text-slate-700 border-slate-300',
}

/** 分類的中文名稱，用於概念說明頁的圖例。 */
export const categoryLabels: Record<ConceptCategory, string> = {
  event: '事件',
  motion: '動作 / 座標',
  control: '控制 / 迴圈',
  condition: '條件判斷',
  variable: '變數',
  sensing: '偵測',
  misc: '其他',
}

/**
 * 概念名稱 → 分類 的對照表。
 * 新增概念時在這裡加一行即可；沒有列到的概念會自動歸到 misc（灰色）。
 */
const conceptCategory: Record<string, ConceptCategory> = {
  事件: 'event',
  綠旗: 'event',
  鍵盤事件: 'event',
  鍵盤偵測: 'event',
  角色點擊事件: 'event',
  廣播: 'event',
  廣播訊息: 'event',

  動作: 'motion',
  座標: 'motion',
  'x 座標': 'motion',
  'y 座標': 'motion',
  座標移動: 'motion',
  造型切換: 'motion',
  分身: 'motion',

  迴圈: 'control',
  重複執行: 'control',
  等待: 'control',
  順序執行: 'control',
  遊戲流程: 'control',
  遊戲狀態: 'control',
  關卡設計: 'control',

  條件判斷: 'condition',
  創意設計: 'condition',
  遊戲規則調整: 'condition',

  變數: 'variable',
  分數變數: 'variable',
  隨機數: 'variable',

  碰撞偵測: 'sensing',
  碰到顏色偵測: 'sensing',
  偵測: 'sensing',
}

/** 查詢某個概念屬於哪個分類，找不到就回傳 misc。 */
export function categoryOf(concept: string): ConceptCategory {
  return conceptCategory[concept] ?? 'misc'
}
