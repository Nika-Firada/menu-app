import { useState } from "react";
import items from './data';
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ['all',...new Set(items.map(item => item.category))];
function App() {

  const [menuItems, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItem(items)
      return;
    }
    const newItems = items.filter(item => item.category === category)
    setMenuItem(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories cat={categories} filtered={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
