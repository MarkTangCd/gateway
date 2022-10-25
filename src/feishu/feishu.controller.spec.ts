import { Test, TestingModule } from '@nestjs/testing';
import { FeishuController } from './feishu.controller';
import { FeishuService } from './feishu.service';

describe('FeishuController', () => {
  let controller: FeishuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeishuController],
      providers: [FeishuService],
    }).compile();

    controller = module.get<FeishuController>(FeishuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
