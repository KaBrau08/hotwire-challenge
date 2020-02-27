//*! // -------- React --------------------------------------------------------- */
import React, { useRef } from 'react';

//*! // -------- Componente funcional ------------------------------------------ */
const ModalComponent = props => {
	// --------- Propiedades
	const { children, handleClick } = props;

	// --------- Referencias
	const modal = useRef(null);

	// --------- Manejadores
	const handleClose = () => {
		// Capturo el contenedor del modal
		const { current } = modal;
		// Agrego la clase de salida
		current.classList.add('modal-out');
		// Desaparezco el modal en cuanto termine la animación
		setTimeout(() => handleClick(null), 400);
	};

	// --------- Elementos del componente / Render React
	return (
		<div className="modal-container" ref={modal}>
			<div className="modal-wrapper">
				<div className="modal-mask" onClick={handleClose} />
				<div className="modal-box">
					<div className="close-button" onClick={handleClose}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};
//*! // -------- Exportando el componente -------------------------------------- */
export default ModalComponent;