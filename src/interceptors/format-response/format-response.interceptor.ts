import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
/*  1    2  3          4    8        9 */
@Injectable()
export class FormatResponseInterceptor implements NestInterceptor {
  //Avant le handler
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    /* Transformation lel flux */
    return next.handle().pipe(map((data) => ({ data })));
  }
}
