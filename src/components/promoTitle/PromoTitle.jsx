

import './PromoTitle.scss'

const PromoTitle = ({ children }) => {
    return (

        <div className="promo__left-side">
            <div className="promo__subtitle">От компании СлонУМ</div>
            <h1 className="promo__title">Всероссийский конкурс
                Детского рисунка</h1>
            <p className="promo__descr">Учавствуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех возрастов</p>
            {children}
        </div>


    )
}

export default PromoTitle