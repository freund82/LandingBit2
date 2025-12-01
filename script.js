// Обработка формы заявки
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bookingForm');
  const modal = document.getElementById('successModal');
  const closeModal = document.querySelector('.close-modal');

  // Обработка отправки формы
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Получаем данные формы
    const formData = {
      name: document.getElementById('name').value,
      contact: document.getElementById('tel').value,
      personalData: document.getElementById('personalData').checked,
      confidence: document.getElementById('confidence').checked,
    };

    // Валидация
    if (
      !formData.name ||
      !formData.contact ||
      !formData.personalData ||
      !formData.confidence
    ) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    // Здесь можно отправить данные на сервер
    console.log('Данные формы:', formData);

    // Показываем модальное окно успеха
    modal.style.display = 'block';

    // Очищаем форму
    form.reset();

    // Можно отправить данные на сервер через fetch
    // fetch('/api/booking', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     modal.style.display = 'block';
    //     form.reset();
    // })
    // .catch(error => {
    //     console.error('Ошибка:', error);
    //     alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
    // });
  });

  // Закрытие модального окна
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Закрытие модального окна при клике вне его
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Анимация появления элементов при прокрутке
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Применяем анимацию к карточкам
  document.querySelectorAll('.offer-card, .advantage-item').forEach((item) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
  });
});
