import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="pt-24 pb-12">
      <section className="container mx-auto px-4">
        <div className="relative min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative text-center space-y-8 max-w-4xl">
            <div className="flex justify-center gap-4 mb-8">
              <Icon name="Gem" size={48} className="text-purple-400 animate-bounce" style={{ animationDelay: '0s' }} />
              <Icon name="Diamond" size={48} className="text-pink-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Icon name="Sparkles" size={48} className="text-blue-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Мир Самоцветов
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
              Откройте для себя магию драгоценных камней, их энергетику и уникальные свойства
            </p>

            <div className="flex gap-4 justify-center pt-8">
              <Link to="/catalog">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <Icon name="Gem" size={20} />
                  Каталог камней
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
                  <Icon name="BookOpen" size={20} />
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: 'Search', title: 'Умный поиск', desc: 'Найдите камень по свойствам и энергетике' },
            { icon: 'Heart', title: 'Целебные свойства', desc: 'Изучите влияние минералов на здоровье' },
            { icon: 'Sparkles', title: 'Энергетика', desc: 'Подберите камень по вашей ауре' }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all hover:scale-105">
              <Icon name={item.icon} size={40} className="text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
