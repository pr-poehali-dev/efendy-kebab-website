import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentSections from '@/components/ContentSections';
import OrderModal from '@/components/OrderModal';
import MapModal from '@/components/MapModal';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [mapModalOpen, setMapModalOpen] = useState(false);
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
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ContentSections 
        menuItems={menuItems}
        news={news}
        reviews={reviews}
        gallery={gallery}
        handleOrder={handleOrder}
        contactForm={contactForm}
        setContactForm={setContactForm}
        submitContactForm={submitContactForm}
        onMapClick={() => setMapModalOpen(true)}
      />
      <Footer scrollToSection={scrollToSection} />
      <OrderModal 
        orderModalOpen={orderModalOpen}
        setOrderModalOpen={setOrderModalOpen}
        selectedItem={selectedItem}
        orderForm={orderForm}
        setOrderForm={setOrderForm}
        submitOrder={submitOrder}
      />
      <MapModal 
        open={mapModalOpen}
        onOpenChange={setMapModalOpen}
      />
    </div>
  );
};

export default Index;