# 2 -- React Router

# ==============================

# 3 -- Browser Router

Это Router, который использует API истории HTML5 (pushState, replaceState и событие popstate) 
для синхронизации вашего пользовательского интерфейса с URL-адресом.
BrowserRouter определяет набор маршрутов и, когда к приложению, приходит запрос, 
то он выполняет сопоставление запроса с маршрутами. И если какой-то маршрут совпадает с URL запроса, 
то этот маршрут выбирается для обработки запроса.
Это основа нашего Роутинга им следует оборачивать наше приложение.

# ==============================

# 4 -- Route

Каждый маршрут представляет объект Route. Данный компонент имеет такие основные пропсы:
• path – шаблон адреса, с которым будет сопоставляться запрошенный адрес URL.
• component – компонент который будет отрисовываться при совпадении path и запрошенного адреса URL.
• exact - допускает только точное совпадение маршрута со строкой запроса. Например, строка запроса 
может представлять путь "/" или путь "/about" или путь "/contact/dsdf", и все эти пути будут соответствовать маршруту с шаблоном адреса "/". 
Но пропс exact позволяет рассматривать точное совпадение, то есть когда шаблону "/" соответствует только строка запроса "/".

# ==============================

# 5 -- Switch

Использование этой обвертки для наших компонентов Route дает возможность при совпадении запрашеемого 
URL и path выводить компонент только первого совпавшего Route. Таким образом, допустим, если у нас есть 3 компонента Route с 
path “/”, “about” и “/profile”. То при заросе адреса “/” без компонента Switch наше приложение выдлало бы все 3 компонента Home, About и Profile. 
С комопнентом Switch в таком случае на UI вывелся только компонент Home
Но, будьте внимательны, если у Route с path=“/” убрать пропс exact, то при переходе на другие страницы “/about”, ”/profile” у нас всегда будет выводиться Home.
Решение – добавить exact или переместить Route с корневым path в конец списка роутов.

# ==============================

# 6 -- Link

Link предоставляет декларативную доступную навигацию по нашему приложению.
Использование компонента Link для навигации по нашему приложению предотвращает 
обновление вкладки браузера при переходе между страницами нашего приложения.

Основной пропс этого компонента – to. Он может принимать как строку, так и объект.
С помощью объекта мы можем в поле state передать любые данные компоненту который будет отрисован по нашему роуту. 
Данный state будет доступен в пропсе location.

# ==============================

# 7 -- navLink

Компонент реализует тот же функционал что и Link за одним отличием, 
с помощью NavLink мы можем стилизовать нашу ссылку когда она соответствует текущему URL-адресу.

# ==============================

# 8 -- Redirect

С помощью Redirect можно перенаправить пользователя на другой URL. Так же при перенаправлении на другой URL 
произойдет переопределение текущего местоположения (URL) в стеке истории браузера.

# ==============================

# 9 -- hooks

# ==============================

# 10 -- useLocation

useLocation возвращает объект location, представляющий текущий URL.
При изменении URL-адреса данный хук возвращает новый location.

# ==============================

# 11 -- useHistory

Возвращает объект history, который имеет такие поля как:
• length (число) – количество записей в стеке истории;
• action (строка) – текущее действие (PUSH, REPLACE, POP);
• объект location;
• push (функция) (path, [state]) – помещает новую запись в стеке истории;
• replace (функция) (path, [state]) – заменяет текущую запись в стеке истории;
• go (функция) (n) – перемещает указатель в стеке истории по записям;
• goBack (функция) – эквивалент go(-1);
• goForward (функция) – эквивалент go(1);

# ==============================

# 12 -- useParams

Хук useParams возвращает объект с параметрами в виде ключ – значение.
