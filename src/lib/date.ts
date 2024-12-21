export function toShamsiDate(date: string | Date) {
    return new Date(date).toLocaleDateString("fa-IR", {
        // weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}