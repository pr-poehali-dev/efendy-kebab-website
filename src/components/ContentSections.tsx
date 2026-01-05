import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface ContentSectionsProps {
  menuItems: any[];
  news: any[];
  reviews: any[];
  gallery: string[];
  handleOrder: (item: any) => void;
  contactForm: { name: string; phone: string; message: string };
  setContactForm: (form: any) => void;
  submitContactForm: (e: React.FormEvent) => void;
  onMapClick: () => void;
}

const ContentSections = ({ 
  menuItems, 
  news, 
  reviews, 
  gallery, 
  handleOrder, 
  contactForm, 
  setContactForm, 
  submitContactForm,
  onMapClick 
}: ContentSectionsProps) => {
  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">О нас</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-fade-in">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span className="font-bold text-primary">Efendy Kebab</span> — это семейная пекарня восточной кухни, где каждое блюдо готовится с душой и любовью.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Мы используем только <span className="font-semibold text-foreground">натуральные ингредиенты</span> и традиционные рецепты, передаваемые из поколения в поколение.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-accent rounded-lg">
                    <Icon name="Snowflake" size={32} className="mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Глубокая заморозка</p>
                  </div>
                  <div className="text-center p-4 bg-accent rounded-lg">
                    <Icon name="Heart" size={32} className="mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Домашний вкус</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/769ed051-6286-4001-a910-3115b83a088c/files/7ff8f82a-ab17-4cf7-aa7f-cac67d4a1c51.jpg" 
                  alt="Efendy Kebab" 
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover animate-scale-in"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наше меню</h2>
            <p className="text-lg text-muted-foreground">Продукты глубокой заморозки — готовы к приготовлению</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {menuItems.map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {item.badge && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-white">
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">{item.price} ₽</p>
                    <p className="text-sm text-muted-foreground">{item.weight}</p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90" onClick={() => handleOrder(item)}>
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Новости и акции</h2>
            <p className="text-lg text-muted-foreground">Специальные предложения и новинки</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl flex-1">{item.title}</CardTitle>
                    <Badge className="bg-primary text-white">{item.badge}</Badge>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">{item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Icon name="Sparkles" size={16} className="mr-2" />
                    Узнать подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-2xl shadow-lg group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-muted-foreground">11 фотографий в полной версии</p>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.slice(0, 6).map((review, index) => (
              <Card key={review.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-muted-foreground">15 отзывов в полной версии</p>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Ульяновск, Промышленная ул., 76А</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <a href="tel:+79603701062" className="text-primary hover:underline text-lg">+7 (960) 370-10-62</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Время работы</h3>
                  <p className="text-muted-foreground">Пн–Пт, Вс: 08:00–18:00</p>
                  <p className="text-muted-foreground">Сб — выходной</p>
                </div>
              </div>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90" onClick={onMapClick}>
                <Icon name="Navigation" size={20} className="mr-2" />
                Как добраться
              </Button>
            </div>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Напишите нам, и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={submitContactForm} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input 
                      id="contact-name" 
                      placeholder="Ваше имя" 
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input 
                      id="contact-phone" 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__" 
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea 
                      id="contact-message" 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=48.389765%2C54.324511&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzEyMDczNxJI0KDQvtGB0YHQuNGPLCDQo9C70YzRj9C90L7QstGB0LosINCf0YDQvtC80YvRiNC70LXQvdC90LDRjyDRg9C70LjRhtCwLCA3NtCQIgoNLFLBQRXhZldC&z=16" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;