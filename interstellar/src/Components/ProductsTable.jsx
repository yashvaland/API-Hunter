import ProductCard from "./ProductCard"

function ProductsTable({ data }) {

    return (
        <table border="1px">
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {/* map through the data */}
                {data.map((el, index) => (
                    <ProductCard key={el.id} id={el.id} category={el.category} brand={el.brand} price={el.price} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
}

export default ProductsTable