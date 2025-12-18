import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/608fcfec-5e79-4567-84d1-795c76aabd95/files/d65de761-c4c4-49a0-b363-becb62929095.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background z-10" />

        <div className="container mx-auto px-4 relative z-20 text-center pt-20">
          <div className="animate-float mb-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
              <Icon name="Gem" size={40} className="text-primary-foreground" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Кристаллиум</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Откройте для себя волшебный мир самоцветов, их энергетику и целебные свойства
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/catalog">
              <Button size="lg" className="gap-2 group">
                <Icon name="Search" size={20} />
                Исследовать каталог
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="gap-2 glass">
                <Icon name="BookOpen" size={20} />
                Узнать о камнях
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-lg text-center hover:bg-primary/5 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:animate-pulse-glow">
              <Icon name="Search" size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3 gradient-text">Умный поиск</h3>
            <p className="text-muted-foreground">
              Найдите камень по свойствам, цвету, чакрам и энергетике
            </p>
          </div>

          <div className="glass p-8 rounded-lg text-center hover:bg-primary/5 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:animate-pulse-glow">
              <Icon name="Sparkles" size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3 gradient-text">Энергетика</h3>
            <p className="text-muted-foreground">
              Узнайте о целебных и энергетических свойствах минералов
            </p>
          </div>

          <div className="glass p-8 rounded-lg text-center hover:bg-primary/5 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:animate-pulse-glow">
              <Icon name="BookOpen" size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3 gradient-text">База знаний</h3>
            <p className="text-muted-foreground">
              Подробная информация о каждом камне и его характеристиках
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
