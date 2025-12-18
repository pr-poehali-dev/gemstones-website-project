import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Stone {
  id: number;
  name: string;
  color: string;
  properties: string[];
  energy: string;
  chakra: string;
  hardness: string;
}

const stones: Stone[] = [
  {
    id: 1,
    name: 'Аметист',
    color: 'Фиолетовый',
    properties: ['Спокойствие', 'Интуиция', 'Защита'],
    energy: 'Высокая',
    chakra: 'Сахасрара',
    hardness: '7'
  },
  {
    id: 2,
    name: 'Розовый кварц',
    color: 'Розовый',
    properties: ['Любовь', 'Гармония', 'Исцеление'],
    energy: 'Мягкая',
    chakra: 'Анахата',
    hardness: '7'
  },
  {
    id: 3,
    name: 'Тигровый глаз',
    color: 'Золотисто-коричневый',
    properties: ['Уверенность', 'Сила', 'Защита'],
    energy: 'Сильная',
    chakra: 'Манипура',
    hardness: '7'
  },
  {
    id: 4,
    name: 'Лунный камень',
    color: 'Белый с переливом',
    properties: ['Женственность', 'Интуиция', 'Новые начинания'],
    energy: 'Лунная',
    chakra: 'Сахасрара',
    hardness: '6-6.5'
  },
  {
    id: 5,
    name: 'Малахит',
    color: 'Зеленый',
    properties: ['Трансформация', 'Защита', 'Исцеление'],
    energy: 'Преобразующая',
    chakra: 'Анахата',
    hardness: '3.5-4'
  },
  {
    id: 6,
    name: 'Лазурит',
    color: 'Синий',
    properties: ['Мудрость', 'Истина', 'Самовыражение'],
    energy: 'Духовная',
    chakra: 'Вишуддха',
    hardness: '5-6'
  }
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  const allProperties = Array.from(new Set(stones.flatMap(s => s.properties)));

  const filteredStones = stones.filter(stone => {
    const matchesSearch = stone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stone.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stone.energy.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProperty = !selectedProperty || stone.properties.includes(selectedProperty);
    
    return matchesSearch && matchesProperty;
  });

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Каталог самоцветов
        </h1>

        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input
              type="text"
              placeholder="Поиск по названию, цвету, энергетике..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-slate-800/50 border-purple-500/30 text-white placeholder:text-slate-500 h-14 text-lg"
            />
          </div>

          <div>
            <p className="text-slate-400 mb-3">Фильтр по свойствам:</p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedProperty === null ? "default" : "outline"}
                onClick={() => setSelectedProperty(null)}
                className={selectedProperty === null ? "bg-purple-600" : "border-purple-500/30"}
              >
                Все
              </Button>
              {allProperties.map(prop => (
                <Button
                  key={prop}
                  variant={selectedProperty === prop ? "default" : "outline"}
                  onClick={() => setSelectedProperty(prop)}
                  className={selectedProperty === prop ? "bg-purple-600" : "border-purple-500/30"}
                >
                  {prop}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStones.map(stone => (
            <div key={stone.id} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{stone.name}</h3>
                <Icon name="Gem" size={32} className="text-purple-400" />
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Palette" size={16} className="text-slate-400" />
                  <span className="text-slate-300">Цвет: {stone.color}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={16} className="text-slate-400" />
                  <span className="text-slate-300">Энергия: {stone.energy}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Icon name="Circle" size={16} className="text-slate-400" />
                  <span className="text-slate-300">Чакра: {stone.chakra}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-slate-400" />
                  <span className="text-slate-300">Твердость: {stone.hardness}</span>
                </div>
                
                <div className="pt-3 border-t border-purple-500/20">
                  <p className="text-slate-400 mb-2">Свойства:</p>
                  <div className="flex flex-wrap gap-2">
                    {stone.properties.map(prop => (
                      <span key={prop} className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs">
                        {prop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStones.length === 0 && (
          <div className="text-center py-20">
            <Icon name="Search" size={64} className="text-slate-600 mx-auto mb-4" />
            <p className="text-xl text-slate-400">Камни не найдены. Попробуйте изменить параметры поиска.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
