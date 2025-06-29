import { useEffect } from 'react';
import { getProducts } from '../../api/index.js';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import SearchBar from './Searchbar.jsx';
import '../../css/products.css';


const Products = ({ products, setProducts, setSingleProduct, searchTerm, setSearchTerm, searchResults, setSearchResults }) => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleClick = (product) => {
        setSingleProduct(product);
        setSearchTerm('');
        setSearchResults([]);
        navigate(`/products/${product.id}`);
    };

    const handleAddToCart = async (product) => {
    try {
        const result = await addToCart(product.id);
        if (result) {
            console.log("Item added to cart:", result);
        } else {
            console.warn("Failed to add item to cart.");
        }
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
};


    useEffect(() => {
        const getProductsApi = async () => {
            const response = await getProducts();
            setProducts(response);
        };
        getProductsApi();
    }, []);

    return (
        <>
            <div className='products-header'>
                <p>
                    Welcome to our products page! You'll find a wide variety of Rubber Duckies that are fun to collect or give as a gift! More Duckies will be added soon, so stay tuned to see new products!
                </p>
                <br />
                <SearchBar
                    products={products}
                    setProducts={setProducts}
                    searchResults={searchResults}
                    setSearchResults={setSearchResults}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <br />
                <br />
            </div>
            <div className='products-page'>
                <div className='products-container'>
                    {
                        searchResults?.length > 0 ? (
                            searchResults.map((product) => {
                                const { id, title, image_url, price } = product;
                                if (!product || !product.id || !product.title) return null;
                                return (
                                    <>   
                                        <div key={id} className='product-row'>
                                            <img className='product-image' src={image_url} />

                                            <div className='product-info'>
                                                <h3>{title}</h3>
                                                <p>Price: ${price}</p>
                                                <button onClick={() => handleClick(product)}>More Info</button>
                                                    &nbsp;
                                                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                            </div>
                                            <hr className='product-divider' />
                                        </div>
                                    </>
                                );
                            })
                        ) : (
                            Array.isArray(products) && products.map((product) => {
                                const { id, title, image_url, price } = product;
                                if (!product || !product.id || !product.title) return null;
                                return (
                                    <>  
                                        <div key={id} className='product-row'>
                                            <img className='product-image' src={image_url} />

                                            <div className='product-info'>
                                                <h3>{title}</h3>
                                                <p>Price: ${price}</p>
                                                <button onClick={() => handleClick(product)}>More Info</button>
                                                    &nbsp;
                                                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                            </div>
                                            <hr className='product-divider' />
                                        </div>
                                    </>
                                );
                            })
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Products;