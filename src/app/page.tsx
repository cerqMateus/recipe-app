import recipes from "../backend/recipes.json";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* {recipes.receitas.map((receita, idx) => (
        <div key={idx} className="w-full max-w-md p-4 border rounded shadow">
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
      ))} */}
    </div>
  );
}
