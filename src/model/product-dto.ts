export class ProductDTO {
  productId!: number ;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categoryId: number;
  status: string;
  createdBy: number; // Thêm thuộc tính này
  imageUrl: string;

  constructor() {
    this.categoryId=0;
    this.name = '';
    this.description = '';
    this.price = 0;
    this.stockQuantity = 0;
    this.categoryId = 0;
    this.status = '';
    this.createdBy = 0;
    this.imageUrl = '';
  }
}
