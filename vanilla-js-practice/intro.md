## 이벤트 드리븐 프로그래밍 용어 정의

`브라우저`: 처리해야 할 특정 사건이 발생하면 감지하여 이벤트 발생시킴.
`어플리케이션`: 특정 타입의 이벤트에 대해 반응하여 어떤 일을 하고 싶다면, 해당하는 이벤트가 발생했을 때 호출될 함수를 브라우저에 알려 `호출 위임`

사용자가 버튼을 클릭한다고 가정했을 때, _언제 버튼을 클릭할지 알 수 없다._ 따라서 언제 함수를 호출해야 할지 알 수 없다. 그러나 브라우저는 사용자의 버튼 클릭을 감지하여 클릭 이벤트 발생 시 이벤트 핸들러를 호출하도록 브라우저에게 위임할 수 있다.

- 이벤트 핸들러: 이벤트가 발생했을 때 호출 될 함수
- 이벤트 핸들러 등록: 이벤트가 발생했을 때 브라우저에게 이벤트 핸들러의 호출을 위임

```html
<!DOCTYPE html>
<html>
  <body>
    <button>Click me!</button>
    <script>
      const $button = document.querySelector("button");

      // 사용자가 버튼을 클릭하면 함수를 호출하도록 요청
      $button.onclick = () => {
        alert("button click");
      };
    </script>
  </body>
</html>
```

위 예제에서 클릭 이벤트에 대해 대응하는 함수인 onclick을 써서 사용자와 어플리케이션이 상호작용하도록 했다. 이처럼 이벤트 중심으로 제어하는 프로그래밍 방식을 *이벤트 드리밍 프로그래밍*이라고 한다. click과 같은 것을 이벤트 타입이라고 하고, 이벤트 타입은 이벤트의 종류를 나타내는 문자열을 뜻한다.

---

## 이벤트 핸들러 등록

1. 이벤트 핸들러 어트리뷰트 방식

> on + 이벤트 타입으로 작성.(ex) on + click => onclick) **이벤트 핸들러 어트리뷰트의 값으로 문(ex.함수호출문)을 할당**하면 이벤트 핸들러가 등록된다.

이벤트 핸들러 어트리뷰트 방식은 오래된 코드에서 간혹 이 방식을 사용한 것이 있기 때문에 알아둘 필요는 있지만 더는 사용하지 않는 것이 좋다.

```html
<!DOCTYPE html>
<html>
  <body>
    <button onclick="sayHi('Lee')">Click me!</button>
    <script>
      function sayHi(name) {
        console.log(`Hi! ${name}.`);
      }
    </script>
  </body>
</html>
```

위의 예제에서 이벤트 핸들러 어트리뷰트 값으로 함수 호출문을 할당했는데, 이때 이벤트 핸들러 어트리뷰트 값은 사실 암묵적으로 생성될 이벤트 핸들러의 함수 몸체를 의미한다.

```javascript
// onclick="sayHi('Lee')" 어트리뷰트는 파싱되어 다음과 같은 함수를 암묵적으로 생성한다.

function onclick(event) {
  sayHi("Lee");
}
```

2. 이벤트 핸들러 프로퍼티 방식

window 객체와 Document, HTMLElement 타입의 DOM 노드 객체는 이벤트에 대응하는 이벤트 핸들러 프로퍼티를 가지고 있다. 이벤트 핸들러 프로퍼티에 함수를 바인딩하면 이벤트 핸들러가 등록된다.

```html
<!DOCTYPE html>
<html>
  <body>
    <button>Click me!</button>
    <script>
      const $button = document.querySelector("button");

      // 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩
      $button.onclick = function () {
        console.log("button click");
      };
    </script>
  </body>
</html>
```

이벤트 핸들러를 등록하기 위해서는 이벤트를 발생시킬 객체인 이벤트 타깃(event target)과 이벤트의 종류를 나타내는 문자열인 이벤트 타입(event type) 그리고 이벤트 핸들러를 지정할 필요가 있다. 예를 들어, 버튼 요소가 클릭되면 handleClick 함수를 호출하도록 이벤트 핸들러를 등록하는 경우 이벤트 타깃은 버튼 요소이고 이벤트 타입은 ‘click’이며 이벤트 핸들러는 handleClick 함수다.

