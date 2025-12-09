import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const recipe = await prisma.recipe.findUnique({
            where: { id },
        });

        if (!recipe) {
            return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
        }

        return NextResponse.json(recipe);
    } catch (error) {
        console.error('Error fetching recipe:', error);
        return NextResponse.json({ error: 'Failed to fetch recipe' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();

        const recipe = await prisma.recipe.update({
            where: { id },
            data: {
                nome: body.nome,
                descricao: body.descricao,
                ingredientes: body.ingredientes,
                modoPreparo: body.modoPreparo,
                informacoesAdicionais: body.informacoesAdicionais,
                imageURL: body.imageURL,
                isFavorite: body.isFavorite,
            },
        });

        return NextResponse.json(recipe);
    } catch (error) {
        console.error('Error updating recipe:', error);
        return NextResponse.json({ error: 'Failed to update recipe' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.recipe.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        return NextResponse.json({ error: 'Failed to delete recipe' }, { status: 500 });
    }
}
