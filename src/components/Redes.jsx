import PropTypes from 'prop-types'

export const Redes = ({icons}) => {
  return (
		<div className='redes'>
			{icons.map((icon, key) => (
				<div key={key}>
					<a href="" className='logos'>
						<i className={icon} ></i>
					</a>
				</div>
			))}
		</div>
	);
};

Redes.propTypes = {
  icons: PropTypes.array,
};
