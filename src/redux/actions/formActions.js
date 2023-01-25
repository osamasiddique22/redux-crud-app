export const submit = (submit) => {
    return {
        type: "submit",
        payload: submit
    };
};
export const deletePatient = (del) => {
    return {
        type: "delete",
        payload: del
    }
};
export const edited = (updatedData) => {
    return {
        type: "edited",
        payload: updatedData
    }
}