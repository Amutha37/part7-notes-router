import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  Togglable.displayName = 'Togglable'

  const hideLoginInput = { display: visible ? 'none' : '' }
  const showLoginInput = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
  }

  // === assign toggleVisibility for external use ===

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    }
  })

  return (
    <div className='login_form_container'>
      <div style={hideLoginInput}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showLoginInput} className='togglableContent'>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
})

export default Togglable
