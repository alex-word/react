import { useState } from 'react';
import { useMemoizedFn } from '..';

/**
 * 使用 Map 的自定义 Hook
 * 
 * @returns 返回一个对象，包含 map、set、get、remove、setAll 和 clear 方法
 */
function useMap<T, U>(initialData?: Iterable<readonly [T, U]>) {
    const [map, setMap] = useState(new Map<T, U>(initialData));

    const set = (key: T, value: U) => {
        map.set(key, value);
        setMap(new Map(map)); // 更新状态以触发重新渲染
    };

    const get = (key: T): U | undefined => {
        return map.get(key);
    };

    const remove = (key: T) => {
        map.delete(key);
        setMap(new Map(map)); // 更新状态以触发重新渲染
    };

    const clear = () => {
        map.clear();
        setMap(new Map()); // 清空状态
    };
    const setAll = (newMap: Iterable<readonly [T, U]>) => {
        setMap(new Map(newMap));
    };
    return [
        map,
        {
            set: useMemoizedFn(set),
            get: useMemoizedFn(get),
            remove: useMemoizedFn(remove), // 使用 delete 关键字作为方法名会导致语法问题，因此使用 deleteItem
            clear: useMemoizedFn(clear),
            setAll: useMemoizedFn(setAll)
        }
    ] as const
}

export default useMap;