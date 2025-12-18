import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { gemstones } from '@/data/gemstones';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Gemstone } from '@/types/gemstone';

export default function Gallery() {
  const [selectedGem, setSelectedGem] = useState<Gemstone | null>(null);

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">
            Галерея самоцветов
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Насладитесь красотой минералов и кристаллов
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gemstones.map((gem) => (
              <div
                key={gem.id}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg glass hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedGem(gem)}
              >
                <img
                  src={gem.image}
                  alt={gem.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold gradient-text">
                      {gem.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {gem.color[0]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedGem} onOpenChange={() => setSelectedGem(null)}>
        <DialogContent className="max-w-4xl glass">
          {selectedGem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl gradient-text">
                  {selectedGem.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedGem.image}
                  alt={selectedGem.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <p className="text-muted-foreground">
                  {selectedGem.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
