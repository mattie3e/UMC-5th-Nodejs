export const addStoreResponseDTO = (store) => {
    return {
        name: store[0].name,
        registerNumber: store[0].register_number,
    }
}
