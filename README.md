# study-react-native

# 스마트폰 앱 종류

1. 네이티브 앱 (Swift / Kotlin)

- OS에 특화된 개발
- 장점: 가장 뛰어난 성능, 많은 기능 사용 가능
- 단점: 필요한 지식이 많아 개발 속도 느림

2. 크로스 플랫폼

- 하나의 언어로 여러 플랫폼 개발 (RN, Flutter, Dart, JS)
- 장점: 빠른 개발 가능
- 단점: 네이티브 대비 낮은 성능 및 기능 제한

3. 하이브리드 앱

- 하나의 언러오 여러 플랫폼 개발
- 장점: 빠른 개발 가능
- 단점: 네이티브 대비 낮은 성능 및 기능 제한

# 리액트 네이티브

- Android, iOS 크로스 플랫폼 프레임워크
- Expo: 리액트 네이티브 크로스 플랫폼으로 개발하기 위한 빌드도구

**_최근 EAS 방식으로 전환_**
**_expo react navive build_**
**_expo WebView_**

# 리액트 네이티브 특징

- 모바일 디바이스 크로스플랫폼 개발
- React를 써서, 안드로이드와 iOS 네이티브 앱을 만든다.
- 자바스크립트로 작성한 걸, 네이티브 코드로 그린다. (목표 플랫폼의 네이티브 UI 구성 요소를 활용)
- 빠른 갱신, 소스코드 저장하면 곧바로 결과 확인
- 페이스북 지원, 커뮤니티 주도

# WebView?

- 겉은 App이지만 속은 Web (HTML / CSS / JS)

# 개발 환경 준비

```
npx create-expo-app AwesomeProject
cd AwesomeProject
npm install expo

npx expo start

혹은

npm install -global expo-cli
mkdir 폴더
cd 폴더
expo init 프로젝트명
cd 프로젝트
npm start
```

# 개발 환경 설정

- Expo CLI로 시작
- Node.js 최신버전 필요
- 스마트폰 시뮬레이터 필요 (Xcode)
- 아무것도 설치하지 않고 실험해보려면 Snack이란 툴 써서 웹에서 확인가능
- expo init AwesomeProject
- 언젠가 네이티브 빌드 환경으로 완전히 넘어가려면 eject 처리

# 리액트 컴포넌트

- 리액트 네이티브는, 리액트와 각 플랫폼의 네이티브 기능들을 활용해 안드로이드와 iOS 앱을 만드는 오픈소스 프레임워크이다.
- 리액트 네이티브로, 자바스크립트를 써서 플랫폼 API에 접근할 수 있고, UI는 리액트 컴포넌트를 써서 화면 구성요소와 모양새를 꾸밀 수 있다.
- 리액트 컴포넌트라 함은, 재사용이 쉽고, 여러 겹 쌓아서 쓰는 묶음을 말한다.
- Native Components and Core Components
- 외부 커뮤니티의 컴포넌트 활용 가능

# 스크롤 뷰

- scrollView - 다른 컴포넌트나 뷰를 여러개 담는 공간
- 각각의 요소들은 다른 형태라도 된다
- 가로 스크롤, 세로 스크롤, 둘 다도 가능.
- iOS에서는 한 요소만 담아두고 내용을 확대해서 보는데도 활용가능.
- 주의. 당장 화면에 보이지 않는 요소들도 렌더링 됨

# 리스트 뷰

```js
<FlatList />
    data
    renderItem

<SectionList />
    sections
    renderItem
    renderSectionHeader
    keyExtractor
```

# 네트워킹 Fetch

- Fetch를 통해 원격 URL에 접근, REST API 호출이나 정적 자료 가져오기 등 가능.
- await / async 문법 활용
- WebSocket도 이용 가능 | send, onopen, onmessage, onerror, onclose

# React Navigation

```
npm install @react-navigation/native
```

```
npm install @react-navigation/native-stack
```
