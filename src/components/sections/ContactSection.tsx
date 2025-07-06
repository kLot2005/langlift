'use client'
import '@/styles/contact.scss'

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className='contact__text'>
        <h2 className="contact__title">Связаться с нами</h2>
        <p className='contact__subtitle'>Мы ответим в течение 24 часов</p>
      </div>


      <div className="contact__content">
         <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Ваше имя" required />
          <input type="email" name="email" placeholder="Ваш Email" required />
          <textarea name="message" placeholder="Ваше сообщение..." rows={4} required />
          <button type="submit">Отправить</button>
        </form>

        <div className="contact__info">
          <p><strong>Email:</strong> info@langlift.kz</p>
          <p><strong>Телефон:</strong> +7 700 123 45 67</p>
          <p><strong>Telegram:</strong> @langlift</p>
        </div>
      </div>
    </section>
  )
}
