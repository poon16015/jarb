import { ProductInterface } from "../../interfaces/IProduct";

const apiUrl ="http://localhost:8080"

async function GetProduct() {
    const requestOptions ={
        method:"GET",
        header :{
            "Content-Type": "application/json",
        },
    };

    let res = await fetch(`${apiUrl}/product`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
        if (res.data){
            return res.data ;
        }
        else {
            return false ;
        }
    });
    return res;
}
export {GetProduct } 

