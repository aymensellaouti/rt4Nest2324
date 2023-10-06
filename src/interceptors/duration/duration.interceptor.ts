import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class DurationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    /* Avant d'accéder au handler */
    const start = new Date().getMilliseconds();
    return next.handle().pipe(
      tap((data) => {
        /* On envoi la réponse */
        console.log(
          `La durée de la requête est : ${
            new Date().getMilliseconds() - start
          } ms`,
        );
        console.log({ data });
      }),
    );
  }
}
