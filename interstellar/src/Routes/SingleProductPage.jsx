import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader";
import axios from "axios";

function SingleProductPage() {

    const { id } = useParams();
    const [data, setdata] = useState({})
    const [loading, setloading] = useState(true);

    const desription = () => {
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
            .then((res) => {
                setdata(res.data.data);
                setloading(false);
            })
            .catch((err) => {
                console.error(err);
                setloading(false);
            });
    }

    useEffect(() => {
        desription()
    }, [])
    const { img, category, brand, details, price } = data

    return loading ? <Loader /> : (
        <div data-testid="products-container">
            <div>
                <h3 data-testid="product-brand">{brand}</h3>
            </div>
            <div >
                <img data-testid="product-image" src={img} height={400}/>
            </div>
            <div data-testid="product-category">{category}
            </div>
            <div data-testid="product-details">{details}
            </div>
            <div data-testid="product-price">{price}
            </div>

        </div>
    )
}
export default SingleProductPage