```javascript
$button.onclick = function () {
  console.log("button click");
};
```

이벤트 핸들러는 대부분 이벤트를 발생시킬 이벤트 타깃에 바인딩한다. 하지만 반드시 이벤트 타깃에 이벤트 핸들러를 바인딩해야 하는 것은 아니다. 이벤트 핸들러는 이벤트 타깃 또는 전파된 이벤트를 캐치할 DOM 노드 객체에 바인딩한다. _하지만 이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러만 바인딩할 수 있다는 단점이 있다._

3. addaddEventListener

메서드의 첫 번째 매개변수에는 이벤트의 종류를 나타내는 문자열인 이벤트 타입을 전달한다. 이때 _이벤트 핸들러 프로퍼티 방식과는 달리 on 접두사를 붙이지 않는다._ 두 번째 매개변수에는 이벤트 핸들러를 전달한다. 마지막 매개변수에는 이벤트를 캐치할 이벤트 전파 단계(캡처링 또는 버블링)를 지정한다. 생략하거나 false를 지정하면 버블링 단계에서 이벤트를 캐치하고, true를 지정하면 캡처링 단계에서 이벤트를 캐치한다.

> EventTarget.addEventListener('eventType', functionName,[, usecapture])
> 이벤트타깃.addEventListener(이벤트 타입, 이벤트 핸들러, 캡처사용여부(true: capturing, false: bubbling(기본값)))

```html
<!DOCTYPE html>
<html>
  <body>
    <button>Click me!</button>
    <script>
      const $button = document.querySelector("button");

      // 이벤트 핸들러 프로퍼티 방식
      // $button.onclick = function () {
      //   console.log('button click');
      // };

      // addEventListener 메서드 방식
      $button.addEventListener("click", function () {
        console.log("button click");
      });
    </script>
  </body>
</html>
```

이벤트 핸들러 프로퍼티 방식은 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩하지만 addEventListener 메서드에는 이벤트 핸들러를 인수로 전달한다.

동일한 HTML 요소에서 발생한 동일한 이벤트에 대해 이벤트 핸들러 프로퍼티 방식은 하나 이상의 이벤트 핸들러를 등록할 수 없지만 _addEventListener 메서드는 하나 이상의 이벤트 핸들러를 등록할 수 있다. 이때 이벤트 핸들러는 등록된 순서대로 호출된다. 단, addEventListener 메서드를 통해 참조가 동일한 이벤트 핸들러를 중복 등록하면 하나의 이벤트 핸들러만 등록된다._

---

## 이벤트 핸들러 제거

removeEventListener 메서드에 전달할 인수는 addEventListener 메서드와 동일하다. 단, addEventListener 메서드에 전달한 인수와 removeEventListener 메서드에 전달한 인수가 일치하지 않으면 이벤트 핸들러가 제거되지 않는다.

```html
<!DOCTYPE html>
<html>
  <body>
    <button>Click me!</button>
    <script>
      const $button = document.querySelector("button");

      const handleClick = () => console.log("button click");

      // 이벤트 핸들러 등록
      $button.addEventListener("click", handleClick);

      // 이벤트 핸들러 제거
      // addEventListener 메서드에 전달한 인수와 removeEventListener 메서드에
      // 전달한 인수가 일치하지 않으면 이벤트 핸들러가 제거되지 않는다.
      $button.removeEventListener("click", handleClick, true); // 실패
      $button.removeEventListener("click", handleClick); // 성공
    </script>
  </body>
</html>
```

다음과 같이 무명 함수를 이벤트 핸들러로 등록한 경우 제거할 수 없다. 이벤트 핸들러를 제거하려면 이벤트 핸들러의 참조를 변수나 자료구조에 저장하고 있어야 한다.

