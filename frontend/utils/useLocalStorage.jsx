export const useLocalStorage = () => {
    const isBrowser = typeof window !== "undefined";

    const setItem = (key, value) => {
        if (!isBrowser) return;

        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Ошибка записи в localStorage:", error);
        }
    };

    const getItem = (key) => {
        if (!isBrowser) return null;

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error("Ошибка чтения из localStorage:", error);
            return null;
        }
    };

    const removeItem = (key) => {
        if (!isBrowser) return;

        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            console.error("Ошибка удаления из localStorage:", error);
        }
    };

    const clearAll = () => {
        if (!isBrowser) return;

        try {
            window.localStorage.clear();
        } catch (error) {
            console.error("Ошибка очистки localStorage:", error);
        }
    };

    return { setItem, getItem, removeItem, clearAll };
};
