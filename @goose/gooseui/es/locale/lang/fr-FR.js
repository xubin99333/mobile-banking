export default {
  name: 'Nom',
  tel: 'Telephone',
  save: 'Sauvegarder',
  confirm: 'Confirmer',
  cancel: 'Annuler',
  delete: 'Suprimer',
  complete: 'Terminé',
  loading: 'Chargement...',
  telEmpty: 'Veuillez remplir le tel',
  nameEmpty: 'Veuillez remplir le nom',
  nameInvalid: 'Nom incorrect',
  confirmDelete: 'Êtes-vous sûr de vouloir supprimer?',
  telInvalid: 'Numéro de téléphone incorrect',
  gooseCalendar: {
    end: 'Fin',
    start: 'Début',
    title: 'Calendrier',
    startEnd: 'Début/Fin',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Choisir pas plus de " + maxRange + " jours";
    }
  },
  gooseCascader: {
    select: 'Sélectionner'
  },
  gooseContactCard: {
    addText: 'Ajouter des informations de contact'
  },
  gooseContactList: {
    addText: 'Ajouter un nouveau contact'
  },
  goosePagination: {
    prev: 'Précédent',
    next: 'Suigooset'
  },
  goosePullRefresh: {
    pulling: 'Tirer pour actualiser ...',
    loosing: 'Relâchez pour actualiser...'
  },
  gooseSubmitBar: {
    label: 'Total：'
  },
  gooseCoupon: {
    unlimited: 'Illimité',
    discount: function discount(_discount) {
      return _discount * 10 + "% de r\xE9duction";
    },
    condition: function condition(_condition) {
      return "Au moins " + _condition;
    }
  },
  gooseCouponCell: {
    title: 'Coupon',
    tips: 'Pas de coupons',
    count: function count(_count) {
      return "Vous avez " + _count + " coupons";
    }
  },
  gooseCouponList: {
    empty: 'Pas de coupons',
    exchange: 'Exchange',
    close: 'Fermer',
    enable: 'Disponible',
    disabled: 'Indisponible',
    placeholder: 'Code coupon'
  },
  gooseAddressEdit: {
    area: 'Zone',
    postal: 'Postal',
    areaEmpty: 'Veuillez sélectionner une zone de réception',
    addressEmpty: "L'adresse ne peut pas être vide",
    postalEmpty: 'Mauvais code postal',
    defaultAddress: 'Définir comme adresse par défaut',
    telPlaceholder: 'Téléphone',
    namePlaceholder: 'Nom',
    areaPlaceholder: 'Zone'
  },
  gooseAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse'
  },
  gooseAddressList: {
    add: 'Ajouter une nouvelle adresse'
  }
};