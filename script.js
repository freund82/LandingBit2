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

  /*Travelata Hot Tours*/
const toroperators = {
  81: 'Интурист',
  11: 'Библиоглобус',
  5: 'Анекс',
  98: 'Русский экспресс',
  50: 'TEZ TOUR',
};

const countries = {
  Россия: 76,
  Турция: 92,
  Таиланд: 87,
  Вьетнам: 22,
  Египет: 29,
  Абхазия: 1,
  ОАЭ: 68,
  Китай: 44,
  Куба: 48,
  Мальдивы: 56,
  Индонезия: 34,
};

const resortsName = {
  1: 'Гагра',
  6: 'Сухум',
  950: 'о.Хайнань',
  2873: 'Санья',
  3899: 'Цандрипш',
  5: 'Пицунда',
  417: 'Нячанг',
  428: 'Фантьет',
  597: 'Хургада',
  598: 'Шарм-эль-Шейх',
  681: 'о.Бали',
  1001: 'Варадеро',
  2159: 'Аланья',
  2161: 'Анталья',
  2162: 'Белек',
  2163: 'Бодрум',
  2167: 'Даламан',
  2168: 'Дидим',
  2175: 'Кемер(Центр)',
  2178: 'Мармарис',
  3833: 'Сиде',
  3831: 'Сиде(Соргун)',
  3835: 'Кемер(Бельдиби)',
  3837: 'Кемер(Кириш)',
  3838: 'Кемер(Гейнюк)',
  3839: 'Кемер',
  2907: 'Сиде(Манавгат)',
  1545: 'Сочи(Адлер)',
  1610: 'Геленджик',
  1633: 'Ессентуки',
  1804: 'Пятигорск',
  4015: 'Сочи(Имеритинский)',
  1704: 'Сочи(Лазаревское)',
  3123: 'Сочи(Лоо)',
  1385: 'Шарджа',
  1379: 'Дубай',
  1383: 'Умм Аль Кувейн',
  1384: 'Фуджейра',
  1381: 'Рас-эль-Хайма',
  951: 'Пекин',
  980: 'Шанхай',
  4175: 'Пхукет(Камала)',
  4176: 'Пхукет(Карон)',
  4177: 'Пхукет(Ката)',
  4182: 'Пхукет(Най Янг)',
  4185: 'Пхукет(Патонг)',
  4188: 'Пхукет(Чалонг)',
  4191: 'Пхукет',
  2100: 'Паттайя',
  1940: 'Сейшелы(о.Маэ)',
  1148: 'Северный Мале Атолл',
  1152: 'Южный Мале Атолл',
};

var mealType = [
  { id: 1, name: 'Всё включено' },
  { id: 2, name: 'Завтрак' },
  { id: 3, name: 'Завтрак, обед, ужин' },
  { id: 5, name: 'Завтрак+ужин' },
  { id: 7, name: 'Без питания' },
  { id: 8, name: 'Ультра Всё Включено' },
  { id: 9, name: 'По программе' },
  { id: 10, name: 'Завтрак + обед' },
  { id: 11, name: 'Все включено (без алкоголя)' },
  { id: 12, name: 'Обед' },
  { id: 13, name: 'Ужин' },
  { id: 14, name: 'Комплекс лечебных процедур, без питания' },
  { id: 15, name: 'Завтрак + комплекс лечебных или SPA процедур' },
  { id: 16, name: 'Завтрак и ужин + комплекс лечебных или SPA процедур' },
  { id: 17, name: 'Завтрак, обед и ужин + комплекс лечебных или SPA процедур' },
  { id: 4, name: 'Завтрак, обед, ужин, с напитками' },
  { id: 6, name: 'Завтрак+ужин с напитками' },
];

// Функция для форматирования даты в YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

var hotTours = document.querySelector('#offers-grid');

// Завтрашняя дата
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// Дата: завтра + 30 дней
const tomorrowPlus30Days = new Date(tomorrow);
tomorrowPlus30Days.setDate(tomorrow.getDate() + 30);

// Форматируем даты
const fromDate = formatDate(tomorrow);
const toDate = formatDate(tomorrowPlus30Days);

