import {Constants} from "@/constants/constants";
import {getLocalStorage, getSessionStorage, setLocalStorage, setSessionStorage} from "@/utils/storage";

export const increaseVisitCounterOncePerSession = (): void => {
  const sessionVisitMark = getSessionStorage(Constants.SESSION_VISIT_MARK_KEY);
  if (!sessionVisitMark) {
    let visitCount = parseInt(getLocalStorage(Constants.VISIT_COUNTER_KEY) || '0', 10);
    visitCount++;
    setLocalStorage(Constants.VISIT_COUNTER_KEY, visitCount.toString());
    setSessionStorage(Constants.SESSION_VISIT_MARK_KEY, 'visited');
  }
};

export const getVisitCount = (): number => {
  return parseInt(getLocalStorage(Constants.VISIT_COUNTER_KEY) || '0', 10);
};
