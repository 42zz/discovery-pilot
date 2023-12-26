## DiscoveryPilot
DiscoveryPilot は、ユーザーに対して一連の質問を提示し、その回答に基づいて製品や情報へ誘導するシンプルなウェブベースのインターフェースです。

## 機能
質問項目を表示し、ユーザーが選択できるようにします。
各質問はリンクまたは追加の質問に導くことができます。
ユーザーは「戻る」ボタンを使用して前の質問に戻ることができます。
## セットアップ
このプロジェクトをローカルで実行するための手順は以下の通りです。

1. 依存関係をインストールします。
```npm install```
2. プロジェクトをビルドします。
```npm run build```
3. index.html をブラウザで開きます。

## 使用方法
DiscoveryPilot のインスタンスを作成するには、以下のようにします。

```
const questions = {
  name: "質問項目",
  question: "質問文",
  children: [
    { question: "選択肢1", children: [...] },
    { question: "選択肢2", children: [...] }
    // その他の選択肢...
  ]
};

new DiscoveryPilot("questionnaire", questions);
```

HTML ファイルでは、質問が表示されるコンテナを指定するために、以下のような要素を含める必要があります。

```
<div id="questionnaire"></div>
```