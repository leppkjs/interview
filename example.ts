/**
 * Example Case 1
 *
 * 아래 코드는 로컬스토리지를 지원하는 브라우저를 확인하고
 * 데이터를 로컬스토리지에 저장하고 읽어오는 코드이다.
 *
 * CheckPoint
 * - 클린코드 관점에서 컨벤션 준수
 * - 반복적인 비용 제거
 * - 중복 로직 제거
 */

export const storageAvailable = (type: any): boolean => {
    var storage;
    try {
        storage = window[type] as any;
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
                // Firefox를 제외한 모든 브라우저
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // 코드가 존재하지 않을 수도 있기 떄문에 이름 필드도 확인합니다.
                // Firefox를 제외한 모든 브라우저
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // 이미 저장된 것이있는 경우에만 QuotaExceededError를 확인하십시오.
            (storage && storage.length !== 0);
    }
};

export const getLocalStorage = (key: string): string => {
    if (!key) return;

    if (storageAvailable('localStorage')) {
        return localStorage.getItem(key);
    } else {
        if (console && console.error) {
            console.error('LocalStorage is not supported.');
        }
    }
};

export const setLocalStorage = (key: string, value: string): void => {
    if (!key) return;

    if (storageAvailable('localStorage')) {
        localStorage.setItem(key, value);
    } else {
        if (console && console.error) {
            console.error('LocalStorage is not supported.');
        }
    }
};

