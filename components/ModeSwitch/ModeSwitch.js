import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const ModeSwitch = ({ className }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, []);
    
    if (!mounted) return null;

    return (
        <a
            aria-label="Light and Dark Mode Toggle Button"
            className={`${className ? className : ''} transition-all select-none items-center cursor-pointer w-12 h-12 rounded-full mx-2 my-5 bg-neutral-200 dark:bg-neutral-800 flex justify-center`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </a>
    );
}

export default ModeSwitch