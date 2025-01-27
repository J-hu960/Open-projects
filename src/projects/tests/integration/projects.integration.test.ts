import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from '../../projects.controller';
import { ProjectsService } from '../../projects.service';
import { CreateProjectDto } from '../../dto/create-project.dto';
import { ConfigService } from '@nestjs/config';
import Request from 'supertest' 
import { INestApplication } from '@nestjs/common';
import { AppModule } from 'src/app.module';


describe('Integration test for projects controller', () => {
    let app: INestApplication;

  beforeAll(async () => {
    // Crea el módulo de pruebas basado en tu AppModule
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // Inicializa la aplicación NestJS
    app = moduleFixture.createNestApplication();
    await app.init(); // Asegúrate de inicializar la aplicación
  });

  afterAll(async () => {
    // Cierra la aplicación después de las pruebas
    await app.close();
  });
 
 

    describe('Get Projects', () => {
   
    it('should return 200 and all projects matching title and tech stack', async () => {
      const response = await Request(app.getHttpServer()) // Obtén el servidor de HTTP subyacente
        .get('/api/projects?title=W&stack=HTML,CSS')
        .set('Content-Type', 'application/json');
  
      // Realiza las aserciones
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
   });
});
