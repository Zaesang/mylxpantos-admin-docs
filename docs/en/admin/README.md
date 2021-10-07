---
sidebar: auto
---

# Admin

관리자용 화면입니다.

# Platform

## Create Account and Log in

### Manage User Auth

<img :src="$withBase('/images/admin/manageCustomer.png')" alt="customer management">

* 경로: 신규 ID 승인/거절 > DASHBOARD, 기존 ID 거절 > CUSTOMERS

1. 신규 고객이 ID생성 요청을 하였으면 Pending Customers에서 요청목록이 뜨며, 고객정보 확인후 승인 또는 거절 처리함
2. 기존 고객 ID 권한/정보 관리는 CUSTOMERS항목에서 각 고객 ID별로 클릭하여 처리함

### Manage Team Member

<img :src="$withBase('/images/admin/manageTeam.png')" alt="team management">

* 경로: SETTINGS > My team

1. 판토스에서 관련된 신규 영업/운영 담당자를 이메일로 초대 가능
2. 판토스 운영인원에 관련한 권한 셋팅

::: tip
- System admin: 시스템 전반에 관련한 셋팅 권한 부여
- BI : Booking관련된 정보를 확인하고 수정 가능한 담당자
- SI : Booking Confirm이후 Shipping instructio에 관련된 정보를 확인하고 수정 가능한 담당자
:::

## Quotation

### Selling Tariff 

<img :src="$withBase('/images/admin/seeTariff.png')" alt="tariff management">

* 경로: TRIPS

1. FROM/TO는 필수로 입력하여 조회 해야함
2. 구간에 대한 견적 정보 및 스케쥴 정보 조회 가능

::: tip
- Tariff: FAK 가격 (Sea selling tariff와 연동)
- Schedule without Tariff: 선사 스케쥴 정보 조회 (플랫폼에서 서비스하는 기능으로 linescape업체의 스케쥴 데이터를 3일마다 Refresh하여 제공)
- Contract tariffs: 고객별 Contract 가격 (Sea selling tariff와 연동)
:::

## Booking

### Booking Information

<img :src="$withBase('/images/admin/seeBooking.png')" alt="booking management">

* 경로: BOOKINGS > View > Tasks > Information

1. BOOKINGS에서 고객이 요청한 오더 검색 후 View버튼 클릭
2. 오른편 Information을 선택하면 고객이 입력한 부킹상세 정보 확인이 가능함

::: tip
- Summary: 부킹 입력 요약정보 보기
- Progress: 진행 마일스톤 Manual 업데이트 처리
- Payment: 견적가격 정보 확인
- Instructions: Booking 확정이후 Container No, Seal No 정보들을 확인/업데이트 할 수 있는 화면
:::

### Reject Booking Request

<img :src="$withBase('/images/admin/cancelBooking.png')" alt="booking cacelation">

* 경로: BOOKINGS> More > Cancel booking
1. 취소 원하는 오더 확인후 More버튼 클릭 후 Cancel Booking 처리함
::: tip
- 현재는 오직 판토스 관리자만 Cancel처리 할 수 있음. (고객이 취소를 원하면 별도 연락 받고 플랫폼에서 캔슬처리 필요함)
:::

## Dashboard

### Share Files

<img :src="$withBase('/images/admin/shareFiles.png')" alt="file sharing">

* 경로: BOOKINGS > VIEW > Files
1. View클릭
2. Files메뉴 선택하여 드래그앤 드랍 방식으로 파일 공유 가능함

### Share Messge with customer

<img :src="$withBase('/images/admin/shareNotes.png')" alt="message sharing">

* 경로: BOOKINGS > VIEW > Notes
1. View클릭
2. Notes메뉴에서 주요 고객사 요청/ 판토스 응답등을 기록하며 커뮤니케이션이 가능함
::: tip
- 특정 메시지는 판토스 담당자들 끼리만 공유 가능하도록 설정 가능함
:::

### Visibility Updates

<img :src="$withBase('/images/admin/visibility.png')" alt="visibility">

* 경로: BOOKINGS > View > Tasks > Progress
1. BOOKINGS에서 고객이 요청한 오더 검색 후 View버튼 클릭
2. 오른편 Progress를 선택하면 각 마일스톤별 완료처리를 할 수 있음

