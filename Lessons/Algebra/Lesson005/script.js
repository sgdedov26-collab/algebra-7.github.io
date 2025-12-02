// Данные слайдов для урока "Сложение и вычитание многочленов"
const slidesData = [
    // Слайд 1 - Целеполагание
    {
        title: "Целеполагание",
        content: `
            <div class="goal-setting-container">
                <div class="goals-list">
                    <div class="goal-item">
                        <i class="fas fa-bullseye"></i>
                        <h4>Изучить сложение многочленов</h4>
                        <p>Освоить правила раскрытия скобок со знаком "плюс" перед ними</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-calculator"></i>
                        <h4>Изучить вычитание многочленов</h4>
                        <p>Освоить правила раскрытия скобок со знаком "минус" перед ними</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-superscript"></i>
                        <h4>Приводить подобные слагаемые</h4>
                        <p>Научиться находить и приводить подобные члены в многочленах</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-balance-scale"></i>
                        <h4>Упрощать выражения</h4>
                        <p>Научиться упрощать алгебраические выражения с многочленами</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-tasks"></i>
                        <h4>Решать уравнения</h4>
                        <p>Применять сложение и вычитание многочленов для решения уравнений</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-brain"></i>
                        <h4>Развивать алгебраическое мышление</h4>
                        <p>Сформировать навыки работы с алгебраическими выражениями</p>
                    </div>
                </div>
                
                <div class="motivation-quote">
                    <p>"Математика - это язык, на котором написана книга природы."</p>
                    <div class="quote-author">- Галилео Галилей</div>
                </div>
                
                <div class="completion-message">
                    <p><i class="fas fa-flag"></i> Успехов в освоении сложения и вычитания многочленов!</p>
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
    // Слайд 2 - Собери предложение
    {
        title: "Собери предложение",
        content: `
            <div class="word-cloud-exercise">
                <h3><i class="fas fa-cloud"></i> Соберите определение многочлена</h3>
                
                <div class="definition-task">
                    <p>Перетащите слова в правильном порядке, чтобы составить определение многочлена:</p>
                    
                    <div class="word-cloud" id="wordCloud">
                        <!-- Слова будут добавляться динамически -->
                    </div>
                    
                    <div class="sentence-area" id="sentenceArea">
                        <p>Перетащите слова сюда, чтобы составить предложение:</p>
                        <div class="drop-zone" id="dropZone"></div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="checkSentence()">
                            <i class="fas fa-check-circle"></i> Проверить
                        </button>
                        <button class="btn" onclick="resetSentence()">
                            <i class="fas fa-redo"></i> Начать заново
                        </button>
                    </div>
                    
                    <div id="sentenceResultMessage" class="result-message"></div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Подсказка</h3>
                <p>Вспомните: многочлен - это алгебраическое выражение, представляющее собой сумму нескольких одночленов.</p>
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
    // Слайд 3 - Теория: Раскрытие скобок
    {
        title: "Теория: Раскрытие скобок",
        content: `
            <div class="content-block theory">
                <h3><i class="fas fa-book-open"></i> Правила раскрытия скобок</h3>
                <p>При сложении и вычитании многочленов нужно раскрывать скобки.</p>
            </div>
            
            <div class="content-block definition">
                <h3><i class="fas fa-plus-circle"></i> Если перед скобками стоит знак «плюс»:</h3>
                <ol>
                    <li>опускают скобки;</li>
                    <li>опускают знак «плюс»;</li>
                    <li>все знаки слагаемых в скобках оставляют без изменения.</li>
                </ol>
                <div class="formula">
                    \\(a + (b - c - d) = a + b - c - d\\)
                </div>
            </div>
            
            <div class="content-block definition">
                <h3><i class="fas fa-minus-circle"></i> Если перед скобками стоит знак «минус»:</h3>
                <ol>
                    <li>опускают скобки,</li>
                    <li>опускают знак «минус»,</li>
                    <li>все знаки слагаемых в скобках заменяют на противоположные.</li>
                </ol>
                <div class="formula">
                    \\(a - (b - c - d) = a - b + c + d\\)
                </div>
            </div>
            
            <div class="content-block important">
                <h3><i class="fas fa-exclamation-triangle"></i> Важно!</h3>
                <p>Если перед скобками нет ни знака «плюс», ни знака «минус», то подразумевается, что стоит знак «плюс».</p>
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
    // Слайд 4 - Теория: Алгоритм сложения/вычитания многочленов
    {
        title: "Теория: Алгоритм действий",
        content: `
            <div class="content-block theory">
                <h3><i class="fas fa-list-ol"></i> Алгоритм сложения/вычитания многочленов</h3>
                <p>Чтобы сложить (вычесть) многочлены, нужно:</p>
                <ol>
                    <li>раскрыть скобки;</li>
                    <li>привести подобные слагаемые в полученном многочлене.</li>
                </ol>
            </div>
            
            <div class="content-block example">
                <h3><i class="fas fa-calculator"></i> Примеры</h3>
                <p><strong>Пример 1:</strong></p>
                <p>\\(3a^2 - 5a - (2a^2 - a + 1) = 3a^2 - 5a - 2a^2 + a - 1 = a^2 - 4a - 1\\)</p>
                
                <p><strong>Пример 2:</strong></p>
                <p>\\((-3x^2y^2 + 2xy - 7) + (x^2y^2 + 4xy - 2) = -3x^2y^2 + 2xy - 7 + x^2y^2 + 4xy - 2 = -2x^2y^2 + 6xy - 9\\)</p>
            </div>
            
            <div class="content-block important">
                <h3><i class="fas fa-exclamation-triangle"></i> Важные замечания</h3>
                <p>1. При сложении и вычитании многочленов всегда получается многочлен.</p>
                <p>2. Сложение (вычитание) многочленов является тождественным преобразованием.</p>
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
    // Слайд 5 - Решение в тетради (1)
    {
        title: "Решение в тетради с самопроверкой",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Упростите выражение</h3>
                
                <div class="notebook-task">
                    <p>Решите задания письменно в тетради. После выполнения нажмите кнопку "Проверить решение" для самопроверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1.</strong> \\(4a + (2a + 8b)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2.</strong> \\(6b + (-3b + 2c)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3.</strong> \\(7x + (7y - x)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>4.</strong> \\(9m + (-7m - 2n)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>5.</strong> \\(8c - (6c + b)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>6.</strong> \\(3x - (-5y + 3x)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>7.</strong> \\(6a - (5a - h)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>8.</strong> \\(6n - (-5m - 6n)\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution1()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution1">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1.</strong> \\(4a + (2a + 8b) = 4a + 2a + 8b = 6a + 8b\\)</p>
                        <p><strong>2.</strong> \\(6b + (-3b + 2c) = 6b - 3b + 2c = 3b + 2c\\)</p>
                        <p><strong>3.</strong> \\(7x + (7y - x) = 7x + 7y - x = 6x + 7y\\)</p>
                        <p><strong>4.</strong> \\(9m + (-7m - 2n) = 9m - 7m - 2n = 2m - 2n\\)</p>
                        <p><strong>5.</strong> \\(8c - (6c + b) = 8c - 6c - b = 2c - b\\)</p>
                        <p><strong>6.</strong> \\(3x - (-5y + 3x) = 3x + 5y - 3x = 5y\\)</p>
                        <p><strong>7.</strong> \\(6a - (5a - h) = 6a - 5a + h = a + h\\)</p>
                        <p><strong>8.</strong> \\(6n - (-5m - 6n) = 6n + 5m + 6n = 5m + 12n\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы</h3>
                <p>При выполнении заданий помните:</p>
                <ul>
                    <li>Если перед скобками стоит "+", знаки в скобках не меняются</li>
                    <li>Если перед скобками стоит "-", все знаки в скобках меняются на противоположные</li>
                    <li>Подобные слагаемые можно подчеркивать одинаковыми линиями</li>
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
    // Слайд 6 - Решение в тетради (2)
    {
        title: "Решение в тетради с самопроверкой",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Раскройте скобки и приведите подобные</h3>
                
                <div class="notebook-task">
                    <p>Решите задания письменно в тетради. После выполнения нажмите кнопку "Проверить решение" для самопроверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1.</strong> \\((5a + 2b) + (3a - b)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2.</strong> \\((3x^2 + x) + (-x^2 + 1)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3.</strong> \\((n^2 - 5n) + (3n^2 - n)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>4.</strong> \\((t^3 - 2t) - (t^3 + 3t)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>5.</strong> \\((5y^2 + y) - (-3y + 1)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>6.</strong> \\((2a^4 - 9bc) - (-6a^4 - 9bc)\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution2()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution2">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1.</strong> \\((5a + 2b) + (3a - b) = 5a + 2b + 3a - b = 8a + b\\)</p>
                        <p><strong>2.</strong> \\((3x^2 + x) + (-x^2 + 1) = 3x^2 + x - x^2 + 1 = 2x^2 + x + 1\\)</p>
                        <p><strong>3.</strong> \\((n^2 - 5n) + (3n^2 - n) = n^2 - 5n + 3n^2 - n = 4n^2 - 6n\\)</p>
                        <p><strong>4.</strong> \\((t^3 - 2t) - (t^3 + 3t) = t^3 - 2t - t^3 - 3t = -5t\\)</p>
                        <p><strong>5.</strong> \\((5y^2 + y) - (-3y + 1) = 5y^2 + y + 3y - 1 = 5y^2 + 4y - 1\\)</p>
                        <p><strong>6.</strong> \\((2a^4 - 9bc) - (-6a^4 - 9bc) = 2a^4 - 9bc + 6a^4 + 9bc = 8a^4\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы</h3>
                <p>В решении подобные слагаемые нужно подчеркивать одинаково: одной чертой, двойной чертой или волнистой линией.</p>
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
    // Слайд 7 - Решение в тетради (3)
    {
        title: "Решение в тетради с самопроверкой",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Найдите значение многочлена</h3>
                
                <div class="notebook-task">
                    <p>Решите задания письменно в тетради. После выполнения нажмите кнопку "Проверить решение" для самопроверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1.</strong> \\(-3a^5 + 4a^3 + 7a^5 - 10a^3 + 12a\\), если \\(a = -2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2.</strong> \\(x^3y - 3xy^2 - 4x^3y + 8xy^2\\), если \\(x = -1, y = -3\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3.</strong> \\(0,8x^2 - 0,3x - x^2 + 1,6 + 1,1x - 0,6\\), если \\(x = 5\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>4.</strong> \\(\\frac{1}{3}a^2c + \\frac{3}{4}ac^2 + \\frac{1}{6}a^2c + 1,25ac^2\\), если \\(a = -4, c = 3\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution3()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution3">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1.</strong> Сначала упростим многочлен:</p>
                        <p>\\(-3a^5 + 4a^3 + 7a^5 - 10a^3 + 12a = 4a^5 - 6a^3 + 12a\\)</p>
                        <p>При \\(a = -2\\):</p>
                        <p>\\(4(-2)^5 - 6(-2)^3 + 12(-2) = 4(-32) - 6(-8) - 24 = -128 + 48 - 24 = -104\\)</p>
                        
                        <p><strong>2.</strong> Сначала упростим многочлен:</p>
                        <p>\\(x^3y - 3xy^2 - 4x^3y + 8xy^2 = -3x^3y + 5xy^2\\)</p>
                        <p>При \\(x = -1, y = -3\\):</p>
                        <p>\\(-3(-1)^3(-3) + 5(-1)(-3)^2 = -3(-1)(-3) + 5(-1)(9) = -3(3) + 5(-9) = -9 - 45 = -54\\)</p>
                        
                        <p><strong>3.</strong> Сначала упростим многочлен:</p>
                        <p>\\(0,8x^2 - 0,3x - x^2 + 1,6 + 1,1x - 0,6 = -0,2x^2 + 0,8x + 1\\)</p>
                        <p>При \\(x = 5\\):</p>
                        <p>\\(-0,2(5)^2 + 0,8(5) + 1 = -0,2(25) + 4 + 1 = -5 + 4 + 1 = 0\\)</p>
                        
                        <p><strong>4.</strong> Сначала упростим многочлен:</p>
                        <p>\\(\\frac{1}{3}a^2c + \\frac{3}{4}ac^2 + \\frac{1}{6}a^2c + 1,25ac^2 = (\\frac{1}{3} + \\frac{1}{6})a^2c + (\\frac{3}{4} + 1,25)ac^2\\)</p>
                        <p>\\(= (\\frac{2}{6} + \\frac{1}{6})a^2c + (0,75 + 1,25)ac^2 = \\frac{1}{2}a^2c + 2ac^2\\)</p>
                        <p>При \\(a = -4, c = 3\\):</p>
                        <p>\\(\\frac{1}{2}(-4)^2(3) + 2(-4)(3)^2 = \\frac{1}{2}(16)(3) + 2(-4)(9) = \\frac{1}{2} \\cdot 48 - 8 \\cdot 9 = 24 - 72 = -48\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Алгоритм решения</h3>
                <ol>
                    <li>Приведите подобные члены многочлена</li>
                    <li>Упростите выражение</li>
                    <li>Подставьте значения переменных</li>
                    <li>Выполните вычисления</li>
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
    // Слайд 8 - Решение в тетради (4)
    {
        title: "Решение в тетради с самопроверкой",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите уравнения</h3>
                
                <div class="notebook-task">
                    <p>Решите уравнения, выполнив тождественные преобразования в их левой части. После решения нажмите кнопку "Проверить решение" для самопроверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>1.</strong> \\((7x - 9) + (2x - 8) = 19\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>2.</strong> \\((0,2x - 7) - (6 - 0,1x) = 2\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>3.</strong> \\(1,3 + 0,2x - (0,5x - 1,1) = 1,9\\)</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution4()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution4">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1.</strong> Раскроем скобки:</p>
                        <p>\\((7x - 9) + (2x - 8) = 19\\)</p>
                        <p>\\(7x - 9 + 2x - 8 = 19\\)</p>
                        <p>Приведем подобные:</p>
                        <p>\\(9x - 17 = 19\\)</p>
                        <p>Перенесем -17 вправо:</p>
                        <p>\\(9x = 19 + 17\\)</p>
                        <p>\\(9x = 36\\)</p>
                        <p>Разделим на 9:</p>
                        <p>\\(x = 4\\)</p>
                        
                        <p><strong>2.</strong> Раскроем скобки:</p>
                        <p>\\((0,2x - 7) - (6 - 0,1x) = 2\\)</p>
                        <p>\\(0,2x - 7 - 6 + 0,1x = 2\\)</p>
                        <p>Приведем подобные:</p>
                        <p>\\(0,3x - 13 = 2\\)</p>
                        <p>Перенесем -13 вправо:</p>
                        <p>\\(0,3x = 2 + 13\\)</p>
                        <p>\\(0,3x = 15\\)</p>
                        <p>Разделим на 0,3:</p>
                        <p>\\(x = 50\\)</p>
                        
                        <p><strong>3.</strong> Раскроем скобки:</p>
                        <p>\\(1,3 + 0,2x - (0,5x - 1,1) = 1,9\\)</p>
                        <p>\\(1,3 + 0,2x - 0,5x + 1,1 = 1,9\\)</p>
                        <p>Приведем подобные:</p>
                        <p>\\(2,4 - 0,3x = 1,9\\)</p>
                        <p>Перенесем 2,4 вправо:</p>
                        <p>\\(-0,3x = 1,9 - 2,4\\)</p>
                        <p>\\(-0,3x = -0,5\\)</p>
                        <p>Разделим на -0,3:</p>
                        <p>\\(x = \\frac{5}{3} \\approx 1,67\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Алгоритм решения уравнений</h3>
                <ol>
                    <li>Раскройте скобки</li>
                    <li>Приведите подобные слагаемые</li>
                    <li>Перенесите слагаемые с переменной в одну часть уравнения, без переменной - в другую</li>
                    <li>Решите полученное уравнение</li>
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
    // Слайд 9 - Итоговая комплексная работа
    {
        title: "Итоговая комплексная работа",
        content: `
            <div class="final-test-exercise">
                <h3><i class="fas fa-graduation-cap"></i> Проверочная работа</h3>
                
                <div class="final-test-task">
                    <p>Выполните следующие задания. После выполнения нажмите кнопку "Проверить работу" для получения оценки:</p>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>Задание 1.</strong> При раскрытии скобок в выражении a – (b + c – d) получится:</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="finalOption1" name="finalQuestion1" value="1">
                                <label for="finalOption1">a – b + c – d</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption2" name="finalQuestion1" value="2">
                                <label for="finalOption2">a + b + c – d</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption3" name="finalQuestion1" value="3">
                                <label for="finalOption3">a – b – c + d</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption4" name="finalQuestion1" value="4">
                                <label for="finalOption4">a – b – c – d</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>Задание 2.</strong> Выберите верное утверждение (может быть несколько):</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck1" value="1">
                                <label for="finalCheck1">(x + y) + (z – x) = y + z</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck2" value="2">
                                <label for="finalCheck2">(a – b) – (c – a) = 2a – b – c</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck3" value="3">
                                <label for="finalCheck3">5 – (2x + 3) = 5 – 2x + 3</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>Задание 3.</strong> В выражении 5y – (3 – 2y) + (y + 1) после раскрытия скобок получится:</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="finalOption5" name="finalQuestion3" value="1">
                                <label for="finalOption5">5y – 3 – 2y + y + 1</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption6" name="finalQuestion3" value="2">
                                <label for="finalOption6">5y – 3 + 2y + y + 1</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption7" name="finalQuestion3" value="3">
                                <label for="finalOption7">5y + 3 – 2y + y + 1</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>Задание 4.</strong> Какие из выражений тождественно равны 2a – b? (может быть несколько):</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck4" value="1">
                                <label for="finalCheck4">(3a – b) – a</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck5" value="2">
                                <label for="finalCheck5">a – (b + a)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck6" value="3">
                                <label for="finalCheck6">(a + 1) + (a – b – 1)</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck7" value="4">
                                <label for="finalCheck7">(2a + b) – 2b</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>Задание 5.</strong> Какой нужно поставить знак вместо «?», чтобы равенство стало верным: 7 – (2x ? 3) = 7 – 2x + 3</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="finalOption8" name="finalQuestion5" value="1">
                                <label for="finalOption8">+</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption9" name="finalQuestion5" value="2">
                                <label for="finalOption9">–</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption10" name="finalQuestion5" value="3">
                                <label for="finalOption10">*</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption11" name="finalQuestion5" value="4">
                                <label for="finalOption11">:</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question"><strong>Задание 6.</strong> Оцените решение одноклассника:</div>
                        <p>Задание: упростить (−x + 2) + (3 – x)</p>
                        <p>Ответ: –2x + 5</p>
                        <p>Его решение:</p>
                        <p>−x + 2 + 3 − x = −x − x + 2 + 3 = −2x + 5</p>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="radio" id="finalOption12" name="finalQuestion6" value="1">
                                <label for="finalOption12">Решение выполнено верно</label>
                            </div>
                            <div class="test-option">
                                <input type="radio" id="finalOption13" name="finalQuestion6" value="2">
                                <label for="finalOption13">В решении допущена ошибка</label>
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
    // Слайд 10 - Вопросы для самоконтроля
    {
        title: "Вопросы для самоконтроля",
        content: `
            <div class="questions-container">
                <h3><i class="fas fa-question-circle"></i> Вопросы по теме "Сложение и вычитание многочленов"</h3>
                
                <div class="question-item">
                    <p><strong>1. Что называется многочленом?</strong></p>
                    <p>Дайте определение и приведите пример.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>2. Какие слагаемые называются подобными?</strong></p>
                    <p>Сформулируйте определение и приведите примеры подобных и неподобных слагаемых.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>3. Какой знак подразумевается, если перед скобками ничего не написано?</strong></p>
                    <p>Объясните правило.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>4. Как изменяются знаки слагаемых при раскрытии скобок, перед которыми стоит минус?</strong></p>
                    <p>Сформулируйте правило и проиллюстрируйте примером.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>5. Чем отличается раскрытие скобок в выражении a + (b − c) и a − (b − c)?</strong></p>
                    <p>Покажите на примерах.</p>
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
    // Слайд 11 - Задание на самоподготовку
    {
        title: "Задание на самоподготовку",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-home"></i> Самостоятельная работа</h3>
                
                <div class="notebook-task">
                    <p>Выполните следующие задания письменно в тетради. После выполнения нажмите кнопку "Показать решение" для самопроверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание 1.</strong> Упростите выражение:</p>
                            <p>1) \\(5x + (3x + 7y)\\)</p>
                            <p>2) \\(7a + (-2a + c)\\)</p>
                            <p>3) \\(9b + (8c - b)\\)</p>
                            <p>4) \\(5k + (-8n - 3k)\\)</p>
                            <p>5) \\(9t - (8t - n)\\)</p>
                            <p>6) \\(7a - (-9b + 7a)\\)</p>
                            <p>7) \\(b - (c - 2b)\\)</p>
                            <p>8) \\(8x - (-7x - 2y)\\)</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Задание 2.</strong> Раскройте скобки и приведите подобные слагаемые:</p>
                            <p>а) \\((8m - 9n) + (-7m + n)\\)</p>
                            <p>б) \\((5a^2 - a) + (-5a^2 - 2a)\\)</p>
                            <p>в) \\((x^2 + 5x) - (8x^2 - 5x)\\)</p>
                            <p>г) \\((7y^8 - 3xz) - (-2y^8 - 3xz)\\)</p>
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
                        <p>1) \\(5x + (3x + 7y) = 5x + 3x + 7y = 8x + 7y\\)</p>
                        <p>2) \\(7a + (-2a + c) = 7a - 2a + c = 5a + c\\)</p>
                        <p>3) \\(9b + (8c - b) = 9b + 8c - b = 8b + 8c\\)</p>
                        <p>4) \\(5k + (-8n - 3k) = 5k - 8n - 3k = 2k - 8n\\)</p>
                        <p>5) \\(9t - (8t - n) = 9t - 8t + n = t + n\\)</p>
                        <p>6) \\(7a - (-9b + 7a) = 7a + 9b - 7a = 9b\\)</p>
                        <p>7) \\(b - (c - 2b) = b - c + 2b = 3b - c\\)</p>
                        <p>8) \\(8x - (-7x - 2y) = 8x + 7x + 2y = 15x + 2y\\)</p>
                        
                        <p><strong>Задание 2:</strong></p>
                        <p>а) \\((8m - 9n) + (-7m + n) = 8m - 9n - 7m + n = m - 8n\\)</p>
                        <p>б) \\((5a^2 - a) + (-5a^2 - 2a) = 5a^2 - a - 5a^2 - 2a = -3a\\)</p>
                        <p>в) \\((x^2 + 5x) - (8x^2 - 5x) = x^2 + 5x - 8x^2 + 5x = -7x^2 + 10x\\)</p>
                        <p>г) \\((7y^8 - 3xz) - (-2y^8 - 3xz) = 7y^8 - 3xz + 2y^8 + 3xz = 9y^8\\)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Дополнительные материалы</h3>
                <p>Для более глубокого изучения темы вы можете посмотреть видеоуроки:</p>
                <ul>
                    <li><a href="https://rutube.ru/video/5d43ab3ab2755a9030&db2977acea274/?r=wd" target="_blank">Сложение и вычитание многочленов</a></li>
                    <li><a href="https://rutube.ru/video/e792dd8ce5054b6bc202af7071a34b43/?r=wd" target="_blank">Сумма и разность многочленов</a></li>
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

// Переменные для задания "Собери предложение"
let draggedWord = null;
let correctSentence = ["Многочлен", "-", "выражение", ",", "которое", "является", "суммой", "нескольких", "одночленов"];

// Переменные для итоговой работы
const finalTestAnswers = {
    question1: "3", // a – b – c + d
    question2: ["1", "2"], // (x + y) + (z – x) = y + z и (a – b) – (c – a) = 2a – b – c
    question3: "2", // 5y – 3 + 2y + y + 1
    question4: ["1", "3", "4"], // (3a – b) – a, (a + 1) + (a – b – 1), (2a + b) – 2b
    question5: "2", // –
    question6: "1" // Решение выполнено верно
};

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, инициализируем слайды...');
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
    if (!canvas) {
        console.log('Canvas не найден');
        return;
    }
    
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
    
    const toolOptions = document.querySelectorAll('.tool-option[data-tool]');
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
    if (canvas) canvas.dispatchEvent(mouseEvent);
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    if (canvas) canvas.dispatchEvent(mouseEvent);
}

function handleTouchEnd(e) {
    if (draggedWord) {
        handleDrop(e);
    }
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

// Функции для задания "Собери предложение"
function initWordCloud() {
    const wordCloud = document.getElementById('wordCloud');
    const dropZone = document.getElementById('dropZone');
    
    if (!wordCloud || !dropZone) return;
    
    const words = [
        "Многочлен", "-", "выражение", ",", "которое", "является", "суммой", "нескольких", "одночленов",
        "уравнение", "переменная", "функция", "график", "корень", "степень", "коэффициент", "алгебра", "математика"
    ];
    
    const shuffledWords = shuffleArray([...words]);
    
    shuffledWords.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.className = 'word-item';
        wordElement.textContent = word;
        wordElement.draggable = true;
        
        wordElement.addEventListener('dragstart', handleDragStart);
        wordElement.addEventListener('dragend', handleDragEnd);
        
        wordElement.addEventListener('touchstart', handleTouchStartWord);
        wordElement.addEventListener('touchend', handleTouchEndWord);
        
        wordCloud.appendChild(wordElement);
    });
    
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);
    dropZone.addEventListener('dragenter', handleDragEnter);
    dropZone.addEventListener('dragleave', handleDragLeave);
    
    dropZone.addEventListener('touchmove', handleTouchMoveDrop);
    dropZone.addEventListener('touchend', handleTouchEndDrop);
    
    updateDropZone();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleDragStart(e) {
    draggedWord = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd() {
    this.classList.remove('dragging');
    draggedWord = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
}

function handleDragLeave() {
    this.classList.remove('over');
}

function handleDrop(e) {
    e.stopPropagation();
    e.preventDefault();
    
    if (draggedWord && !draggedWord.classList.contains('used')) {
        const sentenceWord = document.createElement('div');
        sentenceWord.className = 'sentence-word';
        sentenceWord.textContent = draggedWord.textContent;
        sentenceWord.dataset.word = draggedWord.textContent;
        
        sentenceWord.addEventListener('click', function() {
            draggedWord.classList.remove('used');
            this.remove();
            updateDropZone();
        });
        
        this.appendChild(sentenceWord);
        draggedWord.classList.add('used');
        updateDropZone();
    }
    
    this.classList.remove('over');
    return false;
}

function handleTouchStartWord(e) {
    e.preventDefault();
    draggedWord = this;
    this.classList.add('dragging');
}

function handleTouchEndWord(e) {
    this.classList.remove('dragging');
    draggedWord = null;
}

function handleTouchMoveDrop(e) {
    e.preventDefault();
}

function handleTouchEndDrop(e) {
    if (draggedWord && !draggedWord.classList.contains('used')) {
        const dropZone = document.getElementById('dropZone');
        
        const sentenceWord = document.createElement('div');
        sentenceWord.className = 'sentence-word';
        sentenceWord.textContent = draggedWord.textContent;
        sentenceWord.dataset.word = draggedWord.textContent;
        
        sentenceWord.addEventListener('click', function() {
            draggedWord.classList.remove('used');
            this.remove();
            updateDropZone();
        });
        
        dropZone.appendChild(sentenceWord);
        draggedWord.classList.add('used');
        updateDropZone();
    }
}

function updateDropZone() {
    const dropZone = document.getElementById('dropZone');
    if (dropZone) {
        if (dropZone.children.length === 0) {
            dropZone.classList.add('empty');
        } else {
            dropZone.classList.remove('empty');
        }
    }
}

function checkSentence() {
    const dropZone = document.getElementById('dropZone');
    if (!dropZone) return;
    
    const userSentence = Array.from(dropZone.children).map(word => word.dataset.word);
    
    const isCorrect = JSON.stringify(userSentence) === JSON.stringify(correctSentence);
    
    const resultMessage = document.getElementById('sentenceResultMessage');
    if (!resultMessage) return;
    
    resultMessage.className = 'result-message';
    
    if (isCorrect) {
        resultMessage.classList.add('success');
        resultMessage.innerHTML = `<i class="fas fa-trophy"></i> Отлично! Определение составлено правильно!`;
        
        Array.from(dropZone.children).forEach(word => {
            word.style.background = 'linear-gradient(135deg, #34C759, #30D158)';
        });
    } else {
        resultMessage.classList.add('error');
        resultMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> Определение составлено неверно. Попробуйте еще раз!`;
        
        Array.from(dropZone.children).forEach((word, index) => {
            if (word.dataset.word !== correctSentence[index]) {
                word.style.background = 'linear-gradient(135deg, #FF3B30, #FF453A)';
            }
        });
    }
}

function resetSentence() {
    const dropZone = document.getElementById('dropZone');
    const wordCloud = document.getElementById('wordCloud');
    
    if (!dropZone || !wordCloud) return;
    
    while (dropZone.firstChild) {
        dropZone.removeChild(dropZone.firstChild);
    }
    
    Array.from(wordCloud.children).forEach(word => {
        word.classList.remove('used');
    });
    
    const resultMessage = document.getElementById('sentenceResultMessage');
    if (resultMessage) {
        resultMessage.className = 'result-message';
    }
    
    updateDropZone();
}

// Функции для показа решений в тетради
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

function showNotebookSolution4() {
    const solution = document.getElementById('notebookSolution4');
    if (solution) {
        solution.classList.add('show');
        renderMathJax();
    }
}

// Функции для итоговой работы
function checkFinalTest() {
    let correctCount = 0;
    const totalQuestions = 6;
    
    // Проверка вопроса 1
    const question1 = document.querySelector('input[name="finalQuestion1"]:checked');
    if (question1 && question1.value === finalTestAnswers.question1) {
        question1.parentElement.classList.add('correct');
        correctCount++;
    } else if (question1) {
        question1.parentElement.classList.add('incorrect');
    }
    
    // Проверка вопроса 2
    const question2Checked = Array.from(document.querySelectorAll('input[name^="finalCheck"]:checked'))
        .filter(checkbox => ['1', '2', '3'].includes(checkbox.value))
        .map(checkbox => checkbox.value);
    const isQuestion2Correct = question2Checked.length === finalTestAnswers.question2.length &&
        finalTestAnswers.question2.every(opt => question2Checked.includes(opt));
    
    if (isQuestion2Correct) {
        document.querySelectorAll('input[name^="finalCheck"]').forEach(checkbox => {
            if (finalTestAnswers.question2.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            }
        });
        correctCount++;
    } else {
        document.querySelectorAll('input[name^="finalCheck"]').forEach(checkbox => {
            if (finalTestAnswers.question2.includes(checkbox.value) && question2Checked.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            } else if (finalTestAnswers.question2.includes(checkbox.value) && !question2Checked.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            } else if (!finalTestAnswers.question2.includes(checkbox.value) && question2Checked.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            }
        });
    }
    
    // Проверка вопроса 3
    const question3 = document.querySelector('input[name="finalQuestion3"]:checked');
    if (question3 && question3.value === finalTestAnswers.question3) {
        question3.parentElement.classList.add('correct');
        correctCount++;
    } else if (question3) {
        question3.parentElement.classList.add('incorrect');
    }
    
    // Проверка вопроса 4
    const question4Checked = Array.from(document.querySelectorAll('input[name^="finalCheck"]:checked'))
        .filter(checkbox => ['1', '2', '3', '4'].includes(checkbox.value))
        .map(checkbox => checkbox.value);
    const isQuestion4Correct = question4Checked.length === finalTestAnswers.question4.length &&
        finalTestAnswers.question4.every(opt => question4Checked.includes(opt));
    
    if (isQuestion4Correct) {
        document.querySelectorAll('input[name^="finalCheck"]').forEach(checkbox => {
            if (finalTestAnswers.question4.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            }
        });
        correctCount++;
    } else {
        document.querySelectorAll('input[name^="finalCheck"]').forEach(checkbox => {
            if (finalTestAnswers.question4.includes(checkbox.value) && question4Checked.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            } else if (finalTestAnswers.question4.includes(checkbox.value) && !question4Checked.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            } else if (!finalTestAnswers.question4.includes(checkbox.value) && question4Checked.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            }
        });
    }
    
    // Проверка вопроса 5
    const question5 = document.querySelector('input[name="finalQuestion5"]:checked');
    if (question5 && question5.value === finalTestAnswers.question5) {
        question5.parentElement.classList.add('correct');
        correctCount++;
    } else if (question5) {
        question5.parentElement.classList.add('incorrect');
    }
    
    // Проверка вопроса 6
    const question6 = document.querySelector('input[name="finalQuestion6"]:checked');
    if (question6 && question6.value === finalTestAnswers.question6) {
        question6.parentElement.classList.add('correct');
        correctCount++;
    } else if (question6) {
        question6.parentElement.classList.add('incorrect');
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
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
        radio.parentElement.classList.remove('correct', 'incorrect');
    });
    
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.parentElement.classList.remove('correct', 'incorrect');
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

// Функция для показа решения самоподготовки
function showSelfStudySolution() {
    const solution = document.getElementById('selfStudySolution');
    if (solution) {
        solution.classList.add('show');
        renderMathJax();
    }
}

// Функция для инициализации слайдов
function initSlides() {
    const slidesNav = document.getElementById('slides-nav');
    const workspace = document.getElementById('workspace');
    
    if (!slidesNav || !workspace) {
        console.error('Не найдены элементы навигации или рабочей области');
        return;
    }
    
    console.log('Инициализация слайдов...');
    
    // Обновляем заголовок страницы
    const lessonTitle = document.getElementById('lesson-title');
    const pageHeaderP = document.querySelector('.page-header p');
    
    if (lessonTitle) lessonTitle.textContent = 'Сложение и вычитание многочленов';
    if (pageHeaderP) pageHeaderP.textContent = 'Изучим правила сложения и вычитания многочленов';
    
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
    
    if (!workspace || !slide) {
        console.error('Рабочая область или слайд не найдены');
        return;
    }
    
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
    console.log(`Инициализация слайда ${slideIndex + 1}`);
    
    switch(slideIndex) {
        case 1: // Слайд 2 - Собери предложение
            setTimeout(() => {
                initWordCloud();
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
        console.log('MathJax не загружен, повторная попытка...');
        setTimeout(renderMathJax, 100);
    }
}

console.log('Script.js загружен и готов к работе');