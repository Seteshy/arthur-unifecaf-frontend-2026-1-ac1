export function SearchBar({ search, setSearch }) {
    return (
        <div class="busca">
        <search>
            <label htmlFor="busca" className="sr-only">
                Buscar produto
            </label>
            <br></br>
        <input class= "buscainput"
            id="busca"
            type="search"
            placeholder="Buscar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        </search>
        </div>
    );
}