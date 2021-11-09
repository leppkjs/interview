const LOCAL_STORAGE: string = 'localStorage';
const SESSION_STORAGE: string = 'sessionStorage';

const storageAvailable = (type: any): boolean => {
    try {
        const storage = window[type] as any;
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        console.log(e.message);
        throw e;
    }
};

const getter = (function(store: string) {
    if (storageAvailable(store)) {
        return (key: string) => {
            return (window as any)[store].getItem(key)
        };
    }
});

const setter = (function(store: string) {
    if (storageAvailable(store)) {
        return (key: string, value: string) => {
            (window as any)[store].setItem(key, value);
        }
    }
});

const remove = (function(store: string) {
    if (storageAvailable(store)) {
        return (key: string) => {
            (window as any)[store].removeItem(key);
        }
    }
});

export const getLocalStorage = getter(LOCAL_STORAGE);

export const setLocalStorage = setter(LOCAL_STORAGE);

export const removeLocalStorage = remove(LOCAL_STORAGE);

export const getSessionStorage = getter(SESSION_STORAGE);

export const setSessionStorage = setter(SESSION_STORAGE);

export const removeSessionStorage = remove(SESSION_STORAGE);
