import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время для подтверждения записи на пробный урок.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/30 font-open-sans">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              {'</>'}
            </div>
            <span className="text-2xl font-montserrat font-bold text-foreground">Hello Code</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О школе</a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">Курсы</a>
            <a href="#teachers" className="text-foreground hover:text-primary transition-colors">Преподаватели</a>
            <a href="#success" className="text-foreground hover:text-primary transition-colors">Успехи</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="lg" className="hidden md:flex">
            <a href="#trial">Записаться на урок</a>
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 animate-fade-in lg:pt-8">
              <Badge className="text-base px-4 py-2 bg-secondary text-white">
                🎁 Первый урок БЕСПЛАТНО!
              </Badge>
              <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold text-foreground leading-tight">
                Программирование для детей
                <span className="text-primary"> онлайн</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Обучаем детей от 7 до 16 лет создавать игры, сайты и приложения. 
                Развиваем логику, креативность и навыки будущего!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <a href="#trial">Записаться на бесплатный урок</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <a href="#courses">Выбрать курс</a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={24} className="text-primary" />
                  <span className="text-lg font-semibold">2000+ учеников</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={24} className="text-secondary" />
                  <span className="text-lg font-semibold">5 лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={24} className="text-secondary" />
                  <span className="text-lg font-semibold">4.9/5 рейтинг</span>
                </div>
              </div>
            </div>
            <div className="relative lg:mt-16">
              <img 
                src="https://cdn.poehali.dev/projects/a5c90dd4-c760-4d2d-9991-4433d1bfb938/files/aa69f86a-4bb7-45f3-9b3b-0682b015f311.jpg" 
                alt="Дети учатся программированию" 
                className="rounded-3xl shadow-2xl animate-scale-in max-w-md mx-auto"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-4xl animate-float">
                🚀
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Почему выбирают Hello Code?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создали уникальную методику обучения, которая делает программирование понятным и увлекательным
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Gamepad2', title: 'Игровой формат', desc: 'Учимся через создание игр и интересных проектов', color: 'text-primary' },
              { icon: 'Users', title: 'Малые группы', desc: 'До 6 человек в группе — внимание каждому ученику', color: 'text-secondary' },
              { icon: 'Clock', title: 'Гибкое расписание', desc: 'Выбирайте удобное время для занятий', color: 'text-primary' },
              { icon: 'Trophy', title: 'Реальные проекты', desc: 'Портфолио из собственных игр и приложений', color: 'text-secondary' }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-4 ${item.color}`}>
                    <Icon name={item.icon} size={32} />
                  </div>
                  <CardTitle className="text-xl font-montserrat">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-gradient-to-b from-accent/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Наши курсы
            </h2>
            <p className="text-xl text-muted-foreground">
              Программы для всех возрастов и уровней подготовки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Scratch Junior', 
                age: '7-9 лет', 
                icon: '🎨',
                desc: 'Первые шаги в программировании через создание анимаций и простых игр',
                duration: '24 урока',
                level: 'Начинающие'
              },
              { 
                title: 'Scratch Pro', 
                age: '9-12 лет', 
                icon: '🎮',
                desc: 'Создание сложных игр, анимаций и интерактивных историй',
                duration: '32 урока',
                level: 'Начинающие'
              },
              { 
                title: 'Python Start', 
                age: '11-14 лет', 
                icon: '🐍',
                desc: 'Изучаем настоящий язык программирования и создаем первые приложения',
                duration: '36 уроков',
                level: 'Средний'
              },
              { 
                title: 'Веб-разработка', 
                age: '12-16 лет', 
                icon: '🌐',
                desc: 'HTML, CSS, JavaScript — создаем настоящие веб-сайты',
                duration: '40 уроков',
                level: 'Средний'
              },
              { 
                title: 'Python Advanced', 
                age: '13-16 лет', 
                icon: '⚡',
                desc: 'ООП, алгоритмы, работа с API и базами данных',
                duration: '48 уроков',
                level: 'Продвинутый'
              },
              { 
                title: 'Game Dev', 
                age: '14-16 лет', 
                icon: '🎯',
                desc: 'Создаем игры на Unity и изучаем C#',
                duration: '52 урока',
                level: 'Продвинутый'
              }
            ].map((course, i) => (
              <Card key={i} className="border-2 hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl">{course.icon}</span>
                    <Badge variant="secondary">{course.age}</Badge>
                  </div>
                  <CardTitle className="text-2xl font-montserrat">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="BarChart" size={16} />
                    <span>{course.level}</span>
                  </div>
                  <Button className="w-full mt-4">Узнать подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Наши преподаватели
            </h2>
            <p className="text-xl text-muted-foreground">
              Профессионалы с педагогическим и техническим образованием
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Анна Смирнова', role: 'Python & Web', exp: '6 лет опыта', spec: 'Ex-Yandex, преподаватель года 2023' },
              { name: 'Дмитрий Козлов', role: 'Scratch & GameDev', exp: '5 лет опыта', spec: 'Создатель обучающих игр' },
              { name: 'Мария Петрова', role: 'Младшие группы', exp: '7 лет опыта', spec: 'Педагог-психолог, магистр IT' }
            ].map((teacher, i) => (
              <Card key={i} className="border-2 hover:shadow-lg transition-all text-center">
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <img 
                      src="https://cdn.poehali.dev/projects/a5c90dd4-c760-4d2d-9991-4433d1bfb938/files/aba775de-0115-4cd1-ad55-080e685931c4.jpg" 
                      alt={teacher.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={20} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-montserrat">{teacher.name}</CardTitle>
                  <CardDescription className="text-base font-semibold text-primary">{teacher.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Icon name="Award" size={16} />
                    {teacher.exp}
                  </p>
                  <p className="text-sm">{teacher.spec}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="success" className="py-20 bg-gradient-to-b from-accent/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Успехи учеников
            </h2>
            <p className="text-xl text-muted-foreground">
              Гордимся достижениями наших студентов!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Максим, 12 лет', project: 'Создал игру "Космический бой"', result: '1000+ скачиваний в App Store', emoji: '🎮' },
              { name: 'София, 10 лет', project: 'Сайт для школьного проекта', result: 'Победа в школьной олимпиаде', emoji: '🏆' },
              { name: 'Артем, 14 лет', project: 'Telegram-бот помощник', result: '500+ активных пользователей', emoji: '🤖' },
              { name: 'Алиса, 11 лет', project: 'Анимационный мультфильм', result: 'Приз на фестивале детского творчества', emoji: '🎬' },
              { name: 'Даниил, 13 лет', project: 'Python-калькулятор', result: 'Поступил в IT-лицей', emoji: '📊' },
              { name: 'Кира, 9 лет', project: 'Интерактивная сказка', result: 'Опубликована на Scratch', emoji: '📚' }
            ].map((student, i) => (
              <Card key={i} className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl">
                      {student.emoji}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-montserrat">{student.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-semibold text-foreground">{student.project}</p>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <Icon name="Trophy" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>{student.result}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Отзывы родителей
            </h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Елена Иванова', 
                child: 'Мама Саши, 11 лет',
                text: 'Сын занимается уже полгода. Прогресс невероятный! Из ребенка, который только играл в игры, вырос начинающий разработчик. Преподаватели находят подход к каждому.',
                rating: 5
              },
              { 
                name: 'Сергей Петров', 
                child: 'Папа Кати, 9 лет',
                text: 'Дочка с нетерпением ждет каждого урока. Это лучший показатель качества! Уроки интересные, преподаватель объясняет доступно. Рекомендую всем!',
                rating: 5
              },
              { 
                name: 'Ольга Сидорова', 
                child: 'Мама Максима, 13 лет',
                text: 'Отличная школа! Сын научился не только программировать, но и логически мыслить. Проекты действительно интересные. Цена полностью оправдана.',
                rating: 5
              }
            ].map((review, i) => (
              <Card key={i} className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, j) => (
                      <Icon key={j} name="Star" size={20} className="text-secondary fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-montserrat">{review.name}</CardTitle>
                  <CardDescription>{review.child}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trial" className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
                Запишитесь на бесплатный пробный урок
              </h2>
              <p className="text-xl opacity-90">
                Познакомимся, определим уровень ребенка и покажем, как проходят занятия
              </p>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Ваше имя</Label>
                      <Input 
                        id="parentName" 
                        placeholder="Как к вам обращаться?"
                        value={formData.parentName}
                        onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childName">Имя ребенка</Label>
                      <Input 
                        id="childName" 
                        placeholder="Имя вашего ребенка"
                        value={formData.childName}
                        onChange={(e) => setFormData({...formData, childName: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="childAge">Возраст ребенка</Label>
                      <Input 
                        id="childAge" 
                        type="number"
                        placeholder="Сколько лет?"
                        min="7"
                        max="16"
                        value={formData.childAge}
                        onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comment">Комментарий (необязательно)</Label>
                    <Textarea 
                      id="comment" 
                      placeholder="Расскажите о интересах ребенка или задайте вопросы"
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 text-lg py-6"
                  >
                    Записаться на бесплатный урок
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-8">
              Остались вопросы?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Свяжитесь с нами удобным способом
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={28} className="text-primary" />
                  </div>
                  <CardTitle className="font-montserrat">Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">+7 (999) 123-45-67</p>
                  <p className="text-sm text-muted-foreground mt-2">Пн-Вс: 9:00 - 21:00</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={28} className="text-primary" />
                  </div>
                  <CardTitle className="font-montserrat">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">info@hellocode.ru</p>
                  <p className="text-sm text-muted-foreground mt-2">Ответим за 2 часа</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" size={28} className="text-primary" />
                  </div>
                  <CardTitle className="font-montserrat">Telegram</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">@hellocode_school</p>
                  <p className="text-sm text-muted-foreground mt-2">Быстрые ответы</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                  {'</>'}
                </div>
                <span className="text-xl font-montserrat font-bold">Hello Code</span>
              </div>
              <p className="text-sm text-gray-400">
                Онлайн школа программирования для детей 7-16 лет
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#courses" className="hover:text-white transition-colors">Scratch</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Python</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Веб-разработка</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Game Dev</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">О школе</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#teachers" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#trial" className="hover:text-white transition-colors">Записаться</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@hellocode.ru</li>
                <li>@hellocode_school</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2024 Hello Code. Все права защищены.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}