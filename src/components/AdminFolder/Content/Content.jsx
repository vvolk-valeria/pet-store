import { useEffect, useState } from "react";
import { getAllCards } from "../../../redux/cards/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCards } from "../../../redux/cards/selectors";
import css from "./Content.module.scss"

const Content = () => {
    const dispatch = useDispatch();
    const allCards = useSelector(selectCards);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getAllCards())
            .then(() => setIsLoading(false))
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [dispatch]);
    

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!allCards || !allCards.content || allCards.content.length === 0) {
        return <div>No data available.</div>;
    }
    console.log(allCards)

    return (
        <div className={css.productContainer}>
            <div className={css.firstLine}>
                <h2>Content</h2>
                <div>Quick search</div>
                <button>Create</button>
            </div>
            <div>
                Sort by
            </div>
            <div className={css.columnHeaders}>
                <p>Image</p>
                <p>Name</p>
                <p>Category</p>
                <p>Price</p>
                <p>Discount</p>
                <p>Brand</p>
                <p>New</p>
                <p>Available</p>
                <p></p>
            </div>
            {allCards.content.map((item) => (
                <div key={item.id} className={css.productRow}>
                    <div className={css.picture}>
                        {item.images && item.images.length > 0 && (
                            <img src={item.images[0].filePath} alt="" />
                        )}
                    </div>
                    <div>{item.name}</div>
                    <div>{item.category.name}</div>
                    <div>${item.price}</div>
                    <div>${item.priceWithDiscount ? item.priceWithDiscount : 0}</div>
                    <div>{item.brand ? item.brand.name : "No brand"}</div>
                    <div>{item.newArrival ? 'Yes' : 'No'}</div>
                    <div>{item.notAvailable ? 'In stock' : 'Out of stock'}</div>
                    <div>R/D</div>
                </div>
            ))}
        </div>
    );
}

export default Content;