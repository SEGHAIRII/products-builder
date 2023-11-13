import {v4 as uuid} from "uuid";
import img1 from "./assets/2024-lamborghini-revuelto-127-641a1d518802b.jpg";
import img2 from "./assets/Untitled.jpg";
import img3 from "./assets/fefe.jpg";
import img4 from "./assets/photo-1605559424843-9e4c228bf1c2.avif";
import IproductCard from "./interfaces/productCard";
let productList: IproductCard[] = [{
  id:uuid(),
  img:img1,
  alt:"an image",
  title:"Lamborghini",
  description:"lamborghini galardo hhhhhhhhh",
  price:500
},{
  id : uuid(),
  img:img2,
  alt:"kach tomobil",
  title:"Tomobil m9awda",
  description:"imagini teksab tomobil kima hadi",
  price:800
},
{
    id:uuid(),
  img:img3,
  alt:"an image",
  title:"volsvagen",
  description:"volsvagen m9awda hhhhhhhhh",
  price:200
},
{
    id:uuid(),
  img:img4,
  alt:"another car",
  title:"tomobil mrabba",
  description:"ensa la ksabtiha hhhhhhhhh",
  price:1400
}
]

export default productList;