const parseQueryString = <T extends object>(queryString: string): T => {
    const params: Record<string, string | boolean> = {};
    const queryPairs = queryString.substring(1).split('&');

    for (const pair of queryPairs) {
        const [key, value] = pair.split('=').map(decodeURIComponent);
        params[key] = value === '' ? true : value;
    }

    return params as T;
};


type IGetParams<T = Record<string, string>> = T & {
    params: T
    search: string
}

const getParamsHook = <T extends object>(): IGetParams<T> => {
    const parseQuery = window.location.search.length ? parseQueryString<T>(window.location.search) : {} as T

    const params = Object.fromEntries(Object.entries(parseQuery).map(([key, value]) => [key, value?.split('%20').join(' ')])) as T
    return {
        params,
        search: window.location.search,
        ...params
    }
}

export default getParamsHook
