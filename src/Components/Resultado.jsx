import styled from'@emotion/styled'

const Contenedor = styled.div`
        color :#fff;
        font-family: 'Lato', san-serif ;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 30px;
`
const Imagen = styled.img`
        display: block;
        width: 120px;
`
const Texto =styled.p`
        font-size: 18px ;
        span{
            font-weight: 700;
        }
`
const Precio = styled.p`
        font-size: 24px ;
        span{
            font-weight: 700;
        }
`

const Resultado = ({resultado}) => {
    const { PRICE , HIGHDAY,LOWDAY, IMAGEURL ,CHANGEPCT24HOUR, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt="imagen cripto"
        />
        <div>
            <Precio> El precio es de: <span>{PRICE}</span> </Precio>
            <Texto> El precio mas alto del Dia:  <span>{HIGHDAY}</span> </Texto>
            <Texto> El precio mas Bajo del Dia es de: <span>{LOWDAY}</span> </Texto>
            <Texto> Cambio en las Ultimas 24 hrs: <span>{CHANGEPCT24HOUR}</span> </Texto>
            <Texto> Ultima actualizacion: <span>{LASTUPDATE}</span> </Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado
