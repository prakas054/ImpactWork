class Customer
{
    CustId:number;
    CustName:string;
    CustCity:string;


    constructor(custId:number=0, custName:string="", custCity:string="")
    {
        this.CustId= custId;
        this.CustName= custName;
        this.CustCity = custCity;
    }

    public showDetails()
    {
        console.log(`Customer Details :: Id:${this.CustId}, Name:${this.CustName}, City:${this.CustCity} \n-----------------`);
    }
}

let c1:Customer = new Customer();
c1.showDetails();
let c2:Customer = new Customer(10256);
c2.showDetails();
let c3:Customer = new Customer(10256, "Jack");
c3.showDetails();
let c4:Customer = new Customer(10256, "Jack", "pune");
c4.showDetails();