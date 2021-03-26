// Відображення повідомлення
function btn_1_press() {
  alert(`Ви натиснули кнопку №1`);
}

// Відображення вікна підтвердження
function btn_2_press() {
  let res = confirm(`Ви любите морозиво?`);
  let like = "";
  if (!res) { like = "не "; }
  alert(`Користувач який натиснув кнопку №2 ${like}любить морозиво`);
}

// Відображеня поля введення
function btn_3_press() {
  let name = prompt(`Як вас звати?`);
  if (name)  { name = name.trim();  }
  if (!name) { name = "незнайомцю"; }
  alert(`Привіт, ${name}!`);
}

// Очищення поля введення
function clear_textfield_1() {
  document.getElementById("field_1").value = "";
}

// Очищення поля введення
function clear_textfield_2() {
  document.getElementById("field_2").value = "";
}

// Переведення введеного тексту у верхній регістр
function only_big_letter (element) {
  element.value = element.value.toUpperCase();
}

// Переведення введеного тексту у нижній регістр 
function only_small_letter (element) {
  element.value = element.value.toLowerCase();
}

// Перевірка правильності заповнення форм вводу
function btn_register_press() {
  // Шукаємо поля вводу по їх id
  let login  = document.getElementById("login");
  let pass_a = document.getElementById("password_a");
  let pass_b = document.getElementById("password_b");
  // Отримуємо значення полів вводу
  let text_log   = login.value;
  let text_pas_a = pass_a.value;
  let text_pas_b = pass_b.value;
  // Перевірка заповнення поля #login
  if (!text_log) { alert("Ви не ввели логін!");
                   return; }
  // Перевірка правильності заповнення поля #login
  text_log = text_log.trim();
  if (!text_log) { alert("Ви ввели некоректний логін!");
                   return; }
  // Перевірка заповнення поля #password_a
  if (!text_pas_a) { alert("Ви не ввели пароль!");
                     return; }
  // Перевірка довжини паролю
  if (text_pas_a.length < 6) { alert("Ви ввели закороткий пароль!" + "\n" +
                                     "Мінімальна довжина паролю - 6 символів");
                               return; }
  // Перевірка заповнення поля #password_b
  if (!text_pas_b) { alert("Ви не повторили пароль!");
                     return; }
  // Перевірка ідентичності паролів
  if (text_pas_a !== text_pas_b) { alert("Паролі не збігаються!");
                                   return; }
  // Повідомлення про успішну реєстрацію
  alert("Реєстрація завершилася успішно");
}

// Необхідні змінні
let added_elements = 1;

// Додавання нового елементу до списку
function add_li() {
  // Пошук списку за id
  let ul = document.getElementById("list_1");
  // Створення нового елементу <li>
  let li = document.createElement("li");
  // Створення тексту для елементу <li>
  let text = document.createTextNode(`Новий елемент списку №${added_elements}`);
  // Збільшуємо лічильник на 1
  added_elements++;
  // Додаємо текст до елемента <li>
  li.appendChild(text);
  // Додаємо елемент <li> до списку
  ul.appendChild(li);
}

// Видалення останнього елементу зі списку
function remove_li() {
  // Пошук списку за id
  let ul = document.getElementById("list_1");
  // Отримання останнього дочірнього елемента
  let li = ul.lastChild;
  // Видалення останнього дочірнього елемента
  ul.removeChild(ul.lastChild);
}

// Прослуховування кнопок управління блоком #flex_block
function add_flex_button_listener() {
  // Шукаємо кнопки по їх id
  let direction = document.getElementById("flex_direction");
  let justify   = document.getElementById("flex_justify");
  // Додаємо прослуховування події <onclick>
  direction.onclick = change_flex_direction;
  justify.onclick   = change_justify_content;
}

// Необхідні змінні
let flex_direction_id = 1;
let flex_direction = [ "row",
                       "row-reverse",
                       "column",
                       "column-reverse" ];

// Зміна властивості <flex-direction>
function change_flex_direction() {
  // Шукаємо блок по id
  let block = document.getElementById("flex_block");
  // Змінюємо властивість <flexDirection> 
  block.style.flexDirection = flex_direction[flex_direction_id];
  // Збільшуємо лічильник
  flex_direction_id += flex_direction_id < 3 ? 1 : -3;
}

// Необхідні змінні
let justify_content_id = 4;
let justify_content = [ "center",
                        "flex-start",
                        "flex-end",
                        "space-around",
                        "space-between" ];

// Зміна властивості <justify-content>
function change_justify_content() {
  // Шукаємо блок по id
  let block = document.getElementById("flex_block");
  // Змінюємо властивість <justify-content> 
  block.style.justifyContent = justify_content[justify_content_id];
  // Збільшуємо лічильник
  justify_content_id += justify_content_id < 4 ? 1 : -4;
}

// Необхідні змінні
let title_color_id = 1;
let title_colors = [ "#F00",
                     "#0F0",
                     "#00F",
                     "#FF0",
                     "#F0F",
                     "#0FF" ];

// Зміна кольору фону заголовку
function change_title_background() {
  // Допоміжна константа
  const colors = title_colors.length - 1;
  // Шукаємо елемент по id
  let title = document.getElementById("title");
  // Змінюємо колір рамки
  title.style.borderColor = title_colors[title_color_id];
  // Допоміжна змінна
  let alpha_color = title_colors[title_color_id] + "5";
  // Змінюємо колір фону
  title.style.backgroundColor = alpha_color;
  // Збільшуємо лічильник
  title_color_id += (title_color_id < colors) ? 1 : -colors;  
}

// .......................................................................

// Додаємо прослуховувачі подій до кнопок
add_flex_button_listener();

// Змінюємо колір фону заголовку кожні 2 сек.
setInterval(change_title_background, 3000);