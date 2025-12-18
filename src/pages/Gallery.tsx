import Icon from '@/components/ui/icon';

const Gallery = () => {
  const images = [
    { id: 1, title: 'Аметистовая друза', category: 'Кварцы' },
    { id: 2, title: 'Розовый кварц', category: 'Кварцы' },
    { id: 3, title: 'Тигровый глаз', category: 'Кварцы' },
    { id: 4, title: 'Лунный камень', category: 'Полевые шпаты' },
    { id: 5, title: 'Малахит', category: 'Карбонаты' },
    { id: 6, title: 'Лазурит', category: 'Силикаты' },
    { id: 7, title: 'Аквамарин', category: 'Бериллы' },
    { id: 8, title: 'Цитрин', category: 'Кварцы' },
    { id: 9, title: 'Турмалин', category: 'Силикаты' }
  ];

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Галерея самоцветов
        </h1>
        <p className="text-center text-slate-400 text-lg mb-12">
          Коллекция удивительных минералов и драгоценных камней
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-500/60 transition-all hover:scale-105"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-900/50 via-slate-900/50 to-pink-900/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Icon name="Gem" size={80} className="text-purple-400/40 group-hover:text-purple-400/60 transition-all group-hover:scale-110" />
                
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs text-purple-300">{image.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon name="Image" size={16} />
                  <span>Фотография минерала</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
          <Icon name="Camera" size={48} className="text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Загрузите свои фотографии</h2>
          <p className="text-slate-400">
            Поделитесь фотографиями своей коллекции минералов с сообществом любителей самоцветов
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
