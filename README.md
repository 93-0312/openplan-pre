# 📦 openplan 사전과제

이 프로젝트는 Next.js 기반의 모노레포로, TurboRepo를 사용하여 관리됩니다.

## 📂 패키지 구조

- openplan

```
┣ 📂 apps/
┃ ┣ 📂 web (Next.js 앱)
┃ ┣ 📂 storybook (UI 컴포넌트 문서)
┣ 📂 packages/
┃ ┣ 📂 ui (공통 UI 컴포넌트)
┃ ┣ 📂 eslint-config (ESLint, Tailwind 설정)
┃ ┣ 📂 typescript-config (ESLint, Tailwind 설정)
┣ 📜 turbo.json (TurboRepo 설정)
┗ 📜 package.json (루트 패키지 설정)
```

- 주요 기술 스택

```
Next.js (15.x)
React (19.x)
TurboRepo (빌드 최적화)
Zustand (전역 상태 관리)
TanStack Query (데이터 상태 관리)
Tailwind CSS (스타일링)
```

- 패키지 설치

```sh
pnpm install
```

- Lint 확인

```sh
pnpm lint
```
