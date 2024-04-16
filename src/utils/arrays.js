export const provinces = [
  { id: 0, value: "Central", option: "Central" },
  { id: 1, value: "Eastern", option: "Eastern" },
  { id: 2, value: "Northern", option: "Northern" },
  { id: 3, value: "North_Central", option: "North Central" },
  { id: 4, value: "North_Western", option: "North Western" },
  { id: 5, value: "Sabaragamuwa", option: "Sabaragamuwa" },
  { id: 6, value: "Southern", option: "Southern" },
  { id: 7, value: "Uva", option: "Uva" },
  { id: 8, value: "Western", option: "Western" },
];

export const cover = [
  "/Cover/cover1.jpg",
  "/Cover/cover2.jpg",
  "/Cover/cover3.jpg",
  "/Cover/cover4.jpg",
  "/Cover/cover5.jpg",
  "/Cover/cover6.jpg",
  "/Cover/cover7.jpg",
  "/Cover/cover8.jpg",
  "/Cover/cover9.jpg",
];

export const districtsByProvince = {
  Central: [
    { id: 0, value: "kandy", option: "Kandy" },
    { id: 1, value: "Matale", option: "Matale" },
    { id: 2, value: "Nuwara Eliya", option: "Nuwara Eliya" },
  ],
  Eastern: [
    { id: 0, value: "Ampara", option: "Ampara" },
    { id: 1, value: "Batticaloa", option: "Batticaloa" },
    { id: 2, value: "Trincomalee", option: "Trincomalee" },
  ],
  Northern: [
    { id: 0, value: "Jaffna", option: "Jaffna" },
    { id: 1, value: "Kilinochchi", option: "Kilinochchi" },
    { id: 2, value: "Mannar", option: "Mannar" },
    { id: 3, value: "Mullaitivu", option: "Mullaitivu" },
    { id: 4, value: "Vavuniya", option: "Vavuniya" },
  ],
  North_Central: [
    { id: 0, value: "Anuradhapura", option: "Anuradhapura" },
    { id: 1, value: "Polonnaruwa", option: "Polonnaruwa" },
  ],
  North_Western: [
    { id: 0, value: "Puttalam", option: "Puttalam" },
    { id: 1, value: "Kurunegala", option: "Kurunegala" },
  ],
  Sabaragamuwa: [
    { id: 0, value: "Ratnapura", option: "Ratnapura" },
    { id: 1, value: "Kegalle", option: "Kegalle" },
  ],
  Southern: [
    { id: 0, value: "Galle", option: "Galle" },
    { id: 1, value: "Matara", option: "Matara" },
    { id: 2, value: "Hambantota", option: "Hambantota" },
  ],
  Uva: [
    { id: 0, value: "Badulla", option: "Badulla" },
    { id: 1, value: "Monaragala", option: "Monaragala" },
  ],
  Western: [
    { id: 0, value: "Colombo", option: "Colombo" },
    { id: 1, value: "Gampaha", option: "Gampaha" },
    { id: 2, value: "Kalutara", option: "Kalutara" },
  ],
};

export const mens = [
  { id: 0, option: "Shirts", url: "/Catalogue", state:"mensshirt" },
  { id: 1, option: "T-Shirts ", url: "/Catalogue", state:"menstshirt" },
  { id: 2, option: "Trousers", url: "/Catalogue", state:"menstrousers" },
  { id: 3, option: "Denims", url: "/Catalogue", state:"mensdenims" },
  { id: 4, option: "Shorts", url: "/Catalogue", state:"mensshorts" },
  { id: 5, option: "Hoodies", url: "/Catalogue", state:"menshoodies" },

];

export const womens = [
  { id: 0, option: "Sets", url: "/Catalogue", state:"womenssets" },
  { id: 1, option: "Dresses ", url: "/Catalogue", state:"womensdresses" },
  { id: 2, option: "Tops", url: "/Catalogue", state:"womenstops" },
  { id: 3, option: "Skirts", url: "/Catalogue", state:"womenskirts" },
  { id: 4, option: "Trousers", url: "/Catalogue", state:"womenstrousers" },
  { id: 5, option: "Denims", url: "/Catalogue", state:"womensdenims" },
];

export const Unisex = [
  { id: 0, option: "T-Shirts", url: "/Catalogue", state:"unisextshirts" },
  { id: 1, option: "Hoodies", url: "/Catalogue", state:"unisexhoodies" },
  { id: 2, option: "Trousers", url: "/Catalogue", state:"unisextrousers" },
  { id: 3, option: "Denims", url: "/Catalogue", state:"unisexdenims" },
];

export const kids = [
  { id: 0, option: "T-Shirts", url: "/Catalogue", state:"kidstshirts" },
  { id: 1, option: "Tops", url: "/Catalogue", state:"kidstops" },
  { id: 2, option: "Hoodies", url: "/Catalogue", state:"kidshoodies" },
  { id: 3, option: "Shorts", url: "/Catalogue", state:"kidsshorts" },
  { id: 4, option: "Trousers", url: "/Catalogue", state:"kidstrousers" },
  { id: 5, option: "Denims", url: "/Catalogue", state:"kidsdenims" },
];