async function fetchCountryData(countryName, resortIds = []) {
  const countryId = countries[countryName];
  const resortsQuery =
    resortIds.length > 0 ? resortIds.map((id) => `resorts[]=${id}`).join('&') : '';

  const url = `https://api-gateway.travelata.ru/statistic/cheapestTours?countries[]=${countryId}&departureCity=2&nightRange[from]=6&nightRange[to]=7&touristGroup[adults]=2&touristGroup[kids]=0&touristGroup[infants]=0&hotelCategories[]=2&hotelCategories[]=3&hotelCategories[]=4&hotelCategories[]=5&hotelCategories[]=7&hotelCategories[]=8&hotelCategories[]=9&hotelCategories[]=12&hotelCategories[]=16&hotelCategories[]=17&hotelCategories[]=20&hotelCategories[]=21&${
    countryName === 'Турция' || countryName === 'Египет'
      ? `meals[]=1&meals[]=8&meals[]=11}`
      : 'meal=all'
  }&checkInDateRange[from]=${fromDate}&checkInDateRange[to]=${toDate}${
    resortsQuery ? '&' + resortsQuery : ''
  }`;
  const response = await fetch(url);
  return {
    countryName: countryName,
    toursData: await response.json(),
  };
}

// Создаем массив всех запросов
const requests = [
  fetchCountryData('Россия', [4015, 1704, 3123]),
  fetchCountryData('Россия', [1633, 1804]),
  fetchCountryData('Россия', [1610]),
  fetchCountryData('Россия', [1545]),
  fetchCountryData('Абхазия', [1, 6, 3899, 5]),
  fetchCountryData('Турция', [2159, 2163, 2168, 2178]),
  fetchCountryData('Турция', [2161, 2907, 3831, 3833]),
  fetchCountryData('Турция', [2175, 3837, 3838, 3839]),
  fetchCountryData('Турция', [2162]),
  fetchCountryData('Египет', [597]),
  fetchCountryData('Египет', [598]),
  fetchCountryData('ОАЭ', [1379, 1381, 1383, 1384, 1385]),
  fetchCountryData('Китай', [951, 980]),
  fetchCountryData('Таиланд', [4185, 4191]),
  fetchCountryData('Таиланд', [2100]),
  fetchCountryData('Вьетнам', [417]),
  fetchCountryData('Вьетнам', [428]),
  fetchCountryData('Китай', [950, 2873]),
  fetchCountryData('Мальдивы', [1148, 1152]),
  fetchCountryData('Индонезия', [681]),
  fetchCountryData('Сейшелы', [1940]),
  fetchCountryData('Куба', [1001]),
];

// Обрабатываем все запросы
Promise.all(requests.map((p) => p.catch((e) => null)))
  .then((results) => {
    const validResults = results.filter((r) => r !== null);
    hotTours.innerHTML = '';

    validResults.forEach(({ countryName, toursData }) => {
      const allowedOperatorIds = Object.keys(toroperators).map(Number);
      const filteredTours =
        toursData.data?.filter((tour) => allowedOperatorIds.includes(tour.operatorId)) || [];

      if (filteredTours.length > 0) {
        Results(countryName, { data: filteredTours });
      }
    });
  })
  .catch((error) => console.error('Ошибка:', error));

function Results(countryName, data) {
  var sortedTours = data.data.sort((a, b) => a.price - b.price);
  var tours = sortedTours[0];

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const months = {
      январь: 'января',
      февраль: 'февраля',
      март: 'марта',
      апрель: 'апреля',
      май: 'мая',
      июнь: 'июня',
      июль: 'июля',
      август: 'августа',
      сентябрь: 'сентября',
      октябрь: 'октября',
      ноябрь: 'ноября',
      декабрь: 'декабря',
    };
    const monthNominative = date.toLocaleString('ru-RU', { month: 'long' });
    const monthGenitive = months[monthNominative] || monthNominative;
    return `${day} ${monthGenitive}`;
  }

  const formattedDate = formatDate(tours.checkinDate);
  const resortName = resortsName[tours.resortId] || `ID: ${tours.resortId}`;
  const mealInfo = mealType.find((item) => item.id === tours.mealId);
  const mealName = mealInfo ? mealInfo.name : `Нет данных`;
  const operatorName = toroperators[tours.operatorId] || `ID: ${tours.operatorId}`;

  hotTours.insertAdjacentHTML(
    'beforeend',
    `
    <div class="offer-card">
    <div class="offer-badge">Горящий тур</div>
    <div class="offer-image" style="background-image: url(${tours.hotelPreview})"></div>
        <div class="offer-content">
      <div class="offer-content">
       <div class="offer-price">
          <strong>${tours.price.toLocaleString('ru-RU')} ₽*</strong>
        </div>
      <h3 class="offer-title">${countryName}, ${resortName}</h3>
        <p class="tour-hotel">${tours.hotelName} ${tours.hotelCategoryName}</p>
        <span class="tour-date">${formattedDate}</span>,
        <span class="offer-duration">${tours.nights} ночей</span>,
        <span>${mealName}</span>,
        <span>2 взр.</span>
        <button type="button" class="offer-btn" 
          data-hotel="${tours.hotelName}"
          data-price="${tours.price}"
          data-date="${tours.checkinDate}"
          data-nights="${tours.nights}"
          data-meal="${mealName}"
          data-operator="${operatorName}"
          data-country="${countryName}"
          data-resort="${resortName}">
          Хочу сюда!
        </button>
      </div>
    </div>
  `,
  );
}

