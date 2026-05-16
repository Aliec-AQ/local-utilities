export interface ModuleConfig {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
  view: string;
  needsInternet?: boolean;
}

export const modules: ModuleConfig[] = [
  {
    id: 'calculator',
    name: 'Calculator',
    description: 'A simple calculator',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" id="mdi-calculator-variant-outline" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V5H19V19M6.2 7.7H11.2V9.2H6.2V7.7M13 15.8H18V17.3H13V15.8M13 13.2H18V14.7H13V13.2M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18M14.1 10.9L15.5 9.5L16.9 10.9L18 9.9L16.6 8.5L18 7.1L16.9 6L15.5 7.4L14.1 6L13 7.1L14.4 8.5L13 9.9L14.1 10.9Z" /></svg>',
    path: '/calculator',
    view: 'CalculatorView',
    needsInternet: false,
  },
  {
    id: 'ring-size',
    name: 'Ring Size',
    description: 'Find your ring circumference',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" id="mdi-ring" fill="currentColor" viewBox="0 0 24 24"><path d="M12,10L8,4.4L9.6,2H14.4L16,4.4L12,10M15.5,6.8L14.3,8.5C16.5,9.4 18,11.5 18,14A6,6 0 0,1 12,20A6,6 0 0,1 6,14C6,11.5 7.5,9.4 9.7,8.5L8.5,6.8C5.8,8.1 4,10.8 4,14A8,8 0 0,0 12,22A8,8 0 0,0 20,14C20,10.8 18.2,8.1 15.5,6.8Z" /></svg>',
    path: '/ring-size',
    view: 'RingSizeView',
    needsInternet: false,
  },
    {
    id: 'local-send',
    name: 'Local Send',
    description: 'WebRTC file sharing (localsend.org)',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" id="mdi-send" fill="currentColor" viewBox="0 0 24 24"><path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /></svg>',
    path: '/local-send',
    view: 'LocalSendView',
    needsInternet: true,
  },
];