import '@/styles/pricing.scss'

const plans = [
  {
    title: 'Базовый',
    price: '9999₸/мес',
    features: ['1 урок в неделю', 'Поддержка по почте', 'Фиксированные темы'],
    highlighted: false,
  },
  {
    title: 'Профи',
    price: '19999₸/мес',
    features: ['3 урока в неделю', 'Живой преподаватель', 'Персональный план'],
    highlighted: true,
  },
  {
    title: 'Безлимит',
    price: '39999₸/мес',
    features: ['Безлимитные уроки', 'Носители языка', 'Все языки'],
    highlighted: false,
  },
]

export default function PricingSection(){
    return(
        <section className='pricing' id='pricing'>
            <h2 className='pricing__title'>Тарифы</h2>
            <div className='pricing__cards'>
                {plans.map((plan) => (
                    <div key={plan.title}
                         className={`pricing__card ${plan.highlighted ? 'highlighted' : ''}`}>
                            <h3 className='pricing__card_title'>{plan.title}</h3>
                            <p className='pricing__card-price'>{plan.price}</p>
                            <ul className='pricing__features'>
                                {plan.features.map((feature, i) => (<li key={i}>✓ {feature}</li>))}
                            </ul>
                            <button className='pricing__button'>Выбрать</button>
                    </div>
                ))}
            </div>
        </section>
    )
}