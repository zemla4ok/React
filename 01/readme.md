# 3 -- React. Введение

React - это декларативная JavaScript библиотека для создания пользовательских интерфейсов.

Основные концепции:
• компонентный подход;
• однонаправленный поток данных;
• “виртуальный” DOM;
Преимущества:
• переиспользование компонентов;
• возможность хранения данных в стейте компонента;
• быстрота (благодаря Virtual DOM);
• простота (из-за JSX);


# ==============================

# 4 -- Настройка окружения

Если вы хотите быстро создать новое React приложение, используйте Create React App.
Для этого вам необходимо сначала установить Node.js. Рекомендуется устанавливать последнюю LTS версию.

Данный инструмент настраивает среду для использования новейших возможностей JavaScript, оптимизирует приложение для продакшена и обеспечивает комфорт во время разработки.

# ==============================

# 5 -- JSX

JSX— это расширение языка JavaScript (синтаксический сахар). 
Который напоминает язык шаблонов, наделённый силой JavaScript. 
С помощью JSX описывать UI компонента стало куда проще.

JSX компилируется c помощью Bable в React.createElement().

# ==============================

# 6 -- Типы компонент

Компоненты в React по спобобу создания разделяют на классовые – объявленны как классы. 
И функциональные – как функции.

Так же компоненты разделяют на stateless – компоненты которые не несут в себе какой-либо логики, кроме отрисовки. 
И statefull – компоненты которые помимо отрисовки несут в себе 
какую-то логику (например обработку событий или получение данных с сервера) имеют состояние.

По типу управления компоненты бывают управляемыми и неуправляемыми. 
В управляемых компонентах данные форм (form, input) обрабатываются самим компонентом (с помощью обработчиков) 
и они хранятся в state компонента. 
В неуправляемых компонентах данных формы храняться в DOM и вместо того чтобы писать обработчик события 
для каждого поля input мы можем считывать эти данные прямо из DOM с помощью Ref (React.createRef() или useRef()).

# ==============================

# 7/8 -- Классовые компоненты

•Используют методы жизненных циклов.
•Для управления состоянием используют this.setState(state, [callback]).
•Более сложные для понимания новичкам.
•Считаются устаревшими. Все еще встречаются в проектах. Команда React разработчиков рекомендует писать новый код на функциональных компонентах.

# ==============================

# 9/10 -- Функциональные компоненты

• Используют Hooks (Хуки).
• Более простые для понимания.

# ==============================

# 11 -- State

Компоненты в React могут иметь свой state для хранения в нем состояния.
Состоянием компонента можно управлять с помощью функции this.setState(state, [callback]).
Данная функция добавляет в очередь изменения состояния компонента. Так же она указывает React, 
что компонент и его дочерние элементы должны быть повторно отрисованы с уже обновленным состоянием.
Функция this.setState(state, [callback]) является асинхронной.

1.Первый аргумент setState() может быть как объектом нового состояния так и функцией. 
Если ваше новое состояние основывается на значении предыдущего состояния, 
то во избежание багов всегда передавайте в качестве первого аргумента функцию.
2.Функция, как первый аргумент this.setState(), в качестве аргументов получает предыдущее состояние state 
и обновленные props компонента. Для того чтобы произошла перерисовка компонента данная функция должна вернуть объект с новым состоянием.
3.Если нам необходимо по тем или иным причинам избежать перерисовки, то данная функция должна вернуть null.
4.Вторым аргументом this.setState() принимает callback функцию которая ввыполниться сразу после завершения обновления состояния.
5.Никогда не вызывайте this.setState() в конструкторе – иначе вы получите ошибку «Can only update a mounted or mounting component». 
Поэтому для инициализации переменных внутри конструктора следует использовать только this.state.

# ==============================

# 12 -- Props

Компоненты в React могут иметь свойства (props). Пропсы это данные которые родительский компонент может передать дочернему.
Пропсы нельзя изменять и мутировать. В React есть одно обязательное правило - компоненты обязаны вести себя как чистые функции по отношению к своим пропсам.

# ==============================

# 13 -- Ref

