import { useEffect, useState } from 'react';

const useMediaQuery = (query, defaultMatches = window.matchMedia(query)) => {
    const [matches, setMatches] = useState(defaultMatches);

    useEffect(() => {
        const media = window.matchMedia(query);

        if(media.matches !== matches) setMatches(media.matches);

        const listener = (e) => setMatches(media.matches);

        media.addEventListener('change', listener);

        return () => media.removeEventListener('change', listener);
    }, []);

    return matches;
}

export default useMediaQuery;