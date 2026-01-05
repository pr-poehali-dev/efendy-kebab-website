import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [orderForm, setOrderForm] = useState({ name: '', phone: '', address: '', comment: '' });
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });

  const menuItems = [
    {
      id: 1,
      name: 'Манты «Аппетитные»',
      price: 541,
      weight: '1 кг',
      image: 'https://cdn.poehali.dev/projects/769ed051-6286-4001-a910-3115b83a088c/files/c9af7446-91cd-4f5f-968d-065a9c92c2ae.jpg',
      description: 'Сочные манты с натуральной начинкой по традиционному восточному рецепту'
    },
    {
      id: 2,
      name: 'Манты «По-домашнему»',
      price: 577,
      weight: '1 кг',
      image: 'https://cdn.poehali.dev/projects/769ed051-6286-4001-a910-3115b83a088c/files/c9af7446-91cd-4f5f-968d-065a9c92c2ae.jpg',
      description: 'Домашние манты как у бабушки — проверенный рецепт поколений'
    },
    {
      id: 3,
      name: 'Сырники из рикотты',
      price: 445,
      weight: '1 кг',
      image: 'https://cdn.poehali.dev/projects/769ed051-6286-4001-a910-3115b83a088c/files/38b4f408-b8dc-4244-8b89-402e4d43905b.jpg',
      description: 'Нежнейшие сырники из итальянского сыра рикотта',
      badge: 'Меню давно не обновлялось'
    }
  ];

  const news = [
    { id: 1, title: 'Скидка 15% на первый заказ', description: 'Новым клиентам — специальное предложение!', date: '10 января 2024', badge: 'Акция' },
    { id: 2, title: 'Новинка: Хинкали с бараниной', description: 'Попробуйте традиционные грузинские хинкали', date: '5 января 2024', badge: 'Новинка' },
    { id: 3, title: 'Бесплатная доставка от 2000₽', description: 'При заказе от 2000 рублей доставка бесплатно', date: '1 января 2024', badge: 'Акция' }
  ];

  const reviews = [
    { id: 1, name: 'Анна К.', rating: 5, text: 'Манты просто восхитительные! Как в детстве у бабушки. Заказываю постоянно!' },
    { id: 2, name: 'Дмитрий П.', rating: 5, text: 'Отличное качество продуктов глубокой заморозки. Всё свежее и вкусное.' },
    { id: 3, name: 'Елена М.', rating: 4, text: 'Сырники понравились всей семье. Будем брать ещё!' },
    { id: 4, name: 'Игорь С.', rating: 5, text: 'Натуральные ингредиенты, домашний вкус. Рекомендую!' },
    { id: 5, name: 'Марина В.', rating: 5, text: 'Заказала манты на праздник — все гости остались довольны!' }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/769ed051-6286-4001-a910-3115b83a088c/files/c9af7446-91cd-4f5f-968d-065a9c92c2ae.jpg',
    'https://cdn.poehali.dev/projects/769ed051-6286-4001-a910-3115b83a088c/files/38b4f408-b8dc-4244-8b89-402e4d43905b.jpg',
    'https://cdn.poehali.dev/projects/769ed051-6286-4001-a910-3115b83a088c/files/7ff8f82a-ab17-4cf7-aa7f-cac67d4a1c51.jpg',
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrder = (item: any) => {
    setSelectedItem(item);
    setOrderModalOpen(true);
  };

  const submitOrder = () => {
    if (!orderForm.name || !orderForm.phone) {
      toast({ title: 'Ошибка', description: 'Заполните имя и телефон', variant: 'destructive' });
      return;
    }
    toast({ title: 'Заказ принят!', description: 'Мы свяжемся с вами в ближайшее время' });
    setOrderModalOpen(false);
    setOrderForm({ name: '', phone: '', address: '', comment: '' });
  };

  const submitContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.message) {
      toast({ title: 'Ошибка', description: 'Заполните все поля', variant: 'destructive' });
      return;
    }
    toast({ title: 'Сообщение отправлено!', description: 'Спасибо за обращение, мы свяжемся с вами' });
    setContactForm({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-3xl">🥟</div>
              <h1 className="text-2xl font-bold text-primary">Efendy Kebab</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('menu')} className="text-sm font-medium hover:text-primary transition-colors">Меню</button>
              <button onClick={() => scrollToSection('news')} className="text-sm font-medium hover:text-primary transition-colors">Новости</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </nav>
        </div>
      </header>

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
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
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

      <Dialog open={orderModalOpen} onOpenChange={setOrderModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Оформление заказа</DialogTitle>
            <DialogDescription>
              {selectedItem && (
                <div className="flex items-center space-x-3 mt-4 p-3 bg-accent rounded-lg">
                  <img src={selectedItem.image} alt={selectedItem.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div>
                    <p className="font-semibold text-foreground">{selectedItem.name}</p>
                    <p className="text-primary font-bold">{selectedItem.price} ₽ / {selectedItem.weight}</p>
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="order-name">Имя *</Label>
              <Input 
                id="order-name" 
                placeholder="Ваше имя" 
                value={orderForm.name}
                onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="order-phone">Телефон *</Label>
              <Input 
                id="order-phone" 
                type="tel" 
                placeholder="+7 (___) ___-__-__" 
                value={orderForm.phone}
                onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="order-address">Адрес доставки</Label>
              <Input 
                id="order-address" 
                placeholder="Укажите адрес" 
                value={orderForm.address}
                onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="order-comment">Комментарий</Label>
              <Textarea 
                id="order-comment" 
                placeholder="Дополнительные пожелания" 
                rows={3}
                value={orderForm.comment}
                onChange={(e) => setOrderForm({...orderForm, comment: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOrderModalOpen(false)}>
              Отмена
            </Button>
            <Button className="bg-primary hover:bg-primary/90" onClick={submitOrder}>
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Оформить заказ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;