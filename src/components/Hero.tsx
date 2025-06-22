import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import Settings from "@/components/Settings";

const Hero = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-4 relative">
      {/* Кнопка настроек */}
      <div className="absolute top-6 right-6">
        <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <Settings onClose={() => setIsSettingsOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Надежное такси
              <span className="block text-blue-400">город и межгород</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Комфортные поездки по городу и междугородние перевозки.
              Профессиональные водители, фиксированные тарифы.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} className="text-blue-400" />
                <span>Работаем 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-blue-400" />
                <span>Страховка</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={20} className="text-blue-400" />
                <span>Опытные водители</span>
              </div>
            </div>
          </div>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Заказать поездку
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Откуда</label>
                <Input
                  placeholder="Адрес подачи"
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Куда</label>
                <Input
                  placeholder="Адрес назначения"
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <Input
                  placeholder="+7 (999) 123-45-67"
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                <Icon name="Car" size={20} className="mr-2" />
                Заказать такси
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
