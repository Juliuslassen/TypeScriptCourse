
export const createTask = (name: string, decription: string, timeEstimation: number) => {
    return {
        name,
        decription,
        timeEstimation,
        completed: false
    };
}

