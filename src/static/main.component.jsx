//*! // -------- React --------------------------------------------------------- */
import React, { useState } from 'react';

import ModalComponent from '../components/modal.component';

//*! // -------- Componente funcional ------------------------------------------ */
const MainComponent = () => {
	// --------- Estados
	// Muestra el modal cuando el estado es diferente a null
	const [ modal, setModal ] = useState(null);

	// --------- Manejadores
	// Cambia el estado del modal
	const handleClick = mod => setModal(mod);

	// --------- Elementos del componente / Render React
	return (
		<div className="container-buttons">
			<button onClick={ () => handleClick('modal_1') }>Open Modal</button>
			{ modal && (
				<ModalComponent handleClick={handleClick}>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ul>
				</ModalComponent>
			)}
		</div>
	);
};
//*! // -------- Exportando el componente -------------------------------------- */
export default MainComponent;