// Данные слайдов для урока "Умножение и деление одночленов. Возведение одночлена в степень"
const slidesData = [
    // Слайд 1 - Задачи на урок
    {
        title: "Наши цели на урок",
        content: `
            <div class="goal-setting-container">
                <div class="goals-list">
                    <div class="goal-item">
                        <i class="fas fa-bullseye"></i>
                        <h4>Изучить умножение одночленов</h4>
                        <p>Освоить алгоритм умножения одночленов и преобразование результата в стандартный вид</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-calculator"></i>
                        <h4>Освоить деление одночленов</h4>
                        <p>Научиться выполнять деление одночленов и преобразовывать результат в стандартный вид</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-superscript"></i>
                        <h4>Возведение одночленов в степень</h4>
                        <p>Изучить алгоритм возведения одночлена в натуральную степень</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-balance-scale"></i>
                        <h4>Определять одночлены</h4>
                        <p>Научиться распознавать одночлены и приводить их к стандартному виду</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-tasks"></i>
                        <h4>Решать практические задачи</h4>
                        <p>Применить полученные знания для решения практических задач с одночленами</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-brain"></i>
                        <h4>Развивать алгебраическое мышление</h4>
                        <p>Сформировать навыки логического мышления и анализа алгебраических выражений</p>
                    </div>
                </div>
                
                <div class="motivation-quote">
                    <p>"Математика - это язык, на котором написана книга природы."</p>
                    <div class="quote-author">- Галилео Галилей</div>
                </div>
                
                <div class="completion-message">
                    <p><i class="fas fa-flag"></i> Успехов в освоении материала! Помните: алгебра - это основа для понимания более сложных математических концепций.</p>
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
    // Слайд 2 - Множественный выбор (одночлены)
    {
        title: "Задание: Определение одночленов",
        content: `
            <div class="multiple-choice-exercise">
                <h3><i class="fas fa-check-square"></i> Укажите выражения, являющиеся одночленами</h3>
                
                <div class="multiple-choice-task">
                    <p>Отметьте галочками выражения, которые являются одночленами:</p>
                    
                    <div class="options-container" id="optionsContainer1">
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>\\(3ac\\)</span>
                        </div>
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>\\(-\\frac{1}{7}m^{3}n^{2}\\)</span>
                        </div>
                        <div class="option" data-correct="false">
                            <div class="checkbox"></div>
                            <span>\\(a^{2} - b^{2}\\)</span>
                        </div>
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>13</span>
                        </div>
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>0</span>
                        </div>
                        <div class="option" data-correct="false">
                            <div class="checkbox"></div>
                            <span>\\(\\frac{5c^{6}d^{9}}{13k}\\)</span>
                        </div>
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>\\(b^{0}\\)</span>
                        </div>
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>\\(nn^{3}\\)</span>
                        </div>
                        <div class="option" data-correct="false">
                            <div class="checkbox"></div>
                            <span>\\(4p + 7k\\)</span>
                        </div>
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>\\(-3\\frac{1}{9}ab^{2}b^{3}cc^{6}\\)</span>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="checkMultipleChoice1()">
                            <i class="fas fa-check-circle"></i> Проверить
                        </button>
                        <button class="btn" onclick="resetMultipleChoice1()">
                            <i class="fas fa-redo"></i> Начать заново
                        </button>
                    </div>
                    
                    <div id="multipleChoiceResultMessage1" class="result-message"></div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Что такое одночлен?</h3>
                <p>Одночлен - это произведение чисел, переменных и их степеней.</p>
                <p>Одночленами также считаются:</p>
                <ul>
                    <li>Отдельное число</li>
                    <li>Отдельная переменная</li>
                    <li>Степень переменной</li>
                </ul>
                <p>Не являются одночленами:</p>
                <ul>
                    <li>Выражения, содержащие сложение или вычитание</li>
                    <li>Выражения с переменной в знаменателе</li>
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
    // Слайд 3 - Множественный выбор (стандартный вид)
    {
        title: "Задание: Стандартный вид одночлена",
        content: `
            <div class="multiple-choice-exercise">
                <h3><i class="fas fa-check-square"></i> Укажите одночлены, записанные в стандартном виде</h3>
                
                <div class="multiple-choice-task">
                    <p>Отметьте галочками одночлены, которые записаны в стандартном виде:</p>
                    
                    <div class="options-container" id="optionsContainer2">
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>\\(111x^{5}y^{3}\\)</span>
                        </div>
                        <div class="option" data-correct="false">
                            <div class="checkbox"></div>
                            <span>\\(-38m^{33}n^{12}p \\cdot 5m\\)</span>
                        </div>
                        <div class="option" data-correct="false">
                            <div class="checkbox"></div>
                            <span>\\(-12x^{5} \\cdot 7x^{12}\\)</span>
                        </div>
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>\\(\\frac{7}{15}m^{7}n^{11}\\)</span>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="checkMultipleChoice2()">
                            <i class="fas fa-check-circle"></i> Проверить
                        </button>
                        <button class="btn" onclick="resetMultipleChoice2()">
                            <i class="fas fa-redo"></i> Начать заново
                        </button>
                    </div>
                    
                    <div id="multipleChoiceResultMessage2" class="result-message"></div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Стандартный вид одночлена</h3>
                <p>Одночлен имеет стандартный вид, если:</p>
                <ul>
                    <li>Он содержит только один числовой множитель, стоящий на первом месте</li>
                    <li>Каждая переменная встречается только один раз</li>
                    <li>Переменные записаны в алфавитном порядке</li>
                </ul>
                <p>Примеры одночленов в стандартном виде:</p>
                <ul>
                    <li>\\(5a^{2}b^{3}\\)</li>
                    <li>\\(-3x^{4}y\\)</li>
                    <li>\\(\\frac{2}{7}m^{5}n^{2}\\)</li>
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
    // Слайд 4 - Множественный выбор (подобные одночлены)
    {
        title: "Задание: Подобные одночлены",
        content: `
            <div class="multiple-choice-exercise">
                <h3><i class="fas fa-check-square"></i> Укажите пары подобных одночленов</h3>
                
                <div class="multiple-choice-task">
                    <p>Отметьте галочками пары подобных одночленов:</p>
                    
                    <div class="options-container" id="optionsContainer3">
                        <div class="option" data-correct="false">
                            <div class="checkbox"></div>
                            <span>\\(3a^{9}c^{5}\\) и \\(5a^{3}c^{5}\\)</span>
                        </div>
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>\\(15a^{5}b^{3}\\) и \\(30a^{5}b^{3}\\)</span>
                        </div>
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>\\(17a^{11}b^{5}\\) и \\(34a^{11}b^{5}\\)</span>
                        </div>
                        <div class="option" data-correct="false">
                            <div class="checkbox"></div>
                            <span>\\(xy^{8}\\) и \\(x^{8}y\\)</span>
                        </div>
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>\\(3c\\) и \\(5c\\)</span>
                        </div>
                        <div class="option" data-correct="true">
                            <div class="checkbox"></div>
                            <span>\\(4a^{3}b^{2}c\\) и \\(12a^{3}b^{2}c\\)</span>
                        </div>
                        <div class="option" data-correct="false">
                            <div class="checkbox"></div>
                            <span>\\(8x^{4}y^{6}\\) и \\(8x^{6}y^{4}\\)</span>
                        </div>
                        <div class="option" data-correct="false">
                            <div class="checkbox"></div>
                            <span>\\(mn^{3}\\) и \\(mn^{2}\\)</span>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="checkMultipleChoice3()">
                            <i class="fas fa-check-circle"></i> Проверить
                        </button>
                        <button class="btn" onclick="resetMultipleChoice3()">
                            <i class="fas fa-redo"></i> Начать заново
                        </button>
                    </div>
                    
                    <div id="multipleChoiceResultMessage3" class="result-message"></div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Подобные одночлены</h3>
                <p>Одночлены называются подобными, если они имеют одинаковую буквенную часть.</p>
                <p>Примеры подобных одночленов:</p>
                <ul>
                    <li>\\(3a^{2}b\\) и \\(5a^{2}b\\) - подобные (одинаковая буквенная часть \\(a^{2}b\\))</li>
                    <li>\\(7x^{3}y^{2}\\) и \\(-2x^{3}y^{2}\\) - подобные</li>
                </ul>
                <p>Примеры неподобных одночленов:</p>
                <ul>
                    <li>\\(3a^{2}b\\) и \\(3ab^{2}\\) - не подобные (разная буквенная часть)</li>
                    <li>\\(5x^{3}y\\) и \\(5x^{2}y\\) - не подобные</li>
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
    // Слайд 5 - Теория (умножение одночленов)
    {
        title: "Теория: Умножение одночленов",
        content: `
            <div class="content-block theory">
                <h3><i class="fas fa-times-circle"></i> Умножение одночленов</h3>
                <p><strong>Алгоритм:</strong> Чтобы умножить одночлены, нужно найти произведение:</p>
                <ol>
                    <li>Коэффициентов одночленов;</li>
                    <li>Степеней с одинаковыми основаниями;</li>
                    <li>Остальных переменных и степеней переменных.</li>
                </ol>
            </div>
            
            <div class="content-block example">
                <h3><i class="fas fa-calculator"></i> Примеры</h3>
                <p><strong>Пример а):</strong> \\(2x^{2}y \\cdot (0,3x^{3}y^{2})\\)</p>
                <div class="formula">
                    \\(= (2 \\cdot 0,3) \\cdot (x^{2} \\cdot x^{3}) \\cdot (y \\cdot y^{2}) = 0,6 \\cdot x^{5} \\cdot y^{3} = 0,6x^{5}y^{3}\\)
                </div>
                
                <p><strong>Пример б):</strong> \\(-0,25a^{4}b^{6} \\cdot (4a^{3}bc)\\)</p>
                <div class="formula">
                    \\(= (-0,25 \\cdot 4) \\cdot (a^{4} \\cdot a^{3}) \\cdot (b^{6} \\cdot b) \\cdot c = -1 \\cdot a^{7} \\cdot b^{7} \\cdot c = -a^{7}b^{7}c\\)
                </div>
            </div>
            
            <div class="content-block important">
                <h3><i class="fas fa-exclamation-triangle"></i> Важно!</h3>
                <p>Умножение одночленов является тождественным преобразованием.</p>
                <p>Результатом этого преобразования является одночлен.</p>
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
    // Слайд 6 - Решение в тетради (умножение одночленов)
    {
        title: "Задание: Умножение одночленов",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Выполните умножение одночленов. После выполнения нажмите кнопку "Проверить решение":</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1)</strong> \\(7mn^{2} \\cdot (-2m^{2}n^{6})\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2)</strong> \\(0,4a^{3}b^{5} \\cdot 1,3a^{3}b\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3)</strong> \\(-2,8b^{3}c^{7} \\cdot 1,5b^{2}c^{5}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>4)</strong> \\(0,45m^{3}n^{2}p^{4} \\cdot 1\\frac{1}{9}m^{8}n^{11}p^{6}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>5)</strong> \\(-12x^{3}y^{9}z^{10} \\cdot 1\\frac{5}{6}x^{7}y\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>6)</strong> \\(\\frac{2}{9}a^{5}c \\cdot (-15b^{3}c^{2}) \\cdot 1,2a^{3}b^{6}\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showMultiplicationSolution()">
                            <i class="fas fa-eye"></i> Проверить решение
                        </button>
                    </div>
                    
                    <div class="solution" id="multiplicationSolution">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1)</strong> \\(7mn^{2} \\cdot (-2m^{2}n^{6}) = -14m^{3}n^{8}\\)</p>
                        <p><strong>2)</strong> \\(0,4a^{3}b^{5} \\cdot 1,3a^{3}b = 0,52a^{6}b^{6}\\)</p>
                        <p><strong>3)</strong> \\(-2,8b^{3}c^{7} \\cdot 1,5b^{2}c^{5} = -4,2b^{5}c^{12}\\)</p>
                        <p><strong>4)</strong> \\(0,45m^{3}n^{2}p^{4} \\cdot 1\\frac{1}{9}m^{8}n^{11}p^{6} = 0,45 \\cdot \\frac{10}{9}m^{11}n^{13}p^{10} = 0,5m^{11}n^{13}p^{10}\\)</p>
                        <p><strong>5)</strong> \\(-12x^{3}y^{9}z^{10} \\cdot 1\\frac{5}{6}x^{7}y = -12 \\cdot \\frac{11}{6}x^{10}y^{10}z^{10} = -22x^{10}y^{10}z^{10}\\)</p>
                        <p><strong>6)</strong> \\(\\frac{2}{9}a^{5}c \\cdot (-15b^{3}c^{2}) \\cdot 1,2a^{3}b^{6} = \\frac{2}{9} \\cdot (-15) \\cdot 1,2a^{8}b^{9}c^{3} = -4a^{8}b^{9}c^{3}\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы</h3>
                <p>При умножении одночленов:</p>
                <ul>
                    <li>Умножайте коэффициенты</li>
                    <li>Складывайте показатели степеней при одинаковых основаниях</li>
                    <li>Записывайте результат в стандартном виде</li>
                    <li>Переменные располагайте в алфавитном порядке</li>
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
    // Слайд 7 - Теория (деление одночленов)
    {
        title: "Теория: Деление одночленов",
        content: `
            <div class="content-block theory">
                <h3><i class="fas fa-divide"></i> Деление одночленов</h3>
                <p><strong>Алгоритм:</strong> Чтобы разделить один одночлен на другой, нужно:</p>
                <ol>
                    <li>Разделить коэффициенты одночленов и записать частное коэффициентом результата деления;</li>
                    <li>Разделить степени с одинаковыми основаниями и записать их множителями в результат деления.</li>
                </ol>
            </div>
            
            <div class="content-block example">
                <h3><i class="fas fa-calculator"></i> Примеры</h3>
                <p><strong>Пример а):</strong> \\(15x^{4}y^{3} : (-3xy^{2})\\)</p>
                <div class="formula">
                    \\(= (15 : (-3)) \\cdot (x^{4} : x) \\cdot (y^{3} : y^{2}) = -5 \\cdot x^{3} \\cdot y = -5x^{3}y\\)
                </div>
                
                <p><strong>Пример б):</strong> \\(-1,2a^{8}b^{3}c : (0,2a^{5}b^{3})\\)</p>
                <div class="formula">
                    \\(= (-1,2 : 0,2) \\cdot (a^{8} : a^{5}) \\cdot (b^{3} : b^{3}) \\cdot c = -6a^{3}c\\)
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
    // Слайд 8 - Решение в тетради (деление одночленов)
    {
        title: "Задание: Деление одночленов",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Выполните деление одночленов и преобразуйте в одночлен стандартного вида. После выполнения нажмите кнопку "Проверить решение":</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>а)</strong> \\(15x^{8}y^{6} : (3x^{2}y^{3})\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>б)</strong> \\(36a^{4}b^{3}c^{5} : (-9a^{2}bc^{4})\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>в)</strong> \\(-21m^{9}n^{5}k : (-7m^{4}k)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>г)</strong> \\(4a^{3}b^{2}c : (-8ab)\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showDivisionSolution()">
                            <i class="fas fa-eye"></i> Проверить решение
                        </button>
                    </div>
                    
                    <div class="solution" id="divisionSolution">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>а)</strong> \\(15x^{8}y^{6} : (3x^{2}y^{3}) = 5x^{6}y^{3}\\)</p>
                        <p><strong>б)</strong> \\(36a^{4}b^{3}c^{5} : (-9a^{2}bc^{4}) = -4a^{2}b^{2}c\\)</p>
                        <p><strong>в)</strong> \\(-21m^{9}n^{5}k : (-7m^{4}k) = 3m^{5}n^{5}\\)</p>
                        <p><strong>г)</strong> \\(4a^{3}b^{2}c : (-8ab) = -0,5a^{2}bc\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы</h3>
                <p>При делении одночленов:</p>
                <ul>
                    <li>Делите коэффициенты</li>
                    <li>Вычитайте показатели степеней при одинаковых основаниях</li>
                    <li>Записывайте результат в стандартном виде</li>
                    <li>Если степень переменной в результате равна 1, показатель обычно не пишут</li>
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
    // Слайд 9 - Теория (возведение одночлена в степень)
    {
        title: "Теория: Возведение одночлена в степень",
        content: `
            <div class="content-block theory">
                <h3><i class="fas fa-superscript"></i> Возведение одночлена в степень</h3>
                <p>Для возведения одночлена в натуральную степень необходимо воспользоваться свойством степени произведения и свойством степени степени.</p>
                
                <p><strong>Алгоритм:</strong> Чтобы возвести одночлен в степень, нужно:</p>
                <ol>
                    <li>Возвести в эту степень каждый множитель одночлена;</li>
                    <li>Результаты перемножить.</li>
                </ol>
            </div>
            
            <div class="content-block example">
                <h3><i class="fas fa-calculator"></i> Примеры</h3>
                <p><strong>Пример а):</strong> \\((0,1a^{6}b^{3})^{2}\\)</p>
                <div class="formula">
                    \\(= (0,1)^{2} \\cdot (a^{6})^{2} \\cdot (b^{3})^{2} = 0,01 \\cdot a^{12} \\cdot b^{6} = 0,01a^{12}b^{6}\\)
                </div>
                
                <p><strong>Пример б):</strong> \\((-x^{4}y^{2}z^{3})^{3}\\)</p>
                <div class="formula">
                    \\(= (-1)^{3} \\cdot (x^{4})^{3} \\cdot (y^{2})^{3} \\cdot (z^{3})^{3} = -1 \\cdot x^{12} \\cdot y^{6} \\cdot z^{9} = -x^{12}y^{6}z^{9}\\)
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
    // Слайд 10 - Решение в тетради (возведение в степень)
    {
        title: "Задание: Возведение одночленов в степень",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Выполните возведение в степень. После выполнения нажмите кнопку "Проверить решение":</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1)</strong> \\((4a^{5}b^{6})^{2}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2)</strong> \\((-3xy^{2})^{3}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3)</strong> \\((-2a^{7}b^{3}c)^{2}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>4)</strong> \\(\\left(-\\frac{1}{5}m^{3}b^{2}\\right)^{3}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>5)</strong> \\((11x^{9}y^{3}z)^{2}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>6)</strong> \\(\\left(1\\frac{1}{3}p^{12}q^{6}\\right)^{2}\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showPowerSolution()">
                            <i class="fas fa-eye"></i> Проверить решение
                        </button>
                    </div>
                    
                    <div class="solution" id="powerSolution">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1)</strong> \\((4a^{5}b^{6})^{2} = 16a^{10}b^{12}\\)</p>
                        <p><strong>2)</strong> \\((-3xy^{2})^{3} = -27x^{3}y^{6}\\)</p>
                        <p><strong>3)</strong> \\((-2a^{7}b^{3}c)^{2} = 4a^{14}b^{6}c^{2}\\)</p>
                        <p><strong>4)</strong> \\(\\left(-\\frac{1}{5}m^{3}b^{2}\\right)^{3} = -\\frac{1}{125}m^{9}b^{6}\\)</p>
                        <p><strong>5)</strong> \\((11x^{9}y^{3}z)^{2} = 121x^{18}y^{6}z^{2}\\)</p>
                        <p><strong>6)</strong> \\(\\left(1\\frac{1}{3}p^{12}q^{6}\\right)^{2} = \\left(\\frac{4}{3}p^{12}q^{6}\\right)^{2} = \\frac{16}{9}p^{24}q^{12}\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы</h3>
                <p>При возведении одночлена в степень:</p>
                <ul>
                    <li>Возводите в степень числовой коэффициент</li>
                    <li>Умножайте показатели степеней переменных на показатель степени, в которую возводится одночлен</li>
                    <li>Обращайте внимание на знак при возведении в нечетную степень</li>
                    <li>Записывайте результат в стандартном виде</li>
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
    // Слайд 11 - Итоговая комплексная работа
    {
        title: "Итоговая комплексная работа",
        content: `
            <div class="final-test-exercise">
                <h3><i class="fas fa-graduation-cap"></i> Итоговая проверочная работа</h3>
                
                <div class="final-test-task">
                    <p>Выполните следующие задания. После выполнения нажмите кнопку "Проверить работу" для получения оценки:</p>
                    
                    <div class="test-task">
                        <div class="test-question">1. Какие из следующих выражений являются одночленами?</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck1" value="A">
                                <label for="finalCheck1">\\(99dx\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck2" value="B">
                                <label for="finalCheck2">\\(-81\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck3" value="C">
                                <label for="finalCheck3">\\(-56(y - c^{6})\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck4" value="D">
                                <label for="finalCheck4">\\(\\frac{ek^{9}}{115^{5}}\\)</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">2. Найдите коэффициент одночлена \\(36b^{9}f^{7}\\).</div>
                        <div class="input-field">
                            <span>Ответ:</span>
                            <input type="text" id="finalAnswer2" placeholder="Введите число">
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">3. Определите степень одночлена \\(29,26\\).</div>
                        <div class="input-field">
                            <span>Ответ:</span>
                            <input type="text" id="finalAnswer3" placeholder="Введите число">
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">4. Укажите значение \\(n\\), при котором одночлен \\(-a^{4}b^{2}c^{n}\\) является одночленом десятой степени.</div>
                        <div class="input-field">
                            <span>Ответ:</span>
                            <input type="text" id="finalAnswer4" placeholder="Введите число">
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">5. Выберите одночлены, равные \\(48c^{10}m^{8}x^{2}\\).</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck5" value="A">
                                <label for="finalCheck5">\\(\\frac{11}{13}(13c^{2}x^{2})m^{8}\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck6" value="B">
                                <label for="finalCheck6">\\(c^{8} \\cdot 3m^{3} \\cdot 4m^{5} \\cdot (2x)^{2} \\cdot c^{2}\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck7" value="C">
                                <label for="finalCheck7">\\(-4 \\cdot (-c)^{7}m^{7} \\cdot (2x)^{2}m \\cdot (-3c^{3})\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck8" value="D">
                                <label for="finalCheck8">\\(48cm^{4}x^{2}m^{4}c^{9}\\)</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">6. Найдите значение одночлена \\(4a^{2}b \\cdot 2ab^{3} \\cdot 3b^{2}\\) при \\(a = -2\\), \\(b = 1\\).</div>
                        <div class="input-field">
                            <span>Ответ:</span>
                            <input type="text" id="finalAnswer6" placeholder="Введите число">
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
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы для успешного выполнения</h3>
                <ul>
                    <li>Внимательно читайте каждое задание</li>
                    <li>Проверяйте вычисления</li>
                    <li>Помните определение одночлена</li>
                    <li>Используйте свойства степеней для упрощения выражений</li>
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
    // Слайд 12 - Вопросы для самопроверки
    {
        title: "Вопросы для самопроверки",
        content: `
            <div class="questions-container">
                <h3><i class="fas fa-question-circle"></i> Вопросы по теме "Одночлены"</h3>
                
                <div class="question-item">
                    <p><strong>1. Какие выражения называют одночленами?</strong></p>
                    <p>Дайте определение и приведите примеры.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>2. Объясните, какой вид одночлена называют его стандартным видом.</strong></p>
                    <p>Сформулируйте правила приведения одночлена к стандартному виду.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>3. Что называют коэффициентом одночлена?</strong></p>
                    <p>Приведите примеры.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>4. Какие одночлены называют подобными?</strong></p>
                    <p>Объясните на примерах.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>5. Что называют степенью одночлена?</strong></p>
                    <p>Как определить степень одночлена?</p>
                </div>
                
                <div class="question-item">
                    <p><strong>6. Как выполнить умножение одночленов?</strong></p>
                    <p>Опишите алгоритм и приведите примеры.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>7. Как выполнить деление одночленов?</strong></p>
                    <p>Опишите алгоритм и приведите примеры.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>8. Как одночлен возвести в степень?</strong></p>
                    <p>Опишите алгоритм и приведите примеры.</p>
                </div>
                
                <div class="completion-message">
                    <p><i class="fas fa-brain"></i> Ответьте на эти вопросы для закрепления материала. Если возникли трудности, вернитесь к предыдущим слайдам.</p>
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
    // Слайд 13 - Задание на самоподготовку
    {
        title: "Задание на самоподготовку",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-home"></i> Самостоятельная работа</h3>
                
                <div class="notebook-task">
                    <p>Выполните следующие задания письменно в тетради. После выполнения нажмите кнопку "Показать решение" для самопроверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание 1. Выполните умножение одночленов:</strong></p>
                            <p>1) \\(6a^{2}b \\cdot (-3a^{3}b^{8})\\)</p>
                            <p>2) \\(0,2m^{3}n^{9} \\cdot 2,5m^{4}n\\)</p>
                            <p>3) \\(-2,4a^{7}b^{2} \\cdot 3,5ab^{4}\\)</p>
                            <p>4) \\(0,75a^{9}b^{3}c^{2} \\cdot 1\\frac{1}{3}a^{4}bc^{7}\\)</p>
                            <p>5) \\(-14a^{7}b^{3}c^{11} \\cdot 2\\frac{3}{7}bc^{4}\\)</p>
                            <p>6) \\(\\frac{3}{25}m^{4}c^{9} \\cdot (-10ma) \\cdot 2,5c^{3}a^{6}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 2. Выполните возведение в степень:</strong></p>
                            <p>1) \\((3m^{7}n^{5})^{2}\\)</p>
                            <p>2) \\((-2x^{3}y)^{3}\\)</p>
                            <p>3) \\((-5a^{4}b^{2}c^{3})^{2}\\)</p>
                            <p>4) \\((\\frac{1}{3}ab^{5})^{4}\\)</p>
                            <p>5) \\((13x^{5}y^{6}z^{7})^{2}\\)</p>
                            <p>6) \\((\\frac{2}{3}m^{24}n^{18})^{3}\\)</p>
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
                        <p>1) \\(6a^{2}b \\cdot (-3a^{3}b^{8}) = -18a^{5}b^{9}\\)</p>
                        <p>2) \\(0,2m^{3}n^{9} \\cdot 2,5m^{4}n = 0,5m^{7}n^{10}\\)</p>
                        <p>3) \\(-2,4a^{7}b^{2} \\cdot 3,5ab^{4} = -8,4a^{8}b^{6}\\)</p>
                        <p>4) \\(0,75a^{9}b^{3}c^{2} \\cdot 1\\frac{1}{3}a^{4}bc^{7} = 0,75 \\cdot \\frac{4}{3}a^{13}b^{4}c^{9} = a^{13}b^{4}c^{9}\\)</p>
                        <p>5) \\(-14a^{7}b^{3}c^{11} \\cdot 2\\frac{3}{7}bc^{4} = -14 \\cdot \\frac{17}{7}a^{7}b^{4}c^{15} = -34a^{7}b^{4}c^{15}\\)</p>
                        <p>6) \\(\\frac{3}{25}m^{4}c^{9} \\cdot (-10ma) \\cdot 2,5c^{3}a^{6} = \\frac{3}{25} \\cdot (-10) \\cdot 2,5m^{5}a^{7}c^{12} = -3m^{5}a^{7}c^{12}\\)</p>
                        
                        <p><strong>Задание 2:</strong></p>
                        <p>1) \\((3m^{7}n^{5})^{2} = 9m^{14}n^{10}\\)</p>
                        <p>2) \\((-2x^{3}y)^{3} = -8x^{9}y^{3}\\)</p>
                        <p>3) \\((-5a^{4}b^{2}c^{3})^{2} = 25a^{8}b^{4}c^{6}\\)</p>
                        <p>4) \\((\\frac{1}{3}ab^{5})^{4} = \\frac{1}{81}a^{4}b^{20}\\)</p>
                        <p>5) \\((13x^{5}y^{6}z^{7})^{2} = 169x^{10}y^{12}z^{14}\\)</p>
                        <p>6) \\((\\frac{2}{3}m^{24}n^{18})^{3} = \\frac{8}{27}m^{72}n^{54}\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Дополнительные материалы</h3>
                <p>Посмотрите видео по теме "Произведение одночленов":</p>
                <div class="video-container">
                    <iframe src="https://rutube.ru/play/embed/8c36654c69208d985d2a3a09a19970bb/?r=wd" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы для самоподготовки</h3>
                <ul>
                    <li>Внимательно читайте условие каждого задания</li>
                    <li>Используйте свойства степеней для упрощения выражений</li>
                    <li>Проверяйте свои вычисления</li>
                    <li>Если возникли трудности, вернитесь к теоретическому материалу</li>
                    <li>После самопроверки проанализируйте свои ошибки</li>
                </ul>
            </div>
        `
    }
];

// Переменные для рисования
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentColor = '#007AFF';
let currentTool = 'pen';
let canvas, ctx;

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    initSlides();
    initTouchEvents();
});

// Инициализация touch событий для мобильных устройств
function initTouchEvents() {
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
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
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            currentColor = this.getAttribute('data-color');
            if (currentTool === 'pen') {
                ctx.strokeStyle = currentColor;
            }
        });
    });
    
    document.querySelectorAll('.tool-option[data-tool]').forEach(option => {
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
    
    document.getElementById('clearBtn').addEventListener('click', clearCanvas);
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

function handleTouchEnd(e) {
    // Обработка завершения касания
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

// Функции для задания "Множественный выбор" (Слайд 2)
function initMultipleChoice1() {
    const optionsContainer = document.getElementById('optionsContainer1');
    const options = optionsContainer.querySelectorAll('.option');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('selected');
            const checkbox = this.querySelector('.checkbox');
            checkbox.classList.toggle('checked');
        });
    });
}

function checkMultipleChoice1() {
    const options = document.querySelectorAll('#optionsContainer1 .option');
    let correctCount = 0;
    let totalCorrect = 0;
    let userCorrect = 0;
    
    options.forEach(option => {
        const isCorrect = option.dataset.correct === 'true';
        const isSelected = option.classList.contains('selected');
        
        if (isCorrect) {
            totalCorrect++;
            if (isSelected) {
                correctCount++;
                userCorrect++;
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
            }
        } else {
            if (isSelected) {
                option.classList.add('incorrect');
            }
        }
    });
    
    const resultMessage = document.getElementById('multipleChoiceResultMessage1');
    resultMessage.className = 'result-message';
    
    if (correctCount === totalCorrect && document.querySelectorAll('#optionsContainer1 .option.incorrect').length === 0) {
        resultMessage.classList.add('success');
        resultMessage.innerHTML = `<i class="fas fa-trophy"></i> Отлично! Все верные выражения отмечены правильно!`;
    } else {
        resultMessage.classList.add('error');
        resultMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> Правильно отмечено ${userCorrect} из ${totalCorrect} одночленов. Попробуйте еще раз!`;
    }
}

function resetMultipleChoice1() {
    const options = document.querySelectorAll('#optionsContainer1 .option');
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
        const checkbox = option.querySelector('.checkbox');
        checkbox.classList.remove('checked');
    });
    
    const resultMessage = document.getElementById('multipleChoiceResultMessage1');
    resultMessage.className = 'result-message';
}

// Функции для задания "Множественный выбор" (Слайд 3)
function initMultipleChoice2() {
    const optionsContainer = document.getElementById('optionsContainer2');
    const options = optionsContainer.querySelectorAll('.option');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('selected');
            const checkbox = this.querySelector('.checkbox');
            checkbox.classList.toggle('checked');
        });
    });
}

function checkMultipleChoice2() {
    const options = document.querySelectorAll('#optionsContainer2 .option');
    let correctCount = 0;
    let totalCorrect = 0;
    let userCorrect = 0;
    
    options.forEach(option => {
        const isCorrect = option.dataset.correct === 'true';
        const isSelected = option.classList.contains('selected');
        
        if (isCorrect) {
            totalCorrect++;
            if (isSelected) {
                correctCount++;
                userCorrect++;
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
            }
        } else {
            if (isSelected) {
                option.classList.add('incorrect');
            }
        }
    });
    
    const resultMessage = document.getElementById('multipleChoiceResultMessage2');
    resultMessage.className = 'result-message';
    
    if (correctCount === totalCorrect && document.querySelectorAll('#optionsContainer2 .option.incorrect').length === 0) {
        resultMessage.classList.add('success');
        resultMessage.innerHTML = `<i class="fas fa-trophy"></i> Отлично! Все одночлены в стандартном виде отмечены правильно!`;
    } else {
        resultMessage.classList.add('error');
        resultMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> Правильно отмечено ${userCorrect} из ${totalCorrect} одночленов. Попробуйте еще раз!`;
    }
}

function resetMultipleChoice2() {
    const options = document.querySelectorAll('#optionsContainer2 .option');
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
        const checkbox = option.querySelector('.checkbox');
        checkbox.classList.remove('checked');
    });
    
    const resultMessage = document.getElementById('multipleChoiceResultMessage2');
    resultMessage.className = 'result-message';
}

