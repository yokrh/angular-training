# Angular training

Angular練習メモ

* Angular

    https://angular.jp/docs


## Command

`npm install -g @angular/cli` が嫌だったので `npm install @angular/cli` にしている。

なので、`ng hogehoge` が以下メモでは `npm run ng hogehoge` なのだけ注意。

### Setup

```sh
# add gitignore
echo 'node_modules/' >> .gitignore

# install angular-cli localy (without -g)
npm init -y
npm install @angular/cli
# add a npm script "ng" for angular-cli (not necessary if use -g before)
sed -e 's/"scripts": {/"scripts": {\\\n  "ng": "ng",/g' package.json | sed -e 's/\\n/\
  /g' > tmp-package.json
cp tmp-package.json package.json
rm tmp-package.json

# run angular-cli
npm run ng new my-app
# Angular routing -> y
# Select favorite CSS
# ...

# move to app main directory
cd my-app
# and check package.json

# run the local server
npm run start
# check http://localhost:4200/ works and quit with ctrl+c
```

### Create component

```sh
npm run ng generate component home
npm run ng generate component about
# See the result in src/app directory
# also, check app.module.ts contains new components
```

#### Create sub-component
```sh
npm run ng generate component home/title
```


## Routing

https://angular.jp/guide/router

ルートコンポーネントのtemplateにrouter-outletタグ追加。

`app.component.ts`
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'my-app';
}
```

ルーティングパス設定をroutes変数に追加。

`app-routing.module.ts`
```js
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

routeLinkを各ページに追加。

`home.component.html`
```html
<p>home works!</p>

<a routerLink="about" class="router-link">about</a>
<a routerLink="/about" class="router-link">/about</a>
<a routerLink="/404" class="router-link">404</a>
```
`home.component.css`
```css
.router-link {
  display: block;
  margin: 20px;
}
```

`about.component.html`
```html
<p>about works!</p>

<a routerLink=".." class="router-link">..</a>
<a routerLink="/" class="router-link">home</a>
```
`about.component.css`
```css
.router-link {
  display: block;
  margin: 20px;
  color: green;
}
```
