<script>
	import { onMount } from 'svelte';
	import { 
		Grid, 
		Row, 
		Column,
		CodeSnippet, 
		OrderedList, 
		ListItem, 
		ImageLoader, 
		OutboundLink, 
		Link,
		DataTable 
	} from "carbon-components-svelte";
  
</script>

<style>
  /* Глобальные стили сетки и контейнера */
  :global(.bx--col-lg-11) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Стили для текстовых элементов */
  h1, h2 {
    max-width: 100%;
    word-wrap: break-word;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 2rem 0 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin: 1.8rem 0 1.2rem;
  }

  p {
    max-width: 700px;
    margin: 1rem 0;
    line-height: 1.6;
  }

  /* Стили для код-блоков */
  :global(pre) {
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-width: 100%;
    margin: 1rem 0;
    background: var(--cds-layer-01);
    border-radius: 4px;
  }

  /* Мобильная адаптация */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      padding: 0 0.5rem;
    }
    
    h2 {
      font-size: 1.75rem;
    }
    
    :global(pre) {
      font-size: 0.875rem;
      padding: 0.75rem;
    }
  }

  /* Существующие стили навигации */
  :global(.mobile-nav) {
    display: none;
  }


  @media (max-width: 1056px) {
    :global(.desktop-nav) {
      display: none !important;
    }

    :global(.mobile-nav) {
      display: block;
      margin-bottom: 2rem;
    }
  }
</style>


<h1>Работа с JSON в PHP</h1>

<p>В PHP поддержка JSON появилась с версии 5.2.0 и работает только с кодировкой UTF-8.</p>


<h2 id="encoding">1. Кодирование</h2>

<p> <OutboundLink  visited href="https://www.php.net/manual/ru/function.json-encode.php">
json_encode($value, $options)
</OutboundLink > – кодирует массив или объект в JSON.</p>
<CodeSnippet type="multi">
{`$array = array(
	'1' => 'Значение 1', 
	'2' => 'Значение 2', 
	'3' => 'Значение 3', 
	'4' => 'Значение 4', 
	'5' => 'Значение 5'
);
			 
$json = json_encode($array);
echo $json;`}
</CodeSnippet>

<p>Результат:</p>
<CodeSnippet code="<CodeSnippet code=&quot;&lbrace;&quot;1&quot;:&quot;\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 1&quot;,&quot;2&quot;:&quot;\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 2&quot;,&quot;3&quot;:&quot;\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 3&quot;,&quot;4&quot;:&quot;\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 4&quot;,&quot;5&quot;:&quot;\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 5&quot;&rbrace;&quot; hideCopyButton />" hideCopyButton />

<p>Как видно кириллица кодируется, исправляется это добавлением опции <span style="color: var(--cds-support-03)">JSON_UNESCAPED_UNICODE.</span> </p>
			<CodeSnippet type="multi">
{`$json = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json;
`}
</CodeSnippet>

<p>Результат:</p>
<CodeSnippet code="&lbrace;&quot;1&quot;:&quot;Значение 1&quot;,&quot;2&quot;:&quot;Значение 2&quot;,&quot;3&quot;:&quot;Значение 3&quot;,&quot;4&quot;:&quot;Значение 4&quot;,&quot;5&quot;:&quot;Значение 5&quot;&rbrace;" hideCopyButton />

