import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import recipesData from '../src/backend/recipes.json';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Starting seed...');

    for (const receita of recipesData.receitas) {
        await prisma.recipe.create({
            data: {
                nome: receita.nome,
                descricao: receita.descricao,
                ingredientes: receita.ingredientes,
                modoPreparo: receita.modoPreparo,
                informacoesAdicionais: receita.informacoesAdicionais,
                imageURL: receita.imageURL,
                isFavorite: false,
            },
        });
        console.log(`Created recipe: ${receita.nome}`);
    }

    console.log('Seed completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