// Инициализация модального окна и обработчиков
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.querySelector('.close-modal');
  const bookingForm = document.getElementById('booking-form');

  // Обработчик для кнопки в хедере
  document.getElementById('simple-request-btn').addEventListener('click', function () {
    // Очищаем данные о туре
    document.getElementById('tour-data').value = '';
    // Показываем модальное окно
    modal.style.display = 'block';
  });

  // Обработчик клика по кнопкам "Хочу сюда!"
  document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('book-btn')) {
      const button = e.target;
      const tourData = {
        hotelName: button.dataset.hotel,
        price: button.dataset.price,
        checkinDate: button.dataset.date,
        nights: button.dataset.nights,
        meal: button.dataset.meal,
        operator: button.dataset.operator,
        country: button.dataset.country,
        resort: button.dataset.resort,
      };

      document.getElementById('tour-data').value = JSON.stringify(tourData);
      modal.style.display = 'block';
    }
  });

  // Закрытие модального окна
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Обработка отправки формы
  bookingForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById('client-name').value,
      tel: document.getElementById('client-phone').value,
      email: document.getElementById('client-email').value,
      comments: document.getElementById('client-comments').value,
      tour_data: document.getElementById('tour-data').value,
    };

    try {
      // 1. Отправка на ваш сервер (для email)
      const serverResponse = await fetch('getRequest.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!serverResponse.ok) throw new Error('Ошибка отправки на сервер');

      // 2. Отправка в CRM
      let crmResponse;
      if (formData.tour_data) {
        // Если есть данные о туре - отправляем полную заявку
        const tourData = JSON.parse(formData.tour_data);
        crmResponse = await sendToUonCRM({
          name: formData.name,
          phone: formData.tel,
          email: formData.email,
          comment: formData.comments,
          tour_data: tourData,
        });
      } else {
        // Если данных о туре нет - отправляем простую заявку
        crmResponse = await sendSimpleRequestToUonCRM({
          name: formData.name,
          phone: formData.tel,
          email: formData.email,
          comment: formData.comments,
        });
      }

      alert('Заявка успешно отправлена!');
      modal.style.display = 'none';
      bookingForm.reset();
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке заявки: ' + error.message);
    }
  });

  // Функция для отправки в CRM u-on travel
  async function sendToUonCRM(data) {
    // Вспомогательные функции для форматирования
    function formatPhone(phone) {
      return phone
        .replace(/\D/g, '')
        .replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3-$4-$5');
    }

    function formatDateForCRM(dateString) {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0];
    }

    // Формируем данные в формате, который ожидает CRM
    const crmData = {
      //id менеджера
      r_u_id: 7,

      // Основные поля клиента
      u_name: data.name,
      u_phone: formatPhone(data.phone),
      u_email: data.email,

      // Данные о туре
      date_from: formatDateForCRM(data.tour_data.checkinDate),
      nights_from: data.tour_data.nights,
      touroperator_id: data.tour_data.operator,

      // Комментарий
      requirements_note: `${data.comment || ''}\n\nДанные тура:\nСтрана: ${
        data.tour_data.country
      }\nКурорт: ${data.tour_data.resort}\nОтель: ${data.tour_data.hotelName}\nДата: ${
        data.tour_data.checkinDate
      }\nНочей: ${data.tour_data.nights}\nПитание: ${data.tour_data.meal}\nЦена: ${
        data.tour_data.price
      } руб.\nТуроператор: ${data.tour_data.operator}\n`,

      // Дополнительные параметры
      source: 'bizjoytravel',
      utm_source: 'bizjoytravel_site',
      /*request_date: new Date().toISOString(),*/
    };

    const response = await fetch('https://bizjoytravel.ru/proxy.php', {
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
  }

  // Функция для отправки простой заявки (без тура) в CRM u-on travel
  async function sendSimpleRequestToUonCRM(data) {
    function formatPhone(phone) {
      return phone
        .replace(/\D/g, '')
        .replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3-$4-$5');
    }

    const crmData = {
      r_u_id: 7, // id менеджера
      u_name: data.name,
      u_phone: formatPhone(data.phone),
      u_email: data.email,
      requirements_note: data.comment || 'Клиент оставил заявку на подбор тура',
      source: 'bizjoytravel',
      utm_source: 'bizjoytravel_site',
    };

    const response = await fetch('https://bizjoytravel.ru/proxy.php', {
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
  }
});// Окончание travelata

  //Окончание DOM Content Loaded
});
