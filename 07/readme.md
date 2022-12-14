# 2 -- Оптимизация

# ==============================

# 3 -- shouldComponentUpdate

Вспомним метод жизненного цикла shouldComponentUpdate. Данный метод вызывается перед рендером, 
когда компонент получает новые пропсы или состояние. Однако, мы должны всегда помнить, что он не вызывается при первом ренедере компонента и когда используется forceUpdate().
Он принимает 2 аргумента новые значения пропсов и стейта - nextProps и nextState.
Таким образом мы можем написать внутри данного метода свою логику оптимизации компонента делая сравнения между новыми просами и стейтом а 
так же текущими this.props и this.state, вернув true – если мы хотим чтобы ререндер компонента произошел, или false – что бы нет.
Но в документации React предостерегают не делать глубокого сравнения или использовать JSON.stringify(), 
так как это неэффективно и плохо повлияет на производительность.

В примере на предыдущем слайде, если убрать определение метода shoulComponentUpade, 
то каждый клик по кнопке будет вызывать перерисовку обеих счетчиков (рис. 1).
Если же мы вернем оперделение метода shoulComponentUpade, 
тогда ререндер будет происходить только того счетчика у которого значение value будет отличаться от предыдущего (рис. 2).

# ==============================

# 4 -- pureComponent

Если же у вас нету надобности прописывать сложную логику сравнения пропсов и стейтов в shouldComponentUpdate 
и для их проверки хватает банального поверхностного сравнения, то лучше всего использовать React.PureComponent.
Поскольку проверка «поверхностная», то полного сравнения объектов не происходит, сравниваются лишь ссылки на них. 
Это значит, что если вы, например, не передадите новые пропсы, а просто измените старые “напрямую”, 
то никакого обновления не произойдет, так как ссылка останеться преждней.
Эта проблема решается с помощью иммутабельности данных. Или простыми словами – не изменяйте то что есть, а создавайте новое на основе старого. 
И тут нам spread оператор будет куда кстати.
Вторая проблема PureComponent в том, что он может блокировать обновления всех потомков. 
Поэтому использовать в качестве родительского компонента не стоит.

# ==============================

# 5 -- React.memo

React.memo это компонент высшего порядка, созданный для предотвращения лишних рендеров функциональных компонентов.
В отличии от React.PureComponent, React.memo затрагивает только изменения пропсов.
React.memo принимает в себя два аргумента, первый это компонент, а второй – необязательный, функция сравнения.
Функция сравнения имеет доступ к двум аргументам это предыдущие пропсы и новые пропсы. 
Если наша функция возвращает false – то происходит ререндер компонента, если true – компонент не перерисовывается.
Если второй аргумент не передавать, то будет проводиться «поверхностная» сверка пропсов.

# ==============================

# 6 -- useMemo

Как мы помним хук useMemo мемоизирует полученые значения, и делает перерасчет только тогда когда поменяются зависимости.
В нашем случае мемоизированное useMemo объект будет всегда иметь одну и ту же ссылку. 
А значит дочерний компонент которому мы передадим это значение не будет лишний раз ререндериться

# ==============================

# 7 -- useCallback

Как и useMemo useCallback тоже мемоизирует, но только уже функцию. 
Таким образом при неизменных зависимостях мы получаем ссылку на одну и ту же функцию, 
что так же предотвращает обновление дочернего компонента которому эту функцию мы прокидываем.

# ==============================

# 8 -- Reselect

Reselect – это библиотека для создания мемоизированных селекторов. Эта библиотека очень хорошо дополняет Redux 
и за счет мемоизации предотвращает ненужные перерисовки и пересчеты полученных данных, что ускоряет React-приложение в целом.
Пример селектора мы можем видеть на скрине справа. Как мы видим Reselect предоставляет функцию createSelector 
для создания мемоизированных селекторов.
В качестве аргументов createSelector принимает массив входных селекторов и функцию преобразования.
Если дерево состояний Redux мутируется таким образом, что послужит причиной изменения значения входного селектора, 
селектор вызовет свою функцию преобразования со значениями входных селекторов в качестве аргументов и вернёт результат. 
Если значения входных селекторов такие же как и в предыдущем вызове селектора, он вернёт ранее вычисленное значение, вместо того чтобы вызывать функцию преобразования.

