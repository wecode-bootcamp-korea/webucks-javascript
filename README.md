# beerbucks-javascript

# Mission 진행 상황 

- [x] #1 완료 : November 23, 2021
- [x] #2 완료 : November 23, 2021
- [x] #3 완료 : November 24, 2021
- [x] #4 완료 : November 25, 2021
- [x] #5 완료 : November 25, 2021
- [ ] #6 완료 

<br>

# Self-Refactoring 체크리스트


> ### 1차 Refactoring 체크리스트 --> November 24, 2021
> Mission 3까지 완료한 후 리팩토링을 진행하시고 아래 체크리스트를 작성해주세요.
- [x] [Basic] console.log 삭제
- [x] [Basic] id ・ class명, 변수명, 함수명
- [x] [Basic] 들여 쓰기
- [x] [HTML] Semantic Tag의 사용
- [x] [HTML] img tag alt 속성
- [x] [HTML] Self Closing Tag
- [x] [CSS] CSS 속성 순서
- [x] [CSS] 다른 CSS 선택자들 사이 한 줄 띄우기
- [x] [CSS] 불필요한 style 속성 작성 지양
- [x] [CSS] 레이아웃은 bottom-up 방식으로 구성

> ### 2차 Refactoring 체크리스트 --> November 25, 2021
> Mission 5까지 완료한 후 리팩토링을 진행하시고 아래 체크리스트를 작성해주세요.
- [x] [Basic] console.log 삭제
- [x] [Basic] id ・ class명, 변수명, 함수명
- [x] [Basic] 들여 쓰기
- [x] [HTML] Semantic Tag의 사용
- [x] [HTML] img tag alt 속성
- [x] [HTML] Self Closing Tag
- [x] [CSS] CSS 속성 순서
- [x] [CSS] 다른 CSS 선택자들 사이 한 줄 띄우기
- [x] [CSS] 불필요한 style 속성 작성 지양
- [x] [CSS] 레이아웃은 bottom-up 방식으로 구성

> ### 3차 Refactoring 체크리스트
> Mission 6까지 완료한 후 리팩토링을 진행하시고 아래 체크리스트를 작성해주세요.
- [ ] [Basic] console.log 삭제
- [ ] [Basic] id ・ class명, 변수명, 함수명
- [ ] [Basic] 들여 쓰기
- [ ] [HTML] Semantic Tag의 사용
- [ ] [HTML] img tag alt 속성
- [ ] [HTML] Self Closing Tag
- [ ] [CSS] CSS 속성 순서
- [ ] [CSS] 다른 CSS 선택자들 사이 한 줄 띄우기
- [ ] [CSS] 불필요한 style 속성 작성 지양
- [ ] [CSS] 레이아웃은 bottom-up 방식으로 구성

<br>

# Mission Instructions

## Mission 1 : 로그인 페이지 레이아웃 구현

