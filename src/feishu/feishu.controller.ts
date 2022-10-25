import { Controller } from '@nestjs/common';
import { FeishuService } from './feishu.service';

@Controller('feishu')
export class FeishuController {
  constructor(private readonly feishuService: FeishuService) {}
}
