const Config = Object.freeze({
  companyTypes: {
    1: 'Индивидуальный предприниматель (ИП)',
    2: 'Крестьянское (фермерское) хозяйство (КФХ)',
    3: 'Унитарное предприятие (УП)',
    4: 'Производственный кооператив (ПК)',
    5: 'Полное товарищество (ПТ)',
    6: 'Коммандитное товарищество (КТ)',
    7: 'Общество с дополнительной ответственностью (ОДО)',
    8: 'Общество с ограниченной ответственностью (ООО)',
    9: 'Открытое акционерное общество (ОАО)',
    10: 'Закрытое акционерное общество (ЗАО)'
  },

  ownershipTypes: {
    1: 'Частная собственность',
    2: 'Государственная собственность',
    3: 'Общая (долевая) собственность'
  }
});

export default Config;
