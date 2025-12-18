import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GemstoneCard from '@/components/GemstoneCard';
import SearchFilters from '@/components/SearchFilters';
import { gemstones } from '@/data/gemstones';
import { SearchFilters as Filters, Gemstone } from '@/types/gemstone';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Catalog() {
  const [filters, setFilters] = useState<Filters>({});
  const [selectedGemstone, setSelectedGemstone] = useState<Gemstone | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredGemstones = gemstones.filter((gem) => {
    if (filters.searchQuery && !gem.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
      return false;
    }

    if (filters.category && gem.category !== filters.category) {
      return false;
    }

    if (filters.energy && filters.energy.length > 0) {
      if (!gem.energy || !filters.energy.some(e => gem.energy?.includes(e))) {
        return false;
      }
    }

    if (filters.chakra && filters.chakra.length > 0) {
      if (!gem.chakra || !filters.chakra.some(c => gem.chakra?.includes(c))) {
        return false;
      }
    }

    if (filters.hardness) {
      if (gem.hardness < filters.hardness[0] || gem.hardness > filters.hardness[1]) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-20">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Каталог самоцветов</h1>
          <p className="text-muted-foreground">
            Найдено камней: {filteredGemstones.length}
          </p>
        </div>

        <div className="lg:hidden mb-6">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="w-full gap-2"
          >
            <Icon name="Filter" size={20} />
            {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <SearchFilters filters={filters} onFiltersChange={setFilters} />
          </aside>

          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredGemstones.map((gem) => (
                <GemstoneCard
                  key={gem.id}
                  gemstone={gem}
                  onClick={() => setSelectedGemstone(gem)}
                />
              ))}
            </div>

            {filteredGemstones.length === 0 && (
              <div className="text-center py-20 glass rounded-lg">
                <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg text-muted-foreground">
                  Камни не найдены. Попробуйте изменить фильтры.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedGemstone} onOpenChange={() => setSelectedGemstone(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass">
          {selectedGemstone && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl gradient-text">
                  {selectedGemstone.name}
                </DialogTitle>
                {selectedGemstone.scientificName && (
                  <p className="text-sm text-muted-foreground italic">
                    {selectedGemstone.scientificName}
                  </p>
                )}
              </DialogHeader>

              <div className="space-y-6">
                <img
                  src={selectedGemstone.image}
                  alt={selectedGemstone.name}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Icon name="FileText" size={20} className="text-primary" />
                    Описание
                  </h3>
                  <p className="text-muted-foreground">{selectedGemstone.description}</p>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Palette" size={18} className="text-primary" />
                      Цвета
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGemstone.color.map((color, i) => (
                        <Badge key={i} variant="secondary">{color}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Zap" size={18} className="text-primary" />
                      Твердость
                    </h4>
                    <p className="text-muted-foreground">
                      {selectedGemstone.hardness} по шкале Мооса
                    </p>
                  </div>
                </div>

                {selectedGemstone.chakra && selectedGemstone.chakra.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Circle" size={18} className="text-primary" />
                      Чакры
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGemstone.chakra.map((chakra, i) => (
                        <Badge key={i} variant="outline">{chakra}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedGemstone.energy && selectedGemstone.energy.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Sparkles" size={18} className="text-primary" />
                      Энергетические свойства
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGemstone.energy.map((energy, i) => (
                        <Badge key={i} variant="secondary">{energy}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedGemstone.healing && selectedGemstone.healing.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Heart" size={18} className="text-primary" />
                      Целебные свойства
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGemstone.healing.map((healing, i) => (
                        <Badge key={i} variant="outline">{healing}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedGemstone.zodiac && selectedGemstone.zodiac.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Star" size={18} className="text-primary" />
                      Знаки зодиака
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGemstone.zodiac.map((sign, i) => (
                        <Badge key={i}>{sign}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedGemstone.origin && selectedGemstone.origin.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="MapPin" size={18} className="text-primary" />
                      Места добычи
                    </h4>
                    <p className="text-muted-foreground">
                      {selectedGemstone.origin.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
