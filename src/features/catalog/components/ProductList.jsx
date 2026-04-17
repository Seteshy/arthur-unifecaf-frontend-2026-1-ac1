import { ProductCard } from "./ProductCard";

export function ProductList({ products }) {
    return (
        <section className="product-list">
            {/*
                Crie um mapa de proucts onde cada produto será 
                carregado em um componente ProductCard.
                Por estar dentro de um map, é necessário
                adicionar o atributo key para que o React
                consiga distinguir cada elemento customizado

                <ProductCard key={product.id} {...product} />
            */
            products.map((product) => (
            <ProductCard key={product.id} {...product} />
            ))}
        </section>
    );
}