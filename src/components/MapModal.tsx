import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useEffect } from 'react';

interface MapModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MapModal = ({ open, onOpenChange }: MapModalProps) => {
  useEffect(() => {
    if (open) {
      // Загружаем Яндекс.Карты только когда модалка открыта
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';
      script.async = true;
      script.onload = () => initMap();
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [open]);

  const initMap = () => {
    // @ts-ignore
    if (typeof ymaps !== 'undefined') {
      // @ts-ignore
      ymaps.ready(() => {
        // @ts-ignore
        const map = new ymaps.Map('yandex-map', {
          center: [54.314192, 48.403134], // Координаты Промышленная ул., 76А, Ульяновск
          zoom: 16,
          controls: ['zoomControl', 'fullscreenControl']
        });

        // @ts-ignore
        const placemark = new ymaps.Placemark([54.314192, 48.403134], {
          balloonContent: '<strong>Efendy Kebab</strong><br/>Промышленная ул., 76А<br/>+7 (960) 370-10-62',
          hintContent: 'Efendy Kebab'
        }, {
          preset: 'islands#redFoodIcon'
        });

        map.geoObjects.add(placemark);
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Как добраться</DialogTitle>
          <DialogDescription>
            Промышленная ул., 76А, Ульяновск
          </DialogDescription>
        </DialogHeader>
        <div id="yandex-map" className="w-full h-[500px] rounded-lg"></div>
      </DialogContent>
    </Dialog>
  );
};

export default MapModal;