```javascript
// 이벤트 핸들러 등록
$button.addEventListener("click", () => console.log("button click"));
// 등록한 이벤트 핸들러를 참조할 수 없으므로 제거할 수 없다.
```

이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러는 removeEventListener 메서드로 제거할 수 없다. 이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러를 제거하려면 이벤트 핸들러 프로퍼티에 null을 할당한다.

```html
<!DOCTYPE html>
<html>
  <body>
    <button>Click me!</button>
    <script>
      const $button = document.querySelector("button");

      const handleClick = () => console.log("button click");

      // 이벤트 핸들러 프로퍼티 방식으로 이벤트 핸들러 등록
      $button.onclick = handleClick;

      // removeEventListener 메서드로 이벤트 핸들러를 제거할 수 없다.
      $button.removeEventListener("click", handleClick);

      // 이벤트 핸들러 프로퍼티에 null을 할당하여 이벤트 핸들러를 제거한다.
      $button.onclick = null;
    </script>
  </body>
</html>
```

---

## 이벤트 객체

이벤트가 발생하면 이벤트에 관련한 다양한 정보를 담고 있는 이벤트 객체가 동적으로 생성된다. 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.

```html
<!DOCTYPE html>
<html>
  <body>
    <p>클릭하세요. 클릭한 곳의 좌표가 표시됩니다.</p>
    <em class="message"></em>
    <script>
      const $msg = document.querySelector(".message");

      // 클릭 이벤트에 의해 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.
      function showCoords(e) {
        $msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
      }

      document.onclick = showCoords;
    </script>
  </body>
</html>
```

클릭 이벤트에 의해 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달되어 매개변수 e에 암묵적으로 할당된다. 이는 브라우저가 이벤트 핸들러를 호출할 때 이벤트 객체를 인수로 전달하기 때문이다.

따라서 이벤트 객체를 전달받으려면 이벤트 핸들러를 정의할 때 이벤트 객체를 전달받을 매개변수를 명시적으로 선언해야 한다. 위 예제에서 e라는 이름으로 매개변수를 선언했으나 다른 이름을 사용해도 상관없다. 이벤트 핸들러 어트리뷰트 방식의 경우 이벤트 객체를 전달받으려면 이벤트 핸들러의 첫 번째 매개변수 이름이 반드시 event이어야 한다. 만약 event가 아닌 다른 이름으로 매개변수를 선언하면 이벤트 객체를 전달받지 못한다.

---

## 이벤트 전파

DOM 트리 상에 존재하는 DOM 요소 노드에서 발생한 이벤트는 DOM 트리를 통해 전파된다.

```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits">
      <li id="apple">Apple</li>
      <li id="banana">Banana</li>
      <li id="orange">Orange</li>
    </ul>
  </body>
</html>
```

ul 요소의 두 번째 자식 요소인 li 요소를 클릭하면 클릭 이벤트가 발생한다. 이때 생성된 이벤트 객체는 이벤트를 발생시킨 DOM 요소인 이벤트 타깃(event target)을 중심으로 DOM 트리를 통해 전파된다.

- 캡처링 단계(capturing phase) : 이벤트가 상위 요소에서 하위 요소 방향으로 전파
- 타깃 단계(target phase) : 이벤트가 이벤트 타깃에 도달
- 버블링 단계(bubbling phase) : 이벤트가 하위 요소에서 상위 요소 방향으로 전파

li 요소를 클릭하면 클릭 이벤트가 발생하여 클릭 이벤트 객체가 생성되고 클릭된 li 요소가 이벤트 타깃이 된다. 이때 클릭 이벤트 객체는 window에서 시작해서 이벤트 타깃 방향으로 전파된다. 이것이 캡처링 단계다. 이후 이벤트 객체는 이벤트를 발생시킨 이벤트 타깃에 도달한다. 이것이 타깃 단계다. 이후 이벤트 객체는 이벤트 타깃에서 시작해서 window 방향으로 전파된다. 이것이 버블링 단계다.

