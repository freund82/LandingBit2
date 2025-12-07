// Обработка формы заявки
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bookingForm');
  const modal = document.getElementById('successModal');
  const closeModal = document.querySelector('.close-modal');

  // Функция для форматирования номера телефона
  function formatPhone(phone) {
    return phone
      .replace(/\D/g, '')
      .replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3-$4-$5');
  }

  // Функция для отправки данных в CRM U-on Travel
  async function sendToUonCRM(data) {
    const crmData = {
      r_u_id: 7, // id менеджера
      u_name: data.name,
      u_phone: formatPhone(data.phone),
      u_email: data.email,
      requirements_note: data.wishes || 'Клиент оставил заявку на подбор тура',
      source: 'bitLanding',
      utm_source: 'btripgoLanding_site',
    };

    try {
      const response = await fetch('../components/com_landing/proxy.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(crmData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Ошибка отправки в CRM:', error);
      throw error;
    }
  }

  // Обработка отправки формы
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Получаем данные формы
    const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('tel').value,
      email: document.getElementById('email').value,
      wishes: document.getElementById('wishes').value,
      personalData: document.getElementById('personalData').checked,
      confidence: document.getElementById('confidence').checked,
    };

    // Валидация
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.personalData ||
      !formData.confidence
    ) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    // Показываем сообщение о загрузке
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;

    try {
      // Отправляем данные в CRM
      const crmResponse = await sendToUonCRM(formData);
      console.log('Данные успешно отправлены в CRM:', crmResponse);

      // Показываем модальное окно успеха
      modal.style.display = 'block';

      // Очищаем форму
      form.reset();
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
    } finally {
      // Восстанавливаем кнопку
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
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
