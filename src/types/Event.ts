export interface Event {
  Tur: EventTypes;
  Id: number;
  Adi: string;
  EtkinlikBitisTarihi: string;
  KucukAfis: string;
  EtkinlikMerkezi: string;
  KisaAciklama: string;
  BiletSatisLinki: null | string;
  UcretsizMi: boolean;
  Resim: string;
  EtkinlikUrl: string;
  EtkinlikBaslamaTarihi: string;
}

export type EventTypes = 'TİYATRO' | 'KONSER' | 'DİĞER' | 'SİNEMA' | 'SERGİ';
