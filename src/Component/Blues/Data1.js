import uuidv4 from "../helper/generate-uuid";

const data = [
  {
    id: 1,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/_DSC0417-500x500.JPG",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1636,P20,281,29-500x500.JPG.pagespeed.ic.XQge7-XpV3.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1636,P20,281,29-500x500.JPG.pagespeed.ic.XQge7-XpV3.webp",
      },
      {
        id: 4,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC0412-500x500.JPG.pagespeed.ic.3M9ZvVCTPS.webp",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/_DSC0417-500x500.JPG",
      },
      {
        id: 2,
        col: "մանուշակագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC0412-500x500.JPG.pagespeed.ic.3M9ZvVCTPS.webp",
      },
    ],
    title: "շոր",
    prise: 5900,
  },
  {
    id: 2,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/_DSjhhhhC0567-500x500.JPG",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC0jh564-500x500.JPG.pagespeed.ic.iC54ZpAn7P.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSCjmuhbj0578-500x500.JPG.pagespeed.ic.UWnwo5Dpjs.webp",
      },
    ],
    color: [
      {
        id: 1,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/_DSjhhhhC0567-500x500.JPG",
      },
      {
        id: 2,
        col: "սև",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC0jh564-500x500.JPG.pagespeed.ic.iC54ZpAn7P.webp",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 3900,
  },
  {
    id: 3,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/xIMfgfgfgG_0014-500x500.jpg.pagespeed.ic.AD-p8ZmMOS.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/xIMrfgfG_0008-500x500.jpg.pagespeed.ic.k-4DJovYbZ.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/xIMfgfgfgG_0049-500x500.jpg.pagespeed.ic.H4Dlrnzxfo.webp",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/xIMfgfgfgG_0014-500x500.jpg.pagespeed.ic.AD-p8ZmMOS.webp",
      },
      {
        id: 2,
        col: "կանաչ",
        img: "https://fabrikastore.am/image/cache/catalog/xIMrfgfG_0008-500x500.jpg.pagespeed.ic.k-4DJovYbZ.webp",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 4900,
  },
  {
    id: 4,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC30543265445-500x500.JPG.pagespeed.ic.d2wZdiWRpJ.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC353254079-500x500.JPG.pagespeed.ic.QSjiOc3uxK.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC30153257-500x500.JPG.pagespeed.ic.AVT1ENwj_l.webp",
      },
      {
        id: 4,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC3054325082-500x500.JPG.pagespeed.ic.hMwVL1ZW8z.webp",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC30543265445-500x500.JPG.pagespeed.ic.d2wZdiWRpJ.webp",
      },
      {
        id: 2,
        col: "կապույտ",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC353254079-500x500.JPG.pagespeed.ic.QSjiOc3uxK.webp",
      },
      {
        id: 3,
        col: "նարնջագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC30153257-500x500.JPG.pagespeed.ic.AVT1ENwj_l.webp",
      },
      {
        id: 4,
        col: "մարմնագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC3054325082-500x500.JPG.pagespeed.ic.hMwVL1ZW8z.webp",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 2900,
  },
  {
    id: 5,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1851-500x500.JPG.pagespeed.ic.znZ6HtVyyq.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 5900,
  },
  {
    id: 6,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1851-500x500.JPG.pagespeed.ic.znZ6HtVyyq.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 5900,
  },
  {
    id: 7,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1851-500x500.JPG.pagespeed.ic.znZ6HtVyyq.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 5900,
  },
  {
    id: 8,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1851-500x500.JPG.pagespeed.ic.znZ6HtVyyq.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 5900,
  },
  {
    id: 9,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1851-500x500.JPG.pagespeed.ic.znZ6HtVyyq.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 5900,
  },
  {
    id: 10,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/_DSC0417-500x500.JPG",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1636,P20,281,29-500x500.JPG.pagespeed.ic.XQge7-XpV3.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1636,P20,281,29-500x500.JPG.pagespeed.ic.XQge7-XpV3.webp",
      },
      {
        id: 4,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC0412-500x500.JPG.pagespeed.ic.3M9ZvVCTPS.webp",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/_DSC0417-500x500.JPG",
      },
      {
        id: 2,
        col: "մանուշակագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC0412-500x500.JPG.pagespeed.ic.3M9ZvVCTPS.webp",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 5900,
    button: " Գնել հիմա",
  },
  {
    id: 11,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1851-500x500.JPG.pagespeed.ic.znZ6HtVyyq.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 3900,
  },
  {
    id: 12,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/xIMfgfgfgG_0014-500x500.jpg.pagespeed.ic.AD-p8ZmMOS.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/xIMrfgfG_0008-500x500.jpg.pagespeed.ic.k-4DJovYbZ.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/xIMfgfgfgG_0049-500x500.jpg.pagespeed.ic.H4Dlrnzxfo.webp",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/xIMfgfgfgG_0014-500x500.jpg.pagespeed.ic.AD-p8ZmMOS.webp",
      },
      {
        id: 2,
        col: "կանաչ",
        img: "https://fabrikastore.am/image/cache/catalog/xIMrfgfG_0008-500x500.jpg.pagespeed.ic.k-4DJovYbZ.webp",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 4900,
  },
  {
    id: 13,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC30543265445-500x500.JPG.pagespeed.ic.d2wZdiWRpJ.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC353254079-500x500.JPG.pagespeed.ic.QSjiOc3uxK.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC30153257-500x500.JPG.pagespeed.ic.AVT1ENwj_l.webp",
      },
      {
        id: 4,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC3054325082-500x500.JPG.pagespeed.ic.hMwVL1ZW8z.webp",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC30543265445-500x500.JPG.pagespeed.ic.d2wZdiWRpJ.webp",
      },
      {
        id: 2,
        col: "կապույտ",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC353254079-500x500.JPG.pagespeed.ic.QSjiOc3uxK.webp",
      },
      {
        id: 3,
        col: "նարնջագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC30153257-500x500.JPG.pagespeed.ic.AVT1ENwj_l.webp",
      },
      {
        id: 4,
        col: "մարմնագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC3054325082-500x500.JPG.pagespeed.ic.hMwVL1ZW8z.webp",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 2900,
  },
  {
    id: 14,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/_DSjhhhhC0567-500x500.JPG",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC0jh564-500x500.JPG.pagespeed.ic.iC54ZpAn7P.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSCjmuhbj0578-500x500.JPG.pagespeed.ic.UWnwo5Dpjs.webp",
      },
    ],
    color: [
      {
        id: 1,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/_DSjhhhhC0567-500x500.JPG",
      },
      {
        id: 2,
        col: "սև",
        img: "https://fabrikastore.am/image/cache/catalog/x_DSC0jh564-500x500.JPG.pagespeed.ic.iC54ZpAn7P.webp",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 5900,
  },
  {
    id: 15,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1851-500x500.JPG.pagespeed.ic.znZ6HtVyyq.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 5900,
  },
  {
    id: 16,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1851-500x500.JPG.pagespeed.ic.znZ6HtVyyq.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 5900,
  },
  {
    id: 17,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1851-500x500.JPG.pagespeed.ic.znZ6HtVyyq.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 5900,
  },
  {
    id: 18,
    image: [
      {
        id: 1,
        src: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        src: "https://fabrikastore.am/image/cache/catalog/x_DSC1851-500x500.JPG.pagespeed.ic.znZ6HtVyyq.webp",
      },
      {
        id: 3,
        src: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    color: [
      {
        id: 1,
        col: "վարդագույն",
        img: "https://fabrikastore.am/image/cache/catalog/x298423,P20,282,29-500x500.JPG.pagespeed.ic.9r4_2foWXm.webp",
      },
      {
        id: 2,
        col: "սպիտակ",
        img: "https://fabrikastore.am/image/cache/catalog/298423%20(1)-500x500.JPG",
      },
    ],
    title: "Կանացի բլուզ",
    prise: 5900,
  },
];

data.forEach((item)=>{
  console.log(uuidv4(), '1234');
  item.id=uuidv4()
})

console.log(data, '444444');

localStorage.setItem("data", JSON.stringify(data));
const localStorageData = JSON.parse(localStorage.getItem("data"));

export default localStorageData;
