import PropTypes from 'prop-types';

export const roomPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, 
  name: PropTypes.string.isRequired, 
  image: PropTypes.string,
  imageLg: PropTypes.string,
  size: PropTypes.number, 
  maxPerson: PropTypes.number, 
  description: PropTypes.string,   
  price: PropTypes.number,            
  facilities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired
    })
  )
});
