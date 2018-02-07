import React from 'react';

const Sort = ({handleSortChange}) => {
  return (
    <div>
    <label>Sort By:</label>
    <select
      onChange={handleSortChange}
      defaultValue='mostRecent'>
          <option value='mostRecent'>Most Recent</option>
          <option value='name'>Name</option>
    </select>
    </div>
  )
}

export default Sort;
