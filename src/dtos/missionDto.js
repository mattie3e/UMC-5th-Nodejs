export const addMissionResponseDTO = (mission) => {
    return {
        reward: mission[0].reward,
        content: mission[0].content,
    }
}
