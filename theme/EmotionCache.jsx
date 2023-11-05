import { createEmotionCache } from '@emotion/cache';

const createEmotionServerCache = () => {
    const cache = createEmotionCache();
    cache.compatConfig.disableAfterHydration = true;
    return cache;
};

export default createEmotionServerCache;
