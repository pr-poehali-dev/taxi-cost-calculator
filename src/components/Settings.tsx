import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

interface SettingsProps {
  onClose?: () => void;
}

const Settings = ({ onClose }: SettingsProps) => {
  const [defaultAddress, setDefaultAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSave = () => {
    // Здесь будет сохранение настроек
    console.log("Настройки сохранены");
    onClose?.();
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Настройки</h2>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        )}
      </div>

      {/* Профиль */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="User" size={20} />
            Профиль
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Ваше имя"
            />
          </div>
          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              placeholder="+7 (999) 123-45-67"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="email@example.com"
            />
          </div>
        </CardContent>
      </Card>

      {/* Адрес по умолчанию */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="MapPin" size={20} />
            Адрес подачи по умолчанию
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            value={defaultAddress}
            onChange={(e) => setDefaultAddress(e.target.value)}
            placeholder="Введите адрес (дом, работа)"
          />
        </CardContent>
      </Card>

      {/* Способ оплаты */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="CreditCard" size={20} />
            Способ оплаты
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={paymentMethod} onValueChange={setPaymentMethod}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="card">Банковская карта</SelectItem>
              <SelectItem value="cash">Наличные</SelectItem>
              <SelectItem value="sbp">СБП</SelectItem>
              <SelectItem value="yandex">Яндекс.Деньги</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Уведомления */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Bell" size={20} />
            Уведомления
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="sms">SMS-уведомления</Label>
              <p className="text-sm text-gray-500">
                Уведомления о статусе заказа
              </p>
            </div>
            <Switch
              id="sms"
              checked={smsNotifications}
              onCheckedChange={setSmsNotifications}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-notif">Email-уведомления</Label>
              <p className="text-sm text-gray-500">Чеки и важные обновления</p>
            </div>
            <Switch
              id="email-notif"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="push">Push-уведомления</Label>
              <p className="text-sm text-gray-500">Уведомления в браузере</p>
            </div>
            <Switch
              id="push"
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
            />
          </div>
        </CardContent>
      </Card>

      {/* Кнопки действий */}
      <div className="flex gap-4">
        <Button onClick={handleSave} className="flex-1">
          <Icon name="Save" size={16} className="mr-2" />
          Сохранить
        </Button>
        {onClose && (
          <Button variant="outline" onClick={onClose}>
            Отмена
          </Button>
        )}
      </div>
    </div>
  );
};

export default Settings;
