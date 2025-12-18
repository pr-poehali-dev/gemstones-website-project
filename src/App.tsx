import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Gemstone {
  id: number;
  name: string;
  latinName: string;
  color: string;
  hardness: number;
  chakra: string;
  energy: string;
  properties: string[];
  image: string;
  description: string;
}

const gemstones: Gemstone[] = [
  {
    id: 1,
    name: 'Аметист',
    latinName: 'Amethyst',
    color: 'Фиолетовый',
    hardness: 7,
    chakra: 'Коронная',
    energy: 'Успокаивающая',
    properties: ['медитация', 'интуиция', 'защита', 'духовность'],
    image: 'https://cdn.poehali.dev/projects/608fcfec-5e79-4567-84d1-795c76aabd95/files/6b54aa0d-28dc-4b45-a3ee-c33c819a981a.jpg',
    description: 'Камень духовности и медитации. Помогает развить интуицию и обрести внутренний покой.'
  },
  {
    id: 2,
    name: 'Изумруд',
    latinName: 'Emerald',
    color: 'Зелёный',
    hardness: 7.5,
    chakra: 'Сердечная',
    energy: 'Гармонизирующая',
    properties: ['любовь', 'изобилие', 'рост', 'исцеление'],
    image: 'https://cdn.poehali.dev/projects/608fcfec-5e79-4567-84d1-795c76aabd95/files/09cbdda9-7a05-4c79-acc5-3356bafc1e91.jpg',
    description: 'Камень процветания и безусловной любви. Усиливает энергию сердечной чакры.'
  },
  {
    id: 3,
    name: 'Сапфир',
    latinName: 'Sapphire',
    color: 'Синий',
    hardness: 9,
    chakra: 'Горловая',
    energy: 'Очищающая',
    properties: ['мудрость', 'истина', 'коммуникация', 'ясность'],
    image: 'https://cdn.poehali.dev/projects/608fcfec-5e79-4567-84d1-795c76aabd95/files/4563100a-040a-4cc8-bc26-609c794fa51a.jpg',
    description: 'Камень мудрости и ясности ума. Способствует честному самовыражению.'
  },
  {
    id: 4,
    name: 'Розовый кварц',
    latinName: 'Rose Quartz',
    color: 'Розовый',
    hardness: 7,
    chakra: 'Сердечная',
    energy: 'Любовная',
    properties: ['любовь', 'прощение', 'доброта', 'самопринятие'],
    image: 'https://cdn.poehali.dev/projects/608fcfec-5e79-4567-84d1-795c76aabd95/files/09cbdda9-7a05-4c79-acc5-3356bafc1e91.jpg',
    description: 'Камень безусловной любви и нежности. Исцеляет эмоциональные раны.'
  },
  {
    id: 5,
    name: 'Цитрин',
    latinName: 'Citrine',
    color: 'Жёлтый',
    hardness: 7,
    chakra: 'Солнечное сплетение',
    energy: 'Активирующая',
    properties: ['радость', 'изобилие', 'уверенность', 'энергия'],
    image: 'https://cdn.poehali.dev/projects/608fcfec-5e79-4567-84d1-795c76aabd95/files/09cbdda9-7a05-4c79-acc5-3356bafc1e91.jpg',
    description: 'Солнечный камень радости и изобилия. Привлекает успех и процветание.'
  },
  {
    id: 6,
    name: 'Лунный камень',
    latinName: 'Moonstone',
    color: 'Перламутровый',
    hardness: 6,
    chakra: 'Крестцовая',
    energy: 'Женская',
    properties: ['интуиция', 'женственность', 'эмоции', 'новое начало'],
    image: 'https://cdn.poehali.dev/projects/608fcfec-5e79-4567-84d1-795c76aabd95/files/6b54aa0d-28dc-4b45-a3ee-c33c819a981a.jpg',
    description: 'Камень интуиции и женской энергии. Помогает в новых начинаниях.'
  }
];

