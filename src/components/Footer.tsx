import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <>
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-3xl">🥟</div>
                <h3 className="text-2xl font-bold">Efendy Kebab</h3>
              </div>
              <p className="text-white/70">Пекарня восточной кухни с домашним вкусом</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/70">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('menu')} className="hover:text-white transition-colors">Меню</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Галерея</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">Отзывы</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (960) 370-10-62</li>
                <li>г. Ульяновск</li>
                <li>Промышленная ул., 76А</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50">
            <p>© 2024 Efendy Kebab. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <a 
        href="tel:+79603701062"
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50"
      >
        <Icon name="Phone" size={24} />
      </a>
    </>
  );
};

export default Footer;
