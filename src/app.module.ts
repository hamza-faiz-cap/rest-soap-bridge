import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoapModule } from 'nestjs-soap';

@Module({
  imports: [SoapModule.register({
      clientName: 'SPRING_SOAP_CLIENT',
      uri: 'http://MALFK0700000508:8088/mockCalculatorSoap?wsdl', // spring SOAP WSDL endpoint
    }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
