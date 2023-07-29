export const filterData = (txt) => {
    return restaurants.filter((restaurant) =>
      restaurant?.info.name.includes(txt)
    );
  };
  