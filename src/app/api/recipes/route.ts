import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const recipes = await prisma.recipe.findMany({
            orderBy: {
                createdAt: 'asc',
            },
        });
        return NextResponse.json({ receitas: recipes });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return NextResponse.json({ error: 'Failed to fetch recipes' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const recipe = await prisma.recipe.create({
            data: {
                nome: body.nome,
                descricao: body.descricao,
                ingredientes: body.ingredientes,
                modoPreparo: body.modoPreparo,
                informacoesAdicionais: body.informacoesAdicionais,
                imageURL: body.imageURL,
                isFavorite: body.isFavorite ?? false,
            },
        });
        return NextResponse.json(recipe, { status: 201 });
    } catch (error) {
        console.error('Error creating recipe:', error);
        return NextResponse.json({ error: 'Failed to create recipe' }, { status: 500 });
    }
}
