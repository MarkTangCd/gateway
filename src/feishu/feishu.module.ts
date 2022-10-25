import { Module } from '@nestjs/common';
import { FeishuService } from './feishu.service';
import { FeishuController } from './feishu.controller';

@Module({
  controllers: [FeishuController],
  providers: [FeishuService]
})
export class FeishuModule {}
