import {ReactNode} from 'react';

const IframeItem = (): ReactNode => {
    // const ref = useRef(crypto.randomUUID());

    return (
        <div>
            <iframe width={420} height={800}
                    src={`https://iframe.kion.neurotales.ipst-dev.com/mainGeneration?iframe=true&child_age=1&child_gender=д&pref_visible=0&bgc_visible=0&moral_visible=0&chd_visible=0&background_characters=%D0%9A%D0%B0%D1%80%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9&moral=%D0%91%D1%8B%D1%82%D1%8C%20%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0&preferences=%D0%9E%D0%BD%20%D0%BB%D1%8E%D0%B1%D0%B8%D1%82&child_name=Nast&user_id=404&theme=dark`}/>
        </div>
    );
};

export default IframeItem;
