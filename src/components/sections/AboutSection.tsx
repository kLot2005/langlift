import '@/styles/about.scss'

export default function AboutSection(){
    return (
        <section className='about' id='about'>
            <h2 className='about__heading'>О проекте</h2>
            <div className='about__image-container'>
                <img src={"/about-image.png"} alt="img" className='about__image'/>
                <div className='about__overlay-text'>
                    Мы верим,<br /> что живое общение
                    ключ к освоению языка
                </div>
            </div>
        </section>
    )
}