- [ ] 1. 로고는 아래 둘 중 하나의 조건을 만족시켜주세요.
    - `img` 태그를 사용하여 로고를 이미지 파일로 제작
    - [이 폰트](https://fonts.google.com/specimen/Dancing+Script)를 사용하여 로고를 만들어야 합니다(기본 폰트가 아니라 구글 폰트에 있는 원하시는 다른 폰트를 사용해도 무관합니다).
- [ ] 2. 다음 요구사항에 맞게 HTML을 작성해주세요.
    - HTML을 작성할때는, 항상 디자인된 화면을 보면서 해야합니다.
    - 아래 이미지를 보고 레이아웃을 완성해주세요.
    - 로그인 박스 전체를 감싸고 있는 div 혹은 section 태그가 필요합니다.
    - form 태그를 활용해주세요.
    - `input` 태그를 사용하여 아이디, 비밀번호를 입력하는 창을 구현해주세요.
        - `input`의 타입은 각각 `text` 혹은 `password`입니다.
        - `input`의 속성으로 `placeholder`가 있습니다. 해당 속성을 사용하여  "전화번호, 사용자 이름 또는 이메일" 등의 값을 넣어주시면 됩니다.
    - 로그인 버튼은 `button` 태그를 사용해주세요.
<p align="center">
<img src="https://user-images.githubusercontent.com/66706492/128456426-799d5ede-1b54-45fd-a3c3-ab71228d336c.png" width="600"/>
</p>

## Mission 2 : 로그인 페이지 기능 구현

- [ ]  id에 @가 포함되고, password가 8자 이상이 되면 버튼이 활성화 되도록 해주세요.
    - 원래 연한 파란색이었다가 → 활성화 되면 밝고 진한 파란색으로
<img src="https://user-images.githubusercontent.com/66706492/128457108-9e15b14f-e899-49cb-a8ee-ff2e46e674ba.png" width="300" /> <img src="https://user-images.githubusercontent.com/66706492/128457127-070888f5-1ea0-4c4d-a3d3-b7efadcf7435.png" width="300" />

- id, password가 조건에 맞을 때 로그인 버튼을 누르면 list 페이지로 이동해야 합니다.

## Mission 3 : 커피 리스트 페이지 레이아웃 구현

- [ ] 1. HTML, CSS로만 아래 스타벅스 리스트 페이지를 구현해 주세요.
- [ ] 2. 실제 페이지가 아니라 아래 이미지에 있는 부분만 구현해주세요. 
- [ ] 3. 콜드 브루 커피, 브루드 커피 두 종류에 대해서 만들어주세요.
    - 커피 사진과 이름은 모두 다르게 해주세요.
    - 반응형을 고려하지 않으셔도 괜찮습니다.
    - 반응형을 고려하신다면 커피 리스트는 flex-wrap 혹은 grid를 활용해주세요.
- [ ] 4. 커피 이미지에 마우스를 호버했을 때 이미지를 확대해주세요.
    - 이 효과는 [실제 스타벅스 페이지](https://www.starbucks.co.kr/menu/drink_list.do)를 참고해주세요!
- [ ] 5. 모두 완료하였다면 1차 리팩토링을 진행해주세요.
<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/66706492/128458604-47285d3a-2efc-4a97-b174-3723e1adb6ae.png" width="600"/>
</p>

## Mission 4 : 커피 상세 페이지 레이아웃 구현

- [ ] 1. HTML, CSS로 스타벅스 상세 페이지를 구현해 주세요.
- [ ] 2. 실제 페이지가 아니라 아래 이미지에 있는 부분만 구현해주세요. 
- [ ] 3. 원하시는 커피 하나를 골라 구현해주세요. 단, 알러지 정보 박스는 있어야 합니다. 알러지 정보가 없다면 알러지 정보가 없다라는 문구를 넣어주세요.

<p align="center">
<img src="https://user-images.githubusercontent.com/66706492/128459721-498a8dc5-105c-44ae-a0b4-93334c5b7a11.png" width="600"/>
</p>

## Mission 5 : 커피 상세 페이지 레이아웃 구현

- [ ] 1. 커피에 좋아요 버튼을 누르는 기능을 구현해주세요
    - 하트 버튼을 눌렀을 때 하트의 색이 붉은색으로 변하게 구현하면 됩니다.
- [ ] 2. 리뷰로 댓글을 추가하는 기능을 구현해주세요.
    - input창에 리뷰를 작성하고 엔터를 누르면 댓글이 추가되도록 구현해주세요.
- [ ] 3. 모두 완료하였다면 2차 리팩토링을 진행해주세요.

<p align="center">
<img src="https://user-images.githubusercontent.com/66706492/128459721-498a8dc5-105c-44ae-a0b4-93334c5b7a11.png" width="600"/>
</p>

## Mission 6 : 도전 과제

> **Mission 1부터 5까지 모두 완료하고, self-refactoring까지 마친 분만 Mission 6를 진행해주세요.**
> 도전과제는 원하는 순서대로 진행하셔도 됩니다.
> 도전과제는 피드백이 제공되지 않습니다.

### 로그인 페이지
- [x] id가 이메일 형식에 맞으면 이메일 `input`의 `border`가 초록색으로 바뀌게 구현해주세요.
- [ ] password는 영어 소문자, 영어 대문자, 특수문자, 숫자를 포함한 8자 이상입니다. 이 조건을 만족하면 패스워드 `input`의 `border`가 초록색으로 바뀌게 구현해주세요.
- [ ] 로그인 버튼 활성화 조건도 위에서 언급한 id, password 조건으로 맞추어 주세요.
- [ ] 비밀번호 `input` 내부 오른쪽에 show, hide 버튼을 만들어. show 일 때는 비밀번호가 보이게, hide일 때는 type="password"가 되도록 해주세요.

### 리스트 페이지
- [ ] 커피 이름 옆 좋아요 버튼(하트)를 눌렀을 때 붉은색 하트로 변하게 구현해주세요.
- [ ] 리스트 페이지를 반응형으로 구현해주세요.

### 상세 페이지
- [ ] 리뷰 댓글을 삭제하는 기능을 구현해주세요.
- [ ] 리뷰별로 좋아요 버튼을 누르는 기능을 구현해주세요.

- [ ] 모두 완료하였다면 3차 리팩토링을 진행해주세요.

<br>

# 초기 세팅 및 진행 방법

### 초기 세팅

1. `Desktop/wecode`로 이동하여 `webucks-javascript` repository를 clone받아주세요.
    - **이 때 사용해야 하는 적절한 git 명령어를 입력해주세요.**
2. VSCode에서 클론받은 폴더를 열고 VSCode에서 터미널을 열어주세요(`cmd+j` / `ctrl+j`)
3. main 브랜치에서 `feature/기수/본인이름` 브랜치를 만들어주세요. (ex. `feature/2/kimcoding`)
    - **이 때 사용해야 하는 적절한 git 명령어를 입력해주세요.**
5. 생성한 브랜치로 이동후 본인기수 폴더 내부에 본인 이름의 폴더를 만들어주세요.
    - 예시로 janghyeonlee, soheonlee 두 개의 이름 폴더를 넣어두었습니다. 
    - 폴더를 열어 어떤 구조로 만들었는지 파악하여 같은 구조로 만들어주세요.
    <p align="center">
    <img src="https://user-images.githubusercontent.com/66706492/128461451-e76399dc-09ff-4e48-becb-94e3e51d3fa3.png" width="300"/>
    </p>
5. 본인 이름의 폴더 안에 기존에 작업했던 코드들을 들고 와주세요.
6. 커밋을 남기고 push를 한 후 PR을 작성해주세요.
    - **커밋 전에 사용해야 하는 git 명령어를 입력해주세요.**
    - **커밋을 남기기 위해 사용해야 하는 git 명령어를 입력해주세요.**
    - **GitHub에 코드를 올리기 위해 사용해야 하는 git 명령어를 입력해주세요.**
7. GitHub에 들어와서 PR을 작성해 주시면 PR 올리기 성공입니다!
8. 이렇게 폴더 및 파일 구조 세팅이 완료되면 Missions을 계속 진행하면 됩니다.

### 진행 방법

1. 작업 중간 중간 commit을 남기고, 완료 시 본인의 브랜치를 push 후 PR까지 작성해주세요.
   - [Commit Message Guidelines](https://www.notion.so/Commit-Message-Guidelines-225f28bec2ba4e9384fbae5bb87f4003)
2. PR template 양식에 맞게 잘 작성해주세요.
3. PR label에 적절하게 라벨을 부착해주세요. 내 PR 진행 상황에 대한 소통은 라벨로 이루어집니다.
4. 기본에 작업하던 branch에서 코드 수정을 다시 하게 된다면 add, commit, push로 PR을 업데이트 하시면 됩니다.
5. Mission 3까지 완료하였다면 반드시 1차 Refactoring을 진행해주세요.
