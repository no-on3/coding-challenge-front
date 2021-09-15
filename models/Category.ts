// interface IProduct {
//     name: string
//     price: number
//     description: string
//   }

  export default class CategoryDTO {
    id : number
    name: string
    created_at_formatted? : string
    created_at? : string
    updated_at_formatted? : string
    updated_at? : string

    constructor(body: Record<string, any>) {

      console.log({body})
      this.id     = body.id;
      this.name     = body.name;
    }
  }
  