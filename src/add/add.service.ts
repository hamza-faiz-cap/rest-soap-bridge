import { Injectable, OnModuleInit } from '@nestjs/common';
import * as soap from 'soap';

@Injectable()
export class AddService implements OnModuleInit {
  private soapClient: soap.Client;

  async onModuleInit() {
    // Create and cache the SOAP client when module initializes
    this.soapClient = await soap.createClientAsync('http://MALFK0700000508:8088/mockCalculatorSoap?wsdl');
    // If you need authentication or special headers, configure them here.
    // Example:
    // this.soapClient.setSecurity(new soap.BasicAuthSecurity('username', 'password'));
  }

  async add(intA: number, intB: number): Promise<number> {
    // The method name must match the WSDL operation: e.g., 'Add'
    const [result] = await this.soapClient.AddAsync({ intA, intB });

    // Adjust based on your actual SOAP response structure
    return parseFloat(result.AddResult);
  }
}
