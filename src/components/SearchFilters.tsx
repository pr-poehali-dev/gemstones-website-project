import { SearchFilters as Filters } from '@/types/gemstone';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface SearchFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const categories = [
  { value: 'precious', label: 'Драгоценные' },
  { value: 'semiprecious', label: 'Полудрагоценные' },
  { value: 'mineral', label: 'Минералы' },
  { value: 'organic', label: 'Органические' }
];

const energyTypes = [
  'любовь', 'защита', 'успокоение', 'изобилие', 'мудрость',
  'интуиция', 'исцеление', 'гармония', 'уверенность', 'очищение'
];

const chakras = [
  'корневая', 'сакральная', 'солнечное сплетение',
  'сердечная', 'горловая', 'третий глаз', 'коронная'
];

export default function SearchFilters({ filters, onFiltersChange }: SearchFiltersProps) {
  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = (key: 'energy' | 'chakra', value: string) => {
    const current = filters[key] || [];
    const updated = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value];
    updateFilter(key, updated);
  };

  return (
    <div className="space-y-6 glass p-6 rounded-lg">
      <div>
        <Label className="flex items-center gap-2 mb-3">
          <Icon name="Search" size={18} />
          Поиск по названию
        </Label>
        <Input
          placeholder="Введите название камня..."
          value={filters.searchQuery || ''}
          onChange={(e) => updateFilter('searchQuery', e.target.value)}
          className="glass"
        />
      </div>

      <div>
        <Label className="mb-3 block">Категория</Label>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.value} className="flex items-center space-x-2">
              <Checkbox
                id={cat.value}
                checked={filters.category === cat.value}
                onCheckedChange={(checked) =>
                  updateFilter('category', checked ? cat.value : undefined)
                }
              />
              <label
                htmlFor={cat.value}
                className="text-sm cursor-pointer hover:text-primary transition-colors"
              >
                {cat.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-3 flex items-center gap-2">
          <Icon name="Sparkles" size={18} />
          Энергетика
        </Label>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
          {energyTypes.map((energy) => (
            <div key={energy} className="flex items-center space-x-2">
              <Checkbox
                id={energy}
                checked={filters.energy?.includes(energy)}
                onCheckedChange={() => toggleArrayFilter('energy', energy)}
              />
              <label
                htmlFor={energy}
                className="text-sm cursor-pointer hover:text-primary transition-colors"
              >
                {energy}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-3 flex items-center gap-2">
          <Icon name="Circle" size={18} />
          Чакры
        </Label>
        <div className="space-y-2">
          {chakras.map((chakra) => (
            <div key={chakra} className="flex items-center space-x-2">
              <Checkbox
                id={chakra}
                checked={filters.chakra?.includes(chakra)}
                onCheckedChange={() => toggleArrayFilter('chakra', chakra)}
              />
              <label
                htmlFor={chakra}
                className="text-sm cursor-pointer hover:text-primary transition-colors"
              >
                {chakra}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-3 block">
          Твердость по шкале Мооса: {filters.hardness?.[0] || 1} - {filters.hardness?.[1] || 10}
        </Label>
        <Slider
          min={1}
          max={10}
          step={0.5}
          value={filters.hardness || [1, 10]}
          onValueChange={(value) => updateFilter('hardness', value as [number, number])}
          className="mt-2"
        />
      </div>
    </div>
  );
}
