export const signinResponseDTO = (user, prefer) => {
    console.log(user, prefer)
    const preferFood = []
    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].name)
    }
    return {
        email: user[0].email,
        name: user[0].name,
        preferCategory: preferFood,
    }
}
