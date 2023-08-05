export default {
  name: 'Nume',
  tel: 'Telefon',
  save: 'Salvează',
  confirm: 'Confirmă',
  cancel: 'Anulează',
  delete: 'Șterge',
  complete: 'Finalizează',
  loading: 'Încărcare...',
  telEmpty: 'Te rugăm să completezi telefonul',
  nameEmpty: 'Te rugăm să completezi numele',
  nameInvalid: 'Nume incorect',
  confirmDelete: 'Ești sigur ca vrei sa stergi?',
  telInvalid: 'Număr de telefon invalid',
  gooseCalendar: {
    end: 'Sfârșit',
    start: 'Început',
    title: 'Calendar',
    startEnd: 'Început/Sfârsit',
    weekdays: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Alege maxim " + maxRange + " zile";
    }
  },
  gooseCascader: {
    select: 'Selectați'
  },
  gooseContactCard: {
    addText: 'Adaugă informațiile de contact'
  },
  gooseContactList: {
    addText: 'Adaugă contact nou'
  },
  goosePagination: {
    prev: 'Precedenta',
    next: 'Urmatoarea'
  },
  goosePullRefresh: {
    pulling: 'Trage pentru a da împrospăta...',
    loosing: 'Eliberează pentru a împrospăta...'
  },
  gooseSubmitBar: {
    label: 'Total：'
  },
  gooseCoupon: {
    unlimited: 'Nelimitat',
    discount: function discount(_discount) {
      return _discount * 10 + "% discount";
    },
    condition: function condition(_condition) {
      return "Cel pu\u021Bin " + _condition;
    }
  },
  gooseCouponCell: {
    title: 'Cupon',
    tips: 'Fără cupoane',
    count: function count(_count) {
      return "Ai " + _count + " cupoane";
    }
  },
  gooseCouponList: {
    empty: 'Fără cupoane',
    exchange: 'Schimbă',
    close: 'Închide',
    enable: 'Disponibil',
    disabled: 'Indisponibil',
    placeholder: 'Cod cupon'
  },
  gooseAddressEdit: {
    area: 'Zonă',
    postal: 'Cod postal',
    areaEmpty: 'Te rugăm sa selectezi o zona de primire',
    addressEmpty: 'Adresa nu poate fi goală',
    postalEmpty: 'Cod postal invalid',
    defaultAddress: 'Setează ca adresă de pornire',
    telPlaceholder: 'Telefon',
    namePlaceholder: 'Nume',
    areaPlaceholder: 'Zonă'
  },
  gooseAddressEditDetail: {
    label: 'Adresă',
    placeholder: 'Adresă'
  },
  gooseAddressList: {
    add: 'Adaugă adresă nouă'
  }
};