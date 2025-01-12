export const getAllImages = async () => {
    const response = await fetch("http://localhost:8080/api/v1/movies");
    const data = await response.json();
    return data;
};

export const getSingleImage = async (id) => {
    const response = await fetch(`http://localhost:8080/api/v1/movies/${id}`);
    const data = await response.json();
    return data;
};