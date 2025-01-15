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

export const postReview = async (formData) => {
    const response = await fetch("http://localhost:8080/api/v1/reviews" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        });

    if(response.ok){
        const result = await response.json();
        return result;
    }
    else{
        throw new Error("Failed to post review");
    }
};