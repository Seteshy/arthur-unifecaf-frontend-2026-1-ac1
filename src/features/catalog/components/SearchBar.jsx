export function SearchBar({ search, setSearch }) {
    return (
        <search>
            <label htmlFor="busca" className="sr-only">
                Buscar produto
            </label>
        <input
            id="busca"
            type="search"
            placeholder="Buscar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        </search>
    );
}