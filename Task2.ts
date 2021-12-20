class Product{
    private productId:number;
    private productName:string;
    private productUnitPrice:number;
    private productQuantity:number;
 
    constructor(productId:number=0)
    {
       this.productId=productId;
    }
 
    public get ProductId():number
    {
        return this.ProductId;
    }
 
    public set ProductName(productName:string)
    {
       this.productName=productName;
    }
    
    public get ProductName()
    {
      return this.productName;
    }
 
    public set ProductUnitPrice(productUnitPrice:number)
    {
     this.productUnitPrice=productUnitPrice;
    }
  
    public get ProductUnitPrice()
    {
     return this.productUnitPrice;
    }
    
    public set ProductQuantity(productQuantity:number)
    {
     this.productQuantity=productQuantity;
    }
  
    public get ProductQuantity()
    {
     return this.productQuantity
    }
 
    productDeatils():void
    {
        console.log(`ProductDetail: -\n Id:${this.productId}, Name:${this.productName}, Unit Price:${this.productUnitPrice}, Quantity:${this.productQuantity}\n`);
    }
 }
 
 
 let Product1:Product=new Product(1);
 Product1.ProductName="Laptop";
 Product1.ProductUnitPrice=35000;
 Product1.ProductQuantity=3;
 Product1.productDeatils();

 let Product2:Product=new Product(1);
 Product2.ProductName="Laptop";
 Product2.ProductUnitPrice=35000;
 Product2.ProductQuantity=3;
 Product2.productDeatils();