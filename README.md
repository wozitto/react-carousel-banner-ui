# react-carousel-banner-ui

## 制作期間
2/15 ~ 2/21

## Technology
- React
- Typescript
- styled-components

## UI設計について
### 前提
  カルーセルバナーのみのページではなく、ページの中の１つのUIとして機能するカルーセルバナーを想定しています。

- mobile
  - mobileユーザーはカルーセル移動はスワイプとの共通意識があるので、カルーセル移動はスワイプのみに
<img src="https://user-images.githubusercontent.com/74745265/154842071-71e1049b-ebf1-4ee5-a3f1-7c461a42cb6f.png" width="40%"/>

- tablet
  - tabletの場合指での操作が多いためバナーを下に移動
  - スワイプの共通意識もあるためprev-btn, next-btn非表示
<img src="https://user-images.githubusercontent.com/74745265/154842075-d9f53e43-4199-4006-98c4-0b6b2a837c1a.png" width="60%"/>

- desktop
<img src="https://user-images.githubusercontent.com/74745265/154841688-7c8207e7-4d07-4c5b-bdf3-3390efc4e1cb.png" width="65%"/>

## 工夫したポイント
- マネーフォワードのreactプロジェクト参考に。
  - [React Componentの実装ルールを決めてみた](https://moneyforward.com/engineers_blog/2020/02/18/react-component-rules/)
    - スタイルの管理としてstyled-components
    - Functional Componentで実装する
    - export defaultを使用しない
  - https://github.com/moneyforward/cloud-react-ui
    - commitlint + husky
    - eslint(eslint-config-moneyforward) + prettier
    - fontawsome
- UXを意識
  - 指を乗せる or MouseDown時にカルーセルを一旦止める、また離す時にカルーセルを必ず戻るか進めるかにするとただ止めて見たかった場合も意図しない方向に行ってしまう可能性があるので、指の動きが画面幅の10分の1未満だった場合は現在のカルーセルから変わらないようにしています。
  - 無限カルーセルを綺麗に見せるための工夫
   [無限カルーセルの実装](https://qiita.com/wintyo/items/a37a197f69aa205297a5#%E7%84%A1%E9%99%90%E3%82%AB%E3%83%AB%E3%83%BC%E3%82%BB%E3%83%AB%E3%81%AE%E5%AE%9F%E8%A3%85)
- imgはdummyImgをurlでとってくる形だと実際の実装と異なるのでpublicの中のimgを使用
