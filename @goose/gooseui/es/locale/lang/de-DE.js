export default {
  name: 'Name',
  tel: 'Telefon',
  save: 'Speichern',
  confirm: 'Bestätigen',
  cancel: 'Abbrechen',
  delete: 'Löschen',
  complete: 'Complete',
  loading: 'Laden...',
  telEmpty: 'Bitte das Telefon ausfüllen',
  nameEmpty: 'Bitte den Name angeben',
  nameInvalid: 'Ungültiger Name',
  confirmDelete: 'Bist du sicher, dass du löschen möchtest?',
  telInvalid: 'Ungültige Telefonnummer',
  gooseCalendar: {
    end: 'Ende',
    start: 'Start',
    title: 'Kalender',
    startEnd: 'Start/Ende',
    weekdays: ['So', 'Mo', 'Di', 'Mo', 'Do', 'Fr', 'Sa'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "W\xE4hle nicht mehr als " + maxRange + " Tage";
    }
  },
  gooseCascader: {
    select: 'Wählen'
  },
  gooseContactCard: {
    addText: 'Kontaktinformationen hinzufügen'
  },
  gooseContactList: {
    addText: 'Neuen Kontakt hinzufügen'
  },
  goosePagination: {
    prev: 'Vorherige',
    next: 'Nächste'
  },
  goosePullRefresh: {
    pulling: 'Zum Aktualisieren herunterziehen...',
    loosing: 'Loslassen zum Aktualisieren...'
  },
  gooseSubmitBar: {
    label: 'Total：'
  },
  gooseCoupon: {
    unlimited: 'Unbegrenzt',
    discount: function discount(_discount) {
      return _discount * 10 + "% Rabatt";
    },
    condition: function condition(_condition) {
      return "Mindestens " + _condition;
    }
  },
  gooseCouponCell: {
    title: 'Coupon',
    tips: 'Keine Coupons',
    count: function count(_count) {
      return "Du hast " + _count + " Coupons";
    }
  },
  gooseCouponList: {
    empty: 'Keine Coupons',
    exchange: 'Austauschen',
    close: 'Schließen',
    enable: 'Verfügbar',
    disabled: 'Nicht verfügbar',
    placeholder: 'Couponcode'
  },
  gooseAddressEdit: {
    area: 'Standort',
    postal: 'PLZ',
    areaEmpty: 'Bitte deinen Ort angeben',
    addressEmpty: 'Adresse darf nicht leer sein',
    postalEmpty: 'Falsche Postleitzahl',
    defaultAddress: 'Als Standardadresse festgelegen',
    telPlaceholder: 'Telefon',
    namePlaceholder: 'Name',
    areaPlaceholder: 'Ort'
  },
  gooseAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse'
  },
  gooseAddressList: {
    add: 'Neue Adresse hinzufügen'
  }
};