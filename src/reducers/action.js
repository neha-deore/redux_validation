export const sData = (data) => {
    console.log("in action")
    return { type: "push_data", payload: data };
}