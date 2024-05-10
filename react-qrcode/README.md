## React + Vite

### インストール

```bash
npm i qrcode.react
```

### 実装

```javascript
import { QRCodeSVG } from 'qrcode.react';
// or import {QRCodeCanvas} from 'qrcode.react';
import { FC } from "react";


const QRCode: FC<{url: string}> = ({url}) => {
  return (
    <QRCodeSVG
      value={url}
      size={128}
      bgColor={"#FF0000"}
      fgColor={"#FFC0CB"}
      level={"L"}
      includeMargin={false}
      imageSettings={{
        src: "/favicon.ico",
        x: undefined,
        y: undefined,
        height: 24,
        width: 24,
        excavate: true,
      }}
    />
  );
};

export default QRCode;
```

---

### Props

|項目|タイプ|デフォルト値|備考|
|:----|:----|:----|:----|
|value|string| |URLの値|
|renderAs|string ('canvas' 'svg')|'canvas'|描画される方法|
|size|number|128|描画されるQRCodeの縦と横のサイズ|
|bgColor|string|#FFFFFF|CSS color|
|fgColor|string|#000000|CSS color|
|level|string ('L' 'M' 'Q' 'H')|'L'|[Error Level.](https://rfidunion.com/ja/information/qr-code-error-correction.html)  L < M < Q < H|
|marginSize|number|0|シンボルの周囲のマージンに使用するモジュールの数を指定します。|
|imageSettings|object|-|[下記参照](#imagesettings)|

<br>

### imageSettings

|項目|タイプ|デフォルト値|備考|
|:----|:----|:----|:----|
|src|string| |画像のURL|
|x|number|none|中央に位置する場合は `undefined` を利用|
|y|number|none|中央に位置する場合は `undefined` を利用|
|height|number|10% of size|画像の縦サイズ|
|width|number|10% of size|画像の横サイズ|
|excavate|boolean|false|trueの場合は画像の周りの縁を作る|

### 参考URL

- [ReactでQRCodeを生成 (zenn.dev)](https://zenn.dev/hayato94087/articles/fdb9fb357a22c3)