<p>Далее такую строку можно сохранить в файл, или отдать в браузер, например при AJAX запросах.</p>
<CodeSnippet type="multi">
{`header('Content-Type: application/json');
echo $json;
exit();
`}
</CodeSnippet>



			<h2 id="decoding">2. Декодирование</h2>


			<p>Функция <OutboundLink  visited href="https://www.php.net/manual/ru/function.json-decode.php">
				json_decode($json)
				</OutboundLink > преобразует строку в объект:</p>

			<CodeSnippet type="multi">
{`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json);
print_r($array);
`}
			</CodeSnippet>

			<p>Результат:</p>
			<CodeSnippet type="multi" hideCopyButton>
{`stdClass Object
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`}
			</CodeSnippet>

			<p>Если добавить вторым аргументом true, то произойдёт преобразование в массив:</p>
			<CodeSnippet type="multi">
{`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json, true);
print_r($array);
`}
			</CodeSnippet>

			<p>Результат:</p>
			<CodeSnippet type="multi" hideCopyButton>
{`Array
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`}
			</CodeSnippet>

			<h2 id="errors">3. Получение ошибок и их исправление</h2>

			<p><span style="color: var(--cds-support-03)">json_decode()</span> возвращает NULL, если в объекте есть ошибки, посмотреть их можно с помощью функции <span style="color: var(--cds-support-03)">json_last_error():</span></p>
			<CodeSnippet type="multi" >
{`$json = '{"1:"Значение 1"}';
$array = json_decode($json, true);
			 
switch (json_last_error()) {
	case JSON_ERROR_NONE:
		echo 'Ошибок нет';
	break;
	case JSON_ERROR_DEPTH:
		echo 'Достигнута максимальная глубина стека';
	break;
	case JSON_ERROR_STATE_MISMATCH:
		echo 'Некорректные разряды или несоответствие режимов';
	break;
	case JSON_ERROR_CTRL_CHAR:
		echo 'Некорректный управляющий символ';
	break;
	case JSON_ERROR_SYNTAX:
		echo 'Синтаксическая ошибка, некорректный JSON';
	break;
	case JSON_ERROR_UTF8:
		echo 'Некорректные символы UTF-8, возможно неверно закодирован';
	break;
	default:
		echo 'Неизвестная ошибка';
	break;
}
`}
			</CodeSnippet>

			<p>Посмотреть значения констант JSON:</p>
			<CodeSnippet type="multi">
{`$constants = get_defined_constants(true);
foreach ($constants['json'] as $name => $value) {
	echo $name . ': ' . $value . '<br>';
}
`}
			</CodeSnippet>


			<p>Результат:</p>
			<CodeSnippet type="multi" hideCopyButton>
{`JSON_HEX_TAG: 1
JSON_HEX_AMP: 2
JSON_HEX_APOS: 4
JSON_HEX_QUOT: 8
JSON_FORCE_OBJECT: 16
JSON_NUMERIC_CHECK: 32
JSON_UNESCAPED_SLASHES: 64
JSON_PRETTY_PRINT: 128
JSON_UNESCAPED_UNICODE: 256
JSON_PARTIAL_OUTPUT_ON_ERROR: 512
JSON_PRESERVE_ZERO_FRACTION: 1024
JSON_UNESCAPED_LINE_TERMINATORS: 2048
JSON_OBJECT_AS_ARRAY: 1
JSON_BIGINT_AS_STRING: 2
JSON_ERROR_NONE: 0
JSON_ERROR_DEPTH: 1
JSON_ERROR_STATE_MISMATCH: 2
JSON_ERROR_CTRL_CHAR: 3
JSON_ERROR_SYNTAX: 4
JSON_ERROR_UTF8: 5
JSON_ERROR_RECURSION: 6
JSON_ERROR_INF_OR_NAN: 7
JSON_ERROR_UNSUPPORTED_TYPE: 8
JSON_ERROR_INVALID_PROPERTY_NAME: 9
JSON_ERROR_UTF16: 10
`}
			</CodeSnippet>

			<p>Если вы хотите распарсить JS объект из HTML страницы или файла, то скорее всего json_decode вернет ошибку т.к. в коде будут <OutboundLink  visited href="https://snipp.ru/handbk/table-ascii#link-upravlyayuschie-simvoly">
				управляющие символы
				</OutboundLink > или BOM. Удалить их можно следующим образом:</p>
			<CodeSnippet type="multi">
{`$json = '{...}';

// Удаление управляющих символов
for ($i = 0; $i <= 31; ++$i) { 
	$json = str_replace(chr($i), '', $json); 
}
			 
// Удаление символа Delete
$json = str_replace(chr(127), '', $json);
			 
// Удаление BOM
if (0 === strpos(bin2hex($json), 'efbbbf')) {
	$json = substr($json, 3);
}
			 
$res = json_decode($json, true);
print_r($res);
`}
			</CodeSnippet>


			<h2 id="http">4. HTTP-запросы в формате JSON</h2>

			<p>Некоторые сервисы требуют чтобы запросы к ним осуществлялись в формате JSON, такой запрос можно сформировать в CURL:</p>

			<CodeSnippet type="multi">
{`$data = array(
	'name' => 'snipp.ru'
	'text' => 'Отправка сообщения',
);
			 
$ch = curl_init('https://example.com');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 	
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
$res = curl_exec($ch);
curl_close($ch);
`}
			</CodeSnippet>
				
			<p>А также могут обратится к вашим скриптам в таком формате, чтение JSON запроса.</p>

<CodeSnippet type="multi">
{`$data = file_get_contents('php://input');
$data = json_decode($data, true);
`}
</CodeSnippet>
