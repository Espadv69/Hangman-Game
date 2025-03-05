const CategorySelector = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-selector">
      <h2>Choose a Category</h2>
      <div className="categories">
        {categories.map((category) => (
          <button key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategorySelector
