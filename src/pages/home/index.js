import React, { useEffect, useState } from 'react'
import API from '../../common'
import Category from '../../components/category'
import Gallery from '../../components/gallery'
import ExploreOurProducts from '../../components/exploreourproducts'
import Instagram from '../../components/instagram'
import Newsletter from '../../components/newsletter'

function Home() {
    //ana sayfada ürünleri göstermek için bunu kullanıyorum.
    const [HomeData, setHomeData] = useState([])

    //Ana sayfa limitleri göstermek için bunu
    const [homeDataLimit, setHomeDataLimit] = useState([])




    //Sayfa açıldığı zaman ilk bu çalışır. eğer useLayoutEffect yoksa. (uselayoutefect bu sayfada yok.)
    useEffect(() => {
        API.get(`/products`).then(({ data }) => { // response => response.data demek yerine ({data}) ile direkt dataya ulaşabiliriz.
            const { limit, products, skip, total } = data //destructuring js
            setHomeData(products)

            // let productNewData = [];

            // //Tüm datayı foreach ile döndüm
            // products.forEach((item) => {
            //     //itemlara geldim id'yi 3e böldüm sonuç 0 ise üstte oluşturduğum array let'ine datayı pushladım.
            //     if (item.id % 3 === 0) {
            //         productNewData.push(item)
            //     }
            // })

            // //Oluşan datayı yeni bir array olarak gönderdim.
            // setHomeData(productNewData)


            console.log(limit, products, skip, total, 'data çektik v2')
        })
    }, [])


    //Bu sayfada sadece home data değiştikçe çalışacak.
    useEffect(() => {
        if (HomeData) {
            console.log('burası çalıştı')
        }
    }, [HomeData])


    //birden fazla yerde aynı yapı mevcutsa card mantığı gibi düşünüp component oluştur.
    const RenderItem = ({ item }) => <div className='big-div'>
        {<p>{item.title}</p>}
    </div>

    return (
        <>
            <Category limit={4} />
            <Gallery title="Men's Latest" description="Details to details is what makes Hexashop different from the other themes." />
            <Gallery title="Women's Latest" description="Details to details is what makes Hexashop different from the other themes." />
            <Gallery title="Kid's Latest" description="Details to details is what makes Hexashop different from the other themes." />
            <ExploreOurProducts />
            <Instagram title="Social Media" description="Details to details is what makes Hexashop different from the other themes." />
            <Newsletter />
            {/* {HomeData.filter(item => item.rating > 4.1).map((item, index) => <RenderItem item={item} key={index} />)} */}
        </>
    )
}

export default Home