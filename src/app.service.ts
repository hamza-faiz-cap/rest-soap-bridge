import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Injectable()
export class AppService {
    constructor(
    @Inject('SPRING_SOAP_CLIENT') private readonly soapClient: Client
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
  async add(intA: number, intB: number): Promise<number> {
    const [result] = await this.soapClient.AddAsync({ intA, intB });
    // Adjust according to returned SOAP structure
    return parseFloat(result.AddResult);
  }

}
