export const API = {
    async getNBRBCourses(url: string): Promise<NBRBCourse[]> {
        const data = await fetch(url);
        return await data.json();
    },
};

export type NBRBCourse = {
    Cur_ID: number;
    Date: string;
    Cur_Abbreviation: string;
    Cur_Scale: number;
    Cur_Name: string;
    Cur_OfficialRate: number;
};
