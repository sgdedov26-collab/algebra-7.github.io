// Данные слайдов
const slidesData = [
    // Слайд 1 - Задачи на урок
    {
        title: "Наши цели на урок",
        content: `
            <div class="goal-setting-container">
                <div class="goals-list">
                    <div class="goal-item">
                        <i class="fas fa-bullseye"></i>
                        <h4>Изучить умножение и деление одночленов</h4>
                        <p>Освоить правила умножения и деления одночленов</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-calculator"></i>
                        <h4>Научиться возводить одночлены в степень</h4>
                        <p>Освоить правила возведения одночленов в натуральную степень</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-superscript"></i>
                        <h4>Определять степень одночлена</h4>
                        <p>Научиться находить степень одночлена стандартного вида</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-balance-scale"></i>
                        <h4>Работать с подобными одночленами</h4>
                        <p>Освоить определение и работу с подобными одночленами</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-tasks"></i>
                        <h4>Решать практические задачи</h4>
                        <p>Применить полученные знания для решения практических задач</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-brain"></i>
                        <h4>Развивать алгебраическое мышление</h4>
                        <p>Сформировать навыки логического мышления и анализа</p>
                    </div>
                </div>
                
                <div class="motivation-quote">
                    <p>"Алгебра - это искусство управлять математическими символами."</p>
                    <div class="quote-author">- Леонард Эйлер</div>
                </div>
                
                <div class="completion-message">
                    <p><i class="fas fa-flag"></i> Успехов в освоении материала! Помните: практика - ключ к успеху в математике.</p>
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
    // Слайд 2 - Тест
    {
        title: "Тест: Проверка знаний",
        content: `
            <div class="multiple-choice-exercise">
                <h3><i class="fas fa-check-square"></i> Тест по теме "Одночлены"</h3>
                
                <div class="multiple-choice-task">
                    <p>Выберите один или несколько правильных ответов для каждого вопроса:</p>
                    
                    <div class="test-task">
                        <div class="test-question">1. Что такое одночлен?</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="q1a" name="question1" value="A">
                                <label for="q1a">Алгебраическое выражение, являющееся суммой чисел и переменных</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="q1b" name="question1" value="B">
                                <label for="q1b">Алгебраическое выражение, являющееся произведением чисел, переменных и их степеней</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="q1c" name="question1" value="C">
                                <label for="q1c">Любое выражение с переменными</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="q1d" name="question1" value="D">
                                <label for="q1d">Выражение, содержащее знак равенства</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">2. Какое из следующих выражений НЕ является одночленом?</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="q2a" name="question2" value="A">
                                <label for="q2a">\\(5x^2y\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="q2b" name="question2" value="B">
                                <label for="q2b">\\(-3a\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="q2c" name="question2" value="C">
                                <label for="q2c">\\(\\frac{x}{y}\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="q2d" name="question2" value="D">
                                <label for="q2d">\\(0\\)</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">3. Одночлен записан в стандартном виде, если: (выберите все верные)</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="checkbox" id="q3a" value="A">
                                <label for="q3a">Он состоит только из одной переменной</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="q3b" value="B">
                                <label for="q3b">Он содержит только числовой коэффициент</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="q3c" value="C">
                                <label for="q3c">На первом месте записан числовой множитель (коэффициент), а затем степени различных переменных</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="q3d" value="D">
                                <label for="q3d">Все переменные записаны в алфавитном порядке и не повторяются</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">4. Укажите одночлены, записанные в стандартном виде: (выберите все верные)</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="checkbox" id="q4a" value="A">
                                <label for="q4a">\\(7a^3b^2\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="q4b" value="B">
                                <label for="q4b">\\(-2xy \\cdot z\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="q4c" value="C">
                                <label for="q4c">\\(5\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="q4d" value="D">
                                <label for="q4d">\\(x^2 \\cdot 4y\\)</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">5. Два одночлена являются подобными, если:</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="q5a" name="question5" value="A">
                                <label for="q5a">Они имеют одинаковые числовые коэффициенты</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="q5b" name="question5" value="B">
                                <label for="q5b">Они имеют одинаковую буквенную часть</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="q5c" name="question5" value="C">
                                <label for="q5c">Они оба записаны в стандартном виде</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="q5d" name="question5" value="D">
                                <label for="q5d">Они имеют одинаковую степень</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn btn-check" onclick="checkTest()">
                            <i class="fas fa-check-circle"></i> Проверить тест
                        </button>
                        <button class="btn" onclick="resetTest()">
                            <i class="fas fa-redo"></i> Начать заново
                        </button>
                    </div>
                    
                    <div id="testResult" class="result-message"></div>
                    <div id="testGrade" class="grade-result" style="display: none;"></div>
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
    // Слайд 3 - Решение в тетради с проверкой
    {
        title: "Задание: Решение в тетради с проверкой",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Представьте данное выражение в виде произведения двух одночленов, один из которых равен \\(3a^2b^6\\):</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1)</strong> \\(3a^6b^8\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2)</strong> \\(-12a^2b^{10}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3)</strong> \\(-2,7a^5b^7\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>4)</strong> \\(2\\frac{2}{7}a^{20}b^{30}\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showSolution1()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="solution1">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1)</strong> \\(3a^6b^8 = 3a^2b^6 \\cdot a^4b^2\\)</p>
                        <p><strong>2)</strong> \\(-12a^2b^{10} = 3a^2b^6 \\cdot (-4b^4)\\)</p>
                        <p><strong>3)</strong> \\(-2,7a^5b^7 = 3a^2b^6 \\cdot (-0,9a^3b)\\)</p>
                        <p><strong>4)</strong> \\(2\\frac{2}{7}a^{20}b^{30} = 3a^2b^6 \\cdot \\frac{16}{21}a^{18}b^{24}\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы</h3>
                <p>При решении задач на представление в виде произведения:</p>
                <ul>
                    <li>Разделите коэффициенты</li>
                    <li>Вычтите показатели степеней при одинаковых переменных</li>
                    <li>Проверьте правильность, выполнив умножение</li>
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
    // Слайд 4 - Решение в тетради с проверкой
    {
        title: "Задание: Представление в виде квадрата",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Представьте в виде квадрата одночлена стандартного вида выражение:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1)</strong> \\(4a^{10}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2)</strong> \\(36a^8b^2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3)</strong> \\(0,16a^{14}b^{16}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>4)</strong> \\(289a^{20}b^{30}c^{40}\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showSolution2()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="solution2">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1)</strong> \\(4a^{10} = (2a^5)^2\\)</p>
                        <p><strong>2)</strong> \\(36a^8b^2 = (6a^4b)^2\\)</p>
                        <p><strong>3)</strong> \\(0,16a^{14}b^{16} = (0,4a^7b^8)^2\\)</p>
                        <p><strong>4)</strong> \\(289a^{20}b^{30}c^{40} = (17a^{10}b^{15}c^{20})^2\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы</h3>
                <p>При представлении в виде квадрата:</p>
                <ul>
                    <li>Извлеките квадратный корень из коэффициента</li>
                    <li>Разделите показатели степеней на 2</li>
                    <li>Проверьте правильность, выполнив возведение в квадрат</li>
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
    // Слайд 5 - Решение в тетради с проверкой
    {
        title: "Задание: Упрощение выражений",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Упростите выражение:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1)</strong> \\(2a^3 \\cdot (-5a^4b^5)^2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2)</strong> \\((-x^6y)^3 \\cdot 11x^4y^5\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3)</strong> \\((-0,6a^3b^5c^6)^2 \\cdot 3a^2c^8\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>4)</strong> \\(-1\\frac{3}{11} m^4n^9 \\cdot \\left( -\\frac{1}{7} mn^3 \\right)^2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>5)</strong> \\(1\\frac{7}{9} x^7y^2 \\cdot \\left( \\frac{3}{4} x^2 y^9 \\right)^4\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>6)</strong> \\((-2c^2d^5)^7 \\cdot \\left( -\\frac{1}{2} c^4 d^5 \\right)^4\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showSolution3()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="solution3">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1)</strong> \\(2a^3 \\cdot (-5a^4b^5)^2 = 2a^3 \\cdot 25a^8b^{10} = 50a^{11}b^{10}\\)</p>
                        <p><strong>2)</strong> \\((-x^6y)^3 \\cdot 11x^4y^5 = -x^{18}y^3 \\cdot 11x^4y^5 = -11x^{22}y^8\\)</p>
                        <p><strong>3)</strong> \\((-0,6a^3b^5c^6)^2 \\cdot 3a^2c^8 = 0,36a^6b^{10}c^{12} \\cdot 3a^2c^8 = 1,08a^8b^{10}c^{20}\\)</p>
                        <p><strong>4)</strong> \\(-1\\frac{3}{11} m^4n^9 \\cdot \\left( -\\frac{1}{7} mn^3 \\right)^2 = -\\frac{14}{11} m^4n^9 \\cdot \\frac{1}{49} m^2n^6 = -\\frac{14}{539} m^6n^{15} = -\\frac{2}{77} m^6n^{15}\\)</p>
                        <p><strong>5)</strong> \\(1\\frac{7}{9} x^7y^2 \\cdot \\left( \\frac{3}{4} x^2 y^9 \\right)^4 = \\frac{16}{9} x^7y^2 \\cdot \\frac{81}{256} x^8 y^{36} = \\frac{9}{16} x^{15}y^{38}\\)</p>
                        <p><strong>6)</strong> \\((-2c^2d^5)^7 \\cdot \\left( -\\frac{1}{2} c^4 d^5 \\right)^4 = -128c^{14}d^{35} \\cdot \\frac{1}{16} c^{16} d^{20} = -8c^{30}d^{55}\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы</h3>
                <p>При упрощении выражений:</p>
                <ul>
                    <li>Сначала выполните возведение в степень</li>
                    <li>Затем выполните умножение</li>
                    <li>Приведите подобные слагаемые</li>
                    <li>Упростите коэффициенты</li>
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
    // Слайд 6 - Решение в тетради с проверкой
    {
        title: "Задание: Возведение в степень",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Выполните возведение в степень:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1)</strong> \\((4a^5b^6)^2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2)</strong> \\((-3xy^2)^3\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3)</strong> \\((-2a^7b^3c)^2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>4)</strong> \\(\\left( -\\frac{1}{5} m^3 b^2 \\right)^3\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>5)</strong> \\((11x^9y^3z)^2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>6)</strong> \\(\\left( 1\\frac{1}{3} p^{12} q^6 \\right)^2\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showSolution4()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="solution4">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1)</strong> \\((4a^5b^6)^2 = 16a^{10}b^{12}\\)</p>
                        <p><strong>2)</strong> \\((-3xy^2)^3 = -27x^3y^6\\)</p>
                        <p><strong>3)</strong> \\((-2a^7b^3c)^2 = 4a^{14}b^6c^2\\)</p>
                        <p><strong>4)</strong> \\(\\left( -\\frac{1}{5} m^3 b^2 \\right)^3 = -\\frac{1}{125} m^9 b^6\\)</p>
                        <p><strong>5)</strong> \\((11x^9y^3z)^2 = 121x^{18}y^6z^2\\)</p>
                        <p><strong>6)</strong> \\(\\left( 1\\frac{1}{3} p^{12} q^6 \\right)^2 = \\left( \\frac{4}{3} p^{12} q^6 \\right)^2 = \\frac{16}{9} p^{24} q^{12}\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы</h3>
                <p>При возведении одночлена в степень:</p>
                <ul>
                    <li>Возведите в степень коэффициент</li>
                    <li>Умножьте показатели степеней переменных на показатель степени</li>
                    <li>Обратите внимание на знак при возведении в нечетную степень</li>
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
    // Слайд 7 - Решение в тетради с проверкой
    {
        title: "Задание: Нахождение значений",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Значения переменных \\(x\\) и \\(y\\) таковы, что \\(5x^2y^4 = 6\\). Найдите значение выражения:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1)</strong> \\(1,5x^2y^4\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2)</strong> \\(25x^4y^8\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3)</strong> \\(-25x^6y^{12}\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showSolution5()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="solution5">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p>Дано: \\(5x^2y^4 = 6\\), значит \\(x^2y^4 = \\frac{6}{5} = 1,2\\)</p>
                        <p><strong>1)</strong> \\(1,5x^2y^4 = 1,5 \\cdot 1,2 = 1,8\\)</p>
                        <p><strong>2)</strong> \\(25x^4y^8 = 25 \\cdot (x^2y^4)^2 = 25 \\cdot (1,2)^2 = 25 \\cdot 1,44 = 36\\)</p>
                        <p><strong>3)</strong> \\(-25x^6y^{12} = -25 \\cdot (x^2y^4)^3 = -25 \\cdot (1,2)^3 = -25 \\cdot 1,728 = -43,2\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы</h3>
                <p>При решении подобных задач:</p>
                <ul>
                    <li>Выразите нужную комбинацию переменных из данного условия</li>
                    <li>Используйте свойства степеней для преобразования выражений</li>
                    <li>Подставьте числовое значение и вычислите результат</li>
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
    // Слайд 8 - Итоговый тест
    {
        title: "Итоговый тест",
        content: `
            <div class="multiple-choice-exercise">
                <h3><i class="fas fa-check-square"></i> Итоговый тест по теме "Одночлены"</h3>
                
                <div class="multiple-choice-task">
                    <p>Выберите один или несколько правильных ответов для каждого вопроса:</p>
                    
                    <div class="test-task">
                        <div class="test-question">1. Какое из выражений является одночленом?</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="f1a" name="final1" value="A">
                                <label for="f1a">\\(3x + 2y\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f1b" name="final1" value="B">
                                <label for="f1b">\\(5a^2b^3\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f1c" name="final1" value="C">
                                <label for="f1c">\\(\\frac{x}{y}\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f1d" name="final1" value="D">
                                <label for="f1d">\\(x^2 - 1\\)</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">2. Какие из следующих одночленов являются подобными? (выберите все верные)</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="checkbox" id="f2a" value="A">
                                <label for="f2a">\\(3ab^2\\) и \\(-5ab^2\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="f2b" value="B">
                                <label for="f2b">\\(4x^3\\) и \\(4x^2\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="f2c" value="C">
                                <label for="f2c">\\(7c\\) и \\(-0,3c\\)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="f2d" value="D">
                                <label for="f2d">\\(10\\) и \\(15\\)</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">3. Чтобы умножить одночлены, необходимо:</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="f3a" name="final3" value="A">
                                <label for="f3a">Сложить их коэффициенты</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f3b" name="final3" value="B">
                                <label for="f3b">Перемножить коэффициенты и сложить показатели степеней при одинаковых переменных</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f3c" name="final3" value="C">
                                <label for="f3c">Перемножить коэффициенты и умножить показатели степеней при одинаковых переменных</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f3d" name="final3" value="D">
                                <label for="f3d">Записать их друг за другом</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">4. Чтобы возвести одночлен в натуральную степень, необходимо:</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="f4a" name="final4" value="A">
                                <label for="f4a">Возвести в эту степень только коэффициент</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f4b" name="final4" value="B">
                                <label for="f4b">Возвести в эту степень только буквенную часть</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f4c" name="final4" value="C">
                                <label for="f4c">Возвести в эту степень каждый множитель одночлена и результаты перемножить</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f4d" name="final4" value="D">
                                <label for="f4d">Умножить одночлен сам на себя указанное число раз</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">5. Чему равна степень одночлена \\(-5x^2y^3z\\)?</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="f5a" name="final5" value="A">
                                <label for="f5a">2</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f5b" name="final5" value="B">
                                <label for="f5b">3</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f5c" name="final5" value="C">
                                <label for="f5c">5</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="f5d" name="final5" value="D">
                                <label for="f5d">6</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn btn-check" onclick="checkFinalTest()">
                            <i class="fas fa-check-circle"></i> Проверить тест
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
    // Слайд 9 - Вопросы для самоконтроля
    {
        title: "Вопросы для самоконтроля",
        content: `
            <div class="questions-container">
                <h3><i class="fas fa-question-circle"></i> Вопросы по теме "Одночлены"</h3>
                
                <div class="question-item">
                    <p><strong>1. Какие выражения называют одночленами?</strong></p>
                    <p>Дайте определение и приведите примеры.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>2. Объясните, какой вид одночлена называют его стандартным видом.</strong></p>
                    <p>Сформулируйте правило и приведите примеры.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>3. Что называют коэффициентом одночлена?</strong></p>
                    <p>Объясните на примерах.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>4. Какие одночлены называют подобными?</strong></p>
                    <p>Приведите примеры подобных и неподобных одночленов.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>5. Что называют степенью одночлена?</strong></p>
                    <p>Объясните, как найти степень одночлена.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>6. Как выполнить умножение одночленов?</strong></p>
                    <p>Опишите алгоритм действий.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>7. Как выполнить деление одночленов?</strong></p>
                    <p>Опишите алгоритм действий.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>8. Как одночлен возвести в степень?</strong></p>
                    <p>Сформулируйте правило и проиллюстрируйте примерами.</p>
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
    // Слайд 10 - Задание на самоподготовку
    {
        title: "Задание на самоподготовку",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-home"></i> Самостоятельная работа</h3>
                
                <div class="notebook-task">
                    <p>Выполните следующие задания письменно в тетради. После выполнения нажмите кнопку "Показать решение" для самопроверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание 1:</strong> Каким одночленом надо заменить звёздочку, чтобы выполнялось равенство:</p>
                            <p>1) * \\(\\cdot 3b^4 = 12b^6\\)</p>
                            <p>2) \\(-5a^5b^2 \\cdot * = -20a^6b^8\\)</p>
                            <p>3) \\(-7a^3b^9 \\cdot * = 4,2a^5b^{12}\\)</p>
                            <p>4) \\(23a^{12}b^{16} \\cdot * = -23a^{29}b^{17}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 2:</strong> Представьте в виде куба одночлена стандартного вида выражение:</p>
                            <p>1) \\(8x^6\\)</p>
                            <p>2) \\(-27x^3y^9\\)</p>
                            <p>3) \\(0,001x^{12}y^{18}\\)</p>
                            <p>4) \\(-\\frac{125}{216}x^{15}y^{21}z^{24}\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 3:</strong> Упростите выражение:</p>
                            <p>1) \\(20a^8 \\cdot (9a)^2\\)</p>
                            <p>2) \\((-b^5)^4 \\cdot 12b^6\\)</p>
                            <p>3) \\((3m^6n^3)^4 \\cdot \\left( -\\frac{1}{81} m^9n \\right)\\)</p>
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
                        <p>1) \\(12b^6 \\div 3b^4 = 4b^2\\)</p>
                        <p>2) \\(-20a^6b^8 \\div (-5a^5b^2) = 4ab^6\\)</p>
                        <p>3) \\(4,2a^5b^{12} \\div (-7a^3b^9) = -0,6a^2b^3\\)</p>
                        <p>4) \\(-23a^{29}b^{17} \\div 23a^{12}b^{16} = -a^{17}b\\)</p>
                        
                        <p><strong>Задание 2:</strong></p>
                        <p>1) \\(8x^6 = (2x^2)^3\\)</p>
                        <p>2) \\(-27x^3y^9 = (-3xy^3)^3\\)</p>
                        <p>3) \\(0,001x^{12}y^{18} = (0,1x^4y^6)^3\\)</p>
                        <p>4) \\(-\\frac{125}{216}x^{15}y^{21}z^{24} = \\left(-\\frac{5}{6}x^5y^7z^8\\right)^3\\)</p>
                        
                        <p><strong>Задание 3:</strong></p>
                        <p>1) \\(20a^8 \\cdot (9a)^2 = 20a^8 \\cdot 81a^2 = 1620a^{10}\\)</p>
                        <p>2) \\((-b^5)^4 \\cdot 12b^6 = b^{20} \\cdot 12b^6 = 12b^{26}\\)</p>
                        <p>3) \\((3m^6n^3)^4 \\cdot \\left( -\\frac{1}{81} m^9n \\right) = 81m^{24}n^{12} \\cdot \\left( -\\frac{1}{81} m^9n \\right) = -m^{33}n^{13}\\)</p>
                    </div>
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
            
            <div class="video-exercise">
                <h3><i class="fas fa-video"></i> Дополнительные материалы</h3>
                <p>Для лучшего понимания темы посмотрите видео:</p>
                <div class="video-container">
                    <iframe src="https://rutube.ru/play/embed/8c36654c69208d985d2a3a09a19970bb/?r=wd" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                </div>
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
    
    const clearBtn = document.getElementById('clearBtn');
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
    if (canvas) {
        canvas.dispatchEvent(mouseEvent);
    }
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    if (canvas) {
        canvas.dispatchEvent(mouseEvent);
    }
}

