# NestJS!

컨트롤러: URL을 가져오고 함수를 실행함.<br/>
express의 라우터 같은 것..<br/>
NestJS는 컨트롤로와 비즈니스 로직을 분리, 구분짓고 싶어함.<br/>

서비스는 비즈니스 로직을 실행하는 곳.<br/>
함수의 구현부가 존재.<br/>

무언가 필요하면 우리가 요청해야함.

put: 전체 내용을 업데이트할때 필요
patch: 일부 내용을 업데이트 할때

express.js에서 body를 json으로 리턴하려면 설정이 필요함.<br/>
NestJS는 필요가 없다.<br/>

get의 순서를 주의할 것..<br/>
get search가 get id보다 아래에 있으면<br/>
get search를 id로 인식함<br/>

Single-responsibility principle<br/>
하나의 모듈, 클래스 혹은 함수가 하나의 기능은 꼭 책임져야 한다.<br/>

DTO를 사용하려고 main.ts에 useGlobalPipes를 넣으면...<br/>
ERROR [ExceptionsHandler] classTransformer.plainToClass is not a function<br/>
{<br/>
"statusCode": 500,<br/>
"message": "Internal server error"<br/>
}<br/>

이게 무엇인고...ㅠㅠ<br/>

함수명이 바뀌었다고 한다... 이런 xx (2021/11/21 바로 어제)<br/>
[변경사항](https://github.com/typestack/class-transformer/blob/develop/CHANGELOG.md)

- classToPlain -> instanceToPlain<br/>
- plainToClass -> plainToInstance<br/>
- classToClass -> instanceToInstance<br/>

다운그레이드 하자 [nest js issue](https://github.com/nestjs/nest/issues/8637)
npm install class-transformer@0.4.0
