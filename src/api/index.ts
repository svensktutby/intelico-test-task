export const API = {
    async getNBRBCourses(url: string): Promise<NBRBItem[]> {
        const data = await fetch(url);
        return await data.json();
    },
};

export type NBRBItem = {
    Cur_ID: number;
    Date: string;
    Cur_Abbreviation: string;
    Cur_Scale: number;
    Cur_Name: string;
    Cur_OfficialRate: number;
};
