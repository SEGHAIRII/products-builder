export default interface IproductCard {
    id ?:string | undefined,
    img:string,
    alt:string,
    title:string,
    description:string,
    price:number,
    onClick:()=>void
}