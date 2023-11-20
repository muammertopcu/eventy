import {EventType} from '@types';

export interface EventCenter {
  Id: number;
  Hakkinda: string;
  KoordinatX: string;
  KoordinatY: string;
  Iletisim: string;
  Telefon: string;
  Adres: string;
  Resim: string;
  Ulasim: string;
  Adi: string;
  Aciklama: string;
}

export interface Session {
  DolulukOrani: number;
  BiletSatisAciklama: string;
  SeansBaslangicTarihi: string;
  SeansBitisTarihi: string;
  SatisaSunusTarihi: string;
  BiletSatisLinki: string | null;
  UcretsizMi: boolean;
}

export interface EventDetail {
  Tur: EventType;
  Aciklama: string;
  Id: number;
  Adi: string;
  KucukAfis: string;
  Resim: string;
  AciklamaOzeti: string;
  EtkinlikUrl: string;
  EtkinlikMerkezi: EventCenter;
  SeansListesi: Session[];
}
