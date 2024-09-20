import { Link } from "react-router-dom";

export default function ProductCard({ id, category, price, brand }) {
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td data-testid="brand">
{/* //     add Link here and keep the data-testid="brand" on Link tag */}
                <Link to={`/products/${id}`} style={{textDecoration:"none",color:"green"}}>{brand}</Link>
            </td>
            <td data-testid="category">{category}
            </td>
            <td data-testid="price">{price}
            </td>
        </tr>
    )
}
