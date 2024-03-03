import {Constants} from "@/constants/constants";
import {getLocalStorage, getSessionStorage, setLocalStorage, setSessionStorage} from "@/utils/storage";

const {TOOL_VISIT_COUNT_KEY_PREFIX, VISIT_COUNTER_KEY, SESSION_VISIT_MARK_KEY} = Constants;

export const increaseVisitCounterOncePerSession = (): void => {
  const sessionVisitMark = getSessionStorage(SESSION_VISIT_MARK_KEY);
  if (!sessionVisitMark) {
    let visitCount = parseInt(getLocalStorage(VISIT_COUNTER_KEY) || '0', 10);
    visitCount++;
    setLocalStorage(VISIT_COUNTER_KEY, visitCount.toString());
    setSessionStorage(SESSION_VISIT_MARK_KEY, 'visited');
  }
};

export const getVisitCount = (): number => {
  return parseInt(getLocalStorage(VISIT_COUNTER_KEY) || '0', 10);
};

export const increaseToolVisitCount = (toolName: string): void => {
  const toolVisitCountKey = TOOL_VISIT_COUNT_KEY_PREFIX + toolName;
  let toolVisitCount = parseInt(getLocalStorage(toolVisitCountKey) || '0', 10);
  toolVisitCount++;
  setLocalStorage(toolVisitCountKey, toolVisitCount.toString());
};

export const getToolVisitCount = (toolName: string): number => {
  const toolVisitCountKey = TOOL_VISIT_COUNT_KEY_PREFIX + toolName;
  return parseInt(getLocalStorage(toolVisitCountKey) || '0', 10);
};

export const getMostUsedTools = (limit: number = 4): string[] => {
  const toolVisitCounts = Object.entries(localStorage)
    .filter(([key, _]) => key.startsWith(TOOL_VISIT_COUNT_KEY_PREFIX))
    .map(([key, value]) => ({ toolName: key.replace(TOOL_VISIT_COUNT_KEY_PREFIX, ''), visitCount: parseInt(value) }))
    .sort((a, b) => b.visitCount - a.visitCount)
    .slice(0, limit)
    .map(({ toolName }) => toolName);

  return toolVisitCounts;
};
