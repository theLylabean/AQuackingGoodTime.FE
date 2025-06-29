

const Searchbar = ({ products, setProducts, searchTerm, setSearchTerm, setSearchResults }) => {
    const handleSearch = (e) => {
        const input = e.target.value;
        setSearchTerm(input);

        const lowerCase = input.toLowerCase();
        const filteredProducts = products.filter((product) => 
            product.title?.toLowerCase().includes(lowerCase) ||
            product.price?.toString().includes(lowerCase))
            
            if (input) {
                setSearchResults(filteredProducts);
            } else {
                setSearchResults([]);
            }
        };
        const handleBlur = () => {
            setSearchTerm('');
            setSearchResults(products);
        }

    return (
        <>
            <div className='search-container'>
                <label>
                    Search:&nbsp;
                </label>
                <input 
                    className='search-input'
                    placeholder='search by name or price'
                    type='text'
                    id='search'
                    name='search'
                    value={searchTerm}
                    onChange={handleSearch}
                    onBlur={handleBlur}
                />
            </div>
        </>
    )
}

export default Searchbar