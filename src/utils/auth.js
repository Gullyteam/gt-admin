export const isAuthenticated = () => {
    // Add your authentication logic here, e.g., check for the presence of a token
    const token = localStorage.getItem('authToken');
    return !!token;
  };