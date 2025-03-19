
export const getMinDateForPicker = (): Date => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return today;
}