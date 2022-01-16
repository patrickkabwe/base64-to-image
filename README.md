# Convert Base64 to Image

## Installation

Using npm:

```shell
$ npm i convert-base64-to-image
```

Using yarn:

```shell
$ yarn add convert-base64-to-image
```

General usage:

```ts
import { converBase64ToImage } from 'convert-base64-to-image'

const base64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//'
const pathToSaveImage = '/public/image.png'

const path = converBase64ToImage(base64, pathToSaveImage) //returns path /public/image.png 
```

## Why use this package?
It allows you to upload files using the base64 string created by FileReader into your server.
