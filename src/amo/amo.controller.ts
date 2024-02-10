import { Controller, Post } from '@nestjs/common';
import { AmoService } from './amo.service';

@Controller('amo')
export class AmoController {
  constructor(private readonly amoService: AmoService) {}

  @Post('oauth/token')
  async getOAuthToken(clientId: string){
    const tokenInfo = await this.amoService.getOAuthToken(clientId);
    return tokenInfo;
  }

  @Post('create-entity')
  async createEntity(token: string, baseUrl: string, entity: string) {
    const entityId = await this.amoService.createEntity(entity, baseUrl, token);

    return { entityId };
  }
}
