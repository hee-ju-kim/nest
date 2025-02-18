## Express란?
Node의 웹 애플리케이션 프레임워크

가장 많이 사용되는 프레임워크
> 구글링을 통한 충분한 레퍼런스 검색 가능 및 라이브러리 제공

구조적으로 자유도가 높음
> 개발자가 구조를 직접 관리

## NestJS란?
NestJS는 TypeScript 기반의 Node.js 백엔드 프레임워크로, 객체지향프로그래밍(OOP), 함수형 프로그래밍(FP), 기능 반응형 프로그래밍(FRP) 요소를 결합함함

**객체지향 프로그래밍**의 핵심 원칙과 개념을 깊이 통합하고 있음
> 클래스, 인스턴스, 상속, 캡슐화, 다형성 등 OOP의 주요 개념을 활용하여 구조화
> 유지보수성과 확장성이 뛰어난 애플리케이션을 만들 수 있음

Express와 Fastify를 지원하며, Express 기반으로 동작하지만, 필요하면 Fastify로 변경 가능
> Fastify란 ? Node 기반 백엔드 프레임워크
> Express가 Fastify보다 많이 사용되기때문

Angular와 유사한 구조로(데코레이터, 모듈 시스템) 프론트엔드 개발자도 쉽게 접근 가능


## 주요 특징 ✅
1. 모듈 기반 아키텍처
- 모듈 기반으로 애플리케이션 구성
- 각 기능을 독립적인 모듈로 나눠서 유지보수 & 확장하기 편리 > 코드 관리가 쉬워짐

2. 의존성 주입(DI, Dependency Injection)
- NestJS의 코어 기능
- **객체가 직접 다른 객체를 생성하지 않고(new 객체() X) 외부에서 필요한 의존성을 주입받는 패턴
- NestJS는 **의존성 관리(Dependency Management)를 자동으로 처리**하여 코드의 **유지보수성을 높이고 결합도를 낮춤**

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService], // 프로바이더 등록 > 의존성 주입
})
export class AppModule {}

```
| 이름 | 역할 |
| -- | -- |
| providers | 비즈니스 로직을 수행하는 역할 |
| controllers | 요청과 응답을 가공하고 처리하는 역할 |
| imports | 해당 모듈에 필요한 모듈들 정의 |
| exports | 해당 모듈에서 제공하는 providers들 중 일부를 다른 모듈에서 사용할 수 있게 export함 | 
<br>

3. 데코레이터 기반 코드 스타일
- @Controller(), @Get(), @Post() 등의 데코레이터를 사용하여 직관적인 코드 작성 가능

4. 미들웨어 및 가드 지원
- Express와 유사한 방식으로 미들웨어를 사용할 수 있으며, 인증/인가 로직을 Guards로 쉽게 구현 가능

5. 라이프사이클
- 애플리케이션이 시작될때부터 종료될때까지의 단계의 라이프사이클 훅을 제공
- **초기화, 요청 처리, 종료처리** 등 세밀하게 제어 가능함

	1) 애플리케이션 라이프사이클 훅
<img src="https://docs.nestjs.com/assets/lifecycle-events.png">

	| 훅(Hook) | 설명 | 실행 시점 |  
	| -- | -- | -- | 
	| 코드구조 | 자유로운 설계 |


6. 로직 수행의 흐름
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJ8hdc%2FbtsALYS9NPA%2FSkRKFMKwrTvwbHYQdwMxXk%2Fimg.png">


## Express와의 차이점
| 기능 | Express | NestJS |
| -- | -- | -- |
| 코드구조 | 자유로운 설계 | 모듈화된 구조 |
| 의존성 주입 | 수동으로 구현 | 기본 제공 |
| TypeScript지원 | 선택 | 기본 설정 (바닐라로도 구현 가능) |
| 라이프사이클 | X | O | 
| 테스트 | 테스트를 위해 별도 라이브러리나 프레임워크 선택 | 테스팅을 위한 기능을 기본적으로 내장하고있음 | 