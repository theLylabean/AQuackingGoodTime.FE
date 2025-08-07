
const baseUrl = 'http://localhost:3001/api';

const createUser = async () => {
    try {
        const res = await fetch(`${baseUrl}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name, last_name, username, email, password }),
      });
      if (!res.ok) throw new Error('Registration failed');
      const data = await res.json();

      localStorage.setItem('token', data.token);
      localStorage.setItem('authToken', data.token)
      setToken(data.token);
      navigate('/account');
    } catch (error) {
        console.error({ error: 'Error creating new user'})
    }
}

const getProducts = async () => {
    try {
        const res = await fetch(`${baseUrl}/products`);
        const result = await res.json();
        return result;
    } catch (error) {
        console.error({ error: 'Error getting products. '})
    }
}

const getSingleProduct = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/products/${id}`);
        const result = await res.json();
        return result;
    } catch (error) {
        console.error({ error: 'Error getting product by id.'})
    }
}

const getUserReviews = async (token) => {
    try {
        const res = await fetch(`${baseUrl}/users/reviews`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        const result = await res.json();
        return result;
    } catch (error) {
        console.error({ error: 'Error getting review by user id.'})
    }
}

export { getProducts, getSingleProduct, getUserReviews, createUser }