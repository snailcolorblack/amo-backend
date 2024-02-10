import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AmoService {

    async getOAuthToken(clientId: string) {
        const response = await axios.get(`https://test.gnzs.ru/oauth/get-token.php`, {
            headers: {
                'X-Client-Id': clientId,
            },
        });

        return response.data;
    }


    async createEntity(entity: string, token: string, baseUrl:string) {
        const response = await axios.post(`https://${baseUrl}/api/v4/${entity}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        return response.data.id;
    }
}
