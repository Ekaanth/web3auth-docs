const SECTIONS = [
  // no sections for default section, i.e; home
  {
    id: "default",
    section: false,
  },
  {
    name: "React SDK",
    id: "react",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "old-web-sdks",
  },
  {
    name: "JavaScript SDK",
    id: "javascript",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "old-web-sdks",
  },

  // Plugin SDKs
  // - web
  {
    name: "Javascript",
    id: "plugin-sdk",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "plugin-sdk",
  },

  // Web SDKs
  // - ui-sdk
  {
    name: "Web Components",
    id: "ui-kit",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "ui-sdk",
  },
  {
    name: "React UI Kit",
    id: "react-ui-kit",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "ui-sdk",
  },
  {
    name: "Angular UI Kit",
    id: "angular-ui-kit",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "ui-sdk",
  },

  // - core-sdk
  {
    name: "JavaScript",
    id: "web-core",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "core-sdk",
  },

  // Mobile SDKs
  {
    name: "Android Core",
    id: "android-core",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "mobile-core",
  },

  {
    name: "iOS Core",
    id: "ios-core",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "mobile-core",
  },

  {
    name: "React Native Core",
    id: "rn-core",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "mobile-core",
  },
  {
    name: "Flutter Core",
    id: "flutter-core",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "mobile-core",
  },
  {
    name: "React Native",
    id: "react-native",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "mobile-sdk",
  },
  {
    name: "Android",
    id: "android",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "mobile-sdk",
  },
  {
    name: "iOS",
    id: "ios",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "mobile-sdk",
  },
  {
    name: "Flutter",
    id: "flutter",
    icon: '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#F0DB4F"/><path d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z" fill="#323330"/></svg>',
    section: "mobile-sdk",
  },
];

const MULTI_SECTIONS = [
  [
    {
      name: "UI Kit",
      section: "ui-sdk",
      description: "Use our pre-built UI components as a base to build on top of.",
    },
    {
      name: "Core SDK",
      section: "core-sdk",
      description: "Build your own UI from scratch, use our low level APIs.",
    },
  ],
  [
    {
      name: "Prebuilt SDK",
      section: "mobile-sdk",
      description: "Use our pre-built mobile SDK, ready to go",
    },
    {
      name: "Core SDK",
      section: "mobile-core",
      isNew: true,
      description: "Build your own UI from scratch, use our low level APIs.",
    },
  ],
  [
    {
      name: "Plugin SDK for Web",
      section: "plugin-sdk",
      description: "Build real-time collaborative apps using Dyte.",
    },
  ],
];

export { MULTI_SECTIONS, SECTIONS };
