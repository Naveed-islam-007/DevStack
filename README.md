Fetch data from api for displaying the technology type using async await.

 Selecting data from the fetched list by pressing the add button on the card and displaying them on a separate section using State properties of react.

After selecting the data and storing them we can also delete them all together by remove all button which clear the myStack and also individually by pressing X icon on the right side of each card by using .filter on the myStack memory.



QUESTIONS AND ANSWERS

1)i. JSX — a syntax extension letting you write HTML-like markup inside JavaScript. React uses it because it makes UI structure easier to read/write 

2) Props: data passed into a component from its parent — read-only, component can't         change them.
     State: data owned by the component itself — can change over time and triggers           re-renders when updated.

3) Lets a functional component hold and update local state. 

4)Runs side effects after render (data fetching, subscriptions, DOM stuff). You needed it to load JSON data because fetching is a side effect — it shouldn't run during render, and useEffect lets you trigger it once (or when dependencies change) after the component mounts 

5) React uses key to track which list items changed, were added, or removed, so it can update the DOM efficiently instead of re-rendering the whole list. Without unique keys, React can misidentify items, causing bugs 

6) Showing different UI based on a condition. Example:
{items.length === 0 ? (
  <p>No items found.</p>
) : (
  items.map(item => <Item key={item.id} data={item} />)
)}


7) Parent → Child: pass data as props.
<Child data={value} />
Child → Parent: parent passes a callback function as a prop; child calls it with data.
// Parent
<Child onUpdate={(val) => setValue(val)} />

// Child
props.onUpdate("new value");


