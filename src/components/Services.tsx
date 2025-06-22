import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Building2",
      title: "Городские поездки",
      description: "Быстрые поездки по городу с фиксированными тарифами",
      features: [
        "150₽ посадка + 30₽/км",
        "Время ожидания 3₽/мин",
        "Комфорт-класс",
      ],
      price: "от 150₽",
    },
    {
      icon: "MapPin",
      title: "Межгородние перевозки",
      description: "Комфортные поездки в другие города и области",
      features: [
        "200₽ посадка + 18₽/км",
        "Встреча с табличкой",
        "Багажное отделение",
      ],
      price: "от 200₽",
    },
    {
      icon: "Crown",
      title: "Бизнес-класс",
      description: "Премиум автомобили для деловых поездок",
      features: [
        "300₽ посадка + 45₽/км",
        "Mercedes, BMW, Audi",
        "Водитель в костюме",
      ],
      price: "от 300₽",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600">
            Выберите подходящий тип поездки
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <CardTitle className="text-2xl text-slate-900">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
