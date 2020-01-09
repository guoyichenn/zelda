import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { controllers } from "./modules/index";

@Module({
  imports: [],
  controllers: [AppController, ...controllers],
  providers: [AppService]
})
export class AppModule {}
