import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(!pathname.includes('/projects/')) {
      const element = document.documentElement;
    const timeout = setTimeout(() => {
      element.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timeout);
    }

  }, [pathname, navigate]);

  return null;
}

export default ScrollToTop;
