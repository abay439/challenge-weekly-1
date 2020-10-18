import React from 'react'

/*
  ubah component dibawah sesuai spesifikasi berikut:
  1.  ubah text dengan tulisan berikut
      [GANTI SAYA]
*/

function InputText() {
  /*
    callback dari onChange
    bisa menerima argument event
    argument event adalah sebuah object
    perhatikan bahwa tidak semua event memiliki
    target.value
  */

  function handleInputTextChange(e) {
    console.log(e.target.value)
  }

  /*
    attribut onChange menerima callback
    handleInputTextChange
  */
  return (
    <div>
      <h1>{}</h1>
      <input
        type="text"
        onChange={handleInputTextChange}
      />
    </div>
  )
}

export default InputText
