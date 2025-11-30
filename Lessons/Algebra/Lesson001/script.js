// Данные слайдов для урока "Одночлен"
const slidesData = [
    // Слайд 1 - Целеполагание
    {
        title: "Целеполагание",
        content: `
            <div class="goal-setting-container">
                <h2 class="goal-title">Наши цели на урок</h2>
                <div class="goals-list">
                    <div class="goal-item">
                        <i class="fas fa-bullseye"></i>
                        <h4>Изучить понятие одночлена</h4>
                        <p>Понять, какие выражения являются одночленами, а какие нет</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-calculator"></i>
                        <h4>Освоить стандартный вид</h4>
                        <p>Научиться приводить одночлены к стандартному виду</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-superscript"></i>
                        <h4>Определять коэффициент и степень</h4>
                        <p>Находить коэффициент одночлена и определять его степень</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-balance-scale"></i>
                        <h4>Распознавать подобные одночлены</h4>
                        <p>Научиться определять, какие одночлены являются подобными</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-tasks"></i>
                        <h4>Решать практические задачи</h4>
                        <p>Применять полученные знания для решения задач с одночленами</p>
                    </div>
                </div>
                
                <div class="motivation-quote">
                    <p>"Математика - это язык, на котором написана книга природы."</p>
                    <div class="quote-author">- Галилео Галилей</div>
                </div>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 2 - Теория: Понятие одночлена
    {
        title: "Понятие одночлена",
        content: `
            <div class="content-block theory">
                <h3><i class="fas fa-lightbulb"></i> Что такое одночлен?</h3>
                <p>Рассмотрим выражения:</p>
                <div class="formula">
                    $2b; \\quad 3xy^2; \\quad -ab; \\quad m^3 \\cdot 3k^5; \\quad (3,14)^2 pq^3 \\cdot (-7)r^2t^4$
                </div>
                <p>Каждое из них представляет собой произведение чисел, переменных и их степеней.</p>
            </div>
            
            <div class="content-block definition">
                <h3><i class="fas fa-book"></i> Определение</h3>
                <p><strong>Одночлен</strong> – алгебраическое выражение, являющееся произведением цифр, переменных и их степеней.</p>
            </div>
            
            <div class="content-block example">
                <h3><i class="fas fa-check-circle"></i> Примеры одночленов</h3>
                <p>Договорились также считать одночленами все числа, любые переменные и их степени:</p>
                <div class="formula">
                    $-5; \\quad 0,3; \\quad x; \\quad t^2; \\quad 2^3$
                </div>
            </div>
            
            <div class="content-block important">
                <h3><i class="fas fa-exclamation-triangle"></i> Не являются одночленами</h3>
                <p>Выражения, которые кроме умножения и возведения в степень содержат другие действия:</p>
                <div class="formula">
                    $2a + b; \\quad x - 1; \\quad a : b; \\quad y^2 + y - 2$
                </div>
            </div>
            
            <div class="content-block definition">
                <h3><i class="fas fa-book"></i> Определения</h3>
                <p><strong>Множителями одночлена</strong> называют буквы и числа, входящие в состав одночлена.</p>
                <p><strong>Нулевой одночлен</strong> – одночлен, среди множителей которого есть число ноль.</p>
                <p>Например: $0x^2$, $0ab$</p>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 3 - Множественный выбор: Какие выражения являются одночленами?
    {
        title: "Определение одночленов",
        content: `
            <div class="multiple-choice-exercise">
                <h3><i class="fas fa-check-square"></i> Какие из выражений являются одночленами?</h3>
                
                <div class="options-container" id="monomialsOptions">
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$5xy$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$-\\frac{1}{3}a^2b^3c$</span>
                    </div>
                    <div class="option" data-correct="false">
                        <div class="checkbox"></div>
                        <span>$m + n$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$8$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$0$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$\\frac{4}{7}pk^4$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$\\frac{6m^2k^3}{11a^5}$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$b^9$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$m^4m$</span>
                    </div>
                    <div class="option" data-correct="false">
                        <div class="checkbox"></div>
                        <span>$3(a^2 - b^2)$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$-2\\frac{4}{9}aa^2b^3b^6$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$(-1\\frac{1}{8})^2 x^5 x^3 yz^{10}$</span>
                    </div>
                </div>
                
                <div class="controls">
                    <button class="btn" onclick="checkMonomials()">
                        <i class="fas fa-check-circle"></i> Проверить
                    </button>
                    <button class="btn" onclick="resetMonomials()">
                        <i class="fas fa-redo"></i> Начать заново
                    </button>
                </div>
                
                <div id="monomialsResultMessage" class="result-message"></div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Подсказка</h3>
                <p>Запомните: одночленом является выражение, которое представляет собой:</p>
                <ul>
                    <li>Произведение чисел и переменных</li>
                    <li>Любое число</li>
                    <li>Любую переменную</li>
                    <li>Любую степень переменной</li>
                </ul>
                <p>Не являются одночленами выражения, содержащие сложение, вычитание или деление на выражение с переменными.</p>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 4 - Теория: Стандартный вид одночлена
    {
        title: "Стандартный вид одночлена",
        content: `
            <div class="content-block theory">
                <h3><i class="fas fa-lightbulb"></i> Приведение к стандартному виду</h3>
                <p>Рассмотрим одночлен: $3ab^3 \\cdot \\left(-\\frac{2}{3}\\right) abc$</p>
                <p>Упростим его:</p>
                <div class="formula">
                    $3ab^3 \\cdot \\left(-\\frac{2}{3}\\right) abc = 3 \\cdot \\left(-\\frac{2}{3}\\right) aab^3 bc = -2a^2 b^4 c$
                </div>
                <p>Полученный одночлен содержит <strong>только один числовой множитель, отличный от нуля, стоящий на первом месте</strong>. Все остальные множители – это степени с <strong>различными</strong> основаниями.</p>
            </div>
            
            <div class="content-block important">
                <h3><i class="fas fa-exclamation-triangle"></i> Не стандартный вид</h3>
                <p>Выражения $a^2 \\cdot 2b^3$ и $-3x^2xy^3$ не являются одночленами стандартного вида.</p>
                <p>В первом числовой множитель не стоит на первом месте, во втором – степень с основанием $x$ встречается дважды.</p>
                <p>Приведем их к стандартному виду:</p>
                <div class="formula">
                    $a^2 \\cdot 2b^3 = 2a^2 b^3$
                </div>
                <div class="formula">
                    $-3x^2xy^3 = -3x^3y^3$
                </div>
            </div>
            
            <div class="content-block definition">
                <h3><i class="fas fa-book"></i> Определение</h3>
                <p><strong>Стандартный вид одночлена</strong> – запись одночлена в виде произведения числового множителя, записанного на первом месте, и степеней переменных с разными основаниями.</p>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Алгоритм приведения к стандартному виду</h3>
                <ol>
                    <li>Перемножить все числовые множители</li>
                    <li>Поставить полученный коэффициент на первое место</li>
                    <li>Получить буквенную часть, используя свойства степеней, так, чтобы буквы не повторялись и были записаны в алфавитном порядке</li>
                </ol>
            </div>
            
            <div class="content-block example">
                <h3><i class="fas fa-check-circle"></i> Пример</h3>
                <p>Привести к стандартному виду: $2x^2y \\cdot (-3)xy^3$</p>
                <div class="formula">
                    $2x^2y \\cdot (-3)xy^3 = 2 \\cdot (-3) \\cdot x^2 \\cdot x \\cdot y \\cdot y^3 = -6x^3y^4$
                </div>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 5 - Множественный выбор: Стандартный вид
    {
        title: "Стандартный вид одночлена",
        content: `
            <div class="multiple-choice-exercise">
                <h3><i class="fas fa-check-square"></i> Укажите, какие из одночленов записаны в стандартном виде</h3>
                
                <div class="options-container" id="standardFormOptions">
                    <div class="option" data-correct="false">
                        <div class="checkbox"></div>
                        <span>$5mm^2$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$1,4ab^7c^3$</span>
                    </div>
                    <div class="option" data-correct="false">
                        <div class="checkbox"></div>
                        <span>$-7t^3 \\cdot 4t^5$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$-abc$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$\\frac{6}{13}x^8y^9$</span>
                    </div>
                    <div class="option" data-correct="false">
                        <div class="checkbox"></div>
                        <span>$m^6n^4 \\cdot 10$</span>
                    </div>
                </div>
                
                <div class="controls">
                    <button class="btn" onclick="checkStandardForm()">
                        <i class="fas fa-check-circle"></i> Проверить
                    </button>
                    <button class="btn" onclick="resetStandardForm()">
                        <i class="fas fa-redo"></i> Начать заново
                    </button>
                </div>
                
                <div id="standardFormResultMessage" class="result-message"></div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Критерии стандартного вида</h3>
                <p>Одночлен записан в стандартном виде, если:</p>
                <ul>
                    <li>На первом месте стоит числовой множитель (коэффициент)</li>
                    <li>Каждая переменная встречается только один раз</li>
                    <li>Переменные записаны в алфавитном порядке</li>
                    <li>Нет знаков умножения между множителями</li>
                </ul>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 6 - Теория: Коэффициент и подобные одночлены
    {
        title: "Коэффициент и подобные одночлены",
        content: `
            <div class="content-block definition">
                <h3><i class="fas fa-book"></i> Коэффициент одночлена</h3>
                <p><strong>Коэффициент одночлена</strong> – числовой множитель одночлена, записанного в стандартном виде.</p>
                <p>Например, коэффициенты одночленов $-3a^2bc$ и $0,07x$ соответственно равны $-3$ и $0,07$.</p>
            </div>
            
            <div class="content-block important">
                <h3><i class="fas fa-exclamation-triangle"></i> Важно!</h3>
                <p>Любой одночлен стандартного вида имеет коэффициент.</p>
                <p>Например, у одночленов $x^2y$ и $-mn$, при записи которых числовой множитель не используется, коэффициентами являются числа $1$ и $-1$ соответственно.</p>
                <div class="formula">
                    $x^2y = 1 \\cdot x^2y, \\quad -mn = -1 \\cdot mn$
                </div>
            </div>
            
            <div class="content-block definition">
                <h3><i class="fas fa-book"></i> Подобные одночлены</h3>
                <p><strong>Подобные одночлены</strong> – одночлены, у которых одинаковые буквенные части.</p>
                <p>К подобным одночленам также относят и числа. Например, $7$ и $-5$ — подобные одночлены.</p>
            </div>
            
            <div class="content-block example">
                <h3><i class="fas fa-check-circle"></i> Пример</h3>
                <p>Рассмотрим одночлены $\\frac{2}{3}x^3yz$ и $-2zx^3y$.</p>
                <p>У них одинаковые буквенные части? Нет, хотя они состоят из одних и тех же переменных, но буквенные части неодинаковы. Поэтому они не являются подобными.</p>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 7 - Множественный выбор: Подобные одночлены
    {
        title: "Подобные одночлены",
        content: `
            <div class="multiple-choice-exercise">
                <h3><i class="fas fa-check-square"></i> Выберите одночлены, которые являются подобными</h3>
                
                <div class="options-container" id="similarMonomialsOptions">
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$5a$ и $7a$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$3a^2b^3c$ и $6a^2b^3c$</span>
                    </div>
                    <div class="option" data-correct="false">
                        <div class="checkbox"></div>
                        <span>$8x^2y^4$ и $8x^2y^5$</span>
                    </div>
                    <div class="option" data-correct="false">
                        <div class="checkbox"></div>
                        <span>$3y^2$ и $2y^3$</span>
                    </div>
                    <div class="option" data-correct="false">
                        <div class="checkbox"></div>
                        <span>$\\frac{1}{2}m^7n^8$ и $\\frac{1}{2}m^8n^7$</span>
                    </div>
                    <div class="option" data-correct="true">
                        <div class="checkbox"></div>
                        <span>$-0,1a^9b^{10}$ и $0,1a^9b^{10}$</span>
                    </div>
                </div>
                
                <div class="controls">
                    <button class="btn" onclick="checkSimilarMonomials()">
                        <i class="fas fa-check-circle"></i> Проверить
                    </button>
                    <button class="btn" onclick="resetSimilarMonomials()">
                        <i class="fas fa-redo"></i> Начать заново
                    </button>
                </div>
                
                <div id="similarMonomialsResultMessage" class="result-message"></div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Как определить подобные одночлены?</h3>
                <p>Два одночлена являются подобными, если:</p>
                <ul>
                    <li>Они имеют одинаковый набор переменных</li>
                    <li>Каждая переменная имеет одинаковую степень</li>
                    <li>Коэффициенты могут быть разными</li>
                </ul>
                <p>Например: $3x^2y$ и $-5x^2y$ - подобные, а $3x^2y$ и $3xy^2$ - не подобные.</p>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 8 - Теория: Степень одночлена
    {
        title: "Степень одночлена",
        content: `
            <div class="content-block definition">
                <h3><i class="fas fa-book"></i> Определение</h3>
                <p><strong>Степенью одночлена</strong> с коэффициентом, отличным от нуля, называется сумма показателей степеней входящих в него переменных.</p>
                <p>Если одночлен не содержит переменных, то его степень равна нулю.</p>
            </div>
            
            <div class="content-block example">
                <h3><i class="fas fa-check-circle"></i> Примеры</h3>
                <ul>
                    <li>Одночлен $10a^5y^7$ имеет двенадцатую степень ($5 + 7 = 12$)</li>
                    <li>Одночлен $5xk^8$ имеет девятую степень ($1 + 8 = 9$)</li>
                    <li>Одночлен $c$ имеет первую степень</li>
                    <li>Одночлен $1024$ имеет нулевую степень</li>
                </ul>
            </div>
            
            <div class="content-block important">
                <h3><i class="fas fa-exclamation-triangle"></i> Важно!</h3>
                <p>Степень одночлена определяется только для одночленов с коэффициентом, отличным от нуля.</p>
                <p>Нулевой одночлен (например, $0x^2$) не имеет степени.</p>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Как найти степень одночлена?</h3>
                <ol>
                    <li>Убедитесь, что одночлен записан в стандартном виде</li>
                    <li>Сложите показатели степеней всех переменных</li>
                    <li>Если переменных нет (число), степень равна 0</li>
                </ol>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 9 - Решение в тетради: Приведение к стандартному виду
    {
        title: "Практика: Приведение к стандартному виду",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Приведите одночлен к стандартному виду, укажите его коэффициент и степень:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1)</strong> $9a^4aa^6$</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2)</strong> $3x \\cdot 0,4y \\cdot 6z$</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3)</strong> $7a \\cdot (-9ac)$</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>4)</strong> $-3\\frac{1}{3}m^5 \\cdot 9mn^9$</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>5)</strong> $-5x^2 \\cdot 0,1x^2y \\cdot (-2y)$</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>6)</strong> $c \\cdot (-d) \\cdot c^{18}$</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution1()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution1">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1)</strong> $9a^4aa^6 = 9a^{4+1+6} = 9a^{11}$</p>
                        <p>Коэффициент: 9, степень: 11</p>
                        
                        <p><strong>2)</strong> $3x \\cdot 0,4y \\cdot 6z = 3 \\cdot 0,4 \\cdot 6 \\cdot xyz = 7,2xyz$</p>
                        <p>Коэффициент: 7,2, степень: 3</p>
                        
                        <p><strong>3)</strong> $7a \\cdot (-9ac) = 7 \\cdot (-9) \\cdot a \\cdot a \\cdot c = -63a^2c$</p>
                        <p>Коэффициент: -63, степень: 3</p>
                        
                        <p><strong>4)</strong> $-3\\frac{1}{3}m^5 \\cdot 9mn^9 = -\\frac{10}{3} \\cdot 9 \\cdot m^5 \\cdot m \\cdot n^9 = -30m^6n^9$</p>
                        <p>Коэффициент: -30, степень: 15</p>
                        
                        <p><strong>5)</strong> $-5x^2 \\cdot 0,1x^2y \\cdot (-2y) = -5 \\cdot 0,1 \\cdot (-2) \\cdot x^2 \\cdot x^2 \\cdot y \\cdot y = 1x^4y^2$</p>
                        <p>Коэффициент: 1, степень: 6</p>
                        
                        <p><strong>6)</strong> $c \\cdot (-d) \\cdot c^{18} = -1 \\cdot c \\cdot c^{18} \\cdot d = -c^{19}d$</p>
                        <p>Коэффициент: -1, степень: 20</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Алгоритм решения</h3>
                <ol>
                    <li>Перемножьте все числовые коэффициенты</li>
                    <li>Запишите коэффициент на первом месте</li>
                    <li>Для каждой переменной сложите показатели степеней</li>
                    <li>Запишите переменные в алфавитном порядке</li>
                    <li>Определите коэффициент и степень полученного одночлена</li>
                </ol>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 10 - Решение в тетради: Нахождение значения одночлена
    {
        title: "Практика: Нахождение значения одночлена",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Найдите значение одночлена:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1)</strong> $5x^2$, если $x = -4$</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2)</strong> $-4,8a^4b^3$, если $a = -1, b = \\frac{1}{2}$</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3)</strong> $\\frac{4}{9}m^3n^2p^3$, если $m = -3, n = 5, p = -1$</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution2()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution2">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1)</strong> $5x^2 = 5 \\cdot (-4)^2 = 5 \\cdot 16 = 80$</p>
                        
                        <p><strong>2)</strong> $-4,8a^4b^3 = -4,8 \\cdot (-1)^4 \\cdot (\\frac{1}{2})^3 = -4,8 \\cdot 1 \\cdot \\frac{1}{8} = -4,8 \\cdot 0,125 = -0,6$</p>
                        
                        <p><strong>3)</strong> $\\frac{4}{9}m^3n^2p^3 = \\frac{4}{9} \\cdot (-3)^3 \\cdot 5^2 \\cdot (-1)^3 = \\frac{4}{9} \\cdot (-27) \\cdot 25 \\cdot (-1) = \\frac{4}{9} \\cdot 675 = 4 \\cdot 75 = 300$</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы по решению</h3>
                <ul>
                    <li>Внимательно подставьте значения переменных</li>
                    <li>Следите за знаками при возведении в степень</li>
                    <li>Выполняйте действия последовательно</li>
                    <li>Проверяйте вычисления</li>
                </ul>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 11 - Итоговый тест
    {
        title: "Итоговый тест",
        content: `
            <div class="final-test-exercise">
                <h3><i class="fas fa-graduation-cap"></i> Проверьте свои знания</h3>
                
                <div class="final-test-task">
                    <div class="test-task">
                        <div class="test-question">1. Укажи выражения, являющиеся одночленами</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="checkbox" id="test1_1" value="A">
                                <label for="test1_1">$3ac$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test1_2" value="B">
                                <label for="test1_2">$-\\frac{1}{7}m^3n^2$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test1_3" value="C">
                                <label for="test1_3">$a^2 - b^2$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test1_4" value="D">
                                <label for="test1_4">$13$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test1_5" value="E">
                                <label for="test1_5">$0$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test1_6" value="F">
                                <label for="test1_6">$5c^6d^9$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test1_7" value="G">
                                <label for="test1_7">$13k$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test1_8" value="H">
                                <label for="test1_8">$b^0$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test1_9" value="I">
                                <label for="test1_9">$nn^3$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test1_10" value="J">
                                <label for="test1_10">$4p + 7k$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test1_11" value="K">
                                <label for="test1_11">$-3\\frac{1}{9}ab^2b^3cc^6$</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">2. Укажи одночлены, записанные в стандартном виде</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="checkbox" id="test2_1" value="A">
                                <label for="test2_1">$7xyx^5$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test2_2" value="B">
                                <label for="test2_2">$-1,8m^3n^4p$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test2_3" value="C">
                                <label for="test2_3">$-9a^3 \\cdot 6a^4$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test2_4" value="D">
                                <label for="test2_4">$\\frac{9}{18}a^9b^{12}$</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">3. Укажи пары подобных одночленов</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="checkbox" id="test3_1" value="A">
                                <label for="test3_1">$3c$ и $5c$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test3_2" value="B">
                                <label for="test3_2">$4a^3b^2c$ и $12a^3b^2c$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test3_3" value="C">
                                <label for="test3_3">$8x^4y^6$ и $8x^6y^4$</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="test3_4" value="D">
                                <label for="test3_4">$mn^3$ и $mn^2$</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn btn-check" onclick="checkFinalTest()">
                            <i class="fas fa-check-circle"></i> Проверить работу
                        </button>
                        <button class="btn" onclick="resetFinalTest()">
                            <i class="fas fa-redo"></i> Начать заново
                        </button>
                    </div>
                    
                    <div id="finalTestResult" class="result-message"></div>
                    <div id="finalTestGrade" class="grade-result" style="display: none;"></div>
                </div>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 12 - Вопросы для самоконтроля
    {
        title: "Вопросы для самоконтроля",
        content: `
            <div class="questions-container">
                <h3><i class="fas fa-question-circle"></i> Проверьте свои знания</h3>
                
                <div class="question-item">
                    <p><strong>1. Какие выражения называют одночленами?</strong></p>
                </div>
                
                <div class="question-item">
                    <p><strong>2. Объясните, какой вид одночлена называют его стандартным видом.</strong></p>
                </div>
                
                <div class="question-item">
                    <p><strong>3. Что называют коэффициентом одночлена?</strong></p>
                </div>
                
                <div class="question-item">
                    <p><strong>4. Какие одночлены называют подобными?</strong></p>
                </div>
                
                <div class="question-item">
                    <p><strong>5. Что называют степенью одночлена?</strong></p>
                </div>
                
                <div class="completion-message">
                    <p><i class="fas fa-brain"></i> Ответьте на эти вопросы для закрепления материала. Если возникли трудности, вернитесь к предыдущим слайдам.</p>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Ответы на вопросы</h3>
                <p><strong>1.</strong> Одночленами называют алгебраические выражения, которые являются произведением чисел, переменных и их степеней, а также отдельные числа, переменные и их степени.</p>
                <p><strong>2.</strong> Стандартный вид одночлена - запись в виде произведения числового множителя (коэффициента) на первом месте и степеней различных переменных.</p>
                <p><strong>3.</strong> Коэффициент одночлена - числовой множитель одночлена, записанного в стандартном виде.</p>
                <p><strong>4.</strong> Подобные одночлены - одночлены, которые имеют одинаковую буквенную часть.</p>
                <p><strong>5.</strong> Степень одночлена - сумма показателей степеней всех переменных, входящих в одночлен.</p>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    },
    // Слайд 13 - Задание на самоподготовку
    {
        title: "Задание на самоподготовку",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-home"></i> Самостоятельная работа</h3>
                
                <div class="notebook-task">
                    <p>Выполните задание письменно в тетради для домашних работ.</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание 1.</strong> Приведите одночлен к стандартному виду, укажите его коэффициент и степень:</p>
                            <ol>
                                <li>$8x^3xx^5$</li>
                                <li>$3a \\cdot 0,5b \\cdot 4c$</li>
                                <li>$3a \\cdot (-2ac)$</li>
                                <li>$-2\\frac{1}{3}m^2 \\cdot 6mn^3$</li>
                                <li>$-2x^3 \\cdot 0,1x^3y \\cdot (-5y)$</li>
                                <li>$p \\cdot (-q) \\cdot p^{20}$</li>
                            </ol>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 2.</strong> Найдите значение одночлена:</p>
                            <ol>
                                <li>$4x^2$, если $x = -3$</li>
                                <li>$-3,2a^2b^3$, если $a = \\frac{1}{2}$, $b = -1$</li>
                                <li>$\\frac{5}{14}x^2y$, если $x = -7$, $y = 0,6$</li>
                                <li>$0,6abc^3$, если $a = 1,2$, $b = -5$, $c = 3$</li>
                            </ol>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showSelfStudySolution()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="selfStudySolution">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>Задание 1:</strong></p>
                        <ol>
                            <li>$8x^3xx^5 = 8x^{3+1+5} = 8x^9$ (коэффициент: 8, степень: 9)</li>
                            <li>$3a \\cdot 0,5b \\cdot 4c = 3 \\cdot 0,5 \\cdot 4 \\cdot abc = 6abc$ (коэффициент: 6, степень: 3)</li>
                            <li>$3a \\cdot (-2ac) = 3 \\cdot (-2) \\cdot a \\cdot a \\cdot c = -6a^2c$ (коэффициент: -6, степень: 3)</li>
                            <li>$-2\\frac{1}{3}m^2 \\cdot 6mn^3 = -\\frac{7}{3} \\cdot 6 \\cdot m^2 \\cdot m \\cdot n^3 = -14m^3n^3$ (коэффициент: -14, степень: 6)</li>
                            <li>$-2x^3 \\cdot 0,1x^3y \\cdot (-5y) = -2 \\cdot 0,1 \\cdot (-5) \\cdot x^3 \\cdot x^3 \\cdot y \\cdot y = 1x^6y^2$ (коэффициент: 1, степень: 8)</li>
                            <li>$p \\cdot (-q) \\cdot p^{20} = -1 \\cdot p \\cdot p^{20} \\cdot q = -p^{21}q$ (коэффициент: -1, степень: 22)</li>
                        </ol>
                        
                        <p><strong>Задание 2:</strong></p>
                        <ol>
                            <li>$4x^2 = 4 \\cdot (-3)^2 = 4 \\cdot 9 = 36$</li>
                            <li>$-3,2a^2b^3 = -3,2 \\cdot (\\frac{1}{2})^2 \\cdot (-1)^3 = -3,2 \\cdot \\frac{1}{4} \\cdot (-1) = 0,8$</li>
                            <li>$\\frac{5}{14}x^2y = \\frac{5}{14} \\cdot (-7)^2 \\cdot 0,6 = \\frac{5}{14} \\cdot 49 \\cdot 0,6 = 17,5 \\cdot 0,6 = 10,5$</li>
                            <li>$0,6abc^3 = 0,6 \\cdot 1,2 \\cdot (-5) \\cdot 3^3 = 0,6 \\cdot 1,2 \\cdot (-5) \\cdot 27 = -97,2$</li>
                        </ol>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Дополнительные материалы</h3>
                <p>Для лучшего понимания темы рекомендуем посмотреть видеоуроки:</p>
                <ul>
                    <li><a href="https://rutube.ru/video/2251cded9a944cd34bc27314e24f196d/?r=wd" target="_blank">Понятие одночлена</a></li>
                    <li><a href="https://rutube.ru/video/665a5d57f5cc258ba8cd884fa16dff27/?r=wd" target="_blank">Стандартный вид одночленов. Подобные одночлены</a></li>
                </ul>
            </div>
            
            <div class="panel-toggle">
                <button class="btn" onclick="togglePanel()">
                    <i class="fas fa-pen"></i> Открыть интерактивную панель
                </button>
            </div>
            <div class="interactive-panel" id="interactivePanel">
                <div class="panel-controls">
                    <div class="color-option active" style="background-color: #007AFF;" data-color="#007AFF"></div>
                    <div class="color-option" style="background-color: #5AC8FA;" data-color="#5AC8FA"></div>
                    <div class="color-option" style="background-color: #AF52DE;" data-color="#AF52DE"></div>
                    <div class="color-option" style="background-color: #FF9500;" data-color="#FF9500"></div>
                    <div class="color-option" style="background-color: #34C759;" data-color="#34C759"></div>
                    <div class="color-option" style="background-color: #FF3B30;" data-color="#FF3B30"></div>
                    
                    <div class="tool-option active" data-tool="pen">
                        <i class="fas fa-pen"></i>
                    </div>
                    <div class="tool-option" data-tool="eraser">
                        <i class="fas fa-eraser"></i>
                    </div>
                    <div class="tool-option" id="clearBtn">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
                
                <div class="drawing-canvas-container">
                    <canvas id="drawingCanvas" width="1200" height="800"></canvas>
                </div>
            </div>
        `
    }
];

// Переменные для управления слайдами
let currentSlide = 0;

// Переменные для рисования
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentColor = '#007AFF';
let currentTool = 'pen';
let canvas, ctx;

// Правильные ответы для итогового теста
const finalTestAnswers = {
    question1: ["A", "B", "D", "E", "F", "G", "H", "I", "K"], // Правильные ответы для вопроса 1
    question2: ["B", "D"], // Правильные ответы для вопроса 2
    question3: ["A", "B"] // Правильные ответы для вопроса 3
};

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    initSlides();
    initDrawingPanel();
    renderMathJax();
});

// Функция для инициализации слайдов
function initSlides() {
    const slidesNav = document.getElementById('slides-nav');
    const workspace = document.getElementById('workspace');
    
    // Создаем навигационные точки для слайдов
    slidesData.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.className = 'slide-dot';
        dot.textContent = index + 1;
        dot.dataset.slideIndex = index;
        
        dot.addEventListener('click', function() {
            switchSlide(index);
        });
        
        slidesNav.appendChild(dot);
    });
    
    // Активируем первый слайд
    switchSlide(0);
}

// Функция для переключения слайдов
function switchSlide(slideIndex) {
    currentSlide = slideIndex;
    
    // Обновляем активную точку в навигации
    document.querySelectorAll('.slide-dot').forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Обновляем содержимое рабочей области
    const workspace = document.getElementById('workspace');
    const slide = slidesData[slideIndex];
    
    workspace.innerHTML = `
        <h2>${slide.title}</h2>
        ${slide.content}
    `;
    
    // Инициализируем панель рисования
    setTimeout(() => {
        initDrawingPanel();
    }, 100);
    
    // Перерисовываем математические формулы
    renderMathJax();
}

// Функции для рисования
function initDrawingPanel() {
    canvas = document.getElementById('drawingCanvas');
    if (!canvas) return;
    
    ctx = canvas.getContext('2d');
    
    // Настройка контекста рисования
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 2;
    ctx.strokeStyle = currentColor;
    
    // Обработчики событий для рисования
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Обработчики для сенсорных устройств
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', stopDrawing);
    
    // Обработчики для элементов управления
    const colorOptions = document.querySelectorAll('.color-option');
    const toolOptions = document.querySelectorAll('.tool-option[data-tool]');
    const clearBtn = document.getElementById('clearBtn');
    
    if (colorOptions.length > 0) {
        colorOptions.forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                currentColor = this.getAttribute('data-color');
                if (currentTool === 'pen') {
                    ctx.strokeStyle = currentColor;
                }
            });
        });
    }
    
    if (toolOptions.length > 0) {
        toolOptions.forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.tool-option[data-tool]').forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                currentTool = this.getAttribute('data-tool');
                
                if (currentTool === 'pen') {
                    ctx.strokeStyle = currentColor;
                    ctx.globalCompositeOperation = 'source-over';
                    ctx.lineWidth = 2;
                } else if (currentTool === 'eraser') {
                    ctx.strokeStyle = '#FFFFFF';
                    ctx.globalCompositeOperation = 'destination-out';
                    ctx.lineWidth = 8;
                }
            });
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearCanvas);
    }
}

function startDrawing(e) {
    isDrawing = true;
    const pos = getMousePos(canvas, e);
    [lastX, lastY] = [pos.x, pos.y];
}

function draw(e) {
    if (!isDrawing) return;
    
    const pos = getMousePos(canvas, e);
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    
    [lastX, lastY] = [pos.x, pos.y];
}

function stopDrawing() {
    isDrawing = false;
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    
    if (evt.type.includes('touch')) {
        clientX = evt.touches[0].clientX;
        clientY = evt.touches[0].clientY;
    } else {
        clientX = evt.clientX;
        clientY = evt.clientY;
    }
    
    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    };
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function togglePanel() {
    const panel = document.getElementById('interactivePanel');
    panel.classList.toggle('show');
    
    if (panel.classList.contains('show')) {
        setTimeout(initDrawingPanel, 100);
    }
}

// Функция для перерисовки формул MathJax
function renderMathJax() {
    if (window.MathJax) {
        MathJax.startup.promise.then(() => {
            MathJax.typesetPromise().then(() => {
                console.log('MathJax formulas rendered successfully');
            }).catch((err) => {
                console.log('MathJax typeset error:', err);
            });
        });
    } else {
        setTimeout(renderMathJax, 100);
    }
}

// Функции для слайда 3: Определение одночленов
function checkMonomials() {
    const options = document.querySelectorAll('#monomialsOptions .option');
    let correctCount = 0;
    let totalCorrect = 0;
    
    // Считаем сколько всего правильных ответов
    options.forEach(option => {
        if (option.dataset.correct === 'true') {
            totalCorrect++;
        }
    });
    
    options.forEach(option => {
        const isSelected = option.classList.contains('selected');
        const isCorrect = option.dataset.correct === 'true';
        
        option.classList.remove('correct', 'incorrect');
        
        if (isSelected && isCorrect) {
            option.classList.add('correct');
            correctCount++;
        } else if (isSelected && !isCorrect) {
            option.classList.add('incorrect');
        } else if (!isSelected && isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    const resultMessage = document.getElementById('monomialsResultMessage');
    resultMessage.className = 'result-message';
    
    if (correctCount === totalCorrect) {
        resultMessage.classList.add('success');
        resultMessage.innerHTML = `<i class="fas fa-trophy"></i> Отлично! Все ответы верные!`;
    } else {
        resultMessage.classList.add('error');
        resultMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> Правильно отмечено ${correctCount} из ${totalCorrect} одночленов. Попробуйте еще раз!`;
    }
}

