/**
 * Simplified Chinese translations for UI components.
 *
 * Mirrors the namespace structure and keys of `locales/en/components.ts`.
 */

import type { MessageTree } from '../../i18n';

export const components: MessageTree = {
  footer: {
    context: '上下文',
    thinking: '思考中',
    taskRunning: '{count} 个后台任务运行中',
    tasksRunning: '{count} 个后台任务运行中',
    agentRunning: '{count} 个后台子代理运行中',
    agentsRunning: '{count} 个后台子代理运行中',
  },
  usage: {
    panelTitle: ' 用量 ',
    sessionUsage: '会话用量',
    noTokenUsage: '尚未记录令牌用量。',
    input: '输入',
    output: '输出',
    total: '合计',
    contextWindow: '上下文窗口',
    planUsage: '套餐用量',
    noUsageData: '暂无用量数据。',
    percentUsed: '已用 {pct}%',
  },
  status: {
    panelTitle: ' 状态 ',
    noContextData: '暂无上下文窗口数据。',
    fields: {
      model: '模型',
      directory: '目录',
      permissions: '权限',
      planMode: '计划模式',
      session: '会话',
      title: '标题',
      warning: '警告',
    },
    values: {
      notSet: '未设置',
      none: '无',
      on: '开',
      off: '关',
      thinking: '思考',
    },
  },
};
