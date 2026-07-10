import './StatItem1.css'

function StatItem1({ stat_value = '', stat_label = '', style_vars = {} }) {
  return (
    <div className="stat-item-1" style={style_vars}>
      <span className="stat-item-1__value">{stat_value}</span>
      <span className="stat-item-1__label">{stat_label}</span>
    </div>
  )
}

export default StatItem1
