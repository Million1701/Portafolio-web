import React from 'react'
import ImgHead from './head/Head';
import RedesSociales from './redesSociales/RedesSociales';
import LetrasBg from './letrasbg/Letrasbg'



function ContentHeader() {
    return (
        <div style={{ height: '100vh' }}>
            <ImgHead title="Bienvenidos a mi portafolio." />
            <LetrasBg />
            <RedesSociales
                instagram="https://www.instagram.com/muzark_i/"
                github="https://github.com/Million1701"
                pinterest="https://www.pinterest.com.mx/danielzabala563/"
            />
        </div >
    )
}

export default ContentHeader