# 그림으로 공부하는 IT인프라 구조

## 차례

- [인프라 아키텍처를 살펴보자](#인프라-아키텍처를-살펴보자)
- [서버를 열어 보자](#서버를-열어-보자)
- [3계층형 시스템을 살펴보자](#3계층형-시스템을-살펴보자)
- [인프라를 지탱하는 기본 이론](#인프라를-지탱하는-기본-이론)
- [인프라를 지탱하는 응용 이론](#인프라를-지탱하는-응용-이론)

## 인프라 아키텍처를 살펴보자

인프라는 '기반'이란 뜻으로, 바탕이나 토대를 의미한다.  
아키텍처는 '구조'를 의미하며, 공통화되어 있다.  
다양한 이용 방법과 사용자가 다르지만 인프라 아키텍처는 거의 같은 구조를 가지고 있다.

### 집약형 아키텍처

집약형은 하나의 대형 컴퓨터로 모든 처리를 하는 것으로 '범용 장비', '호스트', '메인 프레임' 등으로 불렸다.  
컴퓨터를 구성하는 주요 부품은 모두 다중화되어 있어서 하나가 고장 나더라도 업무를 계속할 수 있다.  
복수의 서로 다른 업무 처리를 동시에 실행할 수 있도록 유한 리소스 관리를 한다. 하나의 처리가 다른 처리에 영향을 주지 않도록 되어 있다.

**장점**

- 한 대의 대형 컴퓨터만 있으면 되므로 구성이 간단하다.
- 대형 컴퓨터의 리소스 관리나 이중화에 의해 안정성이 높고 고성능이다.

**단점**

- 대형 컴퓨터의 도입 비용과 유지 비용이 비싸다.
- 확장성에 한계가 있다.

### 분할형 아키텍처

여러 대의 컴퓨터(서버)를 조합해서 하나의 시스템을 구축하는 구조다.  
여러 대의 소형 컴퓨터를 이용해 한 대가 고장 나도 안정성을 담보하고 있다.  
분할형 아키텍처는 표준 OS나 개발 언어를 이용하기 때문에 '오픈 시스템'이라고도 부른다.

**장점**

- 낮은 비용으로 시스템을 구축할 수 있다.
- 서버 대수를 늘릴 수 있어서 확장성이 높다.

**단점**

- 대수가 늘어나면 관리 구조가 복잡해진다.
- 한 대가 망가지면 영향 범위를 최소화하기 위한 구조를 검토해야 한다.

### 서버

서버라는 용어는 컴퓨터 자체(하드웨어)를 가리키는 경우도 있고, 컴퓨터에서 동작하고 있는 소프트웨어를 가리키는 경우도 있다.  
컴퓨터 자체를 가리키는 경우는 '물리 서버'라고 부르고 웹 서버나 DB 서버와 같이 컴퓨터 내부에서 여러 소프트웨어 서버가 동작하고 있는 것을 '논리 서버'라고 부른다.

### 수직 분할형 아키텍처

분할형에서는 서버 분할 방식, 즉 역할 분담을 고려해야 한다.  
수직형이라고 표현하는 것은 역할에 따라 '위' 또는 '아래' 계층으로 나뉘기 때문이다.

#### _클라이언트-서버형 아키텍처_

애플리케이션, 미들웨어, 데이터베이스 등의 소프트웨어를 '물리 서버' 상에서 운영하고, 이들 소프트웨어에 '클라이언트' 또는 '단말'이라 불리는 소형 컴퓨터가 접속해서 이용하는 형태다.  
클라이언트-서버형의 특징은 클라이언트 측에 전용 소프트웨어를 설치해야 한다는 것이다.

**장점**

- 클라이언트 측에서 많은 처리를 실행할 수 있어서 소수의 서버로 다수의 클라이언트를 처리할 수 있다.

**단점**

- 클라이언트 측의 소프트웨어 정기 업데이트가 필요하다.
- 서버 확장성에 한계가 발생할 수 있다.

#### _3계층형 아키텍처_

클라이언트-서버형을 발전시킨 것으로 프레젠테이션 계층, 애플리케이션 계층, 데이터 계층의 3층 구조로 분할되어 있어서 3계층형이라고 부른다.  
프레젠테이션 계층은 사용자 입력을 받고 웹 브라우저 화면을 표시한다.(웹 서버)  
애플리케이션 계층은 사용자 요청에 따라 업무 처리를 한다.(AP 서버)  
데이터 계층은 애플리케이션 계층의 요청에 따라 데이터 입출력을 한다.(DB 서버)  
3계층 시스템에서는 사용자가 웹 브라우저를 통해 시스템에 접속한다.  
모든 처리가 AP 서버나 DB 서버를 이용하지 않아도 된다.

**장점**

- 서버 부하 집중 개선
- 클라이언트 단말의 정기 업데이트가 불필요
- '처리 반환'에 의한 서버 부하 저감

**단점**

- 구조가 클라이언트-서버 구성보다 복잡하다.

### 수평 분할형 아키텍처

수평 분할형 아키텍처는 용도가 같은 서버를 늘려나가는 방식이다.  
서버 대수가 늘어나면 한 대가 시스템에 주는 영향력이 낮아져서 안정성이 향상된다.  
처리를 담당하는 서버 대수가 늘어나면 전체적인 성능 향상도 실현할 수 있다.  
수직 분할형과 수평 분할형은 배타적인 관계가 아니다.  
수평 분할을 'sharding'이나 'partitioning'이라 부르기도 한다.

#### _단순 수평 분할형 아키텍처_

이 구성에서는 시스템이 둘로 분할됨으로써 시스템 전체 처리 성능을 두 배로 향상시킬 수 있다.  
이 구조는 거래상으로 멀리 떨어진 시스템에 자주 이용되거나 각 거점이 완전히 독립된 운영을 하고 있는 경우에 적합하다.

**장점**

- 수평으로 서버를 늘리기 때문에 확장성이 향상된다.
- 분할한 시스템이 독립적으로 운영되므로 서로 영향을 주지 않는다.

**단점**

- 데이터를 일원화해서 볼 수 없다.
- 애플리케이션 업데이트는 양쪽을 동시에 해 주어야 한다.
- 처리량이 균등하게 분할되어 있지 않으면 서버별 처리량에 치우침이 생긴다.

#### _공유형 아키텍처_

공유형에서는 단순 분할형과 달리 일부 계층에서 상호 접속이 이루어진다.  
데이터가 각지에 흩어져 있는 것보다 한 곳에서 집중적으로 관리하는 것이 보안이나 관리상 유리한 경우가 있다.

**장점**

- 수평으로 서버를 늘리기 때문에 확장성이 향상된다.
- 분할한 시스템이 서로 다른 시스템의 데이터를 참조할 수 있다.

**단점**

- 분할한 시스템 간 독립성이 낮아진다.
- 공유한 계층의 확장성이 낮아진다.

> **엣지 컴퓨팅(Edge Computing)**  
> 가상화를 사용해 데이터 센터를 통합하거나, 클라우드로 이전하면서 네트워크 대역과 비용이 크게 증가했다.  
> 이런 이유로 지리적으로 가까운 위치에 있는 서버로 처리를 분산하고 처리 결과만 중앙으로 보내는 아키텍처가 등장했다.  
> 엣지 컴퓨팅에서는 관리를 위한 수고를 줄이면서 서버를 분산하는 것이 중요한 과제다.

### 지리 분할형 아키텍처

업무 연속성 및 시스템 가용성을 높이기 위한 방식이다.

#### _스탠바이형 아키텍처_

스탠바이 구성, HA(High Availability) 구성, 액티브-스탠바이 구성 등으로 불리는 형태다.  
물리 서버를 최소 두 대를 준비하여 한 대가 고장 나면 가동 중인 소프트웨어를 다른 한 대로 옮겨서 운영하는 방식이다. 이때 소프트웨어 재시작을 자동으로 하는 구조를 페일오버(Failover)라고 한다.  
이 방식에서는 물리 서버 고장에 대처할 수 있지만, 보통 때는 페일오버 대상 서버(스탠바이)가 놀고 있는 상태가 되기 때문에 리소스 측면에서 낭비가 발생한다.  
스탠바이를 따로 두지 않고, 양쪽 서버를 동시에 교차 이용(한쪽 이 고장 나면 다른 한쪽이 양쪽을 처리)하는 경우도 많다.  
물리 서버가 아닌 가상화 서버를 이용하고 있는 경우는 서버상의 소프트웨어뿐만 아니라 가상 서버별로 다른 물리 서버에 페일오버하는 방식도 선택될 수 있다.

#### _재해 대책형 아키텍처_

특정 데이터 센터(사이트)에 있는 상용 환경에 고장이 발생하면 다른 사이트에 있는 재해 대책 환경에서 업무 처리를 재개하는 것을 가리킨다.  
서버 장비를 최소 구성 및 동시 구성으로 별도 사이트에 배치하고, 소프트웨어도 상용 환경과 동일하게 설정한다.  
특히 데이터는 매일 갱신되기 때문에 어느 정도 실시간성을 유지해서 사이트 간 동기 처리를 해야 한다.

## 서버를 열어 보자

### 물리 서버

서버는 랙(Rack)이라는 것에 장착된다.  
랙에는 서버 외에도 저장소나 네트워크 스위치 등도 탑재되어 있다.  
랙의 규격은 폭 19인치, 높이 한 칸(1U)에 약 4.5cm로 40~46개 칸으로 이루어져 있다.  
서버 설치 시에 중요한 정보는 서버 크기(U), 소비 전력(A), 중량(Kg)이다.  
서버 내부는 다수의 컴포넌트들로 구성되어 있고 그 컴포넌트들은 버스(연결하는 선)로 연결된다.

### CPU

CPU는 Central Processing Unit의 약자로 서버 중심에 위치해서 연산 처리를 실시한다.  
뒷면에 있는 대량의 핀이 버스에 연결되어 있어서 메모리나 디스크와 데이터를 교환한다.  
CPU는 명령을 받아서 연산을 실행하고 결과를 반환한다. 명령과 데이터는 기억 장치나 입출력 장치를 통해 전달된다.  
CPU는 코어(core)라고 하며, 하나의 CPU에 여러 개의 코어가 존재하고 각자가 독립된 처리를 할 수 있다.  
OS에서 동작하는 프로세스와 사용자를 통한 입력으로 CPU에 명령을 내린다.

### 메모리

CPU 옆에 위치하며, CPU에 전달하는 내용이나 데이터를 저장하거나 처리 결과를 받는다.  
메모리에 저장되는 정보는 영구성이 없지만 액세스가 매우 빠르게 이루어진다.  
CPU 자체도 메모리를 가지고 있다. 이것은 레지스터나 L1/L2 캐시라고 불리며 메모리보다 더 빠르고 용량은 메모리에 비해 매우 작다.  
메모리를 이용하려면 메모리 컨트롤러를 경유해서 CPU 밖으로 나가야 한다. 메모리 컨트롤러에는 채널들이 있는데 채널은 메모리와 CPU 간 데이터 경로를 말한다.  
고속 CPU는 처리 지연(Latency)조차 허락하지 않기 때문에 가장 자주 사용하는 명령/데이터를 코어 가까운 곳에 배치해야 한다.  
메모리 영역이 여러 단계로 나누어져 있는 이유는 액세스 속도 때문이다.  
일반적으로 캐시 메모리가 커질수록 액세스 속도가 느려진다. 하지만 가능한 CPU 가까운 곳에 많은 캐시를 두고 싶기 때문에 여러 단계로 배치해서 초고속으로 액세스하고 싶은 데이터는 L1 캐시에, 준고속으로 액세스하고 싶은 데이터는 L2 캐시에 두는 형태로 만든 것이다.  
메모리에는 미리 데이터를 CPU에 전달해서 처리 지연을 줄이는 메모리 인터리빙(Memory Interleaving)이라는 기능이 있다. 이 기능을 활용하기 위해서는 모든 채널의 동일 뱅크에 메모리를 배치해야 한다.

### I/O 장치

#### _하드 디스크 드라이브(HDD)_

서버에서는 메모리에 비해 CPU에서 떨어진 곳에 HDD가 배치된다.  
주로 장기 저장 목적의 데이터 저장 장소로 사용한다.  
전기가 없어도 데이터가 사라지지 않는다.  
내부에는 자기 원반이 여러 개 들어 있으며, 이것이 고속으로 회전해서 읽기/쓰기 처리를 한다.  
SSD(Solid State Disk, 반도체 디스크)는 물리적인 회전 요소를 사용하지 않는 디스크이다.  
서버와 I/O 시에는 HDD가 직접 데이터 교환을 하는 것이 아니라 캐시를 통해서 한다.  
대형 저장소와 연결할 때는 파이버 채널(Fibre Channel, FC)이라는 케이블을 사용해서 SAN이라는 네트워크를 경유한다.  
쓰기 I/O에는 라이트 백과 라이트 스루가 있다.

#### _네트워크 인터페이스_

네트워크 인터페이스는 서버와 외부 장비를 연결하기 위한 것으로 외부 접속용 인터페이스다.  
서버 외부 장비로는 네트워크에 연결된 다른 서버나 저장소 장치가 있다.

#### _I/O 제어_

칩셋은 처리 속도가 비교적 늦어도 용서되는 I/O 제어를 담당하고 있다.(ex: PCH)  
CPU 외에도 다양한 컨트롤러나 칩이 존재하는 이유는 CPU가 해야 할 연산에 더 집중하기 위한 것이라 할 수 있다.  
CPU와 칩셋의 관계는 역할 분담을 위한 것이다.

### 버스

버스(Bus)는 서버 내부에 있는 컴포넌트들을 서로 연결시키는 회선을 가리킨다.  
버스에서 중요한 것은 어느 정도의 데이터 전송 능력을 가지고 있는가, 즉 대역이 어느 정도인가이다.

#### _대역_

IT 인프라에서 대역은 데이터 전송 능력을 의미한다.  
대역은 '한번에 데이터를 보낼 수 있는 데이터 폭(전송폭)' × '1초에 전송할 수 있는 횟수(전송 횟수)'로 결정된다. 전송 횟수는 '1초 ÷ 1처리당 소요 시간(응답 시간)'으로 표현할 수 있다.  
대역은 스루풋(Throughput, 처리량)이라고도 부른다.

#### _버스 대역_

CPU에 가까운 쪽이 1초당 전송량이 크다는 것을 알 수 있다.  
버스 흐름에서 중요한 것은 CPU와 장치 사이에 병목 현상이 없어야 한다는 것이다.  
시스템 설계 시에 특히 놓치기 쉬운 것이 외부 장치 연결 시의 버스 대역에 관한 것이다.

> **SSD 규격**  
> SATA(Serial ATA) -> SAS(Serial Attached SCSI) -> NVMe(NVM Express) 순으로 속도가 빠르다.

### 처리 흐름

CPU가 PCI 컨트롤러 역할을 하고 있어서 그림이 약간 복잡하지만, 아래 구조도 시간이 지남에 따라 바뀔 것이다.  
![cpu_to_storage](https://user-images.githubusercontent.com/40534414/224868346-f90b3239-789f-45dd-af32-c432644ba9ef.png)

## 3계층형 시스템을 살펴보자

주요 구성 요소는 웹 서버, AP 서버, DB 서버이다.  
각 서버의 CPU와 메모리 영역에는 논리 구성이 되어 있는데 이 부분은 OS 영역을 가리킨다.  
OS를 이해하는 데 있어서 필수 개념인 프로세스와 스레드, 커널이 있다.

### 프로세스와 스레드

프로세스 및 스레드는 프로그램 실행 파일 자체가 아니라 OS상에서 실행돼서 어느 정도 독립성을 가지고 동작하는 것이다.  
프로세스나 스레드가 시작되는 것은 마치 사람이 숨을 쉬기 시작하면서 활동하는 것과 같은 의미다.  
프로세스 및 스레드가 활동하려면 메모리 공간이 필요하다. 이것은 커널에 의해 메모리상에 확보된다.  
프로세스의 내부에 하나 이상의 스레드가 메모리 공간을 점유해서 동작한다.  
프로세스는 전용 메모리 공간을 이용해서 동작한다.  
스레드는 다른 스레드와 메모리 공간을 공유하고 있는 운명 공동체다.  
프로세스 간의 공유하고 싶은 데이터는 공유 메모리상에 둔다.

|      | 프로세스                | 스레드                                                                        |
| :--: | :---------------------- | :---------------------------------------------------------------------------- |
| 장점 | 개별 처리 독립성이 높다 | 생성 시 부하가 낮다                                                           |
| 단점 | 생성 시 CPU 부하가 높다 | 메모리 공간을 공유하기 때문에 의도하지 않는 데이터 읽기/쓰기가 발생할 수 있다 |

### OS 커널

커널은 OS의 본질이며, 커널 자체가 OS의 '인프라'라고 생각하면 된다.  
커널은 다양한 역할을 갖지만, 가장 중요한 것은 '뒤에서 하는 일은 은폐하면서도 편리한 인터페이스를 제공하는 것'이다.  
OS 처리는 원칙적으로 커널을 통해 이루어지며 커널의 역할은 아래와 같다.

#### _시스템 콜 인터페이스_

프로세스/스레드에서 커널로 연결되는 인터페이스다.  
애플리케이션이 OS를 통해서 어떤 처리를 하고 싶으면 시스템 콜이라고 하는 명령을 이용해서 커널에 명령을 내린다.  
데이터 I/O, 네트워크 I/O, 또는 새로운 프로세스 생성을 시스템 콜을 호출하면 기능을 이용할 수 있다.

#### _프로세스 관리_

언제, 어떤 프로세스가 어느 정도의 CPU 코어를 이용할 수 있는지, 처리 우선순위를 어떻게 결정할 것인지 등을 관리하는 기능의 역할을 한다.  
이 기능이 없다면 OS가 성립되지 않기 때문에 OS에게 있어 가장 중요한 기능이라 할 수 있다.

#### _메모리 관리_

메모리 관리에서는 물리 메모리 공간의 최대치를 고려한다.  
프로세스가 이용하는 독립 메모리 공간을 확보하거나 상호 간의 참조 영역을 지키기 위해 독립성을 관리하는 등의 메모리 관리 역할을 한다.  
이 기능이 없으면 각 프로세스는 자신 이외의 프로세스가 사용하고 있는 메모리 영역 범위를 파악해야 한다.

#### _네트워크 스택_

#### _파일 시스템 관리_

파일 시스템은 OS 기능의 하나로서 물리 디스크에 제공된 데이터를 관리하는 기능이다.  
물리 디스크에 기록된 데이터는 2진수의 집합에 불과하며 구분 표시도 없기 때문에 파일 시스템을 이용하여 애플리케이션을 파일 단위로 데이터를 작성하거나 삭제할 수 있다.  
주요 관리 기능으로는 디렉터리 구조 제공, 액세스 관리, 고속화, 안정성 향상 등이 있다.

#### _장치 드라이버_

디스크나 NIC 등의 물리 장치용 인터페이스를 제공한다.  
물리 장치는 제조사마다 독자 제품을 제공하기 때문에 커널은 장치 드라이버를 이용해서 그 아래에 있는 물리 장치를 은폐한다.  
각 장치 제조사는 OS에 대응하는 장치 드라이버를 제공해서 해당 OS의 표준 장치로서 커널을 경유해 이용할 수 있게 하는 것이다.

> **커널 설계 및 구현 방식**  
> 모놀리식(Monolithic) 커널: OS의 주요 구성 요소를 모두 하나의 메모리 공간을 통해 제공한다.  
> 마이크로(Micro) 커널: 최소한의 기능만 커널이 제공하고 그 외 기능은 커널 밖에서 제공한다.

### 웹 데이터 흐름

3계층 시스템에서는 사용자 요청을 시작으로 해당 요청이 다양한 서버로 전달된다.  
특징으로는 자신이 할 수 없는 처리는 다음 서버에게 그 역할을 떠넘긴다는 것이다.  
실제로는 3계층보다 많은 계층을 이용하는 경우가 대부분이다.  
요청 기반 아키텍처이기 때문에 기본적으로 각 서버는 '문을 열고 기다리고 있는' 상태이기 때문에 어느 정도 요청이 올지는 실제 요청이 오기 전까지 알 수 없다.  
각 서버의 동작은 다르지만 다음과 같은 공통점이 있다.

- 프로세스나 스레드가 요청을 받는다.
- 도착한 요청을 파악해서 필요에 따라 별도 서버로 요청을 보낸다.
- 도착한 요청에 대해 응답한다.

#### _클라이언트 PC부터 웹 서버까지_

- 클라이언트 PC에서 웹 브라우저 실행
  1. 디스크에 저장된 프로그램을 읽는다.
  2. OS가 웹 브라우저 프로세스를 시작하고, 메모리 공간을 확보한다.
  3. 웹 브라우저 화면에서 링크를 클릭한다.
  4. 커널을 통해 NIC에 네트워크 통신이 요청된다.
- 이름 해석(Name resolution)
  1. OS의 호스트명, IP 주소 변환 테이블을 참조해서 IP 주소가 존재하지 않는 경우, 외부의 DNS 서버에 요청을 던진다.
  2. DNS 서버에서 IP 주소 검색 결과가 반환된다.
  3. 이 결과를 가지고 해당하는 웹 서버에 요청(HTTP)을 보낸다.
- 웹 서버까지
  1. 웹 서버의 httpd 프로세스가 요청을 접수한다.
  2. 요청 내용(HTML)을 분석해서 정적 콘텐츠인지 동적 콘텐츠인지 판단한다.
  3. 정적 콘텐츠는 디스크로부터 읽고 HTTP를 통해 사용자 웹 브라우저로 반환한다.
  4. 동적 콘텐츠는 네트워크를 경유해서 다른 서버로 요청을 보낸다.

> 정적 콘텐츠: 실시간으로 변경할 필요가 없는 데이터  
> 동적 콘텐츠: 높은 빈도로 변경되는 데이터

#### _웹 서버부터 AP 서버까지_

1. 웹 서버에서 온 요청을 NIC를 경유해서 커널에 의해 끼어들기 처리된다.
2. 스레드가 요청을 받으면 자신이 계산할 수 있는지, 아니면 DB 접속이 필요한지를 판단한다.
3. DB 접속이 필요하면 연결 풀에 액세스한다.
4. 시스템 콜을 이용해 접속 요청을 한다.
5. 네트워크 경유로 DB 서버에 대한 질의가 이루어진다.

AP 서버는 동적 콘텐츠에 대한 요청을 처리하는 역할을 담당한다.  
AP 서버에는 하나의 거대한 프로세스인 가상 머신이 동작하고 있다.  
AP 서버가 DB 서버에 접속하려면 드라이버가 필요하다.  
규모가 작고 갱신 빈도가 낮은 정보는 가상 머신 내부에 캐시로 저장해 두었다가 반환하는 것이 좋다.  
규모가 큰 정적 데이터 전송 시에는 CDN이라 불리는 데이터 전송 전용 서버를 이용하는 경우도 있다.

> **CDN(Content Delivery Network)**  
> CDN은 대량의 데이터 전송에 특화된 것으로, 전 세계에 있는 데이터 복사본(캐시)을 배치하는 기술과 병렬 기술을 활용해서 처리를 효율화하고 있다.  
> 대부분의 웹 시스템에서 이용하며 기업형 시스템에서는 잘 사용되지 않는다.

#### _AP 서버부터 DB 서버까지_

1. AP 서버로부터 요청이 도착한다.
2. DB 프로세스가 요청을 접수하고 캐시가 존재하는지 확인하기 위해 공유 메모리를 검색한다.
3. 공유 메모리에 데이터가 존재하지 않으면 시스템 콜을 경유해서 디스크에 액세스한다.
4. 디스크가 데이터를 반환한다.
5. 한번 액세스한 데이터는 메모리에 캐시 형태로 저장되고 이후 액세스 시에 재사용된다.
6. 요청을 보낸 AP 서버로 데이터를 반환한다.

DB 서버는 관리 대상 데이터가 방대하기 때문에 얼마나 효율적으로 액세스하는가가 중요하다.  
인메모리 DB 등에서는 디스크 자체를 사용하지 않고 모든 처리를 메모리 내에서 완료하는 구조라서 고속화를 실현할 수 있다.  
요청을 SQL로 받아서 해석하거나 데이터에 액세스하는 프로세스가 있고, 메모리에 캐시로 존재하는 데이터와 디스크에 있는 데이터를 정기적으로 동기화하는 프로세스도 있다.  
실제로는 DB 서버 내부의 디스크는 별도 저장 장치를 이용한다.

> **RDBMS**  
> RDBMS는 표로 데이터를 표현하기 때문에 필연적으로 데이터가 정리된다.  
> 데이터의 일관성을 더 엄격히 관리하므로, 다른 방식보다 갱신 속도가 느린 경향이 있다.

#### _AP 서버부터 웹 서버까지_

1. DB 서버에서 돌아온 데이터는 NIC 경유로 원래 스레드에 반환된다.
2. 스레드가 데이터를 가지고 계산 등을 한 후에 파일 데이터를 생성한다.
3. 웹 서버로 데이터를 반환한다.

가공 결과가 텍스트 데이터라면 HTML이나 XML 파일을 사용하는 것이 일반적이다.  
동적 이미지 등의 바이너리 데이터를 생성해서 반환하는 경우도 있다.  
HTTP로 전송 가능한 데이터라면 어떤 형태의 데이터든지 상관없다.

#### _웹 서버부터 클라이언트 PC까지_

1. AP 서버에서 돌아온 데이터는 NIC 경유로 원래 스레드에 반환된다.
2. 필요한 데이터 가공은 모두 AP 서버에서 이루어지기 때문에 httpd 프로세스는 받은 데이터를 그대로 반환한다.
3. 요청한 데이터가 웹 브라우저로 반환되고 화면에 표시된다.

하나의 요청에 하나의 데이터가 반환된다.  
일반적인 웹 페이지에서는 페이지 HTML 파일과 다수의 이미지 파일 등이 있기 때문에 복수의 요청으로 분할돼서 웹 서버에 도착하고, 각 요청별로 데이터를 반환한다.

> **조감도**  
> 시스템에서의 조감도는 시스템 구성도라고 할 수 있다.  
> 전체의 모습을 파악해 두면 불필요한 장애를 사전에 방지할 수 있다.

### 가상화

가상화란 컴퓨터 시스템에서 물리 리소스를 추상화하는 것이다.  
물리 리소스에는 서버, 네트워크, 저장소 등이 있다.

#### _OS도 가상화 기술의 하나_

하드웨어를 의식하지 않고 애플리케이션을 실행할 수 있는 운영체제는 가상화 기술 중 하나라고 볼 수 있다.  
OS 등장 이전에는 하드웨어를 의식한 프로그래밍이 필요했고 매우 복잡한 작업이었다.  
OS의 커널에 의해 하드웨어가 추상화되면서, 컴퓨터에 연결된 기억 장치나 네트워크를 통한 데이터 교환이 하드웨어를 의식하지 않고 이루어지고 있다.  
OS가 가상 메모리를 사용해 프로세스 및 OS 커널의 메모리 공간을 분리하므로써, 동시에 다수의 프로그램이 작동할 수 있다.

> **가상과 버추얼의 차이**  
> 버추얼이라는 용어가 가상이라고 번역되어 그대로 정착된 것이다.  
> 컴퓨터에서 '가상~'이라는 용어가 나오면 '실제가 아닌'이 아니라, 물리적으로 존재하지 않지만 '실제로 존재하는 것과 같다'는 긍정적 의미로 떠올리는 것이 이해가 쉬울 것이다.

#### _가상 머신_

가상 머신 방식에는 호스트 OS형과 하이퍼바이저형이 있다.  
호스트 OS형은 윈도우즈나 리눅스 등의 호스트 OS상에 가상화 소프트웨어를 설치해서 이용하는 것이다. 소프트웨어를 에뮬레이터하는 것으로 성능면에서 제한이 있다.  
하이퍼바이저형은 하드웨어상에서 직접 가상화 소프트웨어를 실행하고 그 위에 가상 머신을 동작시키는 기술이다. 호스트 OS를 거치지 않으므로 호스트형보다 성능이 우수해서 서버 가상화의 대표 기술로 자리 잡았다.  
하이퍼바이저형 가상화 구조에는 완전 가상화와 준가상화가 있고 현재는 완전 가상화가 자리를 잡았다.
완전 가상화는 물리 머신상에서 동작하는 OS나 드라이버를 그대로 게스트로 이용할 수 있는 장점이 있지만, 소프트웨어로 에뮬레이션하기 때문에 성능이 저하된다는 문제가 있다.

#### _컨테이너_

컨테이너는 하나의 OS상에서 여러 개를 동시에 가동할 수 있으며, 각각 독립된 루트 파일 시스템, CPU/메모리, 프로세스 공간 등을 사용할 수 있다.  
프로세스가 OS의 루트 디렉터리 아래에 있는 특정 계층에 접근하지 못하도록 하는 기능에서 출발했다.  
컨테이너는 호스트 OS와 OS 커널을 공유하므로 컨테이너 실행이나 정지 속도가 빠르다.

#### _도커_

도커는 라이브러리나 프레임워크 등을 도커 이미지로 묶어서 공유할 수 있는 것으로, 특정 환경에서는 재현되지만 자신의 개발 환경에서는 재현되지 않는 문제가 발생하기 어렵다.  
호스트 OS의 커널을 공유하므로 한 대의 호스트 머신상에서 훨씬 많은 컨테이너를 실행할 수 있다. 이를 통해 리소스를 한 곳에서 쉽게 관리할 수 있다.

## 인프라를 지탱하는 기본 이론

### 직렬/병렬

직렬은 여러 개의 물건이 일직선으로 나열돼 있는 것이며, 병렬은 두 줄 이상으로 나열돼 있는 것이다.  
직렬 처리로 속도를 올리는 데는 한계가 있다.(클럭 주파수)  
병렬화를 통해 속도는 빨라지지 않지만, 단위 시간당 처리량을 늘릴 수 있다.  
병렬 처리에서는 합류점, 직렬화 구간, 분기점이 병목 지점이 되기 쉽다.  
병렬화할 때는 일을 분담해서 처리를 한 후 다시 집약할 때 오버헤드가 걸리므로 이 것을 감안하더라도 효과가 있을 경우에 병렬화를 한다.

#### _웹 서버와 AP 서버에서의 병렬화_

웹 서버에는 다수의 이용자가 접속하기 때문에 복수의 프로세스가 분담해서 병렬 처리를 하고 있다.  
AP 서버에서는 프로세스가 하나이지만 복수의 스레드가 병렬로 처리하고 있다.  
하나의 CPU 코어를 동시에 사용할 수 있는 것은 1스레드다.

#### _DB 서버에서의 병렬화_

클라이언트 요청을 접수하는 서버 프로세스가 클라이언트 접속 수 만큼 생성된다.(오라클 DB)  
서버 프로세스에는 멀티 프로세스 모델 외에도 공유 서버형이라 불리는 하이브리드형이 있어서, 멀티 프로세스와 멀티 스레드를 모두 사용할 수 있는 것도 있다.  
데이터 파일 생성 시에 병목 현상이 발생하는 경우, 메모리에 캐시된 갱신 완료 데이터를 HDD에 기록하는 DBWR 프로세스 수를 늘려서 병렬화할 수도 있다.

> **병렬(Parallel)과 병행(Concurrent)**  
> 병렬은 동시에 복수의 처리를 실행하는 것이고 병행은 복수의 처리가 실행 상태에 있는 것이다.  
> 즉, 병행은 병렬을 내포하고 있는 개념이다.

### 동기/비동기

동기는 하나의 일이 끝날 때까지 아무것도 하지 않고 기다려야 하지만 그 일이 끝났는지 여부를 확실하게 확인할 수 있다.  
비동기는 병렬로 다른 일을 할 수 있지만 일이 끝났는지 여부를 확인하고 싶으면 별도의 방법을 이용해야 한다.  
모든 것을 동기로 처리하면 대기 시간이 너무 길어져서 현실적인 요건을 만족하지 못하는 경우도 있다.  
비동기 사용 시, 처리 결과를 확인하지 않을 경우 처리가 실패하더라도 이를 알지 못하고 후속 처리가 발생해서 위험이 가중될 수 있다.

#### _Ajax_

Ajax에서는 비동기 통신을 이용한 병렬 처리가 가능하다.  
Ajax를 사용한 웹 페이지에서는 비동기 통신이 가능해져서 화면을 보거나 입력하면서 필요한 부분만 갱신할 수 있다.

#### _DBMS에서 사용되는 비동기 I/O_

비동기 I/O란 DBMS가 HDD 등의 저장소에 비동기로 쓰기 처리할 수 있는 것을 말한다.  
비동기 I/O는 대량의 I/O를 효율적으로 처리해야 하는 DBMS에 적합하다고 할 수 있다.  
비동기 I/O로 I/O를 발행하더라도 저장소 성능 이상으로는 빨라지지 않는다.  
일반적으로 비동기 I/O는 OS의 라이브러리나 시스템 콜을 사용해서 구현되기 때문에 OS마다 방식이 다르다.

> **C10K**  
> C10K 문제란, 하드웨어 성능상에 문제가 없어도 클라이언트 수가 많아지면 서버가 고장 나는 문제다.  
> 해결하는 방법으로, 하나의 프로세스로 복수의 접속을 처리하는 것이다. 이런 기법을 논블로킹 I/O라고 한다.

### 큐

큐(Queue)는 대기 행렬이라 표현할 수 있다.  
하드웨어, OS, 데이터베이스, 애플리케이션 등 거의 모든 곳에서 이 구조가 사용되고 있다.  
큐의 동작 원리는 FIFO이다.  
성능 문제에서는 큐의 길이를 확인하는 것이 중요하다.

#### _CPU 처리_

런큐(Run-queue)는 CPU를 기다리고 있는 프로세스 행렬이다.  
'런큐에 쌓인 프로세스 수를 코어 수로 나누어서 1이라면 문제가 없다'라는 것이 일반적이다.  
CPU가 처리 중인 프로세스를 런큐로 인식할지는 OS 종류에 따라 달라진다.  
OS 커널에는 프로세스 스케줄러라는 기능이 있어서 런큐 등을 관리한다.

#### _데이터베이스의 디스크 I/O_

기본적인 개념은 CPU와 같으나 프로세스나 스레드가 사용하는 대상이 HDD인 점만 다르다.  
HDD는 데이터가 기록돼 있는 특정 위치에 액세스해야 하기 때문에 CPU처럼 비어 있다는 이유로 다른 것을 사용할 수 없다.

### 배타적 제어

배타적 제어는 특정 처리가 공유 자원을 이용하고 있는 동안 다른 처리가 그 자원을 이용할 수 없는 것을 말한다.  
복수의 처리가 공유 자원에 동시에 액세스하면 불일치가 발생할 수 있기 때문에 배타적 제어로 보호해 주어야 한다.
직렬 처리에서는 배타적 제어가 필요 없지만, 병렬 처리에서는 필요하다.  
배타적 제어를 하는 부분은 병목 현상이 발생하기 쉽다.  
OS나 DBMS뿐만 아니라 병렬 처리 관련 성능 튜닝이나 성능 문제 해결을 위해서는 배타적 제어를 잘 이해해 둘 필요가 있다.

#### _DBMS에 사용되는 배타적 제어_

DBMS의 배타적 제어에서는 매우 짧은 시간 동안만 락을 유지하는 래치(Latch)라는 것이 있어서 CPU에서 의미가 없는 처리를 하면서 대기하는 방식이 있다. 스핀락(Spin-lock)이라고도 불린다.  
비교적 장시간 락을 유지하도록 큐를 이용해서 관리하는 방식인 슬립락(Sleep-lock)이라는 것도 있다.

#### _OS 커널에 사용되는 배타적 제어_

리눅스 커널은 빅 커널락(Big Kernel Lock, BKL)이라 불리는, 하나의 스핀락으로 유지된다.  
커널의 BKL이 이용되는 부분에서는 처리가 직렬화돼서 동시에 하나의 CPU만 커널 코드를 실행할 수 있다. 따라서 이 부분이 병목 지점이 되기 쉽다.

> **멀티 프로세서 시스템에서는 배타적 제어가 어렵다.**  
> 여러 개의 CPU 코어를 탑재하고 있는 컴퓨터에서는 동시에 복수의 프로세스나 스레드를 실행할 수 있기 때문에 배타적 제어가 어려워진다.  
> 멀티 프로세서 시스템에서는 기본적으로 하드웨어를 이용해서 배타적 제어를 구현하고 있다.  
> CPU에 배타적 제어를 하기 위한 'test and set'이나 'Compare And Swap(CAS)'이라 불리는 기능이 있다.

### 상태 저장/상태 비저장

IT 시스템이나 컴퓨터에서 상태 저장(Stateful)/비저장(Stateless) 개념은 거의 모든 곳에 적용되는 기념이다.  
상태 저장은 상태를 고려하기 때문에 복잡한 처리가 가능하지만, 시스템 복잡성이 커진다.(프로세스 처리)  
상태 비저장은 상태를 고려하지 않기 때문에 간단하며, 성능이나 안정성 측면에서 우수하다.(HTTP)

### 가변 길이/고정 길이

컴퓨터에서 처리하는 데이터는 정해진 메모리 크기 안에 저장해야 한다. 저장할 때는 해당 데이터가 메모리 안에 들어갈지를 판단해야 하기 때문에 메모리 크기가 정해져 있는지 여부가 매우 중요하다.  
가변 길이는 공간을 유용하게 활용할 수 있지만 성능 면에서 불안정하고 재이용률이 떨어진다.(TCP/IP 패킷)  
고정 길이는 쓸데없는 공간이 생기지만 성능 면에서는 안정적이다.(파일 시스템)

### 배열과 연결 리스트

배열은 같은 크기의 데이터를 빈틈없이 순서대로 나열한 데이터 구조로 탐색이 빠르지만 데이터 추가 및 삭제가 느리다.  
연결 리스트는 배열처럼 빈틈없이 나열되어 있지 않고 다음 데이터 위치 정보를 가지고 있는 데이터 구조로 특정 데이터 위치를 찾으려면 끝에서부터 순서대로 확인해야 하므로 탐색이 느리지만 데이터 추가 및 삭제는 빠르다.  
해시 테이블 구현에 배열과 연결 리스트가 사용되고 있는데 배열이 차례나 색인 같은 형태로 나열돼 있으며, 거기에 연결 리스트가 매달려 있는 듯한 형태다.

### 해시/트리

해시나 트리는 효율적 탐색을 위해 사용되는 데이터 구조이다.  
필요할 때에 필요한 데이터를 빠르게 찾기 위해서 데이터를 정리해 둘 필요가 있다.  
데이터 정리 방법을 '데이터 구조', 처리 순서를 '알고리즘'이라고 한다.  
처리 순서에 맞추어 데이터 구조를 정리할 필요가 있기 때문에 '알고리즘과 데이터 구조'는 자주 함께 다루어진다.

#### _B 트리 인덱스_

인덱스가 없는 경우 테이블의 모든 블록을 처음부터 순서대로 읽어나가야 한다.(풀 스캔)  
인덱스가 있으면 최소한의 필요 블록만 읽으면 된다. 하지만 인덱스 데이터도 갱신해야 하기 때문에 불필요한 오버헤드가 발생할 수 있다.  
인덱스의 데이터 블록은 루트 블록, 브랜치 블록, 리프 블록으로 구성되어 있다.  
B 트리 인덱스가 DBMS에서 자주 사용되는 것은 트리 구조 계층이 깊어지지 않도록 디스크 I/O를 최소한으로 제어하기 때문이다.  
인메모리 DB에서는 디스크 I/O를 신경 쓸 필요가 없기 때문에 T 트리 인덱스를 사용한다.

#### _해시 테이블_

해시 테이블은 키(해시 값)와 값 조합으로 표를 구성한 데이터 구조이다. 해시 값은 고정 길이 데이터이기 때문에 조합 표의 데이터 구조가 간단해서 검색이 빠르다는 장점이 있다.  
해시 테이블에서는 아무리 데이터 양이 많아진다고 해도 기본적인 등호 검색의 속도는 변하지 않는다. 하지만 범위 검색이 약하다는 문제가 있다.

## 인프라를 지탱하는 응용 이론

### 캐시

캐시(cache)에는 '숨기는 장소'라는 뜻이 있으며 컴퓨터 세계에서 캐시는 사용 빈도가 높은 데이터를 고속으로 액세스할 수 있는 위치에 두는 것(임시 저장소)을 의미한다.  
캐시는 데이터 재사용을 전제로 일부 데이터를 출력 위치와 가까운 지점에 일시적으로 저장한다는 특징이 있다.  
캐시가 사용되는 곳은 브라우저 캐시, 캐시 서버, CDN, 등이 있다.  
캐시의 주요 장점은 데이터에 고속으로 액세스 가능한 점과 실제 데이터에 대한 액세스 부하를 줄일 수 있다는 점이 있다.  
캐시에 적합한 시스템은 참조 빈도가 높은 데이터와 캐시의 데이터가 손실돼도 문제가 없는 시스템(스트리밍)이다. 부적합한 시스템은 데이터 갱신 빈도가 높은 시스템과 대량의 데이터에 액세스하는 시스템이다.

주의할 점은 다음과 같다.

- 실제 데이터와 캐시라는 이중 구조로 저장되기 때문에 리소스 소비가 늘어난다.
- 시스템 가동 직후에는 캐시에 데이터가 없기 때문에 성능이 나오지 않을 수 있다.
- 캐시의 데이터가 손실되는 경우를 대비해서 복구 순서를 설계 시에 확립해야 한다.
- 갱신 데이터를 캐시할 때 캐시가 여러 개 있으면 갱신된 최신 데이터를 서로 뺏으려는 상태가 발생하지 않도록 주의해야 한다.

### 끼어들기

어떤 원인으로 인해 지금 하고 있는 일을 중단하고 급히 다른 일을 하는 것을 끼어들기(Interrupt)라고 한다.  
끼어들기는 어떤 일이 발생하면 연락하는 '이벤트 주도' 구조다.  
CPU에서 애플리케이션 프로세스나 스레드 처리를 하고 있더라도 키보드로 정보가 입력되면 끼어들기가 발생해서 CPU가 짧은 순간 다른 처리를 한 후 다시 원래 처리를 진행한다.  
네트워크 통신으로 데이터가 도착 시, '조각화(Segmentation) 위반'이라 불리는 예외가 발생 시, 등에서 끼어들기 처리를 한다.

### 폴링

폴링(Polling)은 정기적으로 질의하는 것을 가리킨다. 정기적으로 질의함으로써 상대가 어떤 상태인지, 어떤 요구를 가지고 있는지, 등을 알 수 있다.  
폴링의 특징은 질의 방향이 단방향이라는 것과 질의는 일정 간격을 따라 정기적으로 발생한다는 것이다.  
폴링의 주요 장점은 반복만 하면 되기에 프로그래밍이 쉽다는 점, 상대가 응답하는지 확인할 수 있다는 점, 모아서 일괄적으로 처리할 수 있다는 점이 있다.  
폴링은 일정 간격으로 처리를 실행하면 좋은 처리와 감시에 적합하고 상태가 아닌 입력 내용에 따라 실행 내용을 변경하는 처리와 처리 우선순위를 정해야 하는 처리에 부적합하다.  
주의 사항은 네트워크를 경유한 폴링일 때는 처리 지연 시간을 줄이기 위해 폴링 간격을 너무 짧게 잡으면 트래픽 양이 증가하고 서버의 리소스 소비도 늘어난다는 것이다.  
폴링은 웹로직 서버의 내부 감시 기능, NTP 처리, 등에서 사용된다.

### I/O 크기

I/O 크기란 1회의 I/O에 필요한 사이즈, 즉 데이터를 주고 받을 때 사용되는 I/O의 크기를 의미한다.  
I/O 크기는 인프라 설계나 성능 튜닝에 있어 중요한 개념이다.  
DB에서 I/O 크기가 작을 때는 블록 크기를 작게, I/O 크기가 크면 블록 크기를 크게 해야 I/O 효율이 좋아진다.  
I/O 크기가 크면 대량의 데이터를 빠르게 운반할 수 있으며, I/O 크기가 작으면 소량의 데이터를 빠르게 운반할 수 있다.

### 저널링

저널(Journal)은 트랜잭션이나 매일 갱신되는 데이터의 변경 이력을 가리킨다. 저널을 남겨 두는 것을 저널링(Journaling)이라고 한다.  
저널은 데이터 자체가 아닌 처리(트랜잭션) 내용을 기록하고 데이터 일관성이나 일치성이 확보되면 필요 없어진다.  
저널링은 데이터 안정성을 높이기 위한 목적으로 사용된다. 시스템 장애 시 복구가 빠르고 데이터 복제보다 적은 리소스를 소비해서 데이터를 보호할 수 있다.  
데이터 갱신이 발생하는 시스템에 적합하고 데이터 안정성보다 성능을 요구하는 시스템에 부적합하다.  
저널 데이터는 시스템 요건에 따라 버퍼의 디스크 기록 시점을 검토, 조정해야 한다.  
저널은 트랜잭션 단위로 일치성을 보증하기 때문에 트랜잭션 도중에 장애가 발생하면 종료되지 않은 트랜잭션은 파괴되기 때문에 트랜잭션이 길어지지 않도록 설계해야 한다.  
저널을 사용한 복구 방식에는 롤백, 롤포워드 방식이 있다.

- 롤백: 저널을 읽어서 실제 데이터 정보를 과거로 되돌리는 처리
- 롤포워드: 저널을 읽어서 실제 데이터 정보를 앞으로 진행시키는 처리

> **섀도우 페이징(Shadow Paging)**  
> 섀도우 페이징은 저널링처럼 변경 정보를 작성하지 않고 파일 갱신을 신규 영역에서 한다.  
> 갱신이 완료되면 이전 영역에서 신규 영역으로 순식간에 교체한다.(All or Nothing)  
> 이 방식의 장점은 데이터 변경 중에 장에가 발생해도 갱신이 진행됐다는 것을 다른 사람이 알 수 없다는 것이다.