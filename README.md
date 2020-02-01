# Svelte-war
Это демо проект игры на фреймворке Svelte
###Клонируем шаблон для разработки

`git clone https://github.com/sveltejs/template.git`

###Устанавливаем зависимости.

```
cd template/
npm i
```


###Запускаем dev сервер.

`npm run dev`

Наш шаблон доступен по адресу
http://localhost:5000. Сервер поддерживает hot reload, поэтому наши изменения будут видны в браузере по мере сохранения изменений.

Если вы не хотите разворачивать среду локально, то можете использовать онлайн песочницы codesandbox и stackblitz, которые поддерживают Svelte.



## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
