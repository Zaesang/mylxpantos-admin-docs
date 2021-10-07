---
sidebar: auto
---

# Customer
고객용 화면입니다. 

## Create Account and Log in 
### Create Account and Log in 

<img :src="$withBase('/images/user/login.png')" alt="login">

* 경로: URL주소 (미정)
1. 로그인 화면
2. 계정 생성 클릭후 ID생성을 위한 정보 입력

### Manage Team Member

<img :src="$withBase('/images/user/teamMember.png')" alt="team">

* 경로: SETTINGS > Team Settings
1. 동일 회사내 팀 담당자 로그인 초대 메일 발송
2. 가입된 담당자의 권한 설정 Primary 클릭시 해당 담당자가 초대메일 발송 및 회사정보 수정이 가능함

## Quotation
### Request Quotes

<img :src="$withBase('/images/user/reqQuote.png')" alt="request Quotes">

* 경로: NEW BOOKING
1. FROM – TO: UN location code기준으로 5code또는 도시/항구 이름을 영문으로 기입하여 선택함
2. 희망 선적일 선택
3. 인코텀즈 선택
4. 컨테이너 개수 선택 (견적가 제공이 가능한 컨테이너 Type만 선택가능함)

### Confirm Quotes

<img :src="$withBase('/images/user/seeQuote.png')" alt="quotes">

* 경로: NEW BOOKING 클릭후 견적 요청 정보 이후 결과
1. Oder by: 가격, 운송기간, 출발예정일 기준으로 정렬 가능 
2. Bookmark: 견적 정보 요청조건을 북마크 하는 기능
3. 선사별로 스케쥴 정보 + 견적 정보(Selling Tariff기준) 조합으로 견적결과 조회됨
::: tip
i: 총 가격의 상세 운임코드 별로 가격조회 가능

ACCEPT: 원하는 견적 선택 후 부킹 진행* 현재 운송기간은 해상구간만 반영되고 내륙운송은 가격만 조회 가능함
:::

### Additional Services

<img :src="$withBase('/images/user/addService.png')" alt="additional services">

* 경로: NEW BOOKING 입력이후 견적 결과 ACCEPT버튼 클릭이후
1. 원하는 부가서비스를 선택후 Subscribe 버큰 클릭되면 견적에 추가 반영
2. 총 가격의 상세 운임코드 별로 가격조회 가능, ACCEPT: 원하는 견적 선택 후 부킹 진행

## Booking
### Request Booking Order

<img :src="$withBase('/images/user/booking1.png')" alt="booking 1">

* 경로: NEW BOOKING 입력이후 견적 결과 ACCEPT버튼 클릭이후 Reference정보 입력
1. Customer Reference: 고객사 고유 참조정보 입력
2. Add another reference: 참조 정보 추가 필요시 선택하여 입력 (e.g branch code, land id, etc)
3. Notes: 판토스 담당자에게 별도 전달 필요한 메시지 입력 (부킹 확정 이후에도 정보 추가가 가능하며, 주요 커뮤니케이션 수단으로 활용)
4. Customer Details: B/L에 기입이 필요한 주요 컨택포인트 입력, 한번 저장된 주소는 Contracts버튼을 클릭하여 재활용 가능

<img :src="$withBase('/images/user/booking2.png')" alt="booking 2">

* 경로: NEW BOOKING 입력이후 견적 결과 ACCEPT버튼 클릭이후 Cargo Details 정보 입력
4. Cargo: 화물 요약 정보
5. Weight: 화물 Gross Weight 정보 입력
6. Shipper Owned Container: 컨테이너 소유자 선택
7. Expected cargo ready: 예상 화물 준비일자/시간 선택
8. ADD Commodity: 상세 상품 목록 정보 추가
9. COPY DETAILS: 최초 입력된 화물정보 기준으로 COPY하여 나머지 화물정보 입력 가능
10. VIEW ORDER SUMMARY: 입력 완료 후 요약정보 보기

<img :src="$withBase('/images/user/booking3.png')" alt="booking 3">

* 경로: NEW BOOKING 입력이후 견적 결과 ACCEPT버튼 클릭이후 Commodity정보 입력
::: tip
 - Type of packaging: 패킹 Type정보 입력 (e.g Bix, Can, Pallet, etc..) 
 - Product Value: 상품 금액 입력
 - Commodity Code: 상품 종류 입력
 - How Many Packages: 패킹상품 수량 입력
 - Volume: 부필정보 입력
 - Weight 무게 정보 입력
:::

<img :src="$withBase('/images/user/booking4.png')" alt="booking 4">

* 경로: 견적 결과 ACCEPT후 BOOKING정보 입력완료후 VIEW ORDER SUMMAY버튼 클릭
11. 견적가 및 부킹에 필요한 입력정보 요약 확인후 CONFIRM
::: tip
CONFIRM이후 부킹정보가 판토스 시스템에 자동 전송이 되며, 이후 판토스에서 선사부킹 진행시작
:::

### Copy Booking Information

<img :src="$withBase('/images/user/bookingCopy1.png')" alt="booking copy 1">

* 경로: DASHBOARD의 원하는 오더에서 COPY BOOKING클릭
1. 원하는 COPY항목 선택후 CREATE BOOKING 선택
::: tip
* 단, 견적가격에 영향을 끼치는 FROM/TO 변경 시 컨테이너수량 및 화물정보는 재입력해야함 
:::

## Dashboard
### Booking Confirmation Information

<img :src="$withBase('/images/user/bookingConfirm1.png')" alt="booking confirmation status 1">

* 경로: DASHBOARD클릭후 마일스톤 확인
1. 판토스에서 BOOKING CONFIRM정보 전송시 마일스톤 Status가 Confirmed로 변경되면서 전송일자 반영
2. 부킹 과정에서 선사 및 선명 변경시 변경정보가 Order Summary에 반영
3. Edit SI클릭후 오른편상단의 Notes클릭시 추가 확정정보 확인 가능

<img :src="$withBase('/images/user/bookingConfirm2.png')" alt="booking confirmation status 2">

* 경로: DASHBOARD클릭 후 EDIT BOOKING 또는 EDIT SI 버튼 클릭
1. NOTES정보를 클릭하면 업무진행시 주요 요청/응답을 기록하며 커뮤니케이션이 가능함

### Share Files

<img :src="$withBase('/images/user/files.png')" alt="file sharing">

* 경로: DASHBOARD
1. Files & Docs 버튼을 클릭
2. 공유할 파일을 드래그앤 드랍
3. File Description을 선택후 Save버튼 이후 Done → 고객사/판토스 담당자 모두 파일 업로드/다운로드 다능

### Share Messages by Notes

<img :src="$withBase('/images/user/notes.png')" alt="message sharing">

* 경로: DASHBOARD클릭 후 EDIT BOOKING 또는 EDIT SI 버튼 클릭
1. NOTES버튼을 클릭하면 업무진행시 주요 고객사 요청/ 판토스 응답등을 기록하며 커뮤니케이션이 가능함


### Visibility Update

<img :src="$withBase('/images/user/visibility.png')" alt="visibility">

* 경로: DASHBOARD
1. BOOKING CONFIRM이후 선적 진행상황에 따른 Visibility정보 자동 업데이트 진행
::: warning
* Shipped On Board, Arrived Port, Arrived 정보만 날짜가 반영될 예정이며, 향후 Visibility서비스 고도화에 따라 보다 많은 마일스톤 단계에 일자가 적시에 반영예정
:::
