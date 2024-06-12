import i18nConfig from "./i18nConfig";
// import Router from "next/router";
import { i18nRouter } from "next-i18n-router";

export function middleware(request) {
    return i18nRouter(request, i18nConfig)
}
export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
}