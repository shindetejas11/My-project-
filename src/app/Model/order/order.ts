
import { Product } from 'src/app/Model/Product';

export class Order {
    id: number = 0;
    name: string = '';
    mobilenumber: string = '';
    emailid: string = '';

    address: Address = new Address()

    products: Product[] = [];

    totalprize: number = 0;
    offer: number = 0;
    finalprize: number = 0

}

export class Address {
    line1: string = ""
    line2: string = ""
    city: string = ""
    state: string = ""
    pincode: string = ""
}