import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-muted opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
            <span className="text-4xl">⭐</span>
            <span className="font-semibold text-lg">4.5</span>
            <span className="text-muted-foreground text-sm">(23 оценки)</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Вкус <span className="text-primary">востока</span><br />в каждом кусочке
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Пекарня восточной кухни с домашними рецептами и натуральными ингредиентами
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={() => scrollToSection('menu')}>
              <Icon name="ChefHat" size={20} className="mr-2" />
              Посмотреть меню
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (960) 370-10-62
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