function handleTouchEnd(e) {
    // Обработка окончания касания
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
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function togglePanel() {
    const panel = document.getElementById('interactivePanel');
    if (panel) {
        panel.classList.toggle('show');
        
        if (panel.classList.contains('show')) {
            setTimeout(initDrawingPanel, 100);
        }
    }
}

// Функции для показа решений
function showSolution1() {
    const solution = document.getElementById('solution1');
    if (solution) {
        solution.classList.add('show');
        renderMathJax();
    }
}

function showSolution2() {
    const solution = document.getElementById('solution2');
    if (solution) {
        solution.classList.add('show');
        renderMathJax();
    }
}

function showSolution3() {
    const solution = document.getElementById('solution3');
    if (solution) {
        solution.classList.add('show');
        renderMathJax();
    }
}

function showSolution4() {
    const solution = document.getElementById('solution4');
    if (solution) {
        solution.classList.add('show');
        renderMathJax();
    }
}

function showSolution5() {
    const solution = document.getElementById('solution5');
    if (solution) {
        solution.classList.add('show');
        renderMathJax();
    }
}

function showSelfStudySolution() {
    const solution = document.getElementById('selfStudySolution');
    if (solution) {
        solution.classList.add('show');
        renderMathJax();
    }
}

// Функции для проверки тестов
function checkTest() {
    const correctAnswers = {
        question1: "B",
        question2: "C",
        question3: ["C", "D"],
        question4: ["A", "C"],
        question5: "B"
    };
    
    let correctCount = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    
    // Проверка вопроса 1
    const q1Answer = document.querySelector('input[name="question1"]:checked');
    if (q1Answer && q1Answer.value === correctAnswers.question1) {
        q1Answer.parentElement.classList.add('correct');
        correctCount++;
    } else if (q1Answer) {
        q1Answer.parentElement.classList.add('incorrect');
    }
    
    // Проверка вопроса 2
    const q2Answer = document.querySelector('input[name="question2"]:checked');
    if (q2Answer && q2Answer.value === correctAnswers.question2) {
        q2Answer.parentElement.classList.add('correct');
        correctCount++;
    } else if (q2Answer) {
        q2Answer.parentElement.classList.add('incorrect');
    }
    
    // Проверка вопроса 3
    const q3Answers = Array.from(document.querySelectorAll('input[name^="q3"]:checked'))
        .map(checkbox => checkbox.value);
    const isQ3Correct = q3Answers.length === correctAnswers.question3.length &&
        correctAnswers.question3.every(opt => q3Answers.includes(opt));
    
    if (isQ3Correct) {
        document.querySelectorAll('input[name^="q3"]').forEach(checkbox => {
            if (correctAnswers.question3.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            }
        });
        correctCount++;
    } else {
        document.querySelectorAll('input[name^="q3"]').forEach(checkbox => {
            if (correctAnswers.question3.includes(checkbox.value) && q3Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            } else if (correctAnswers.question3.includes(checkbox.value) && !q3Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            } else if (!correctAnswers.question3.includes(checkbox.value) && q3Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            }
        });
    }
    
    // Проверка вопроса 4
    const q4Answers = Array.from(document.querySelectorAll('input[name^="q4"]:checked'))
        .map(checkbox => checkbox.value);
    const isQ4Correct = q4Answers.length === correctAnswers.question4.length &&
        correctAnswers.question4.every(opt => q4Answers.includes(opt));
    
    if (isQ4Correct) {
        document.querySelectorAll('input[name^="q4"]').forEach(checkbox => {
            if (correctAnswers.question4.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            }
        });
        correctCount++;
    } else {
        document.querySelectorAll('input[name^="q4"]').forEach(checkbox => {
            if (correctAnswers.question4.includes(checkbox.value) && q4Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            } else if (correctAnswers.question4.includes(checkbox.value) && !q4Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            } else if (!correctAnswers.question4.includes(checkbox.value) && q4Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            }
        });
    }
    
    // Проверка вопроса 5
    const q5Answer = document.querySelector('input[name="question5"]:checked');
    if (q5Answer && q5Answer.value === correctAnswers.question5) {
        q5Answer.parentElement.classList.add('correct');
        correctCount++;
    } else if (q5Answer) {
        q5Answer.parentElement.classList.add('incorrect');
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
    const resultMessage = document.getElementById('testResult');
    if (resultMessage) {
        resultMessage.className = 'result-message';
        resultMessage.innerHTML = `<i class="fas fa-chart-bar"></i> Правильно решено ${correctCount} из ${totalQuestions} заданий (${percentage.toFixed(1)}%)`;
    }
    
    const gradeElement = document.getElementById('testGrade');
    if (gradeElement) {
        gradeElement.className = `grade-result ${gradeClass}`;
        gradeElement.innerHTML = `<i class="fas fa-star"></i> Ваша оценка: ${grade}`;
        gradeElement.style.display = 'block';
    }
}

function resetTest() {
    // Сброс всех ответов и стилей
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.checked = false;
        input.parentElement.classList.remove('correct', 'incorrect');
    });
    
    const resultMessage = document.getElementById('testResult');
    if (resultMessage) {
        resultMessage.className = 'result-message';
    }
    
    const gradeElement = document.getElementById('testGrade');
    if (gradeElement) {
        gradeElement.style.display = 'none';
    }
}

