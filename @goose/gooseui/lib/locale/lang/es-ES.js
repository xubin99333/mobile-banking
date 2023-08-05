"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: 'Nombre',
  tel: 'Teléfono',
  save: 'Guardar',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  delete: 'Eliminar',
  complete: 'Completado',
  loading: 'Cargando...',
  telEmpty: 'Por favor rellena el teléfono',
  nameEmpty: 'Por favor rellena el nombre',
  nameInvalid: 'nombre inválido',
  confirmDelete: 'Estás seguro de eliminarlo?',
  telInvalid: 'Teléfono inválido',
  gooseCalendar: {
    end: 'Fin',
    start: 'Inicio',
    title: 'Calendario',
    startEnd: 'Inicio/Fin',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    monthTitle: function monthTitle(year, month) {
      return year + "/" + month;
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "Elija no m\xE1s de " + maxRange + " d\xEDas";
    }
  },
  gooseCascader: {
    select: 'Seleccione'
  },
  gooseContactCard: {
    addText: 'Añadir información de contacto'
  },
  gooseContactList: {
    addText: 'Añadir nuevo contacto'
  },
  goosePagination: {
    prev: 'Anterior',
    next: 'Siguiente'
  },
  goosePullRefresh: {
    pulling: 'Tira para recargar...',
    loosing: 'Suelta para recargar...'
  },
  gooseSubmitBar: {
    label: 'Total：'
  },
  gooseCoupon: {
    unlimited: 'Ilimitado',
    discount: function discount(_discount) {
      return _discount * 10 + "% de descuento";
    },
    condition: function condition(_condition) {
      return "Al menos " + _condition;
    }
  },
  gooseCouponCell: {
    title: 'Cupón',
    tips: 'Sin cupones',
    count: function count(_count) {
      return "You have " + _count + " coupons";
    }
  },
  gooseCouponList: {
    empty: 'Sin cupones',
    exchange: 'Intercambio',
    close: 'Cerrar',
    enable: 'Disponible',
    disabled: 'No disponible',
    placeholder: 'Código del cupón'
  },
  gooseAddressEdit: {
    area: 'Área',
    postal: 'Código Postal',
    areaEmpty: 'Por favor selecciona una área de recogida',
    addressEmpty: 'La dirección no puede estar vacia',
    postalEmpty: 'Código postal inválido',
    defaultAddress: 'Establecer como dirección por defecto',
    telPlaceholder: 'Teléfono',
    namePlaceholder: 'Nombre',
    areaPlaceholder: 'Área'
  },
  gooseAddressEditDetail: {
    label: 'Dirección',
    placeholder: 'Dirección'
  },
  gooseAddressList: {
    add: 'Anadir dirección'
  }
};
exports.default = _default;