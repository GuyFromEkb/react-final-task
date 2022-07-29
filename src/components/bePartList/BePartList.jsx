import BePartItem from '../bePartItem/BePartItem'

import star from '../../assets/img/be-part-ico/star.png'
import win from '../../assets/img/be-part-ico/win.png'
import certificat from '../../assets/img/be-part-ico/certificat.png'
import gift from '../../assets/img/be-part-ico/gift.png'
import email from '../../assets/img/be-part-ico/email.png'
import vk from '../../assets/img/be-part-ico/vk.png'
import './BePartList.scss'

const items = [
    { img: star, descr: "Шанс занять 1 место — в вашем городе и по всей России" },
    { img: win, descr: "Развитие самостоятельности + свободное время для родителей ;)" },
    { img: certificat, descr: "Персональный диплом в разных номинациях каждому участнику" },
    { img: gift, descr: "Призы и скидки для подписчиков и авторизованных пользователей" },
    { img: email, descr: "Бесплатный диплом на email — через 1 день после конкурса" },
    { img: vk, descr: "Публикация работ победителей во ВКонтакте.", link: 'Подписывайтесь!' },
]

const BePartList = () => {
    return (
        <>
            <div className="be-part__list">
                {items.map((item,index) => <BePartItem key={index} {...item} />)}
            </div>

        </>
    )
}

export default BePartList