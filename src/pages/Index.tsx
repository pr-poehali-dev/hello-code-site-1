import { useState, useEffect } from 'react';
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
    email: ''
  });

  const [codeLines, setCodeLines] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [memoryCards, setMemoryCards] = useState<{id: number, emoji: string, flipped: boolean, matched: boolean}[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [memoryScore, setMemoryScore] = useState(0);
  
  const [snakeGame, setSnakeGame] = useState({
    snake: [{x: 10, y: 10}],
    food: {x: 15, y: 15},
    direction: {x: 0, y: 0},
    score: 0,
    gameOver: false,
    started: false
  });

  const codeExample = `function createGame() {
  const player = new Player();
  const world = new World();
  
  while (game.isRunning) {
    player.move();
    world.update();
    render();
  }
}`;

  useEffect(() => {
    if (codeLines < codeExample.length) {
      const timer = setTimeout(() => {
        setCodeLines(prev => prev + 1);
        setTypingText(codeExample.slice(0, codeLines + 1));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [codeLines]);

  useEffect(() => {
    const emojis = ['🎮', '🚀', '🎨', '💻', '🤖', '🌟', '🎯', '🏆'];
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, id) => ({id, emoji, flipped: false, matched: false}));
    setMemoryCards(shuffled);
  }, []);

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || memoryCards[index].flipped || memoryCards[index].matched) return;
    
    const newCards = [...memoryCards];
    newCards[index].flipped = true;
    setMemoryCards(newCards);
    
    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);
    
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (newCards[first].emoji === newCards[second].emoji) {
        newCards[first].matched = true;
        newCards[second].matched = true;
        setMemoryScore(prev => prev + 1);
        setFlippedIndices([]);
      } else {
        setTimeout(() => {
          newCards[first].flipped = false;
          newCards[second].flipped = false;
          setMemoryCards([...newCards]);
          setFlippedIndices([]);
        }, 600);
      }
    }
  };

  const handleSnakeKeyPress = (e: React.KeyboardEvent) => {
    const {direction} = snakeGame;
    if (e.key === 'ArrowUp' && direction.y === 0) {
      setSnakeGame(prev => ({...prev, direction: {x: 0, y: -1}, started: true}));
    } else if (e.key === 'ArrowDown' && direction.y === 0) {
      setSnakeGame(prev => ({...prev, direction: {x: 0, y: 1}, started: true}));
    } else if (e.key === 'ArrowLeft' && direction.x === 0) {
      setSnakeGame(prev => ({...prev, direction: {x: -1, y: 0}, started: true}));
    } else if (e.key === 'ArrowRight' && direction.x === 0) {
      setSnakeGame(prev => ({...prev, direction: {x: 1, y: 0}, started: true}));
    }
  };

  useEffect(() => {
    if (!snakeGame.started || snakeGame.gameOver) return;
    
    const gameLoop = setInterval(() => {
      setSnakeGame(prev => {
        const head = prev.snake[0];
        const newHead = {
          x: head.x + prev.direction.x,
          y: head.y + prev.direction.y
        };
        
        if (newHead.x < 0 || newHead.x >= 20 || newHead.y < 0 || newHead.y >= 20 ||
            prev.snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          return {...prev, gameOver: true};
        }
        
        const newSnake = [newHead, ...prev.snake];
        
        if (newHead.x === prev.food.x && newHead.y === prev.food.y) {
          return {
            ...prev,
            snake: newSnake,
            food: {
              x: Math.floor(Math.random() * 20),
              y: Math.floor(Math.random() * 20)
            },
            score: prev.score + 1
          };
        } else {
          newSnake.pop();
          return {...prev, snake: newSnake};
        }
      });
    }, 150);
    
    return () => clearInterval(gameLoop);
  }, [snakeGame.started, snakeGame.gameOver, snakeGame.direction]);

  const resetSnakeGame = () => {
    setSnakeGame({
      snake: [{x: 10, y: 10}],
      food: {x: 15, y: 15},
      direction: {x: 0, y: 0},
      score: 0,
      gameOver: false,
      started: false
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  const courses = [
    {
      title: 'Scratch Junior',
      age: '5-7 лет',
      icon: 'Palette',
      color: 'from-pink-500 to-rose-500',
      description: 'Создание первых анимаций и игр'
    },
    {
      title: 'Scratch',
      age: '8-10 лет',
      icon: 'Gamepad2',
      color: 'from-purple-500 to-indigo-500',
      description: 'Разработка игр и интерактивных историй'
    },
    {
      title: 'Python',
      age: '11-14 лет',
      icon: 'Code2',
      color: 'from-blue-500 to-cyan-500',
      description: 'Настоящее программирование на Python'
    },
    {
      title: 'Web-разработка',
      age: '13-17 лет',
      icon: 'Globe',
      color: 'from-green-500 to-emerald-500',
      description: 'Создание сайтов на HTML, CSS, JavaScript'
    }
  ];

  const features = [
    {
      icon: 'Users',
      title: 'Малые группы',
      description: 'До 6 человек для максимального внимания'
    },
    {
      icon: 'Trophy',
      title: 'Геймификация',
      description: 'Система достижений и наград'
    },
    {
      icon: 'Lightbulb',
      title: 'Свои проекты',
      description: 'Ребёнок создаёт игры по своим идеям'
    },
    {
      icon: 'Clock',
      title: 'Удобное время',
      description: 'Занятия в выходные и после школы'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhiNWNmNiIgb3BhY2l0eT0iLjIiLz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-lg px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600">
              🚀 Hello Code
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Программирование<br/>для детей
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Превратим увлечение играми в создание собственных проектов!<br/>
              Обучаем детей от 5 до 17 лет онлайн
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Записаться на пробный урок 🎁
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Посмотреть программы
              </Button>
            </div>
          </div>

          {/* Code Animation */}
          <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl p-6 shadow-2xl mb-8">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-green-400 font-mono text-sm overflow-hidden">
              {typingText}
              <span className="animate-pulse">|</span>
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-2">👨‍👩‍👧‍👦</div>
                <CardTitle>500+</CardTitle>
                <CardDescription>Довольных родителей</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-2">🎮</div>
                <CardTitle>1000+</CardTitle>
                <CardDescription>Созданных игр</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-2">⭐</div>
                <CardTitle>4.9/5</CardTitle>
                <CardDescription>Рейтинг школы</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Mini Games Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Попробуй игры прямо сейчас! 🎮
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Такие игры создают наши ученики на курсах
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Memory Game */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Brain" size={24} />
                  Найди пару
                </CardTitle>
                <CardDescription>Очки: {memoryScore} / 8</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-3">
                  {memoryCards.map((card, index) => (
                    <button
                      key={card.id}
                      onClick={() => handleCardClick(index)}
                      className={`aspect-square rounded-lg text-3xl flex items-center justify-center transition-all transform hover:scale-105 ${
                        card.flipped || card.matched
                          ? 'bg-gradient-to-br from-purple-400 to-pink-400 rotate-0'
                          : 'bg-gradient-to-br from-gray-300 to-gray-400 rotate-y-180'
                      } ${card.matched ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {(card.flipped || card.matched) && card.emoji}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Snake Game */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Gamepad2" size={24} />
                  Змейка
                </CardTitle>
                <CardDescription>
                  {snakeGame.gameOver ? 'Игра окончена!' : `Очки: ${snakeGame.score}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  tabIndex={0}
                  onKeyDown={handleSnakeKeyPress}
                >
                  <div className="grid grid-cols-20 gap-0">
                    {Array.from({length: 20}).map((_, y) => (
                      Array.from({length: 20}).map((_, x) => {
                        const isSnake = snakeGame.snake.some(s => s.x === x && s.y === y);
                        const isHead = snakeGame.snake[0]?.x === x && snakeGame.snake[0]?.y === y;
                        const isFood = snakeGame.food.x === x && snakeGame.food.y === y;
                        
                        return (
                          <div
                            key={`${x}-${y}`}
                            className={`aspect-square ${
                              isHead ? 'bg-purple-600 rounded-sm' :
                              isSnake ? 'bg-purple-400 rounded-sm' :
                              isFood ? 'bg-red-500 rounded-full' :
                              'bg-transparent'
                            }`}
                          />
                        );
                      })
                    ))}
                  </div>
                </div>
                {!snakeGame.started && (
                  <p className="text-center text-sm text-gray-500 mt-2">
                    Используй стрелки для управления
                  </p>
                )}
                {snakeGame.gameOver && (
                  <Button onClick={resetSnakeGame} className="w-full mt-2">
                    Играть снова
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Наши курсы 📚
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Подберём программу под возраст и интересы ребёнка
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                  <Icon name={course.icon as any} size={48} className="text-white" />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2">{course.age}</Badge>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подробнее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Почему Hello Code? 💡
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform">
                  <Icon name={feature.icon as any} size={36} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-4 border-purple-200">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Запишитесь на бесплатный пробный урок! 🎁
              </h2>
              <p className="text-lg opacity-90">
                Познакомимся с ребёнком, покажем платформу и создадим первый проект
              </p>
            </div>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentName">Имя родителя</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="childName">Имя ребёнка</Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) => setFormData({...formData, childName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="childAge">Возраст ребёнка</Label>
                    <Input
                      id="childAge"
                      type="number"
                      min="5"
                      max="17"
                      value={formData.childAge}
                      onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6">
                  Записаться на пробный урок 🚀
                </Button>

                <p className="text-sm text-center text-gray-500">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hello Code
            </h3>
            <p className="text-gray-400">
              Онлайн-школа программирования для детей от 5 до 17 лет
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 info@hellocode.ru</p>
              <p>📱 +7 (999) 123-45-67</p>
              <p>⏰ Пн-Вс: 10:00 - 20:00</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Send" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Hello Code. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
