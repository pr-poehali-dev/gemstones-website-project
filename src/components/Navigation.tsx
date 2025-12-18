import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/catalog', label: 'Каталог', icon: 'Gem' },
    { path: '/about', label: 'О камнях', icon: 'BookOpen' },
    { path: '/gallery', label: 'Галерея', icon: 'Image' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            <Icon name="Sparkles" size={32} className="text-purple-400" />
            <span>Самоцветы</span>
          </Link>
          
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 transition-all ${
                  location.pathname === link.path
                    ? 'text-purple-400 scale-110'
                    : 'text-slate-300 hover:text-purple-300'
                }`}
              >
                <Icon name={link.icon} size={20} />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