**이벤트 핸들러 어트리뷰트/프로퍼티 방식으로 등록한 이벤트 핸들러는 타깃 단계와 버블링 단계의 이벤트만 캐치할 수 있다. 하지만 addEventListener 메서드 방식으로 등록한 이벤트 핸들러는 타깃 단계와 버블링 단계뿐만 아니라 캡처링 단계의 이벤트도 선별적으로 캐치할 수 있다.** 캡처링 단계의 이벤트를 캐치하려면 addEventListener 메서드의 3번째 인수로 true를 전달해야 한다. 3번째 인수를 생략하거나 false를 전달하면 타깃 단계와 버블링 단계의 이벤트만 캐치할 수 있다.

대부분의 이벤트는 캡처링과 버블링을 통해 전파된다. 하지만 다음 이벤트는 버블링을 통해 전파되지 않는다. 이 이벤트들은 버블링을 통해 이벤트를 전파하는지 여부를 나타내는 이벤트 객체의 공통 프로퍼티 event.bubbles의 값이 모두 false다.

포커스 이벤트: focus/blur
리소스 이벤트: load/unload/abort/error
마우스 이벤트: mouseenter/mouseleave

---

## 이벤트 위임

여러 개의 하위 DOM 요소에 각각 이벤트 핸들러를 등록하는 대신 하나의 상위 DOM 요소에 이벤트 핸들러를 등록하는 방법

## DOM 요소의 기본 동작 중단

DOM 요소는 저마다 기본 동작이 있다. 예를 들어, a 요소를 클릭하면 href 어트리뷰트에 지정된 링크로 이동하고, checkbox 또는 radio 요소를 클릭하면 체크 또는 해제된다.

이벤트 객체의 preventDefault 메서드는 이러한 DOM 요소의 기본 동작을 중단시킨다. 이벤트 객체의 stopPropagation 메서드는 이벤트 전파를 중지시킨다.

```html
<!DOCTYPE html>
<html>
  <body>
    <a href="https://www.google.com">go</a>
    <input type="checkbox" />
    <script>
      document.querySelector("a").onclick = (e) => {
        // a 요소의 기본 동작을 중단한다.
        e.preventDefault();
      };

      document.querySelector("input[type=checkbox]").onclick = (e) => {
        // checkbox 요소의 기본 동작을 중단한다.
        e.preventDefault();
      };
    </script>
  </body>
</html>
```

---

## 이벤트 핸들러 내부의 this

다음 예제의 handleClick 함수 내부의 this는 전역 객체 window를 가리킨다. 이벤트 핸들러 어트리뷰트의 값으로 지정한 문자열은 사실 암묵적으로 생성되는 이벤트 핸들러의 문이라고 했다. 따라서 handleClick 함수는 이벤트 핸들러에 의해 일반 함수로 호출된다. _즉 일반 함수로서 호출되는 함수 내부의 this는 전역 객체를 가리킨다. 따라서 handleClick 함수 내부의 this는 전역 객체 window를 가리킨다._ 단, 이벤트 핸들러를 호출할 때 인수로 전달한 this는 이벤트를 바인딩한 DOM 요소를 가리킨다.

```html
//handleclick 함수 내부의 this
<!DOCTYPE html>
<html>
  <body>
    <button onclick="handleClick()">Click me</button>
    <script>
      function handleClick() {
        console.log(this); // window
      }
    </script>
  </body>
</html>

// 이벤트 핸들러를 호출할 때 인수로 전달한 this
<!DOCTYPE html>
<html>
  <body>
    <button onclick="handleClick(this)">Click me</button>
    <script>
      function handleClick(button) {
        console.log(button); // 이벤트를 바인딩한 button 요소
        console.log(this); // window
      }
    </script>
  </body>
</html>
```

이벤트 핸들러 프로퍼티 방식과 addEventListener 메서드 방식 모두 이벤트 핸들러 내부의 this는 이벤트를 바인딩한 DOM 요소를 가리킨다. 화살표 함수로 정의한 이벤트 핸들러 내부의 this는 상위 컨텍스트의 this를 가리킨다. 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다.
