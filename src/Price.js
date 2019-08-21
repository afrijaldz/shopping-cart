import PropTypes from 'prop-types'

function currency(amount) {
  return amount.toLocaleString('us', { style: 'currency', currency: 'USD' })
}

const Price = ({ amount }) => currency(Number(amount))

Price.propTypes = {
  amount: PropTypes.string.isRequired,
}

export default Price