import { format, parse } from "date-fns";

export const formatDate = (date: string, fromFormat: string, toFormat: string): string => {
    const newDate = parse(date, fromFormat, new Date());
    return format(newDate, toFormat).toString();
}