function checkFinalTest() {
    const correctAnswers = {
        final1: "B",
        final2: ["A", "C", "D"],
        final3: "B",
        final4: "C",
        final5: "D"
    };
    
    let correctCount = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    
    // Проверка вопроса 1
    const f1Answer = document.querySelector('input[name="final1"]:checked');
    if (f1Answer && f1Answer.value === correctAnswers.final1) {
        f1Answer.parentElement.classList.add('correct');
        correctCount++;
    } else if (f1Answer) {
        f1Answer.parentElement.classList.add('incorrect');
    }
    
    // Проверка вопроса 2
    const f2Answers = Array.from(document.querySelectorAll('input[name^="f2"]:checked'))
        .map(checkbox => checkbox.value);
    const isF2Correct = f2Answers.length === correctAnswers.final2.length &&
        correctAnswers.final2.every(opt => f2Answers.includes(opt));
    
    if (isF2Correct) {
        document.querySelectorAll('input[name^="f2"]').forEach(checkbox => {
            if (correctAnswers.final2.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            }
        });
        correctCount++;
    } else {
        document.querySelectorAll('input[name^="f2"]').forEach(checkbox => {
            if (correctAnswers.final2.includes(checkbox.value) && f2Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            } else if (correctAnswers.final2.includes(checkbox.value) && !f2Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            } else if (!correctAnswers.final2.includes(checkbox.value) && f2Answers.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            }
        });
    }
    
    // Проверка вопроса 3
    const f3Answer = document.querySelector('input[name="final3"]:checked');
    if (f3Answer && f3Answer.value === correctAnswers.final3) {
        f3Answer.parentElement.classList.add('correct');
        correctCount++;
    } else if (f3Answer) {
        f3Answer.parentElement.classList.add('incorrect');
    }
    
    // Проверка вопроса 4
    const f4Answer = document.querySelector('input[name="final4"]:checked');
    if (f4Answer && f4Answer.value === correctAnswers.final4) {
        f4Answer.parentElement.classList.add('correct');
        correctCount++;
    } else if (f4Answer) {
        f4Answer.parentElement.classList.add('incorrect');
    }
    
    // Проверка вопроса 5
    const f5Answer = document.querySelector('input[name="final5"]:checked');
    if (f5Answer && f5Answer.value === correctAnswers.final5) {
        f5Answer.parentElement.classList.add('correct');
        correctCount++;
    } else if (f5Answer) {
        f5Answer.parentElement.classList.add('incorrect');
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
    if (resultMessage) {
        resultMessage.className = 'result-message';
        resultMessage.innerHTML = `<i class="fas fa-chart-bar"></i> Правильно решено ${correctCount} из ${totalQuestions} заданий (${percentage.toFixed(1)}%)`;
    }
    
    const gradeElement = document.getElementById('finalTestGrade');
    if (gradeElement) {
        gradeElement.className = `grade-result ${gradeClass}`;
        gradeElement.innerHTML = `<i class="fas fa-star"></i> Ваша оценка: ${grade}`;
        gradeElement.style.display = 'block';
    }
}

function resetFinalTest() {
    // Сброс всех ответов и стилей
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.checked = false;
        input.parentElement.classList.remove('correct', 'incorrect');
    });
    
    const resultMessage = document.getElementById('finalTestResult');
    if (resultMessage) {
        resultMessage.className = 'result-message';
    }
    
    const gradeElement = document.getElementById('finalTestGrade');
    if (gradeElement) {
        gradeElement.style.display = 'none';
    }
}

// Функция для инициализации слайдов
function initSlides() {
    const slidesNav = document.getElementById('slides-nav');
    const workspace = document.getElementById('workspace');
    
    if (!slidesNav || !workspace) return;
    
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
    
    if (workspace && slide) {
        workspace.innerHTML = `
            <h2>${slide.title}</h2>
            ${slide.content}
        `;
        
        // Перерисовываем математические формулы
        renderMathJax();
        
        // Инициализируем панель рисования
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