import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-slate-950/50 border-t border-purple-500/30 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-purple-400">
            <Icon name="Sparkles" size={24} />
            <span className="text-xl font-bold">Самоцветы</span>
          </div>
          
          <p className="text-slate-400 text-sm">
            © 2024 Мир драгоценных камней и минералов
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
              <Icon name="Mail" size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
              <Icon name="Phone" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
