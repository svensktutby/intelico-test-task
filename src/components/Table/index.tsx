import React, { FC, useEffect, useState } from 'react';
import css from './index.module.scss';
import { API, NBRBItem } from '../../api';

type Props = {
    dataUrl: string;
};

export const Table: FC<Props> = ({ dataUrl }) => {
    const [courses, setCourses] = useState<NBRBItem[] | null>(null);

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
                    <th>Head</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{JSON.stringify(courses)}</td>
                </tr>
            </tbody>
        </table>
    );
};
