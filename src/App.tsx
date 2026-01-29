import { useState, useEffect } from 'react';
import { FileText, Moon, Sun } from 'lucide-react';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

type Page = 'home' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check URL parameters for page routing
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    if (pageParam === 'privacy' || pageParam === 'terms') {
      setCurrentPage(pageParam as Page);
    } else {
      setCurrentPage('home');
    }

    // Handle back/forward browser buttons
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam === 'privacy' || pageParam === 'terms') {
        setCurrentPage(pageParam as Page);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    scrollToTop();

    // Update URL without reloading
    const newUrl = page === 'home'
      ? window.location.pathname
      : `${window.location.pathname}?page=${page}`;
    window.history.pushState({ page }, '', newUrl);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="bg-blue-600 p-2.5 rounded-lg shadow-lg shadow-blue-600/20">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">File Extension Identifier</h1>
              <p className="text-sm text-gray-600 dark:text-slate-400">Instantly identify any file format</p>
            </div>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {currentPage === 'home' && <Home />}
      {currentPage === 'privacy' && <Privacy />}
      {currentPage === 'terms' && <Terms />}

      <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 mt-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600 dark:text-slate-400">
            <p className="mb-4">File Extension Identifier - Your complete file format resource</p>
            <div className="flex justify-center gap-6 mb-4">
              <button
                onClick={() => navigateTo('privacy')}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigateTo('terms')}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium"
              >
                Terms of Service
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-slate-500">
              Helping users identify and understand file extensions since 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
