export const addMissionResponseDTO = (mission) => {
    return {
        reward: mission[0].reward,
        content: mission[0].content,
    }
}

export const tryMissionResponseDTO = (missionStatus) => {
    return {
        mission_id: missionStatus[0].mission_id,
        status: missionStatus[0].status,
    }
}
