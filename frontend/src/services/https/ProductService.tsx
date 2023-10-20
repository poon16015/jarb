import axios from 'axios';



export class ProductService{
    private static URL:string ='http://localhost/PHP-API/'
    public static getAllProduct(){
        let ProductURL:string = `${this.URL}/read.php`
        return axios.get(ProductURL)

    }
}