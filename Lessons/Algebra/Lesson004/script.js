// Данные слайдов для темы "Многочлен"
const slidesData = [
    // Слайд 1 - Целеполагание
    {
        title: "Цели на урок:",
        content: `
            <div class="goal-setting-container">
                <div class="goals-list">
                    <div class="goal-item">
                        <i class="fas fa-book"></i>
                        <h4>Изучить понятие многочлена</h4>
                        <p>Усвоить определение многочлена и его основных элементов</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-layer-group"></i>
                        <h4>Научиться классифицировать многочлены</h4>
                        <p>Различать одночлены, двучлены, трёхчлены и многочлены</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-compress-arrows-alt"></i>
                        <h4>Освоить приведение подобных членов</h4>
                        <p>Научиться упрощать многочлены, приводя подобные слагаемые</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-sort-amount-down"></i>
                        <h4>Приводить многочлены к стандартному виду</h4>
                        <p>Освоить преобразование многочленов в стандартный вид</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-superscript"></i>
                        <h4>Определять степень многочлена</h4>
                        <p>Научиться находить степень многочлена стандартного вида</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-calculator"></i>
                        <h4>Вычислять значения многочленов</h4>
                        <p>Освоить подстановку значений переменных в многочлены</p>
                    </div>
                </div>
                
                <div class="motivation-quote">
                    <p>"Математика - это язык, на котором написана книга природы."</p>
                    <div class="quote-author">- Галилео Галилей</div>
                </div>
                
                <div class="completion-message">
                    <p><i class="fas fa-flag"></i> Успехов в освоении многочленов! Помните: алгебра - основа для понимания более сложных математических концепций.</p>
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
    // Слайд 2 - Теория: Определение многочлена
    {
        title: "Теория: Понятие многочлена",
        content: `
            <div class="content-block definition">
                <h3><i class="fas fa-book"></i> Определение</h3>
                <p><strong>Многочлен</strong> - выражение, которое является суммой нескольких одночленов.</p>
            </div>
            
            <div class="content-block example">
                <h3><i class="fas fa-calculator"></i> Примеры многочленов</h3>
                <p>\\[7xy + y - 11\\]</p>
                <p>\\[x^4 - 2x^3 + 5x^2 - x + 1\\]</p>
                <p>\\[3a - a + b\\]</p>
                <p>\\[11x - 2x\\]</p>
            </div>
            
            <div class="content-block definition">
                <h3><i class="fas fa-puzzle-piece"></i> Члены многочлена</h3>
                <p>Одночлены, из которых составлен многочлен, называют <strong>членами многочлена</strong>.</p>
                <p>Так, членами многочлена \\(7xy + y - 11\\) являются одночлены \\(7xy\\), \\(y\\) и \\(-11\\).</p>
            </div>
            
            <div class="content-block important">
                <h3><i class="fas fa-exclamation-circle"></i> Виды многочленов</h3>
                <p><strong>Двучлен</strong> - многочлен, состоящий из двух членов.</p>
                <p><strong>Трёхчлен</strong> - многочлен, состоящий из трёх членов.</p>
                <p>Одночлен рассматривают как частный случай многочлена.</p>
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
    // Слайд 3 - Классификация: Одночлены и многочлены
    {
        title: "Классификация: Одночлены и многочлены",
        content: `
            <div class="classification-exercise">
                <h3><i class="fas fa-object-group"></i> Классифицируйте выражения</h3>
                
                <div class="classification-task">
                    <p>Распределите выражения по соответствующим категориям, перетаскивая их из общего поля в нужные колонки:</p>
                    
                    <div class="items-pool" id="itemsPool">
                        <!-- Элементы для классификации будут добавляться динамически -->
                    </div>
                    
                    <div class="classification-container">
                        <div class="category">
                            <div class="category-header">Одночлены</div>
                            <div class="category-items" id="monomialsCategory">
                                <!-- Сюда будут перетаскиваться одночлены -->
                            </div>
                        </div>
                        
                        <div class="category">
                            <div class="category-header">Многочлены</div>
                            <div class="category-items" id="polynomialsCategory">
                                <!-- Сюда будут перетаскиваются многочлены -->
                            </div>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="checkClassification()">
                            <i class="fas fa-check-circle"></i> Проверить
                        </button>
                        <button class="btn" onclick="resetClassification()">
                            <i class="fas fa-redo"></i> Начать заново
                        </button>
                    </div>
                    
                    <div id="classificationResultMessage" class="result-message"></div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Подсказка</h3>
                <p><strong>Одночлен</strong> - выражение, представляющее собой произведение чисел, переменных и их степеней.</p>
                <p><strong>Многочлен</strong> - сумма нескольких одночленов.</p>
                <p><strong>Примеры:</strong></p>
                <p>Одночлены: \\(5x^2\\), \\(3a\\), \\(-7\\), \\(abc\\)</p>
                <p>Многочлены: \\(m - n\\), \\(p^2 + pq + q^2\\), \\(4x - x^3 + 2x - 5\\)</p>
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
    // Слайд 4 - Теория: Подобные члены и стандартный вид
    {
        title: "Теория: Подобные члены и стандартный вид",
        content: `
            <div class="content-block definition">
                <h3><i class="fas fa-compress-alt"></i> Подобные члены многочлена</h3>
                <p>Если среди одночленов, составляющих многочлен, есть подобные, их называют <strong>подобными членами многочлена</strong>.</p>
                <p>Пример: в многочлене \\(7a^2b - 3a + 4 - a^2b - 1 + a + b\\) подобные члены:</p>
                <p>\\(\\underline{7a^2b}\\) и \\(\\underline{-a^2b}\\)</p>
                <p>\\(\\underline{-3a}\\) и \\(\\underline{a}\\)</p>
                <p>\\(\\underline{4}\\) и \\(\\underline{-1}\\)</p>
            </div>
            
            <div class="content-block example">
                <h3><i class="fas fa-calculator"></i> Приведение подобных членов</h3>
                <p>Упростим многочлен, приведя подобные слагаемые:</p>
                <p>\\[7a^2b - 3a + 4 - a^2b - 1 + a + b = 6a^2b - 2a + b + 3\\]</p>
                <p>Такое упрощение называют <strong>приведением подобных членов многочлена</strong>.</p>
            </div>
            
            <div class="content-block definition">
                <h3><i class="fas fa-sort-amount-down"></i> Многочлен стандартного вида</h3>
                <p>Многочлен, состоящий из одночленов стандартного вида, среди которых нет подобных, называют <strong>многочленом стандартного вида</strong>.</p>
                <p>Примеры многочленов стандартного вида:</p>
                <p>\\[xy^2 + x^2y\\]</p>
                <p>\\[2a^2b\\]</p>
                <p>\\[5\\]</p>
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
    // Слайд 5 - Теория: Степень многочлена
    {
        title: "Теория: Степень многочлена",
        content: `
            <div class="content-block definition">
                <h3><i class="fas fa-superscript"></i> Степень многочлена стандартного вида</h3>
                <p>Рассмотрим многочлен стандартного вида:</p>
                <p>\\[2x^3y - x^2y^2 + 5x^2y + y - 2\\]</p>
                <p>Он составлен из одночленов: \\(2x^3y\\) (степень 4), \\(-x^2y^2\\) (степень 4), \\(5x^2y\\) (степень 3), \\(y\\) (степень 1), \\(-2\\) (степень 0).</p>
                <p>Наибольшая из этих степеней равна 4.</p>
            </div>
            
            <div class="content-block important">
                <h3><i class="fas fa-exclamation-circle"></i> Определение</h3>
                <p><strong>Степенью многочлена стандартного вида</strong> называют наибольшую из степеней одночленов, из которых этот многочлен составлен.</p>
            </div>
            
            <div class="content-block example">
                <h3><i class="fas fa-calculator"></i> Примеры</h3>
                <p>• Степень многочлена \\(3x^2 - xy + 5y^2\\) равна <strong>2</strong></p>
                <p>• Степень многочлена \\(3x^4y^2\\) равна <strong>6</strong></p>
                <p>• Степень многочлена \\(3\\) равна <strong>0</strong></p>
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
    // Слайд 6 - Интерактивное задание: Определение степени
    {
        title: "Интерактивное задание: Определение степени",
        content: `
            <div class="degree-exercise">
                <h3><i class="fas fa-superscript"></i> Определите степень многочлена</h3>
                
                <div class="degree-task">
                    <p>Для каждого многочлена выберите правильную степень, нажав на соответствующий кружок:</p>
                    
                    <div class="degree-example">
                        <p><strong>1.</strong> Многочлен: \\(4a^3b^2 - 2ab + 5\\)</p>
                        <div class="degree-options-container">
                            <div class="degree-option" onclick="checkDegree(1, 2)">2</div>
                            <div class="degree-option" onclick="checkDegree(1, 3)">3</div>
                            <div class="degree-option" onclick="checkDegree(1, 5)">5</div>
                            <div class="degree-option" onclick="checkDegree(1, 0)">0</div>
                        </div>
                        <div id="degreeResult1" class="result-hint"></div>
                    </div>
                    
                    <div class="degree-example">
                        <p><strong>2.</strong> Многочлен: \\(3x^2y^3 + 2x^4 - y^2\\)</p>
                        <div class="degree-options-container">
                            <div class="degree-option" onclick="checkDegree(2, 3)">3</div>
                            <div class="degree-option" onclick="checkDegree(2, 4)">4</div>
                            <div class="degree-option" onclick="checkDegree(2, 5)">5</div>
                            <div class="degree-option" onclick="checkDegree(2, 6)">6</div>
                        </div>
                        <div id="degreeResult2" class="result-hint"></div>
                    </div>
                    
                    <div class="degree-example">
                        <p><strong>3.</strong> Многочлен: \\(7m^2n - 3mn^2 + 8\\)</p>
                        <div class="degree-options-container">
                            <div class="degree-option" onclick="checkDegree(3, 2)">2</div>
                            <div class="degree-option" onclick="checkDegree(3, 3)">3</div>
                            <div class="degree-option" onclick="checkDegree(3, 4)">4</div>
                            <div class="degree-option" onclick="checkDegree(3, 0)">0</div>
                        </div>
                        <div id="degreeResult3" class="result-hint"></div>
                    </div>
                    
                    <div class="degree-example">
                        <p><strong>4.</strong> Многочлен: \\(2p^5q - p^3q^3 + 4pq^4\\)</p>
                        <div class="degree-options-container">
                            <div class="degree-option" onclick="checkDegree(4, 5)">5</div>
                            <div class="degree-option" onclick="checkDegree(4, 6)">6</div>
                            <div class="degree-option" onclick="checkDegree(4, 8)">8</div>
                            <div class="degree-option" onclick="checkDegree(4, 9)">9</div>
                        </div>
                        <div id="degreeResult4" class="result-hint"></div>
                    </div>
                    
                    <div class="degree-example">
                        <p><strong>5.</strong> Многочлен: \\(10x^6 - 3x^4y^2 + 2x^2y^3 - y^5\\)</p>
                        <div class="degree-options-container">
                            <div class="degree-option" onclick="checkDegree(5, 5)">5</div>
                            <div class="degree-option" onclick="checkDegree(5, 6)">6</div>
                            <div class="degree-option" onclick="checkDegree(5, 7)">7</div>
                            <div class="degree-option" onclick="checkDegree(5, 8)">8</div>
                        </div>
                        <div id="degreeResult5" class="result-hint"></div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="resetDegreeExercise()">
                            <i class="fas fa-redo"></i> Сбросить все
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Как найти степень многочлена</h3>
                <ol>
                    <li>Определите степень каждого одночлена в многочлене</li>
                    <li>Для одночлена степень равна сумме показателей степеней всех переменных</li>
                    <li>Найдите наибольшую из полученных степеней</li>
                </ol>
                <p>Пример: для \\(4a^3b^2\\) степень равна \\(3 + 2 = 5\\)</p>
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
    // Слайд 7 - Решение в тетради: Значение многочлена
    {
        title: "Решение в тетради: Значение многочлена",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Решите следующие задания в тетради. После выполнения нажмите кнопку "Показать решение" для проверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание 1:</strong> Найдите значение многочлена \\(2x^2 + x - 3\\) при \\(x = 0.5\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 2:</strong> Найдите значение многочлена \\(x^3 + 5xy\\) при \\(x = 3\\), \\(y = -2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 3:</strong> Найдите значение многочлена \\(a^2 - 2ab + b^2\\) при \\(a = -4\\), \\(b = 6\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 4:</strong> Найдите значение многочлена \\(y^4 + 7y^3 - 2y^2 - y + 10\\) при \\(y = -1\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution1()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution1">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>Задание 1:</strong></p>
                        <p>\\(2(0.5)^2 + 0.5 - 3 = 2 \\cdot 0.25 + 0.5 - 3 = 0.5 + 0.5 - 3 = 1 - 3 = -2\\)</p>
                        
                        <p><strong>Задание 2:</strong></p>
                        <p>\\(3^3 + 5 \\cdot 3 \\cdot (-2) = 27 - 30 = -3\\)</p>
                        
                        <p><strong>Задание 3:</strong></p>
                        <p>\\((-4)^2 - 2 \\cdot (-4) \\cdot 6 + 6^2 = 16 + 48 + 36 = 100\\)</p>
                        
                        <p><strong>Задание 4:</strong></p>
                        <p>\\((-1)^4 + 7(-1)^3 - 2(-1)^2 - (-1) + 10 = 1 - 7 - 2 + 1 + 10 = 3\\)</p>
                    </div>
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
    // Слайд 8 - Решение в тетради: Преобразование в стандартный вид
    {
        title: "Решение в тетради: Стандартный вид",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Решите следующие задания в тетради. После выполнения нажмите кнопку "Показать решение" для проверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание 1:</strong> Преобразуйте в многочлен стандартного вида: \\(4b^2 + a^2 + 9ab - 18b^2 - 9ab\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 2:</strong> Преобразуйте в многочлен стандартного вида: \\(8m^3 - 13mn - 9n^2 - 8m^3 - 2mn\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 3:</strong> Преобразуйте в многочлен стандартного вида: \\(2a^2b - 7ab^2 - 3a^2b + 2ab^2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 4:</strong> Преобразуйте в многочлен стандартного вида: \\(0.9c^4 + 1.1c^2 + c^4 - 0.6c^2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 5:</strong> Преобразуйте в многочлен стандартного вида: \\(3x^2 + 6x - 5 - x^2 - 10x + 3\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 6:</strong> Преобразуйте в многочлен стандартного вида: \\(b^3 - 3bc + 3b^3 + 8bc - 4b^3\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution2()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution2">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>Задание 1:</strong></p>
                        <p>\\(4b^2 + a^2 + 9ab - 18b^2 - 9ab = (4b^2 - 18b^2) + a^2 + (9ab - 9ab) = -14b^2 + a^2\\)</p>
                        <p>Степень: 2</p>
                        
                        <p><strong>Задание 2:</strong></p>
                        <p>\\(8m^3 - 13mn - 9n^2 - 8m^3 - 2mn = (8m^3 - 8m^3) + (-13mn - 2mn) - 9n^2 = -15mn - 9n^2\\)</p>
                        <p>Степень: 2</p>
                        
                        <p><strong>Задание 3:</strong></p>
                        <p>\\(2a^2b - 7ab^2 - 3a^2b + 2ab^2 = (2a^2b - 3a^2b) + (-7ab^2 + 2ab^2) = -a^2b - 5ab^2\\)</p>
                        <p>Степень: 3</p>
                        
                        <p><strong>Задание 4:</strong></p>
                        <p>\\(0.9c^4 + 1.1c^2 + c^4 - 0.6c^2 = (0.9c^4 + c^4) + (1.1c^2 - 0.6c^2) = 1.9c^4 + 0.5c^2\\)</p>
                        <p>Степень: 4</p>
                        
                        <p><strong>Задание 5:</strong></p>
                        <p>\\(3x^2 + 6x - 5 - x^2 - 10x + 3 = (3x^2 - x^2) + (6x - 10x) + (-5 + 3) = 2x^2 - 4x - 2\\)</p>
                        <p>Степень: 2</p>
                        
                        <p><strong>Задание 6:</strong></p>
                        <p>\\(b^3 - 3bc + 3b^3 + 8bc - 4b^3 = (b^3 + 3b^3 - 4b^3) + (-3bc + 8bc) = 5bc\\)</p>
                        <p>Степень: 2</p>
                    </div>
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
    // Слайд 9 - Решение в тетради: Подобные члены и значения
    {
        title: "Решение в тетради: Подобные члены",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Решите следующие задания в тетради. После выполнения нажмите кнопку "Показать решение" для проверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание 1:</strong> Приведите подобные члены и найдите значение многочлена \\(-3a^5 + 4a^3 + 7a^5 - 10a^3 + 12a\\) при \\(a = -2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 2:</strong> Приведите подобные члены и найдите значение многочлена \\(x^3y - 3xy^2 - 4x^3y + 8xy^2\\) при \\(x = -1\\), \\(y = -3\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 3:</strong> Приведите подобные члены и найдите значение многочлена \\(0.8x^2 - 0.3x - x^2 + 1.6 + 1.1x - 0.6\\) при \\(x = 5\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 4:</strong> Приведите подобные члены и найдите значение многочлена \\(\\frac{1}{3}a^2c + \\frac{3}{4}ac^2 + \\frac{1}{6}a^2c + 1.25ac^2\\) при \\(a = -4\\), \\(c = 3\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution3()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution3">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>Задание 1:</strong></p>
                        <p>\\(-3a^5 + 4a^3 + 7a^5 - 10a^3 + 12a = 4a^5 - 6a^3 + 12a\\)</p>
                        <p>При \\(a = -2\\): \\(4(-2)^5 - 6(-2)^3 + 12(-2) = 4(-32) - 6(-8) - 24 = -128 + 48 - 24 = -104\\)</p>
                        
                        <p><strong>Задание 2:</strong></p>
                        <p>\\(x^3y - 3xy^2 - 4x^3y + 8xy^2 = -3x^3y + 5xy^2\\)</p>
                        <p>При \\(x = -1\\), \\(y = -3\\): \\(-3(-1)^3(-3) + 5(-1)(-3)^2 = -3(-1)(-3) + 5(-1)(9) = -9 - 45 = -54\\)</p>
                        
                        <p><strong>Задание 3:</strong></p>
                        <p>\\(0.8x^2 - 0.3x - x^2 + 1.6 + 1.1x - 0.6 = -0.2x^2 + 0.8x + 1\\)</p>
                        <p>При \\(x = 5\\): \\(-0.2(5)^2 + 0.8(5) + 1 = -0.2(25) + 4 + 1 = -5 + 4 + 1 = 0\\)</p>
                        
                        <p><strong>Задание 4:</strong></p>
                        <p>\\(\\frac{1}{3}a^2c + \\frac{3}{4}ac^2 + \\frac{1}{6}a^2c + 1.25ac^2 = \\frac{1}{2}a^2c + 2ac^2\\)</p>
                        <p>При \\(a = -4\\), \\(c = 3\\): \\(\\frac{1}{2}(-4)^2(3) + 2(-4)(3)^2 = \\frac{1}{2}(16)(3) + 2(-4)(9) = 24 - 72 = -48\\)</p>
                    </div>
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
    // Слайд 10 - Итоговая комплексная работа
    {
        title: "Итоговая комплексная работа",
        content: `
            <div class="final-test-exercise">
                <h3><i class="fas fa-graduation-cap"></i> Итоговая проверочная работа</h3>
                
                <div class="final-test-task">
                    <p>Выполните следующие задания. После выполнения нажмите кнопку "Проверить работу" для получения оценки:</p>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>1.</strong> Что называют многочленом?</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="finalOption1" name="finalQuestion1" value="A">
                                <label for="finalOption1">Выражение, состоящее только из чисел.</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption2" name="finalQuestion1" value="B">
                                <label for="finalOption2">Выражение, которое является суммой нескольких одночленов.</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption3" name="finalQuestion1" value="C">
                                <label for="finalOption3">Выражение, содержащее только переменные.</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption4" name="finalQuestion1" value="D">
                                <label for="finalOption4">Выражение, которое всегда имеет степень 1.</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>2.</strong> Как называется многочлен, состоящий из двух членов?</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="finalOption5" name="finalQuestion2" value="A">
                                <label for="finalOption5">Трёхчлен</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption6" name="finalQuestion2" value="B">
                                <label for="finalOption6">Одночлен</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption7" name="finalQuestion2" value="C">
                                <label for="finalOption7">Двучлен</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption8" name="finalQuestion2" value="D">
                                <label for="finalOption8">Многочлен стандартного вида</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>3.</strong> Какие члены многочлена называются подобными?</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="finalOption9" name="finalQuestion3" value="A">
                                <label for="finalOption9">Члены, имеющие одинаковые коэффициенты.</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption10" name="finalQuestion3" value="B">
                                <label for="finalOption10">Члены, у которых одинаковые буквы и показатели степеней этих букв.</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption11" name="finalQuestion3" value="C">
                                <label for="finalOption11">Члены, стоящие рядом.</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption12" name="finalQuestion3" value="D">
                                <label for="finalOption12">Члены, которые можно сложить без изменения знака.</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>4.</strong> Что такое степень многочлена стандартного вида?</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="finalOption13" name="finalQuestion4" value="A">
                                <label for="finalOption13">Сумма степеней всех его членов.</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption14" name="finalQuestion4" value="B">
                                <label for="finalOption14">Количество членов в многочлене.</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption15" name="finalQuestion4" value="C">
                                <label for="finalOption15">Наибольшая из степеней одночленов, из которых он составлен.</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption16" name="finalQuestion4" value="D">
                                <label for="finalOption16">Степень первого члена многочлена.</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>5.</strong> Преобразуйте выражение в многочлен стандартного вида и укажите его степень: \\(5x^2 - 10x + 9 - 2x^2 + 14x - 20\\)</div>
                        <div class="input-field">
                            <span>Степень:</span>
                            <input type="text" id="finalDegree5" placeholder="Введите степень">
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>6.</strong> Найдите значение многочлена при \\(y = -1\\): \\(y^4 + 7y^3 - 2y^2 - y + 10\\)</div>
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
                    <li>Помните определение подобных членов</li>
                    <li>Для степени многочлена найдите наибольшую степень среди всех одночленов</li>
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
    // Слайд 11 - Вопросы для самоконтроля
    {
        title: "Вопросы для самоконтроля",
        content: `
            <div class="questions-container">
                <h3><i class="fas fa-question-circle"></i> Вопросы по теме "Многочлен"</h3>
                
                <div class="question-item">
                    <p><strong>1. Что называют многочленом?</strong></p>
                    <p>Дайте определение и приведите пример.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>2. Какой многочлен называют двучленом? Трёхчленом?</strong></p>
                    <p>Сформулируйте определения и приведите примеры.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>3. Что называют подобными членами многочлена?</strong></p>
                    <p>Объясните на примерах.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>4. Какой многочлен называют многочленом стандартного вида?</strong></p>
                    <p>Приведите примеры многочленов стандартного и нестандартного вида.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>5. Что называют степенью многочлена стандартного вида?</strong></p>
                    <p>Объясните, как найти степень многочлена.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>6. Как привести подобные члены в многочлене?</strong></p>
                    <p>Опишите алгоритм действий.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>7. Как найти значение многочлена при заданных значениях переменных?</strong></p>
                    <p>Приведите алгоритм действий.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>8. Где в реальной жизни встречаются многочлены?</strong></p>
                    <p>Приведите примеры практического применения.</p>
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
    // Слайд 12 - Задание на самоподготовку
    {
        title: "Задание на самоподготовку",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-home"></i> Самостоятельная работа</h3>
                
                <div class="notebook-task">
                    <p>Выполните следующие задания письменно в тетради для домашних работ:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание 1.</strong> Преобразуйте выражение в многочлен стандартного вида. Укажите его степень:</p>
                            <p>1) \\(5x^2 - 10x + 9 - 2x^2 + 14x - 20\\)</p>
                            <p>2) \\(-m^5 + 2m^4 - 6m^5 + 12m^3 - 18m^3\\)</p>
                            <p>3) \\(0.2a^3 + 1.4a^2 - 2.2 - 0.9a^3 + 1.8a^2 + 3\\)</p>
                            <p>4) \\(6x^2y - xy^2 - 8x^2y + 2xy^2 - xy + 7\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 2.</strong> Приведите подобные члены и найдите значение многочлена при указанных значениях переменных:</p>
                            <p>1) \\(2a^3 + 3ab - b^2 - 6a^3 - 7ab + 2b^2\\), если \\(a = 2\\), \\(b = -6\\)</p>
                            <p>2) \\(mn - 6mn^2 - 8mn - 6mn^2\\), если \\(m = 0.5\\), \\(n = -2\\)</p>
                            <p>3) \\(10xy^2 - 12x^2y + 9x^2y - 9xy^2\\), если \\(x = \\frac{1}{3}\\), \\(y = 9\\)</p>
                        </div>
                    </div>
                    
                    <div class="completion-message">
                        <p><i class="fas fa-flag-checkered"></i> Задание выполнено! Для проверки правильности выполнения можно вернуться к слайдам с решениями аналогичных задач.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы для самоподготовки</h3>
                <ul>
                    <li>Внимательно читайте условие каждого задания</li>
                    <li>Используйте свойства многочленов для упрощения выражений</li>
                    <li>Проверяйте свои вычисления</li>
                    <li>Если возникли трудности, вернитесь к теоретическому материалу</li>
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
    // Слайд 13 - Дополнительные материалы: Видео
    {
        title: "Дополнительные материалы",
        content: `
            <div class="video-exercise">
                <h3><i class="fas fa-video"></i> Образовательные видео</h3>
                
                <div class="video-task">
                    <p>Посмотрите видео для лучшего понимания темы "Многочлен":</p>
                    
                    <div class="video-container">
                        <iframe src="https://rutube.ru/play/embed/934a73165ae8a38c4f65debcd45b5ba2/?r=wd" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                    
                    <p style="text-align: center; margin-top: 15px; font-weight: bold;">Понятие многочлена. Свойства многочленов.</p>
                    
                    <div class="video-container" style="margin-top: 30px;">
                        <iframe src="https://rutube.ru/play/embed/bdf8f15e4a0bc2cd421660e1cd7583b7/?r=wd" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                    
                    <p style="text-align: center; margin-top: 15px; font-weight: bold;">Многочлены стандартного вида.</p>
                    
                    <div class="content-block tip">
                        <h3><i class="fas fa-lightbulb"></i> Вопросы для размышления после просмотра</h3>
                        <ol>
                            <li>Какие основные понятия, связанные с многочленами, были рассмотрены в видео?</li>
                            <li>Как определяются подобные члены многочлена?</li>
                            <li>Что такое стандартный вид многочлена и как к нему привести?</li>
                            <li>Как определяется степень многочлена?</li>
                        </ol>
                    </div>
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
    }
];

// Переменные для рисования
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentColor = '#007AFF';
let currentTool = 'pen';
let canvas, ctx;

// Переменные для задания "Классификация" (Слайд 3)
let monomials = ["5x^2", "3a", "2a^4bc", "-7", "abc"];
let polynomials = ["m - n", "p^2 + pq + q^2", "4x - x^3 + 2x - 5", "3a + 2b", "x^3 - 4x + 1"];
let draggedClassificationItem = null;

// Переменные для задания "Определение степени" (Слайд 6)
const correctDegrees = {
    1: 5,  // 4a³b² - 2ab + 5 -> степень 5 (3+2)
    2: 5,  // 3x²y³ + 2x⁴ - y² -> степень 5 (2+3)
    3: 3,  // 7m²n - 3mn² + 8 -> степень 3
    4: 6,  // 2p⁵q - p³q³ + 4pq⁴ -> степень 6 (3+3)
    5: 6   // 10x⁶ - 3x⁴y² + 2x²y³ - y⁵ -> степень 6
};

// Переменные для итоговой работы (Слайд 10)
const finalTestAnswers = {
    question1: "B",
    question2: "C",
    question3: "B",
    question4: "C",
    degree5: "2",
    answer6: "3"
};

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    initSlides();
    initTouchEvents();
    // Обновляем заголовок урока
    document.getElementById('lesson-title').textContent = "Многочлен";
    document.querySelector('.page-header p').textContent = "Изучим понятие многочлена, его свойства и научимся работать с ним";
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
    // Обработка для других элементов
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
    panel.classList.toggle('show');
    
    if (panel.classList.contains('show')) {
        setTimeout(initDrawingPanel, 100);
    }
}

// Функции для задания "Классификация" (Слайд 3)
function initClassification() {
    const itemsPool = document.getElementById('itemsPool');
    const monomialsCategory = document.getElementById('monomialsCategory');
    const polynomialsCategory = document.getElementById('polynomialsCategory');
    
    if (!itemsPool || !monomialsCategory || !polynomialsCategory) return;
    
    itemsPool.innerHTML = '';
    monomialsCategory.innerHTML = '';
    polynomialsCategory.innerHTML = '';
    
    // Создаем перемешанный список всех выражений
    const allExpressions = [...monomials, ...polynomials];
    const shuffledExpressions = shuffleArray([...allExpressions]);
    
    shuffledExpressions.forEach(expression => {
        const item = document.createElement('div');
        item.className = 'classification-item';
        item.innerHTML = `\\(${expression}\\)`;
        item.dataset.value = expression;
        item.draggable = true;
        
        item.addEventListener('dragstart', handleClassificationDragStart);
        item.addEventListener('dragend', handleClassificationDragEnd);
        
        // Добавляем обработчики для touch устройств
        item.addEventListener('touchstart', handleClassificationTouchStart);
        item.addEventListener('touchend', handleClassificationTouchEnd);
        
        itemsPool.appendChild(item);
    });
    
    // Добавляем обработчики событий для контейнеров
    const containers = [itemsPool, monomialsCategory, polynomialsCategory];
    containers.forEach(container => {
        container.addEventListener('dragover', handleClassificationDragOver);
        container.addEventListener('drop', handleClassificationDrop);
        container.addEventListener('dragenter', handleClassificationDragEnter);
        container.addEventListener('dragleave', handleClassificationDragLeave);
        
        // Для touch устройств
        container.addEventListener('touchmove', handleClassificationTouchMove);
        container.addEventListener('touchend', handleClassificationTouchDrop);
    });
    
    renderMathJax();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleClassificationDragStart() {
    draggedClassificationItem = this;
    this.classList.add('dragging');
}

function handleClassificationDragEnd() {
    this.classList.remove('dragging');
    draggedClassificationItem = null;
}

function handleClassificationDragOver(e) {
    e.preventDefault();
}

function handleClassificationDragEnter(e) {
    e.preventDefault();
    this.classList.add('over');
}

function handleClassificationDragLeave() {
    this.classList.remove('over');
}

function handleClassificationDrop(e) {
    e.preventDefault();
    this.classList.remove('over');
    
    if (draggedClassificationItem && (this.classList.contains('category-items') || this.classList.contains('items-pool'))) {
        this.appendChild(draggedClassificationItem);
    }
}

// Touch handlers для классификации
function handleClassificationTouchStart(e) {
    e.preventDefault();
    draggedClassificationItem = this;
    this.classList.add('dragging');
}

function handleClassificationTouchEnd() {
    this.classList.remove('dragging');
    draggedClassificationItem = null;
}

function handleClassificationTouchMove(e) {
    e.preventDefault();
}

function handleClassificationTouchDrop(e) {
    e.preventDefault();
    if (draggedClassificationItem) {
        // Определяем, в какой контейнер был тап
        const touch = e.changedTouches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        
        if (element && (element.classList.contains('category-items') || 
                        element.classList.contains('items-pool') ||
                        element.parentElement && (element.parentElement.classList.contains('category-items') || 
                                                  element.parentElement.classList.contains('items-pool')))) {
            let target = element;
            if (element.classList.contains('classification-item')) {
                target = element.parentElement;
            }
            target.appendChild(draggedClassificationItem);
        }
    }
}

function checkClassification() {
    const monomialsCategory = document.getElementById('monomialsCategory');
    const polynomialsCategory = document.getElementById('polynomialsCategory');
    
    if (!monomialsCategory || !polynomialsCategory) return;
    
    const monomialItems = Array.from(monomialsCategory.children).map(item => item.dataset.value);
    const polynomialItems = Array.from(polynomialsCategory.children).map(item => item.dataset.value);
    
    const isMonomialsCorrect = monomials.every(exp => monomialItems.includes(exp)) &&
        monomialItems.every(exp => monomials.includes(exp));
    
    const isPolynomialsCorrect = polynomials.every(exp => polynomialItems.includes(exp)) &&
        polynomialItems.every(exp => polynomials.includes(exp));
    
    const isCorrect = isMonomialsCorrect && isPolynomialsCorrect;
    
    const resultMessage = document.getElementById('classificationResultMessage');
    if (!resultMessage) return;
    
    resultMessage.className = 'result-message';
    
    // Очищаем предыдущие классы
    document.querySelectorAll('.classification-item').forEach(item => {
        item.classList.remove('correct', 'incorrect');
    });
    
    if (isCorrect) {
        resultMessage.classList.add('success');
        resultMessage.innerHTML = `<i class="fas fa-trophy"></i> Отлично! Все выражения классифицированы правильно!`;
        
        document.querySelectorAll('.classification-item').forEach(item => {
            item.classList.add('correct');
        });
    } else {
        resultMessage.classList.add('error');
        resultMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> Классификация выполнена неверно. Проверьте правильность распределения.`;
        
        // Подсвечиваем ошибки
        document.querySelectorAll('.classification-item').forEach(item => {
            if (monomials.includes(item.dataset.value) && monomialItems.includes(item.dataset.value)) {
                item.classList.add('correct');
            } else if (polynomials.includes(item.dataset.value) && polynomialItems.includes(item.dataset.value)) {
                item.classList.add('correct');
            } else if (monomials.includes(item.dataset.value) && polynomialItems.includes(item.dataset.value)) {
                item.classList.add('incorrect');
            } else if (polynomials.includes(item.dataset.value) && monomialItems.includes(item.dataset.value)) {
                item.classList.add('incorrect');
            }
        });
    }
}

function resetClassification() {
    initClassification();
    const resultMessage = document.getElementById('classificationResultMessage');
    if (resultMessage) {
        resultMessage.className = 'result-message';
    }
}

// Функции для задания "Определение степени" (Слайд 6)
function checkDegree(exampleNumber, selectedDegree) {
    const correctDegree = correctDegrees[exampleNumber];
    const resultElement = document.getElementById(`degreeResult${exampleNumber}`);
    
    if (!resultElement) return;
    
    // Очищаем предыдущие классы у всех кнопок этого примера
    const exampleElement = resultElement.parentElement;
    const buttons = exampleElement.querySelectorAll('.degree-option');
    buttons.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Находим выбранную кнопку
    const selectedButton = Array.from(buttons).find(btn => 
        parseInt(btn.textContent) === selectedDegree
    );
    
    if (selectedButton) {
        selectedButton.classList.add('selected');
        
        if (selectedDegree === correctDegree) {
            selectedButton.classList.add('correct');
            resultElement.innerHTML = `<span class="success"><i class="fas fa-check-circle"></i> Верно! Наибольшая степень одночлена равна ${correctDegree}</span>`;
        } else {
            selectedButton.classList.add('incorrect');
            resultElement.innerHTML = `<span class="error"><i class="fas fa-times-circle"></i> Неверно. Правильный ответ: ${correctDegree}</span>`;
        }
    }
}

function resetDegreeExercise() {
    // Сбрасываем все кнопки
    for (let i = 1; i <= 5; i++) {
        const buttons = document.querySelectorAll(`#degreeResult${i}`).forEach(resultElement => {
            const exampleElement = resultElement.parentElement;
            const buttons = exampleElement.querySelectorAll('.degree-option');
            buttons.forEach(btn => {
                btn.classList.remove('selected', 'correct', 'incorrect');
            });
        });
        
        // Очищаем сообщения
        const resultElement = document.getElementById(`degreeResult${i}`);
        if (resultElement) {
            resultElement.innerHTML = '';
        }
    }
}

// Функции для решения в тетради
function showNotebookSolution1() {
    const solution = document.getElementById('notebookSolution1');
    if (solution) {
        solution.classList.add('show');
        renderMathJax();
    }
}

function showNotebookSolution2() {
    const solution = document.getElementById('notebookSolution2');
    if (solution) {
        solution.classList.add('show');
        renderMathJax();
    }
}

function showNotebookSolution3() {
    const solution = document.getElementById('notebookSolution3');
    if (solution) {
        solution.classList.add('show');
        renderMathJax();
    }
}

// Функции для итоговой работы
function checkFinalTest() {
    let correctCount = 0;
    const totalQuestions = 6;
    
    // Вопрос 1
    const selectedOption1 = document.querySelector('input[name="finalQuestion1"]:checked');
    if (selectedOption1 && selectedOption1.value === finalTestAnswers.question1) {
        selectedOption1.parentElement.classList.add('correct');
        correctCount++;
    } else if (selectedOption1) {
        selectedOption1.parentElement.classList.add('incorrect');
    }
    
    // Вопрос 2
    const selectedOption2 = document.querySelector('input[name="finalQuestion2"]:checked');
    if (selectedOption2 && selectedOption2.value === finalTestAnswers.question2) {
        selectedOption2.parentElement.classList.add('correct');
        correctCount++;
    } else if (selectedOption2) {
        selectedOption2.parentElement.classList.add('incorrect');
    }
    
    // Вопрос 3
    const selectedOption3 = document.querySelector('input[name="finalQuestion3"]:checked');
    if (selectedOption3 && selectedOption3.value === finalTestAnswers.question3) {
        selectedOption3.parentElement.classList.add('correct');
        correctCount++;
    } else if (selectedOption3) {
        selectedOption3.parentElement.classList.add('incorrect');
    }
    
    // Вопрос 4
    const selectedOption4 = document.querySelector('input[name="finalQuestion4"]:checked');
    if (selectedOption4 && selectedOption4.value === finalTestAnswers.question4) {
        selectedOption4.parentElement.classList.add('correct');
        correctCount++;
    } else if (selectedOption4) {
        selectedOption4.parentElement.classList.add('incorrect');
    }
    
    // Вопрос 5 - только степень
    const degree5 = document.getElementById('finalDegree5').value.trim();
    
    // Проверяем степень
    if (degree5 === finalTestAnswers.degree5) {
        document.getElementById('finalDegree5').classList.add('correct');
        correctCount++;
    } else {
        document.getElementById('finalDegree5').classList.add('incorrect');
    }
    
    // Вопрос 6
    const answer6 = document.getElementById('finalAnswer6').value.trim();
    if (answer6 === finalTestAnswers.answer6) {
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
    const gradeElement = document.getElementById('finalTestGrade');
    
    if (resultMessage) {
        resultMessage.className = 'result-message';
        resultMessage.innerHTML = `<i class="fas fa-chart-bar"></i> Правильно решено ${correctCount} из ${totalQuestions} заданий (${percentage.toFixed(1)}%)`;
    }
    
    if (gradeElement) {
        gradeElement.className = `grade-result ${gradeClass}`;
        gradeElement.innerHTML = `<i class="fas fa-star"></i> Ваша оценка: ${grade}`;
        gradeElement.style.display = 'block';
    }
}

function resetFinalTest() {
    // Сбрасываем радиокнопки
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
        radio.parentElement.classList.remove('correct', 'incorrect');
    });
    
    // Сбрасываем текстовые поля
    const textFields = ['finalDegree5', 'finalAnswer6'];
    textFields.forEach(id => {
        const field = document.getElementById(id);
        if (field) {
            field.value = '';
            field.classList.remove('correct', 'incorrect');
        }
    });
    
    // Сбрасываем сообщения
    const resultMessage = document.getElementById('finalTestResult');
    const gradeElement = document.getElementById('finalTestGrade');
    
    if (resultMessage) {
        resultMessage.className = 'result-message';
    }
    
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
        case 2: // Слайд 3 - Классификация
            setTimeout(() => {
                initClassification();
                initDrawingPanel();
            }, 100);
            break;
        case 5: // Слайд 6 - Определение степени
            setTimeout(() => {
                // Инициализация уже выполнена в HTML
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