::: tip
- 순차적으로 밖에 처리가 안되며, 한번 처리되면 수정 불가능
- GSI의 Visibility정보와 연동 예정이므로 별도 수작업 업데이트 할필요 없음
:::

# GSI

## Sea Selling Tariff

### FAK Tairff
GSI의 Selling Tariff와는 다른 개념으로 특정 고객을 대상으로 하지 않고, 
계약 운임이 없을때 보여주기위한 용도로 사용함. 

### Sea Selling Tariff
<img :src="$withBase('/images/gsi/seaSellingTariff.png')" alt="Sea selling tariff">

* 경로: Tariff > Selling Tariff > Sea Selling Tariff (SO00000028)

1. FAK/Contract 구분
- FAK가격: FAK 체크박스 클릭 후 입력/승인
- Contract가격: 기존과 동일하게 고객 Code선택 후 입력/승인

2. From/To 입력
- 5code기준의 정확한 Location code입력 필요
- "*" 는 서비스하지 않는 구간으로 인지
::: tip 
아래 예시와 같은 경우 1,2구간이 서비스 구간 임
:::

<img :src="$withBase('/images/gsi/seaSellingTariff2.png')" alt="Sea selling tariff 2">


3. Carrier 입력
- Carrier는 * > 해당고객의 Buying Tariff에 입력 선사 자동 반영
- Carrier 지정 입력 > Buying Tariff를 참조하지 않고 선사 별 입력한 가격기준으로 반영


4. 운임 코드, 가격 입력
- Pre-carriage 비용: TKC로 입력
- On-Carriage 비용: TRC로 구분하여 입력 (Only Door to Door)
- Main-Carriage 비용: 기존과 동일
- Additional Service 비용: INC, CLC, ISF운임 코드 입력
- Default Surcharge: FAK로 입력된 5가지 surcharge가 기본반영

::: tip
Contract Price에 입력한 Surcharge는 기본보다 우선 반영

(기본 Surcharge: WFG, DMF, THC, CSC, AMS)
:::

## Booking

### Booking Review

<img :src="$withBase('/images/gsi/bookingMgt.png')" alt="Booking Monitoring">

* 경로: FWD > Booking > Sea > GC Platform booking MGT(FW00000384)
- 플랫폼에서 고객이 부킹 확정한 정보를 모니터링 하고 선사 부킹(E-booking) 또는 부킹 확정(S-booking)으로 전달하는 화면

1. Upload Y/N: 최초 전송시 N으로 반영 되었다가 E-booking 또는 S-booking으로 전송시 N  Y로 자동 변경
2. Customer Reference: 플랫폼에서 고객주문 단위로 자동생성 되는 Key값- 플랫폼의 Order와 Matching되는 값
3. Exception: Booking Exception버튼을 클릭하면 N  Y로 자동변경 되어 별도 예외로 구분 관리

### Send Booking info to Carrier

<img :src="$withBase('/images/gsi/eBooking.png')" alt="e-Booking">

* 경로: FWD > Booking > Sea > e-Booking(FW00000022)
- 선사로 EDI를 통한 부킹요청 정보 전송 및 결과 조회를 위한 화면

1. EDI Request: 선사로 부킹요청을 위한 부가정보(S/C No등) 입력후 요청
::: warning
고객이 플랫폼에서 지정한 선사이외 다른 선사로 요청 시 반드시 GC Platform Booking에서 전송된 원본 데이터로 Copy해서 진행해야함
:::
2. S-booking: 선사로부터 부킹확정 정보 응답후 고객에게 부킹정보 전송을 위한 s-booking메뉴로 정보 전달

### Send Booking confirmation to Platform

<img :src="$withBase('/images/gsi/sBooking.png')" alt="s-Booking">

* 경로: FWD > Booking > Sea > s-Booking(FW00000137)
- 플랫폼으로 부킹 확정정보를 전송하기 위한 기능

1. Platform 조회조건: Use Y/N은 플랫폼 운영 고객만 별도 구분, Send Y/N은 플랫폼으로 부킹 확정정보 전송이 된 대상을 구분
2. Status: 최초 N으로 구분되어 있으나, 일부 정보 수정 후 플랫폼 전송을 위해서는 F로 변경후 Save해야함
3. Platform Send: 플랫폼으로 전소할 대상을 선택 후 전송함 (일괄전송시 Ctrl 누른 후 복수의 라인 선택)
