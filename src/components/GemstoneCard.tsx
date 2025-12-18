import { Gemstone } from '@/types/gemstone';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface GemstoneCardProps {
  gemstone: Gemstone;
  onClick: () => void;
}

export default function GemstoneCard({ gemstone, onClick }: GemstoneCardProps) {
  return (
    <Card
      className="group cursor-pointer overflow-hidden glass hover:bg-primary/5 transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={gemstone.image}
          alt={gemstone.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="glass">
            {gemstone.hardness} ⚡
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2 gradient-text">{gemstone.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {gemstone.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {gemstone.color.slice(0, 3).map((color, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {color}
            </Badge>
          ))}
        </div>

        {gemstone.energy && gemstone.energy.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="Sparkles" size={14} className="text-primary" />
            <span className="line-clamp-1">{gemstone.energy.slice(0, 2).join(', ')}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
