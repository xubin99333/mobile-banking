export default {
  name: 'Navn',
  tel: 'Telefon',
  save: 'Lagre',
  confirm: 'Bekreft',
  cancel: 'Avbryt',
  delete: 'Slett',
  complete: 'Fullfør',
  loading: 'Laster...',
  telEmpty: 'Vennligst fyll inn telefonnummer',
  nameEmpty: 'Vennligst fyll inn navn',
  nameInvalid: 'Ugyldig navn',
  confirmDelete: 'Er du sikker på at du vil slette?',
  telInvalid: 'Ugyldig telefonnummer',
  gooseCalendar: {
    end: 'Slutt',
    start: 'Start',
    title: 'Kalendar',
    startEnd: 'Start/Slutt',
    weekdays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Maks. " + maxRange + " dager";
    }
  },
  gooseCascader: {
    select: 'Plukke ut'
  },
  gooseContactCard: {
    addText: 'Legg til kontakt info'
  },
  gooseContactList: {
    addText: 'Legg til ny kontakt'
  },
  goosePagination: {
    prev: 'Forrige',
    next: 'Neste'
  },
  goosePullRefresh: {
    pulling: 'Dra for oppdatering...',
    loosing: 'Mist for oppdatering...'
  },
  gooseSubmitBar: {
    label: 'Totalt：'
  },
  gooseCoupon: {
    unlimited: 'Uendelig',
    discount: function discount(_discount) {
      return _discount * 10 + "% avslag";
    },
    condition: function condition(_condition) {
      return "Minst " + _condition;
    }
  },
  gooseCouponCell: {
    title: 'Kupong',
    tips: 'Ingen kuponger',
    count: function count(_count) {
      return "Du har " + _count + " kuponger";
    }
  },
  gooseCouponList: {
    empty: 'Ingen kuponger',
    exchange: 'Bytte',
    close: 'Lukk',
    enable: 'Tilgjengelig',
    disabled: 'Utilgjengelig',
    placeholder: 'Kupong kode'
  },
  gooseAddressEdit: {
    area: 'Område',
    postal: 'Postkode',
    areaEmpty: 'Vennligst fyll inn område',
    addressEmpty: 'Addresse kan ikke være tomt',
    postalEmpty: 'Feil postkode',
    defaultAddress: 'Sett som standard adresse',
    telPlaceholder: 'Telefon',
    namePlaceholder: 'Navn',
    areaPlaceholder: 'Område'
  },
  gooseAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse'
  },
  gooseAddressList: {
    add: 'Legg til ny adresse'
  }
};