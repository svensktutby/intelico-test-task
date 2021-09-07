import React, { FC } from 'react';
import css from './index.module.scss';
import { Table } from '../components/Table';

const dataUrl = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';

export const App: FC = () => {
    return (
        <div className={css.page}>
            <div className={css.container}>
                <h1>Тестовое задание ООО Интелико Системс</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    accusamus aliquid esse ex magnam, molestiae placeat? Dolores
                    labore necessitatibus obcaecati odit possimus. Accusantium
                    aliquid deleniti incidunt labore reiciendis sint voluptatum.
                    Dolor ea eos facilis minus quibusdam? Consequuntur ducimus
                    maxime numquam?
                </p>
                <Table dataUrl={dataUrl} />
                <p>
                    Enim est explicabo id inventore laudantium nam repudiandae
                    ullam vero! A ad aliquid amet animi beatae deleniti deserunt
                    dicta distinctio dolore dolorem dolores ducimus, ea eum
                    excepturi fugiat harum illo impedit itaque iure maiores
                    maxime nisi nobis optio, quam quas quisquam rem repudiandae
                    soluta ut vel! Dicta explicabo facilis obcaecati sapiente
                    tempora.
                </p>
                <Table dataUrl={dataUrl} />
            </div>
        </div>
    );
};
