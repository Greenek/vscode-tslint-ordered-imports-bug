import { Observable } from 'rxjs';

import { a } from './a/a';
import { tap } from 'rxjs/operators';
import { b } from '@b/b';

console.log(a, b, tap);