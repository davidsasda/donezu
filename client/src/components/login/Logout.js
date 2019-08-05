import React from 'react';

const Logout = () => {
  return (
    <div>
      <button
        onClick={() => (document.cookie = 'jwt' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;', window.location.reload(false))}
      >Logout</button>
    </div>
  )
}

export default Logout;