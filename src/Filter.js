function Filter({ list, filterFn, children }) {
  const filtered = list.filter(filterFn);
  return children(filtered);
}

export default Filter;
