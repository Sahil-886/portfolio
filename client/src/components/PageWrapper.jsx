import { useEffect } from 'react';

const PageWrapper = ({ title, children }) => {
    useEffect(() => {
        document.title = `${title} | Portfolio`;
        window.scrollTo(0, 0); // Scroll to top on navigation
    }, [title]);

    return children;
};

export default PageWrapper;
