export function ProductCard({ name, price, category, image }) {
    return (
        <div className="product-card">
            {/*
                Apresente os dados de um produto
                - id : Todo produto tem um id, mas ele não precisa ser apresentado ao usuário
                
                Para os campos abaixo, talvez uma <div> poderá ser uma boa opção para apresentação
                - name : Nome do produto
                - price : Preço do produto
                - category Categoria do produto

                Utilize <img /> para apresentar uma imagem. As imagens dos produtos devem estar 
                dentro da pasta "/src/assets/images/"
                - image : Imagem do produto, exemplo: "/src/assets/images/produto.jpg"
            */}
            <img className="product-image" src={image} alt={name} />
            <div className="product-info">
            <h2 className="product-name">{name}</h2>
            <p className="product-category">{category}</p>
            <p className="product-price">
                {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            })}
            </p>
            </div>
        </div>
    );
}