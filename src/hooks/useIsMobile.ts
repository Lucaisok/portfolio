"use client";

import { useEffect, useState } from 'react';

const MOBILE_MAX_WIDTH = 767;

export const useIsMobile = (maxWidth: number = MOBILE_MAX_WIDTH) => {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') {
            // SSR should render in mobile-safe mode so content is never hidden pre-hydration.
            return true;
        }

        return window.matchMedia(`(max-width: ${maxWidth}px)`).matches;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
        const update = () => setIsMobile(mediaQuery.matches);

        update();

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', update);
            return () => mediaQuery.removeEventListener('change', update);
        }

        mediaQuery.addListener(update);
        return () => mediaQuery.removeListener(update);
    }, [maxWidth]);

    return isMobile;
};
