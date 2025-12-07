// Данные слайдов
const slidesData = [
    // Слайд 1 - Целеполагание
    {
        title: "Цели на урок",
        content: `
            <div class="goal-setting-container">
                <div class="goals-list">
                    <div class="goal-item">
                        <i class="fas fa-bullseye"></i>
                        <h4>Изучить понятия</h4>
                        <p>Освоить понятия наибольшего и наименьшего значения числового набора</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-chart-line"></i>
                        <h4>Размах числового набора</h4>
                        <p>Научиться находить размах как меру разброса данных</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-sort-numeric-up"></i>
                        <h4>Алгоритм нахождения размаха</h4>
                        <p>Освоить алгоритм вычисления размаха числового набора</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-calculator"></i>
                        <h4>Решение практических задач</h4>
                        <p>Применить полученные знания для решения задач с реальными данными</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-brain"></i>
                        <h4>Развитие аналитического мышления</h4>
                        <p>Научиться анализировать данные и делать выводы на основе размаха</p>
                    </div>
                    
                    <div class="goal-item">
                        <i class="fas fa-tasks"></i>
                        <h4>Самопроверка</h4>
                        <p>Освоить методы самопроверки при решении статистических задач</p>
                    </div>
                </div>
                
                <div class="motivation-quote">
                    <p>"Статистика знает всё. Известно, сколько какой пищи съедает в год средний гражданин республики... Известно, сколько в стране охотников, балерин, револьверных станков, собак всех пород, велосипедов, памятников, девушек, маяков и швейных машинок..."</p>
                    <div class="quote-author">- Илья Ильф и Евгений Петров</div>
                </div>
                
                <div class="completion-message">
                    <p><i class="fas fa-flag"></i> Успехов в освоении статистики! Помните: цифры могут рассказать целую историю.</p>
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
        title: "Определение размаха",
        content: `
            <div class="word-cloud-exercise">
                <h3><i class="fas fa-cloud"></i> Соберите определение</h3>
                
                <div class="definition-task">
                    <p>Перетащите слова в правильном порядке, чтобы составить определение размаха:</p>
                    
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
            
            <div class="content-block definition">
                <h3><i class="fas fa-info-circle"></i> Важная информация</h3>
                <p>Размах — это одна из простейших статистических характеристик, которая показывает, насколько широко разбросаны данные в числовом наборе.</p>
                <p>Формула для вычисления размаха:</p>
                <div class="formula">
                    $$R = x_{max} - x_{min}$$
                </div>
                <p>где \\(x_{max}\\) — наибольшее значение в наборе, \\(x_{min}\\) — наименьшее значение в наборе.</p>
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
    // Слайд 3 - Составьте алгоритм
    {
        title: "Алгоритм нахождения размаха",
        content: `
            <div class="sequence-exercise">
                <h3><i class="fas fa-list-ol"></i> Составьте алгоритм</h3>
                
                <div class="algorithm-task">
                    <p>Перетащите этапы в правильном порядке, чтобы составить алгоритм нахождения размаха:</p>
                    
                    <div class="sequence-container" id="sequenceContainer">
                        <!-- Этапы алгоритма будут добавляться динамически -->
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="checkAlgorithm()">
                            <i class="fas fa-check-circle"></i> Проверить
                        </button>
                        <button class="btn" onclick="resetAlgorithm()">
                            <i class="fas fa-redo"></i> Начать заново
                        </button>
                    </div>
                    
                    <div id="algorithmResultMessage" class="result-message"></div>
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
    // Слайд 4 - Множественный выбор
    {
        title: "Проверь свои знания",
        content: `
            <div class="multiple-choice-exercise">
                <h3><i class="fas fa-check-square"></i> Выберите верные утверждения</h3>
                
                <div class="multiple-choice-task">
                    <p>Отметьте галочками верные утверждения о статистических характеристиках:</p>
                    
                    <div class="options-container" id="optionsContainer">
                        <!-- Варианты ответов будут добавляться динамически -->
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="checkMultipleChoice()">
                            <i class="fas fa-check-circle"></i> Проверить
                        </button>
                        <button class="btn" onclick="showMultipleChoiceSolution()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                        <button class="btn" onclick="resetMultipleChoice()">
                            <i class="fas fa-redo"></i> Начать заново
                        </button>
                    </div>
                    
                    <div id="multipleChoiceResultMessage" class="result-message"></div>
                    
                    <div class="solution" id="multipleChoiceSolution" style="display: none; margin-top: 20px;">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>Верные утверждения:</strong></p>
                        <ul>
                            <li>Если к каждому числу ряда прибавить одно и то же число, то среднее арифметическое увеличится на это число, а размах не изменится.</li>
                            <li>Если в ряду все числа одинаковые, то размах равен нулю.</li>
                            <li>При добавлении в ряд числа, равного текущему среднему, среднее значение не изменится.</li>
                            <li>Медиана не зависит от значений самых маленьких и самых больших элементов, если их удалить попарно.</li>
                        </ul>
                        <p><strong>Неверные утверждения:</strong></p>
                        <ul>
                            <li>Медиана ряда всегда совпадает со средним арифметическим.</li>
                            <li>Если к ряду добавить число, равное текущей медиане, то медиана не изменится.</li>
                            <li>Если в ряду из 5 чисел медиана равна 7, то ровно два числа меньше 7 и ровно два — больше 7.</li>
                        </ul>
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
    // Слайд 5 - Решение в тетради с самопроверкой
    {
        title: "Практическое задание 1",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Решите задание письменно в тетради. После выполнения нажмите кнопку "Показать решение" для проверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание:</strong> Найдите наибольшее и наименьшее значения, размах набора чисел.</p>
                            <div class="formula">
                                $$26, 22, 25, 17, 33, 19, 11, 3, 24, 28, 45, 37, 13, 17$$
                            </div>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution1()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution1">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1. Упорядочим числа по возрастанию:</strong></p>
                        <p>$$3, 11, 13, 17, 17, 19, 22, 24, 25, 26, 28, 33, 37, 45$$</p>
                        
                        <p><strong>2. Найдем наименьшее значение:</strong></p>
                        <p>$$x_{min} = 3$$</p>
                        
                        <p><strong>3. Найдем наибольшее значение:</strong></p>
                        <p>$$x_{max} = 45$$</p>
                        
                        <p><strong>4. Вычислим размах:</strong></p>
                        <p>$$R = x_{max} - x_{min} = 45 - 3 = 42$$</p>
                        
                        <p><strong>Ответ:</strong> Наименьшее значение: 3, наибольшее значение: 45, размах: 42.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы при решении</h3>
                <ul>
                    <li>Всегда начинайте с упорядочивания чисел — это поможет избежать ошибок</li>
                    <li>Проверьте, не пропустили ли вы какое-либо число из исходного набора</li>
                    <li>Убедитесь, что правильно определили крайние значения</li>
                    <li>При вычитании проверьте вычисления дважды</li>
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
    // Слайд 6 - Решение в тетради с самопроверкой
    {
        title: "Практическое задание 2",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Решите задание письменно в тетради. После выполнения нажмите кнопку "Показать решение" для проверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание:</strong> Найдите наибольшее и наименьшее значения, размах набора чисел.</p>
                            <div class="formula">
                                $$1,5; 2,1; 3,8; 1,6; 4,3; 2,2; 1,4; 4,8; 3,5; 5,9; 2,5; 4,3; 3,2$$
                            </div>
                            <p><em>Примечание: запятая используется как десятичный разделитель.</em></p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution2()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution2">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>1. Упорядочим числа по возрастанию:</strong></p>
                        <p>$$1,4; 1,5; 1,6; 2,1; 2,2; 2,5; 3,2; 3,5; 3,8; 4,3; 4,3; 4,8; 5,9$$</p>
                        
                        <p><strong>2. Найдем наименьшее значение:</strong></p>
                        <p>$$x_{min} = 1,4$$</p>
                        
                        <p><strong>3. Найдем наибольшее значение:</strong></p>
                        <p>$$x_{max} = 5,9$$</p>
                        
                        <p><strong>4. Вычислим размах:</strong></p>
                        <p>$$R = x_{max} - x_{min} = 5,9 - 1,4 = 4,5$$</p>
                        
                        <p><strong>Ответ:</strong> Наименьшее значение: 1,4, наибольшее значение: 5,9, размах: 4,5.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Особенности работы с десятичными дробями</h3>
                <ul>
                    <li>При упорядочивании десятичных дробей сравнивайте целые части, а затем дробные</li>
                    <li>Убедитесь, что правильно расставили десятичные точки при вычислениях</li>
                    <li>Для проверки можно перевести дроби в обыкновенные: 1,4 = 1 целая 4/10 = 14/10</li>
                    <li>При вычитании десятичных дробей выравнивайте разряды</li>
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
    // Слайд 7 - Решение в тетради с самопроверкой
    {
        title: "Задача на изменение размаха",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Решите задание письменно в тетради. После выполнения нажмите кнопку "Показать решение" для проверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание:</strong> На доске был написан ряд чисел. Его размах был равен 44. После того, когда убрали несколько чисел к этому ряду, наибольшее значение ряда уменьшилось на 6, а наименьшее значение ряда уменьшилось на 7. Чему будет равен размах нового ряда?</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution3()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution3">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>Дано:</strong></p>
                        <p>Исходный размах: \\(R = 44\\)</p>
                        <p>Изменения: \\(x_{max}^{нов} = x_{max} - 6\\), \\(x_{min}^{нов} = x_{min} - 7\\)</p>
                        
                        <p><strong>Решение:</strong></p>
                        <p>1. Исходный размах: \\(R = x_{max} - x_{min} = 44\\)</p>
                        <p>2. Новый размах: \\(R^{нов} = x_{max}^{нов} - x_{min}^{нов}\\)</p>
                        <p>3. Подставим изменения: \\(R^{нов} = (x_{max} - 6) - (x_{min} - 7)\\)</p>
                        <p>4. Раскроем скобки: \\(R^{нов} = x_{max} - 6 - x_{min} + 7\\)</p>
                        <p>5. Сгруппируем: \\(R^{нов} = (x_{max} - x_{min}) + (-6 + 7)\\)</p>
                        <p>6. Подставим исходный размах: \\(R^{нов} = 44 + 1 = 45\\)</p>
                        
                        <p><strong>Ответ:</strong> Размах нового ряда будет равен 45.</p>
                        
                        <p><strong>Проверка на примере:</strong></p>
                        <p>Пусть исходные значения: \\(x_{min} = 10\\), \\(x_{max} = 54\\) (размах: 54 - 10 = 44)</p>
                        <p>После изменений: \\(x_{min}^{нов} = 10 - 7 = 3\\), \\(x_{max}^{нов} = 54 - 6 = 48\\)</p>
                        <p>Новый размах: 48 - 3 = 45 ✓</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Алгебраический подход</h3>
                <ul>
                    <li>В таких задачах удобно использовать буквенные обозначения</li>
                    <li>Размах всегда вычисляется как разность наибольшего и наименьшего значений</li>
                    <li>При изменении обоих крайних значений на разные величины размах изменяется на разность этих величин</li>
                    <li>Всегда проверяйте решение на конкретном числовом примере</li>
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
    // Слайд 8 - Решение в тетради с самопроверкой
    {
        title: "Задача с выбросами",
        content: `
            <div class="notebook-exercise">
                <h3><i class="fas fa-book"></i> Решите в тетради</h3>
                
                <div class="notebook-task">
                    <p>Решите задание письменно в тетради. После выполнения нажмите кнопку "Показать решение" для проверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание:</strong> Робот измерил pH воды в 5 пробах реки: <strong>6.8, 7.2, 5.1, 7.0, 6.9</strong></p>
                            <p>На экране робота мигает:🔴 «Внимание! Размах > 2.0 — возможна аварийная утечка»</p>
                            <p>а) Проверьте: прав ли робот?</p>
                            <p>б) Какое значение, скорее всего, ошибочное? Почему?</p>
                            <p>в) Уберите выброс и посчитайте новый размах.</p>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showNotebookSolution4()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="notebookSolution4">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>а) Проверим, прав ли робот:</strong></p>
                        <p>1. Упорядочим значения: 5.1, 6.8, 6.9, 7.0, 7.2</p>
                        <p>2. Наименьшее значение: \\(x_{min} = 5.1\\)</p>
                        <p>3. Наибольшее значение: \\(x_{max} = 7.2\\)</p>
                        <p>4. Размах: \\(R = 7.2 - 5.1 = 2.1\\)</p>
                        <p>5. Сравним с порогом: \\(2.1 > 2.0\\)</p>
                        <p><strong>Вывод:</strong> Робот прав — размах действительно больше 2.0.</p>
                        
                        <p><strong>б) Определим выброс:</strong></p>
                        <p>Значение 5.1 сильно отличается от остальных значений (6.8-7.2).</p>
                        <p>Остальные значения близки друг к другу и находятся в диапазоне 6.8-7.2.</p>
                        <p>Значение 5.1 может быть ошибкой измерения или действительно указывать на проблему.</p>
                        <p><strong>Вывод:</strong> Выбросом является значение 5.1.</p>
                        
                        <p><strong>в) Новый размах без выброса:</strong></p>
                        <p>1. Без значения 5.1: 6.8, 6.9, 7.0, 7.2</p>
                        <p>2. Упорядочим: 6.8, 6.9, 7.0, 7.2</p>
                        <p>3. Наименьшее: \\(x_{min} = 6.8\\)</p>
                        <p>4. Наибольшее: \\(x_{max} = 7.2\\)</p>
                        <p>5. Новый размах: \\(R^{нов} = 7.2 - 6.8 = 0.4\\)</p>
                        
                        <p><strong>Ответ:</strong> </p>
                        <p>а) Да, робот прав — размах 2.1 > 2.0</p>
                        <p>б) Выброс — значение 5.1, так как оно сильно отличается от остальных</p>
                        <p>в) Новый размах без выброса: 0.4</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> О выбросах в статистике</h3>
                <ul>
                    <li>Выброс — значение, значительно отличающееся от остальных наблюдений</li>
                    <li>Выбросы могут быть как ошибками измерения, так и реальными аномалиями</li>
                    <li>Размах очень чувствителен к выбросам — это его недостаток как меры разброса</li>
                    <li>При анализе данных всегда проверяйте наличие выбросов</li>
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
    // Слайд 9 - Итоговая комплексная работа
    {
        title: "Итоговая проверочная работа",
        content: `
            <div class="final-test-exercise">
                <h3><i class="fas fa-graduation-cap"></i> Итоговая проверочная работа</h3>
                
                <div class="final-test-task">
                    <p>Выполните следующие задания. После выполнения нажмите кнопку "Проверить работу" для получения оценки:</p>
                    
                    <div class="test-task">
                        <div class="test-question">1. Укажите все верные утверждения:</div>
                        <div class="test-options">
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck1" value="A">
                                <label for="finalCheck1">Размах может быть отрицательным</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck2" value="B">
                                <label for="finalCheck2">Если все числа в наборе одинаковые, размах равен 0</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck3" value="C">
                                <label for="finalCheck3">Размах измеряет разброс данных</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck4" value="D">
                                <label for="finalCheck4">Размах зависит от количества элементов в наборе</label>
                            </div>
                            <div class="test-option">
                                <input type="checkbox" id="finalCheck5" value="E">
                                <label for="finalCheck5">Наибольшее значение всегда ≥ медианы</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">2. Дан набор:</div>
                        <div class="formula" style="text-align: center; margin: 15px 0;">
                            $$1,3; 4,7; 2,8; 6,1; 0,9; 5,5; 3,4$$
                        </div>
                        <div class="input-field">
                            <span>Наименьшее значение:</span>
                            <input type="text" id="finalAnswer1" placeholder="Введите число">
                        </div>
                        <div class="input-field">
                            <span>Наибольшее значение:</span>
                            <input type="text" id="finalAnswer2" placeholder="Введите число">
                        </div>
                        <div class="input-field">
                            <span>Размах:</span>
                            <input type="text" id="finalAnswer3" placeholder="Введите число">
                        </div>
                    </div>
                    
                    <div class="test-task">
                        <div class="test-question">3. Температура воздуха в Кронштадте (°C) за неделю:</div>
                        <div class="formula" style="text-align: center; margin: 15px 0;">
                            <strong>Пн:</strong> −2,1 <strong>Вт:</strong> 0,4 <strong>Ср:</strong> −3,5 <strong>Чт:</strong> 1,2 <strong>Пт:</strong> −4,0 <strong>Сб:</strong> 0,8 <strong>Вс:</strong> −1,7
                        </div>
                        <div class="input-field">
                            <span>а) Размах температур за неделю:</span>
                            <input type="text" id="finalAnswer4" placeholder="Введите число">
                        </div>
                        <div class="input-field">
                            <span>б) Как изменится размах, если убрать самый холодный и самый тёплый день?</span>
                            <input type="text" id="finalAnswer5" placeholder="Введите ответ">
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
                    <li>В задании 1 отметьте все верные утверждения — их может быть несколько</li>
                    <li>В заданиях с десятичными дробями используйте запятую как десятичный разделитель</li>
                    <li>Не забудьте про знак "минус" для отрицательных температур</li>
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
    // Слайд 10 - Вопросы для самоконтроля
    {
        title: "Вопросы для самоконтроля",
        content: `
            <div class="questions-container">
                <h3><i class="fas fa-question-circle"></i> Вопросы по теме "Наибольшее и наименьшее значение. Размах"</h3>
                
                <div class="question-item">
                    <p><strong>1. Что такое числовой набор?</strong></p>
                    <p>Дайте определение и приведите примеры.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>2. Как найти наибольшее и наименьшее значение в числовом наборе?</strong></p>
                    <p>Опишите алгоритм действий.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>3. Что такое размах числового набора?</strong></p>
                    <p>Дайте определение и объясните, как его вычислить.</p>
                </div>
                
                <div class="question-item">
                    <p><strong>4. Почему размах считается неустойчивой мерой?</strong></p>
                    <p>Приведите пример, демонстрирующий это свойство.</p>
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
                    <p>Выполните задание письменно в тетради для домашних работ. После выполнения нажмите кнопку "Показать решение" для самопроверки:</p>
                    
                    <div class="tasks-list">
                        <div class="task-item">
                            <p><strong>Задание:</strong> Найдите наибольшее и наименьшее значения, размах, среднее арифметическое и медиану набора чисел.</p>
                            <p>а) 12, 7, 25, 3, 19, 15</p>
                            <p>б) 17, 19, 5, 41, 47, 13, 19</p>
                        </div>
                        
                        <div class="task-item">
                            <p><strong>Дополнительные материалы:</strong> Наибольшее и наименьшее значение. Размах.</p>
                            <div class="video-link">
                                <a href="https://rutube.ru/video/77f3635134357430493ffac0664043d9/?r=wd" target="_blank" class="btn">
                                    <i class="fas fa-video"></i> Посмотреть обучающее видео
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="controls">
                        <button class="btn" onclick="showSelfStudySolution()">
                            <i class="fas fa-eye"></i> Показать решение
                        </button>
                    </div>
                    
                    <div class="solution" id="selfStudySolution">
                        <h4><i class="fas fa-check-circle"></i> Решение:</h4>
                        <p><strong>а) Для набора: 12, 7, 25, 3, 19, 15</strong></p>
                        <p>1. Упорядочим: 3, 7, 12, 15, 19, 25</p>
                        <p>2. Наименьшее значение: \\(x_{min} = 3\\)</p>
                        <p>3. Наибольшее значение: \\(x_{max} = 25\\)</p>
                        <p>4. Размах: \\(R = 25 - 3 = 22\\)</p>
                        <p>5. Среднее арифметическое: \\(\\frac{3+7+12+15+19+25}{6} = \\frac{81}{6} = 13,5\\)</p>
                        <p>6. Медиана (для четного количества чисел): \\(\\frac{12+15}{2} = \\frac{27}{2} = 13,5\\)</p>
                        
                        <p><strong>б) Для набора: 17, 19, 5, 41, 47, 13, 19</strong></p>
                        <p>1. Упорядочим: 5, 13, 17, 19, 19, 41, 47</p>
                        <p>2. Наименьшее значение: \\(x_{min} = 5\\)</p>
                        <p>3. Наибольшее значение: \\(x_{max} = 47\\)</p>
                        <p>4. Размах: \\(R = 47 - 5 = 42\\)</p>
                        <p>5. Среднее арифметическое: \\(\\frac{5+13+17+19+19+41+47}{7} = \\frac{161}{7} = 23\\)</p>
                        <p>6. Медиана (для нечетного количества чисел): \\(x_{мед} = 19\\) (четвертое число в упорядоченном ряду)</p>
                        
                        <p><strong>Ответ:</strong></p>
                        <p>а) \\(x_{min} = 3\\), \\(x_{max} = 25\\), \\(R = 22\\), среднее = 13,5, медиана = 13,5</p>
                        <p>б) \\(x_{min} = 5\\), \\(x_{max} = 47\\), \\(R = 42\\), среднее = 23, медиана = 19</p>
                    </div>
                </div>
            </div>
            
            <div class="content-block tip">
                <h3><i class="fas fa-lightbulb"></i> Советы для самоподготовки</h3>
                <ul>
                    <li>Внимательно читайте условие каждого задания</li>
                    <li>Всегда начинайте с упорядочивания чисел</li>
                    <li>Для вычисления медианы определите сначала, четное или нечетное количество чисел в наборе</li>
                    <li>При вычислении среднего арифметического проверяйте сумму всех чисел</li>
                    <li>После самопроверки проанализируйте свои ошибки</li>
                    <li>Посмотрите рекомендованное видео для лучшего понимания темы</li>
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

// Переменные для рисования
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentColor = '#007AFF';
let currentTool = 'pen';
let canvas, ctx;

// Переменные для задания "Собери предложение" (Слайд 2)
let draggedWord = null;
let correctSentence = ["Размах", "это", "разность", "между", "наибольшим", "и", "наименьшим", "значением", "в", "наборе"];

// Переменные для задания "Составьте алгоритм" (Слайд 3)
let draggedAlgorithmItem = null;
let correctAlgorithm = [
    "Выпишите все числа из набора",
    "Упорядочьте их по возрастанию (или убыванию)",
    "Найдите наименьшее и наибольшее значение",
    "Вычтите наименьшее из наибольшего — получите размах"
];

// Переменные для задания "Множественный выбор" (Слайд 4)
let correctOptions = [0, 2, 3, 5]; // Индексы правильных утверждений (после перемешивания)
let selectedOptions = [];
let multipleChoiceOptions = [
    "Если к каждому числу ряда прибавить одно и то же число, то среднее арифметическое увеличится на это число, а размах не изменится.",
    "Медиана ряда всегда совпадает со средним арифметическим.",
    "Если в ряду все числа одинаковые, то размах равен нулю.",
    "При добавлении в ряд числа, равного текущему среднему, среднее значение не изменится.",
    "Медиана не зависит от значений самых маленьких и самых больших элементов, если их удалить попарно.",
    "Если к ряду добавить число, равное текущей медиане, то медиана не изменится.",
    "Если в ряду из 5 чисел медиана равна 7, то ровно два числа меньше 7 и ровно два — больше 7."
];

// Переменные для итоговой работы (Слайд 9)
const finalTestAnswers = {
    // Задание 1: верные утверждения B, C, E
    question1: ["B", "C", "E"],
    // Задание 2
    answer1: "0,9",
    answer2: "6,1",
    answer3: "5,2",
    // Задание 3
    answer4: "5,2",
    answer5: "Уменьшится"
};

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

// Функции для задания "Собери предложение" (Слайд 2)
function initWordCloud() {
    const wordCloud = document.getElementById('wordCloud');
    const dropZone = document.getElementById('dropZone');
    
    if (!wordCloud) return;
    
    const words = [
        "Размах", "это", "разность", "между", "наибольшим", "и", 
        "наименьшим", "значением", "в", "наборе", "среднее", 
        "арифметическое", "медиана", "мода", "статистика", "данные",
        "вычисление", "формула", "число", "алгоритм"
    ];
    
    const shuffledWords = shuffleArray([...words]);
    
    // Очищаем облако слов
    wordCloud.innerHTML = '';
    
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
    
    if (dropZone) {
        dropZone.addEventListener('dragover', handleDragOver);
        dropZone.addEventListener('drop', handleDrop);
        dropZone.addEventListener('dragenter', handleDragEnter);
        dropZone.addEventListener('dragleave', handleDragLeave);
        
        dropZone.addEventListener('touchmove', handleTouchMoveDrop);
        dropZone.addEventListener('touchend', handleTouchEndDrop);
    }
    
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
    if (this.classList.contains('dragging')) {
        this.classList.remove('dragging');
    }
    draggedWord = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    e.preventDefault();
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
            if (draggedWord) {
                draggedWord.classList.remove('used');
            }
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
        
        if (dropZone) {
            const sentenceWord = document.createElement('div');
            sentenceWord.className = 'sentence-word';
            sentenceWord.textContent = draggedWord.textContent;
            sentenceWord.dataset.word = draggedWord.textContent;
            
            sentenceWord.addEventListener('click', function() {
                if (draggedWord) {
                    draggedWord.classList.remove('used');
                }
                this.remove();
                updateDropZone();
            });
            
            dropZone.appendChild(sentenceWord);
            draggedWord.classList.add('used');
            updateDropZone();
        }
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
    
    if (dropZone) {
        while (dropZone.firstChild) {
            dropZone.removeChild(dropZone.firstChild);
        }
    }
    
    if (wordCloud) {
        Array.from(wordCloud.children).forEach(word => {
            word.classList.remove('used');
        });
    }
    
    const resultMessage = document.getElementById('sentenceResultMessage');
    if (resultMessage) {
        resultMessage.className = 'result-message';
    }
    
    updateDropZone();
}

// Функции для задания "Составьте алгоритм" (Слайд 3)
function initAlgorithm() {
    const sequenceContainer = document.getElementById('sequenceContainer');
    if (!sequenceContainer) return;
    
    // Очищаем контейнер
    sequenceContainer.innerHTML = '';
    
    // Перемешиваем только верные этапы алгоритма
    const shuffledAlgorithm = shuffleArray([...correctAlgorithm]);
    
    shuffledAlgorithm.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'sequence-item';
        stepElement.textContent = step;
        stepElement.dataset.index = index;
        stepElement.dataset.correct = true;
        
        stepElement.draggable = true;
        
        stepElement.addEventListener('dragstart', handleAlgorithmDragStart);
        stepElement.addEventListener('dragend', handleAlgorithmDragEnd);
        
        stepElement.addEventListener('touchstart', handleAlgorithmTouchStart);
        stepElement.addEventListener('touchend', handleAlgorithmTouchEnd);
        
        sequenceContainer.appendChild(stepElement);
    });
    
    // Настраиваем события перетаскивания для контейнера
    sequenceContainer.addEventListener('dragover', handleAlgorithmDragOver);
    sequenceContainer.addEventListener('drop', handleAlgorithmDrop);
    sequenceContainer.addEventListener('dragenter', handleAlgorithmDragEnter);
    sequenceContainer.addEventListener('dragleave', handleAlgorithmDragLeave);
}

function handleAlgorithmDragStart(e) {
    draggedAlgorithmItem = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleAlgorithmDragEnd() {
    this.classList.remove('dragging');
    draggedAlgorithmItem = null;
}

function handleAlgorithmTouchStart(e) {
    e.preventDefault();
    draggedAlgorithmItem = this;
    this.classList.add('dragging');
}

function handleAlgorithmTouchEnd() {
    this.classList.remove('dragging');
    draggedAlgorithmItem = null;
}

function handleAlgorithmDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleAlgorithmDragEnter(e) {
    e.preventDefault();
    this.classList.add('over');
}

function handleAlgorithmDragLeave() {
    this.classList.remove('over');
}

function handleAlgorithmDrop(e) {
    e.preventDefault();
    this.classList.remove('over');
    
    if (draggedAlgorithmItem && draggedAlgorithmItem !== this) {
        // Получаем всех детей контейнера
        const children = Array.from(this.children);
        
        // Находим индекс элемента, над которым отпустили
        const dropIndex = children.indexOf(this);
        
        // Удаляем перетаскиваемый элемент из текущей позиции
        draggedAlgorithmItem.parentNode.removeChild(draggedAlgorithmItem);
        
        // Вставляем элемент на новую позицию
        if (dropIndex >= 0) {
            this.insertBefore(draggedAlgorithmItem, children[dropIndex]);
        } else {
            this.appendChild(draggedAlgorithmItem);
        }
    }
}

function checkAlgorithm() {
    const sequenceContainer = document.getElementById('sequenceContainer');
    if (!sequenceContainer) return;
    
    const userAlgorithm = Array.from(sequenceContainer.children).map(item => item.textContent);
    
    // Проверяем, совпадают ли шаги с правильными (порядок важен)
    let correctCount = 0;
    for (let i = 0; i < Math.min(userAlgorithm.length, correctAlgorithm.length); i++) {
        if (userAlgorithm[i] === correctAlgorithm[i]) {
            correctCount++;
        }
    }
    
    const isCorrect = correctCount === correctAlgorithm.length;
    
    const resultMessage = document.getElementById('algorithmResultMessage');
    if (!resultMessage) return;
    
    resultMessage.className = 'result-message';
    
    if (isCorrect) {
        resultMessage.classList.add('success');
        resultMessage.innerHTML = `<i class="fas fa-trophy"></i> Отлично! Алгоритм составлен правильно!`;
        
        // Подсвечиваем правильные шаги
        Array.from(sequenceContainer.children).forEach((item, index) => {
            if (index < correctAlgorithm.length && item.textContent === correctAlgorithm[index]) {
                item.classList.add('correct');
            }
        });
    } else {
        resultMessage.classList.add('error');
        resultMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> Правильно расположено ${correctCount} из ${correctAlgorithm.length} шагов. Попробуйте еще раз!`;
        
        // Подсвечиваем правильные и неправильные шаги
        Array.from(sequenceContainer.children).forEach((item, index) => {
            if (index < correctAlgorithm.length) {
                if (item.textContent === correctAlgorithm[index]) {
                    item.classList.add('correct');
                } else {
                    item.classList.add('incorrect');
                }
            }
        });
    }
}

function resetAlgorithm() {
    initAlgorithm();
    
    const resultMessage = document.getElementById('algorithmResultMessage');
    if (resultMessage) {
        resultMessage.className = 'result-message';
    }
}

// Функции для задания "Множественный выбор" (Слайд 4)
function initMultipleChoice() {
    const optionsContainer = document.getElementById('optionsContainer');
    if (!optionsContainer) return;
    
    optionsContainer.innerHTML = '';
    selectedOptions = [];
    
    // Перемешиваем утверждения
    const shuffledOptions = shuffleArray([...multipleChoiceOptions]);
    
    shuffledOptions.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.dataset.index = index;
        
        const checkbox = document.createElement('div');
        checkbox.className = 'checkbox';
        
        const text = document.createElement('span');
        text.innerHTML = option;
        
        optionElement.appendChild(checkbox);
        optionElement.appendChild(text);
        
        optionElement.addEventListener('click', function() {
            this.classList.toggle('selected');
            checkbox.classList.toggle('checked');
            
            const optionIndex = shuffledOptions.indexOf(option);
            if (this.classList.contains('selected')) {
                selectedOptions.push(optionIndex);
            } else {
                selectedOptions = selectedOptions.filter(i => i !== optionIndex);
            }
        });
        
        optionsContainer.appendChild(optionElement);
    });
}

function checkMultipleChoice() {
    // Правильные ответы в исходном порядке: 0, 2, 3, 5
    // После перемешивания нужно определить, какие индексы соответствуют правильным утверждениям
    const optionsContainer = document.getElementById('optionsContainer');
    if (!optionsContainer) return;
    
    const options = Array.from(optionsContainer.children);
    const correctOriginalIndices = [0, 2, 3, 5]; // Индексы правильных утверждений в исходном массиве
    
    // Находим, какие утверждения в текущем порядке являются правильными
    let correctCount = 0;
    let totalSelected = selectedOptions.length;
    
    options.forEach((option, currentIndex) => {
        const originalIndex = multipleChoiceOptions.indexOf(option.querySelector('span').textContent);
        
        if (correctOriginalIndices.includes(originalIndex) && selectedOptions.includes(currentIndex)) {
            correctCount++;
            option.classList.add('correct');
        } else if (correctOriginalIndices.includes(originalIndex) && !selectedOptions.includes(currentIndex)) {
            option.classList.add('incorrect');
        } else if (!correctOriginalIndices.includes(originalIndex) && selectedOptions.includes(currentIndex)) {
            option.classList.add('incorrect');
        }
    });
    
    const isPerfect = correctCount === correctOriginalIndices.length && totalSelected === correctOriginalIndices.length;
    
    const resultMessage = document.getElementById('multipleChoiceResultMessage');
    if (!resultMessage) return;
    
    resultMessage.className = 'result-message';
    
    if (isPerfect) {
        resultMessage.classList.add('success');
        resultMessage.innerHTML = `<i class="fas fa-trophy"></i> Отлично! Все верные утверждения отмечены правильно!`;
    } else {
        resultMessage.classList.add('error');
        resultMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> Правильно отмечено ${correctCount} из ${correctOriginalIndices.length} верных утверждений. Попробуйте еще раз!`;
    }
}

function showMultipleChoiceSolution() {
    const solution = document.getElementById('multipleChoiceSolution');
    if (solution) {
        solution.style.display = 'block';
    }
}

function resetMultipleChoice() {
    initMultipleChoice();
    const resultMessage = document.getElementById('multipleChoiceResultMessage');
    if (resultMessage) {
        resultMessage.className = 'result-message';
    }
    
    const solution = document.getElementById('multipleChoiceSolution');
    if (solution) {
        solution.style.display = 'none';
    }
}

// Функции для заданий "Решение в тетради"
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

// Функции для итоговой работы (Слайд 9)
function checkFinalTest() {
    let correctCount = 0;
    const totalQuestions = 8; // 1 вопрос с несколькими ответами + 5 полей для ввода
    
    // Проверка вопроса 1 (множественный выбор)
    const checkedOptions = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    const isQuestion1Correct = checkedOptions.length === finalTestAnswers.question1.length &&
        finalTestAnswers.question1.every(opt => checkedOptions.includes(opt));
    
    if (isQuestion1Correct) {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            if (finalTestAnswers.question1.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            }
        });
        correctCount += 3; // 3 правильных утверждения в вопросе 1
    } else {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            if (finalTestAnswers.question1.includes(checkbox.value) && checkedOptions.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('correct');
            } else if (finalTestAnswers.question1.includes(checkbox.value) && !checkedOptions.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            } else if (!finalTestAnswers.question1.includes(checkbox.value) && checkedOptions.includes(checkbox.value)) {
                checkbox.parentElement.classList.add('incorrect');
            }
        });
    }
    
    // Проверка вопроса 2
    const answer1 = document.getElementById('finalAnswer1')?.value.trim().replace('.', ',') || '';
    const answer2 = document.getElementById('finalAnswer2')?.value.trim().replace('.', ',') || '';
    const answer3 = document.getElementById('finalAnswer3')?.value.trim().replace('.', ',') || '';
    
    if (answer1 === finalTestAnswers.answer1) {
        document.getElementById('finalAnswer1').classList.add('correct');
        correctCount++;
    } else {
        document.getElementById('finalAnswer1').classList.add('incorrect');
    }
    
    if (answer2 === finalTestAnswers.answer2) {
        document.getElementById('finalAnswer2').classList.add('correct');
        correctCount++;
    } else {
        document.getElementById('finalAnswer2').classList.add('incorrect');
    }
    
    if (answer3 === finalTestAnswers.answer3) {
        document.getElementById('finalAnswer3').classList.add('correct');
        correctCount++;
    } else {
        document.getElementById('finalAnswer3').classList.add('incorrect');
    }
    
    // Проверка вопроса 3
    const answer4 = document.getElementById('finalAnswer4')?.value.trim().replace('.', ',') || '';
    const answer5 = document.getElementById('finalAnswer5')?.value.trim().toLowerCase() || '';
    
    if (answer4 === finalTestAnswers.answer4) {
        document.getElementById('finalAnswer4').classList.add('correct');
        correctCount++;
    } else {
        document.getElementById('finalAnswer4').classList.add('incorrect');
    }
    
    if (answer5.includes('уменьшит') || answer5 === 'уменьшится') {
        document.getElementById('finalAnswer5').classList.add('correct');
        correctCount++;
    } else {
        document.getElementById('finalAnswer5').classList.add('incorrect');
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
    // Сбрасываем чекбоксы
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.parentElement.classList.remove('correct', 'incorrect');
    });
    
    // Сбрасываем поля ввода
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = '';
        input.classList.remove('correct', 'incorrect');
    });
    
    // Сбрасываем сообщения
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
        
        // Инициализируем компоненты для конкретных слайдов
        initializeSlideComponents(slideIndex);
        
        // Перерисовываем математические формулы
        renderMathJax();
    }
}

function initializeSlideComponents(slideIndex) {
    switch(slideIndex) {
        case 1: // Слайд 2 - Собери предложение
            setTimeout(() => {
                initWordCloud();
                initDrawingPanel();
            }, 100);
            break;
        case 2: // Слайд 3 - Составьте алгоритм
            setTimeout(() => {
                initAlgorithm();
                initDrawingPanel();
            }, 100);
            break;
        case 3: // Слайд 4 - Множественный выбор
            setTimeout(() => {
                initMultipleChoice();
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