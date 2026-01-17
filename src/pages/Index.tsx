import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'FileText',
      title: 'Отчеты и налоги ИП/ООО',
      description: 'Своевременная подготовка и сдача всех необходимых отчетов'
    },
    {
      icon: 'BookOpen',
      title: 'Полное бухгалтерское сопровождение',
      description: 'Комплексное ведение бухучета от А до Я'
    },
    {
      icon: 'RefreshCw',
      title: 'Восстановление учета',
      description: 'Приведение документации в порядок за любой период'
    },
    {
      icon: 'ShieldCheck',
      title: 'Разблокировка счета по 115-ФЗ',
      description: 'Юридическая помощь в разблокировке банковских счетов'
    },
    {
      icon: 'Receipt',
      title: 'Декларация 3-НДФЛ, вычеты',
      description: 'Оформление налоговых вычетов для физических лиц'
    },
    {
      icon: 'Building2',
      title: 'Регистрация, ликвидация ИП/ООО',
      description: 'Полное сопровождение регистрационных процедур'
    }
  ];

  const portfolio = [
    {
      title: 'ООО "Техносервис"',
      description: 'Полное бухгалтерское сопровождение производственной компании',
      result: 'Оптимизация налогов на 23%'
    },
    {
      title: 'ИП Петрова А.С.',
      description: 'Восстановление учета за 3 года и налоговая оптимизация',
      result: 'Учет восстановлен за 2 недели'
    },
    {
      title: 'ООО "Стройком"',
      description: 'Разблокировка счета и консультации по 115-ФЗ',
      result: 'Счет разблокирован за 5 дней'
    }
  ];

  const advantages = [
    { number: '7+', text: 'лет опыта' },
    { number: '200+', text: 'довольных клиентов' },
    { number: '100%', text: 'гарантия качества' },
    { number: '24/7', text: 'онлайн поддержка' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">БухПро</div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection('contacts')} className="bg-gradient-to-r from-primary to-secondary">
            Консультация
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Бухгалтерские услуги <br />
            <span className="text-gradient">нового уровня</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Профессиональное бухгалтерское сопровождение для вашего бизнеса. Экономим ваше время и деньги.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('contacts')}
            className="bg-gradient-to-r from-primary via-secondary to-accent text-white hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 animate-scale-in"
          >
            Получить бесплатную консультацию
            <Icon name="ArrowRight" className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр бухгалтерских услуг для вашего бизнеса
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-scale cursor-pointer border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                БухПро — это команда профессиональных бухгалтеров с опытом работы более 7 лет. Мы помогаем бизнесу
                сосредоточиться на главном, беря на себя все вопросы бухгалтерии и налогообложения.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша миссия — сделать бухгалтерский учет простым, понятным и эффективным для каждого клиента.
              </p>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contacts')}
                className="border-2 border-primary hover:bg-primary hover:text-white"
              >
                Связаться с нами
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {advantages.map((adv, index) => (
                <Card key={index} className="text-center p-8 hover-scale bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="text-5xl font-bold text-gradient mb-2">{adv.number}</div>
                  <div className="text-muted-foreground">{adv.text}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Реальные кейсы наших клиентов
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="hover-scale overflow-hidden group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                    <Icon name="Trophy" className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Icon name="CheckCircle2" size={20} />
                    <span>{item.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Бесплатная консультация</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в течение 30 минут
            </p>
          </div>

          <Card className="p-8 border-2 shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="UserRound" className="text-white" size={36} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Анна Владимировна</h3>
                <p className="text-muted-foreground mb-3">Главный бухгалтер • 25 лет стажа в бухгалтерии</p>
                <a href="tel:+79143055501" className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-secondary transition-colors">
                  <Icon name="Phone" size={20} />
                  <span>+7 (914) 305-55-01</span>
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Ваше имя *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Петров"
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Телефон *</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (999) 123-45-67"
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="mail@example.com"
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Сообщение</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о вашей задаче..."
                  className="min-h-32"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white hover:shadow-xl transition-all"
              >
                Отправить заявку
                <Icon name="Send" className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 text-white">БухПро</div>
              <p className="text-muted opacity-80">
                Профессиональные бухгалтерские услуги для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Контакты</h4>
              <div className="space-y-2 text-muted opacity-80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@buhpro.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover-scale cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover-scale cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover-scale cursor-pointer">
                  <Icon name="MessageCircle" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-muted opacity-60">
            <p>© 2024 БухПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;