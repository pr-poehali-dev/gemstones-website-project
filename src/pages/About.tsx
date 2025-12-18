import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function About() {
  const sections = [
    {
      icon: 'Sparkles',
      title: 'Энергетика камней',
      content: 'Каждый камень обладает уникальной вибрацией и энергетическим полем. Они могут помогать в балансировке чакр, усилении интуиции и привлечении определенных качеств в вашу жизнь.'
    },
    {
      icon: 'Heart',
      title: 'Целебные свойства',
      content: 'Исторически камни использовались для лечения различных недугов. Литотерапия - древняя практика использования энергии камней для физического и эмоционального исцеления.'
    },
    {
      icon: 'Circle',
      title: 'Чакры и кристаллы',
      content: 'Разные камни резонируют с определенными энергетическими центрами тела. Правильно подобранный камень может помочь открыть и сбалансировать чакру.'
    },
    {
      icon: 'Gem',
      title: 'Классификация',
      content: 'Камни делятся на драгоценные, полудрагоценные, минералы и органические. Каждая категория имеет свои уникальные характеристики и применение.'
    },
    {
      icon: 'Zap',
      title: 'Шкала твердости Мооса',
      content: 'От 1 до 10 - показатель устойчивости минерала к царапинам. Алмаз имеет максимальную твердость 10, тальк - минимальную 1.'
    },
    {
      icon: 'Moon',
      title: 'Очищение и зарядка',
      content: 'Камни нуждаются в регулярном очищении от накопленной энергии. Методы включают: лунный свет, проточную воду, соль, благовония и звуковые вибрации.'
    }
  ];

  const chakraInfo = [
    { name: 'Корневая (Муладхара)', color: 'Красный', location: 'Основание позвоночника', stones: 'Красная яшма, гранат, черный турмалин' },
    { name: 'Сакральная (Свадхистхана)', color: 'Оранжевый', location: 'Нижняя часть живота', stones: 'Сердолик, оранжевый кальцит' },
    { name: 'Солнечное сплетение (Манипура)', color: 'Желтый', location: 'Верхняя часть живота', stones: 'Цитрин, янтарь, тигровый глаз' },
    { name: 'Сердечная (Анахата)', color: 'Зеленый/Розовый', location: 'Центр груди', stones: 'Розовый кварц, малахит, авантюрин' },
    { name: 'Горловая (Вишуддха)', color: 'Голубой', location: 'Горло', stones: 'Аквамарин, лазурит, бирюза' },
    { name: 'Третий глаз (Аджна)', color: 'Индиго', location: 'Между бровями', stones: 'Аметист, лабрадорит, флюорит' },
    { name: 'Коронная (Сахасрара)', color: 'Фиолетовый/Белый', location: 'Макушка головы', stones: 'Аметист, прозрачный кварц, селенит' }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">
            О камнях и минералах
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Погрузитесь в удивительный мир самоцветов и узнайте об их свойствах
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {sections.map((section, index) => (
              <Card key={index} className="glass hover:bg-primary/5 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon name={section.icon as any} size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 gradient-text">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="glass p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 gradient-text text-center">
              Система чакр
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              Семь основных энергетических центров и соответствующие им камни
            </p>

            <div className="space-y-4">
              {chakraInfo.map((chakra, index) => (
                <div
                  key={index}
                  className="glass p-4 rounded-lg hover:bg-primary/5 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                      <div>
                        <h4 className="font-bold text-foreground">{chakra.name}</h4>
                        <p className="text-sm text-muted-foreground">{chakra.location}</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground md:text-right">
                      <span className="font-semibold text-primary">{chakra.color}</span>
                      <p className="mt-1">{chakra.stones}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="glass">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text text-center">
                Как использовать камни
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Hand" size={20} className="text-primary" />
                    Ношение на теле
                  </h3>
                  <p className="text-muted-foreground">
                    Носите камни в виде украшений или держите в кармане для постоянного контакта с их энергией.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Home" size={20} className="text-primary" />
                    В интерьере
                  </h3>
                  <p className="text-muted-foreground">
                    Размещайте крупные кристаллы в доме для гармонизации пространства и создания позитивной атмосферы.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Brain" size={20} className="text-primary" />
                    Медитация
                  </h3>
                  <p className="text-muted-foreground">
                    Держите камень в руках или размещайте на теле во время медитации для усиления практики.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Droplet" size={20} className="text-primary" />
                    Кристальные эликсиры
                  </h3>
                  <p className="text-muted-foreground">
                    Заряжайте воду энергией кристаллов (используйте только безопасные камни!).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
