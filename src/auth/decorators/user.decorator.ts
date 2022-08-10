import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { User as UserClass } from 'src/entities/user.entity';

export const User = createParamDecorator((_, ctx: ExecutionContext) => {
  const user = ctx.switchToHttp().getRequest().user;
  if (!user || !(user instanceof UserClass))
    throw new Error('User not found in request!');
  return user as UserClass;
});
