# 🎣 Jish - Forelle IO Web Client

<p align="center">
    <img width="250" src="./static/logos/Forelle.io.png">
</p>

SSR-приложение на [Vue](https://vuejs.org/) & [Nuxt](https://ru.nuxtjs.org/) для организации проведения рыбалок и кооперации между собой людей, интересующихся ловлей рыбы.

Ссылка: В процессе работы

## Зависимости

* Node.js LTS
* npm 6.x
* Nuxt 2.11.x

## Структура проекта
Название | Содержание файла | Подробнее
----------------|-----------------------|-----------------
package.json       | Файл с зависимостями проекта и npm-командами | [Package.json docs](https://docs.npmjs.com/files/package.json)
nuxt.config.ts       | Конфигурации Nuxt, Webpack и прочего для сборки | [Nuxt config docs](https://nuxtjs.org/guide/configuration)
api    | Обертки для работы с API | -
assets     | Ресурсы сайта: css, шрифты | -
components    | "Глупые" компоненты: формы, кнопки и прочее | -
layouts      | Шаблоны для сайта | -
pages    | Страницы сайта | [Nuxt pages](https://nuxtjs.org/guide/views)
plugins      | Nuxt-плагины | [Nuxt plugins](https://nuxtjs.org/guide/plugins)
static      | Статический файлы | [Nuxt static](https://nuxtjs.org/guide/assets#static)
store     | State-менеджер (Vuex) | [Redux docs](https://vuex.vuejs.org/ru/guide/)

## Окружение разработки

Устанавливаем node.js для Ubuntu. Для других систем смотрим [здесь](https://nodejs.org/en/download/package-manager/)
```shell
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs
```

Проверяем версию (Должна быть 10.x)
```shell
node -v
```

Клонируем репозиторий в любую папку
```shell
git clone https://github.com/forelle-io/jish
```

Заходим в папку проекта и устанавливаем зависимости
```shell
cd /path/to/repository
npm i
```

### Запуск локального сервера

Запуск сервера в режиме разработки
```shell
npm run dev
```

## Сборка
Запустить сборку  production-версии:
```shell
npm run build
```

