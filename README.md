# NestJS!

NestJS는 Express.js 기반,<br/>
동시에 Fastify 기반. 두개의 프레임워크 위에서 동시에 돌아감.<br/>
Express 보다 Fastify가 두배정도 빠름.<br/>
Express.js는 node.js 기반.<br/>

nestJS에서 Express에 접근하는 방법<br/>
@Req(), @Res 사용 가능. 하지만 Fastify와 동시에 사용할 경우 쓰지 않는 것이 좋음.<br/>

컨트롤러: URL을 가져오고 함수를 실행함.<br/>
express의 라우터 같은 것..<br/>
NestJS는 컨트롤러와 비즈니스 로직을 분리, 구분짓고 싶어함.<br/>

서비스는 비즈니스 로직을 실행하는 곳.<br/>
함수의 구현부가 존재.<br/>

무언가 필요하면 우리가 요청해야함.<br/>

put: 전체 내용을 업데이트할때 필요<br/>
patch: 일부 내용을 업데이트 할때<br/>

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

다운그레이드 하자 [nest js issue](https://github.com/nestjs/nest/issues/8637)<br/>
npm install class-transformer@0.4.0<br/>

Dependency Injection<br/>

유닛 테스트와 e2e 테스트를 할 때 주의할 점.<br/>
테스트에서도 실제 app의 환경을 그대로 적용시켜야 함..<br/>

url 에서 id를 가져온다고 했을 때, 이떄 id는 string<br/>
pipe에서 transform 을 거쳐 app 에선 id가 number임.<br/>
테스트 환경에서도 transform 작업이 필요함!!

## 삽질 1

× (GET) (5011 ms)<br/>
× (POST) (5013 ms)<br/>
thrown: "Exceeded timeout of 5000 ms for a test.<br/>
Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."<br/>

왜 5초가 넘는 것인가..??? ????<br/>
무엇이 올바른 결과인가?<br/>
그렇게 무거운 처리도 아닌데 왜?<br/>

e2e test...<br/>
return request(app.getHttpServer())<br/>
getHttpServer() <-- 괄호를 꼭 붙이자,, 없으면 에러난다..<br/>
