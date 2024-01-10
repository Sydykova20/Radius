let num: number =  12345;
let str: string = "abcd";
let bol: boolean = true;

type infoReturn = {
    radius: number; 
    area: number
};

type functionArea = (radius: number) => infoReturn;

const calculeitArea: functionArea = (radius)=>{
    let area = Math.PI * Math.pow(radius, 2)
    return {radius, area}
};
console.log(calculeitArea(12));

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    colors: string[];
  };
  
  const products: Product[] = [
    {
      id: 1,
      title: "Чипсы",
      description: "Соленый",
      price: 1234,
      colors: ["Желтый"],
    },
    {
      id: 2,
      title: "Шоколад",
      description: "Вкусный",
      price: 1234,
      colors: ["Черный"],
    },
  ];
  console.log(products);