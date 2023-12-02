export const addStoreResponseDTO = (store) => {
    return {
        name: store[0].name,
        registerNumber: store[0].register_number,
    }
}

export const addReviewResponseDTO = (review) => {
    return {
        star: review[0].star,
        content: review[0].content,
    }
}
