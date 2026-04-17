import { useState } from "react";
import productsData from "./data/products.json";
import { SearchBar } from "./components/SearchBar";
import { ProductList } from "./components/ProductList";
import { CategoriesNav } from "./components/CategoriesNav";

export function CatalogPage() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");

    const categories = [
        "Todas",
        ...new Set(productsData.map((p) => p.category)),
    ];

    function filterProducts(search, selectedCategory) {
        /*
           Crie uma função para filtrar os produtos.
           Ela deve:
           - receber a lista de produtos, o texto de busca e a categoria selecionada
           - retornar apenas os produtos cujo nome contenha o texto de busca
             (comparação sem diferenciar maiúsculas/minúsculas)
           - retornar todos os produtos quando a categoria selecionada for "Todas"
           - retornar apenas produtos da categoria selecionada caso contrário
        */
        return productsData.filter((product) => {
            const matchesSearch = product.name
                .toLowerCase()
                .includes(search.toLowerCase());
        const matchesCategory =
            selectedCategory === "Todas" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
        });
    }

    const filteredProducts = filterProducts(search, selectedCategory);

    return (
        <main style={{ padding: "20px" }}>
            <h1>Loja de Produtos</h1>

            <CategoriesNav
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
            />

        <SearchBar search={search} setSearch={setSearch} />
        <ProductList products={filteredProducts} />
        </main>
    );
}