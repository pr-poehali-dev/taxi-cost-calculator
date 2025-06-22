import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      description: "Круглосуточно",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@taxiservice.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Офис",
      value: "ул. Центральная, 15",
      description: "Пн-Пт: 9:00-18:00",
    },
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "Работаем 24/7",
      description: "Круглосуточная диспетчерская служба",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Все автомобили застрахованы",
    },
    {
      icon: "Users",
      title: "Опыт 10+ лет",
      description: "Проверенные водители со стажем",
    },
    {
      icon: "CreditCard",
      title: "Любая оплата",
      description: "Наличные, карта, перевод",
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-gray-300">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Как с нами связаться
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Icon
                          name={contact.icon}
                          size={20}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {contact.title}
                        </div>
                        <div className="text-lg text-blue-400">
                          {contact.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {contact.description}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Почему выбирают нас</h3>
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon
                        name={advantage.icon}
                        size={20}
                        className="text-blue-400"
                      />
                    </div>
                    <div className="font-semibold text-white mb-1">
                      {advantage.title}
                    </div>
                    <div className="text-sm text-gray-400">
                      {advantage.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
