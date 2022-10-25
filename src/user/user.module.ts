import { CacheModule, Module } from '@nestjs/common';
import { FeishuService } from '../feishu/feishu.service';
import { FeishuController } from '../feishu/feishu.controller';

@Module({
  imports: [
    CacheModule.register(),
  ],
  controllers: [FeishuController],
  providers: [FeishuService],
})
export class UserModule {}
