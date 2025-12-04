import * as fs from 'fs';
import * as path from 'path';

const moduleName = process.argv[2];
if (!moduleName) {
  console.error('❌ Usage: yarn add:module <moduleName>');
  process.exit(1);
}

// Capitalize first letter for class names
const className = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);

const moduleDir = path.join('src', moduleName);
fs.mkdirSync(moduleDir, { recursive: true });

// Service template (created first)
const serviceContent = `import { Injectable, Logger } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ${className}Service {
  private readonly logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger(${className}Service.name);
  }
}
`;

// Resolver template (created second)
const resolverContent = `import { Resolver } from '@nestjs/graphql';
import { ${className}Service } from './${moduleName}.service';

@Resolver()
export class ${className}Resolver {
  constructor(private readonly ${moduleName}Service: ${className}Service) {}
}
`;

// DTO template (created third)
const dtoContent = ``;

// Module template (created last - after service and resolver)
const moduleContent = `import { Module } from '@nestjs/common';
import { ${className}Service } from './${moduleName}.service';
import { ${className}Resolver } from './${moduleName}.resolver';

@Module({
  providers: [${className}Service, ${className}Resolver],
  exports: [${className}Service],
})
export class ${className}Module {}
`;

// Write files in order: service -> resolver -> dto -> module
fs.writeFileSync(
  path.join(moduleDir, `${moduleName}.service.ts`),
  serviceContent,
);
fs.writeFileSync(
  path.join(moduleDir, `${moduleName}.resolver.ts`),
  resolverContent,
);
fs.writeFileSync(path.join(moduleDir, `${moduleName}.dto.ts`), dtoContent);
fs.writeFileSync(
  path.join(moduleDir, `${moduleName}.module.ts`),
  moduleContent,
);

console.log(`✅ Created ${moduleName} module with boilerplate code`);
console.log(`   📁 src/${moduleName}/`);
console.log(`      - ${moduleName}.service.ts`);
console.log(`      - ${moduleName}.resolver.ts`);
console.log(`      - ${moduleName}.dto.ts`);
console.log(`      - ${moduleName}.module.ts`);
