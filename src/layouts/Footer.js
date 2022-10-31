import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

const Footer = () => {
  const vistaFooter = 


    
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
    <MDBContainer className='p-4'>
      <MDBRow>
        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase'>GRUPO G44</h5>

          <p>
          Gracias al Profesor Rodolfo Niño, UNAB y MINTIC nuevas puertas se nos abren para nuestro futuro 
          y un gran sueño comienza hacerse realidad.
          Este proyecto es producto de sus enseñanzas y guía. Hace apenas unos meses no 
          creíamos que podríamos llegar a desarrollar algo similar, lo cual nos emociona, 
          llenándonos de gran orgullo y esperanza. Solo nos queda decirle, ¡GRACIAS!.  </p>
        </MDBCol>

        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase'>integrantes</h5>

      <h6>Carime Carroll - Scrum Master </h6>
      <h6>Lolys Sabalza - Product Owner </h6>
      <h6>Stiven Parada - Director y Developer (Backend y Frontend)</h6>
      <h6>Eder Perez - Developer Backend</h6>
      <h6>jonathan Estiben - Developer Backend</h6>
      <h6>Noe - Bases de datos</h6>

          
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <MDBFooter className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a className='text-dark' href='https://unab.edu.co/'>
      CM El Quinto Elemento
      </a>
    </MDBFooter>
  </MDBFooter>
      
  return vistaFooter
};

export { Footer };
