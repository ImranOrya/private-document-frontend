export   interface documentsProps {
  serialNo: number;
  documentType: string;
  documentNumber: number;
  dateOfissue: string;
  urgencey: string;
  dateOfregistration: string;
  documentStatus: string;
  ministerOrders: string;
  refferDepartment: string;
  documentFileNumber: number;
}
export interface ReportType {
  id: number;
  name: string;
}


export const documentTypeData: ReportType[] = [
  { id: 1, name: "Ahkams" },
  { id: 2, name: "Maktubs" },
  { id: 3, name: "Orders" },
  { id: 4, name: "Musawebat" },
  { id: 5, name: "Istelam" },
  // Add more types as needed
];
export const documentStatusData: ReportType[] = [
  { id: 1, name: "Complete" },
  { id: 2, name: "Progress" },
  { id: 3, name: "Save" },
]
export const documentUrgencyData: ReportType[] = [
    { id: 1, name: "Urgent" },
    { id: 2, name: "Normal" },
]
export const documentSourceData: ReportType[] = [
      { id: 1, name: "Reyastulwazara" },
      { id: 2, name: "AmirulMumenin" },
]
 export const documentRefferData: ReportType[] = [
        { id: 1, name: "reyasatDefter"},
         { id: 2, name: "palesipalaan"}
         
 ]
 export const documentDurationData: ReportType[] = [
          { id: 1, name: "2days" },
          { id: 2, name: "43days" },
          { id: 1, name: "month" },
               
 
  // Add more types as needed
];
export const Ahkams: documentsProps[] = [
  {
    serialNo: 2222,
    documentType: "Ahkams",
    documentNumber: 1111,
    dateOfissue: "2024/1/1",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/1",
    documentStatus: "urgent",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "منابع بشری",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2322,
    documentType: "Ahkams",
    documentNumber: 1211,
    dateOfissue: "2024/1/2",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/2",
    documentStatus: "urgent",
    ministerOrders: "درمورد اجرات  اصولی نماید",
    refferDepartment: " ریاست دفتر",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2422,
    documentType: "Ahkams",
    documentNumber: 1311,
    dateOfissue: "2024/1/3",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/3",
    documentStatus: "normal",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "قوای  بشری",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2422,
    documentType: "Ahkams",
    documentNumber: 1411,
    dateOfissue: "2024/1/4",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/4",
    documentStatus: "normal",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "طب معالجوی",
    documentFileNumber: 2024,
  },
];
export const Maktubs: documentsProps[] = [
  {
    serialNo: 2222,
    documentType: "maktub",
    documentNumber: 1111,
    dateOfissue: "2024/1/1",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/1",
    documentStatus: "urgent",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "منابع بشری",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2322,
    documentType: "maktub",
    documentNumber: 1211,
    dateOfissue: "2024/1/2",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/2",
    documentStatus: "urgent",
    ministerOrders: "درمورد اجرات  اصولی نماید",
    refferDepartment: " ریاست دفتر",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2422,
    documentType: "maktub",
    documentNumber: 1311,
    dateOfissue: "2024/1/3",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/3",
    documentStatus: "normal",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "قوای  بشری",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2422,
    documentType: "maktub",
    documentNumber: 1411,
    dateOfissue: "2024/1/4",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/4",
    documentStatus: "normal",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "طب معالجوی",
    documentFileNumber: 2024,
  },
];
export const Orders: documentsProps[] = [
  {
    serialNo: 2222,
    documentType: "order",
    documentNumber: 1111,
    dateOfissue: "2024/1/1",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/1",
    documentStatus: "urgent",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "منابع بشری",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2322,
    documentType: "order",
    documentNumber: 1211,
    dateOfissue: "2024/1/2",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/2",
    documentStatus: "urgent",
    ministerOrders: "درمورد اجرات  اصولی نماید",
    refferDepartment: " ریاست دفتر",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2422,
    documentType: "order",
    documentNumber: 1311,
    dateOfissue: "2024/1/3",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/3",
    documentStatus: "normal",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "قوای  بشری",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2422,
    documentType: "order",
    documentNumber: 1411,
    dateOfissue: "2024/1/4",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/4",
    documentStatus: "normal",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "طب معالجوی",
    documentFileNumber: 2024,
  },
];
export const Istelams: documentsProps[] = [
  {
    serialNo: 2222,
    documentType: "istelam",
    documentNumber: 1111,
    dateOfissue: "2024/1/1",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/1",
    documentStatus: "urgent",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "منابع بشری",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2322,
    documentType: "istelam",
    documentNumber: 1211,
    dateOfissue: "2024/1/2",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/2",
    documentStatus: "urgent",
    ministerOrders: "درمورد اجرات  اصولی نماید",
    refferDepartment: " ریاست دفتر",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2422,
    documentType: "istelam",
    documentNumber: 1311,
    dateOfissue: "2024/1/3",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/3",
    documentStatus: "normal",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "قوای  بشری",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2422,
    documentType: "istelam",
    documentNumber: 1411,
    dateOfissue: "2024/1/4",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/4",
    documentStatus: "normal",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "طب معالجوی",
    documentFileNumber: 2024,
  },
];
export const Musawebat: documentsProps[] = [
  {
    serialNo: 2222,
    documentType: "musawebat",
    documentNumber: 1111,
    dateOfissue: "2024/1/1",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/1",
    documentStatus: "urgent",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "منابع بشری",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2322,
    documentType: "musawebat",
    documentNumber: 1211,
    dateOfissue: "2024/1/2",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/2",
    documentStatus: "urgent",
    ministerOrders: "درمورد اجرات  اصولی نماید",
    refferDepartment: " ریاست دفتر",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2422,
    documentType: "musawebat",
    documentNumber: 1311,
    dateOfissue: "2024/1/3",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/3",
    documentStatus: "normal",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "قوای  بشری",
    documentFileNumber: 2024,
  },
  {
    serialNo: 2422,
    documentType: "musawebat",
    documentNumber: 1411,
    dateOfissue: "2024/1/4",
    urgencey: "Urgent",
    dateOfregistration: "2024/1/4",
    documentStatus: "normal",
    ministerOrders: "درمورد اجرات نماید",
    refferDepartment: "طب معالجوی",
    documentFileNumber: 2024,
  },
];
