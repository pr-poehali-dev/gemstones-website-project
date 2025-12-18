import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          О камнях и минералах
        </h1>

        <div className="space-y-12">
          <section className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Sparkles" size={32} className="text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Что такое самоцветы?</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              Самоцветы — это драгоценные и полудрагоценные камни, которые веками восхищали человечество своей красотой и мистическими свойствами. Каждый камень уникален и обладает особой энергетикой, которая может влиять на физическое и эмоциональное состояние человека.
            </p>
          </section>

          <section className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Heart" size={32} className="text-pink-400" />
              <h2 className="text-3xl font-bold text-white">Целебные свойства</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              С древних времен камни использовались в литотерапии — методе лечения с помощью минералов. Считается, что они могут:
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <span>Гармонизировать энергетические центры (чакры)</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <span>Улучшать эмоциональное состояние и снимать стресс</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <span>Защищать от негативной энергии</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <span>Усиливать интуицию и духовное развитие</span>
              </li>
            </ul>
          </section>

          <section className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Zap" size={32} className="text-blue-400" />
              <h2 className="text-3xl font-bold text-white">Энергетика камней</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              Каждый минерал имеет свою уникальную вибрацию и энергетический спектр:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Высокая энергия</h3>
                <p className="text-slate-400">Кварцы, агаты — активизируют, заряжают силой</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-pink-400 mb-3">Мягкая энергия</h3>
                <p className="text-slate-400">Розовый кварц, лунный камень — успокаивают, гармонизируют</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Защитная энергия</h3>
                <p className="text-slate-400">Черный турмалин, обсидиан — оберегают от негатива</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">Целебная энергия</h3>
                <p className="text-slate-400">Малахит, нефрит — восстанавливают, исцеляют</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="BookOpen" size={32} className="text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Как выбрать свой камень?</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              Выбор камня — это интуитивный процесс. Обратите внимание на то, к какому минералу вас тянет, какой цвет резонирует с вашим настроением. Используйте наш каталог для поиска камня по нужным свойствам: защита, любовь, уверенность, исцеление. Позвольте энергии камня войти в вашу жизнь!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
