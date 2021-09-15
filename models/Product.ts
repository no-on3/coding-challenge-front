// interface IProduct {
//     name: string
//     price: number
//     description: string
//   }
import CategoryDTO from './Category';
  export default class ProductDTO {
    id : number
    name: string
    price: number
    description: string
    available: number
    category : CategoryDTO
    created_at_formatted? : string
    created_at? : string
    updated_at_formatted? : string
    updated_at? : string


    constructor(body: Record<string, any>) {

      this.id     = body.id;
      this.name     = body.name;
      this.available     = body.available;
      this.price = body.price;
      this.description = body.description;
      this.category = body.category;
    }
  }
  