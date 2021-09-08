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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis delectus, dolore ducimus eos illo iusto molestias
                    voluptates. Accusamus ad adipisci amet consequuntur cumque
                    dolor dolorum eligendi eos eum explicabo fugiat illo itaque
                    laboriosam laborum laudantium modi, natus necessitatibus
                    nihil nobis non nulla odio officiis perferendis quibusdam
                    quo repellat reprehenderit repudiandae similique soluta
                    suscipit tempore unde veritatis voluptates. Atque aut
                    dolores dolorum, enim eos esse fugit iure, laborum, minus
                    nisi numquam omnis sapiente sunt tempora tempore velit
                    veniam. A, alias amet culpa debitis dolor enim laborum
                    natus, officiis placeat quaerat quam repudiandae saepe
                    veritatis vitae voluptatem! Ad aliquam architecto atque
                    dignissimos dolor dolore doloribus ducimus esse facilis id
                    laudantium libero, maiores necessitatibus nemo nihil nisi,
                    odio odit optio provident ratione saepe soluta suscipit
                    tempora, unde vero voluptates voluptatum. Aliquid assumenda
                    commodi corporis cupiditate dolores dolorum ea esse et ex
                    explicabo fugit inventore ipsa itaque laudantium magnam
                    maiores modi molestias natus nostrum, obcaecati omnis, quasi
                    qui quis quisquam reiciendis repellat repudiandae saepe sint
                    tempore tenetur unde ut vitae voluptas. Ad adipisci eaque
                    hic impedit itaque maiores minus, molestiae nemo, neque odit
                    optio porro possimus quasi ratione sunt vero, voluptatum!
                    Accusamus debitis deleniti dolor doloribus eius hic illo
                    iste, nemo officia sint, unde!
                </p>
                <Table dataUrl={dataUrl} />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    beatae cupiditate eum expedita maxime nam provident, quo
                    similique ut. Deserunt neque odio similique tempore, ut vel
                    vitae? Dolores mollitia nemo odit officiis provident quis!
                    Aperiam dolore doloribus fugiat ipsum, numquam odio quam
                    rerum sit sunt. Aspernatur fugiat illo impedit, ipsum totam
                    voluptatum. At autem dolorem mollitia nemo voluptatum. At
                    deserunt, error ipsam libero optio ut vitae. Alias commodi
                    deserunt dolores incidunt maiores minus odit perspiciatis
                    quis repellendus saepe. Ad architecto deleniti dicta ipsum
                    ratione, reprehenderit unde voluptas. Aliquam, at error
                    fugiat incidunt natus non tempore voluptate! Dicta ipsa
                    nostrum quae!
                </p>
                <Table dataUrl={dataUrl} />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores neque repellat sint sit! Ad cupiditate, facere
                    illo inventore, minus, nobis nulla quisquam recusandae
                    reprehenderit sed sunt voluptatem voluptatibus! Accusantium
                    aperiam cupiditate deleniti dignissimos, distinctio
                    doloremque dolorum ea eius eum eveniet explicabo facere illo
                    incidunt ipsa ipsum itaque labore magni maxime nisi officia
                    provident quas quibusdam quo reprehenderit sequi temporibus
                    ut! Amet aut autem culpa cum deserunt distinctio doloribus
                    eos facere fugit hic inventore laboriosam modi, nihil nobis
                    nostrum nulla odit officia porro quam quas qui quo
                    recusandae reiciendis soluta tempore temporibus totam
                    veniam. Animi aspernatur blanditiis consequatur deleniti
                    dignissimos eaque et explicabo fuga, fugit id inventore,
                    ipsam itaque nisi obcaecati odio optio perspiciatis quidem,
                    quis quos reiciendis sapiente tempora totam unde ut vel vero
                    voluptates. Cum, nulla temporibus. Atque aut cupiditate
                    dignissimos facere impedit ipsa ipsam magnam numquam
                    pariatur perspiciatis quod rem sunt, totam ullam velit
                    veniam vero vitae voluptatibus! Ab alias aliquid commodi
                    consequatur corporis, culpa cumque cupiditate eligendi et
                    facere harum ipsam iusto labore maxime, necessitatibus neque
                    nisi odio perspiciatis quaerat quas quidem reiciendis saepe
                    tempora, temporibus ut voluptas voluptate. Accusamus
                    accusantium atque consequuntur dolore eum harum incidunt
                    laudantium minus nam neque quas, quisquam sequi sint vero,
                    vitae. Aperiam consequuntur cumque delectus deleniti
                    deserunt, distinctio dolor dolorum ea earum enim, explicabo
                    harum hic ipsa magnam minima mollitia neque obcaecati,
                    praesentium quaerat quos ratione rem tenetur totam unde ut
                    vero voluptatibus? Cumque deleniti eum inventore ipsam neque
                    perferendis sequi, sint! Aliquam asperiores autem cum
                    deleniti dolor doloremque dolorum ducimus, ea et expedita
                    neque officiis repellendus sapiente ullam unde veniam
                    voluptas voluptatum! Alias aliquam corporis cupiditate
                    deserunt distinctio dolor dolorum eaque eius eum ex
                    exercitationem fuga impedit ipsa ipsam ipsum itaque modi
                    nihil odio officia omnis pariatur, porro provident quaerat
                    quia quos reiciendis reprehenderit rerum sapiente sit soluta
                    vitae voluptatum?
                </p>
            </div>
        </div>
    );
};
