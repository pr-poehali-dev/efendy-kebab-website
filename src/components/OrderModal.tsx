import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface OrderModalProps {
  orderModalOpen: boolean;
  setOrderModalOpen: (open: boolean) => void;
  selectedItem: any;
  orderForm: { name: string; phone: string; address: string; comment: string };
  setOrderForm: (form: any) => void;
  submitOrder: () => void;
}

const OrderModal = ({ 
  orderModalOpen, 
  setOrderModalOpen, 
  selectedItem, 
  orderForm, 
  setOrderForm, 
  submitOrder 
}: OrderModalProps) => {
  return (
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
  );
};

export default OrderModal;
