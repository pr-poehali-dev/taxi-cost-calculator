import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Calculator = () => {
  const [distance, setDistance] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [waitingTime, setWaitingTime] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [breakdown, setBreakdown] = useState<{
    base: number;
    distance: number;
    waiting: number;
    total: number;
  } | null>(null);

  const calculateCost = () => {
    if (!distance || !serviceType) return;

    const dist = parseFloat(distance);
    const waiting = parseFloat(waitingTime) || 0;
    let baseCost = 0;
    let distanceCost = 0;
    let waitingCost = 0;

    if (serviceType === "city") {
      baseCost = 150; // Посадка
      distanceCost = dist * 30; // 30₽/км для города
      waitingCost = waiting * 3; // 3₽/мин ожидания
    } else if (serviceType === "intercity") {
      baseCost = 200; // Межгород посадка
      distanceCost = dist * 18; // 18₽/км для межгорода
      waitingCost = waiting * 5; // 5₽/мин ожидания
    } else if (serviceType === "business") {
      baseCost = 300; // Бизнес-класс
      distanceCost = dist * 45; // 45₽/км
      waitingCost = waiting * 8; // 8₽/мин ожидания
    }

    const total = Math.round(baseCost + distanceCost + waitingCost);

    setEstimatedCost(total);
    setBreakdown({
      base: baseCost,
      distance: Math.round(distanceCost),
      waiting: Math.round(waitingCost),
      total,
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Калькулятор стоимости
          </h2>
          <p className="text-xl text-gray-600">
            Рассчитайте примерную стоимость поездки
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="bg-slate-50">
            <CardTitle className="text-center text-2xl">
              <Icon
                name="Calculator"
                size={24}
                className="inline mr-2 text-blue-600"
              />
              Расчет поездки
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">
                    Тип поездки
                  </label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип поездки" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="city">
                        Городская (150₽ + 30₽/км)
                      </SelectItem>
                      <SelectItem value="intercity">
                        Межгородняя (200₽ + 18₽/км)
                      </SelectItem>
                      <SelectItem value="business">
                        Бизнес-класс (300₽ + 45₽/км)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">
                    Расстояние (км)
                  </label>
                  <Input
                    type="number"
                    placeholder="Введите расстояние"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">
                    Время ожидания (мин)
                  </label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={waitingTime}
                    onChange={(e) => setWaitingTime(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <Button
                  onClick={calculateCost}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                  disabled={!distance || !serviceType}
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-center p-6 bg-blue-50 rounded-lg w-full">
                  <Icon
                    name="Banknote"
                    size={48}
                    className="text-blue-600 mx-auto mb-4"
                  />
                  <div className="text-sm text-gray-600 mb-2">
                    Примерная стоимость:
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    {estimatedCost > 0 ? `${estimatedCost}₽` : "—"}
                  </div>

                  {breakdown && (
                    <div className="space-y-1 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Посадка:</span>
                        <span>{breakdown.base}₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Поездка:</span>
                        <span>{breakdown.distance}₽</span>
                      </div>
                      {breakdown.waiting > 0 && (
                        <div className="flex justify-between">
                          <span>Ожидание:</span>
                          <span>{breakdown.waiting}₽</span>
                        </div>
                      )}
                      <hr className="my-2" />
                      <div className="flex justify-between font-semibold">
                        <span>Итого:</span>
                        <span>{breakdown.total}₽</span>
                      </div>
                    </div>
                  )}

                  {estimatedCost > 0 && (
                    <div className="text-xs text-gray-500">
                      * Итоговая стоимость может отличаться
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Calculator;
