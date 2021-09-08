export const getLocaleDate = (time: string): string =>
    new Date(time).toLocaleDateString('ru-RU', {
        timeZone: 'Europe/Minsk',
    });
