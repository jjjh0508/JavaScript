//소스코드 최상단에 존재해야한다.
'use strict';

function test(){
    x = 10;
}


test();

console.log(x);
//<script> 단위로 설정되기 때문에 매번 작성을 해주어야한다.</script>
{/* <script>
'use strict';
</script>
 */}

 // 서드파티 라이브러리가 non-strict mode인 경우 즉실 실행 함수로 스크립트 전체를 감써서 스코프를 구분하고 즉시 실행 함수의 선두에
 // strict mode를 적용한다.
 (function (){
    'use strict';
 })();

 /**
  * 함수 단위로 strict mode 를 적용하게 되면 strict mode와 non strict mode의 혼용되어
  * 바람직 하지 않기 때문에 위와 같이 익명 함수로 감싸서 스크립트 단위로 적용하는것이 좋다.
  * 
  */
