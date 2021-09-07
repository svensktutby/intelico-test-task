import React, { FC, useEffect, useState } from 'react';
import css from './index.module.scss';
import { API, NBRBCourse } from '../../api';

type Props = {
    dataUrl: string;
};

const getLocaleDate = (time: string): string =>
    new Date(time).toLocaleDateString();

export const Table: FC<Props> = ({ dataUrl }) => {
    const [courses, setCourses] = useState<NBRBCourse[] | null>(null);

    const getCourses = async () => {
        try {
            const data = await API.getNBRBCourses(dataUrl);
            setCourses(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCourses();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Валюта</th>
                    <th>Аббревиатура</th>
                    <th>Соотношение</th>
                    <th>Курс</th>
                </tr>
            </thead>

            <tbody>
                {courses &&
                    courses.map((c) => (
                        <tr key={c.Cur_ID}>
                            <td>{getLocaleDate(c.Date)}</td>
                            <td>{c.Cur_Name}</td>
                            <td>{c.Cur_Abbreviation}</td>
                            <td>{c.Cur_Scale}</td>
                            <td>{c.Cur_OfficialRate}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};
