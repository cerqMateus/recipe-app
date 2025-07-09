import Image from "next/image";
import recipes from "../backend/recipes.json";

export default function Home() {
  return (
    <div className="gap-16 w-full">
      {recipes.receitas.map((receita, idx) => (
        <div key={idx} className="w-full bg max-w-md p-4 border rounded shadow">
          <img
            src={receita.imageURL}
            alt={receita.nome}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{receita.nome}</h2>
          <p className="mb-2">{receita.descricao}</p>
          <h3 className="font-semibold">Ingredientes:</h3>
          <ul className="list-disc list-inside mb-2">
            {receita.ingredientes.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <h3 className="font-semibold">Modo de Preparo:</h3>
          <ol className="list-decimal list-inside mb-2">
            {receita.modoPreparo.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <p className="text-sm text-gray-600">
            {receita.informacoesAdicionais}
          </p>
        </div>
      ))}
    </div>
  );
}
