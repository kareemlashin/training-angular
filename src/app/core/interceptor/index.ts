import { ErrorInterceptor } from './error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header.interceptor';
import { LoadingInterceptor } from './loading.interceptor';

export const Interceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor , multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor , multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor , multi: true },
];