function resetMonomials() {
    const options = document.querySelectorAll('#monomialsOptions .option');
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
        option.querySelector('.checkbox').classList.remove('checked');
    });
    
    const resultMessage = document.getElementById('monomialsResultMessage');
    resultMessage.className = 'result-message';
}

// Функции для слайда 5: Стандартный вид
function checkStandardForm() {
    const options = document.querySelectorAll('#standardFormOptions .option');
    let correctCount = 0;
    let totalCorrect = 0;
    
    // Считаем сколько всего правильных ответов
    options.forEach(option => {
        if (option.dataset.correct === 'true') {
            totalCorrect++;
        }
    });
    
    options.forEach(option => {
        const isSelected = option.classList.contains('selected');
        const isCorrect = option.dataset.correct === 'true';
        
        option.classList.remove('correct', 'incorrect');
        
        if (isSelected && isCorrect) {
            option.classList.add('correct');
            correctCount++;
        } else if (isSelected && !isCorrect) {
            option.classList.add('incorrect');
        } else if (!isSelected && isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    const resultMessage = document.getElementById('standardFormResultMessage');
    resultMessage.className = 'result-message';
    
    if (correctCount === totalCorrect) {
        resultMessage.classList.add('success');
        resultMessage.innerHTML = `<i class="fas fa-trophy"></i> Отлично! Все ответы верные!`;
    } else {
        resultMessage.classList.add('error');
        resultMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> Правильно отмечено ${correctCount} из ${totalCorrect} одночленов. Попробуйте еще раз!`;
    }
}

function resetStandardForm() {
    const options = document.querySelectorAll('#standardFormOptions .option');
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
        option.querySelector('.checkbox').classList.remove('checked');
    });
    
    const resultMessage = document.getElementById('standardFormResultMessage');
    resultMessage.className = 'result-message';
}

// Функции для слайда 7: Подобные одночлены
function checkSimilarMonomials() {
    const options = document.querySelectorAll('#similarMonomialsOptions .option');
    let correctCount = 0;
    let totalCorrect = 0;
    
    // Считаем сколько всего правильных ответов
    options.forEach(option => {
        if (option.dataset.correct === 'true') {
            totalCorrect++;
        }
    });
    
    options.forEach(option => {
        const isSelected = option.classList.contains('selected');
        const isCorrect = option.dataset.correct === 'true';
        
        option.classList.remove('correct', 'incorrect');
        
        if (isSelected && isCorrect) {
            option.classList.add('correct');
            correctCount++;
        } else if (isSelected && !isCorrect) {
            option.classList.add('incorrect');
        } else if (!isSelected && isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    const resultMessage = document.getElementById('similarMonomialsResultMessage');
    resultMessage.className = 'result-message';
    
    if (correctCount === totalCorrect) {
        resultMessage.classList.add('success');
        resultMessage.innerHTML = `<i class="fas fa-trophy"></i> Отлично! Все ответы верные!`;
    } else {
        resultMessage.classList.add('error');
        resultMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> Правильно отмечено ${correctCount} из ${totalCorrect} пар. Попробуйте еще раз!`;
    }
}

function resetSimilarMonomials() {
    const options = document.querySelectorAll('#similarMonomialsOptions .option');
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
        option.querySelector('.checkbox').classList.remove('checked');
    });
    
    const resultMessage = document.getElementById('similarMonomialsResultMessage');
    resultMessage.className = 'result-message';
}

// Функции для показа решений
function showNotebookSolution1() {
    const solution = document.getElementById('notebookSolution1');
    solution.classList.add('show');
    renderMathJax();
}

function showNotebookSolution2() {
    const solution = document.getElementById('notebookSolution2');
    solution.classList.add('show');
    renderMathJax();
}

function showSelfStudySolution() {
    const solution = document.getElementById('selfStudySolution');
    solution.classList.add('show');
    renderMathJax();
}

// Функции для итогового теста
function checkFinalTest() {
    let correctCount = 0;
    const totalQuestions = 3;
    
    // Проверка вопроса 1
    const question1Answers = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .filter(checkbox => checkbox.id.startsWith('test1_'))
        .map(checkbox => checkbox.value);
    
    const isQuestion1Correct = question1Answers.length === finalTestAnswers.question1.length &&
        finalTestAnswers.question1.every(answer => question1Answers.includes(answer));
    
    if (isQuestion1Correct) {
        correctCount++;
        document.querySelectorAll('input[type="checkbox"][id^="test1_"]').forEach(checkbox => {
            if (finalTestAnswers.question1.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            }
        });
    } else {
        document.querySelectorAll('input[type="checkbox"][id^="test1_"]').forEach(checkbox => {
            if (finalTestAnswers.question1.includes(checkbox.value) && question1Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            } else if (finalTestAnswers.question1.includes(checkbox.value) && !question1Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            } else if (!finalTestAnswers.question1.includes(checkbox.value) && question1Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            }
        });
    }
    
    // Проверка вопроса 2
    const question2Answers = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .filter(checkbox => checkbox.id.startsWith('test2_'))
        .map(checkbox => checkbox.value);
    
    const isQuestion2Correct = question2Answers.length === finalTestAnswers.question2.length &&
        finalTestAnswers.question2.every(answer => question2Answers.includes(answer));
    
    if (isQuestion2Correct) {
        correctCount++;
        document.querySelectorAll('input[type="checkbox"][id^="test2_"]').forEach(checkbox => {
            if (finalTestAnswers.question2.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            }
        });
    } else {
        document.querySelectorAll('input[type="checkbox"][id^="test2_"]').forEach(checkbox => {
            if (finalTestAnswers.question2.includes(checkbox.value) && question2Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            } else if (finalTestAnswers.question2.includes(checkbox.value) && !question2Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            } else if (!finalTestAnswers.question2.includes(checkbox.value) && question2Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            }
        });
    }
    
    // Проверка вопроса 3
    const question3Answers = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .filter(checkbox => checkbox.id.startsWith('test3_'))
        .map(checkbox => checkbox.value);
    
    const isQuestion3Correct = question3Answers.length === finalTestAnswers.question3.length &&
        finalTestAnswers.question3.every(answer => question3Answers.includes(answer));
    
    if (isQuestion3Correct) {
        correctCount++;
        document.querySelectorAll('input[type="checkbox"][id^="test3_"]').forEach(checkbox => {
            if (finalTestAnswers.question3.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            }
        });
    } else {
        document.querySelectorAll('input[type="checkbox"][id^="test3_"]').forEach(checkbox => {
            if (finalTestAnswers.question3.includes(checkbox.value) && question3Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            } else if (finalTestAnswers.question3.includes(checkbox.value) && !question3Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            } else if (!finalTestAnswers.question3.includes(checkbox.value) && question3Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            }
        });
    }
    
    // Вычисляем процент правильных ответов
    const percentage = (correctCount / totalQuestions) * 100;
    
    // Определяем оценку
    let grade, gradeClass;
    if (percentage >= 85) {
        grade = "5 (Отлично)";
        gradeClass = "grade-5";
    } else if (percentage >= 70) {
        grade = "4 (Хорошо)";
        gradeClass = "grade-4";
    } else if (percentage >= 55) {
        grade = "3 (Удовлетворительно)";
        gradeClass = "grade-3";
    } else {
        grade = "2 (Неудовлетворительно)";
        gradeClass = "grade-2";
    }
    
    // Показываем результат
    const resultMessage = document.getElementById('finalTestResult');
    resultMessage.className = 'result-message';
    resultMessage.innerHTML = `<i class="fas fa-chart-bar"></i> Правильно решено ${correctCount} из ${totalQuestions} заданий (${percentage.toFixed(1)}%)`;
    
    const gradeElement = document.getElementById('finalTestGrade');
    gradeElement.className = `grade-result ${gradeClass}`;
    gradeElement.innerHTML = `<i class="fas fa-star"></i> Ваша оценка: ${grade}`;
    gradeElement.style.display = 'block';
}

function resetFinalTest() {
    // Сбрасываем все checkbox
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.parentElement.classList.remove('correct', 'incorrect');
    });
    
    document.getElementById('finalTestResult').className = 'result-message';
    document.getElementById('finalTestGrade').style.display = 'none';
}

// Инициализация обработчиков событий для элементов multiple choice
document.addEventListener('click', function(e) {
    // Обработка кликов по options в multiple choice
    if (e.target.closest('.option')) {
        const option = e.target.closest('.option');
        option.classList.toggle('selected');
        option.querySelector('.checkbox').classList.toggle('checked');
    }
    
    // Обработка кликов по checkbox в multiple choice
    if (e.target.closest('.checkbox')) {
        const option = e.target.closest('.option');
        option.classList.toggle('selected');
        e.target.classList.toggle('checked');
    }
});

// Добавляем обработчики для touch устройств
document.addEventListener('touchstart', function(e) {
    if (e.target.closest('.option')) {
        const option = e.target.closest('.option');
        option.classList.toggle('selected');
        option.querySelector('.checkbox').classList.toggle('checked');
    }
}, { passive: true });