const chakras = ['Коронная', 'Горловая', 'Сердечная', 'Солнечное сплетение', 'Крестцовая'];
const energies = ['Успокаивающая', 'Гармонизирующая', 'Очищающая', 'Любовная', 'Активирующая', 'Женская'];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChakra, setSelectedChakra] = useState<string | null>(null);
  const [selectedEnergy, setSelectedEnergy] = useState<string | null>(null);
  const [selectedGemstone, setSelectedGemstone] = useState<Gemstone | null>(null);

  const filteredGemstones = gemstones.filter(gem => {
    const matchesSearch = gem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gem.properties.some(prop => prop.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesChakra = !selectedChakra || gem.chakra === selectedChakra;
    const matchesEnergy = !selectedEnergy || gem.energy === selectedEnergy;
    return matchesSearch && matchesChakra && matchesEnergy;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <nav className="glass fixed top-0 left-0 right-0 z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <h1 className="text-2xl font-bold gradient-text">Мир Самоцветов</h1>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={activeTab === 'home' ? 'default' : 'ghost'} 
              onClick={() => setActiveTab('home')}
              className="gap-2"
            >
              <Icon name="Home" size={18} />
              Главная
            </Button>
            <Button 
              variant={activeTab === 'catalog' ? 'default' : 'ghost'} 
              onClick={() => setActiveTab('catalog')}
              className="gap-2"
            >
              <Icon name="Gem" size={18} />
              Каталог
            </Button>
            <Button 
              variant={activeTab === 'about' ? 'default' : 'ghost'} 
              onClick={() => setActiveTab('about')}
              className="gap-2"
            >
              <Icon name="BookOpen" size={18} />
              О камнях
            </Button>
            <Button 
              variant={activeTab === 'gallery' ? 'default' : 'ghost'} 
              onClick={() => setActiveTab('gallery')}
              className="gap-2"
            >
              <Icon name="Image" size={18} />
              Галерея
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-12">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="relative py-20 text-center">
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-20 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="relative z-10">
                <Icon name="Sparkles" className="mx-auto text-primary shimmer mb-6" size={64} />
                <h2 className="text-6xl font-bold mb-6 gradient-text">
                  Волшебный мир минералов
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Откройте для себя магические свойства драгоценных камней, их энергетику и влияние на чакры
                </p>
                <Button size="lg" onClick={() => setActiveTab('catalog')} className="gap-2 animate-pulse-glow">
                  <Icon name="Search" size={20} />
                  Исследовать каталог
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Sparkles', title: 'Энергетика камней', desc: 'Узнайте о целебных свойствах' },
                { icon: 'Compass', title: 'Работа с чакрами', desc: 'Гармонизация энергетических центров' },
                { icon: 'Star', title: 'Магические свойства', desc: 'Древние знания и практики' }
              ].map((item, idx) => (
                <Card key={idx} className="glass hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Icon name={item.icon as any} className="mx-auto text-primary mb-4 shimmer" size={48} />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold gradient-text">Каталог минералов</h2>
              
              <div className="glass p-6 space-y-4 rounded-xl">
                <div className="relative">
                  <Icon name="Search" className="absolute left-3 top-3 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Поиск по названию или свойствам..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Icon name="Orbit" size={16} />
                      Чакра:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant={selectedChakra === null ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => setSelectedChakra(null)}
                      >
                        Все
                      </Badge>
                      {chakras.map(chakra => (
                        <Badge
                          key={chakra}
                          variant={selectedChakra === chakra ? 'default' : 'outline'}
                          className="cursor-pointer"
                          onClick={() => setSelectedChakra(chakra)}
                        >
                          {chakra}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Icon name="Zap" size={16} />
                      Энергия:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant={selectedEnergy === null ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => setSelectedEnergy(null)}
                      >
                        Все
                      </Badge>
                      {energies.map(energy => (
                        <Badge
                          key={energy}
                          variant={selectedEnergy === energy ? 'default' : 'outline'}
                          className="cursor-pointer"
                          onClick={() => setSelectedEnergy(energy)}
                        >
                          {energy}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGemstones.map((gem) => (
                  <Card
                    key={gem.id}
                    className="glass overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedGemstone(gem)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={gem.image}
                        alt={gem.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div>
                        <h3 className="text-xl font-bold">{gem.name}</h3>
                        <p className="text-sm text-muted-foreground italic">{gem.latinName}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Icon name="Palette" size={14} />
                          {gem.color}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Shield" size={14} />
                          {gem.hardness}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {gem.properties.slice(0, 3).map(prop => (
                          <Badge key={prop} variant="secondary" className="text-xs">
                            {prop}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold gradient-text">О камнях и минералах</h2>
            
            <Card className="glass">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Sparkles" className="text-primary" size={24} />
                    Что такое энергия камней?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Драгоценные камни и минералы обладают уникальной кристаллической структурой, которая способна 
                    взаимодействовать с энергетическим полем человека. На протяжении тысячелетий различные культуры 
                    использовали камни для исцеления, медитации и духовных практик.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Orbit" className="text-accent" size={24} />
                    Чакры и камни
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Каждый камень резонирует с определённой чакрой - энергетическим центром в теле человека. 
                    Правильно подобранный минерал помогает гармонизировать и активировать соответствующую чакру, 
                    восстанавливая энергетический баланс организма.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Heart" className="text-primary" size={24} />
                    Как работать с камнями
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span>Носите камень с собой или в виде украшения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span>Медитируйте, держа камень в руке</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span>Размещайте камни в доме для гармонизации пространства</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span>Очищайте камни под проточной водой или лунным светом</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold gradient-text">Галерея самоцветов</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gemstones.map((gem, idx) => (
                <div
                  key={gem.id}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onClick={() => setSelectedGemstone(gem)}
                >
                  <img
                    src={gem.image}
                    alt={gem.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold mb-1">{gem.name}</h3>
                      <p className="text-sm text-muted-foreground">{gem.latinName}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {selectedGemstone && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedGemstone(null)}
        >
          <Card className="glass max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-0">
              <div className="aspect-video overflow-hidden">
                <img
                  src={selectedGemstone.image}
                  alt={selectedGemstone.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-3xl font-bold mb-1">{selectedGemstone.name}</h2>
                  <p className="text-muted-foreground italic">{selectedGemstone.latinName}</p>
                </div>

                <p className="text-lg">{selectedGemstone.description}</p>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Palette" size={16} />
                      Цвет
                    </p>
                    <p className="font-medium">{selectedGemstone.color}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Shield" size={16} />
                      Твёрдость
                    </p>
                    <p className="font-medium">{selectedGemstone.hardness} по шкале Мооса</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Orbit" size={16} />
                      Чакра
                    </p>
                    <p className="font-medium">{selectedGemstone.chakra}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Zap" size={16} />
                      Энергия
                    </p>
                    <p className="font-medium">{selectedGemstone.energy}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Свойства:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedGemstone.properties.map(prop => (
                      <Badge key={prop} variant="secondary">
                        {prop}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedGemstone(null)}
                >
                  Закрыть
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default App;
