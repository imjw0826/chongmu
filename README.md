# chongmu (여행 정산 · Trip Splitter)

## 1. 프로젝트 소개

여행이나 모임에서 쓴 돈을 정산해 주는 웹앱입니다. 누가 얼마를 냈고 누가 참여했는지 입력하면 각자 주고받을 금액을 계산합니다. 총무가 손으로 하던 계산을 대신하는 것이 목적입니다.

## 2. 기술 스택

- **웹사이트:** HTML, CSS, JavaScript (빌드 과정 없는 정적 앱)
- **로그인·데이터 동기화:** Firebase Authentication, Cloud Firestore
- **글꼴·아이콘:** Pretendard, Lucide
- **배포:** GitHub Pages

## 3. 이용 방법

**웹사이트:** https://imjw0826.github.io/chongmu/

- 참가자 이름을 추가합니다.
- 지출마다 항목명, 금액, 결제자, 참여자를 입력합니다. 균등 분배와 개별 금액 입력 중에서 고를 수 있습니다.
- 원화 외에 달러·엔·유로·위안·파운드로 입력하고 환율을 지정할 수 있습니다.
- 지출 목록과 참가자별 정산 결과를 확인합니다.
- 이메일로 로그인한 뒤 같은 세션 코드로 참가하면 여러 사람이 같은 정산 내역을 함께 볼 수 있습니다.

로컬에서 보려면 저장소를 받아 `index.html`을 브라우저로 열거나 정적 서버로 실행합니다.

```sh
git clone https://github.com/imjw0826/chongmu.git
cd chongmu
python3 -m http.server 8000
```

## 4. 최근 업데이트

2026-10-31