С помощью Ref’ов мы можем получить прямой доступ к DOM объекту, либо к компоненту.
Ref’ы часто использую для того чтобы имплементировать такой функционал как:
• Фокус на указанный DOM объект, выделение текста или воспроизведение медиа.
• Скрол (например scrollToTop)
• Чтобы получить текущие размеры DOM объекта с помощью свойст offsetWidth и offsetHeight

При передаче ссылки ref классовому компоненту, мы получаем доступ к его инстансу.
И таким образом, например, можем вызывать его методы из-под родительского компонента.


# ==============================

# 14 -- Ref особенности

• Для создания ссылки в классовых компонентах мы используем React.createRef(). В функциональных – хук useRef();
• При передачи ссылки в свойство ref наш узел DOM или инстанс компонента будет находиться в поле .current;
• Для перенаправления ссылки дочернему компоненту используем forwardRef((props, ref) => ComponentLogic);
• У ссылок есть одна малоизвестная особенность. В них можно хранить любые актуальные значения к которым нам необходим достп внутри замыкания. 
Как известно, при создании замыкания, при обращении внутри него к обычной переменной, мы получим состояние переменной на момент создания замыкания.
Что в некоторых случаях неудобно. Ссылки ломают эту логику и с помощью них мы можем получить доступ к актуальному значению (например свойства или состояния) в любое время;


# ==============================

# 15 -- ref

Пример неуправляемого компонента. Состояние данного input’а храниться в самом DOM объекте. Обработка события изменения value в данном случае ложется на сам браузер.
Мы только считываем значение с помощью ссылки (ref). 

# ==============================

# 16 -- Event handler

Обработка событий в React-элементах очень похожа на обработку событий в DOM-элементах.

Но есть несколько синтаксических отличий:
• cобытия в React именуются в стиле camelCase вместо нижнего регистра.
• c JSX вы передаёте функцию как обработчик события вместо строки.

Вместо того чтобы привязывать контекст явно с помощью .bind(), можно воспользоваться особенностями стрелочных функций и объявлять методы компонента используя их.

# ==============================

# 17 -- Virtual DOM

Виртуальный DOM (VDOM) — это концепция программирования, в которой идеальное или «виртуальное» представление 
пользовательского интерфейса хранится в памяти и синхронизируется с «настоящим» DOM при помощи библиотеки, такой как ReactDOM. 
Это процесс называется согласованием. Когда мы меняем какой-то компонент и он должен перерисоваться, то вначале изменения вносят в VDOM, 
после чего происходит сравнение(согласование) с реальным DOM и перерендаривается лишь изменившаяся часть.

Самый последний механизм согласования был введен в React 16 версии, и несет имя Fiber.

# ==============================

# 17 -- жизнецнный цикл

1)getDerivedStateFromProps -запускается перед вызовом метода render() и при каждом повторном рендеринге. 
Он используется в редких случаях, когда нам требуется производное состояние. 
Для получения более подробной информации смотрите если вам требуется производное состояние.

2)componentDidMount - выполняется после первого рендеринга, здесь выполняются AJAX-запросы, 
обновляется DOM или состояние компонента, регистрируются обработчики событий.

3)shouldComponentUpdate - определяет, должен ли компонент обновляться. Значением по умолчанию является true.
Если вы уверены в том, что компонент не нуждается в повторном рендеринге при изменении состояния или пропов, 
тогда можете вернуть ложное значение. Это подходящее место для улучшения производительности, позволяющее 
предотвратить ненужные рендеринги при получении компонентом новых пропов.

4)getSnapshotBeforeUpdate - выполняется перед применением результатов рендеринга к DOM. Любое значение, 
возвращенное этим методом, передается в componentDidUpdate(). Это может быть полезным для получения информации 
из DOM, например, позиции курсора или величины прокрутки.

5)componentDidUpdate - в основном, используется для обновления DOM в соответствии с изменением состояния или пропов. 
Не выполняется, если shouldComponentUpdate() возвращает false.

6)componentWillUnmount - используется для отмены сетевых запросов или удаления обработчиков событий, связанных с компонентом.
