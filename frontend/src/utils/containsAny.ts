export function containsAny(text:string, substrings: string[]) {
    return substrings.some(sub => text.includes(sub));
}