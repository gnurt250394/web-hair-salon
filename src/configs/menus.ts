const menus = [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'fa fa-house',
    subMenu: [],
  },
  {
    name: 'Quản lý dịch vụ',
    path: '/',
    icon: 'fa fa-house',
    subMenu: [
      {
        name: 'Thêm dịch vụ',
        path: '/them-dich-vu',
        icon: '',
      },
      {
        name: 'Danh sách dịch vụ',
        path: '/dich-vu',
        icon: '',
      },
    ],
  },
];
export default menus;
