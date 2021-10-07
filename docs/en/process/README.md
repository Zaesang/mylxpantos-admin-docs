---
sidebar: auto
---

# Main process and functionality
<img :src="$withBase('/images/process.png')" alt="Process">

## [Customer](/en/user/)
* Customer use own email address when log on our site, possible to invite team member after being active user.
* 계약 Tariff가 없는 상태에서도 일반고객을 위한 FAK Tariff를 이용하여 견적 조회가 가능합니다. 
* 원하는 구간의 견적을 실시간으로 확인 가능하며 Booking 요청을 생성할 수 있습니다. 
* Booking 요청 이후 진행상황을 화면상에서 확인 할 수 있습니다. 

## [Admin](/en/admin/)
* 신규 고객 ID의 가입을 승인/거절 할 수 있습니다. 신규 고객인 경우 GSI의 CUSTOMER CODE는 자동으로 연계되지 않으므로 직접 수정해 주셔야 합니다.
* 기존 고객의 추가 팀원은 CUSTOMER CODE가 자동으로 설정 됩니다.
* GSI에서 입력한 SELLING TARIFF가 플랫폼으로 자동 연계됩니다. 
* 고객의 BOOKING 요청을 GSI에서 확인하고 Confirm 할 수 있습니다. 
* 고객이 제공해야 할 서류를 플랫폼에서 확인 할 수 있습니다. (EDMS 자동 연계)

## GSI
* 고객 MDM 코드는 자동 연계되지 않습니다. 
* SELLING TARIFF 는 승인 완료시 플랫폼으로 전송됩니다. 
* BOOKING CONFIRM시 CONFIRM정보가 플랫폼으로 전송됩니다. 
* Service Order의 진행 상태는 플랫폼에 자동 연계됩니다.
