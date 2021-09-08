import React, { ComponentProps, FC, useEffect, useRef, useState } from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import css from './index.module.scss';
import { API, NBRBCourse } from '../../api';
import { getLocaleDate } from '../../helpers';

type Props = ComponentProps<'table'> & {
    dataUrl: string;
};

export const Table: FC<Props> = ({ dataUrl }) => {
    const [courses, setCourses] = useState<NBRBCourse[] | null>(null);
    const [tr, setTrWidth] = useState(0);
    const [[td1, td2, td3, td4, td5], setTdWidth] = useState<number[]>([]);

    const trRef = useRef<HTMLTableRowElement | null>(null);
    const td1Ref = useRef<HTMLTableDataCellElement | null>(null);
    const td2Ref = useRef<HTMLTableDataCellElement | null>(null);
    const td3Ref = useRef<HTMLTableDataCellElement | null>(null);
    const td4Ref = useRef<HTMLTableDataCellElement | null>(null);
    const td5Ref = useRef<HTMLTableDataCellElement | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await API.getNBRBCourses(dataUrl);
                setCourses(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [dataUrl]);

    useEffect(() => {
        if (
            trRef.current &&
            td1Ref.current &&
            td2Ref.current &&
            td3Ref.current &&
            td4Ref.current &&
            td5Ref.current
        ) {
            setTrWidth(trRef.current.offsetWidth);
            setTdWidth([
                td1Ref.current.offsetWidth,
                td2Ref.current.offsetWidth,
                td3Ref.current.offsetWidth,
                td4Ref.current.offsetWidth,
                td5Ref.current.offsetWidth,
            ]);
        }
    }, [courses]);

    return (
        <ScrollSync>
            <table className={css.table}>
                <ScrollSyncPane>
                    <thead>
                        <tr style={{ width: tr }}>
                            <th style={{ width: td1 }}>Дата</th>
                            <th style={{ width: td2 }}>Валюта</th>
                            <th style={{ width: td3 }}>Аббревиатура</th>
                            <th style={{ width: td4 }}>Соотношение</th>
                            <th style={{ width: td5 }}>Курс</th>
                        </tr>
                    </thead>
                </ScrollSyncPane>

                <ScrollSyncPane>
                    <tbody>
                        {courses &&
                            courses.map((c) => (
                                <tr key={c.Cur_ID} ref={trRef}>
                                    <td ref={td1Ref}>
                                        {getLocaleDate(c.Date)}
                                    </td>
                                    <td ref={td2Ref}>{c.Cur_Name}</td>
                                    <td ref={td3Ref}>{c.Cur_Abbreviation}</td>
                                    <td ref={td4Ref}>{c.Cur_Scale}</td>
                                    <td ref={td5Ref}>{c.Cur_OfficialRate}</td>
                                </tr>
                            ))}
                    </tbody>
                </ScrollSyncPane>
            </table>
        </ScrollSync>
    );
};
