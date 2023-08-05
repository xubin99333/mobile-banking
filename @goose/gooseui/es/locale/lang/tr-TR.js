export default {
  name: 'İsim',
  tel: 'Telefon',
  save: 'Kaydet',
  confirm: 'Onayla',
  cancel: 'İptal',
  delete: 'Sil',
  complete: 'Tamamla',
  loading: 'Yükleniyor...',
  telEmpty: 'Lütfen tel. no giriniz',
  nameEmpty: 'Lütfen isim giriniz',
  nameInvalid: 'Geçersiz isim',
  confirmDelete: 'Silmek istediğinize emin misiniz?',
  telInvalid: 'Geçersiz tel. numarası',
  gooseCalendar: {
    end: 'Son',
    start: 'Başlat',
    title: 'Takvim',
    startEnd: 'Başlat/Son',
    weekdays: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "En fazla " + maxRange + " g\xFCn se\xE7in";
    }
  },
  gooseCascader: {
    select: 'Seçiniz'
  },
  gooseContactCard: {
    addText: 'Kişi bilgisi ekle'
  },
  gooseContactList: {
    addText: 'Yeni kişi ekle'
  },
  goosePagination: {
    prev: 'Önceki',
    next: 'Sonraki'
  },
  goosePullRefresh: {
    pulling: 'Yenilemek için çekin...',
    loosing: 'Yenilemek için bırakın...'
  },
  gooseSubmitBar: {
    label: 'Toplam:'
  },
  gooseCoupon: {
    unlimited: 'Sınırsız',
    discount: function discount(_discount) {
      return "%" + _discount * 10 + " indirim";
    },
    condition: function condition(_condition) {
      return "En az " + _condition;
    }
  },
  gooseCouponCell: {
    title: 'Kupon',
    tips: 'Kupon yok',
    count: function count(_count) {
      return _count + " adet teklif var";
    }
  },
  gooseCouponList: {
    empty: 'Kupon yok',
    exchange: 'Takas',
    close: 'Kapat',
    enable: 'Mevcut',
    disabled: 'Mevcut değil',
    placeholder: 'Kupon kodu'
  },
  gooseAddressEdit: {
    area: 'Alan',
    postal: 'Posta',
    areaEmpty: 'Lütfen alıcı alanını seçin',
    addressEmpty: 'Adres boş olamaz!',
    postalEmpty: 'Yanlış posta kodu',
    defaultAddress: 'Varsayılan adres olarak ayarla',
    telPlaceholder: 'Telefone',
    namePlaceholder: 'İsim',
    areaPlaceholder: 'Alan'
  },
  gooseAddressEditDetail: {
    label: 'Adres',
    placeholder: 'Adres'
  },
  gooseAddressList: {
    add: 'Yeni adres ekle'
  }
};