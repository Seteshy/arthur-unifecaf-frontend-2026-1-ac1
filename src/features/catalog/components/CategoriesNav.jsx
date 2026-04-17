export function CategoriesNav({ categories, selectedCategory, onSelect }) {
  return (
    <nav className="category-menu" aria-label="Filtro por categoria">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "active" : ""}
          onClick={() => onSelect(category)}
          aria-pressed={category === selectedCategory}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}