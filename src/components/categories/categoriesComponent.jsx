import './categoriestyles.scss'
import CategoryItem from '../category-item/categoryItemComponent';

const Categories =({categories})=>{

    return(
        <div className='categories-container'>
        {categories.map((category) => (
          <CategoryItem key={category.id} categoryItem={category} />
        ))}
      </div>
    )
}

export default Categories;