# 3 -- Списки и ключи

В React иногда приходится выводить список одинаковых компонентов с разным контентом. Это может быть как блок с картинкой 
и краткой информацией и ценой о товаре в интернет-магазине, так и блок с фотографией, автором, количеством лайков и комментариев в инстаграмме.
Поэтому мы можем воспользоваться методом Array.map(), который будет возвращать наш <ProductItem> или <InstagramPostItem>.

Каждый элемент списка должен иметь свой уникальный ключ (проп key). Он необходим для оптимизации работы React приложения.
Если данный список компонентов статичен, то как ключ можно использовать index элемента в массиве.
Если же наш список изменяемый, например мы можем добавить новый или удалить любой элемент списка, 
то как ключ нужно использовать только id элемента, которое приходит с данными из сервера.  
Идентификатор в базах данных всегда уникальный и вы можете быть точно уверены что наша программа не даст сбой из-за одинаковых ключей элементов в списке.

# ==============================

# 4 -- Фрагмент

Возврат нескольких элементов из компонента является распространённой практикой в React. 
Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.
Таким образом наша верска не будет ломаться, в тех случаях когда лишний DOM узел препятствует корректной работе стилей.

Существует сокращённая запись объявления фрагментов. Она выглядит как пустые теги.
Основное отличие сокращенной записи от React.Fragment в том что последней можно присваивать ключи (проп key).

# ==============================

# 5 --Контекст

Контекст разработан для передачи данных, которые можно назвать «глобальными» для всего дерева React-компонентов 
(например, текущий аутентифицированный пользователь, UI-тема или выбранный язык).

Обычно контекст используется, если необходимо обеспечить доступ данных во многих компонентах на 
разных уровнях вложенности. По возможности не используйте его, так как это усложняет повторное использование компонентов.

# ==============================

# 6 -- React.createContext()

Создаёт объект Context. Когда React рендерит компонент, который подписан на этот объект, 
React получит текущее значение контекста из ближайшего подходящего Provider выше в дереве компонентов.

Аргумент defaultValue используется только в тoм случае, если для компонента нет подходящего Provider выше в дереве.

# ==============================

# 7 -- Context.Provider

Каждый объект Context используется вместе с Provider компонентом, который позволяет дочерним компонентам, 
использующим этот контекст, подписаться на его изменения.
Компонент Provider принимает проп value, который будет передан во все компоненты, использующие этот 
контекст и являющиеся потомками этого компонента Provider. 
Один Provider может быть связан с несколькими компонентами, потребляю-щими контекст.

Важно!
Все потребители, которые являются потомками Provider, будут повторно рендериться, как только проп value у Provider изменится.
Потребитель (включая.contextType и useContext) перерендерится при изменении контекста, даже если его родитель, 
не использующий данный контекст, блокирует повторные рендеры с помощью shouldComponentUpdate.

# ==============================

# 8 -- Consumer

Consumer — это React-компонент, который подписывается на изменения контекста.
Consumer принимает функцию в качестве дочернего компонента. Эта функция принимает текущее значение контекста и возвращает React-компонент. 
Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider.
Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в React.createContext().

# ==============================

# 9/10 -- hooks

Хуки — это просто еще один способ описывать логику ваших компонентов. 
Он позволяет добавить к функциональным компонентам некоторые возможности, ранее присущие только компонентам на классах.

• Поддержка внутреннего состояния.
• Поддержка побочных эффектов. Например — сетевых запросов или запросов к WebSocket: подписка, отписка от каких-то каналов. 
Или, возможно, речь о запросах к каким-то другим асинхронным или синхронным API браузера.
• Дают нам доступ к жизненному циклу компонента, к его началу жизни, то есть монтированию, к обновлению его пропсов и к его размонтированию.


# ==============================

# 11 -- преимущества

• Не нужно помнить о this.
• Гибче возможности оптимизации за счет мемоизации
• Легче шарить логику состояния (кастомные хуки).

# ==============================

# 12 -- недостатки

• Нельзя использовать в компонентах на классах, только для функциональных компонентов.
• Нельзя вызывать внутри условий, циклов, вложенных функций.

# ==============================

# 13 -- useState

useState — это хук который наделяет наш функциональный компонент внутренним состоянием.
React будет хранить это состояние между рендерами. Вызов useState возвращает две вещи: текущее значение состояния и функцию для его обновления.
setState() не объеденяет измененные поля с текущим объектом состояния, как это делает классовый метод this.setState(). 
Поэтому в таких случаях используйте аргумент предыдущего состояния функции обновления состояния:

# ==============================

# 14 -- useEffect

Хук эффектадаёт нам возможность выполнять побочные эффекты в функциональном компоненте:

Если вам знакомы классовые методы жизненного цикла React, хук useEffect представляет собой совокупность методов:
•componentDidMount;
•componentDidUpdate;
•componentWillUnmount;

Еффекты выполняются один раз при каждом рендере!

Существует два распространённых вида побочных эффектов в компонентах React: компоненты, которые требуют и не требуют сброса.

# ==============================

# 15 -- не требуют сброса

• Когда мы хотим выполнить дополнительный код после того, как React обновил DOM. Например:
•  cетевые запросы;
•  изменения DOM вручную;
•  логирование;

После того, как мы запустили их, можно сразу забыть о них, ведь больше никаких дополнительных действий не требуется.

Ткм самым мы имитируем метод жизненного цикла componentDidMount().


# ==============================

# 16 -- требуют сброса

Например, предположим, что у нас есть некий модуль ChatAPI, с помощью которого мы можем подписаться на статус друга в сети.
Но при размонтировании компонента нам необходимо отписаться от статуса. Для этого мы должны в useEffect c помощью return вернуть функцию в которой будем вызывать метод отписки.
Таким образом мы сымитируем метод жизненного цикла componentWillUnmount().

# ==============================

# 17 -- useMemo

Чтобы исправить это, мы можем применить форму функционального обновления хука setState, которая позволяет указать,
 как должно меняться состояние, не ссылаясь явно на текущее состояние:

Вы можете использовать useMemo как оптимизацию производительности, а не как семантическую гарантию.
 В будущем React может решить «забыть» некоторые ранее мемоизированные значения и пересчитать их при следующем рендере, 
например, чтобы освободить память для компонентов вне области видимости экрана.

Напишите свой код, чтобы он по-прежнему работал без useMemo, а затем добавьте его для оптимизации производительности.


# ==============================

# 18/19 -- useCallback

Возвращает мемоизированный колбэк.

Передайте встроенный колбэк и массив зависимостей. Хук useCallback вернёт мемоизированную версию колбэка, 
который изменяется только, если изменяются значения одной из зависимостей. 
Это полезно при передаче колбэков оптимизированным дочерним компонен-там, 
которые полагаются на равенство ссылок для предотвращения ненужных рендеров например, shouldComponentUpdate

useCallback(fn, deps) — это эквивалент useMemo(() => fn, deps)

# ==============================

# 20 -- useRef

useRef возвращает изменяемый ref объект, свойство .current которого инициализируется переданным аргументом (initialValue). 
Возвращённый объект будет сохраняться в течение всего времени жизни компонента.

# ==============================

# 21 -- useContext

Принимает объект контекста (значение, возвращённое из React.createContext) и возвращает текущее значение контекста для этого контекста. 
Текущее значение контекста определяется пропом value ближайшего <MyContext.Provider> над вызывающим компонентом в дереве.

Когда ближайший <MyContext.Provider> над компонентом обновляется, этот хук вызовет повторный рендер с 
последним значением контекста, переданным этому провайдеру MyContext. Даже если родительский компонент использует React.memo 
или реализует shouldComponentUpdate, то повторный рендер будет выполняться, начиная c компонента, использующего useContext.

# ==============================

# 22 -- useLayoutEffect

Сигнатура идентична useEffect, но этот хук запускается синхронно после всех изменений DOM.
Используйте его для чтения макета из DOM и синхронного повторного рендеринга. Обновления, 
запланированные внутри useLayoutEffect, будут полностью применены синхронно перед тем, как браузер получит шанс осуществить отрисовку.

Предпочитайте стандартный useEffect, когда это возможно, чтобы избежать блокировки визуальных обновлений.

# ==============================

# 23 -- Кастомные хуки

Пользовательский хук — это JavaScript-функция, имя которой начинается с «use», и которая может вызывать другие хуки.
В отличие от React компонента, пользова-тельский хук не обязательно должен иметь конкретную сигнатуру. 
Мы можем решить, что он принимает в качестве аргументов, и должен ли он что-либо возвращать.
Так же как и в компонентах, убедитесь, что вы не используете другие хуки внутри условных операторов и вызываете их на верхнем уровне вашего хука.

# ==============================

# 24 -- HOC

Компонент высшего порядка — это функция, которая принимает компонент и возвращает новый компонент с уже расширенным функционалом.
HOC часто встречаются в сторонних библиотеках, например connect в Redux.
В данном примере мы расширяем функциональность нашего компонента Count и возвращаем новый компонент уже с логикой счетчика.

# ==============================

# 25 -- Порталы

Порталы позволяют рендерить дочерние элементы в DOM-узел, который находится вне DOM-иерархии родительского компонента.
Типовой случай применения порталов — когда в родительском компоненте заданы стили overflow: hidden или z-index, 
но вам нужно чтобы дочерний элемент визуально выходил за рамки своего контейнера. Например, диалоги, всплывающие карточки и всплывающие подсказки.

# ==============================

# 26 -- Error Boundary

Предохранители — это компоненты React, которые отлавливают ошибки JavaScript в любом месте деревьев их дочерних компонентов, 
сохраняют их в журнале ошибок и выводят запасной UI вместо рухнувшего дерева компонентов. 
Предохранители отлавливают ошибки при рендеринге, в методах жизненного цикла и конструкторах деревьев компонентов, расположенных под ними.

Классовый компонент является предохранителем, если он включает хотя бы один из следующих методов жизненного цикла: s
tatic getDerivedStateFromError() или componentDidCatch(). 
Используйте static getDerivedStateFromError() при рендеринге запасного UI в случае отлова ошибки. 
Используйте componentDidCatch() при написании кода для журналирования информации об отловленной ошибке.

