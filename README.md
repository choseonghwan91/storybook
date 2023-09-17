# Storybook

<br/><br/>

# 👟 실행 방법

```bash
yarn install
yarn storybook
```

<br/><br/>

# 👷 기능 구현사항

## 공통 Button 컴포넌트

- <a href="https://www.figma.com/community/file/1016311435136115866" target="_blank">피그마 디자인 시스템 예제</a>를 참고해서 storybook 경험

## 공통 Input 컴포넌트

- <a href="https://www.figma.com/community/file/1016311435136115866" target="_blank">피그마 디자인 시스템 예제</a>를 참고해서 storybook 경험

## storybook with tailwindCSS

<a href="https://storybook.js.org/recipes/tailwindcss" target="_blank">공식문서</a>

1. `yarn add -D @storybook/addon-styling`
2. `yarn addon-styling-setup`
3. `root/.storybook/preview.ts`에 tailwind.css import (preview.ts 파일 참조)

## storybook 에서 경로 커스텀 설정

`root/.storybook/main.ts`

```ts
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        "@/components": path.resolve(__dirname, "../", "src/components"),
        "@/assets": path.resolve(__dirname, "../", "src/assets"),
      },
    },
  }),
```

<br/><br/>
