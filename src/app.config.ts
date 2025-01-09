import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideHttpClient} from "@angular/common/http";
import {provideEffects} from "@ngrx/effects";
import {provideRouter} from "@angular/router";
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {TodoEffect} from "./app/store/todo-state/todo.effect";
import {routes} from "./app/app-routing.module";
import {appReducers, metaReducers} from "./app/store/app-state/app.reducer";


export const appConfig:ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(appReducers, { metaReducers }),
    provideStoreDevtools({ maxAge: 25 }),
    provideEffects([TodoEffect]),
    provideHttpClient()
  ]
}
