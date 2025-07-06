'use client'
import '@/styles/hero.scss'

export default function HeroSection(){
    return(
        <section className="hero">
            <div className="hero__container">
                <div className="hero__text">
                    <h1 className="hero__title">
                        Изучайте языки с носителями
                    </h1>
                    <p className="hero__subtitle">
                         LangLift — твой путь к беглой речи через реальное общение
                    </p>
                    <a href="#pricing" className="hero__button">
                        Начать бесплатно
                    </a>
                </div>

                <div className="hero__image">
                    <img src={"/hero-illustration.png"}></img>
                </div>
            </div>

            <div className="hero__features">
                <div className="feature">
                    <img src={"/archive-tick.svg"} alt="svg" className='svg' />
                    <p>Индивидуальные занятия</p>
                </div>
                <div className="feature">
                    <img src={"/messages-2.svg"} alt="svg" className='svg'/>
                    <p>Носители языка из 20+ стран</p>
                </div>
                <div className="feature">
                    <img src={"/diagram.svg"} alt="svg" className='svg'/>
                    <p>Прогресс с первого месяца</p>
                </div>
            </div>

             <div className="hero__cta">
                <p>Присоединяйся к 10,000+ студентам</p>
                <a href="#contact" className="hero__button hero__button--secondary">
                Создать аккаунт   
                </a>
             </div>
        </section>
    )
}