// Функции для задания "Множественный выбор" (Слайд 4)
function initMultipleChoice3() {
    const optionsContainer = document.getElementById('optionsContainer3');
    const options = optionsContainer.querySelectorAll('.option');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('selected');
            const checkbox = this.querySelector('.checkbox');
            checkbox.classList.toggle('checked');
        });
    });
}

function checkMultipleChoice3() {
    const options = document.querySelectorAll('#optionsContainer3 .option');
    let correctCount = 0;
    let totalCorrect = 0;
    let userCorrect = 0;
    
    options.forEach(option => {
        const isCorrect = option.dataset.correct === 'true';
        const isSelected = option.classList.contains('selected');
        
        if (isCorrect) {
            totalCorrect++;
            if (isSelected) {
                correctCount++;
                userCorrect++;
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
            }
        } else {
            if (isSelected) {
                option.classList.add('incorrect');
            }
        }
    });
    
    const resultMessage = document.getElementById('multipleChoiceResultMessage3');
    resultMessage.className = 'result-message';
    
    if (correctCount === totalCorrect && document.querySelectorAll('#optionsContainer3 .option.incorrect').length === 0) {
        resultMessage.classList.add('success');
        resultMessage.innerHTML = `<i class="fas fa-trophy"></i> Отлично! Все пары подобных одночленов отмечены правильно!`;
    } else {
        resultMessage.classList.add('error');
        resultMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> Правильно отмечено ${userCorrect} из ${totalCorrect} пар. Попробуйте еще раз!`;
    }
}

function resetMultipleChoice3() {
    const options = document.querySelectorAll('#optionsContainer3 .option');
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
        const checkbox = option.querySelector('.checkbox');
        checkbox.classList.remove('checked');
    });
    
    const resultMessage = document.getElementById('multipleChoiceResultMessage3');
    resultMessage.className = 'result-message';
}

// Функции для показа решений
function showMultiplicationSolution() {
    const solution = document.getElementById('multiplicationSolution');
    solution.classList.add('show');
    renderMathJax();
}

function showDivisionSolution() {
    const solution = document.getElementById('divisionSolution');
    solution.classList.add('show');
    renderMathJax();
}

function showPowerSolution() {
    const solution = document.getElementById('powerSolution');
    solution.classList.add('show');
    renderMathJax();
}

function showSelfStudySolution() {
    const solution = document.getElementById('selfStudySolution');
    solution.classList.add('show');
    renderMathJax();
}

// Функции для итоговой работы
function checkFinalTest() {
    let correctCount = 0;
    const totalQuestions = 6;
    
    // Проверка вопроса 1
    const checkedOptions1 = Array.from(document.querySelectorAll('#finalCheck1:checked, #finalCheck2:checked, #finalCheck3:checked, #finalCheck4:checked'))
        .map(checkbox => checkbox.value);
    const isQuestion1Correct = checkedOptions1.length === 2 && 
        checkedOptions1.includes('A') && checkedOptions1.includes('B') &&
        !checkedOptions1.includes('C') && !checkedOptions1.includes('D');
    
    if (isQuestion1Correct) {
        document.querySelectorAll('#finalCheck1, #finalCheck2, #finalCheck3, #finalCheck4').forEach(checkbox => {
            if (checkbox.value === 'A' || checkbox.value === 'B') {
                checkbox.parentElement.classList.add('correct');
            }
        });
        correctCount++;
    } else {
        document.querySelectorAll('#finalCheck1, #finalCheck2, #finalCheck3, #finalCheck4').forEach(checkbox => {
            if ((checkbox.value === 'A' || checkbox.value === 'B') && checkedOptions1.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            } else if ((checkbox.value === 'A' || checkbox.value === 'B') && !checkedOptions1.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            } else if ((checkbox.value === 'C' || checkbox.value === 'D') && checkedOptions1.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            }
        });
    }
    
    // Проверка вопроса 2
    const answer2 = document.getElementById('finalAnswer2').value.trim();
    if (answer2 === '36') {
        document.getElementById('finalAnswer2').classList.add('correct');
        correctCount++;
    } else {
        document.getElementById('finalAnswer2').classList.add('incorrect');
    }
    
    // Проверка вопроса 3
    const answer3 = document.getElementById('finalAnswer3').value.trim();
    if (answer3 === '0') {
        document.getElementById('finalAnswer3').classList.add('correct');
        correctCount++;
    } else {
        document.getElementById('finalAnswer3').classList.add('incorrect');
    }
    
    // Проверка вопроса 4
    const answer4 = document.getElementById('finalAnswer4').value.trim();
    if (answer4 === '4') {
        document.getElementById('finalAnswer4').classList.add('correct');
        correctCount++;
    } else {
        document.getElementById('finalAnswer4').classList.add('incorrect');
    }
    
    // Проверка вопроса 5
    const checkedOptions5 = Array.from(document.querySelectorAll('#finalCheck5:checked, #finalCheck6:checked, #finalCheck7:checked, #finalCheck8:checked'))
        .map(checkbox => checkbox.value);
    const isQuestion5Correct = checkedOptions5.length === 2 && 
        checkedOptions5.includes('B') && checkedOptions5.includes('D') &&
        !checkedOptions5.includes('A') && !checkedOptions5.includes('C');
    
    if (isQuestion5Correct) {
        document.querySelectorAll('#finalCheck5, #finalCheck6, #finalCheck7, #finalCheck8').forEach(checkbox => {
            if (checkbox.value === 'B' || checkbox.value === 'D') {
                checkbox.parentElement.classList.add('correct');
            }
        });
        correctCount++;
    } else {
        document.querySelectorAll('#finalCheck5, #finalCheck6, #finalCheck7, #finalCheck8').forEach(checkbox => {
            if ((checkbox.value === 'B' || checkbox.value === 'D') && checkedOptions5.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            } else if ((checkbox.value === 'B' || checkbox.value === 'D') && !checkedOptions5.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            } else if ((checkbox.value === 'A' || checkbox.value === 'C') && checkedOptions5.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            }
        });
    }
    
    // Проверка вопроса 6
    const answer6 = document.getElementById('finalAnswer6').value.trim();
    if (answer6 === '-48') {
        document.getElementById('finalAnswer6').classList.add('correct');
        correctCount++;
    } else {
        document.getElementById('finalAnswer6').classList.add('incorrect');
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
    // Сброс вопросов с checkbox
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.parentElement.classList.remove('correct', 'incorrect');
    });
    
    // Сброс вопросов с текстовыми ответами
    document.getElementById('finalAnswer2').value = '';
    document.getElementById('finalAnswer2').classList.remove('correct', 'incorrect');
    
    document.getElementById('finalAnswer3').value = '';
    document.getElementById('finalAnswer3').classList.remove('correct', 'incorrect');
    
    document.getElementById('finalAnswer4').value = '';
    document.getElementById('finalAnswer4').classList.remove('correct', 'incorrect');
    
    document.getElementById('finalAnswer6').value = '';
    document.getElementById('finalAnswer6').classList.remove('correct', 'incorrect');
    
    document.getElementById('finalTestResult').className = 'result-message';
    document.getElementById('finalTestGrade').style.display = 'none';
}

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
    
    // Инициализируем компоненты для конкретных слайдов
    initializeSlideComponents(slideIndex);
    
    // Перерисовываем математические формулы
    renderMathJax();
}

function initializeSlideComponents(slideIndex) {
    switch(slideIndex) {
        case 1: // Слайд 2 - Множественный выбор (одночлены)
            setTimeout(() => {
                initMultipleChoice1();
                initDrawingPanel();
            }, 100);
            break;
        case 2: // Слайд 3 - Множественный выбор (стандартный вид)
            setTimeout(() => {
                initMultipleChoice2();
                initDrawingPanel();
            }, 100);
            break;
        case 3: // Слайд 4 - Множественный выбор (подобные одночлены)
            setTimeout(() => {
                initMultipleChoice3();
                initDrawingPanel();
            }, 100);
            break;
        default:
            setTimeout(() => {
                initDrawingPanel();
            }, 100);
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